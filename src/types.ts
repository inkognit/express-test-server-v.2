export type TSignIn = {
    nickname: string;
    password: string;
};

export type TSignUp = TSignIn & {
    email: string;
};
