import { test, expect } from '@playwright/test'

test.describe('online.specs', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })
  test('webapp deve estar online', async ({ page }) => {
  await page.goto('/')


  await expect(page).toHaveTitle(/Velô by Papito/)
  })
})

