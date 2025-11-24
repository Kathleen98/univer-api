# Univer Streaming API

> API REST para a plataforma de streaming reimaginada - Agora sendo construída com Nest JS

## 🎯 Por que estou construindo essa API

Como desenvolvedora com maior experiência em front-end, decidi aprofundar meus conhecimentos em back-end criando uma API robusta para o projeto Univer Streaming. Este projeto me permite explorar conceitos fundamentais do desenvolvimento backend e posteriormente fazer a transição para o NestJS, entendendo na prática quais problemas esse framework resolve.

## 🚀 Tecnologias Utilizadas

<div align="center">

| Tecnologia | Descrição |
|------------|-----------|
| ![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white) | Runtime JavaScript para servidor |
| ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white) | Superset JavaScript com tipagem estática |
| ![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white) | Framework progressivo para Node.js |
| ![TypeORM](https://img.shields.io/badge/TypeORM-FE0803?style=for-the-badge&logo=typeorm&logoColor=white) | ORM para TypeScript e JavaScript |
| ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white) | Banco de dados relacional avançado |
| ![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white) | Backend as a Service com PostgreSQL |
| ![Zod](https://img.shields.io/badge/Zod-3068B7?style=for-the-badge&logo=zod&logoColor=white) | Validação de schemas TypeScript-first |
| ![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white) | Framework de testes em JavaScript |

</div>

## 🛠️ Por que estou usando essa stack

Escolhi essas tecnologias com o objetivo de construir uma base sólida em desenvolvimento backend e posteriormente migrar para o NestJS. Cada tecnologia foi selecionada estrategicamente:

### 🎯 Minha jornada de aprendizado:

- **NestJS**: Dominar um framework enterprise-grade com arquitetura modular e injeção de dependências
- **TypeScript**: Aplicar tipagem estática no backend e melhorar a developer experience
- **TypeORM**: Explorar ORMs robustos, migrations e relacionamentos complexos de banco de dados
- **PostgreSQL + Supabase**: Trabalhar com um banco robusto, aprender SQL avançado e explorar BaaS
- **Zod**: Implementar validação de schemas type-safe e substituir decorators tradicionais
- **Arquitetura**: Implementar padrões como Repository, Service Layer, DTOs e princípios SOLID
- **Testing**: Desenvolver testes unitários e e2e com Jest seguindo boas práticas

### 🔄 Próximos passos planejados:

Após dominar essa stack, pretendo migrar para **NestJS** para entender:
- Injeção de dependências
- Decorators e metadata
- Módulos e arquitetura escalável
- Guards, Interceptors e Pipes
- Diferenças entre abordagem "do zero" vs framework opinativo

## 📋 Funcionalidades da API

- [x] **Autenticação e Autorização**
  - [x] Autenticação delegada ao Supabase Auth
  - [x] JWT tokens gerenciados pelo Supabase
  - [x] Segurança de senhas e tokens sob responsabilidade do Supabase
  - [x] Implementação de Guards personalizados para rotas protegidas
  
- [ ] **Gerenciamento de Conteúdo**
  - [ ] CRUD de vídeos
  - [ ] Upload de thumbnails (Supabase Storage)
  - [ ] Categorização de conteúdo
  
- [ ] **Funcionalidades de Usuário**
  - [ ] Histórico de visualização
  - [ ] Lista de favoritos
  - [ ] Perfil de usuário
  
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

# Execute o projeto em modo de desenvolvimento
npm run star:dev
```

## 📁 Estrutura do Projeto

```
univer-streaming-api/
├── src/
│   ├── controllers/        # Controladores das rotas
│   ├── services/          # Lógica de negócio
│   ├── middlewares/       # Middlewares customizados
│   ├── @types/            # Tipos TypeScript
│   ├── server.ts/           # Configurações da aplicação
│   └── routes.ts            # Configuração do Express
├── prisma/
│   ├── schema.prisma     # Schema do banco de dados
│   └── migrations/       # Migrações do banco
├── .env.example         # Exemplo de variáveis de ambiente
└── package.json
```

## 🔗 Endpoints da API

### Autenticação e Registro
```
POST  /signup     # Registro de usuário
POST  /signin     # Login
POST  /signout    #Logout
POST  /refresh    #token revalidation
```

### Usuários
```
GET   /me         #User Infos
```

### Vídeos
```
GET    /video          # Listar vídeos
GET    /video/category/:category      # Filtro de categoria
GET    /video/search            # Busca por título ou descrição
POST   /video-create           # Adiciona vídeos (Admin)
```


## 📊 Banco de Dados

### PostgreSQL + Supabase


## 🤝 Contribuições

Este é um projeto de estudos, mas feedback e sugestões são muito bem-vindos! Especialmente de desenvolvedores backend experientes que podem compartilhar boas práticas.

## 📚 Recursos de Estudo

Documentações e recursos que estou usando nesta jornada:
- [Express.js Documentation](https://expressjs.com/)
- [Prisma Documentation](https://www.prisma.io/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [Notebook LM](https://notebooklm.google/?gad_source=1&gad_campaignid=22913135943&gbraid=0AAAAA-fwSsd7un1-cye0MO21iD-NTDHDL&gclid=Cj0KCQiAoZDJBhC0ARIsAERP-F_hByThpX2ebh6Zw0htL_AI4G5sCpnY_Q9UwM_32-TO2ePwjQDWDXoaAlOaEALw_wcB)

## 📝 Licença

Este projeto é desenvolvido para fins educacionais e não possui fins comerciais.

---

<p align="center">
  Sendo desenvolvido com ❤️ e muita curiosidade sobre back-end por Kathleen Santos
</p>
