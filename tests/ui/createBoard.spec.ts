import { test, expect, type Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:3000/');
});

test.describe("Create a new board", () => {
    test("Verify if new board can be created", async({page}) => {
        const boardName = "transMedia Board"

        const boardCreationCard = await page.getByTestId('create-board')
        boardCreationCard.click()

        const titleField = await page.getByTestId('new-board-input')
        titleField.fill("transMedia Board")

        const createBtn = await page.getByTestId('new-board-create')
        createBtn.click()

        await expect(page).toHaveURL(/.*board/)

        await expect(page.getByTestId("board-title")).toHaveValue(boardName)
    })
})