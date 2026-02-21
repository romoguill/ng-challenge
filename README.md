# Full Stack Developer Challenge - Nimble Gravity

Challenge para la posición de Full Stack Developer en Nimble Gravity.

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
