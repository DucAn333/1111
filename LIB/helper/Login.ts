import { LinkURL, Account } from '../../Data/account';
import {  LoginPage } from '../page/Login';

export class LoginHelper {
    constructor(private loginPage: LoginPage) {}
    async goto_URL(): Promise<void> {
        await this.loginPage.page.goto(LinkURL);
    }
    async login(): Promise<void> {
        await this.loginPage.usernameInput.pressSequentially(Account[0].username);
        await this.loginPage.passwordInput.pressSequentially(Account[0].password);
        await this.loginPage.loginButton.click({timeout: 5000});
    }
    async ForgetPassword(): Promise<void> {
        await this.loginPage.forgotPasswordLink.click({timeout: 5000});
        
    }

}