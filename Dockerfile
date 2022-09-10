# Install dependencies only when needed
FROM node:14 AS deps

WORKDIR /opt/app
COPY package.json ./
RUN npm install

# Rebuild the source code only when needed
# This is where because may be the case that you would try
# to build the app based on some `X_TAG` in my case (Git commit hash)
# but the code hasn't changed.
FROM node:14 AS builder

ENV NODE_ENV=production
ENV NEXT_PUBLIC_STRAPI_URL=https://strapi.timosur.com
WORKDIR /opt/app
COPY . .
COPY --from=deps /opt/app/node_modules ./node_modules
RUN npm run build

# Production image, copy all the files and run next
FROM node:14 AS runner

WORKDIR /opt/app
ENV NODE_ENV=production
ENV NEXT_PUBLIC_STRAPI_URL=https://strapi.timosur.com
COPY --from=builder /opt/app/public ./public
COPY --from=builder /opt/app/.next ./.next
COPY --from=builder /opt/app/node_modules ./node_modules
CMD ["node_modules/.bin/next", "start"]