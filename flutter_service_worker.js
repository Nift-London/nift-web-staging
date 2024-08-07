'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "454de7e292fc2bf765ff07a0cfff4390",
"version.json": "7447c4e5c4c34989216c805e61b824e0",
"index.html": "44557e060e01d9349942ce3bdbcf2c9a",
"/": "44557e060e01d9349942ce3bdbcf2c9a",
"main.dart.js": "2829eb8beab94f95c898df696f3a33fb",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "dcc8eca7ed75cd7188dda6d61e9ba2d8",
"assets/shorebird.yaml": "acd409eabcefa57e13aafff31bc6c630",
"assets/AssetManifest.json": "f8a642570b7be345fd6ef41632983897",
"assets/NOTICES": "007da812e801aa0098ae1338bab87cfd",
"assets/FontManifest.json": "e39ccb03b7acd144aaa922ef44e47459",
"assets/AssetManifest.bin.json": "cc344d0d5ca29947133f85a16141a8f6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "7bf28d554d261e7befe6f1b79d07bc97",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/lib/assets/images/world.png": "a74050c314f3d799e0a32b784b0eb7c7",
"assets/lib/assets/images/payment_icons/american-express-logo.png": "a88866b16636f4c353c69fb835d13d07",
"assets/lib/assets/images/payment_icons/google-pay-dark.svg": "6780eab8f177fd67a5cad69ce1a0028b",
"assets/lib/assets/images/payment_icons/discover-logo.png": "8172505cae2371b6408ae34037fbd553",
"assets/lib/assets/images/payment_icons/jcb-logo.png": "8d9e56ecdf58052a5df0531365a8deac",
"assets/lib/assets/images/payment_icons/apple-pay-light.svg": "e91b66f8021bd0d0b448396b8c50acd4",
"assets/lib/assets/images/payment_icons/master-card-logo.png": "aa8d148929beebe472755985c776356d",
"assets/lib/assets/images/payment_icons/discover-diners-logo.png": "36c3dbc7dc09881f37fb251b6673e8a7",
"assets/lib/assets/images/payment_icons/google_pay.png": "6f714a7802af6bfa57ef7bd946451887",
"assets/lib/assets/images/payment_icons/apple_pay.png": "639fb47410b3cabd1cfa7d1f9ec521c6",
"assets/lib/assets/images/payment_icons/credit-card.png": "246ed807b6af1d38e98f9d61e191c88f",
"assets/lib/assets/images/payment_icons/visa-logo.png": "60adb06ff6575048859e3e85e5c2d27b",
"assets/lib/assets/images/payment_icons/china-unionpay-logo.png": "a6be27d8e5ae8aa08ff8d8557be386d6",
"assets/lib/assets/images/payment_icons/google-pay-light.svg": "6fa4a53f6bd69690a95b9065e9c4aecd",
"assets/lib/assets/images/payment_icons/apple-pay-dark.svg": "e8ac932721271c12641fcf52d92705bc",
"assets/lib/assets/images/shop_icon.png": "839e536db17892b6aaffc53a5a8a00ef",
"assets/lib/assets/images/animation_house.png": "bfe926f3307eb5d3e725d6c49ccfaff6",
"assets/lib/assets/images/background_refer_friend.jpg": "d803225deb6ba70c26e1af9652b62a22",
"assets/lib/assets/images/rent_icon.png": "d173e603e2ca78b6ad3c0f58d1509b90",
"assets/lib/assets/images/icon_brands.png": "8170cac482b6131ed08640f91236f5ca",
"assets/lib/assets/images/nift_logo_1.png": "488bcb1907eb63814f7dbe76fd822186",
"assets/lib/assets/images/shopping_bag.png": "0dc0e91b908ba982a8a697f78a4ccfa0",
"assets/lib/assets/images/animation_line_1.png": "e5d8a0798d90a944b73907d00df80545",
"assets/lib/assets/images/image_placeholder.png": "d4b40f16838995dea9cb22a84c83f5a1",
"assets/lib/assets/images/animation_line_2.png": "072f3397a8ceac07ef31a241ed7ed7e3",
"assets/lib/assets/images/icon_stores.png": "3d5cfc08eded09bcf2652cec5bf8a67e",
"assets/lib/assets/images/g-logo.png": "cd3d6bf921275816285ef1b809081d23",
"assets/lib/assets/images/nift_logo.png": "503bede49ecbaa8e0d557ebb97f7ea00",
"assets/lib/assets/images/background_5.jpg": "7d6a8930d4a5531b2e00df48df61b6b5",
"assets/lib/assets/images/icon_liked.png": "ff0f4b9032c71cd6df7cb70071ad546b",
"assets/lib/assets/images/background_4.jpg": "222663b44e9646c01a1764c2fc84df49",
"assets/lib/assets/images/onBoarding.png": "685d34c926b65e9682e76beb603dd74b",
"assets/lib/assets/images/icon_home.png": "ee2959e6caee4121188201c246a09eac",
"assets/lib/assets/images/background_1.jpg": "82ae38842175e7dd59c588ad1f02e382",
"assets/lib/assets/images/background_3.jpg": "229e8cff5947fd60e74b8d4c56b2c01e",
"assets/lib/assets/images/gift.png": "f0b39c2b223a21450c3295a8e4acbfc5",
"assets/lib/assets/images/clock.png": "68ad44dab8831bdacb544c31164bdd4d",
"assets/lib/assets/images/background_2.jpg": "45a12239cadcf87aa12331180e6aa50c",
"assets/lib/assets/images/icon_categories.png": "1dcfa2ba781195174cfcfd3de15dc459",
"assets/lib/assets/images/bicycle.png": "5da25ff89cc31ef35c54de4177868587",
"assets/lib/assets/images/powered_by_google.png": "60e8a8323a1f5c9dc59c6783d5974123",
"assets/lib/assets/images/icon_basket.png": "a88613db138384d88f96eeca6f7a4499",
"assets/lib/assets/images/bike_icon.png": "e676b3b14f023a6063e1070c69a8803d",
"assets/lib/assets/images/nift_app_icon.png": "a73dee8c5c7f7d3b323bdf9b7be4bea4",
"assets/lib/assets/images/onBoarding.svg": "53850c2794ea2e93b1a84f5947b5ed12",
"assets/lib/assets/images/animation_bicycle.png": "6574fca3c9ee1b00f80c1990c99469b4",
"assets/lib/assets/images/animation_bag.png": "5f94671efe1a912cacd4657d5ac6f7f7",
"assets/lib/assets/videos/nift_app_intro.mp4": "2a1e19c6e20d0da1efe235565a754721",
"assets/lib/assets/fonts/Bicyclette-Thin.ttf": "44f33b3a21e00f74e65604aada104d88",
"assets/lib/assets/fonts/Bicyclette-Black.ttf": "935eb8c0593ebd0f6874cf46a21c36e1",
"assets/lib/assets/fonts/Bicyclette-Bold.ttf": "e9d0f53cb1b3802c9c5674488e4b6931",
"assets/lib/assets/fonts/DINCondensed-Regular.ttf": "bd956289960da5aeb83a7a9c39d0381d",
"assets/lib/assets/fonts/Bicyclette-Italic.ttf": "85d6542a3f58d99e2b3d4531c5b1bcc7",
"assets/lib/assets/fonts/Bicyclette-Regular.ttf": "88ff0de7c5c83889f93c010f605a0ca6",
"assets/lib/assets/fonts/Bicyclette-Light.ttf": "e4a7270e894013517cecb1f32217844a",
"assets/lib/assets/fonts/DINCondensed-Light.ttf": "23c4e58a1e40d28c800dbc6f5a3835a4",
"assets/lib/assets/fonts/Bicyclette-Ultra.ttf": "49fde244e01ec0671ab1332f3f786505",
"assets/lib/assets/translations/en-GB.json": "da46fc3671f5e416edc9316446ef4203",
"assets/AssetManifest.bin": "e572590e3ed6c936fe2e3bc1ed8ffefc",
"assets/fonts/MaterialIcons-Regular.otf": "6eb48b27e357137877702a2914a77441",
"canvaskit/skwasm.js": "9fa2ffe90a40d062dd2343c7b84caf01",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
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
