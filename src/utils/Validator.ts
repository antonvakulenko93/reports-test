import {ValidationRules} from '@/interfaces';


class Validator {
    public readonly email: ValidationRules = {
        required: (v: string) => !!v || 'E-mail is required',
        valid: (v: string) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    };
    public readonly password: ValidationRules = {
        required: (v: string) => !!v || 'Password is required',
    }
}

export default new Validator();
