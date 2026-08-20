# 📋 Información del negocio — Dulce & Punto

> Estado por dato: `❌ Falta` / `🟡 Parcial` / `✅ Confirmado`.
> Regla del proyecto: no inventar nada. Lo que esté marcado como
> "Parcial" o "Falta" NO debe mostrarse como real en la web.

Última actualización: 2026-08-14.

---

## Identidad

| Dato | Estado | Notas |
|---|---|---|
| Nombre del emprendimiento | ✅ Confirmado | **Dulce & Punto** — usuario de redes: `DulceyPunto.lovd` |
| Descripción / tagline | ✅ Confirmado | *"Detalles dulces para regalar, sorprender o mimarte 💕 — Desayunos, meriendas y cajitas personalizadas 🌈 — ¡Hacemos todo con amor!"* |
| Categoría | ✅ Confirmado | Página de emprendedor (negocio de repostería casera) |
| Logo original | ✅ Confirmado | El logo oficial es **la foto de perfil** de Facebook. Descargado: `src/assets/logo/perfil-1024.jpg` (1024×1024). |
| Portada (cover) | ✅ Confirmado | Descargada: `src/assets/logo/portada-735x420.jpg`. |
| Paleta de colores | ✅ Confirmado | Extraída del logo por análisis de píxeles. Ver tabla de colores abajo. |
| Tipografía utilizada | ✅ Decidida | No hay fuente oficial (la confirmó el dueño). Se eligió una combinación propia en Fase 2 — **no** se afirma que sea "la de la marca". Ver `05-DECISIONES.md`. |

### Paleta de colores — extraída del logo (2026-08-14)

El logo es mayormente claro (61 % blanco). Los tonos de marca son
crema/rosa empolvado y marrón cálido apagado:

| Rol | HEX | Descripción |
|---|---|---|
| Blanco dominante | `#F8F8F8` | Fondo general del logo (≈61 %) |
| Tono de marca | `#F0E0E0` | Crema / rosa empolvado (≈26 % del logo) — color principal |
| Beige cálido | `#F0E0C0` | Acento secundario (bordes/detalles) |
| Marrón-mauve apagado | `#A09090` | Texto/detalles del logo |
| Marrón oscuro cálido | `#504040` | Contraste oscuro (texto fuerte) |

> Estos valores salen del análisis programático de `perfil-1024.jpg`.
> Son los colores *reales presentes en el logo*, no inventados. En
> Fase 2 se asignan a las variables CSS (`--color-primary`, etc.).

## Producto / catálogo

| Dato | Estado | Notas |
|---|---|---|
| Fotografías originales | ✅ Confirmado | 16 fotos descargadas de Facebook → `src/assets/products/` |
| Categorías de productos | ✅ Confirmado | Tartas caseras, cajitas/boxes personalizados, desayunos y meriendas, combos para mate, cajitas por ocasión (ej. día del amigo) |
| Catálogo detallado | 🟡 Parcial | Se infiere de fotos/posts; **6 productos cargados en `src/data/products.ts`** (sin precios). Falta lista oficial |
| Precios | ❌ Falta | Facebook dice *"consultar precios"*. Los carga el dueño. |
| Descripciones por producto | 🟡 Parcial | Solo textos de posts (ver abajo) |
| Productos destacados | 🟡 Parcial | Candidatos: tartas 100 % caseras y box para mates. **Los 6 productos cargados están marcados `featured`** para la sección de la home; ajustar cuando esté la lista oficial |
| Métodos de pago | ❌ Falta | Lo carga el dueño |
| Promociones | ❌ Falta | Solo posteos puntuales (día del amigo); no hay promos permanentes |

### Fotos descargadas (`src/assets/products/`)

| Archivo | Resolución | Origen (post de Facebook) |
|---|---|---|
| `producto-01.jpg` | 736×981 | Tartas 100 % caseras (1 ago 2025) |
| `producto-02.jpg` | 720×887 | Tartas 100 % caseras (1 ago 2025) |
| `producto-03.jpg` | 405×720 | Tartas 100 % caseras (1 ago 2025) |
| `producto-04.jpg` | 1160×2048 | Box día del amigo (17 jul 2025) |
| `producto-05.jpg` | 1179×1432 | Box día del amigo (17 jul 2025) |
| `producto-06.jpg` | 1179×1443 | Box día del amigo (17 jul 2025) |
| `producto-07.jpg` | 1179×1432 | Box día del amigo (17 jul 2025) |
| `producto-08.jpg` | 1179×1429 | Box día del amigo (17 jul 2025) |
| `producto-09.jpg` | 1080×1350 | Opciones día del amigo (10 jul 2025) |
| `producto-10.jpg` | 1080×1350 | Opciones día del amigo (10 jul 2025) |
| `producto-11.jpg` | 1080×1920 | Opciones día del amigo (10 jul 2025) |
| `producto-12.jpg` | 1080×1080 | Box para mates (28 jun 2025) |
| `producto-13.jpg` | 1152×2048 | Galería / combo (álbum) |
| `producto-14.jpg` | 1152×2048 | Galería / combo (álbum) |
| `producto-15.jpg` | 1414×2000 | Galería / combo (álbum) |
| `producto-16.jpg` | 1152×2048 | Galería / combo (álbum) |

> ⚠️ Resoluciones limitadas: son las únicas fotos que tiene el dueño por
> ahora. Cuando consiga fotos mejores las reemplaza y avisa. Usar estas
> como material base real (no inventar otras).

### Textos reales de posts (para copiar/adaptar, no inventar)

- **1 ago 2025:** *"Tartas 100% caseras ❤️, no dudes en consultar precios!"*
- **17 jul 2025:** *"Box día del amigo ❤️‍🩹🤩"*
- **10 jul 2025:** *"Se viene el día del amigo 🤩, mira estas bellas opciones que tenemos para regalar en dulce y punto ❤️"*
- **28 jun 2025:** *"🌸 ¡Llegó el box ideal para tus mates! 🌸 Endulzá tus tardes con este combo irresistible que tiene un poquito de todo 😋✨..."*

## Contacto / operación

| Dato | Estado | Notas |
|---|---|---|
| Facebook | ✅ Confirmado | https://www.facebook.com/people/DulceyPuntolovd/61577830802142/ |
| Instagram | ✅ Confirmado | `@dulceypunto.love` → https://www.instagram.com/dulceypunto.love |
| TikTok | ✅ Confirmado | `@DulceyPunto.love❤️` → https://www.tiktok.com/@DulceyPunto.love❤️ |
| WhatsApp / teléfono | ✅ Confirmado | `011 6515-9776` — es también WhatsApp (confirmado por el cliente). Formato wa.me: `+54 9 11 6515-9776` → `https://wa.me/5491165159776` |
| Ubicación | ✅ Confirmado | Buenos Aires, Argentina — área de servicio: **Burzaco, PBA** |
| Horario | ✅ Confirmado | Facebook: "Siempre abierto". **Decisión: no se publica horario en la web** (lo definió el cliente). |
| Métodos de pago | ❌ Falta | Lo carga el dueño |
| Zonas de entrega | ❌ Falta | Solo se sabe área de servicio (Burzaco, PBA); detalle lo carga el dueño |
| Pedidos personalizados | ✅ Confirmado | Existen ("cajitas personalizadas", boxes por ocasión). Cómo funcionan exactamente: ver con el dueño. |

---

## Fuente de estos datos

Extraídos de la página de Facebook **DulceyPunto.lovd** el 2026-08-14
accediendo con un navegador real (el scraping directo a Facebook falla
con error 400). Imágenes descargadas desde los CDN de Facebook
(`scontent.*.fbcdn.net`).