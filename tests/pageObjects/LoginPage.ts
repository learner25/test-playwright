import { Page } from '@playwright/test';

export class LoginPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

     
    async navigateToLogin(): Promise<void> {
        await this.page.goto('https://app.asana.com/-/login');
    }

    
    async enterEmail(email: string): Promise<void> {
        await this.page.fill('input[name="e"]', email);
        await this.page.getByRole('button', { name: 'Continue', exact: true }).click();
        await this.page.waitForTimeout(1000); // Wait for the password field to load
    }

    async enterPasswordAndLogin(password: string): Promise<void> {
        await this.page.fill('input[name="p"]', password);
        await this.page.getByRole('button', { name: 'Log in', exact: true }).click();
        await this.page.waitForURL('**/home/**'); // Wait for successful navigation
    }

   
    async login(email: string, password: string): Promise<void> {
        await this.navigateToLogin();
        await this.enterEmail(email);
        await this.enterPasswordAndLogin(password);
    }
}
