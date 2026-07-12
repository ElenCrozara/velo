import { Page, expect } from '@playwright/test'

export type OptionalName = 'Precision Park' | 'Flux Capacitor'

const STORAGE_KEY = 'velo-configurator-storage'
const BASE_PRICE = 40_000

function formatBrl(amount: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(amount)
}

function optionalCheckbox(page: Page, name: OptionalName) {
  return page.getByRole('checkbox', { name: new RegExp(name) })
}

export function createConfiguratorActions(page: Page) {
  const totalPrice = page.getByTestId('total-price')

  async function expectLoaded() {
    await expect(page).toHaveURL('/configure')
    await expect(page.getByRole('heading', { name: 'Velô Sprint', level: 1 })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'COR', level: 3 })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'RODAS', level: 3 })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'OPCIONAIS', level: 3 })).toBeVisible()
    await expect(page.getByRole('button', { name: 'Monte o Seu' })).toBeVisible()
  }

  async function expectTotalPrice(amount: number) {
    await expect(totalPrice).toHaveText(formatBrl(amount))
  }

  return {
    async open() {
      await page.addInitScript((key) => localStorage.removeItem(key), STORAGE_KEY)
      await page.goto('/configure')
      await expectLoaded()
      await expectTotalPrice(BASE_PRICE)
    },

    expectLoaded,

    async selectOptional(name: OptionalName) {
      await optionalCheckbox(page, name).check()
    },

    async expectOptionalChecked(name: OptionalName) {
      await expect(optionalCheckbox(page, name)).toBeChecked()
    },

    expectTotalPrice,
  }
}
