import { test, expect, type Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:3000/');
});

test.describe("Add list in the board", () => {
    test("Verify if new list can be added", async({page}) => {
        const boardCard = await page.locator("#board-1")
        boardCard.click()

        const getListID = page.getByTestId("list-placeholder")
        await expect(getListID.first()).toBeVisible(); //adding buffer time
        const totalLists = await getListID.count()
        // console.log("total list:"+ totalLists)

        const createListBtn = await page.getByTestId('create-list')
        createListBtn.click()

        await page.getByTestId("add-list-input").fill("new list")

        const addBtn = await page.getByText("Add list")
        await addBtn.isVisible
        await addBtn.click()

        await expect(getListID).toHaveCount(totalLists+1)

        // const totalAddedList = await getListID.count()
        // console.log("total added list:"+ totalAddedList)

    })
})