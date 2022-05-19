'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "819679bff9f1c2d270896355813d243f",
".git/config": "6a5441df096b98b860305ef9f683c55e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "86cba01be62af6d4ece8dfff43c02018",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "d82c2f6b631f7c65600d0d56190dab27",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "12312551454925a1ed2da9e81b09189d",
".git/logs/refs/heads/main": "5322d2226a2665ca871b937514dc7b73",
".git/logs/refs/remotes/origin/main": "bef95f3fe3c96a35dc1e91c9dd2954ee",
".git/objects/03/7ad47f870a001b44b4477cab3525ef08cc5cb3": "e24921a042544fdcf3d9f373db0130b8",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/04/6cf3f27ecd17e6eeafb8d37e251dd19d6267cf": "da528e3e6b34de8d7461c0a5f105d468",
".git/objects/05/18450d5b0e93366a6acf77d79763890f101f1e": "e234de5abffc18579a2cdaf432fc007e",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0e/cabe1f70a1b23b2089541343cbe1c92e84a087": "ffd0074f13970ee4c2a00852f09552bf",
".git/objects/10/4e37047fcff27cdc0773eb6af2b15b767619fa": "65196fa302b5a39d2c737c7d52eca571",
".git/objects/13/7aacf3f0c52b23f7476356c2e8fc4d5ef12b70": "3933aa3b25ffa60d3c34af1454f68ee8",
".git/objects/17/5e8b6f9c80bb818f398870d5d8a6c8545e047c": "3e3283993ae5c3a2d3e87c536d6642f4",
".git/objects/1c/75d82385d04901ff40bbe20c2d4eadec06ca01": "a68a4b549e26f3236f7d83e63631bff0",
".git/objects/1e/72ed4da1f0f0fe0ae24c6ab7d2a74d749634bc": "9e8b1bb7a9ff1874b6da016d4bcc565c",
".git/objects/21/8f6e0c0398d55ebadcd8edbacb50b117eddee4": "9f444c9e394f5980ada03bb3d6475f86",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/2c/724ce350ad2d94a2e977e3ee3d6c979b9c3477": "77959df70d9704f1195cbc05e97eca12",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2f/8d94095275d5b12b9c0dfa05a98d1636ed1897": "5df1c4702bdb558e7b7814a81d906732",
".git/objects/33/b577c866f6b6c6d4a29c46f9f07124e9c3d116": "2454020583b9b9bb6c217a80b1a8abf3",
".git/objects/37/9a86caeac8146595d4e6a3f5b4b9e193bb6900": "909db4c0a42ee85fd510bba4b11d997a",
".git/objects/38/6bcab870b210dc64d8730738a836c16ffa0799": "07a0c657c55f05dec7efd02ce48a9486",
".git/objects/38/ccd479d81ee29d5d05b00b6c504c0c12e5eb46": "6077253465a2d33664b0e0e2983ae42b",
".git/objects/38/d31f37fc9b145b661d8d77cb82d9c1ffe72336": "0d9aee651f7fb130fc645afa3d8bb3bc",
".git/objects/3a/c2f58d8264878fca6ab45840fbc90b5a2110f9": "95d34de869c7188bb0c46532c77b2163",
".git/objects/3e/499017c0581d6b35a390960258927aab8d10b0": "45115a6d4b36d07b27dad989b1b513fe",
".git/objects/3e/62fd67258de178060ec0172f41c55ab6879cbd": "320d0db691776a039a39f1e8a646923c",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4b/ca81dd397eff1b8b5a893a8a16077f574b2799": "c283fd13e3ded6e765d04ce313b4e00a",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/5a/17f6119f2ff6b1f5acc3aec8f9ad482b07d45c": "45ed1d25662e03861c3904e27e0f4bb4",
".git/objects/64/0644e45fa1a819f38e434dfb9df0743387705a": "b6acfc231eca2815a1e1a21cb44a5ac4",
".git/objects/67/63071a245f020a1be540559a01bd967e79bca9": "7e859c8e6a6ae6dc6af4c8dff8e6e66d",
".git/objects/72/6960f2af30d1774b496a2dce0362f94fd449e0": "2f35cff6dc9ca9faf6a590836d9c3b71",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/76/e839d70689053df61f75ab22f13fda9991caec": "090f485600c9a96618889e314518fc6a",
".git/objects/79/9a8969293e63dca2be0ac4c3f942b2b3187ff2": "3fe6c3bb3920a65b8dccb5136df37b82",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7e/6a193891ff9d3c834db5f41c071fa2c9e9520d": "27868ee38abe5afce7a5bd438c22723b",
".git/objects/80/fc4950b3cb06438cc007288faa12e868d1ca9e": "5a5e35c95bee085855b8cbcf82d4c0c4",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/92/3cab6c140883f23138185fe182854e671bef66": "89f2705cf40df223c976b65d86ff5e2e",
".git/objects/93/2450a5bda114336a3a8b6abf69397f687cd37b": "9875f966148b0533576984d45a278a91",
".git/objects/99/6dfed3529afa5bcb3e24e7dbe3a6321d39866b": "1504ade9d09365ef3e99f38b5e10bf8d",
".git/objects/9d/d25d38e1922565ca543a40071785f477089a24": "25dc718b85e0be7ff16ef8d270b96c8a",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a4/d958f6451487e345f47d950a62b013c23e9977": "ea977cdf06d4e033dba63d75c523cea1",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/b95091e4387502e4ae11d6985133897352c872": "8aeca992ee1500e0e1c2d534d6c636e0",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bd/7fc0bec088ff8c6e7fb951674b78c4fbd36e90": "6d34b55bdd6eafba5e3f9c20fb08f64d",
".git/objects/c2/489da1fa3d2fad9118b412233d5ba3c1343e17": "15123e3bc5f07b1d696126234e9adc1e",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/cf/7b5252a413eb634d9a300a5a355becf56e376f": "e57fe59bc8619a2d0a05ce5b9585faa3",
".git/objects/d2/dc4487abc9a402a3ba651772b069d60f552bb0": "3f42c56795eab3481223b05df9b2f8df",
".git/objects/d5/01f0161cb30fd0aa2622f12769719b05da0bd6": "a95cf20402798f528183cf349cc386fd",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/a57178a6b95fcd9ab502ec822e0af1da200c8d": "2df009963d2cf732993b389735adfe27",
".git/objects/e9/a7f22456e6e0108babb810fa7be43b6d7dea12": "fa42e315a748efc42ce051e51df02cda",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/efd179a07e790f98991c3991851620ecb5104c": "9637ba7d73c5a56571cd274494c91cd1",
".git/ORIG_HEAD": "115fb4dd8279da863654543ed034f3ef",
".git/refs/heads/main": "2843f4fd9feec23fc7cdcef47706404b",
".git/refs/remotes/origin/main": "2843f4fd9feec23fc7cdcef47706404b",
"assets/AssetManifest.json": "f5e1cdb83cfff94b3c4b981c729201ee",
"assets/assets/SF-UI-Display-Bold.ttf": "5ef6db5a59a354fd436d16906502b6a8",
"assets/assets/SF-UI-Display-Regular.ttf": "08397c215a9e579b48e778a2fe9b6214",
"assets/assets/troy1.jpg": "7d262df0fa6f17f0872b0ddb26a9735c",
"assets/assets/troy10.jpg": "acc070ace52a3782ef87c9865a54fd8e",
"assets/assets/troy11.jpg": "c3406cea38086a1603ff4676d0cae7bf",
"assets/assets/troy12.jpg": "9208259251c0a5f6691b46f709b44011",
"assets/assets/troy13.jpg": "8be6e3d907ddf542ce7cd326428d2d18",
"assets/assets/troy2.jpg": "e94b3d99403644edd29c7836f0f26c69",
"assets/assets/troy3.jpg": "a61b4f64afa6e56d130388ca94053392",
"assets/assets/troy4.jpg": "4782602bdf869311af2dde326385b016",
"assets/assets/troy5.jpg": "1e5ab32e52f7d359693b295255869ace",
"assets/assets/troy6.jpg": "75012c48afe9cc3932772557b5f83356",
"assets/assets/troy7.jpg": "72ade6bcc51a7a3f688ace353fe7f448",
"assets/assets/troy8.jpg": "a48d2f419dde2df2f5efcb961a1b9053",
"assets/assets/troy9.jpg": "a6e7b2e335d076d09905ff9091189c54",
"assets/FontManifest.json": "b6a3d994f4b3a76162b5261758f15075",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "ca0c31b798e3dfce571f3a7d802c7c70",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c531a6e0a278de2c9ce8cdcbcec5821f",
"/": "c531a6e0a278de2c9ce8cdcbcec5821f",
"main.dart.js": "b2d9052295463427a3937f2124e9d8fe",
"manifest.json": "7db39c542a58fd11e0641930d46bbda0",
"version.json": "9e84962f235568a45a617f938a31115b"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
