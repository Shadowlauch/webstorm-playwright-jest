import {expect, test} from "test-utils";

test('Google Search', async ({page}) => {
  await page.goto('https://www.google.com');
  const title = await page.title();
  expect(title).toBe('Google');
});
