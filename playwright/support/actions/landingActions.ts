import { Page, expect } from '@playwright/test'

export function createLandingActions(page: Page) {
  const heroCta = page.getByRole('link', { name: 'Configure Agora' })

  return {
    async open() {
      await page.goto('/')
      await expect(page).toHaveTitle(/Velô by Papito/)
      await expect(page.getByRole('heading', { name: 'Velô Sprint', level: 1 })).toBeVisible()
    },

    async clickHeroConfigureCta() {
      await expect(heroCta).toBeVisible()
      await expect(heroCta).toHaveAttribute('href', '/configure')
      await heroCta.click()
    },
  }
}
