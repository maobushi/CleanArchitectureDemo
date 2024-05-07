FROM node:18

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm
RUN pnpm i --frozen-lockfile

COPY . .

RUN pnpm exec prisma generate

CMD ["sh", "entrypoint.dev.sh"]