import { LinkURL, Account } from '../../Data/account';
import { ForgotPassword_page  } from '../page/forgetPass';

export class requestPasswordHelper {
    constructor(private ForgotPasswordPage: ForgotPassword_page) {}
    async requestPassword(): Promise<void> {
        await this.ForgotPasswordPage.username_input.fill(Account[0].username);
    }
    async fillEmailToRequest(): Promise<void> {
        await this.ForgotPasswordPage.username_input.pressSequentially(Account[0].username);
        await this.ForgotPasswordPage.reset_password_btn.click({timeout: 5000});
    }
    

}