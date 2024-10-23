'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js": "685566f5cc0bd6c02b8229ee74e47721",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"version.json": "009c9e65172e010890f7f65fde438006",
"flutter_bootstrap.js": "d8d9f08b25f0a429d794198c4d8f1258",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"manifest.json": "d40c47d1c161f94dbcb13094d37f1f55",
"index.html": "f85b69e9d5ca67175510c8ea7c6429b9",
"/": "f85b69e9d5ca67175510c8ea7c6429b9",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/NOTICES": "6721ae9d2c5d64c0e51d485d0a322d0d",
"assets/AssetManifest.bin": "e3d08f394ad236d85578e52118a70e16",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "58bceaa5961579e8580eba464e20807a",
"assets/packages/simple_icons/fonts/SimpleIcons.ttf": "63bd8ab21692f43d782be84edfe85245",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/rive_animated_icon/assets/icons3.riv": "0427231b1a0b147fef274cff2eff1f43",
"assets/packages/rive_animated_icon/assets/icons4.riv": "87ee1634839723ee0240112a2e1d2a05",
"assets/packages/rive_animated_icon/assets/icons1.riv": "7f23a53d34a2b43b6dd551465d9f71a6",
"assets/packages/rive_animated_icon/assets/icons2.riv": "054611cd990d48b0415acc0def8b2064",
"assets/fonts/MaterialIcons-Regular.otf": "127b66f4795498a185868f2ee17ed609",
"assets/AssetManifest.bin.json": "38a389be74dd41ddbd5794b5c0356f75",
"assets/AssetManifest.json": "96e72f42b8b82fe7d95f947118fe9263",
"assets/FontManifest.json": "ae873129a3bfe946b3ee790dad1c5591",
"assets/assets/fonts/product_sans_italic.ttf": "e88ec18827526928e71407a24937825a",
"assets/assets/fonts/roboto_italic.ttf": "a720f17aa773e493a7ebf8b08459e66c",
"assets/assets/fonts/product_sans_regular.ttf": "eae9c18cee82a8a1a52e654911f8fe83",
"assets/assets/fonts/roboto_bold.ttf": "e07df86cef2e721115583d61d1fb68a6",
"assets/assets/fonts/roboto_regular.ttf": "11eabca2251325cfc5589c9c6fb57b46",
"assets/assets/fonts/product_sans_bold.ttf": "dba0c688b8d5ee09a1e214aebd5d25e4",
"assets/assets/translations/pt.json": "866335160598d89474af78ca709e8567",
"assets/assets/translations/en.json": "4c2f1aecef648786ef015f7b024e211c",
"assets/assets/images/flutter-original.png": "65a9eeaaa0e61502557e5ac32a1c1154",
"assets/assets/images/phone.jpg": "64a954e7ad899ecb56078512c9b719df",
"assets/assets/images/eua2.svg": "26c75f1e1b4417112f3721d9410c2904",
"assets/assets/images/mongodb-original.png": "2b78e527941fd39b67a00c35441f87b1",
"assets/assets/images/br.svg": "92fc6153bcbb7cf496739e02c35545a1",
"assets/assets/images/postgresql-original2.png": "bf22ab3f4ce35bec4240d76acbc96e2e",
"assets/assets/images/php-original.png": "2254942062da79c41d53d31978203fbf",
"assets/assets/images/nodejs-original2.png": "ce1c8a495e1612c305e126018e3af802",
"assets/assets/images/laravel-original2.png": "4c7d3f74b44479b71e185c6241d50ef3",
"assets/assets/images/icon_youtube_64x.png": "155d50c9f10c97fae27575ae7ee7b026",
"assets/assets/images/icon_search_64x.png": "f55e992d786ef1822db8d1c038e201b5",
"assets/assets/images/mongodb-original2.png": "90c7aceb26570f839ece3e75a3471b3f",
"assets/assets/images/graduation.png": "0643b033e6ad2f21fe4802232e86cffe",
"assets/assets/images/css3-original2.png": "b1676855cbc61adedc5a6398e3f2d508",
"assets/assets/images/laravel-original.png": "7b9a67e174adb91ece92eefc614c8830",
"assets/assets/images/escolar.png": "954f5bcd313eaa429a402b4c928f8827",
"assets/assets/images/icon_twitter_64x.png": "514d54a802579a10b988c12dc892e9cb",
"assets/assets/images/icon_performance.png": "49dcd794c0838072d8cd729f1cb85e61",
"assets/assets/images/dart-original.png": "a6c466e34b1b375f0322245944b03838",
"assets/assets/images/brasil.png": "4b4214be38a324295f1d1f9f52ca87c4",
"assets/assets/images/setup.png": "a089298898a61352cf90af568a5ee245",
"assets/assets/images/nodejs-original.png": "1c7540c22fa21d753ea789cb721ca646",
"assets/assets/images/eua1.svg": "fd98b11065a1d47093b5960cdab9c42d",
"assets/assets/images/programmer.gif": "54c9af226721e95539a5cd9592d635bb",
"assets/assets/images/mysql-original.png": "41f48df01b268c96f09022cfd540e143",
"assets/assets/images/flutter_logo_text.png": "d21f1eecaeaab081ba7efec1721c0712",
"assets/assets/images/wordpress-original2.png": "350f6922782627c97c3d86186a861b63",
"assets/assets/images/mockups.jpg": "39d8692ce9dceb5b031f0a6858adc829",
"assets/assets/images/cakephp-original.png": "08dea0c4d9dd4517bc46fa84052fdb2f",
"assets/assets/images/wordpress-original.png": "ccc161be2c91eee900e33af45b0509df",
"assets/assets/images/eua.png": "e7be3535d636d31854c45bd446690d61",
"assets/assets/images/icon_ui.png": "09138184ad5cee139e01c3aba95924d4",
"assets/assets/images/linux-original.png": "2bc8a3d15114f23cb9b4b832e4fbd7c2",
"assets/assets/images/device_frame.png": "58e971455388b5c476887bf687a71d8a",
"assets/assets/images/git-original.png": "8f76a861a88cf5b758c4e91cc913d4df",
"assets/assets/images/javascript-original.png": "180c1d5a32e527d41e94428bee9665f4",
"assets/assets/images/svg/docker-plain.svg": "77b05982cbd56b13648ec58c5ac2e2c0",
"assets/assets/images/svg/mysql-original.svg": "e8eb3c35a4724c59933bb8b80b402586",
"assets/assets/images/svg/linux-plain.svg": "2643f91cd8b0bc87c7827082598b2bc2",
"assets/assets/images/svg/postgresql-original.svg": "95ea0ccc7a6fceff8fee5331e2d51c96",
"assets/assets/images/svg/linux-original.svg": "17eb8f433d72c073ec12417f3ca5d157",
"assets/assets/images/svg/firebase-plain.svg": "60c0ed1d65b8e895d80aa57b8b7ad09c",
"assets/assets/images/svg/javascript-original.svg": "0c1f700da144243c526f252e59362138",
"assets/assets/images/svg/css3-plain.svg": "7c6a6b602f10297741009c4a4ede317c",
"assets/assets/images/svg/nodejs-original.svg": "19f661d0537a79acbcb13829537c2930",
"assets/assets/images/svg/html5-original.svg": "16d07e8682a531f3bc1e9fb01bd59740",
"assets/assets/images/svg/dart-plain.svg": "82a4b8e6270602125a9165f4fe4ff6d5",
"assets/assets/images/svg/cakephp-original.svg": "b494a9cbd7dd7bbb7d27815c08af2d1a",
"assets/assets/images/svg/laravel-original.svg": "805512ee5e52682b0b8c34c6d6ab068b",
"assets/assets/images/svg/docker-original.svg": "1380befa46d4027b411bc47b093424a9",
"assets/assets/images/svg/html5-plain.svg": "377e176bd0afd4e02e2d71ca580c56db",
"assets/assets/images/svg/wordpress-plain.svg": "c38c8d95313a58c21a89ce5afd2376bd",
"assets/assets/images/svg/css3-original.svg": "a55118403c13e2719d453b74dffa80f8",
"assets/assets/images/svg/mongodb-original.svg": "8aad4da2ed641d2378923f85fe35189d",
"assets/assets/images/svg/git-original.svg": "fef8e95112e6ab6f2169430ee510db5e",
"assets/assets/images/svg/apache-original.svg": "b554392c1ab84edbcd1970be428714bb",
"assets/assets/images/svg/dart-original.svg": "11b770f163584b0e8cbba1f7bc626f55",
"assets/assets/images/svg/javascript-plain.svg": "b3901c8e8919e5151ed229af648420cd",
"assets/assets/images/svg/firebase-original.svg": "e49de29322e84ba9bef16c93af22891d",
"assets/assets/images/svg/vuejs-plain.svg": "a7b92a56a67453f1a601673018ac1059",
"assets/assets/images/svg/flutter-original.svg": "5ff1722cbed36fdb869cba0c95788d42",
"assets/assets/images/svg/dart-original2.svg": "11b770f163584b0e8cbba1f7bc626f55",
"assets/assets/images/svg/vuejs-original.svg": "72d93ebdd9d9cdd1c1e81073aff06b79",
"assets/assets/images/svg/php-original.svg": "2d61a3b7505e53fa3185bdf8da7b6f8e",
"assets/assets/images/master.png": "0597c71d6d2d5edc8562f41b3b1f00bf",
"assets/assets/images/note.png": "1e047a9459a831d8fb35f7c1b94ff3bd",
"assets/assets/images/codding.png": "6a70f99735078856cc42340c763068be",
"assets/assets/images/br2.svg": "c71b80cb9c5ba6830f98110e0d718733",
"assets/assets/images/php-original2.png": "2aebc2f4f842752858facf30877315d5",
"assets/assets/images/google_logo.png": "22979cce8fc21c09b7f26e131045a400",
"assets/assets/images/firebase-original.png": "5cb131775d0adcbcd76dc059c78c638d",
"assets/assets/images/flutter-original2.png": "6261e07a1b1eb9cdd466b4879a41e361",
"assets/assets/images/icon_development.png": "baebd28f59701e856c98c68e010fdeb2",
"assets/assets/images/html5-original2.png": "77fb62a959dcd254b71a2fdd1a5e0c65",
"assets/assets/images/javascript-original2.png": "06c9e8491da28a14dce91797806275fa",
"assets/assets/images/br1.svg": "305bf0dd8fbc8be7f30e192f9b0a2c44",
"assets/assets/images/css3-original.png": "146cd30f10f0dac696a2602f75c430f0",
"assets/assets/images/especialization.png": "7f0ec763f24270dcabef7897960212fb",
"assets/assets/images/html5-original.png": "715260e0bc2f25f5a1eb3754d3ab13a2",
"assets/assets/images/git-original2.png": "da1ba4a3bef5fa9b0ccd119dd92647ee",
"assets/assets/images/dart-original2.png": "fe366193d5f7f3881c0a521e344e93ee",
"assets/assets/images/apache-original2.png": "a35c812da166ea19e1e69cf2255c1a4a",
"assets/assets/images/linux-original2.png": "c6026b248a2369781fa197ccf9b4fcd0",
"assets/assets/images/mysql-original2.png": "2dedb3dc292e969ede5322af9157d799",
"assets/assets/images/apache-original.png": "9c7242c5fe046b7a4ef2bcf3cb10972f",
"assets/assets/images/us.svg": "eadfb4edb150845cd371f170956ca9ac",
"assets/assets/images/firebase-original2.png": "9715a985d0297aadf6ab6325809da8b4",
"assets/assets/images/vuejs-original.png": "392aaa3052d8f98803f04c2de5f49a11",
"assets/assets/images/vuejs-original2.png": "7953e006cf9a72cb5a3114068f38fa5d",
"assets/assets/images/flutter_logo_mono.png": "6261e07a1b1eb9cdd466b4879a41e361",
"assets/assets/images/postgresql-original.png": "9a53e97f3f4950556fcbef4d4e539e57",
"assets/assets/images/cakephp-original2.png": "c76e9ed2d9d5022fcd80a31b35fd77e3",
"assets/assets/images/icon_github_64x.png": "2d1e54d81bd7cb7daa09cea82dcb29e2",
"assets/assets/images/cursos.png": "ed22980379adf5d21b7d363090cbf3a3",
"assets/assets/images/docker-original.png": "389b600fbdc4e3535e394e547eb455a1",
"assets/assets/images/docker-original2.png": "0e21060dd26b3212fc866385e198eb48"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
