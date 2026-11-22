# Loja Impossível

Loja Impossível é uma vitrine fictícia de invenções que não existem no mundo real. O projeto é um exercício de front-end com Bootstrap, HTML semântico, CSS responsivo e JavaScript.

## Executar

Abra `index.html` em um navegador moderno. A consulta de CEP usa a API ViaCEP e requer conexão com a internet. A compra é apenas uma simulação; não há cobrança nem envio de dados para um servidor.

## Melhorias realizadas

### Nome e conceito

A loja apresenta invenções impossíveis com uma identidade curiosa e acolhedora, inspirada em um catálogo de objetos extraordinários. A paleta combina verde profundo, lima, creme e tons naturais; o CSS documenta as cores em variáveis.

### Catálogo e regras do desafio

- **Zéfiro de Bolso** — cabe em um bolso.
- **Jardim Órbita** — usado no espaço sideral.
- **Zumbilume** — começa com Z e é de uso único.
- **Nuvem de Sala** — não cabe em um avião.
- **Observatório Formiga** — serve em uma formiga.
- **Relógio de Ontem** — cabe em um bolso.

Os preços, descrições, materiais e dimensões são fictícios. As ilustrações SVG e o favicon foram criados para este projeto e ficam em `img/`.

### HTML e CSS

As páginas têm idioma `pt-BR`, título e descrição próprios, metadados Open Graph, favicon, link para saltar ao conteúdo, landmarks semânticos, hierarquia de títulos, labels nos campos e mensagens com `aria-live`. A vitrine e o detalhe usam imagens SVG locais com texto alternativo e dimensões declaradas. Imagens da vitrine carregam sob demanda.

O Bootstrap 5.3 fornece a grade, os breakpoints e componentes básicos. O arquivo `css/styles.css` define a identidade visual, estados de foco, cartões, formulários, resumo, feedback e adaptação para telas estreitas, além de respeitar `prefers-reduced-motion`.

### JavaScript e jornada de compra

A vitrine é gerada a partir do catálogo único em `js/catalog.js` e permite buscar por nome, filtrar por categoria ou regra e ordenar por nome ou preço. `produto.html` lê o `id` com `URLSearchParams`, exibe a invenção escolhida e oferece retorno amigável para identificadores inválidos. A quantidade e o produto seguem para o checkout em `sessionStorage`; o resumo calcula subtotal e total a partir do preço e da quantidade. O formulário valida os campos, formata telefone e CEP sem restringir a correção do texto, consulta a ViaCEP com `fetch`, mostra estados de carregamento e trata CEP inexistente e falhas de rede. A confirmação apresenta o resumo do pedido e redireciona para a vitrine quando aberta sem compra concluída.

### API

A integração usa a [ViaCEP](https://viacep.com.br/) no formato `https://viacep.com.br/ws/{CEP}/json/`. O CEP é normalizado e validado para oito dígitos antes da requisição. A API preenche logradouro, bairro, cidade e UF; o número é informado manualmente.

### Verificação e testes

A estrutura foi revisada para os cenários descritos no enunciado. A sintaxe dos cinco scripts JavaScript foi verificada com `node --check`. Os cenários manuais de teclado, celular/tablet/desktop, fluxo de compra e estados de rede ainda precisam ser executados no navegador antes da entrega. Ao concluir, registre abaixo os resultados reais:

- Navegação por teclado e responsividade: pendente de execução manual.
- Busca sem resultados e IDs de produto válido/inexistente: pendente de execução manual.
- Quantidade, totais, validação de formulário e CEP real/inexistente: pendente de execução manual.
- Falha de rede, atualização da página e acesso direto ao sucesso: pendente de execução manual.
- Console do navegador e Lighthouse: pendente de execução manual.

### Dificuldades e integrantes

A principal dificuldade da base era manter os dados fictícios consistentes entre as etapas da compra; a solução adotada registra produto e quantidade na sessão e calcula os valores no checkout. A consulta de CEP pode falhar sem conexão, por isso a interface informa o problema e permite tentar novamente.

**Integrantes:** preencher com os nomes do grupo.


