#!/bin/sh

pnpm exec prisma db push

echo "ok"

pnpm run start:dev

npx prisma studio