import { test as baseTest } from '@playwright/test';
export  { expect} from '@playwright/test';
import {  LoginPage } from '../page/Login';
import { LoginHelper } from '../helper/Login';

export type indexFixture = {
loginPage: LoginPage;
loginHelper: LoginHelper;
}
export const test = baseTest.extend<indexFixture>({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },
    loginHelper: async ({ loginPage }, use) => {
        const loginHelper = new LoginHelper(loginPage);
        await use(loginHelper);
    },
}
);