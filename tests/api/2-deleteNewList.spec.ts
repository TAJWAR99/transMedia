import { test, expect, request } from '@playwright/test';
import { TestID } from '../utils/globalValue';

test.describe('List Deletion via APICall', () => {
  let apiContext;
  let order: number;

  test.beforeAll(async () => {
    apiContext = await request.newContext({
      baseURL: 'http://localhost:3000',
    });
  });

  test('Delete newly created list', async () => {
    // console.log('Deleting list with ID:', TestID.createdListId);

    const response = await apiContext.delete(`/api/lists/${TestID.createdListId}`);

    expect(response.status()).toBe(200);
    console.log(`List with ID ${TestID.createdListId} deleted successfully.`);
  });

  test.afterAll(async () => {
    await apiContext.dispose();
  });
});