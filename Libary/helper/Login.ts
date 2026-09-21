import { LinkURL, Account } from '../../Data/account';
import {  LoginPage } from '../page/Login';
import { expect } from '@playwright/test';

export class LoginHelper {
    constructor(private loginPage: LoginPage) {}
    async login(username : string , password :string): Promise<void> {
        await this.loginPage.usernameInput.pressSequentially(username);
        await this.loginPage.passwordInput.pressSequentially(password);
        await this.loginPage.loginButton.click();
    }

}