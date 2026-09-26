import { Locator, Page } from '@playwright/test';

export class EmployeeList_page {
    page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    get header_pim(): Locator {
        return this.page.getByRole('heading', { name: 'PIM', level: 6 })
    }

    get header_employee_information(): Locator {
        return this.page.getByRole('heading', { name: 'Employee Information', level: 6 })
    }

    get add_btn(): Locator {
        return this.page.getByRole('button', { name: 'Add' })
    }

    get employee_name_input(): Locator {
        return this.page.locator('.oxd-form-row').filter({ hasText: 'Employee Name' }).getByPlaceholder('Type for hints...')
    }

    get employee_id_input(): Locator {
        return this.page.locator(`/html/body/div/div[1]/div[2]/div[2]/div/div/form/div[1]/div[2]/div[1]/div[2]/div/div/div[2]/input`)
    }

    get employment_status_dropdown(): Locator {
        return this.page.locator('.oxd-form-row').filter({ hasText: 'Employment Status' }).locator('.oxd-select-text')
    }

    get include_dropdown(): Locator {
        return this.page.locator('.oxd-form-row').filter({ hasText: 'Include' }).locator('.oxd-select-text')
    }

    get job_title_dropdown(): Locator {
        return this.page.locator('.oxd-form-row').filter({ hasText: 'Job Title' }).locator('.oxd-select-text')
    }

    get sub_unit_dropdown(): Locator {
        return this.page.locator('.oxd-form-row').filter({ hasText: 'Sub Unit' }).locator('.oxd-select-text')
    }

    get supervisor_name_input(): Locator {
        return this.page.locator('.oxd-form-row').filter({ hasText: 'Supervisor Name' }).getByPlaceholder('Type for hints...')
    }

    get search_btn(): Locator {
        return this.page.getByRole('button', { name: 'Search' })
    }

    get reset_btn(): Locator {
        return this.page.getByRole('button', { name: 'Reset' })
    }

    get filter_toggle_btn(): Locator {
        return this.page.locator('.oxd-table-filter-header-btn')
    }
    // sau khi nhan add
    get header_pim_add(): Locator {
        return this.page.getByRole('heading', { name: 'PIM', level: 6 })
    }
 
    get header_add_employee(): Locator {
        return this.page.getByRole('heading', { name: 'Add Employee', level: 6 })
    }
 
    get employee_photo_upload(): Locator {
        return this.page.locator('input[type="file"]')
    }
 
    get first_name_input(): Locator {
        return this.page.getByRole('textbox', { name: 'First Name' })
    }
 
    get middle_name_input(): Locator {
        return this.page.getByRole('textbox', { name: 'Middle Name' })
    }
 
    get last_name_input(): Locator {
        return this.page.getByRole('textbox', { name: 'Last Name' })
    }
 
    get employee_id_input_add(): Locator {
        return this.page.locator('.oxd-input-group').filter({ hasText: 'Employee Id' }).locator('input')
    }
 
    get create_login_details_toggle(): Locator {
        return this.page.locator('.oxd-switch-input')
    }
 
    get username_input(): Locator {
        return this.page.locator('.oxd-form-row').filter({ hasText: 'Username' }).locator('input')
    }
 
    get password_input(): Locator {
        return this.page.locator('input[type="password"]').nth(0)
    }
 
    get confirm_password_input(): Locator {
        return this.page.locator('input[type="password"]').nth(1)
    }
 
    get status_toggle(): Locator {
        return this.page.locator('.oxd-form-row').filter({ hasText: 'Status' }).locator('.oxd-switch-input')
    }
 
    get cancel_btn(): Locator {
        return this.page.getByRole('button', { name: 'Cancel' })
    }
 
    get save_btn(): Locator {
        return this.page.getByRole('button', { name: 'Save' })
    }
    get Person_details(): Locator {
        return this.page.getByRole('heading', {name: 'Personal Details',level: 6});
    }
}