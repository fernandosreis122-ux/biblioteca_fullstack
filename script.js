const books = [
{ id:1, week:"Semana 1", icon:"⌘", color:"#54d6a1", title:"Web do zero com HTML, CSS e JavaScript", subtitle:"Ambiente + HTML + CSS + landing page · Lógica e algoritmos · Fundamentos JS + DOM", tags:["HTML","CSS","JavaScript"], intro:"Aprenda como a web funciona e construa sua primeira página interativa, começando pelos fundamentos.", chapters:[
["1. Como a web funciona",`Um navegador solicita arquivos a um servidor usando HTTP/HTTPS. O HTML descreve o conteúdo, o CSS controla a apresentação e o JavaScript acrescenta comportamento. Um site pode ser estático ou conversar com serviços e bancos de dados.`,"Pense no HTML como a estrutura de uma casa, no CSS como acabamento e decoração e no JavaScript como a instalação que permite acender luzes e controlar equipamentos."],
["2. HTML semântico",`Use elementos conforme o significado: <header>, <nav>, <main>, <section>, <article> e <footer>. Para textos, use títulos em ordem lógica, parágrafos e listas. Imagens importantes precisam de texto alternativo em alt; formulários devem ter labels.`,"A semântica melhora acessibilidade, organização e compreensão do documento por mecanismos de busca."],
["3. CSS e layout",`Seletores escolhem elementos; propriedades definem aparência. O modelo de caixa inclui conteúdo, padding, borda e margem. Flexbox organiza elementos em uma dimensão; Grid trabalha com linhas e colunas. Use media queries para adaptar a tela.`,"Comece com box-sizing: border-box e crie primeiro um layout que funcione em celular."],
["4. JavaScript e lógica",`Variáveis guardam valores (const e let), condições escolhem caminhos (if/else), laços repetem tarefas (for/while) e funções agrupam lógica reutilizável. Tipos comuns: string, number, boolean, array, object, null e undefined.`,"Antes de codificar, descreva entrada, processamento e saída. Esse hábito transforma problemas grandes em etapas menores."],
["5. DOM e eventos",`O DOM é a representação da página que o navegador disponibiliza ao JavaScript. Selecione elementos com querySelector, altere texto com textContent e responda a ações com addEventListener.`,"Não misture a lógica de negócio com manipulações repetidas da interface; funções pequenas facilitam testes e manutenção."]
], code:`<main class="cartao">
  <h1>Minha primeira página</h1>
  <p id="mensagem">Clique no botão.</p>
  <button id="botao">Interagir</button>
</main>
<script>
  const botao = document.querySelector("#botao");
  const mensagem = document.querySelector("#mensagem");
  botao.addEventListener("click", () => {
    mensagem.textContent = "JavaScript funcionando!";
  });
<\/script>`, exercise:"Crie uma landing page sobre um tema de que você gosta. Inclua cabeçalho, seção principal, três cards, formulário visual e botão que altere uma mensagem."},
{ id:2, week:"Semana 2", icon:"⌥", color:"#398bff", title:"Git, GitHub, npm e TypeScript", subtitle:"Git + GitHub + portfólio · JS avançado · npm + TypeScript", tags:["Git","npm","TypeScript"], intro:"Aprenda a versionar seus projetos, trabalhar com pacotes e escrever JavaScript com tipos.", chapters:[
["1. Git e controle de versão",`Git registra alterações em snapshots chamados commits. git status mostra o estado, git add prepara arquivos, git commit cria um registro e git log mostra o histórico. Branches permitem experimentar sem afetar a linha principal.`,"Faça commits pequenos e com mensagens claras: “adiciona validação do formulário” é melhor que “alterações”."],
["2. GitHub e colaboração",`GitHub hospeda repositórios Git. git clone baixa um projeto, git pull atualiza sua cópia e git push envia commits. README deve explicar objetivo, instalação, execução, funcionalidades e tecnologias.`,"Nunca envie senhas, tokens, chaves privadas ou arquivos .env para um repositório público."],
["3. npm e package.json",`npm é o gerenciador de pacotes do ecossistema Node.js. npm init -y cria package.json; npm install instala dependências; npm i nome adiciona um pacote; npm run nome executa scripts definidos no projeto.`,"Se o PowerShell bloquear npm.ps1, você pode executar comandos no Prompt de Comando (cmd) ou ajustar a política de execução com orientação segura do administrador."],
["4. JavaScript assíncrono",`Promises representam operações que terminam no futuro. async/await torna o fluxo assíncrono mais legível; try/catch trata falhas. fetch faz requisições HTTP e response.ok permite verificar respostas bem-sucedidas.`,"Toda chamada de rede pode falhar: trate erro, carregamento e resultado vazio na interface."],
["5. TypeScript",`TypeScript adiciona análise estática de tipos ao JavaScript. Tipos como string, number, boolean, arrays, unions e interfaces ajudam a encontrar erros antes da execução. O código normalmente é compilado para JavaScript.`,"Use tipos para documentar contratos entre funções e dados; evite any quando um tipo mais específico for possível."]
], code:`# iniciar um projeto
npm init -y
npm install

# fluxo Git comum
git status
git add .
git commit -m "adiciona primeira versão"
git push`, exercise:"Crie um repositório público de um projeto, escreva um README com instruções e faça pelo menos três commits com mensagens descritivas."},
{ id:3, week:"Semana 3", icon:"⚛", color:"#45d9ed", title:"Primeiras aplicações com React", subtitle:"Projeto: clima · Componentes, props, JSX, State, Effects, Rendering, Map", tags:["React","JSX","Hooks"], intro:"Monte interfaces por componentes e entenda como dados e estado controlam o que aparece na tela.", chapters:[
["1. Componentes e JSX",`Um componente React é uma função que retorna uma descrição da interface. JSX permite escrever uma sintaxe parecida com HTML dentro do JavaScript. Componentes devem começar com letra maiúscula e podem ser reutilizados.`,"Cada componente deve ter uma responsabilidade compreensível: botão, cartão de clima, busca ou cabeçalho."],
["2. Props e listas",`Props são dados recebidos de um componente pai. Para listas, use map e forneça uma key estável a cada item. Não altere props: elas são entradas do componente.`,"Prefira identificadores estáveis como id em vez do índice quando a lista pode mudar de ordem."],
["3. State e eventos",`useState guarda dados que mudam ao longo do tempo. Atualizar o estado pede uma nova renderização. Não modifique arrays e objetos de estado diretamente; crie novas cópias com spread, map ou filter.`,"Estado é para informação que afeta a interface. Valores que podem ser calculados a partir de outros estados normalmente não precisam de estado próprio."],
["4. Effects e ciclo de vida",`useEffect sincroniza o componente com sistemas externos, como APIs, timers ou eventos do navegador. A lista de dependências define quando o efeito deve rodar. Limpe assinaturas e timers quando necessário.`,"Não use useEffect para todo cálculo: derivar um valor durante a renderização costuma ser mais simples."],
["5. Projeto: clima",`Crie campo de busca de cidade, estados de carregamento, erro e resultado. Faça uma requisição a uma API meteorológica e mostre temperatura, descrição e nome da cidade. Guarde a chave da API de forma segura conforme as regras do serviço.`,"Não exponha segredos no frontend; aplicações públicas precisam de limites e cuidados com chaves de API."]
], code:`function CartaoClima({ cidade, temperatura }) {
  return (
    <article className="cartao">
      <h2>{cidade}</h2>
      <p>{temperatura} °C</p>
    </article>
  );
}

function Contador() {
  const [valor, setValor] = React.useState(0);
  return <button onClick={() => setValor(v => v + 1)}>
    Cliques: {valor}
  </button>;
}`, exercise:"Construa um app de clima com busca, indicador de carregamento, mensagem de erro e cartão de resultado. Depois adicione uma lista de cidades favoritas."},
{ id:4, week:"Semana 4", icon:"▱", color:"#35c9ef", title:"React moderno com Tailwind e Zustand", subtitle:"TailwindCSS · Projeto: Chat offline · Context API + Zustand", tags:["Tailwind","Context","Zustand"], intro:"Organize estilos utilitários e escolha estratégias de estado compartilhado sem complicar a aplicação.", chapters:[
["1. Tailwind CSS",`Tailwind oferece classes utilitárias para cor, espaçamento, tipografia, bordas e responsividade. Por exemplo, flex, gap-4, rounded-xl, p-4 e md:grid-cols-2 descrevem estilos diretamente no markup.`,"Mantenha consistência usando uma escala de espaçamentos e extraia componentes quando as classes se repetirem demais."],
["2. Responsividade e acessibilidade",`Projete primeiro para telas pequenas e amplie com breakpoints. Garanta contraste, foco visível, labels, navegação por teclado e botões com nomes claros. Cor não deve ser o único sinal de estado.`,"Teste em celular e desktop; responsividade é comportamento, não apenas diminuir o tamanho dos elementos."],
["3. Context API",`Context compartilha valores em uma árvore de componentes, como tema ou usuário autenticado. Um provider disponibiliza o valor e useContext permite consumi-lo. Mudanças frequentes em contextos amplos podem renderizar muitos componentes.`,"Use Context quando o dado atravessa muitos níveis e tem escopo coerente."],
["4. Zustand",`Zustand é uma biblioteca de estado global com uma store simples. Componentes selecionam apenas os dados necessários. É útil para carrinho, preferências ou estado de conversas; não substitui automaticamente estado local.`,"Escolha a ferramenta mais simples que resolve o problema atual."],
["5. Projeto: chat offline",`Crie lista de conversas, mensagens, campo de envio e horários. Salve conversas localmente com localStorage para persistir após recarregar. Explique que esse chat é local e não transmite mensagens para outras pessoas.`,"Valide mensagens vazias e mantenha a rolagem e o foco confortáveis para quem usa teclado."]
], code:`// Exemplo de classes Tailwind
function BotaoEnviar() {
  return <button className="rounded-xl bg-blue-600 px-4 py-2
    font-semibold text-white hover:bg-blue-500 focus:outline
    focus:outline-2 focus:outline-offset-2">
    Enviar mensagem
  </button>;
}`, exercise:"Faça uma interface de chat com conversas de exemplo e persistência local. Acrescente tema claro/escuro e um botão para apagar o histórico com confirmação."},
{ id:5, week:"Semana 5", icon:"▤", color:"#60d78a", title:"Back-end com Node, Express e PostgreSQL", subtitle:"Projeto: chat multi-conversa · Rotas, controllers · Docker + PostgreSQL", tags:["Node.js","Express","PostgreSQL"], intro:"Construa um servidor HTTP, separe responsabilidades e conecte a aplicação a um banco relacional.", chapters:[
["1. Node.js",`Node.js permite executar JavaScript fora do navegador. É útil para APIs, scripts e ferramentas. O event loop permite lidar com operações de I/O sem bloquear continuamente a execução; tarefas pesadas de CPU exigem atenção especial.`,"Separe configuração, rotas, regras de negócio e acesso a dados para facilitar manutenção."],
["2. Express e rotas",`Express organiza endpoints HTTP. Uma rota combina método e caminho, como GET /api/usuarios. Middleware pode registrar requisições, validar dados e tratar autenticação. Controllers coordenam a resposta e devem retornar códigos HTTP adequados.`,"Use 400 para entrada inválida, 401 quando falta autenticação, 403 para falta de permissão, 404 para recurso ausente e 500 para falha inesperada."],
["3. PostgreSQL e SQL",`PostgreSQL é um banco relacional. Tabelas organizam registros por colunas. Use chave primária, chaves estrangeiras, restrições e índices quando fizer sentido. Consultas parametrizadas ajudam a prevenir SQL injection.`,"Não concatene dados do usuário diretamente em uma query SQL."],
["4. Docker",`Docker empacota uma aplicação e suas dependências em containers. Um Dockerfile descreve a imagem; Docker Compose pode iniciar serviços como API e banco. Volumes preservam dados do banco entre reinicializações.`,"Não publique portas, senhas ou serviços administrativos sem entender os riscos de segurança."],
["5. Projeto: chat multi-conversa",`Modele usuários, conversas e mensagens. Cada mensagem pertence a uma conversa e tem autor, conteúdo e data. Crie endpoints para listar conversas, buscar mensagens e enviar uma nova mensagem.`,"A interface deve diferenciar erro de rede, conversa vazia e envio bem-sucedido."]
], code:`import express from "express";
const app = express();
app.use(express.json());

app.get("/api/saude", (req, res) => {
  res.json({ status: "ok" });
});

app.listen(3000, () => {
  console.log("API disponível na porta 3000");
});`, exercise:"Crie uma API Express com rotas CRUD de tarefas. Primeiro use dados em memória; depois conecte ao PostgreSQL com queries parametrizadas e variáveis de ambiente."},
{ id:6, week:"Semana 6", icon:"▤", color:"#ffb02e", title:"SQL, Drizzle e API com banco de dados", subtitle:"Modelagem estrutural · SELECT, WHERE, JOIN, subquery · Drizzle ORM", tags:["SQL","Drizzle ORM","Modelagem"], intro:"Aprenda a pensar os dados antes de codificar e consulte informações com SQL de forma segura.", chapters:[
["1. Modelagem relacional",`Identifique entidades, atributos e relações. Uma tabela representa um tipo de entidade; cada linha é um registro. Normalize os dados para reduzir duplicação e use chaves estrangeiras para manter integridade.`,"Exemplo: usuarios, conversas e mensagens são entidades diferentes ligadas por IDs."],
["2. Consultas fundamentais",`SELECT escolhe colunas, FROM indica a origem, WHERE filtra, ORDER BY ordena e LIMIT restringe a quantidade. Agregações como COUNT, SUM e AVG resumem registros; GROUP BY agrupa resultados.`,"Especifique colunas em vez de usar SELECT * em consultas de produção quando puder."],
["3. JOIN e subconsultas",`INNER JOIN retorna correspondências entre tabelas; LEFT JOIN mantém todas as linhas da tabela à esquerda mesmo sem correspondência. Subconsultas podem expressar filtros ou cálculos, mas compare legibilidade e desempenho.`,"Desenhe a relação entre as tabelas antes de escrever uma consulta complexa."],
["4. Drizzle ORM",`Drizzle oferece uma forma tipada de descrever schema e consultas em TypeScript. O schema representa tabelas e relações; migrations versionam mudanças. ORM não elimina a necessidade de entender SQL, índices e transações.`,"Revise migrations antes de aplicá-las em produção e mantenha backup dos dados importantes."],
["5. API e persistência",`Uma API recebe dados, valida o formato, aplica regras e consulta o banco. Use transações quando múltiplas operações precisarem acontecer juntas. Paginação evita retornar milhares de registros de uma só vez.`,"Nunca confie apenas na validação do navegador: valide novamente no servidor."]
], code:`-- Exemplo de consulta
SELECT usuarios.nome, COUNT(mensagens.id) AS total
FROM usuarios
LEFT JOIN mensagens
  ON mensagens.autor_id = usuarios.id
GROUP BY usuarios.id, usuarios.nome
ORDER BY total DESC;`, exercise:"Modele um pequeno sistema de biblioteca com tabelas livros, usuários e empréstimos. Escreva consultas para listar empréstimos ativos e livros nunca emprestados."},
{ id:7, week:"Semana 7", icon:"⬡", color:"#a78bfa", title:"APIs com Zod, JWT, bcrypt e testes", subtitle:"Validação · Autenticação/autorização · TDD + testes unitários e integração", tags:["Zod","JWT","Testes"], intro:"Valide entradas, proteja contas e prove o comportamento do código com testes automatizados.", chapters:[
["1. Validação com Zod",`Validação de entrada confere se os dados recebidos têm formato e valores aceitáveis. Zod permite descrever schemas e inferir tipos TypeScript. Valide body, params e query string no servidor.`,"Validação de dados não substitui autorização; um ID válido ainda pode pertencer a outra pessoa."],
["2. Senhas com bcrypt",`Senhas devem ser armazenadas como hashes, nunca em texto puro. bcrypt usa salt e custo computacional. Compare a senha fornecida com o hash durante login e aplique limites de tentativas e boas práticas de recuperação.`,"Não registre senhas, tokens ou informações sensíveis em logs."],
["3. JWT: autenticação e autorização",`Um JWT assinado pode transportar claims e expiração. O servidor verifica assinatura, emissor/audiência quando aplicável e expiração. Autenticação responde “quem é você?”; autorização responde “você pode fazer isso?”.`,"Um JWT assinado normalmente não é criptografado. Não coloque segredos em seu payload."],
["4. Testes e TDD",`Testes unitários verificam unidades pequenas; testes de integração verificam colaboração entre módulos e serviços. TDD segue um ciclo: teste falha, implemente o mínimo e refatore. Testes devem ser determinísticos e independentes.`,"Teste casos válidos, inválidos, limites e falhas esperadas."],
["5. Segurança prática",`Use HTTPS, variáveis de ambiente, dependências atualizadas, validação, autorização por recurso, mensagens de erro cuidadosas e limites de requisição. CORS controla quais origens de navegador podem ler respostas; não é autenticação.`,"Nunca confie em um botão escondido no frontend como mecanismo de segurança."]
], code:`// Exemplo conceitual com Zod
import { z } from "zod";

const criarUsuarioSchema = z.object({
  nome: z.string().min(2),
  email: z.string().email(),
  senha: z.string().min(8)
});

// No servidor, valide antes de usar os dados.
const resultado = criarUsuarioSchema.safeParse(req.body);`, exercise:"Implemente cadastro e login com validação, hash de senha e rotas protegidas. Escreva testes para cadastro válido, e-mail inválido, senha incorreta e acesso sem token."},
{ id:8, week:"Semana 8", icon:"◇", color:"#f06ab3", title:"Arquitetura com SOLID, DTOs e Use Cases", subtitle:"Projeto: API de usuário + posts · Spec-driven + TDD · Clean Architecture", tags:["SOLID","DTO","Arquitetura"], intro:"Estruture projetos para que regras de negócio não fiquem presas ao framework, banco ou interface.", chapters:[
["1. Princípios SOLID",`S: uma responsabilidade principal por módulo. O: permita extensão sem alterar excessivamente código estável. L: implementações devem respeitar contratos. I: prefira interfaces específicas. D: módulos de alto nível dependem de abstrações.`,"SOLID é um conjunto de heurísticas, não uma obrigação de criar dezenas de classes."],
["2. DTOs e contratos",`DTO significa Data Transfer Object: define os dados que atravessam uma fronteira. Evite expor diretamente modelos internos do banco. Contratos explícitos ajudam a validar entradas e controlar o formato das respostas.`,"Um DTO de criação não precisa conter id ou data de criação gerados pelo servidor."],
["3. Use Cases",`Um use case representa uma ação de negócio, como CriarUsuario ou PublicarPost. Recebe dados, aplica regras e coordena dependências. Controllers traduzem HTTP para chamadas de use case e convertem resultados em respostas.`,"Se a regra é importante para o negócio, tente mantê-la testável sem iniciar servidor ou banco."],
["4. Clean Architecture",`A arquitetura separa domínio, casos de uso, adaptadores e infraestrutura. Dependências devem apontar para dentro: regras centrais não precisam conhecer Express ou o driver do banco. Repositórios podem ser definidos como contratos e implementados na infraestrutura.`,"Arquitetura boa reduz o custo de mudança; não precisa ser complexa para um projeto pequeno."],
["5. Spec-driven e TDD",`Antes de implementar, escreva requisitos observáveis, exemplos de entrada/saída e critérios de aceite. Transforme critérios em testes. Implemente gradualmente e revise se a solução atende ao contrato.`,"Um requisito claro evita discutir apenas detalhes de código sem saber qual problema está sendo resolvido."]
], code:`// Contrato simples de um caso de uso
type CriarUsuarioInput = {
  nome: string;
  email: string;
};

type UsuarioRepository = {
  criar(dados: CriarUsuarioInput): Promise<{ id: string }>;
};

class CriarUsuario {
  constructor(private repo: UsuarioRepository) {}
  executar(input: CriarUsuarioInput) {
    if (input.nome.trim().length < 2) {
      throw new Error("Nome inválido");
    }
    return this.repo.criar(input);
  }
}`, exercise:"Refatore a API de usuários: controller HTTP, DTO de entrada, use case, contrato de repositório e implementação PostgreSQL. Teste o caso de uso com repositório falso."},
{ id:9, week:"Semana 9", icon:"↥", color:"#fb7185", title:"Uploads, imagens, email e observabilidade", subtitle:"Error handling global + logging · Likes/replies · Upload + imagens", tags:["Upload","Email","Logs"], intro:"Trate falhas, aceite arquivos com segurança e torne a aplicação mais fácil de monitorar.", chapters:[
["1. Tratamento global de erros",`Padronize erros conhecidos e inesperados. O cliente recebe mensagens úteis sem detalhes internos sensíveis. Logs do servidor podem guardar contexto técnico, request ID e stack trace conforme a política de segurança.`,"Não envie stack traces, caminhos internos ou segredos na resposta pública."],
["2. Logs e observabilidade",`Logs registram eventos; métricas quantificam comportamento; traces ajudam a acompanhar uma requisição por vários serviços. Registre tempo de resposta, taxa de erros e operações importantes, evitando dados pessoais desnecessários.`,"Um log estruturado em JSON costuma ser mais fácil de pesquisar em produção."],
["3. Upload e imagens",`Valide tamanho, extensão e tipo real do arquivo. Gere nomes únicos, limite dimensões quando necessário e armazene fora de diretórios executáveis. Em produção, armazenamento de objetos pode ser mais adequado que o disco local.`,"Nunca confie apenas no nome do arquivo ou no Content-Type enviado pelo cliente."],
["4. Email transacional",`Emails podem confirmar cadastro, recuperar conta ou notificar uma ação. Use um provedor apropriado, templates claros e links com expiração. Evite enviar segredos e proteja endpoints de recuperação contra abuso.`,"Em desenvolvimento, use um ambiente de teste para não disparar mensagens reais por engano."],
["5. Likes e respostas",`Likes e replies exigem regras de autorização e relações consistentes. Evite likes duplicados com uma restrição única no banco. Paginação e ordenação ajudam quando posts acumulam muitas respostas.`,"Pense nos estados de erro: conteúdo removido, usuário sem permissão ou duplicidade."]
], code:`// Middleware conceitual de erro no Express
app.use((err, req, res, next) => {
  console.error({
    message: err.message,
    path: req.path
  });
  res.status(err.statusCode || 500).json({
    erro: "Não foi possível concluir a solicitação."
  });
});`, exercise:"Adicione upload de avatar com limite de tamanho e tipo permitido, logs de erro com identificador de requisição e uma rota de likes que impeça duplicatas."},
{ id:10, week:"Semana 10", icon:"☷", color:"#ff6268", title:"Filas com Redis, BullMQ e integração fullstack", subtitle:"Queues (Redis + BullMQ) · Frontend + Backend integrados", tags:["Redis","BullMQ","Integração"], intro:"Tire tarefas demoradas do caminho da requisição e conecte a interface à API com estados previsíveis.", chapters:[
["1. Por que usar filas?",`Uma fila permite executar tarefas em segundo plano, como envio de email, processamento de imagem ou relatórios. A API confirma o recebimento e um worker processa a tarefa depois. Isso reduz espera, mas exige monitoramento e política de repetição.`,"Nem toda operação precisa de fila: comece com o fluxo simples e adicione quando houver uma necessidade concreta."],
["2. Redis",`Redis é um armazenamento em memória que oferece estruturas como strings, hashes, listas e conjuntos. Pode servir para cache, coordenação e filas. Configure persistência e segurança de acordo com a importância dos dados.`,"Não trate cache como fonte definitiva de dados sem planejar consistência e expiração."],
["3. BullMQ",`BullMQ usa Redis para gerenciar jobs. Um producer adiciona tarefas; workers processam; tentativas e backoff ajudam a lidar com falhas transitórias. Jobs devem ser idempotentes quando podem ser repetidos.`,"Se o job enviar um email e falhar depois, uma nova tentativa pode enviar duplicado: planeje idempotência."],
["4. Integração frontend/backend",`Defina contratos de API, formatos de erro e autenticação. O frontend precisa mostrar carregamento, sucesso, erro e estado vazio. Centralize a configuração da URL base e trate respostas não-2xx.`,"CORS, cookies, tokens e variáveis de ambiente precisam ser configurados de acordo com o ambiente."],
["5. Projeto integrado",`Conecte o React à API Express, persista dados no PostgreSQL e use uma fila para uma tarefa secundária. Documente variáveis necessárias, comandos para iniciar os serviços e decisões técnicas.`,"O projeto deve funcionar a partir de instruções reproduzíveis em uma máquina nova."]
], code:`// Exemplo conceitual de uma fila BullMQ
import { Queue } from "bullmq";

const emailsQueue = new Queue("emails", {
  connection: { host: "127.0.0.1", port: 6379 }
});

await emailsQueue.add("boas-vindas", {
  usuarioId: "123"
});`, exercise:"Integre frontend e API em um app de tarefas. Ao criar uma tarefa, agende um job de notificação fictícia e registre o status do processamento."},
{ id:11, week:"Semana 11", icon:"↗", color:"#38d9a9", title:"Stripe, Playwright, CI/CD e deploy", subtitle:"Pagamentos · Testes e2e · CI e CD (Vercel)", tags:["Stripe","Playwright","Deploy"], intro:"Prepare a aplicação para usuários reais com pagamentos, testes de ponta a ponta e publicação automatizada.", chapters:[
["1. Integração de pagamentos",`Um provedor como Stripe processa pagamentos sem que você manipule diretamente dados de cartão. O servidor cria a sessão ou intenção de pagamento e o cliente segue o fluxo seguro do provedor. Webhooks notificam eventos do pagamento.`,"Nunca confie apenas na página de sucesso do navegador; valide o estado no servidor por meio de eventos verificados."],
["2. Webhooks",`Webhooks são requisições enviadas por um serviço quando um evento acontece. Verifique assinatura, trate duplicatas e responda rapidamente. Registre o ID do evento para evitar processá-lo duas vezes.`,"Use ambiente de teste e nunca publique chaves secretas no código do frontend."],
["3. Playwright e testes e2e",`Playwright automatiza navegador para testar fluxos completos. Um teste pode abrir a página, preencher formulário, enviar e verificar a resposta. Use dados de teste previsíveis e evite depender de serviços externos instáveis.`,"Testes e2e complementam testes unitários; não precisam cobrir cada combinação possível."],
["4. CI/CD",`Integração contínua executa verificações em mudanças, como lint, testes e build. Entrega/deploy contínuo automatiza publicação. Segredos devem ficar nas configurações protegidas da plataforma, não no repositório.`,"Uma pipeline mínima pode instalar dependências, executar testes e gerar build antes de publicar."],
["5. Deploy",`Frontend pode ser hospedado em plataformas como Vercel; API e banco precisam de serviços compatíveis. Configure variáveis de ambiente, domínio, HTTPS, logs, backups e migrações. Teste a aplicação publicada, não apenas localmente.`,"Tenha um plano de rollback e monitore os primeiros minutos após uma publicação."]
], code:`// Exemplo de teste Playwright
import { test, expect } from "@playwright/test";

test("mostra a página inicial", async ({ page }) => {
  await page.goto("/");
  await expect(
    page.getByRole("heading", { name: /bem-vindo/i })
  ).toBeVisible();
});`, exercise:"Publique o frontend, configure CI para rodar testes e build e escreva um teste Playwright para o fluxo principal. Se incluir pagamentos, use apenas modo de teste até validar tudo."},
{ id:12, week:"Projeto final", icon:"▣", color:"#16c6d7", title:"Projeto final: sistema de agendamento via WhatsApp", subtitle:"Projeto Full Stack com WhatsApp · Sistema de agendamento", tags:["Projeto final","Full Stack","WhatsApp"], intro:"Una os conhecimentos da trilha em um produto demonstrável, documentado e com limites claros.", chapters:[
["1. Requisitos do produto",`Defina quem agenda, quem administra e quais serviços existem. Requisitos iniciais: listar serviços, escolher data/horário, cadastrar contato, confirmar agendamento, cancelar e consultar agenda. Escreva critérios de aceite para cada fluxo.`,"Comece com um MVP pequeno e evite adicionar funcionalidades antes de validar o fluxo central."],
["2. Modelo de dados",`Uma estrutura inicial pode conter usuarios, servicos, agendamentos e mensagens. O agendamento guarda serviço, cliente, início, fim e status. Restrinja conflitos de horário no servidor e no banco sempre que possível.`,"Defina fuso horário, duração dos serviços, intervalos e política de cancelamento antes de programar."],
["3. API e interface",`O React mostra calendário ou lista de horários disponíveis. O Express valida dados, verifica disponibilidade e persiste no PostgreSQL. A interface deve informar sucesso apenas depois da confirmação do servidor.`,"Não confie na disponibilidade calculada somente no navegador: duas pessoas podem escolher o mesmo horário."],
["4. WhatsApp",`Para integração real, use a plataforma oficial do WhatsApp Business ou um provedor autorizado, respeitando consentimento, templates e regras aplicáveis. Durante o desenvolvimento, simule mensagens com uma caixa de saída de teste.`,"Não automatize mensagens em massa sem consentimento nem exponha tokens de acesso."],
["5. Entrega profissional",`Inclua README, imagens da aplicação, demonstração, instruções de instalação, diagrama simples, endpoints documentados, testes, variáveis de ambiente de exemplo e link do deploy. Remova dados pessoais de demonstrações públicas.`,"Apresente decisões técnicas e limitações conhecidas: isso demonstra maturidade além de apenas mostrar telas."]
], code:`// Exemplo de contrato para criar agendamento
POST /api/agendamentos
Content-Type: application/json

{
  "servicoId": "servico-01",
  "inicio": "2026-11-02T14:00:00-03:00",
  "cliente": {
    "nome": "Cliente de demonstração",
    "telefone": "numero-de-teste"
  }
}

// Resposta esperada: 201 Created com o agendamento
// confirmado ou 409 Conflict se o horário estiver ocupado.`, exercise:"Construa um MVP de agendamento com serviços, horários disponíveis, cadastro e cancelamento. Faça testes de conflito, documente a API e prepare uma demonstração segura da integração com WhatsApp."}
];

const sideNav = document.querySelector("#sideNav");
const bookGrid = document.querySelector("#bookGrid");
const reader = document.querySelector("#reader");
const overview = document.querySelector("#overview");
const librarySection = document.querySelector(".library-section");
const progressPanel = document.querySelector(".progress-panel");
const readerContent = document.querySelector("#readerContent");
let completed = new Set(JSON.parse(localStorage.getItem("fs-books-done") || "[]"));
let currentBook = null;

function saveProgress(){localStorage.setItem("fs-books-done",JSON.stringify([...completed]));updateProgress();renderBooks();}
function updateProgress(){
  const count=completed.size, percent=Math.round(count/books.length*100);
  document.querySelector("#progressText").textContent=`${count} de ${books.length} livros concluídos`;
  document.querySelector("#progressPercent").textContent=`${percent}%`;
  document.querySelector("#progressBar").style.width=`${percent}%`;
  document.querySelector(".status-dot").style.background=count===books.length?"var(--green)":"var(--cyan)";
}
function renderNav(){
  sideNav.innerHTML=books.map(b=>`<button class="nav-item" data-open="${b.id}"><span class="nav-num" style="color:${b.color}">${String(b.id).padStart(2,"0")}</span><span>${b.week}: ${b.title}</span></button>`).join("");
}
function renderBooks(){
  const q=document.querySelector("#searchInput").value.toLowerCase().trim();
  const filter=document.querySelector("#filterSelect").value;
  const filtered=books.filter(b=>{
    const matches=(b.title+" "+b.subtitle+" "+b.tags.join(" ")).toLowerCase().includes(q);
    return matches&&(filter==="all"||(filter==="done"&&completed.has(b.id))||(filter==="todo"&&!completed.has(b.id)));
  });
  bookGrid.innerHTML=filtered.length?filtered.map(b=>`<article class="book-card">
    <div class="book-top"><span class="book-icon" style="color:${b.color};background:${b.color}18">${b.icon}</span><span class="book-num">LIVRO ${String(b.id).padStart(2,"0")}</span></div>
    <h3>${b.title}</h3><p>${b.subtitle}</p>
    <div class="tag-row">${b.tags.map(t=>`<span class="tag">${t}</span>`).join("")}</div>
    <div class="card-bottom"><button class="read-btn" data-open="${b.id}">Ler livro →</button><button class="done-btn ${completed.has(b.id)?"done":""}" data-done="${b.id}">${completed.has(b.id)?"✓ Concluído":"Marcar concluído"}</button></div>
  </article>`).join(""):`<p style="color:var(--muted);font-size:13px">Nenhum livro encontrado. Tente outra busca ou filtro.</p>`;
}
function openBook(id){
  const b=books.find(item=>item.id===Number(id));if(!b)return;currentBook=b;
  document.querySelector("#crumb").textContent=b.title;
  document.querySelectorAll(".nav-item").forEach(n=>n.classList.toggle("active",Number(n.dataset.open)===b.id));
  overview.classList.add("hidden");progressPanel.classList.add("hidden");librarySection.classList.add("hidden");reader.classList.remove("hidden");
  readerContent.innerHTML=`<div class="reader-head"><div class="book-icon" style="color:${b.color};background:${b.color}18">${b.icon}</div><div class="reader-meta">${b.week.toUpperCase()} · LIVRO ${String(b.id).padStart(2,"0")}</div><h2>${b.title}</h2><p>${b.intro}</p><div class="tag-row">${b.tags.map(t=>`<span class="tag">${t}</span>`).join("")}</div></div>
  <section class="chapter"><h3>O que você vai aprender</h3><ul>${b.chapters.map(c=>`<li>${c[0].replace(/^\d+\.\s*/,"")}</li>`).join("")}</ul></section>
  ${b.chapters.map(c=>`<section class="chapter"><h3>${c[0]}</h3><p>${escapeHtml(c[1])}</p><div class="callout">💡 <strong>Na prática:</strong> ${escapeHtml(c[2])}</div></section>`).join("")}
  <section class="chapter"><h3>Exemplo de código</h3><p>Use este trecho como ponto de partida. Experimente, execute e modifique para entender como funciona.</p><pre><code>${escapeHtml(b.code)}</code></pre><button class="done-btn" id="copyCode">Copiar código</button></section>
  <section class="chapter"><div class="exercise"><h4>🎯 Exercício do livro</h4><p>${b.exercise}</p><button id="showHint">Mostrar dica de estudo</button><p id="hint" class="answer hidden">Divida o exercício em tarefas pequenas. Faça primeiro a versão mínima funcionar, teste cada parte e depois melhore o visual e os casos de erro.</p></div></section>
  <div class="reader-actions"><button class="primary-btn" id="markCurrent">${completed.has(b.id)?"✓ Livro concluído":"Marcar livro como concluído"}</button>${b.id<12?`<button id="nextBook">Próximo livro →</button>`:""}</div>`;
  document.querySelector("#copyCode").addEventListener("click",()=>copyText(b.code));
  document.querySelector("#showHint").addEventListener("click",()=>document.querySelector("#hint").classList.toggle("hidden"));
  document.querySelector("#markCurrent").addEventListener("click",()=>{completed.has(b.id)?completed.delete(b.id):completed.add(b.id);saveProgress();openBook(b.id);});
  const next=document.querySelector("#nextBook");if(next)next.addEventListener("click",()=>openBook(b.id+1));
  window.scrollTo({top:0,behavior:"smooth"});
}
function escapeHtml(value){return value.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;");}
async function copyText(value){try{await navigator.clipboard.writeText(value);const btn=document.querySelector("#copyCode");btn.textContent="Código copiado!";setTimeout(()=>btn.textContent="Copiar código",1500);}catch{alert("Não foi possível copiar automaticamente. Selecione o código e copie manualmente.");}}
function backToLibrary(){reader.classList.add("hidden");overview.classList.remove("hidden");progressPanel.classList.remove("hidden");librarySection.classList.remove("hidden");document.querySelector("#crumb").textContent="Visão geral";document.querySelectorAll(".nav-item").forEach(n=>n.classList.remove("active"));window.scrollTo({top:0,behavior:"smooth"});}
sideNav.addEventListener("click",e=>{const btn=e.target.closest("[data-open]");if(btn){openBook(btn.dataset.open);document.querySelector(".sidebar").classList.remove("open");}});
bookGrid.addEventListener("click",e=>{const open=e.target.closest("[data-open]");const done=e.target.closest("[data-done]");if(open)openBook(open.dataset.open);if(done){const id=Number(done.dataset.done);completed.has(id)?completed.delete(id):completed.add(id);saveProgress();}});
document.querySelector("#searchInput").addEventListener("input",renderBooks);
document.querySelector("#filterSelect").addEventListener("change",renderBooks);
document.querySelector("#backBtn").addEventListener("click",backToLibrary);
document.querySelector("#continueBtn").addEventListener("click",()=>{const next=books.find(b=>!completed.has(b.id))||books[0];openBook(next.id);});
document.querySelector("#themeToggle").addEventListener("click",()=>{document.body.classList.toggle("light");localStorage.setItem("fs-theme",document.body.classList.contains("light")?"light":"dark");});
document.querySelector("#mobileMenu").addEventListener("click",()=>document.querySelector(".sidebar").classList.toggle("open"));
if(localStorage.getItem("fs-theme")==="light")document.body.classList.add("light");
renderNav();renderBooks();updateProgress();
