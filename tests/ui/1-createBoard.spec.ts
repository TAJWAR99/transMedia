import { test, expect, type Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:3000/");
});

test.describe("Create a new board", () => {
    test("Verify if new board can be created", async({page}) => {
        const boardCount = page.getByTestId("board-item")
        const totalBoard = await boardCount.count()

        const boardName = `board-${totalBoard+1}`

        const boardCreationCard = await page.getByTestId('create-board')
        await boardCreationCard.click()

        //Enter Board Name
        const titleField = await page.getByTestId('new-board-input')
        await titleField.fill(boardName)

        //Click Enter to create the board
        const createBtn = await page.getByTestId('new-board-create')
        await createBtn.press('Enter')

        //Verify successful board creation
        await expect(page).toHaveURL(/.*board/)
        await expect(page.getByTestId("board-title")).toHaveValue(boardName)
    })
})