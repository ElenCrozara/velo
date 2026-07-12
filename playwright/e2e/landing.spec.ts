import { test } from '../support/fixtures'

test.describe('Landing Page', () => {
  test.beforeEach(async ({ app }) => {
    await app.landing.open()
  })

  test('CT02 - deve navegar para o configurador pelo CTA do Hero', async ({ app }) => {
    await app.landing.clickHeroConfigureCta()
    await app.configurator.expectLoaded()
  })
})
