import { test, expect } from '../support/fixtures'
import { generateOrderCode } from '../support/helpers'
import { OrderDetails } from '../support/actions/orderLookupActions'

test.describe('Consulta de Pedido', () => {
  test.beforeEach(async ({ app }) => {
    await app.orderLookup.open()
  })

  test('deve consultar um pedido aprovado', async ({ app }) => {
    const order: OrderDetails = {
      number: 'VLO-IAMOTK',
      status: 'APROVADO',
      color: 'Lunar White',
      wheels: 'aero Wheels',
      customer: {
        name: 'Elen de Oliveira',
        email: 'elen.crozzara@gmail.com'
      },
      payment: 'À Vista'
    }

    await app.orderLookup.searchOrder(order.number)
    await app.orderLookup.validateOrderDetails(order)
    await app.orderLookup.validateStatusBadge(order.status)

  })

  test('deve consultar um pedido reprovado', async ({ app }) => {
    const order: OrderDetails = {
      number: 'VLO-WZ4YHH',
      status: 'REPROVADO',
      color: 'Midnight Black',
      wheels: 'sport Wheels',
      customer: {
        name: 'Qa Gamer',
        email: 'gamer@gmail.com'
      },
      payment: 'À Vista'
    }

    await app.orderLookup.searchOrder(order.number)
    await app.orderLookup.validateOrderDetails(order)
    await app.orderLookup.validateStatusBadge(order.status)
  })

  test('deve consultar um pedido em analise', async ({ app }) => {
    const order: OrderDetails = {
      number: 'VLO-VVOXC3',
      status: 'EM_ANALISE',
      color: 'Lunar White',
      wheels: 'sport Wheels',
      customer: {
        name: 'Luna QA',
        email: 'luna@gmail.com'
      },
      payment: 'À Vista'
    }

    await app.orderLookup.searchOrder(order.number)
    await app.orderLookup.validateOrderDetails(order)
    await app.orderLookup.validateStatusBadge(order.status)
  })

  test('deve exibir mensagem quando o pedido não é encontrado', async ({ app }) => {
    await app.orderLookup.searchOrder(generateOrderCode())
    await app.orderLookup.validateOrderNotFound()

  })

  test('deve exibir mensagem quando o código do pedido está fora do padrão', async ({ app }) => {
    await app.orderLookup.searchOrder('INVALIDO-123')
    await app.orderLookup.validateOrderNotFound()

  })

  test('deve manter o botão de busca desabilitado com campo vazio ou apenas espaços', async ({ app, page }) => {
    const button = app.orderLookup.elements.searchButton
    await expect(button).toBeDisabled()
    await app.orderLookup.elements.orderInput.fill(' ')
    await expect(button).toBeDisabled()
   
  })

})
