import jwt from 'jsonwebtoken';

export const auth_guard = async (req: any, res: any, next: any) => {
    const token = req.headers['session'];
    const salt = process.env.SALT_JWT;
    if (!salt) return res.send({ message: 'Forbidden' }).code(403);
    try {
        jwt.verify(token, Buffer.from(salt));
        return next();
    } catch (error) {
        return res.send({ message: 'Forbidden' }).code(403);
    }
};
