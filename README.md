> ⚠️ The following sample application is a personal, open-source project shared by the app creator and not an officially supported Zoom Communications, Inc. sample application. Zoom Communications, Inc., its employees and affiliates are not responsible for the use and maintenance of this application. Please use this sample application for inspiration, exploration and experimentation at your own risk and enjoyment. You may reach out to the app creator and broader Zoom Developer community on https://devforum.zoom.us/ for technical discussion and assistance, but understand there is no service level agreement support for this application. Thank you and happy coding!

> ⚠️ このサンプルのアプリケーションは、Zoom Communications, Inc.の公式にサポートされているものではなく、アプリ作成者が個人的に公開しているオープンソースプロジェクトです。Zoom Communications, Inc.とその従業員、および関連会社は、本アプリケーションの使用や保守について責任を負いません。このサンプルアプリケーションは、あくまでもインスピレーション、探求、実験のためのものとして、ご自身の責任と楽しみの範囲でご活用ください。技術的な議論やサポートが必要な場合は、アプリ作成者やZoom開発者コミュニティ（ https://devforum.zoom.us/ ）にご連絡いただけますが、このアプリケーションにはサービスレベル契約に基づくサポートがないことをご理解ください。

# Zoom Video SDK minimum sample
This is a smallest sample that describes how to use the Zoom Video SDK.
For details, please visit [Zoom Video SDK for web](https://developers.zoom.us/docs/video-sdk/web/).

# How to use
1. You will need to populate the Video SDK client Key and secret in `.env` file. For details, visit [Get Video SDK credentials](https://developers.zoom.us/docs/video-sdk/developer-accounts/#get-video-sdk-credentials).

```
ZOOM_VSDK_KEY="YOUR VSDK KEY"
ZOOM_VSDK_SECRET="YOUR VSDK SECRET"
```

2. Then, run ```npm install``` to install required package.
3. ```node index.js``` to start.

## Notes
You will need to run this on a SSL certified web server. If you run locally, you might need to use a CORS test Chrome extensions such as [Allow CORS: Access-Control-Allow-origin](https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf/) before start.
