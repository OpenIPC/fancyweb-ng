FROM node:lts-alpine

EXPOSE 5173
ENV COREPACK_ENABLE_DOWNLOAD_PROMPT=0
RUN mkdir -p /opt/app && corepack enable && corepack install --global pnpm

WORKDIR /opt/app
USER node

ENTRYPOINT ["docker/start_dev.sh"]
