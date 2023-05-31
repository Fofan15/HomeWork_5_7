import { makeAutoObservable } from "mobx";
import AuthStore from "../../stores/AuthStore";


class RegistrationStore {

    private registerStore: AuthStore;

    email = '';
    password = '';
    error = '';
    isLoading = false;

    constructor(registerStore: AuthStore) {
        this.registerStore = registerStore;
        makeAutoObservable(this);
    }

    changeEmail(email: string) {
        this.email = email;
        if (!this.email) {
            this.error = "Missing email";
        }
    }

    changePassword(password: string) {
        this.password = password;
        if (!this.password) {
            this.error = 'Missing password';
        }
    }

    async registration() {
        try {
            this.isLoading = true;
           await this.registerStore.registration(this.email, this.password);
        }
        catch (e) {
            this.isLoading = false;
        }
       
    }
    async logout(){
        try {
            await this.registerStore.logout();     
        }
        catch (e) {
        }
        this.isLoading = false;
    }
}

export default RegistrationStore;