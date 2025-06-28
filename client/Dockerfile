FROM node:24-alpine3.21

WORKDIR /app

COPY . .
RUN yarn install --immutable
RUN yarn build

EXPOSE 5173

# use "::" for both ipv4 and ipv6
CMD ["yarn", "vite", "--host", "::", "--port", "5173"]
