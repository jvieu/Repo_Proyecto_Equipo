# Análisis de visualizaciones

## Introducción

Las visualizaciones de esta webstory fueron diseñadas para acompañar la pregunta central del reportaje:

> ¿Latinoamérica escucha la misma música o cada país construye su propia banda sonora?

Cada gráfico cumple un rol específico dentro de la historia. En conjunto, permiten observar la circulación regional de artistas, la permanencia de ciertas canciones y el peso de las escenas nacionales dentro de los rankings de Spotify Charts.

## Visualización 1: ¿Quién pone la música?

### Descripción

Esta visualización muestra los cinco artistas con mayor presencia regional en los Spotify Charts de Chile, Argentina, Colombia y México durante la muestra analizada.

Cada barra representa el total de apariciones de un artista en los rankings y se divide por país. De esta manera, es posible observar no solo quiénes aparecen más, sino también en qué mercados tienen mayor presencia.

### Dimensiones utilizadas

- Artista
- País
- Número de apariciones en Spotify Charts
- Distribución de apariciones por país

### Mensaje principal

La visualización muestra que algunos artistas funcionan como conectores regionales. Bad Bunny, Beéle, Fuerza Regida, Ovy On The Drums y Blessd aparecen con fuerza en más de un país, lo que evidencia que existen nombres capaces de atravesar fronteras musicales dentro de Latinoamérica.

### Rol dentro de la historia

Este gráfico aparece en la primera parte del recorrido visual. Su función es abrir la pregunta sobre quiénes están presentes en los rankings latinoamericanos antes de revelar el origen de la música que escucha cada país.


## Visualización 2: En Repeat

### Descripción

Esta visualización muestra las canciones con mayor registro de semanas en Spotify Charts dentro de la muestra analizada.

El gráfico funciona como una lista tipo ranking, donde cada canción aparece acompañada de su artista, países donde fue observada y cantidad de semanas registradas.

### Dimensiones utilizadas

- Canción
- Artista
- Países donde aparece
- Semanas en chart (`weeks_on_chart`)

### Mensaje principal

La visualización permite observar que no todas las canciones tienen un recorrido breve o viral. Algunas canciones permanecen durante largos periodos en los rankings y se transforman en parte estable del paisaje musical de ciertos países.

### Rol dentro de la historia

Este gráfico introduce la idea de permanencia. Después de observar qué artistas circulan entre países, la webstory se pregunta qué canciones logran quedarse en los rankings y no solo aparecer de forma momentánea.

## Visualización 3: ¿De dónde viene la música que escuchamos?

### Descripción

Esta visualización muestra el peso relativo de las nacionalidades de los artistas dentro de los rankings de Chile, Argentina, Colombia y México.

Las barras apiladas permiten comparar cuánto espacio ocupan artistas nacionales, artistas de otros países latinoamericanos, Puerto Rico y la categoría “Otros” dentro de cada chart nacional.

### Dimensiones utilizadas

- País del chart
- Nacionalidad de los artistas
- Porcentaje relativo de presencia
- Categorías de origen musical

### Mensaje principal

El gráfico muestra que Latinoamérica comparte música, pero no escucha de manera idéntica. México y Colombia presentan una fuerte presencia de artistas nacionales, mientras que Chile y Argentina muestran una escucha más mezclada con artistas de distintas procedencias.

### Rol dentro de la historia

Esta es la visualización que responde con mayor claridad la pregunta principal del reportaje. Por eso fue ubicada hacia el final del recorrido, como una revelación visual después de haber explorado artistas, canciones y casos particulares.

## Criterios de diseño

Las visualizaciones fueron diseñadas para mantener coherencia con la identidad visual de la webstory. Se utilizó una estética inspirada en Spotify, con fondo oscuro, colores intensos y referencias al lenguaje de playlists, rankings y reproducción musical.

Los gráficos fueron integrados directamente dentro del recorrido narrativo mediante archivos HTML incrustados en `iframe`. Esto permitió mantener cada visualización como una unidad independiente, pero conectada visualmente con la webstory.

## Ficha técnica general

| Elemento | Descripción |
|---|---|
| Fuente de datos | Spotify Charts |
| Países analizados | Chile, Argentina, Colombia y México |
| Periodo | Noviembre 2025 – Abril 2026 |
| Tipo de datos | Rankings musicales, artistas, canciones, nacionalidades, semanas en chart |
| Herramientas utilizadas | Python, HTML, CSS y JavaScript |
| Formato de visualizaciones | HTML interactivo |
| Publicación | GitHub Pages |
