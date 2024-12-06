import { Page } from '@playwright/test';

export class LoginPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    /**
     * Navigate to the login page.
     */
    async navigateToLogin(): Promise<void> {
        await this.page.goto('https://app.asana.com/-/login');
    }

    /**
     * Fill in the email and proceed.
     * @param email - The email to log in with.
     */
    async enterEmail(email: string): Promise<void> {
        await this.page.fill('input[name="e"]', email);
        await this.page.getByRole('button', { name: 'Continue', exact: true }).click();
        await this.page.waitForTimeout(1000); // Wait for the password field to load
    }

    /**
     * Fill in the password and submit.
     * @param password - The password to log in with.
     */
    async enterPasswordAndLogin(password: string): Promise<void> {
        await this.page.fill('input[name="p"]', password);
        await this.page.getByRole('button', { name: 'Log in', exact: true }).click();
        await this.page.waitForURL('**/home/**'); // Wait for successful navigation
    }

    /**
     * Complete the login process.
     * @param email - The email to log in with.
     * @param password - The password to log in with.
     */
    async login(email: string, password: string): Promise<void> {
        await this.navigateToLogin();
        await this.enterEmail(email);
        await this.enterPasswordAndLogin(password);
    }
}
