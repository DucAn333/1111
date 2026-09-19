import { Locator, Page } from '@playwright/test';

export class SystemUsers_page {
    page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    get breadcrumb_admin(): Locator {
        return this.page.getByText('Admin', { exact: true })
    }

    get page_heading(): Locator {
        return this.page.getByRole('heading', { name: 'System Users' })
    }

    get add_btn(): Locator {
        return this.page.getByRole('button', { name: 'Add' })
    }

    get username_filter_input(): Locator {
        return this.page.locator('.oxd-table-filter-area').getByPlaceholder('Type for hints...')
    }

    get user_role_dropdown(): Locator {
        return this.page.locator('.oxd-table-filter-area .oxd-select-text').nth(0)
    }

    get employee_name_filter_input(): Locator {
        return this.page.getByPlaceholder('Type for hints...').nth(1)
    }

    get status_dropdown(): Locator {
        return this.page.locator('.oxd-table-filter-area .oxd-select-text').nth(1)
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
    // affter click "+add"
    get add_user_role_dropdown(): Locator {
        return this.page.locator('.oxd-form-row').filter({ hasText: 'User Role' }).locator('.oxd-select-text')
    }
 
    get add_employee_name_input(): Locator {
        return this.page.locator('.oxd-form-row').filter({ hasText: 'Employee Name' }).getByPlaceholder('Type for hints...')
    }
 
    get add_status_dropdown(): Locator {
        return this.page.locator('.oxd-form-row').filter({ hasText: 'Status' }).locator('.oxd-select-text')
    }
 
    get add_username_input(): Locator {
        return this.page.locator('.oxd-form-row').filter({ hasText: 'Username' }).locator('input')
    }
 
    get password_input(): Locator {
        return this.page.locator('input[type="password"]').nth(0)
    }
 
    get confirm_password_input(): Locator {
        return this.page.locator('input[type="password"]').nth(1)
    }
 
    get cancel_btn(): Locator {
        return this.page.getByRole('button', { name: 'Cancel' })
    }
 
    get save_btn(): Locator {
        return this.page.getByRole('button', { name: 'Save' })
    }
}