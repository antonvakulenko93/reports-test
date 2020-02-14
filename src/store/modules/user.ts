import {Getters, Mutations, Actions, Module, createMapper} from 'vuex-smart-module';
import {LoginCredentials, User} from '@/interfaces';
import {Store} from 'vuex';
import API from '@/services/api';
import router from '@/router';

class UserState {
    public user: User | null = null;
}

class UserGetters extends Getters<UserState>{

}

class UserMutations extends Mutations<UserState> {
    public setUser(user: User) {
        this.state.user = { ...user};
    }

}

class UserActions extends Actions<UserState, UserGetters, UserMutations> {
    private store: Store<any> | null = null;
    public $init(store: Store<any>): void {
        this.store = store;
    }

    public async login({ username, password }: LoginCredentials): Promise<void> {
        const { name, id, token } = await API.login(username, password);
        localStorage.setItem('access_token', token);
        this.mutations.setUser({ name, id, username });
        await router.push('list');
    }
}

export const UserModule = new Module({
    state: UserState,
    mutations: UserMutations,
    actions: UserActions,
});

export const UserMapper = createMapper(UserModule);
