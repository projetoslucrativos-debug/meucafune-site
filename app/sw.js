// Cafuné – service worker: app instalável e a funcionar sem rede
const CACHE = 'cafune-v2';
const SHELL = ['/app/', '/app/manifest.webmanifest', '/app/icon-192.png', '/app/icon-512.png', '/app/icon-180.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  const r = e.request;
  if(r.method !== 'GET') return;
  const u = new URL(r.url);
  if(u.origin !== location.origin) return; // Supabase, fontes e CDN vão direto à rede
  if(r.mode === 'navigate'){
    e.respondWith(fetch(r).then(res => { const cp = res.clone(); caches.open(CACHE).then(c => c.put('/app/', cp)); return res; }).catch(() => caches.match('/app/')));
    return;
  }
  e.respondWith(caches.match(r).then(hit => hit || fetch(r)));
});
self.addEventListener('push', e => {
  let d = {}; try{ d = e.data.json(); }catch(x){ d = {body: e.data ? e.data.text() : ''}; }
  e.waitUntil(self.registration.showNotification(d.title || 'Dudu 🦥', {body: d.body || '🦥', icon: '/app/icon-192.png', badge: '/app/icon-192.png', data: {url: d.url || '/app/'}}));
});
self.addEventListener('notificationclick', e => { e.notification.close(); e.waitUntil(clients.openWindow((e.notification.data && e.notification.data.url) || '/app/')); });
