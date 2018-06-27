export class AuthService {
    private loggedIn: boolean = false;

    isAuthenticated(): Promise<boolean> {
        return new Promise<boolean>((resolve, rejected) => {
            setTimeout(() => {
                return resolve(this.loggedIn)
            }
                , 1)
        })
    }

    login() {
        this.loggedIn = true;
    }

    logout() {
        this.loggedIn = false;
    }

}