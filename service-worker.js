/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "22307b953ce39fe0579ec716d7d21220"
  },
  {
    "url": "assets/css/0.styles.e42cd381.css",
    "revision": "66605f12555218a8ee225e3adbd963e6"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.8cba2e8d.js",
    "revision": "e1e5850f7df29fb4d47dbf0f2eca0a78"
  },
  {
    "url": "assets/js/11.c48b81f6.js",
    "revision": "97276352cf174bdc553a2020ef3d201d"
  },
  {
    "url": "assets/js/12.53037939.js",
    "revision": "3685e1e24bbe1069f44d27dd00049c2f"
  },
  {
    "url": "assets/js/13.d6c61b97.js",
    "revision": "506753f3ea6170f0b3486f62e7762988"
  },
  {
    "url": "assets/js/14.8bea1046.js",
    "revision": "43e4cf4554e4df32f324a5d08f7cd5e5"
  },
  {
    "url": "assets/js/15.5da7fb6c.js",
    "revision": "6dd27a627a37d9cb96bc692d32f8aed4"
  },
  {
    "url": "assets/js/16.4ba04201.js",
    "revision": "d2e54098a63552757d8ccc45a43d1f78"
  },
  {
    "url": "assets/js/17.effb4aa7.js",
    "revision": "aa41487f4db49df1a1e26abb0a4c4a62"
  },
  {
    "url": "assets/js/18.565ee184.js",
    "revision": "115580aaba3a2ca947198367d7f8158e"
  },
  {
    "url": "assets/js/2.0e2682b8.js",
    "revision": "50fb15d1470e504c352122acb1cf5bbf"
  },
  {
    "url": "assets/js/3.008297d5.js",
    "revision": "e006111b45c0623a10b0fb2544032e52"
  },
  {
    "url": "assets/js/4.780bdf29.js",
    "revision": "58c1be510bc65c08d6f410640349a32f"
  },
  {
    "url": "assets/js/5.5da1ce14.js",
    "revision": "c463bd4c5716225ff6a68224c2813a79"
  },
  {
    "url": "assets/js/6.e5a1401d.js",
    "revision": "755253c82349fd3378e926a6c75dfafa"
  },
  {
    "url": "assets/js/7.189a9b1c.js",
    "revision": "2294b622e4b8d97d76a4a3bcc51d6dea"
  },
  {
    "url": "assets/js/8.05310562.js",
    "revision": "0b5ddf2a34e1fd952220901964819b27"
  },
  {
    "url": "assets/js/9.6a61af4a.js",
    "revision": "233e460548368a351ed1aecf11d23cb4"
  },
  {
    "url": "assets/js/app.bdd2ee7c.js",
    "revision": "929509055012c58555a1bf64fae7aa03"
  },
  {
    "url": "icons/icon-128x128.png",
    "revision": "9c92a3ed7b834cd6c344bd31f8a6fe61"
  },
  {
    "url": "icons/icon-144x144.png",
    "revision": "697e6faa62ec49655910379578c6e754"
  },
  {
    "url": "icons/icon-152x152.png",
    "revision": "3b79c26acf3d169f750e4ddb414d38ba"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "dea50cc2ea17c63fd6c2974472f36c78"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "40495209221f6c3493367cbeb328c413"
  },
  {
    "url": "icons/icon-72x72.png",
    "revision": "7a9516e68406f62bd897e4b71a9d0fcc"
  },
  {
    "url": "icons/icon-96x96.png",
    "revision": "8d17c5e902f282254de021f011feb2bd"
  },
  {
    "url": "index.html",
    "revision": "a511df3b4ed4c581e5adb2ce548dcf8a"
  },
  {
    "url": "yuedu/index.html",
    "revision": "fdbf4099977d6a1d174660866b3da7ba"
  },
  {
    "url": "yuedu/个人备份说明.html",
    "revision": "a82484e807381355b11a0794b16864c6"
  },
  {
    "url": "yuedu/书源校验工具.html",
    "revision": "0003aec6a31e201100db17e10e2ae367"
  },
  {
    "url": "yuedu/关耳美化发现工具.html",
    "revision": "9953463b64246c71d0be46117f2c0a68"
  },
  {
    "url": "yuedu/备份文件说明.html",
    "revision": "73684b3940261871079d7515174ae7c6"
  },
  {
    "url": "yuedu/批量美化发现列表.html",
    "revision": "c242783a13b6ffeb752baeca6bde9d14"
  },
  {
    "url": "yuedu/教程.html",
    "revision": "64736e93224625353ad261e45870beac"
  },
  {
    "url": "yuedu/资源共享.html",
    "revision": "f9e1f1f4ddbbf9624f945e934a77ff6c"
  },
  {
    "url": "yuedu/软件下载.html",
    "revision": "805d94ba37c6de44bc67dcb73c852138"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
