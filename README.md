# AirCNC
[![NPM](https://img.shields.io/npm/l/react)](https://github.com/MrNicolass/AirCnC/blob/main/LICENSE) ![Npm](https://img.shields.io/badge/nvm-6.9.0-green)

Projeto criado na Semana OmniStack 9.0 da [Rocketseat](https://rocketseat.com.br)

## Estrutura
```
.
├── backend/src/
|   ├── config/
|       └── upload.js (configuração do pacote de upload de arquivo - multer)
|   ├── controllers/  (controllers do projeto)
|   ├── models/       (models do projeto)
|   ├── routes.js     (arquivo de rotas de backend)
|   ├── server.js     (arquivo principal, utilizado para rodar o projeto do backend)
|   ├── .babelrc      (configuração do babel)
|   ├── .env          (variáveis de ambiente correspondentes ao backend)
|   ├── .env.example  (arquivo de exemplo para definir as variáveis de ambiente utilizadas no backend)
|   └── package.json
├── uploads/          (diretório onde serão salvos os arquivos enviados para a API)
└── README.md
```
