# ----------------------------------------------------------------------
# Stage 1: Build
# ----------------------------------------------------------------------
FROM node:20-alpine AS builder

WORKDIR /app

# pnpm 활성화
RUN corepack enable

# workspace 정의 복사
COPY pnpm-workspace.yaml pnpm-lock.yaml package.json ./
COPY packages packages
COPY apps/next-app apps/next-app

# 의존성 설치 (workspace 전체)
RUN pnpm install --frozen-lockfile

# Next.js 빌드
WORKDIR /app/apps/next-app
RUN pnpm build

# ----------------------------------------------------------------------
# Stage 2: Runner
# ----------------------------------------------------------------------
FROM node:20-alpine AS runner

WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000

RUN corepack enable

# next-app의 package.json만 복사
COPY apps/next-app/package.json ./

# 의존성 설치
RUN pnpm install

# 빌드 산출물 복사
COPY --from=builder /app/apps/next-app/.next ./.next
COPY --from=builder /app/apps/next-app/public ./public
COPY --from=builder /app/apps/next-app/next.config.ts ./next.config.ts

EXPOSE 3000
CMD ["pnpm", "start"]
    