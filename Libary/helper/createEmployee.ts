import { EmployeeList_page } from '../page/option/PIM';
import { expect } from '@playwright/test';
import path from 'node:path';
import fs from 'node:fs';

type EmployeeData = {
    first_name: string,
    middle_name: string,
    last_name: string,
    employee_id: string,
    save : boolean,
    upload: boolean,
};

export class createEmployee {constructor(private EmployeeList_page: EmployeeList_page) {}
    async addEmployee(user : EmployeeData): Promise<void> {
        await this.EmployeeList_page.add_btn.click();
        await expect(this.EmployeeList_page.first_name_input).toBeVisible({timeout:5000});
        if (user.first_name){
            await this.EmployeeList_page.first_name_input.pressSequentially(user.first_name);
        }
        if (user.middle_name){
            await this.EmployeeList_page.middle_name_input.pressSequentially(user.middle_name);
        }
        if (user.last_name){
            await this.EmployeeList_page.last_name_input.pressSequentially(user.last_name);
        }
        if (user.employee_id){
            const nums = '0123456789';
            const randomNums = Array.from({ length: 4 }, () => nums[Math.floor(Math.random() * nums.length)]).join('');
            await this.EmployeeList_page.employee_id_input_add.pressSequentially(`${randomNums}`);
        }
        if (user.upload === true){
            const fileName = 'IMG.jpg';
            const filePath = path.join(process.cwd(), 'fileUpload', fileName);

            const exists = await fs.promises.access(filePath).then(() => true).catch(() => false);
            expect(exists).toBe(true);
            await this.EmployeeList_page.employee_photo_upload.setInputFiles(filePath);
        }
        if (user.save === true){
            await this.EmployeeList_page.save_btn.click();
            await expect (this.EmployeeList_page.cancel_btn).toBeEnabled({timeout:5000})
        }
        if (user.save === false){
            await this.EmployeeList_page.cancel_btn.click();
            await expect (this.EmployeeList_page.cancel_btn).toBeVisible({timeout:5000})
        }
    }
}