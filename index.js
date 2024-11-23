const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const KJUR = require('jsrsasign');
const path = require('path');

const app = express();
const port = process.env.PORT || 3010;

// 環境変数の読み込み（Vercelでは.envは不要）
require('dotenv').config({ path: path.join(__dirname, '.env') });

// CORSとセキュリティヘッダーの設定
app.use(cors());
app.use((req, res, next) => {
  res.header("Cross-Origin-Embedder-Policy", "require-corp");
  res.header("Cross-Origin-Opener-Policy", "same-origin");
  next();
});

// ボディパーサーの設定
app.use(bodyParser.json());

// APIエンドポイント
app.post('/api/', (req, res) => {
  const iat = Math.floor(new Date().getTime() / 1000);
  const exp = iat + 60 * 60 * 2;

  const oHeader = { alg: 'HS256', typ: 'JWT' };
  const oPayload = {
    app_key: process.env.ZOOM_VSDK_KEY,
    tpc: req.body.topic,
    role_type: req.body.role,
    pwd: req.body.password,
    iat: iat,
    exp: exp,
  };

  const sHeader = JSON.stringify(oHeader);
  const sPayload = JSON.stringify(oPayload);
  
  try {
    const signature = KJUR.jws.JWS.sign('HS256', sHeader, sPayload, process.env.ZOOM_VSDK_SECRET);
    res.json({ signature });
  } catch (error) {
    console.error("Error generating signature:", error);
    res.status(500).json({ error: "Failed to generate signature" });
  }
});

// サーバー起動（Vercelではポート指定不要）
app.listen(port, () => console.log(`Server running on port ${port}`));