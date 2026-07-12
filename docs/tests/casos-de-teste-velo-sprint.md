# Casos de Teste — Velô Sprint - Configurador de Veículo Elétrico

**Versão:** 1.0  
**Data:** 07/07/2026  
**Tipo:** Testes funcionais (blackbox)  
**Perfil coberto:** Cliente (Usuário Comum) — acesso público, sem autenticação

---

## Índice por Módulo

| Módulo | Casos de Teste |
|--------|----------------|
| Landing Page | CT01 – CT09 |
| Configurador de Veículo | CT10 – CT18 |
| Checkout / Pedido | CT19 – CT31 |
| Análise de Crédito | CT32 – CT37 |
| Confirmação | CT38 – CT42 |
| Consulta de Pedidos | CT43 – CT49 |
| Fluxo Integrado (E2E) | CT50 |

---

### CT01 - Acessar a Landing Page e visualizar conteúdo principal

#### Objetivo
Validar que a página inicial carrega corretamente e exibe todas as seções principais do site.

#### Pré-Condições
- Navegador web atualizado (Chrome, Firefox ou Edge)
- Aplicação acessível em `http://localhost:5173` (ou ambiente de teste equivalente)
- Nenhum cache de sessão anterior necessário

#### Passos

| Id | Ação | Resultado Esperado |
|----|------|--------------------|
| 1 | Acessar a URL raiz `/` | A página carrega sem erros visíveis |
| 2 | Verificar o título da aba do navegador | Título contém "Velô by Papito" |
| 3 | Verificar a presença do header fixo | Logo Velô visível; links "Consultar Pedido" e botão "Configure o Seu" presentes |
| 4 | Rolar a página até o final | Seções Hero, Especificações Técnicas, CTA, FAQ e Footer são exibidas |
| 5 | Verificar estatísticas no Hero | Valores "450 km", "3.2s" e "500 cv" são exibidos |

#### Resultados Esperados
- Landing page completa renderizada com todas as seções informativas
- Navegação principal acessível no header

#### Critérios de Aceitação
- Página carrega em menos de 10 segundos em conexão normal
- Todas as 5 seções principais (Hero, Specs, CTA, FAQ, Footer) estão visíveis após scroll
- Nenhuma mensagem de erro é exibida ao usuário

---

### CT02 - Navegar para o configurador pelo CTA do Hero

#### Objetivo
Validar que o botão "Configure Agora" na seção Hero redireciona o usuário para o configurador de veículo.

#### Pré-Condições
- Usuário está na Landing Page (`/`)

#### Passos

| Id | Ação | Resultado Esperado |
|----|------|--------------------|
| 1 | Localizar o botão "Configure Agora" na seção Hero | Botão visível com ícone de seta |
| 2 | Clicar no botão "Configure Agora" | Navegação ocorre para `/configure` |
| 3 | Verificar o conteúdo da nova página | Título "Velô Sprint" e painel de configuração são exibidos |

#### Resultados Esperados
- Usuário é redirecionado para a página do configurador
- URL atual é `/configure`

#### Critérios de Aceitação
- Redirecionamento ocorre sem recarregamento com erro
- Painel de configuração com seções Cor, Rodas e Opcionais está visível

---

### CT03 - Navegar para o configurador pelo CTA da seção "Pronto para o Futuro?"

#### Objetivo
Validar que o botão "Monte o Seu Agora" na seção CTA redireciona para o configurador.

#### Pré-Condições
- Usuário está na Landing Page (`/`)

#### Passos

| Id | Ação | Resultado Esperado |
|----|------|--------------------|
| 1 | Rolar até a seção "Pronto para o Futuro?" | Seção visível com preço "R$ 40.000" |
| 2 | Clicar no botão "Monte o Seu Agora" | Navegação para `/configure` |
| 3 | Verificar a URL | URL é `/configure` |

#### Resultados Esperados
- Usuário chega ao configurador a partir do CTA inferior da landing

#### Critérios de Aceitação
- Botão funcional e redireciona corretamente
- Preço base "R$ 40.000" exibido na seção CTA antes do clique

---

### CT04 - Navegar para consulta de pedidos pelo header

#### Objetivo
Validar que o link "Consultar Pedido" no header redireciona para a página de consulta.

#### Pré-Condições
- Usuário está na Landing Page (`/`)

#### Passos

| Id | Ação | Resultado Esperado |
|----|------|--------------------|
| 1 | Localizar o link "Consultar Pedido" no header (desktop) | Link visível no canto direito do header |
| 2 | Clicar em "Consultar Pedido" | Navegação para `/lookup` |
| 3 | Verificar o conteúdo da página | Título "Consultar Pedido" e campo de busca por número do pedido são exibidos |

#### Resultados Esperados
- Página de consulta de pedidos carregada com formulário de busca

#### Critérios de Aceitação
- URL é `/lookup`
- Campo com placeholder "Ex: VLO-ABC123" está visível

---

### CT05 - Abrir e fechar menu de navegação mobile

#### Objetivo
Validar o funcionamento do menu hambúrguer em viewport mobile.

#### Pré-Condições
- Usuário está na Landing Page (`/`)
- Viewport configurado para largura mobile (< 768px)

#### Passos

| Id | Ação | Resultado Esperado |
|----|------|--------------------|
| 1 | Redimensionar o navegador para largura mobile (ex.: 375px) | Menu hambúrguer substitui a navegação desktop |
| 2 | Clicar no ícone de menu (hambúrguer) | Menu mobile expande com links "Consultar Pedido" e "Configure o Seu" |
| 3 | Clicar no ícone X (fechar) | Menu mobile recolhe |

#### Resultados Esperados
- Menu mobile abre e fecha corretamente
- Links de navegação ficam acessíveis no menu expandido

#### Critérios de Aceitação
- Toggle do menu funciona sem travamentos
- Ao clicar "Configure o Seu" no menu mobile, usuário é redirecionado para `/configure`

---

### CT06 - Expandir e recolher item do FAQ

#### Objetivo
Validar a interatividade do accordion de Perguntas Frequentes.

#### Pré-Condições
- Usuário está na Landing Page (`/`)

#### Passos

| Id | Ação | Resultado Esperado |
|----|------|--------------------|
| 1 | Rolar até a seção "Perguntas Frequentes" | 6 perguntas listadas no accordion |
| 2 | Clicar na pergunta "Quais são as opções de financiamento?" | Resposta expande exibindo texto sobre financiamento 12x com 2% a.m. |
| 3 | Clicar novamente na mesma pergunta | Resposta recolhe |

#### Resultados Esperados
- Accordion expande e recolhe corretamente
- Conteúdo da resposta é legível

#### Critérios de Aceitação
- Resposta sobre financiamento menciona "12x" e "2% ao mês"
- Apenas um item expandido por vez (comportamento single collapsible)

---

### CT07 - Acessar Termos de Uso pelo footer

#### Objetivo
Validar navegação para a página de Termos de Uso a partir do footer.

#### Pré-Condições
- Usuário está na Landing Page (`/`)

#### Passos

| Id | Ação | Resultado Esperado |
|----|------|--------------------|
| 1 | Rolar até o footer | Seção "Legal" visível |
| 2 | Clicar em "Termos de Uso" | Navegação para `/termos` |
| 3 | Verificar o conteúdo | Página de Termos de Uso é exibida |

#### Resultados Esperados
- Página `/termos` carregada com conteúdo legal

#### Critérios de Aceitação
- Link funcional no footer
- Página não retorna erro 404

---

### CT08 - Acessar Política de Privacidade pelo footer

#### Objetivo
Validar navegação para a página de Política de Privacidade a partir do footer.

#### Pré-Condições
- Usuário está na Landing Page (`/`)

#### Passos

| Id | Ação | Resultado Esperado |
|----|------|--------------------|
| 1 | Rolar até o footer | Seção "Legal" visível |
| 2 | Clicar em "Política de Privacidade" | Navegação para `/privacidade` |
| 3 | Verificar o conteúdo | Página de Política de Privacidade é exibida |

#### Resultados Esperados
- Página `/privacidade` carregada com conteúdo sobre privacidade

#### Critérios de Aceitação
- Link funcional no footer
- Página não retorna erro 404

---

### CT09 - Acessar rota inexistente (página 404)

#### Objetivo
Validar o comportamento do sistema ao acessar uma URL que não existe.

#### Pré-Condições
- Aplicação acessível

#### Passos

| Id | Ação | Resultado Esperado |
|----|------|--------------------|
| 1 | Acessar diretamente a URL `/pagina-inexistente` | Página 404 é exibida |
| 2 | Verificar o conteúdo | Mensagem "404" e "Oops! Page not found" visíveis |
| 3 | Clicar em "Return to Home" | Redirecionamento para `/` |

#### Resultados Esperados
- Sistema exibe página de erro amigável para rotas inválidas

#### Critérios de Aceitação
- Não ocorre tela em branco ou erro não tratado
- Link de retorno à home funciona

---

### CT10 - Configurar veículo com opções padrão (fluxo feliz)

#### Objetivo
Validar a configuração padrão do veículo e o preço base exibido no configurador.

#### Pré-Condições
- Usuário acessa `/configure` (configuração limpa/padrão)

#### Passos

| Id | Ação | Resultado Esperado |
|----|------|--------------------|
| 1 | Acessar `/configure` | Configurador carregado |
| 2 | Verificar cor selecionada por padrão | Glacier Blue selecionada |
| 3 | Verificar rodas selecionadas por padrão | Aero Wheels selecionadas |
| 4 | Verificar opcionais | Nenhum opcional marcado |
| 5 | Verificar o preço exibido no rodapé | "R$ 40.000,00" |

#### Resultados Esperados
- Configuração padrão: Glacier Blue + Aero Wheels, sem opcionais, total R$ 40.000

#### Critérios de Aceitação
- Imagem do veículo atualizada conforme cor e rodas padrão
- Preço base correto sem acréscimos

---

### CT11 - Selecionar cor exterior e atualizar preview do veículo

#### Objetivo
Validar a troca de cor exterior e a atualização visual do preview.

#### Pré-Condições
- Usuário está no configurador (`/configure`)

#### Passos

| Id | Ação | Resultado Esperado |
|----|------|--------------------|
| 1 | Clicar na cor "Midnight Black" | Cor selecionada visualmente (destaque no swatch) |
| 2 | Verificar a imagem do veículo no painel esquerdo | Imagem atualizada para Midnight Black |
| 3 | Clicar na cor "Lunar White" | Cor Lunar White selecionada |
| 4 | Verificar a imagem do veículo | Imagem atualizada para Lunar White |
| 5 | Verificar o preço | Permanece R$ 40.000,00 (cor não altera preço) |

#### Resultados Esperados
- Preview visual reflete a cor selecionada
- Preço inalterado pela troca de cor

#### Critérios de Aceitação
- As 3 cores (Glacier Blue, Midnight Black, Lunar White) são selecionáveis
- Apenas uma cor selecionada por vez

---

### CT12 - Selecionar rodas Sport e validar acréscimo de preço

#### Objetivo
Validar que a seleção de rodas Sport adiciona R$ 2.000 ao preço total.

#### Pré-Condições
- Usuário está no configurador com configuração padrão (Aero Wheels)

#### Passos

| Id | Ação | Resultado Esperado |
|----|------|--------------------|
| 1 | Verificar preço atual | R$ 40.000,00 |
| 2 | Clicar em "Sport Wheels" | Opção Sport selecionada; label exibe "+ R$ 2.000,00" |
| 3 | Verificar preço atualizado no rodapé | R$ 42.000,00 |
| 4 | Verificar imagem do veículo | Rodas sport refletidas na imagem |

#### Resultados Esperados
- Preço total = R$ 42.000,00 com rodas Sport

#### Critérios de Aceitação
- Acréscimo de exatamente R$ 2.000 sobre o preço base
- Imagem do veículo atualizada com rodas sport

---

### CT13 - Adicionar opcional Precision Park e validar acréscimo

#### Objetivo
Validar a inclusão do opcional Precision Park (+R$ 5.500).

#### Pré-Condições
- Usuário está no configurador com configuração padrão

#### Passos

| Id | Ação | Resultado Esperado |
|----|------|--------------------|
| 1 | Marcar o checkbox "Precision Park" | Checkbox marcado |
| 2 | Verificar preço no rodapé | R$ 45.500,00 |
| 3 | Desmarcar o checkbox | Checkbox desmarcado; preço volta para R$ 40.000,00 |

#### Resultados Esperados
- Opcional adiciona R$ 5.500 ao total quando marcado
- Opcional removível pelo toggle do checkbox

#### Critérios de Aceitação
- Descrição do Precision Park visível
- Preço recalculado imediatamente após marcar/desmarcar

---

### CT14 - Adicionar opcional Flux Capacitor e validar acréscimo

#### Objetivo
Validar a inclusão do opcional Flux Capacitor (+R$ 5.000).

#### Pré-Condições
- Usuário está no configurador com configuração padrão

#### Passos

| Id | Ação | Resultado Esperado |
|----|------|--------------------|
| 1 | Marcar o checkbox "Flux Capacitor" | Checkbox marcado |
| 2 | Verificar preço no rodapé | R$ 45.000,00 |
| 3 | Desmarcar o checkbox | Preço volta para R$ 40.000,00 |

#### Resultados Esperados
- Opcional adiciona R$ 5.000 ao total quando marcado

#### Critérios de Aceitação
- Descrição do Flux Capacitor visível
- Preço recalculado corretamente

---

### CT15 - Selecionar ambos opcionais e validar soma cumulativa

#### Objetivo
Validar que os dois opcionais podem ser selecionados simultaneamente e seus valores são somados.

#### Pré-Condições
- Usuário está no configurador com configuração padrão

#### Passos

| Id | Ação | Resultado Esperado |
|----|------|--------------------|
| 1 | Marcar "Precision Park" | Preço: R$ 45.500,00 |
| 2 | Marcar também "Flux Capacitor" | Ambos checkboxes marcados; preço: R$ 50.500,00 |
| 3 | Verificar soma | R$ 40.000 + R$ 5.500 + R$ 5.000 = R$ 50.500,00 |

#### Resultados Esperados
- Opcionais são independentes e acumuláveis

#### Critérios de Aceitação
- Total correto com ambos opcionais selecionados
- Nenhum opcional desmarca o outro automaticamente

---

### CT16 - Configuração máxima de preço (Sport + ambos opcionais)

#### Objetivo
Validar o preço máximo possível com todas as opções pagas selecionadas.

#### Pré-Condições
- Usuário está no configurador

#### Passos

| Id | Ação | Resultado Esperado |
|----|------|--------------------|
| 1 | Selecionar rodas "Sport Wheels" | Preço parcial: R$ 42.000,00 |
| 2 | Marcar "Precision Park" | Preço parcial: R$ 47.500,00 |
| 3 | Marcar "Flux Capacitor" | Preço final: R$ 52.500,00 |
| 4 | Clicar em "Monte o Seu" | Navegação para `/order` com configuração e preço persistidos |

#### Resultados Esperados
- Preço máximo: R$ 52.500,00 (R$ 40.000 + R$ 2.000 + R$ 5.500 + R$ 5.000)
- Checkout recebe a configuração completa

#### Critérios de Aceitação
- Resumo no checkout reflete todas as opções selecionadas
- Total no resumo do checkout exibe R$ 52.500,00 (à vista)

---

### CT17 - Navegar para checkout a partir do configurador

#### Objetivo
Validar que o botão "Monte o Seu" leva o usuário ao checkout com a configuração atual.

#### Pré-Condições
- Usuário configurou o veículo no `/configure`

#### Passos

| Id | Ação | Resultado Esperado |
|----|------|--------------------|
| 1 | Configurar cor "Lunar White" e rodas Aero | Preço R$ 40.000,00 |
| 2 | Clicar em "Monte o Seu" | Navegação para `/order` |
| 3 | Verificar resumo lateral no checkout | Cor "Lunar White", rodas "aero Wheels", total R$ 40.000,00 |

#### Resultados Esperados
- Configuração transferida do configurador para o checkout

#### Critérios de Aceitação
- Imagem do veículo no resumo corresponde à configuração
- Dados da configuração consistentes entre as telas

---

### CT18 - Persistência da configuração após recarregar a página

#### Objetivo
Validar que a configuração do veículo persiste no `localStorage` após recarregar o navegador.

#### Pré-Condições
- Usuário está no configurador

#### Passos

| Id | Ação | Resultado Esperado |
|----|------|--------------------|
| 1 | Selecionar cor "Midnight Black", rodas Sport e marcar Precision Park | Preço: R$ 47.500,00 |
| 2 | Recarregar a página (F5) | Página recarrega em `/configure` |
| 3 | Verificar configuração mantida | Midnight Black, Sport Wheels e Precision Park permanecem selecionados |
| 4 | Verificar preço | R$ 47.500,00 |

#### Resultados Esperados
- Estado do configurador restaurado após reload

#### Critérios de Aceitação
- Zustand persist mantém configuração entre sessões no mesmo navegador

---

### CT19 - Finalizar pedido à vista com dados válidos (fluxo feliz)

#### Objetivo
Validar o fluxo completo de compra com pagamento à vista e dados válidos.

#### Pré-Condições
- Usuário está no checkout (`/order`) com configuração padrão (R$ 40.000)
- Backend Supabase configurado e acessível

#### Passos

| Id | Ação | Resultado Esperado |
|----|------|--------------------|
| 1 | Preencher Nome: "Maria" | Campo aceita o valor |
| 2 | Preencher Sobrenome: "Silva" | Campo aceita o valor |
| 3 | Preencher Email: "maria.silva@email.com" | Campo aceita o valor |
| 4 | Preencher Telefone: "(11) 98765-4321" | Máscara aplicada |
| 5 | Preencher CPF: "529.982.247-25" | Máscara aplicada |
| 6 | Selecionar loja: "Velô Paulista - Av. Paulista, 1000" | Loja selecionada |
| 7 | Manter pagamento "À Vista" selecionado | Valor exibido: R$ 40.000,00 |
| 8 | Marcar checkbox de aceite dos Termos | Checkbox marcado |
| 9 | Clicar em "Confirmar Pedido" | Loading "Processando..." exibido brevemente |
| 10 | Aguardar redirecionamento | Página `/success` exibida com "Pedido Aprovado!" |

#### Resultados Esperados
- Pedido criado com status `APROVADO`
- Número do pedido no formato `VLO-XXXXXX` exibido na tela de confirmação
- Configuração resetada no configurador após conclusão

#### Critérios de Aceitação
- Mensagem "Pedido Aprovado!" visível
- Número do pedido exibido e copiável
- Dados do cliente e loja corretos na confirmação

---

### CT20 - Validar submissão com todos os campos obrigatórios vazios

#### Objetivo
Validar que o sistema impede o envio do formulário quando campos obrigatórios não são preenchidos.

#### Pré-Condições
- Usuário está no checkout (`/order`) com formulário em branco

#### Passos

| Id | Ação | Resultado Esperado |
|----|------|--------------------|
| 1 | Não preencher nenhum campo | Formulário vazio |
| 2 | Clicar em "Confirmar Pedido" | Formulário não é enviado |
| 3 | Verificar mensagens de erro | Erros exibidos para: Nome, Sobrenome, Email, Telefone, CPF, Loja e Termos |

#### Resultados Esperados
- Múltiplas mensagens de validação exibidas simultaneamente
- Pedido não é criado

#### Critérios de Aceitação
- Campos inválidos destacados com borda vermelha
- Mensagens: "Nome deve ter pelo menos 2 caracteres", "Email inválido", "Aceite os termos", etc.

---

### CT21 - Validar nome com menos de 2 caracteres

#### Objetivo
Validar a regra de tamanho mínimo do campo Nome.

#### Pré-Condições
- Usuário está no checkout (`/order`)

#### Passos

| Id | Ação | Resultado Esperado |
|----|------|--------------------|
| 1 | Preencher Nome com "A" (1 caractere) | Valor inserido |
| 2 | Preencher demais campos com dados válidos | Campos preenchidos |
| 3 | Clicar em "Confirmar Pedido" | Erro exibido no campo Nome: "Nome deve ter pelo menos 2 caracteres" |

#### Resultados Esperados
- Submissão bloqueada por nome inválido

#### Critérios de Aceitação
- Mensagem de erro específica para o campo Nome
- Pedido não criado

---

### CT22 - Validar sobrenome com menos de 2 caracteres

#### Objetivo
Validar a regra de tamanho mínimo do campo Sobrenome.

#### Pré-Condições
- Usuário está no checkout (`/order`)

#### Passos

| Id | Ação | Resultado Esperado |
|----|------|--------------------|
| 1 | Preencher Sobrenome com "B" (1 caractere) | Valor inserido |
| 2 | Preencher demais campos com dados válidos | Campos preenchidos |
| 3 | Clicar em "Confirmar Pedido" | Erro: "Sobrenome deve ter pelo menos 2 caracteres" |

#### Resultados Esperados
- Submissão bloqueada por sobrenome inválido

#### Critérios de Aceitação
- Mensagem de erro específica exibida
- Pedido não criado

---

### CT23 - Validar e-mail inválido

#### Objetivo
Validar a regra de formato do campo Email.

#### Pré-Condições
- Usuário está no checkout (`/order`)

#### Passos

| Id | Ação | Resultado Esperado |
|----|------|--------------------|
| 1 | Preencher Email com "email-invalido" | Valor inserido |
| 2 | Preencher demais campos com dados válidos | Campos preenchidos |
| 3 | Clicar em "Confirmar Pedido" | Erro: "Email inválido" |

#### Resultados Esperados
- Submissão bloqueada por email sem formato válido

#### Critérios de Aceitação
- Campo Email destacado como inválido
- Pedido não criado

---

### CT24 - Validar telefone inválido (incompleto)

#### Objetivo
Validar a regra de tamanho mínimo do campo Telefone com máscara.

#### Pré-Condições
- Usuário está no checkout (`/order`)

#### Passos

| Id | Ação | Resultado Esperado |
|----|------|--------------------|
| 1 | Preencher Telefone com "(11) 9999" (incompleto) | Máscara parcial aplicada |
| 2 | Preencher demais campos com dados válidos | Campos preenchidos |
| 3 | Clicar em "Confirmar Pedido" | Erro: "Telefone inválido" |

#### Resultados Esperados
- Submissão bloqueada por telefone incompleto

#### Critérios de Aceitação
- Formato esperado: `(99) 99999-9999` (mín. 14 caracteres com máscara)

---

### CT25 - Validar CPF inválido (incompleto)

#### Objetivo
Validar a regra de tamanho mínimo do campo CPF com máscara.

#### Pré-Condições
- Usuário está no checkout (`/order`)

#### Passos

| Id | Ação | Resultado Esperado |
|----|------|--------------------|
| 1 | Preencher CPF com "123.456" (incompleto) | Máscara parcial aplicada |
| 2 | Preencher demais campos com dados válidos | Campos preenchidos |
| 3 | Clicar em "Confirmar Pedido" | Erro: "CPF inválido" |

#### Resultados Esperados
- Submissão bloqueada por CPF incompleto

#### Critérios de Aceitação
- Formato esperado: `999.999.999-99` (mín. 14 caracteres com máscara)

---

### CT26 - Validar loja de retirada não selecionada

#### Objetivo
Validar que a seleção de loja é obrigatória.

#### Pré-Condições
- Usuário está no checkout (`/order`)

#### Passos

| Id | Ação | Resultado Esperado |
|----|------|--------------------|
| 1 | Preencher todos os campos pessoais com dados válidos | Campos preenchidos |
| 2 | Não selecionar nenhuma loja | Dropdown permanece em "Selecione uma loja" |
| 3 | Marcar aceite dos termos | Checkbox marcado |
| 4 | Clicar em "Confirmar Pedido" | Erro: "Selecione uma loja" |

#### Resultados Esperados
- Submissão bloqueada sem loja selecionada

#### Critérios de Aceitação
- 4 lojas disponíveis: Paulista, Faria Lima, Morumbi, Ibirapuera
- Pedido não criado

---

### CT27 - Validar aceite de termos não marcado

#### Objetivo
Validar que o aceite dos Termos de Uso e Política de Privacidade é obrigatório.

#### Pré-Condições
- Usuário está no checkout (`/order`)

#### Passos

| Id | Ação | Resultado Esperado |
|----|------|--------------------|
| 1 | Preencher todos os campos com dados válidos | Campos preenchidos |
| 2 | Não marcar o checkbox de termos | Checkbox desmarcado |
| 3 | Clicar em "Confirmar Pedido" | Erro: "Aceite os termos" |

#### Resultados Esperados
- Submissão bloqueada sem aceite dos termos

#### Critérios de Aceitação
- Links para `/termos` e `/privacidade` funcionais no texto do checkbox
- Pedido não criado

---

### CT28 - Voltar do checkout para o configurador

#### Objetivo
Validar a navegação de retorno do checkout para o configurador.

#### Pré-Condições
- Usuário está no checkout (`/order`)

#### Passos

| Id | Ação | Resultado Esperado |
|----|------|--------------------|
| 1 | Clicar no botão de voltar (seta ←) no header | Navegação para `/configure` |
| 2 | Verificar configuração | Configuração anterior mantida |

#### Resultados Esperados
- Usuário retorna ao configurador sem perder a configuração

#### Critérios de Aceitação
- URL é `/configure`
- Opções selecionadas anteriormente preservadas

---

### CT29 - Simular financiamento com entrada zero

#### Objetivo
Validar a exibição da simulação de financiamento com entrada R$ 0 e cálculo de parcelas.

#### Pré-Condições
- Usuário está no checkout com total R$ 40.000,00 (configuração padrão)

#### Passos

| Id | Ação | Resultado Esperado |
|----|------|--------------------|
| 1 | Clicar em "Financiamento" | Opção selecionada; exibe "12x de R$ 3.400,00" |
| 2 | Manter entrada em R$ 0 | Campo de entrada vazio ou zero |
| 3 | Verificar "Valor a financiar" | R$ 40.000,00 |
| 4 | Verificar "Parcela (12x)" | R$ 3.400,00 — cálculo: (40.000 / 12) × 1,02 |
| 5 | Verificar "Taxa de juros" | 2% a.m. |
| 6 | Verificar "Total financiado" | R$ 40.800,00 (3.400 × 12) |
| 7 | Verificar total no resumo lateral | R$ 40.800,00 |

#### Resultados Esperados
- Simulação exibe valores calculados corretamente com entrada zero

#### Critérios de Aceitação
- Fórmula: parcela = (total − entrada) / 12 × 1,02
- Total financiado = parcela × 12

---

### CT30 - Simular financiamento com entrada parcial

#### Objetivo
Validar o recálculo dinâmico das parcelas ao informar valor de entrada.

#### Pré-Condições
- Usuário está no checkout com total R$ 40.000,00
- Pagamento "Financiamento" selecionado

#### Passos

| Id | Ação | Resultado Esperado |
|----|------|--------------------|
| 1 | Informar entrada de R$ 10.000 no campo "Valor da Entrada" | Valor aceito |
| 2 | Verificar "Valor a financiar" | R$ 30.000,00 |
| 3 | Verificar "Parcela (12x)" | R$ 2.550,00 — (30.000 / 12) × 1,02 |
| 4 | Verificar "Total financiado" | R$ 30.600,00 |
| 5 | Verificar total no resumo | R$ 40.600,00 (entrada 10.000 + financiado 30.600) |

#### Resultados Esperados
- Parcelas recalculadas em tempo real conforme entrada informada

#### Critérios de Aceitação
- Valores atualizados sem necessidade de recarregar a página
- Entrada máxima permitida: valor total do veículo

---

### CT31 - Simular financiamento com entrada igual ao valor total

#### Objetivo
Validar o comportamento quando a entrada cobre 100% do valor do veículo.

#### Pré-Condições
- Usuário está no checkout com total R$ 40.000,00
- Pagamento "Financiamento" selecionado

#### Passos

| Id | Ação | Resultado Esperado |
|----|------|--------------------|
| 1 | Informar entrada de R$ 40.000 | Valor aceito (máximo permitido) |
| 2 | Verificar "Valor a financiar" | R$ 0,00 |
| 3 | Verificar "Parcela (12x)" | R$ 0,00 |
| 4 | Verificar "Total financiado" | R$ 0,00 |

#### Resultados Esperados
- Com entrada total, não há valor a financiar nem parcelas

#### Critérios de Aceitação
- Sistema não exibe valores negativos
- Campo de entrada respeita limite máximo (total do veículo)

---

### CT32 - Financiamento com score > 700 resulta em APROVADO

#### Objetivo
Validar aprovação automática quando o score de crédito é superior a 700.

#### Pré-Condições
- Usuário está no checkout com financiamento selecionado
- CPF de teste disponível que retorna score > 700 na API de crédito
- Backend Supabase e Edge Function `credit-analysis` operacionais

#### Passos

| Id | Ação | Resultado Esperado |
|----|------|--------------------|
| 1 | Preencher formulário com dados válidos e CPF com score > 700 | Campos preenchidos |
| 2 | Selecionar "Financiamento" com entrada R$ 0 | Simulação exibida |
| 3 | Marcar aceite dos termos | Checkbox marcado |
| 4 | Clicar em "Confirmar Pedido" | Análise de crédito executada |
| 5 | Aguardar redirecionamento | Página `/success` com "Pedido Aprovado!" |

#### Resultados Esperados
- Pedido criado com status `APROVADO`
- Análise de crédito consultada via CPF

#### Critérios de Aceitação
- Status `APROVADO` na confirmação e no banco de dados
- Número do pedido gerado no formato `VLO-XXXXXX`

---

### CT33 - Financiamento com score entre 501 e 700 resulta em EM_ANALISE

#### Objetivo
Validar que score médio coloca o pedido em análise manual.

#### Pré-Condições
- CPF de teste disponível que retorna score entre 501 e 700 (inclusive)
- Entrada < 50% do total (para não acionar regra de exceção)

#### Passos

| Id | Ação | Resultado Esperado |
|----|------|--------------------|
| 1 | Preencher formulário com CPF de score médio (ex.: score 650) | Campos preenchidos |
| 2 | Selecionar "Financiamento" com entrada R$ 0 | Simulação exibida |
| 3 | Clicar em "Confirmar Pedido" | Análise de crédito executada |
| 4 | Verificar tela de confirmação | Pedido processado (nota: tela exibe "Crédito Reprovado" para status ≠ APROVADO) |
| 5 | Consultar pedido em `/lookup` com o número gerado | Status `EM_ANALISE` exibido com badge âmbar |

#### Resultados Esperados
- Pedido criado com status `EM_ANALISE` no banco de dados
- Consulta posterior confirma status correto

#### Critérios de Aceitação
- Status persistido como `EM_ANALISE`
- Badge âmbar com ícone de relógio na consulta

---

### CT34 - Financiamento com score ≤ 500 resulta em REPROVADO

#### Objetivo
Validar reprovação automática para score de crédito baixo.

#### Pré-Condições
- CPF de teste disponível que retorna score ≤ 500
- Entrada < 50% do total

#### Passos

| Id | Ação | Resultado Esperado |
|----|------|--------------------|
| 1 | Preencher formulário com CPF de score baixo (ex.: score 450) | Campos preenchidos |
| 2 | Selecionar "Financiamento" com entrada R$ 0 | Simulação exibida |
| 3 | Clicar em "Confirmar Pedido" | Análise de crédito executada |
| 4 | Verificar tela de confirmação | Mensagem "Crédito Reprovado" exibida |
| 5 | Consultar pedido em `/lookup` | Status `REPROVADO` com badge vermelho |

#### Resultados Esperados
- Pedido criado com status `REPROVADO`
- Mensagem orienta tentar pagamento à vista

#### Critérios de Aceitação
- Status `REPROVADO` persistido
- Texto: "Infelizmente seu crédito não foi aprovado. Tente novamente com pagamento à vista."

---

### CT35 - Financiamento com entrada ≥ 50% e score < 700 resulta em APROVADO (exceção)

#### Objetivo
Validar a regra de exceção que aprova pedido com entrada alta independente do score.

#### Pré-Condições
- CPF de teste com score < 700 (ex.: score 450 ou 650)
- Total do veículo: R$ 40.000,00

#### Passos

| Id | Ação | Resultado Esperado |
|----|------|--------------------|
| 1 | Preencher formulário com CPF de score baixo/médio | Campos preenchidos |
| 2 | Selecionar "Financiamento" | Opção selecionada |
| 3 | Informar entrada de R$ 20.000 (50% do total) | Entrada aceita |
| 4 | Clicar em "Confirmar Pedido" | Análise de crédito executada |
| 5 | Verificar confirmação | "Pedido Aprovado!" exibido |
| 6 | Consultar pedido | Status `APROVADO` |

#### Resultados Esperados
- Pedido aprovado mesmo com score < 700 devido à entrada ≥ 50%

#### Critérios de Aceitação
- Regra de exceção tem prioridade sobre score baixo/médio
- Status final: `APROVADO`

---

### CT36 - Falha na API de crédito exibe mensagem de erro

#### Objetivo
Validar o tratamento de erro quando a consulta de crédito falha.

#### Pré-Condições
- Financiamento selecionado no checkout
- Cenário que provoca falha na API (CPF inválido na API, serviço indisponível ou timeout)

#### Passos

| Id | Ação | Resultado Esperado |
|----|------|--------------------|
| 1 | Preencher formulário com dados válidos | Campos preenchidos |
| 2 | Selecionar "Financiamento" | Opção selecionada |
| 3 | Clicar em "Confirmar Pedido" com API de crédito indisponível | Toast de erro exibido |
| 4 | Verificar mensagem | "Falha ao consultar análise de crédito. Verifique seus dados ou tente mais tarde." |
| 5 | Verificar que permanece no checkout | URL continua `/order`; pedido não criado |

#### Resultados Esperados
- Erro tratado com feedback ao usuário
- Pedido não é criado em caso de falha na análise

#### Critérios de Aceitação
- Toast destrutivo (vermelho) exibido
- Botão "Confirmar Pedido" reabilitado após erro

---

### CT37 - Pagamento à vista não dispara análise de crédito

#### Objetivo
Validar que pedidos à vista são aprovados automaticamente sem consulta de score.

#### Pré-Condições
- Usuário está no checkout
- CPF que normalmente resultaria em REPROVADO no financiamento

#### Passos

| Id | Ação | Resultado Esperado |
|----|------|--------------------|
| 1 | Preencher formulário com CPF de score baixo | Campos preenchidos |
| 2 | Manter pagamento "À Vista" selecionado | Opção à vista ativa |
| 3 | Clicar em "Confirmar Pedido" | Processamento sem chamada à API de crédito |
| 4 | Verificar confirmação | "Pedido Aprovado!" independente do CPF |

#### Resultados Esperados
- Status `APROVADO` sem análise de crédito
- Processamento mais rápido (sem latência da API externa)

#### Critérios de Aceitação
- Pedido aprovado mesmo com CPF de baixo score
- Nenhum toast de erro de crédito exibido

---

### CT38 - Visualizar confirmação de pedido aprovado

#### Objetivo
Validar os elementos exibidos na tela de confirmação para pedido aprovado.

#### Pré-Condições
- Pedido à vista ou financiamento aprovado concluído com sucesso

#### Passos

| Id | Ação | Resultado Esperado |
|----|------|--------------------|
| 1 | Após confirmação, verificar ícone de status | Ícone verde de check (CheckCircle) |
| 2 | Verificar título | "Pedido Aprovado!" em verde |
| 3 | Verificar número do pedido | Formato `VLO-XXXXXX` exibido |
| 4 | Verificar resumo do veículo | Imagem, cor, interior, rodas e preço corretos |
| 5 | Verificar dados do cliente | Nome, email e loja de retirada exibidos |
| 6 | Verificar botões de ação | "Consultar Pedido" e "Configurar Outro" visíveis |

#### Resultados Esperados
- Tela de confirmação completa com todos os dados do pedido

#### Critérios de Aceitação
- Número do pedido copiável e no formato correto
- Botões funcionais para próximas ações

---

### CT39 - Visualizar confirmação de pedido reprovado

#### Objetivo
Validar os elementos exibidos na tela de confirmação para pedido com crédito reprovado.

#### Pré-Condições
- Pedido com financiamento reprovado (score ≤ 500, entrada < 50%)

#### Passos

| Id | Ação | Resultado Esperado |
|----|------|--------------------|
| 1 | Após confirmação, verificar ícone de status | Ícone vermelho (XCircle) |
| 2 | Verificar título | "Crédito Reprovado" em vermelho |
| 3 | Verificar mensagem orientativa | Sugestão de tentar pagamento à vista |
| 4 | Verificar que número do pedido ainda é exibido | `VLO-XXXXXX` visível |
| 5 | Verificar botões | "Consultar Pedido" e "Configurar Outro" disponíveis |

#### Resultados Esperados
- Feedback claro de reprovação com orientação ao usuário
- Pedido registrado no sistema mesmo reprovado

#### Critérios de Aceitação
- Mensagem de reprovação exibida
- Usuário pode consultar o pedido posteriormente

---

### CT40 - Acessar /success sem dados redireciona para home

#### Objetivo
Validar proteção da página de confirmação contra acesso direto sem pedido.

#### Pré-Condições
- Nenhum pedido em andamento na sessão

#### Passos

| Id | Ação | Resultado Esperado |
|----|------|--------------------|
| 1 | Acessar diretamente a URL `/success` | Redirecionamento automático para `/` |
| 2 | Verificar URL final | URL é `/` (Landing Page) |

#### Resultados Esperados
- Página de sucesso inacessível sem dados de pedido no state da navegação

#### Critérios de Aceitação
- Redirecionamento imediato para home
- Nenhum dado de pedido fantasma exibido

---

### CT41 - Navegar para consulta de pedido a partir da confirmação

#### Objetivo
Validar o botão "Consultar Pedido" na tela de confirmação.

#### Pré-Condições
- Usuário está na tela `/success` após pedido concluído

#### Passos

| Id | Ação | Resultado Esperado |
|----|------|--------------------|
| 1 | Anotar o número do pedido exibido | Número no formato `VLO-XXXXXX` |
| 2 | Clicar em "Consultar Pedido" | Navegação para `/lookup` |
| 3 | Informar o número do pedido e buscar | Pedido encontrado com dados consistentes |

#### Resultados Esperados
- Transição fluida da confirmação para consulta

#### Critérios de Aceitação
- Dados na consulta correspondem aos da confirmação

---

### CT42 - Configurar outro veículo a partir da confirmação

#### Objetivo
Validar o botão "Configurar Outro" na tela de confirmação.

#### Pré-Condições
- Usuário está na tela `/success` após pedido concluído

#### Passos

| Id | Ação | Resultado Esperado |
|----|------|--------------------|
| 1 | Clicar em "Configurar Outro" | Navegação para `/configure` |
| 2 | Verificar configuração | Configuração resetada para padrão (Glacier Blue, Aero, sem opcionais) |

#### Resultados Esperados
- Novo ciclo de configuração iniciado com estado limpo

#### Critérios de Aceitação
- Preço base R$ 40.000,00
- Configuração anterior do pedido concluído não interfere

---

### CT43 - Consultar pedido aprovado existente (fluxo feliz)

#### Objetivo
Validar a consulta bem-sucedida de um pedido com status APROVADO.

#### Pré-Condições
- Pedido existente no banco com status `APROVADO` (ex.: `VLO-IAMOTK`)
- Usuário acessa `/lookup`

#### Passos

| Id | Ação | Resultado Esperado |
|----|------|--------------------|
| 1 | Informar número do pedido: `VLO-IAMOTK` | Valor inserido no campo |
| 2 | Clicar em "Buscar Pedido" | Loading "Buscando..." exibido brevemente |
| 3 | Verificar resultado | Card do pedido exibido |
| 4 | Verificar badge de status | `APROVADO` com fundo verde e ícone CheckCircle |
| 5 | Verificar dados exibidos | Modelo, cor, rodas, cliente, loja, pagamento e valor total |

#### Resultados Esperados
- Pedido encontrado com todos os detalhes visíveis

#### Critérios de Aceitação
- Status badge verde com texto "APROVADO"
- Dados do cliente e configuração corretos

---

### CT44 - Consultar pedido reprovado existente

#### Objetivo
Validar a consulta de pedido com status REPROVADO.

#### Pré-Condições
- Pedido existente com status `REPROVADO` (ex.: `VLO-WZ4YHH`)

#### Passos

| Id | Ação | Resultado Esperado |
|----|------|--------------------|
| 1 | Informar número: `VLO-WZ4YHH` | Valor inserido |
| 2 | Clicar em "Buscar Pedido" | Resultado exibido |
| 3 | Verificar badge de status | `REPROVADO` com fundo vermelho e ícone XCircle |

#### Resultados Esperados
- Pedido reprovado consultável publicamente pelo número

#### Critérios de Aceitação
- Badge vermelho com texto "REPROVADO"
- Demais dados do pedido exibidos normalmente

---

### CT45 - Consultar pedido em análise existente

#### Objetivo
Validar a consulta de pedido com status EM_ANALISE.

#### Pré-Condições
- Pedido existente com status `EM_ANALISE` (ex.: `VLO-VVOXC3`)

#### Passos

| Id | Ação | Resultado Esperado |
|----|------|--------------------|
| 1 | Informar número: `VLO-VVOXC3` | Valor inserido |
| 2 | Clicar em "Buscar Pedido" | Resultado exibido |
| 3 | Verificar badge de status | `EM_ANALISE` com fundo âmbar e ícone de relógio |

#### Resultados Esperados
- Pedido em análise consultável com status intermediário visível

#### Critérios de Aceitação
- Badge âmbar com texto "EM_ANALISE"

---

### CT46 - Consultar pedido inexistente

#### Objetivo
Validar mensagem de erro ao buscar pedido que não existe no banco.

#### Pré-Condições
- Usuário acessa `/lookup`
- Número de pedido inexistente (ex.: `VLO-ZZZZZZ`)

#### Passos

| Id | Ação | Resultado Esperado |
|----|------|--------------------|
| 1 | Informar número inexistente: `VLO-ZZZZZZ` | Valor inserido |
| 2 | Clicar em "Buscar Pedido" | Busca executada |
| 3 | Verificar mensagem | Card vermelho com "Pedido não encontrado" |
| 4 | Verificar texto auxiliar | "Verifique o número do pedido e tente novamente" |

#### Resultados Esperados
- Feedback claro de pedido não encontrado
- Nenhum dado de pedido exibido

#### Critérios de Aceitação
- Ícone XCircle vermelho visível
- Nenhum card de resultado de pedido exibido

---

### CT47 - Consultar com código fora do padrão

#### Objetivo
Validar comportamento ao informar código que não segue o formato `VLO-XXXXXX`.

#### Pré-Condições
- Usuário acessa `/lookup`

#### Passos

| Id | Ação | Resultado Esperado |
|----|------|--------------------|
| 1 | Informar código inválido: `INVALIDO-123` | Valor inserido |
| 2 | Clicar em "Buscar Pedido" | Busca executada |
| 3 | Verificar resultado | Mensagem "Pedido não encontrado" |

#### Resultados Esperados
- Código fora do padrão tratado como pedido inexistente

#### Critérios de Aceitação
- Mesma mensagem de "não encontrado" para códigos inválidos e inexistentes

---

### CT48 - Botão de busca desabilitado com campo vazio ou apenas espaços

#### Objetivo
Validar que o botão "Buscar Pedido" permanece desabilitado sem entrada válida.

#### Pré-Condições
- Usuário acessa `/lookup`

#### Passos

| Id | Ação | Resultado Esperado |
|----|------|--------------------|
| 1 | Verificar estado inicial do botão com campo vazio | Botão "Buscar Pedido" desabilitado |
| 2 | Digitar apenas espaços no campo | Botão permanece desabilitado |
| 3 | Digitar um caractere válido (ex.: "V") | Botão habilitado |
| 4 | Apagar o conteúdo do campo | Botão desabilitado novamente |

#### Resultados Esperados
- Prevenção de buscas vazias ou com whitespace

#### Critérios de Aceitação
- Botão só habilita com `orderId.trim()` não vazio

---

### CT49 - Busca case-insensitive do número do pedido

#### Objetivo
Validar que a consulta aceita o número do pedido em qualquer combinação de maiúsculas/minúsculas.

#### Pré-Condições
- Pedido existente `VLO-IAMOTK` no banco

#### Passos

| Id | Ação | Resultado Esperado |
|----|------|--------------------|
| 1 | Informar `vlo-iamotk` (minúsculas) | Valor inserido |
| 2 | Clicar em "Buscar Pedido" | Pedido encontrado |
| 3 | Repetir com `Vlo-Iamotk` (mixed case) | Pedido encontrado |
| 4 | Verificar dados | Mesmos dados do pedido original |

#### Resultados Esperados
- Normalização para maiúsculas na busca (`trim().toUpperCase()`)
- Pedido encontrado independente do case digitado

#### Critérios de Aceitação
- Busca funciona com minúsculas, maiúsculas e mixed case

---

### CT50 - Fluxo integrado completo: Landing → Configurador → Checkout à vista → Confirmação → Consulta

#### Objetivo
Validar o fluxo principal de ponta a ponta (happy path) do sistema.

#### Pré-Condições
- Aplicação e backend Supabase operacionais
- Navegador sem cache de pedidos anteriores (ou aceitar novo pedido)

#### Passos

| Id | Ação | Resultado Esperado |
|----|------|--------------------|
| 1 | Acessar `/` | Landing page carregada |
| 2 | Clicar em "Configure Agora" no Hero | Navega para `/configure` |
| 3 | Selecionar cor "Lunar White" e rodas "Sport Wheels" | Preço: R$ 42.000,00 |
| 4 | Marcar opcional "Flux Capacitor" | Preço: R$ 47.000,00 |
| 5 | Clicar em "Monte o Seu" | Navega para `/order` |
| 6 | Preencher todos os campos com dados válidos | Formulário completo |
| 7 | Selecionar loja "Velô Morumbi - Av. Morumbi, 1500" | Loja selecionada |
| 8 | Manter "À Vista" e marcar termos | Total: R$ 47.000,00 |
| 9 | Clicar em "Confirmar Pedido" | Redireciona para `/success` |
| 10 | Anotar número do pedido exibido | Formato `VLO-XXXXXX` |
| 11 | Clicar em "Consultar Pedido" | Navega para `/lookup` |
| 12 | Buscar pelo número anotado | Pedido encontrado com status `APROVADO` |
| 13 | Verificar configuração na consulta | Lunar White, Sport Wheels, Flux Capacitor, R$ 47.000,00 |

#### Resultados Esperados
- Fluxo completo executado sem erros
- Dados consistentes em todas as etapas (configurador → checkout → confirmação → consulta)

#### Critérios de Aceitação
- Pedido persistido no Supabase com todos os campos corretos
- Status `APROVADO` em confirmação e consulta
- Configuração do veículo idêntica em todas as telas

---

## Observações para Execução

### Dados de Teste para Análise de Crédito
Os CPFs com scores específicos dependem da API Serasa Experian (UAT). Coordenar com o time de backend os CPFs de teste para cada faixa de score (≤ 500, 501–700, > 700).

### Pedidos de Referência no Banco
| Número | Status | Uso |
|--------|--------|-----|
| VLO-IAMOTK | APROVADO | CT43, CT49 |
| VLO-WZ4YHH | REPROVADO | CT44 |
| VLO-VVOXC3 | EM_ANALISE | CT45 |

### Perfil de Acesso
O sistema não possui autenticação. Todos os fluxos são públicos. Não há cenários de "permissão negada" por perfil — o único controle de acesso na consulta é a posse do `order_number`.

### Comportamentos Conhecidos
- A tela `/success` exibe "Crédito Reprovado" para qualquer status diferente de `APROVADO` (incluindo `EM_ANALISE`). Validar status correto na consulta (`/lookup`).
- A seleção de cor interior existe no estado da aplicação, mas não está disponível na UI do configurador.
- O cálculo de parcelas no checkout usa fórmula simplificada `(valor / 12) × 1,02`, diferente da função `calculateInstallment` com juros compostos no store.
