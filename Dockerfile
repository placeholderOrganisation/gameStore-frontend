# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN yarn install

COPY . .

ARG VITE_BACKEND_URL
ENV VITE_BACKEND_URL=$VITE_BACKEND_URL

RUN yarn build

# Production stage
FROM nginx:alpine

# Copy custom nginx config
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

# Copy built assets from builder
COPY --from=builder /app/dist /usr/share/nginx/html 