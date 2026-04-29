# 🎨 Design System & Color Psychology: Fast-POS Premium

Este documento define las reglas visuales y estéticas para posicionar Fast-POS no como "un programita de tienda", sino como un **Software SaaS Enterprise y Premium**.

---

## 1. Psicología del Color (Color Psychology)
Hemos definido una paleta estratégica donde el color comunica la función, operando de manera subliminal en el cerebro del dueño de negocio.

*   🔵 **Azul Corporativo (`blue-600`) & Azul Marino (`slate-900`): CONFIANZA Y ESTABILIDAD**
    *   *Uso:* Producto principal (Caja Offline), seguridad, bases de datos locales, botones de compra principal.
    *   *Psicología:* "Tus datos están a salvo. El sistema no se va a caer."
*   🟣 **Índigo / Violeta (`indigo-600` / `violet-500`): INNOVACIÓN Y NUBE**
    *   *Uso:* App Móvil, sincronización en tiempo real, funciones SaaS.
    *   *Psicología:* "Tecnología de punta. Estás conectado al futuro desde tu celular."
*   🟢 **Esmeralda / Teal (`emerald-500` / `teal-400`): CRECIMIENTO Y DINERO**
    *   *Uso:* Gráficas de ventas, reportes de ganancias, indicadores de éxito.
    *   *Psicología:* "Tu negocio está ganando más dinero y es rentable."
*   ⚪ **Fondos (`slate-50` / `white/80`): LIMPIEZA CLÍNICA**
    *   *Uso:* En lugar de usar blanco puro (`#fff`), usamos `slate-50` para reducir la fatiga visual, logrando un aspecto "Apple-like".

---

## 2. Patrones de Diseño Modernos (SaaS 2024+)

Vamos a abandonar los diseños "planos" y aburridos. Implementaremos estos 4 patrones clave en todas las páginas:

1.  **Glassmorphism (Efecto Vidrio Esmerilado):**
    *   *Técnica CSS:* `bg-white/70 backdrop-blur-xl border border-white/20`.
    *   *Efecto:* Las tarjetas no flotan en el vacío, interactúan con las luces de fondo (orbes), dando una sensación táctil y premium.
2.  **Ambient Glows (Luces Ambientales):**
    *   *Técnica CSS:* Divs absolutos con `blur-[120px]` y colores pastel radiantes.
    *   *Efecto:* Guían el ojo del usuario hacia elementos importantes (simulando iluminación de estudio profesional detrás de la pantalla).
3.  **Bento Box Layout (Grillas Asimétricas):**
    *   En lugar de aburridas listas 1x1x1, usamos cuadrículas estilo "Bento" donde una tarjeta es grande y las otras pequeñas, creando jerarquía visual instantánea.
4.  **Micro-interacciones (Hover States):**
    *   *Técnica CSS:* `hover:-translate-y-1 hover:shadow-2xl transition-all duration-300`.
    *   *Efecto:* El sistema se siente "vivo" y reacciona al cursor del cliente.

---

> **Regla de Oro para el Desarrollo:** Todas las páginas secundarias deben importar `<AnimatedBackground />` o implementar sus propias "Ambient Glows" para mantener la consistencia visual con la página de inicio. Nada de fondos aburridos.
