import { SystemUsers_page } from '../page/option/admin';

type EmployeeData = {
    user_role: string;
    employee_name: string;
    status: string;
    username: string;
    password: string;
    confirm_password: string;
    expected: boolean;
    save: boolean;
};

export class addUserHelper {constructor(private SystemUsers_page: SystemUsers_page) {}
     async addUser(user: EmployeeData): Promise<void> {
        await this.SystemUsers_page.add_btn.click();
        if (user.user_role){
            await this.SystemUsers_page.add_user_role_dropdown.click();
            await this.SystemUsers_page.page.getByRole('option', { name: `${user.user_role}` }).click();
        }
        if (user.employee_name){
            await this.SystemUsers_page.add_employee_name_input.pressSequentially(user.employee_name);
            const Option = this.SystemUsers_page.page.getByText(`${user.employee_name}`, { exact: true }).first();
            if ( await Option.isVisible()){
                await Option.click();
            }
        }
        if (user.status){
            await this.SystemUsers_page.add_status_dropdown.click();
            await this.SystemUsers_page.page.getByRole('option', { name: `${user.status}` }).click();
        }
        if (user.username) {
            const username = `${user.username}${Date.now()}`;
            if (user.username.length <= 4){
                await this.SystemUsers_page.add_username_input.pressSequentially(user.username);
                console.log(user.username)
            }
            if(user.username ==='RayanCherki'){
                await this.SystemUsers_page.add_username_input.pressSequentially(user.username);  
            }
            else{
                await this.SystemUsers_page.add_username_input.pressSequentially(username);
            }
        }
        
        await this.SystemUsers_page.password_input.pressSequentially(user.password);
        await this.SystemUsers_page.confirm_password_input.pressSequentially(user.confirm_password);
        if (user.save === false){
            await this.SystemUsers_page.cancel_btn.click();
        }
        else{
            await this.SystemUsers_page.save_btn.click();
        }
        await this.SystemUsers_page.page.waitForTimeout(5000);

    }

}
