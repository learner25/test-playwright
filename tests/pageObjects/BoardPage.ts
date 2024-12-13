import { Page, Locator, expect } from '@playwright/test';
import { BoardSelectors } from '../Selectors/BoardInterface';
export class BoardPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    getColumn(columnName: string): Locator {
        return this.page.locator(BoardSelectors.Board+" "+BoardSelectors.Header, { hasText: columnName });
    }

    getTask(taskName: string): Locator {
        return this.page.locator(`text="${taskName}"`);
    }

    async verifyColumn(columnName: string) {
        const column = this.getColumn(columnName);
        await expect(column).toHaveCount(1);
        console.log(`Located the column: ${columnName}`);
    }

    async verifyTaskTags(taskName: string, expectedTags: string[]) {
        const task = this.page.locator(`div:has-text("${taskName}")`);
        const tagsLocator = task.locator('.BoardCardLayout-customPropertiesAndTags');
        const tagTexts = await tagsLocator.allTextContents();
        const tagString = tagTexts.join(', ');

        for (const tag of expectedTags) {
            const tagExists = tagString.includes(tag);
            if (tagExists) {
                console.log(`Task "${taskName}" contains the tag: "${tag}".`);
            } else {
                console.log(`Task "${taskName}" does NOT contain the tag: "${tag}".`);
            }
        }
    }
}
