import { Page, expect } from '@playwright/test'

export type OptionalName = 'Precision Park' | 'Flux Capacitor'

const STORAGE_KEY = 'velo-configurator-storage'

function formatBrl(amount: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(amount)
}

export function createConfiguratorActions(page: Page) {
  const totalPrice = page.getByTestId('total-price')

  return {
    async open() {
      await page.goto('/configure')
      await page.evaluate((key) => localStorage.removeItem(key), STORAGE_KEY)
      await page.reload()
      await this.expectLoaded()
      await this.expectTotalPrice(40000)
    },

    async expectLoaded() {
      await expect(page).toHaveURL('/configure')
      await expect(page.getByRole('heading', { name: 'Velô Sprint', level: 1 })).toBeVisible()
      await expect(page.getByRole('heading', { name: 'COR', level: 3 })).toBeVisible()
      await expect(page.getByRole('heading', { name: 'RODAS', level: 3 })).toBeVisible()
      await expect(page.getByRole('heading', { name: 'OPCIONAIS', level: 3 })).toBeVisible()
      await expect(page.getByRole('button', { name: 'Monte o Seu' })).toBeVisible()
    },

    async selectOptional(name: OptionalName) {
      await page.getByRole('checkbox', { name: new RegExp(name) }).check()
    },

    async expectOptionalChecked(name: OptionalName) {
      await expect(page.getByRole('checkbox', { name: new RegExp(name) })).toBeChecked()
    },

    async expectTotalPrice(amount: number) {
      await expect(totalPrice).toHaveText(formatBrl(amount))
    },
  }
}
