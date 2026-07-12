import { test } from '../support/fixtures'

test.describe('Configurador de Veículo', () => {
  test.beforeEach(async ({ app }) => {
    await app.configurator.open()
  })

  test('Deve selecionar ambos opcionais e validar soma cumulativa', async ({ app }) => {
    await app.configurator.selectOptional('Precision Park')
    await app.configurator.expectTotalPrice(45500)

    await app.configurator.selectOptional('Flux Capacitor')
    await app.configurator.expectOptionalChecked('Precision Park')
    await app.configurator.expectOptionalChecked('Flux Capacitor')
    await app.configurator.expectTotalPrice(50500)
  })
})
