import { LinkURL, Account } from '../../Data/account';
import { MainMenu_page } from '../page/mainMenu';
export class choseMenuHelper {constructor(private mainMenuPage: MainMenu_page) {}
    async chooseAdmin(): Promise<void> {
        await this.mainMenuPage.admin_menu.click();
    }
    async choosePIM(): Promise<void> {
        await this.mainMenuPage.pim_menu.click();
    }
    async chooseLeave(): Promise<void> {
        await this.mainMenuPage.leave_menu.click();
    }
    async chooseTime(): Promise<void> {
        await this.mainMenuPage.time_menu.click();
    }
    async chooseRecruitment(): Promise<void> {
        await this.mainMenuPage.recruitment_menu.click();
    }
    async chooseMyInfo(): Promise<void> {
        await this.mainMenuPage.my_info_menu.click();
    }
    async choosePerformance(): Promise<void> {
        await this.mainMenuPage.performance_menu.click();
    }
    async chooseDashboard(): Promise<void> {
        await this.mainMenuPage.dashboard_menu.click();
    }
    async chooseDirectory(): Promise<void> {
        await this.mainMenuPage.directory_menu.click();
    }
    async chooseMaintenance(): Promise<void> {
        await this.mainMenuPage.maintenance_menu.click();
    }
    async chooseBuzz(): Promise<void> {
        await this.mainMenuPage.buzz_menu.click();
    }
    async toggleSidebar(): Promise<void> {
        await this.mainMenuPage.sidebar_collapse_btn.click();
    }
    async searchMenu(keyword: string): Promise<void> {
        await this.mainMenuPage.sidebar_search_input.fill(keyword);
    }
}