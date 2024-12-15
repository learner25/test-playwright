import { Given, When, Then } from '@cucumber/cucumber';
import { LoginPage } from '../pageObjects/LoginPage';
import { SidebarPage } from '../pageObjects/SidebarPage';
import { BoardPage } from '../pageObjects/BoardPage';
import { expect } from '@playwright/test';
import * as fs from 'fs';

const testCases = JSON.parse(fs.readFileSync('tests/testData.json', 'utf8'));

let loginPage: LoginPage;
let sidebarPage: SidebarPage;
let boardPage: BoardPage;

Given('I am on the login page', async ({ page }) => {
    loginPage = new LoginPage(page);
    sidebarPage = new SidebarPage(page);
    boardPage = new BoardPage(page);
    await loginPage.navigateToLogin();
});

When('I login with valid credentials', async ({ page }) => {
    const email = process.env.EMAIL;
    const password = process.env.PASSWORD;
    await loginPage.enterEmail(email);
    await loginPage.enterPasswordAndLogin(password);
    await page.waitForTimeout(1000); // Ensure dashboard loads
});

Then('I should see the dashboard', async ({ page }) => {
    // Add a validation here to ensure the dashboard is loaded
    const dashboardVisible = await page.isVisible('selector-for-dashboard'); // Replace with actual selector
    expect(dashboardVisible).toBe(true);
});

Given('I have test data for project tasks', () => {
    expect(testCases).toBeDefined();
});

When('I navigate to the section {string}', async (navigationPath: string, { page }) => {
    await sidebarPage.navigateToSection(navigationPath);
    await page.waitForTimeout(6000); // Wait for the section to load
});

Then('I should see the column {string}', async (column: string) => {
    await boardPage.verifyColumn(column);
});

Then('I should see the task {string} with tags {string}', async (task: string, tags: string) => {
    const tagList = tags.split(',').map(tag => tag.trim());
    await boardPage.verifyTaskTags(task, tagList);
});
