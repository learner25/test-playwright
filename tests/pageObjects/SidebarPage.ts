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
       // const count = await elements.count();
         
            await elements.click();
            console.log(`Navigated to: ${navigationPath}`);
        //} else {
        //    console.log(`Found ${count} elements with the text "${navigationPath}".`);
        //    throw new Error('Ambiguous navigation path.');
        //}
    }
}
