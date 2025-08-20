# 🚀 Cosmic Portfolio

Um portfolio moderno com tema espacial desenvolvido com React, TypeScript e Tailwind CSS.

## 🛠️ Como fazer deploy na Vercel

### **MÉTODO 1: Deploy Automático via GitHub (RECOMENDADO)**

1. **Criar repositório no GitHub:**
   - Acesse [github.com/new](https://github.com/new)
   - Nome: `cosmic-portfolio`
   - Deixe público
   - NÃO marque "Initialize with README"

2. **Subir código para GitHub:**
   ```bash
   # No terminal do VSCode:
   git init
   git add .
   git commit -m "Initial commit: Cosmic Portfolio"
   git branch -M main
   git remote add origin https://github.com/SEU_USERNAME/cosmic-portfolio.git
   git push -u origin main
   ```

3. **Deploy na Vercel:**
   - Acesse [vercel.com](https://vercel.com)
   - Faça login com GitHub
   - Clique em "New Project"
   - Importe seu repositório
   - Clique em "Deploy"

### **MÉTODO 2: Deploy Manual via CLI**

```bash
# Instalar CLI da Vercel
npm i -g vercel

# Deploy
vercel
```

## 🎯 Comandos Úteis

```bash
# Desenvolvimento
npm run dev          # Iniciar servidor de desenvolvimento
npm run build        # Build para produção
npm start           # Servidor de produção

# Git
git add .           # Adicionar mudanças
git commit -m "mensagem"  # Commit
git push            # Enviar para GitHub
```

## 📁 Estrutura do Projeto

```
├── client/          # Frontend React
├── server/          # Backend Express
├── shared/          # Tipos compartilhados
├── dist/           # Build de produção
├── .gitignore      # Arquivos ignorados pelo Git
├── vercel.json     # Configuração do Vercel
└── README.md       # Este arquivo
```

## 🌐 URL Final
Após o deploy, seu site estará disponível em:
`https://seu-projeto.vercel.app`

## 📞 Suporte
Se encontrar problemas, verifique:
1. Todas as dependências estão no package.json
2. O build local funciona com `npm run build`
3. Não há erros de TypeScript
