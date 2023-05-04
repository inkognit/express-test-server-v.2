import { PrismaClient } from '@prisma/client';
import argon2 from 'argon2';

import { TSignIn, TSignUp } from '../../types';

const prisma = new PrismaClient();

export const sign_in = async (data: TSignIn) => {
    const user = await prisma.user.findUnique({
        where: { nickname: data.nickname },
    });
};

export const sign_up = async (data: TSignUp) => {
    const chek_values = await prisma.user.findFirst({
        where: {
            OR: [{ email: data.email }, { nickname: data.nickname }],
        },
    });
    if (chek_values) throw { message: 'такие логин или email заняты' };
    const hash = await argon2.hash(data.password, {
        salt: Buffer.from(process.env.SALT_PASSWORD || 'SALT_PASSWORD'),
    });
    return prisma.user.create({ data: { ...data, password: hash } });
};
