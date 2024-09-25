# Base stage
FROM node:18-alpine AS base

LABEL maintainer="hyperx7777"

# Install pnpm and other necessary packages
RUN apk add --no-cache libc6-compat
RUN npm install -g pnpm

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app

# Install dependencies using pnpm
COPY package.json ./
RUN pnpm install

# Development stage
FROM base AS dev
WORKDIR /app

# Copy installed node_modules from deps stage
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Expose Next.js port
EXPOSE 3000

# Set environment to development
ENV NODE_ENV=development

# Start the Next.js development server
CMD ["pnpm", "dev"]
