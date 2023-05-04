import { TSignIn, TSignUp } from '../../types';
import { sign_in, sign_up } from './servise.user';

export const sign_in_controller = async (req: any, res: any) => {
    try {
        const data: TSignIn = req.body;
        const session = await sign_in(data);
        return res.send(JSON.stringify({ session }));
    } catch (error: any) {
        return res.send(JSON.stringify({ message: error.message || error }));
    }
};

export const sign_up_controller = async (req: any, res: any) => {
    try {
        const data: TSignUp = req.body;
        await sign_up(data);
        return res.send(
            JSON.stringify({ message: 'Регистрация прошла успешно' }),
        );
    } catch (error: any) {
        return res.send(JSON.stringify({ message: error.message || error }));
    }
};
