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

        const createListBtn = page.getByTestId('create-list')
        await createListBtn.isVisible
        await createListBtn.click()
        
        const n = 2
        for(let i = 1; i <= n; i++) {
            const listTitle = page.getByTestId("add-list-input")
            await listTitle.fill(`list-${totalLists+i}`)

            const addBtn = page.getByText("Add list")
            await addBtn.isVisible
            await addBtn.click()

            await expect(getListID).toHaveCount(totalLists+i)

            await page.waitForTimeout(2000);
        }

        await expect(getListID).toHaveCount(totalLists+n)

        // const totalAddedList = await getListID.count()
        // console.log("total added list:"+ totalAddedList)

    })
})