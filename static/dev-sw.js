// Stub to cleanly unregister dev-mode service workers left in browser cache.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());
