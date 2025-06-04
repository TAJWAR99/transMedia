import { test, expect, request } from '@playwright/test';
import { TestID } from '../utils/globalValue';

test.describe('Adding List via APICall', () => {
  let apiContext;
  let order: number;

  test.beforeAll(async () => {
    apiContext = await request.newContext({
      baseURL: 'http://localhost:3000',
    });
  });

  test('Create a new list', async () => {
    const payload = {
      boardId: 1,
      name: 'API List - 1',
      order: 0
    };

    const response = await apiContext.post('/api/lists', {
      data: payload,
    });

    expect(response.status()).toBe(201);

    const responseBody = await response.json();
    // console.log('Created List:', responseBody);

    // Save listID for deletion
    TestID.createdListId = responseBody.id;
    // console.log('New list with ID:', TestID.createdListId);

    expect(TestID.createdListId).toBeDefined();
  });

  test.afterAll(async () => {
    await apiContext.dispose();
  });
});
