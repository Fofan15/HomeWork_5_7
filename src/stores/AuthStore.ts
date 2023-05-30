import { makeAutoObservable} from "mobx";
import * as authApi from "../api/modules/auth";

class AuthStore {
    token = "";
    id = "";
    error = ""

    constructor() {
        makeAutoObservable(this);
    }

    async login(email: string, password: string) {
        const result = await authApi.login({email, password});
        this.token = result.token;
        this.error = result.error;
    }

    async registration(email: string, password: string) {
        const result = await authApi.registration({email, password});
        this.token = result.token;
        this.id = result.id;
        this.error =  result.error;
        
    }

    async logout() {
        
        this.token = "";
        this.error = "";
    }
}

export default AuthStore;