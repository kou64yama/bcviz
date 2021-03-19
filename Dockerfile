FROM node:14.16.0 AS builder

WORKDIR /workspace
COPY . ./

RUN npm -g i pnpm && pnpm i && npm run build

FROM nginx:1.19.8-alpine

COPY --from=builder /workspace/dist /usr/share/nginx/html
