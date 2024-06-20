FROM node:20

# Defina o diretório de trabalho no contêiner
WORKDIR /usr/src/app

# Copie os arquivos do projeto para o contêiner
COPY . .

# Instale as dependências do projeto
RUN yarn install


# Compile o projeto (opcional, dependendo da configuração)
RUN yarn build

USER node

# Exponha a porta que o aplicativo usará
EXPOSE 3000

# Comando para iniciar o aplicativo
CMD ["yarn", "start:prod"]
