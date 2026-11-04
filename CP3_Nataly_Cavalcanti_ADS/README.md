# CP3 — Site Pessoal / Portfólio

**Autora:** Nataly Barros Cavalcanti  
**Etapa:** CP3 — Git, deploy e JavaScript  
**Prazo informado no enunciado:** 10/11/2026

## Sobre o projeto

Site pessoal/portfólio desenvolvido ao longo dos checkpoints da disciplina. O CP3 dá continuidade ao mesmo projeto individual, acrescentando uma funcionalidade JavaScript com persistência no navegador, organização para versionamento com Git e publicação na web.

## Estrutura de pastas

```text
CP3_Nataly_Cavalcanti_ADS/
├── index.html
├── curriculo.html
├── formulario.html
├── multimidia.html
├── graficos.html
├── README.md
├── .gitignore
├── css/
│   └── estilos.css
├── js/
│   └── scripts.js
├── img/
├── audio/
└── video/
```

## Funcionalidades do CP3

- Alternância entre tema claro e tema escuro pelo botão no cabeçalho.
- Preferência de tema salva em `localStorage`, permanecendo após atualizar a página e navegar entre as páginas.
- Formulário de contato com validação nativa do navegador.
- Mensagem de confirmação em verde após o preenchimento válido do formulário (feedback demonstrativo no navegador).
- Menu compartilhado e navegação entre as cinco páginas.
- Arquivo JavaScript externo em `js/scripts.js`.
- Folha de estilos compartilhada em `css/estilos.css`.

## Como testar localmente

1. Abra a pasta do projeto no Visual Studio Code.
2. Abra `index.html` no navegador (ou use a extensão Live Server).
3. Clique em **Tema escuro** e confirme que as cores mudam.
4. Atualize a página: a preferência deve continuar aplicada.
5. Navegue para Currículo, Contato, Multimídia e Gráficos: o tema escolhido deve permanecer.
6. Na página Contato, envie o formulário preenchendo os campos obrigatórios. Deve aparecer uma mensagem de confirmação na própria página.
7. Teste também o botão **Limpar campos**.

> Observação: o formulário é demonstrativo. A confirmação aparece no navegador, mas não envia e-mails nem armazena mensagens em um servidor.

## Versionamento e publicação

O repositório Git deve conter commits descritivos, o arquivo `.gitignore` e a tag `cp3-entrega`.

Sugestão de fluxo:

```bash
git init
git add .
git commit -m "CP3: versão inicial do site pessoal"
git branch -M main
git remote add origin URL_DO_NOVO_REPOSITORIO
git push -u origin main

git switch -c feature/tema-escuro
# Faça alterações e registre commits descritivos, se necessário.
git add .
git commit -m "Adicionar tema claro e escuro com localStorage"
git switch main
git merge feature/tema-escuro
git push origin main

git tag -a cp3-entrega -m "Entrega CP3: Git, deploy e JavaScript"
git push origin cp3-entrega
```

Depois, publiquei a branch `main` pelo GitHub Pages (Settings → Pages → Deploy from a branch → `main` → `/(root)`).

## Checklist do CP3

- [x] Cinco páginas HTML mantidas e interligadas.
- [x] CSS externo em `css/estilos.css`.
- [x] JavaScript externo em `js/scripts.js`.
- [x] Funcionalidade interativa com persistência em `localStorage`.
- [x] Formulário com validação nativa e feedback visual.
- [x] `.gitignore` incluído.
- [x] Criar repositório GitHub novo para este projeto individual.
- [x] Registrar histórico com commits descritivos.
- [x] Criar e enviar a tag `cp3-entrega`.
- [x] Publicar o site com HTTPS.
- [x] Testar todas as páginas e links em janela anônima.

## Etapas anteriores

- **CP1:** estrutura HTML semântica e CSS externo.
- **CP2:** evolução responsiva com Flexbox, Grid e media queries.
- **CP3:** Git, deploy e JavaScript com persistência no navegador.
