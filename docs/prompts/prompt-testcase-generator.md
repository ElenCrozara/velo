Você é um Analista de Qualidade Sênior experiente em testes funcionais de software.

Sua tarefa é criar um documento completo de Casos de Testes para o sistema descrito abaixo, seguindo rigorosamente as instruções e o modelo fornecidos.

---

## Informações do Sistema

**Nome do sistema:** Velô Sprint - Configurador de Veículo Elétrico

**Descrição:** SPA web em React 18 + TypeScript (Vite, Tailwind, shadcn/ui) com estado global em Zustand (persistido em `localStorage`) e backend Supabase (PostgreSQL + Edge Functions). Permite personalizar o veículo elétrico Velô Sprint (cores, rodas e opcionais), calcular preços em tempo real, finalizar pedidos com pagamento à vista ou financiamento, submeter CPF para análise de crédito via Edge Function (`credit-analysis`) integrada à API Serasa Experian, e consultar status de pedidos pelo número `order_number`. Rotas principais: `/` (landing), `/configure` (configurador), `/order` (checkout), `/success` (confirmação), `/lookup` (consulta). Rotas auxiliares: `/termos`, `/privacidade`.

**Módulos/Funcionalidades a cobrir:** Landing Page (hero, especificações, CTA, FAQ, header/footer com navegação), Configurador de Veículo (seleção de cor exterior, rodas, opcionais, preview visual e preço dinâmico), Checkout/Pedido (dados pessoais, loja de retirada, forma de pagamento, entrada e simulação de parcelas), Análise de Crédito Automática (apenas para financiamento, via CPF), Confirmação (tela de sucesso com número do pedido e status), Consulta de Pedidos (busca por `order_number` com exibição de status, configuração, cliente e pagamento).

**Perfis de usuário:** Cliente (Usuário Comum) — acesso público, sem autenticação. Qualquer visitante pode configurar, comprar e consultar pedidos informando o número do pedido (`VLO-XXXXXX`). Não há perfil administrativo nem controle de permissões por login.

**Regras de negócio relevantes:**
- **Precificação:** Valor base R$ 40.000. Rodas Aero (padrão): R$ 0. Rodas Sport: +R$ 2.000. Opcional Precision Park: +R$ 5.500. Opcional Flux Capacitor: +R$ 5.000. Preço total recalculado dinamicamente a cada alteração no configurador.
- **Configuração do veículo:** 3 cores exteriores (Glacier Blue, Midnight Black, Lunar White). 2 tipos de rodas (Aero, Sport). 2 opcionais independentes (Precision Park, Flux Capacitor), acumuláveis. Configuração padrão: Glacier Blue + Aero Wheels, sem opcionais.
- **Lojas de retirada (obrigatório no checkout):** Velô Paulista, Velô Faria Lima, Velô Morumbi, Velô Ibirapuera.
- **Validação do formulário de pedido:** Nome e sobrenome (mín. 2 caracteres), e-mail válido, telefone com máscara `(99) 99999-9999` (mín. 14 caracteres), CPF com máscara `999.999.999-99` (mín. 14 caracteres), loja selecionada, aceite obrigatório dos Termos de Uso e Política de Privacidade.
- **Formas de pagamento:** À vista (status `APROVADO` automático, sem análise de crédito) ou Financiamento 12x (dispara análise de crédito pelo CPF).
- **Juros de Financiamento:** Parcelamento fixo em 12x com taxa de 2% a.m. Cálculo na tela de checkout: `valor a financiar = total − entrada`; `parcela = (valor a financiar / 12) × 1,02`; `total financiado = parcela × 12`. Entrada configurável de R$ 0 até o valor total do veículo.
- **Análise de Crédito por Score** (somente financiamento; ordem de avaliação):
  1. Se entrada ≥ 50% do total **e** score < 700 → `APROVADO`
  2. Se score > 700 → `APROVADO`
  3. Se score entre 501 e 700 (inclusive) → `EM_ANALISE`
  4. Se score ≤ 500 → `REPROVADO`
- **Número do pedido:** Gerado automaticamente no formato `VLO-` + 6 caracteres alfanuméricos (ex.: `VLO-ABC123`). Consulta aceita busca case-insensitive (normalizada para maiúsculas).
- **Consulta de pedidos:** Requer apenas o `order_number`; não exige login nem CPF/e-mail do cliente. Pedido inexistente ou código inválido exibe mensagem "Pedido não encontrado". Botão de busca desabilitado com campo vazio ou apenas espaços.
- **Persistência:** Pedidos gravados na tabela `orders` do Supabase (campos: `order_number`, `color`, `wheel_type`, `optionals`, dados do cliente, `payment_method`, `total_price`, `status`). RLS permite leitura e inserção pública.
- **Status possíveis do pedido:** `APROVADO`, `EM_ANALISE`, `REPROVADO`.

---

## Escopo dos Testes

Cobrir obrigatoriamente:
- Testes funcionais (blackbox)
- Cenários positivos (fluxo feliz)
- Cenários negativos (erros, dados inválidos, permissões negadas)
- Validação de campos obrigatórios
- Validação de regras de negócio
- Fluxos principais e alternativos
- Permissões e níveis de acesso por perfil de usuário

Não incluir:
- Testes de performance
- Testes de carga ou estresse
- Testes automatizados
- Testes de segurança avançados

---

## Modelo de Caso de Teste

Cada caso de teste deve seguir exatamente este formato:

---

### CT[NN] - [Nome descritivo do caso de teste]

#### Objetivo
[Descrição clara e objetiva do que está sendo validado.]

#### Pré-Condições
- [Condição 1]
- [Condição 2]
- [...]

#### Passos

| Id | Ação | Resultado Esperado |
|----|------|--------------------|
| 1  | [Ação do usuário] | [Comportamento esperado do sistema] |
| 2  | [...] | [...] |

#### Resultados Esperados
- [Descreva o estado final esperado do sistema após todos os passos.]

#### Critérios de Aceitação
- [Critério objetivo 1]
- [Critério objetivo 2]
- [...]

---

## Instruções de Geração

1. Numere os casos de teste sequencialmente: CT01, CT02, CT03...
2. Cubra no mínimo os seguintes fluxos base para cada módulo informado:
   - Operação bem-sucedida (fluxo feliz)
   - Operação com dados inválidos ou incompletos
   - Operação sem permissão adequada (quando aplicável)
3. Inclua casos de teste para validação de campos obrigatórios.
4. Inclua casos de teste para cada perfil de usuário listado, sempre que houver comportamentos distintos.
5. Seja detalhado nos passos — cada ação deve ser clara o suficiente para que qualquer pessoa execute o teste sem dúvidas.
6. Gere o resultado em formato Markdown, pronto para ser salvo em um arquivo `.md` dentro da pasta `docs/tests` do projeto.