# Rey Balam Productora - Documentación Técnica y Guía de Despliegue

Este documento contiene toda la información necesaria para el mantenimiento, edición y publicación de la plataforma web de **Rey Balam Productora**.

## 1. Identidad Visual (Brand Guidelines)

- **Colores Principales:**
  - `Balam Gold`: #D4AF37 (Dorado metálico)
  - `Jade Ancestral`: #094732 (Verde profundo)
  - `Deep Void`: #0A0A0A (Negro enriquecido para fondo)
  - `Bone White`: #F5F5F0 (Blanco hueso para textos)
- **Tipografías:**
  - **Títulos (H1, H2):** `Cinzel Decorative` (Aura monumental, todas en mayúsculas).
  - **Cuerpo y UI:** `Montserrat` (Neo-minimalismo, grosores Light y Medium).
  - **Acentos:** `Instrument Serif` (Itálica para énfasis cinematográfico).

## 2. Tecnologías Utilizadas

- **Framework:** React 18 + Vite (TypeScript).
- **Estilos:** Tailwind CSS v4.
- **Animaciones:** Framer Motion (Scroll reveals, pull-up text, modals).
- **Iconografía:** Lucide React.
- **Formulario:** Integración con Formspree / Fetch API.

## 3. Estructura de Archivos Multimedia

Para que el sitio funcione correctamente en Hostinger, asegúrate de mantener esta estructura en el servidor:

```text
/ (raiz de Hostinger - public_html)
├── videos/
│   └── MisericordiaInesperada_001.mp4  <-- Archivo de video principal
├── img/
│   ├── logo.png       <-- Logotipo oficial
│   ├── favicon.ico    <-- Icono de pestaña
│   └── membrete.png   <-- Marca de agua institucional
└── index.html         <-- Archivo principal de entrada
```

## 4. Guía de Publicación (Hostinger)

### Paso 1: Generar el Build
En el terminal de VS Code, ejecuta:
```bash
npm run build
```
Esto creará una carpeta llamada `dist/`.

### Paso 2: Preparar los Activos Locales
Asegúrate de que tus carpetas `videos/` e `img/` dentro de la carpeta `public/` (si existe) o en la raíz tengan los archivos mencionados. Vite copiará automáticamente lo que esté en `public/` a la raíz de `dist/`.

### Paso 3: Subida al Servidor
1. Entra a tu **Panel de Hostinger (hPanel)**.
2. Abre el **Administrador de Archivos** o usa una conexión **FTP** (FileZilla).
3. Navega a la carpeta `public_html`.
4. Sube **todo el contenido** de la carpeta local `dist/` a `public_html`.
5. Asegúrate de subir también las carpetas `img/` y `videos/` si no estaban dentro del proceso de build.

## 5. Configuración de Correo (Formulario de Contacto)

El sitio utiliza **Formspree** para el envío de correos sin necesidad de un servidor backend propio.

1. Ve a [https://formspree.io/](https://formspree.io/) y crea una cuenta gratuita.
2. Crea un nuevo "Form" y copia el **ID de Formulario** (ejemplo: `xbjwpoka`).
3. En el archivo `src/components/ContactForm.tsx`, busca la línea:
   `const response = await fetch("https://formspree.io/f/tu_form_id", {`
4. Reemplaza `"tu_form_id"` por tu ID real.
5. Guarda y vuelve a ejecutar `npm run build`.

## 6. Mantenimiento y Edición

- **Modificar la Obra:** Los contenidos de "Misericordia Inesperada" se encuentran dentro del componente `MisericordiaModal` en `App.tsx`.
- **Nuevas Producciones:** Puedes duplicar la estructura de las tarjetas en la sección de "Servicios de índole escénico" para agregar más proyectos.

---
*Desarrollado por el equipo de MilenioTres Producciones® | Dirección Gráfica y Desarrollo: J. Julio Barrutia C.*
