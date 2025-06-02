/*  WORKSHOP_CONFIG.ts
    Configuración central para la web del Taller-Conferencia
    "Implementación de una aplicación de Realidad Aumentada usando OpenGL moderno" */

export const WORKSHOP_CONFIG = {
  // ——————————————————— Información general ———————————————————
  id: "modern-opengl-ar",
  title: "Taller • OpenGL AR desde cero",
  subtitle: "De una ventana vacía a un sistema solar AR con iluminación en 2 h",
  date: "2025-06-04",
  place: "Auditorio Alfredo Celso Alva Bravo — FISI, UNMSM",
  durationHours: 2,
  language: "ES",

  // ——————————————————— Ponente / staff ———————————————————
  speaker: {
    name: "Railly Hugo Quispe",
    role: "Web-UI Dev @ Disney Streaming | Jefe de Práctica FISI-UNMSM",
    avatar: "/hugo-profile.webp",
    social: {
      github: "https://github.com/railly",
      linkedin: "https://www.linkedin.com/in/railly-hugo/",
      twitter: "https://twitter.com/raillycodes"
    },
    contact: "railly.hugo@unmsm.edu.pe"
  },

  // ——————————————————— Repositorio base ———————————————————
  repository: {
    url: "https://github.com/railly/modern-opengl-ar-workshop",
    defaultBranch: "main",
    license: "MIT"
  },

  // ——————————————————— Requisitos previos ———————————————————
  prerequisites: [
    "C++17 básico (funciones, structs)",
    "GLM / OpenGL mindset (vertex, fragment shaders)",
    "Homebrew o vcpkg instalado",
    "macOS / Linux con cámara web — o Windows + WSL 2"
  ],

  // ——————————————————— Roadmap incremental ———————————————————
  // Cada step es un tag del repo y renderiza su propia página MDX.
  steps: [
    {
      id: "step0-setup",
      tag: "v0-setup",
      title: "Bootstrap & Build",
      summary: "Clonamos el repo, instalamos Homebrew + GLFW + Glad, testeamos la ventana vacía.",
      durationMin: 10
    },
    {
      id: "step1-window",
      tag: "v1-opengl-window",
      title: "Ventana & Contexto",
      summary: "GLFW ↔ Glad listos, clear-color animado para comprobar que la GPU rinde.",
      durationMin: 5
    },
    {
      id: "step2-sun-texture",
      tag: "v2-sun-texture",
      title: "Malla Esfera + Textura",
      summary: "Generamos esfera UV, cargamos `sun.jpg`, rotamos la textura: primer objeto.",
      durationMin: 15
    },
    {
      id: "step3-orbits",
      tag: "v3-orbits",
      title: "Tierra + Luna + Órbitas",
      summary: "Añadimos matrices de modelo y orbits jerárquicas (padres/ hijos).",
      durationMin: 15
    },
    {
      id: "step4-marker-tracking",
      tag: "v4-ar-marker",
      title: "ArUco Marker + View/Proj",
      summary: "OpenCV detecta el marcador y convertimos rvec/tvec a vista GL.",
      durationMin: 20
    },
    {
      id: "step5-camera-bg",
      tag: "v5-camera-bg",
      title: "Video de fondo",
      summary: "Textura en tiempo real sobre un quad usando la imagen de la webcam.",
      durationMin: 10
    },
    {
      id: "step6-imgui",
      tag: "v6-imgui",
      title: "UI en vivo",
      summary: "ImGui para tunear radios, velocidad, hover y escala global.",
      durationMin: 10
    },
    {
      id: "step7-lighting",
      tag: "v7-lighting",
      title: "Iluminación Phong",
      summary: "Normals + diffuse/specular; el Sol emite luz, Tierra/Moon la reciben.",
      durationMin: 15
    },
    {
      id: "step8-polish",
      tag: "v8-polish",
      title: "Polishing & Packaging",
      summary: "Blend, depth-mask, GIF final, README con comandos, build cross-platform.",
      durationMin: 10
    }
  ],

  // ——————————————————— Quick links en la navbar ———————————————————
  nav: [
    { label: "Inicio", href: "/" },
    { label: "Pasos",  href: "/steps" },
    { label: "Requisitos", href: "/setup" },
    { label: "Repo",  href: "https://github.com/railly/modern-opengl-ar-workshop" }
  ],

  // ——————————————————— Recursos para descargar ———————————————————
  resources: [
    { title: "Slides PDF", href: "/slides/modern-opengl-ar.pdf" },
    { title: "Marker PDF (imprimir)", href: "/assets/marker_6x6_id0.pdf" },
    { title: "Cheat-sheet GLSL", href: "/assets/glsl-quickref.pdf" }
  ],

  // ——————————————————— Herramientas de desarrollo ———————————————————
  developmentTools: [
    {
      name: "Visual Studio Code",
      description: "Editor de código recomendado",
      url: "https://code.visualstudio.com/",
      platform: "Cross-platform"
    },
    {
      name: "Git",
      description: "Control de versiones",
      url: "https://git-scm.com/",
      platform: "Cross-platform"
    },
    {
      name: "CMake",
      description: "Sistema de construcción",
      url: "https://cmake.org/",
      platform: "Cross-platform"
    },
    {
      name: "Homebrew (macOS)",
      description: "Gestor de paquetes para macOS",
      url: "https://brew.sh/",
      platform: "macOS"
    },
    {
      name: "vcpkg (Windows)",
      description: "Gestor de paquetes para C++",
      url: "https://vcpkg.io/",
      platform: "Windows"
    }
  ],

  // ——————————————————— Documentación externa ———————————————————
  documentation: [
    {
      title: "OpenGL Documentation",
      description: "Documentación oficial de OpenGL",
      url: "https://www.opengl.org/documentation/",
      type: "docs"
    },
    {
      title: "GLFW Documentation",
      description: "Biblioteca para gestión de ventanas y contexto OpenGL",
      url: "https://www.glfw.org/docs/latest/",
      type: "docs"
    },
    {
      title: "OpenCV ArUco Documentation",
      description: "Documentación para detección de marcadores ArUco",
      url: "https://docs.opencv.org/4.x/d5/dae/tutorial_aruco_detection.html",
      type: "docs"
    },
    {
      title: "ImGui Documentation",
      description: "Biblioteca para interfaces gráficas inmediatas",
      url: "https://github.com/ocornut/imgui",
      type: "docs"
    }
  ]
} as const;

// Tipos auxiliares
export type Step       = (typeof WORKSHOP_CONFIG)['steps'][number];
export type Resource   = (typeof WORKSHOP_CONFIG)['resources'][number];
export type DevTool    = (typeof WORKSHOP_CONFIG)['developmentTools'][number];
export type Doc        = (typeof WORKSHOP_CONFIG)['documentation'][number];
