FROM node:24-alpine3.21

WORKDIR /app

COPY package.json yarn.lock .yarnrc.yml tsconfig.json ./
COPY env.faucet.config.json ./
COPY .yarn/ ./.yarn/
COPY .papi/ ./.papi/
COPY src/ ./src

RUN yarn --immutable

RUN yarn codegen
RUN yarn build

CMD ["sh", "-c", "yarn migrations:run && yarn start"]
