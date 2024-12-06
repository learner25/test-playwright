import { Page, Locator } from '@playwright/test';

export class SidebarPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    getNavigationElement(navigationPath: string): Locator {
        return this.page.locator(`text="${navigationPath}"`).first();
    }

    async navigateToSection(navigationPath: string) {
        
        const elements = this.getNavigationElement(navigationPath);
       
         
            await elements.click();
            console.log(`Navigated to: ${navigationPath}`);
         
    }
}
