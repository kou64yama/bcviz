FROM node:14.16.0 AS builder

WORKDIR /workspace
COPY package.json yarn.lock .yarnrc ./
COPY . ./

RUN yarn install --frozen-lockfile && yarn build

FROM nginx:1.19.8-alpine

COPY --from=builder /workspace/dist /usr/share/nginx/html
