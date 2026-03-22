# Fast POS 2.0 - Landing Page 🚀

Plataforma comercial y Landing Page de alta conversión diseñada para capturar, educar y convertir prospectos locales en clientes del software **Fast POS** (Sistema de Punto de Venta Local sin rentas).

## 🌟 Características Principales

*   **Diseño Premium (Glassmorphism):** Interfaz de usuario hiper-moderna con efectos visuales de cristal esmerilado, luces ambientales de neón y animaciones fluidas impulsadas por Framer Motion.
*   **Estrategia Psicológica de Precios (Decoy Pricing):** Sistema avanzado de 3 columnas (Base, Avanzada, Pro) diseñado para generar un fuerte anclaje de precios y forzar orgánicamente el volumen de ventas hacia el plan central ($1,299).
*   **Motor Inbound Híbrido (Blog SEO):** Ecosistema nativo de contenidos (artículos educacionales) integrados en el App Router para interceptar tráfico de dueños de negocios con alta intención de compra.
*   **SEO Técnico Blindado:** Inyección total de meta etiquetas OpenGraph para previsualizaciones premium en WhatsApp, `sitemap.ts`, `robots.ts` automatizados y marcadores enriquecidos JSON-LD (`SoftwareApplication`).
*   **Conversión Móvil Optimizada:** Todos los embudos ("Call To Action") están blindados usando enlaces HTML nativos. Esto fuerza la apertura directa de la aplicación de WhatsApp sin ser interrumpidos por los bloqueadores de ventanas (Pop-Up blockers) intrínsecos de Safari iOS o las WebViews de Facebook.
*   **Protección Legal (Meta Ads):** Ruta nativa de Aviso de Privacidad adaptada al mercado mexicano para cumplir con los requerimientos estrictos de las plataformas de tráfico de pago.

## 🛠️ Arquitectura Técnica

*   **Framework Core:** [Next.js 14/15 (App Router)](https://nextjs.org/)
*   **Motor de Renderizado:** Turbopack
*   **Tipado:** TypeScript
*   **Estilos:** Tailwind CSS
*   **Interacciones:** Framer Motion
*   **Sistema de Íconos:** Tabler Icons React
*   **Analíticas Globales:** Vercel Web Analytics (@vercel/analytics)

## ⚙️ Entorno de Desarrollo (Local)

Para correr la página web en tu máquina y modificar el diseño, sigue estos pasos:

1. Clona el repositorio y asegúrate de estar en el directorio del proyecto.
2. Instala las dependencias:

```bash
npm install
# o con yarn
yarn install
```

3. Inicia el servidor de desarrollo ultrarrápido:

```bash
npm run dev
```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador favorito. El sistema soporta recarga rápida (HMR).

## 🚀 Despliegue en Producción (Vercel)

Este proyecto está optimizado milimétricamente para ser desplegado en **Vercel** de manera gratuita.

1. Sube tu código a un repositorio de GitHub privado.
2. Ingresa a [Vercel.com](https://vercel.com/) y enlaza tu cuenta de GitHub.
3. Importa este proyecto. Vercel detectará que es `Next.js` y configurará automáticamente los comandos de compilación.
4. Presiona **Deploy**. 

Las métricas de Vercel Analytics se activarán instantáneamente al detectar tráfico real.
