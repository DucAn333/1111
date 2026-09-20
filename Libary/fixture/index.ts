import { test as baseTest } from '@playwright/test';
import { LoginPage } from '../page/Login';
import { LoginHelper } from '../helper/Login';
import { getLinkHelper } from '../helper/goToLink';
import { ForgotPassword_page } from '../page/forgetPass';
import { requestPasswordHelper } from '../helper/requestPass';
import { MainMenu_page } from '../page/mainMenu';
import { choseMenuHelper } from '../helper/choseMenu';
import { addUserHelper } from '../helper/addEmployee';
import { SystemUsers_page } from '../page/option/admin';
import { createEmployee } from '../helper/createEmployee';
import {EmployeeList_page } from '../page/option/PIM'
export  { expect } from '@playwright/test';


export type indexFixture = {
loginPage: LoginPage;
forgotPasswordPage: ForgotPassword_page ;
mainMenuPage: MainMenu_page;
loginHelper: LoginHelper;
getLinkHelper: getLinkHelper;
forgotPasswordHelper: requestPasswordHelper;
choseMenuHelper: choseMenuHelper;
addUserHelper: addUserHelper;
SystemUsersPage: SystemUsers_page;
createEmployee : createEmployee;
EmployeeList_page : EmployeeList_page;
}
export const test = baseTest.extend<indexFixture>({
    // URL
    getLinkHelper: async ({ page }, use) => {
        const linkHelper = new getLinkHelper(page);
        await use(linkHelper);
    },
    // page
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },
    forgotPasswordPage: async ({ page }, use) => {
        const forgotPasswordPage = new ForgotPassword_page(page);
        await use(forgotPasswordPage);
    },
    mainMenuPage: async ({ page }, use) => {
        const mainMenuPage = new MainMenu_page(page);
        await use(mainMenuPage);
    },
    SystemUsersPage: async({page}, use) =>{
        const systemUsersPage = new SystemUsers_page(page);
        await use(systemUsersPage);
    },
    EmployeeList_page: async ({ page }, use) => {
        const employeeListPage = new EmployeeList_page(page);
        await use(employeeListPage);
    },
    

    // helper
    loginHelper: async ({ loginPage }, use) => {
        const loginHelper = new LoginHelper(loginPage);
        await use(loginHelper);
    },
    forgotPasswordHelper: async ({ forgotPasswordPage }, use) => {
        const forgotPasswordHelper = new requestPasswordHelper(forgotPasswordPage);
        await use(forgotPasswordHelper);
    },
    choseMenuHelper: async ({ mainMenuPage }, use) => {
        const menuHelper = new choseMenuHelper(mainMenuPage);
        await use(menuHelper);
    },
    addUserHelper: async ({ page }, use) => {
        const employeeHelper = new addUserHelper(new SystemUsers_page(page));
        await use(employeeHelper);
    },
    createEmployee: async ({ page }, use) => {
         const employeeCreator = new createEmployee(new EmployeeList_page(page));
         await use(employeeCreator);
    },
});