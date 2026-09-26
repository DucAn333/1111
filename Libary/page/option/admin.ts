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
        return this.page.locator(`//div/div[2]/input`)


    }

    get user_role_dropdown(): Locator {
        return this.page.locator('.oxd-table-filter-area .oxd-select-text').nth(0)
    }

    get employee_name_filter_input(): Locator {
        return this.page.getByPlaceholder('Type for hints...').nth(1)
    }
    get employee_name_first_suggestion(): Locator {
        return this.page.locator('div[role="option"]').first()
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
        return this.page.locator('.oxd-select-text.oxd-select-text--active').first()
    }
     get user_role_option_admin(): Locator {
        return this.page.getByRole('option', { name: 'Admin' })
    }
 
    get user_role_option_ess(): Locator {
        return this.page.getByRole('option', { name: 'ESS' })
    }
 
    get add_employee_name_input(): Locator {
        return this.page.getByRole('textbox', { name: 'Type for hints...' });
    }
 
    get add_status_dropdown(): Locator {
        return this.page.locator('.oxd-select-text.oxd-select-text--active').nth(1)
    }
    get status_option_enabled(): Locator {
        return this.page.getByRole('option', { name: 'Enabled' })
    }
 
    get status_option_disabled(): Locator {
        return this.page.getByRole('option', { name: 'Disabled' })
    }
    get add_username_input(): Locator {
        return this.page.locator('.oxd-input.oxd-input--active').nth(1);
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

    // fillter user
    delete_btn(username: any): Locator {
        return this.page
        .locator('.oxd-table-row')
        .filter({ hasText: username })
        .locator('.oxd-icon-button.oxd-table-cell-action-space')
        .first();
    }
    get edit_btn() : Locator {
        return this.page.locator('button.oxd-icon-button.oxd-table-cell-action-space:has(.bi-pencil-fill)').first()
    }
    result(username: string): Locator {
        return this.page.getByText(username, { exact: true });
    }
    // edit
    get EditUser() : Locator {
        return this.page.getByRole('heading', { name: 'Edit User', level: 6 })
    }
    get username_input_edit() : Locator {
        return this.page.locator(`div.oxd-input-group > div > input.oxd-input`);
    }
    get save_edit_btn() : Locator {
        return this.page.getByRole('button', { name: 'Save' });
    }
     get delete_user_confirm() : Locator {
        return this.page.getByRole('button', { name: 'Yes, Delete' })
    }
    


}