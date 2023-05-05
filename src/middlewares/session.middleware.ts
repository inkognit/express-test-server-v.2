import { PrismaClient } from '@prisma/client';
import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

import { TPayload, TypedRequestBody } from '../types';

const prisma = new PrismaClient();

export const auth_guard = async (
    req: TypedRequestBody<any>,
    res: Response,
    next: NextFunction,
) => {
    const { authorization } = req.headers;
    const salt = process.env.SALT_JWT;
    if (!salt) {
        return res
            .status(403)
            .send({ message: 'Forbidden. Can`t find env.SALT_JWT' });
    }
    if (!authorization) {
        return res
            .status(403)
            .send({ message: 'Forbidden. You don`t you are not authorized' });
    }
    try {
        jwt.verify(authorization, Buffer.from(salt));
        const payload = jwt.decode(authorization) as TPayload;
        req.headers['user_id'] = String(payload.user_id);
        return next();
    } catch (error: any) {
        if (error.expiredAt) {
            if (req.headers?.authorization) {
                const result = jwt.decode(authorization);
                if (result && typeof result === 'object' && result.user_id) {
                    let user_id: number = result.user_id;
                    const token = await prisma.user.findFirst({
                        where: {
                            id: result.user_id,
                            session: {
                                some: {
                                    access_token: authorization,
                                    isUsing: false,
                                },
                            },
                        },
                        select: {
                            session: {
                                select: { id: true, refresh_token: true },
                            },
                        },
                    });
                    if (!token?.session[0].refresh_token) {
                        return res.status(403).send({ message: 'Forbidden' });
                    }
                    try {
                        jwt.verify(token.session[0].refresh_token, salt);
                        const new_access_token = jwt.sign({ user_id }, salt, {
                            expiresIn: '30 min',
                        });
                        await Promise.all([
                            prisma.sessions.update({
                                where: {
                                    id: token.session[0].id,
                                },
                                data: { isUsing: true },
                            }),
                            prisma.sessions.create({
                                data: {
                                    userId: result.user_id,
                                    refresh_token:
                                        token.session[0].refresh_token,
                                    access_token: new_access_token,
                                },
                            }),
                        ]);
                        req.headers['authorization'] = new_access_token;
                        return next();
                    } catch (error) {
                        return res.status(403).send({ message: 'Forbidden' });
                    }
                }
            }
        }
        return res.status(403).send({ message: 'Forbidden' });
    }
};
