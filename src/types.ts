import { NextFunction, Request, Response } from 'express';

export interface TypedRequestBody<T> extends Request {
    body: T;
}

export type TPayload = {
    user_id: number;
};

export type TSignIn = {
    nickname: string;
    password: string;
};

export type TSignUp = TSignIn & {
    email: string;
};
