import { EmployeeList_page } from '../page/option/PIM';
import { expect } from '@playwright/test';

type EmployeeData = {
    first_name: string,
    middle_name: string,
    last_name: string,
    employee_id: string,
    save : boolean,
};

export class createEmployee {constructor(private EmployeeList_page: EmployeeList_page) {}
    async addEmployee(user : EmployeeData): Promise<void> {
        await this.EmployeeList_page.add_btn.click({timeout:5000});
        await expect(this.EmployeeList_page.first_name_input).toBeVisible();
        if (user.first_name){
            await this.EmployeeList_page.first_name_input.pressSequentially(user.first_name);
        }
        if (user.middle_name){
            await this.EmployeeList_page.middle_name_input.pressSequentially(user.middle_name);
        }
        if (user.last_name){
            await this.EmployeeList_page.last_name_input.pressSequentially(user.last_name);
        }
        // if (user.employee_id) {
        //     const employee_id_number =`${user.employee_id}${Date.now()}`.slice(0, 30);
        //     await this.EmployeeList_page.employee_id_input_add.fill(employee_id_number);
        // }
        if (user.save === true){
            await this.EmployeeList_page.save_btn.click({timeout:5000});
            await expect(this.EmployeeList_page.first_name_input).not.toBeVisible({timeout:5000});
        }
        if (user.save === false){
            await this.EmployeeList_page.cancel_btn.click({timeout:5000});
            await expect(this.EmployeeList_page.first_name_input).toBeVisible({timeout:5000});          
        }
    }
}