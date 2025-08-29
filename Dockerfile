# ---- ベース ----
FROM node:20-slim

WORKDIR /app

# package.json/package-lock.json を先にコピーして依存インストールだけキャッシュ
COPY package*.json ./
RUN npm install

# アプリ全部コピー（public, index.jsなど）
COPY . .

# 8080番でExpress動かす例
ENV PORT=8080

# prod用にnodeでサーバー起動
CMD ["node", "index.js"]
