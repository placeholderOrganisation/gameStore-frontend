# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN yarn install

COPY . .

ARG VITE_GOOGLE_API_KEY
ARG VITE_GOOGLE_SHEETS_ID

ENV VITE_GOOGLE_API_KEY=$VITE_GOOGLE_API_KEY
ENV VITE_GOOGLE_SHEETS_ID=$VITE_GOOGLE_SHEETS_ID

RUN yarn build

# Production stage
FROM nginx:alpine

# Copy custom nginx config (optional, if you have one)
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

# Copy built assets from builder
COPY --from=builder /app/dist /usr/share/nginx/html 