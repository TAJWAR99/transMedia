import { test, expect, type Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:3000/');
});

test.describe("Delete list in the board", () => {
    test("Verify if list can be deleted", async({page}) => {
        const boardCard = await page.locator("#board-1")
        boardCard.click()

        const getListID = page.getByTestId("list-placeholder")
        await expect(getListID.first()).toBeVisible() //adding buffer time
        const totalLists = await getListID.count()
        // console.log("total list:"+ totalLists)
        await expect(totalLists).toBeGreaterThan(0)

        const elipsisBtn = await page.getByTestId('list-options')
        elipsisBtn.first().click()

        const dropDown = await page.getByTestId("list-dropdown")
        await expect(dropDown).toBeVisible()


        const deleteBtn = await page.getByTestId("delete-list")
        await deleteBtn.isVisible
        await deleteBtn.click()

        await expect(getListID).toHaveCount(totalLists-1)

        // const listTotal = await getListID.count()
        // console.log("Final total list:"+ listTotal)

    })
})