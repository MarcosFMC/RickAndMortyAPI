# Individual Project - Rick and Morty Page


## Objetivos del Proyecto

- Construir una App utlizando React, Redux, Java, Spring Framework.
- Aprender mejores prácticas.

## Enunciado

La idea general es crear una aplicación en la cual se puedan ver los personajes de la serie Rick and Morty junto con información relevante de las mismas utilizando la api externa [Rick and morty API](https://rickandmortyapi.com/) y a partir de ella poder, entre otras cosas:

- Buscar personajes
- Filtrarlos / Ordenarlos
- Agregar nuevos personajes

#### Tecnologías necesarias

- [ ] React
- [ ] Redux
- [ ] Spring Framework
- [ ] H2,Data JPA,Spring Web

## Frontend

Se debe desarrollar una aplicación de React/Redux que contenga las siguientes pantallas/rutas.

__Pagina inicial__: deben armar una landing page con

- [ ] Alguna imagen de fondo representativa al proyecto
- [ ] Botón para ingresar al home (`Ruta principal`)

__Ruta principal__: debe contener

- [ ] Input de búsqueda para encontrar personajes por nombre
- [ ] Área donde se verá el listado de personajes. Deberá mostrar su:
  - Imagen
  - Nombre
  - Genero
  - Tipo
- [ ] Botones/Opciones para filtrar por:
  - Genero
  - Estatus
  - Tipo
  - [ ] Paginado para ir buscando y mostrando los siguientes personajes, mostrando 20 personajes por página.

__Modal con detalles__: debe contener

- [ ] Nombre
- [ ] Estatus
- [ ] Genero
- [ ] Tipo
- [ ] Locacion
- [ ] Tipo
- [ ] Origen
- [ ] Imagen

__Ruta de creación de personaje__: debe contener

- [ ] Un formulario __controlado con JavaScript__ con los siguientes campos:
- [ ] Nombre
- [ ] Estatus
- [ ] Genero
- [ ] Tipo
- [ ] Locacion
- [ ] Tipo
- [ ] Origen
- [ ] Imagen
- [ ] Botón/Opción para crear una nuevo personaje

> Es requisito que el formulario de creación esté validado con JavaScript y no sólo con validaciones HTML. Pueden agregar las validaciones que consideren. Por ejemplo: Que el nombre del personaje no pueda contener números o símbolos.

## Base de datos

El modelo de la base de datos deberá tener las siguientes entidades (Aquellas propiedades marcadas con asterísco deben ser obligatorias):

- [ ] Personaje con las siguientes propiedades:
- [ ] Nombre
- [ ] Estatus
- [ ] Genero
- [ ] Tipo
- [ ] Locacion
- [ ] Tipo
- [ ] Origen
- [ ] Imagen

## Backend

Se debe desarrollar un servidor en Spring Framework con las siguientes rutas:

- [ ] __GET /character__:
  - Obtener un listado de los personajes
  - Debe devolver solo los datos necesarios para la ruta principal
- [ ] __GET /name/"..."__:
  - Obtener un listado de personajes que contengan la palabra ingresada como query parameter
- [ ] __POST /character__:
  - Recibe los datos recolectados desde el formulario controlado de la ruta de creación de personaje por body
  - Crea un personaje en la base de datos
