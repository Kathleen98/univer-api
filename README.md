# Univer Streaming API

> API REST para a plataforma de streaming reimaginada - Backend do projeto Univer Videos

## 🎯 Por que estou construindo essa API

Como desenvolvedora com maior experiência em front-end, decidi aprofundar meus conhecimentos em back-end criando uma API robusta para o projeto Univer Streaming. Este projeto me permite explorar conceitos fundamentais do desenvolvimento backend e posteriormente fazer a transição para o NestJS, entendendo na prática quais problemas esse framework resolve.

## 🚀 Tecnologias Utilizadas

<div align="center">

| Tecnologia | Descrição |
|------------|-----------|
| ![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white) | Runtime JavaScript para servidor |
| ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white) | Superset JavaScript com tipagem estática |
| ![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express) | Framework web minimalista para Node.js |
| ![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white) | ORM moderno para TypeScript e Node.js |
| ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white) | Banco de dados relacional avançado |

</div>

## 🛠️ Por que estou usando essa stack

Escolhi essas tecnologias com o objetivo de construir uma base sólida em desenvolvimento backend e posteriormente migrar para o NestJS. Cada tecnologia foi selecionada estrategicamente:

### 🎯 Minha jornada de aprendizado:

- **Express.js**: Entender os fundamentos do desenvolvimento de APIs REST do zero
- **TypeScript**: Aplicar tipagem estática no backend e melhorar a developer experience
- **Prisma**: Explorar ORMs modernos e gerenciamento de banco de dados
- **PostgreSQL**: Trabalhar com um banco robusto e aprender SQL avançado
- **Arquitetura**: Implementar padrões como Repository, Service Layer e Clean Architecture

### 🔄 Próximos passos planejados:

Após dominar essa stack, pretendo migrar para **NestJS** para entender:
- Injeção de dependências
- Decorators e metadata
- Módulos e arquitetura escalável
- Guards, Interceptors e Pipes
- Diferenças entre abordagem "do zero" vs framework opinativo

## 📋 Funcionalidades da API

- [x] **Autenticação e Autorização**
  - [ ] Registro e login de usuários
  - [x] JWT tokens
  - [ ] Refresh tokens
  
- [ ] **Gerenciamento de Conteúdo**
  - [ ] CRUD de vídeos
  - [ ] Upload de thumbnails
  - [ ] Categorização de conteúdo
  
- [ ] **Funcionalidades de Usuário**
  - [ ] Histórico de visualização
  - [ ] Lista de favoritos
  
- [ ] **Sistema de Busca**
  - [x] Busca por título, categoria, tags
  - [ ] Filtros avançados
  - [ ] Sugestões personalizadas

## 🚦 Como executar o projeto

### Pré-requisitos
- Node.js (versão 18 ou superior)
- PostgreSQL
- npm ou yarn

### Configuração

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/univer-streaming-api.git

# Entre no diretório
cd univer-streaming-api

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.example .env
# Edite o arquivo .env com suas configurações

# Execute as migrações do banco
npx prisma migrate dev

# Gere o cliente Prisma
npx prisma generate

# Execute o projeto em modo de desenvolvimento
npm run dev
```

### Variáveis de Ambiente

```env
DATABASE_URL="postgresql://username:password@localhost:5432/univer_streaming"
JWT_SECRET="seu-jwt-secret-super-secreto"
JWT_EXPIRES_IN="7d"
PORT=3333
```

## 📁 Estrutura do Projeto

```
univer-streaming-api/
├── src/
│   ├── controllers/        # Controladores das rotas
│   ├── services/          # Lógica de negócio
│   ├── repositories/      # Acesso aos dados
│   ├── middlewares/       # Middlewares customizados
│   ├── types/            # Tipos TypeScript
│   ├── utils/            # Funções utilitárias
│   ├── config/           # Configurações da aplicação
│   └── app.ts            # Configuração do Express
├── prisma/
│   ├── schema.prisma     # Schema do banco de dados
│   └── migrations/       # Migrações do banco
├── .env.example         # Exemplo de variáveis de ambiente
└── package.json
```

## 🔗 Endpoints da API

### Autenticação e Registro
```
POST   /register-user    # Registro de usuário
POST   /sign-in       # Login

```

### Usuários
```
GET    /user-info    # Perfil do usuário
```

### Vídeos
```
GET    /video          # Listar vídeos
GET    /video/category/:category      # Filtro de categoria
GET    /video/search            # Busca por título ou descrição
POST   /video-create           # Adiciona vídeos (Admin)
```


## 📊 Banco de Dados

### Gerenciamento com Prisma

```bash
# Visualizar o banco no Prisma Studio
npx prisma studio

# Reset do banco de dados
npx prisma migrate reset

# Deploy das migrações em produção
npx prisma migrate deploy
```

## 🔄 Roadmap de Migração para NestJS

1. **Fase 1**: Implementar toda funcionalidade com Express + TypeScript
2. **Fase 2**: Documentar desafios e limitações encontradas
3. **Fase 3**: Migração gradual para NestJS
4. **Fase 4**: Comparação e documentação dos benefícios

### Pontos de comparação planejados:
- Arquitetura e organização de código
- Testabilidade
- Manutenibilidade
- Developer experience
- Performance
- Curva de aprendizado

## 🤝 Contribuições

Este é um projeto de estudos, mas feedback e sugestões são muito bem-vindos! Especialmente de desenvolvedores backend experientes que podem compartilhar boas práticas.

## 📚 Recursos de Estudo

Documentações e recursos que estou usando nesta jornada:
- [Express.js Documentation](https://expressjs.com/)
- [Prisma Documentation](https://www.prisma.io/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)

## 📝 Licença

Este projeto é desenvolvido para fins educacionais e não possui fins comerciais.

---

<p align="center">
  Sendo desenvolvido com ❤️ e muita curiosidade sobre backend por Kathleen Santos
</p>
