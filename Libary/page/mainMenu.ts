import { Locator, Page } from '@playwright/test';

export class MainMenu_page {
    page: Page;
    constructor(page: Page) {
        this.page = page;
    }
    // phan header
     get header_admin(): Locator {
        return this.page.getByRole('heading', { name: 'Admin', level: 6 })
    }
 
    get header_pim(): Locator {
        return this.page.getByRole('heading', { name: 'PIM', level: 6 })
    }
 
    get header_leave(): Locator {
        return this.page.getByRole('heading', { name: 'Leave', level: 6 })
    }
 
    get header_time(): Locator {
        return this.page.getByRole('heading', { name: 'Time', level: 6 })
    }
 
    get header_recruitment(): Locator {
        return this.page.getByRole('heading', { name: 'Recruitment', level: 6 })
    }
 
    get header_my_info(): Locator {
        return this.page.getByRole('heading', { name: 'My Info', level: 6 })
    }
 
    get header_performance(): Locator {
        return this.page.getByRole('heading', { name: 'Performance', level: 6 })
    }
 
    get header_dashboard(): Locator {
        return this.page.getByRole('heading', { name: 'Dashboard', level: 6 })
    }
 
    get header_directory(): Locator {
        return this.page.getByRole('heading', { name: 'Directory', level: 6 })
    }
 
    get header_maintenance(): Locator {
        return this.page.getByRole('heading', { name: 'Maintenance', level: 6 })
    }
 
    get header_buzz(): Locator {
        return this.page.getByRole('heading', { name: 'Buzz', level: 6 })
    }
    //---
     get upgrade_btn(): Locator {
        return this.page.getByRole('link', { name: 'Upgrade' })
    }
 
    get user_dropdown_menu(): Locator {
        return this.page.locator('.oxd-userdropdown-tab')
    }
 
    get user_dropdown_name(): Locator {
        return this.page.locator('.oxd-userdropdown-name')
    }
 
    get user_dropdown_img(): Locator {
        return this.page.locator('.oxd-userdropdown-img')
    }
 
    get dropdown_item_about(): Locator {
        return this.page.getByRole('menuitem', { name: 'About' })
    }
 
    get dropdown_item_support(): Locator {
        return this.page.getByRole('menuitem', { name: 'Support' })
    }
 
    get dropdown_item_change_password(): Locator {
        return this.page.getByRole('menuitem', { name: 'Change Password' })
    }
 
    get dropdown_item_logout(): Locator {
        return this.page.getByRole('menuitem', { name: 'Logout' })
    }



    // phan menu
    get admin_menu(): Locator {
        return this.page.getByRole('link', { name: 'Admin' })
    }

    get pim_menu(): Locator {
        return this.page.getByRole('link', { name: 'PIM' })
    }

    get leave_menu(): Locator {
        return this.page.getByRole('link', { name: 'Leave' })
    }

    get time_menu(): Locator {
        return this.page.getByRole('link', { name: 'Time' })
    }

    get recruitment_menu(): Locator {
        return this.page.getByRole('link', { name: 'Recruitment' })
    }

    get my_info_menu(): Locator {
        return this.page.getByRole('link', { name: 'My Info' })
    }

    get performance_menu(): Locator {
        return this.page.getByRole('link', { name: 'Performance' })
    }

    get dashboard_menu(): Locator {
        return this.page.getByRole('link', { name: 'Dashboard' })
    }

    get directory_menu(): Locator {
        return this.page.getByRole('link', { name: 'Directory' })
    }

    get maintenance_menu(): Locator {
        return this.page.getByRole('link', { name: 'Maintenance' })
    }

    get buzz_menu(): Locator {
        return this.page.getByRole('link', { name: 'Buzz' })
    }

    get main_menu_items(): Locator {
        return this.page.locator('.oxd-main-menu-item')
    }

    get sidebar_collapse_btn(): Locator {
        return this.page.locator('.oxd-main-menu-button')
    }

    get sidebar_search_input(): Locator {
        return this.page.getByPlaceholder('Search')
    }
}