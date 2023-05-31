import AuthStore from "../stores/AuthStore";
import UserStore from "../stores/UserStore";

export interface IAppStore {
    'authStore': AuthStore,
    'userStore': UserStore
}