import { test as base } from '@playwright/test'
import { createOrderLookupActions } from './actions/orderLookupActions'
import { createLandingActions } from './actions/landingActions'
import { createConfiguratorActions } from './actions/configuratorActions'

type App = {
  orderLookup: ReturnType<typeof createOrderLookupActions>
  landing: ReturnType<typeof createLandingActions>
  configurator: ReturnType<typeof createConfiguratorActions>
}

export const test = base.extend<{ app: App }>({
  app: async ({ page }, use) => {
    const app: App = {
      orderLookup: createOrderLookupActions(page),
      landing: createLandingActions(page),
      configurator: createConfiguratorActions(page),
    }
    await use(app)
  },
})

export { expect } from '@playwright/test'
