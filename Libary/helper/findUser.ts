import { expect } from '@playwright/test';
import { SystemUsers_page } from '../page/option/admin';


type UserData = {
    username: string;
};

export class UserHelper {
    constructor(private systemUsersPage: SystemUsers_page) {}
    async findUser(user: UserData): Promise<void> {
        await this.systemUsersPage.username_filter_input.pressSequentially(`${user.username}123`);
        await this.systemUsersPage.search_btn.click();
        
    }

    

    async editUser(user: UserData): Promise<void> {
        await this.systemUsersPage.username_filter_input.pressSequentially(user.username);
        await this.systemUsersPage.search_btn.click();
        
        await this.systemUsersPage.edit_btn.click();
        
        await this.systemUsersPage.username_input_edit.click();
        await this.systemUsersPage.username_input_edit.clear();
        await this.systemUsersPage.username_input_edit.pressSequentially(`${user.username}123`);
        await this.systemUsersPage.save_edit_btn.click();
        
    }

    async deleteUser(user: UserData): Promise<void> {
        await this.systemUsersPage.username_filter_input.pressSequentially(`${user.username}123`);
        await this.systemUsersPage.search_btn.click();
        await this.systemUsersPage.page.locator(`div.oxd-table-cell > div.oxd-table-cell-actions > button.oxd-icon-button`).first().click();
        await this.systemUsersPage.page.getByRole('button', { name: 'Yes, Delete' }).click();
    }
}

