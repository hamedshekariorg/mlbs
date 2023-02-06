FROM node:14-alpine AS deps

RUN apk update && apk --no-cache add --virtual native-deps \
  libc6-compat g++ gcc libgcc libstdc++ linux-headers make python3 && \
  yarn global add node-gyp

RUN apk add --no-cache

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

# Rebuild the source code only when needed
FROM node:14-alpine AS runner

WORKDIR /app

ENV NODE_ENV production

COPY . .
COPY --from=deps /app/node_modules ./node_modules

RUN yarn global add pm2
RUN yarn build

CMD ["pm2-docker", "start", "yarn", "--interpreter", "sh", "--name", "MLBS", "--", "run", "production"]

EXPOSE 8000
