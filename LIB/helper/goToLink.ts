import { LinkURL, Account } from '../../Data/account';


export class getLinkHelper {
    constructor(private page: any) {}
    async goto_URL(): Promise<void> {
        await this.page.goto(LinkURL);
    }

}