import { test } from '@playwright/test';
import { LoginPage } from './pageObjects/LoginPage';
import { SidebarPage } from './pageObjects/SidebarPage';
import { BoardPage } from './pageObjects/BoardPage';
import * as fs from 'fs';

// Load test data
const testCases = JSON.parse(fs.readFileSync('tests/testData.json', 'utf8'));

test.describe('Asana Login Tests-3', () => {
    test.beforeEach(async ({ page }) => {
        console.log('Test begins!');
    });

    test.afterEach(async ({ page }) => {
        console.log('Test done!');
    });

    test('Navigate and verify project task details', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const sidebarPage = new SidebarPage(page);
        const boardPage = new BoardPage(page);

        // Perform login
        await loginPage.navigateToLogin();
        await loginPage.enterEmail('ben+pose@workwithloop.com');
        await loginPage.enterPasswordAndLogin('Password123');

        // Wait briefly after login to ensure everything is loaded
        await page.waitForTimeout(1000);

        for (const testCase of testCases) {
            console.log(`Verifying Task for Test Case ID: ${testCase.testCaseId}`);

            // Navigate to the correct section
            await sidebarPage.navigateToSection(testCase.navigationPath);

            // Wait for the board to load
            await page.waitForTimeout(3000);

            // Verify the column is present
            await boardPage.verifyColumn(testCase.verification.column);

            // Verify the task and its associated tags
            await boardPage.verifyTaskTags(testCase.verification.task, testCase.verification.tags);
        }

        console.log('Verification completed.');
    });
});
