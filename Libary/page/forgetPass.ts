import { Locator, Page } from '@playwright/test';

export class ForgotPassword_page {
    page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    get reset_password_heading(): Locator {
        return this.page.getByRole('heading', { name: 'Reset Password' })
    }

    get reset_password_description(): Locator {
        return this.page.getByText('Please enter your username to identify your account')
    }

    get username_input(): Locator {
        return this.page.getByPlaceholder('Username')
    }

    get cancel_btn(): Locator {
        return this.page.getByRole('button', { name: 'Cancel' })
    }

    get reset_password_btn(): Locator {
        return this.page.getByRole('button', { name: 'Reset Password' })

    }

    get username_required_error(): Locator {
        return this.page
            .locator('.oxd-input-group')
            .filter({ has: this.username_input })
            .locator('.oxd-input-field-error-message, .oxd-text--span')
    }

    get reset_success_message(): Locator {
        return this.page.locator('.oxd-alert-content-text')
    }

    get logo_image(): Locator {
        return this.page.locator('.orangehrm-login-branding img')
    }

}