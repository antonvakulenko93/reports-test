export type ValidateFunction = (value: any) => boolean | string;

export interface ValidationRules {
    [key: string]: ValidateFunction;
}

export interface User {
    id: number;
    username: string;
    name: string;
}

export interface LoginCredentials {
    username: string;
    password: string;
}