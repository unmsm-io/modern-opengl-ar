# 🚀 Taller • OpenGL AR desde cero

> **De una ventana vacía a un sistema solar AR con iluminación en 2 horas**

Un sitio web documentación completa para el taller de **Implementación de una aplicación de Realidad Aumentada usando OpenGL moderno**, desarrollado con [Astro](https://astro.build) y configurado para mostrar el progreso incremental del workshop.

## 📋 Descripción del Proyecto

Este repositorio contiene la documentación web interactiva para un taller intensivo de 2 horas donde los participantes aprenden a crear una aplicación de realidad aumentada con OpenGL moderno en C++. El sitio presenta:

- **8 pasos incrementales** desde setup hasta polish final
- **Documentación detallada** de cada fase del desarrollo
- **Enlaces directos** a tags específicos del repositorio de código
- **Recursos descargables** (PDFs, markers, cheat-sheets)
- **Información del workshop** y prerequisites

## 🎯 Workshop Overview

**📅 Fecha:** 4 de Junio, 2025  
**🕐 Duración:** 2 horas  
**📍 Lugar:** Auditorio Alfredo Celso Alva Bravo — FISI, UNMSM  
**👨‍💻 Instructor:** Railly Hugo - Design Engineer | Maestrando en AI  

### Roadmap del Taller

| Paso | Tag | Descripción | Duración |
|------|-----|-------------|----------|
| **0** | `v0-setup` | Bootstrap & Build | 10 min |
| **1** | `v1-opengl-window` | Ventana & Contexto | 5 min |
| **2** | `v2-sun-texture` | Malla Esfera + Textura | 15 min |
| **3** | `v3-orbits` | Tierra + Luna + Órbitas | 15 min |
| **4** | `v4-ar-marker` | ArUco Marker + View/Proj | 20 min |
| **5** | `v5-solar-system` | Sistema Solar 3D | 10 min |
| **6** | `v6-imgui` | UI en vivo | 10 min |
| **7** | `v7-lighting` | Iluminación Phong | 15 min |
| **8** | `v8-polish` | Polishing & Packaging | 10 min |

## 🛠️ Tech Stack

- **Frontend:** [Astro](https://astro.build) 4.x
- **Styling:** [Tailwind CSS](https://tailwindcss.com) + Custom Design System
- **Icons:** [Lucide Astro](https://lucide.dev)
- **Content:** [Astro Content Collections](https://docs.astro.build/en/guides/content-collections/)
- **Fonts:** Heebo Variable + Geist Mono
- **Package Manager:** pnpm

## 📁 Estructura del Proyecto

```
modern-opengl-ar/
├── public/                    # Assets estáticos
│   ├── hugo-profile.webp     # Avatar del instructor  
│   ├── slides/               # PDFs del taller
│   └── assets/               # Markers y cheat-sheets
├── src/
│   ├── components/           # Componentes reutilizables
│   │   ├── common/          # Footer, Sidebar, etc.
│   │   ├── home/            # Hero, Overview, etc.
│   │   └── schedule/        # Componentes de cronograma
│   ├── config/
│   │   └── workshop.ts      # ⚙️ Configuración central
│   ├── content/
│   │   ├── config.ts        # Schema de content collections
│   │   └── steps/           # 📚 Contenido MDX de cada paso
│   ├── layouts/
│   │   ├── BaseLayout.astro # Layout base del sitio
│   │   └── StepLayout.astro # Layout para pasos individuales
│   ├── pages/               # Rutas del sitio
│   │   ├── steps/
│   │   │   └── [stepId]/    # Páginas dinámicas de pasos
│   │   ├── index.astro      # Homepage
│   │   ├── steps.astro      # Listado de pasos
│   │   ├── resources.astro  # Recursos y herramientas
│   │   ├── schedule.astro   # Cronograma del taller
│   │   └── staff.astro      # Información del instructor
│   └── styles/
│       └── global.css       # Estilos globales
├── astro.config.mjs         # Configuración de Astro
├── tailwind.config.mjs      # Configuración de Tailwind
└── tsconfig.json           # Configuración TypeScript
```

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18.x o superior
- **pnpm** (recomendado) o npm

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/unmsm-io/modern-opengl-ar.git
cd modern-opengl-ar

# Instalar dependencias
pnpm install

# Iniciar servidor de desarrollo
pnpm dev
```

El sitio estará disponible en `http://localhost:4321`

### Scripts Disponibles

```bash
# Desarrollo
pnpm dev              # Servidor de desarrollo
pnpm build            # Build de producción
pnpm preview          # Preview del build
pnpm astro check      # Verificación de tipos

# Utilidades
pnpm astro add        # Agregar integraciones
pnpm astro --help     # Ayuda de CLI
```

## 📝 Content Management

### Configuración Central

Todo el contenido del workshop está centralizado en `src/config/workshop.ts`:

```typescript
export const WORKSHOP_CONFIG = {
  // Información general
  id: "modern-opengl-ar",
  title: "Taller • OpenGL AR desde cero",
  subtitle: "De una ventana vacía a un sistema solar AR con iluminación en 2 h",
  date: "2025-06-04",
  place: "Auditorio Alfredo Celso Alva Bravo — FISI, UNMSM",
  
  // Información del instructor
  speaker: { /* ... */ },
  
  // Pasos del workshop
  steps: [ /* ... */ ],
  
  // Recursos y herramientas
  resources: [ /* ... */ ],
  developmentTools: [ /* ... */ ],
  documentation: [ /* ... */ ]
}
```

### Content Collections

Los pasos del workshop están definidos como content collections en `src/content/steps/`:

```typescript
// src/content/config.ts
const step = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/steps" }),
  schema: z.object({
    id: z.string(),             // step0-setup
    tag: z.string(),            // git tag
    title: z.string(),
    summary: z.string(),
    durationMin: z.number(),
    files: z.array(z.string()),
    path: z.string(),
    author: z.string(),
    authorImageUrl: z.string(),
    pubDate: z.string()
  })
});
```

### Agregar Nuevo Paso

1. **Crear archivo MDX:**
```bash
touch src/content/steps/step9-deployment.mdx
```

2. **Agregar frontmatter:**
```mdx
---
id: "step9-deployment"
tag: "v9-deployment"
title: "Deployment & Distribution"
summary: "Preparamos la aplicación para distribución cross-platform"
durationMin: 15
files: ["CMakeLists.txt", "deploy.sh", "README.md"]
path: "deployment/"
author: "Railly Hugo"
authorImageUrl: "/hugo-profile.webp"
pubDate: "2025-01-15"
---

# Contenido del paso...
```

3. **Actualizar configuración:**
```typescript
// src/config/workshop.ts
steps: [
  // ... pasos existentes
  {
    id: "step9-deployment",
    tag: "v9-deployment", 
    title: "Deployment & Distribution",
    summary: "Preparamos la aplicación para distribución cross-platform",
    durationMin: 15
  }
]
```

## 🎨 Design System

### Paleta de Colores

El sitio usa una paleta de colores **zinc** con soporte para modo oscuro:

- **Zinc 50-900:** Grises principales
- **Blue 600/400:** Acentos y enlaces
- **Gradient:** Blue/Indigo para destacados

### Componentes

- **Cards:** Backgrounds con `bg-white dark:bg-zinc-800/50`
- **Borders:** `border-zinc-200 dark:border-zinc-700`
- **Text:** `text-zinc-600 dark:text-zinc-300`
- **Buttons:** Blue 600 con hover states

### Typography

- **Headings:** Font Heebo Variable
- **Code:** Font Geist Mono
- **Body:** System fonts stack

## 🔧 Customización

### Modificar Tema

```css
/* src/styles/global.css */
:root {
  --color-primary: #2563eb;    /* Blue 600 */
  --color-secondary: #64748b;  /* Slate 500 */
  --sidebar-width: 16rem;
}
```

### Agregar Nueva Página

```bash
# Crear nueva página
touch src/pages/nueva-seccion.astro
```

```astro
---
// src/pages/nueva-seccion.astro
import BaseLayout from "../layouts/BaseLayout.astro";
---

<BaseLayout title="Nueva Sección">
  <div class="prose dark:prose-invert max-w-none">
    <h1>Nueva Sección</h1>
    <!-- Contenido -->
  </div>
</BaseLayout>
```

### Modificar Navegación

```typescript
// src/config/workshop.ts
nav: [
  { label: "Inicio", href: "/" },
  { label: "Pasos", href: "/steps" },
  { label: "Nueva Sección", href: "/nueva-seccion" }, // ✅ Agregar aquí
  { label: "Repo", href: "https://github.com/..." }
]
```

## 🚀 Deployment

### Build de Producción

```bash
pnpm build
```

Los archivos estáticos se generan en `dist/`

### Deploy Options

- **Vercel:** Conectar repositorio GitHub
- **Netlify:** Drag & drop de `dist/`
- **GitHub Pages:** Actions workflow
- **Servidor propio:** Servir archivos estáticos


## 🤝 Contributing

### Development Workflow

1. **Fork** el repositorio
2. **Crear rama** feature: `git checkout -b feature/nueva-funcionalidad`
3. **Commit** cambios: `git commit -m 'Add: nueva funcionalidad'`
4. **Push** rama: `git push origin feature/nueva-funcionalidad`
5. **Crear** Pull Request

### Code Style

- **TypeScript** para type safety
- **ESLint + Prettier** para formateo
- **Conventional Commits** para mensajes

### Testing Local

```bash
# Verificar tipos
pnpm astro check

# Build test
pnpm build && pnpm preview
```

## 📚 Recursos Adicionales

### Workshop Code Repository
- **Main Repo:** [Railly/solar-system-ar](https://github.com/Railly/solar-system-ar)
- **Tags:** Cada paso tiene su tag correspondiente (`v0-setup`, `v1-opengl-window`, etc.)

### Documentación
- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Content Collections Guide](https://docs.astro.build/en/guides/content-collections/)

### OpenGL Resources
- [OpenGL Documentation](https://www.opengl.org/documentation/)
- [GLFW Documentation](https://www.glfw.org/docs/latest/)
- [OpenCV ArUco Documentation](https://docs.opencv.org/4.x/d5/dae/tutorial_aruco_detection.html)

## 📄 License

MIT License - Ver [LICENSE](LICENSE) para más detalles.

## 👨‍💻 Author

**Railly Hugo**  
- Design Engineer | Maestrando en AI | Jefe de Práctica FISI-UNMSM
- GitHub: [@railly](https://github.com/railly)
- LinkedIn: [railly-hugo](https://www.linkedin.com/in/railly-hugo/)
- Twitter: [@raillyhugo](https://twitter.com/raillyhugo)
- Email: railly.hugo@unmsm.edu.pe

---

<div align="center">

**🎯 ¿Listo para crear tu primera app de Realidad Aumentada con OpenGL?**

[🚀 Comenzar Workshop](https://modern-opengl-ar.vercel.app/steps) • [📖 Ver Documentación](https://modern-opengl-ar.vercel.app) • [💻 Código Fuente](https://github.com/Railly/solar-system-ar)

</div>
