## Transmedia QA Recruitment Technical Test

**Notes:**

- For UI and API testing, Playwright was used in this project. 
- Github Action workflow has been added so that when code is pushed to or pulled from the repository it will run the test suites.
- The workflow will create a downloadable `playwright-report` file in the Action workflow.
- Also the test suites can be run locally.

## Project Structure

- All tests are saved under **tests** folder
- All the API related automation scripts resides in `tests/api` folder
- All the UI related automation scripts resides in `tests/ui` folder

## Tasks

**UI Automation**

```
1. Input a Board name, press enter. Verify Board created successfully.
2. Add two lists and verify two lists created successfully.
3. Delete a list.
```

**API Automation**

```
1. Add a new list
2. Delete the newly created list
```

**Locally run the tests**

- Initially run `npm start` to start the local server
- Run `npx playwright test tests/api/api-testSuite.spec.ts` for running all the API test suite in one go.
- Run `npx playwright test tests/ui/ui-testSuite.spec.ts` for running all the UI test suite in one go.
- To view the test report run `npx playwright show-report`.