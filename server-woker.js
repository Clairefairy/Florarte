const CACHE_NAME = "florarte-cache-v1";
const urlsToCache = [
  "/",
  "/Produtos/produtos.html",
  "/Produtos/produtos.style.css",
  "/image/Logo-sem-fundo.png",
  "/image/Buquês.jpg",
  "/image/Arranjos.jpg",
  "/image/Plantas.png",
  "/image/Presente-Flores.jpg",
  "/image/Produtos-Buquê de Rosas Vermelhas.jpg",
  "/image/Produtos-Arranjo Tropical.jpg",
  "/image/Produtos-Kit Suculentas.jpg",
  "/image/Produtos-Buquê_de_Girassóis.jpg",
  "/image/Produtos-Orquídea Phalaenopsis.jpg",
  "/image/Produtos-Cesta de Presente.jpg",
];

// Instalando e armazenando no cache
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

// Interceptando as requisições
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => (response ? response : fetch(event.request)))
  );
});
