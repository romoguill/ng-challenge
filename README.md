# Full Stack Developer Challenge - Nimble Gravity

Challenge para la posición de Full Stack Developer en Nimble Gravity.

## Solución implementada

### Arquitectura

- **Estructura por features**: El código se organiza por dominio (`candidate`, `job-openings`). Cada feature tiene su propia capa de API (`api/` con queries y query-keys), componentes y constantes.
- **UI compartida**: Los componentes reutilizables están en `src/components/` (header, título de sección, contenedor principal, logo).
- **Datos del servidor**: TanStack Query (React Query) para el estado de servidor — queries para posiciones abiertas y candidato por email, mutaciones para postularse. `QueryClient` centralizado en `App.tsx` mediante `QueryClientProvider`.
- **Estilos**: Tailwind CSS v4 con `@tailwindcss/vite`, usando tokens de diseño (p. ej. `brand-secondary`, `background`, `foreground`) para una UI consistente.
- **Build**: Vite 7 con React 19, TypeScript y ESLint.

### Librerías

| Uso             | Librería               |
| --------------- | ---------------------- |
| Framework       | React 19               |
| Build y dev     | Vite 7                 |
| Estado servidor | TanStack React Query 5 |
| Estilos         | Tailwind CSS 4         |

### Cómo ejecutar el proyecto

1. **Instalar dependencias**

   ```bash
   npm install
   ```

2. **Configurar entorno**  
   Copiar `.env.example` a `.env` y definir:
   - `VITE_NG_API_URL` — URL base de la API de Nimble Gravity
   - `VITE_CANDIDATE_EMAIL` — email del candidato para obtener el perfil y enviar postulaciones

3. **Arrancar la aplicación**

   ```bash
   npm run dev
   ```

   La app estará disponible en la URL que muestre la terminal (normalmente `http://localhost:5173`).

---

## Objetivos del Challenge

La aplicación debe:

- Obtener los datos del candidato a partir de su email.
- Consultar la lista de posiciones abiertas desde una API externa.
- Mostrar un listado de posiciones disponibles.
- Permitir ingresar la URL de un repositorio de GitHub por cada posición.
- Enviar la postulación a la posición seleccionada.

## Funcionalidades Principales

### Obtener datos del candidato

Se realiza una llamada a la API para obtener la información del candidato utilizando su email.
Los datos obtenidos son necesarios para poder enviar la postulación posteriormente.

### Listado de posiciones abiertas

La aplicación consulta la API para obtener las posiciones disponibles y las muestra en pantalla.

Cada posición incluye:

- Título del puesto
- Campo de input para ingresar la URL del repositorio de GitHub
- Botón Submit para enviar la postulación

### Envío de postulación

Al hacer click en Submit, se envía una solicitud a la API con los datos del candidato, la posición seleccionada y la URL del repositorio.

Se manejan:

- Estado de carga
- Errores de red
- Confirmación de envío exitoso

## Requisitos Técnicos

- React (cualquier versión)
- UI prolija y funcional
- Código limpio y bien estructurado (escalable)
- Manejo de errores adecuado
