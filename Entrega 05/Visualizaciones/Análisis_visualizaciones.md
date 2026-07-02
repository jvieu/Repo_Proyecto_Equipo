# Análisis de visualizaciones

## Visualización principal

La visualización principal de la webstory se titula:

**¿De dónde viene la música que escuchamos?**

Esta visualización muestra el peso relativo de las nacionalidades de artistas dentro de los rankings de Spotify Charts analizados para cuatro países latinoamericanos: Chile, Argentina, Colombia y México.

El objetivo del gráfico es observar si los países escuchan principalmente música producida por artistas nacionales o si sus rankings están más mezclados con artistas de otros países de la región o del mercado internacional.

## Dimensión que comunica

La visualización trabaja con dos dimensiones principales:

1. **País de escucha:** corresponde al país donde se registra el ranking de Spotify Charts. En este caso, Chile, Argentina, Colombia y México.

2. **Nacionalidad del artista:** corresponde al origen nacional de los artistas presentes en las canciones del ranking.

A partir de estas dimensiones, el gráfico permite comparar el peso relativo de las siguientes categorías:

* Chile
* Argentina
* Colombia
* México
* Puerto Rico
* Otros

La categoría “Otros” agrupa nacionalidades que aparecen en los rankings, pero que no corresponden a las categorías principales definidas para esta visualización.

## Mensaje principal

El mensaje central de la visualización es que la música circula por Latinoamérica, pero no lo hace de manera uniforme.

El gráfico muestra que algunos países tienen una presencia nacional muy fuerte dentro de sus propios charts, mientras otros presentan una escucha más repartida entre artistas locales, regionales e internacionales.

En la muestra analizada, México destaca por el peso de artistas mexicanos dentro de su propio ranking. Colombia también muestra una escena local fuerte. En cambio, Chile y Argentina presentan una escucha más mezclada, donde conviven artistas nacionales con figuras de otros países latinoamericanos.

Puerto Rico aparece como una presencia transversal dentro de la muestra, especialmente por la circulación regional del reggaetón y otros géneros urbanos.

## Relación con la historia

La visualización se ubica en la webstory después de la introducción del tema y de la explicación de la muestra. Su función es abrir la primera lectura de datos del reportaje.

Hasta ese punto, la historia plantea una pregunta: **¿Latinoamérica escucha la misma música o cada país construye su propia banda sonora?**

El gráfico permite comenzar a responder esa pregunta mostrando que no existe una sola forma de escuchar música en la región. Aunque las plataformas digitales conectan a los países bajo un mismo sistema de rankings, los datos muestran diferencias claras entre los mercados analizados.

Por eso, la visualización no funciona solo como apoyo visual, sino como una pieza central de la historia. Permite pasar de una impresión general, la idea de que todos escuchamos lo mismo,  a una lectura más precisa sobre cómo se distribuye la presencia de distintas escenas musicales en cada país.

## Decisión del tipo de gráfico

Se eligió un gráfico de barras horizontales apiladas al 100% porque permite comparar de manera clara la composición interna de cada país.

Este tipo de gráfico es útil porque:

* muestra proporciones, no solo cantidades absolutas;
* permite comparar países entre sí;
* hace visible el peso relativo de cada nacionalidad artística;
* ayuda a identificar rápidamente qué países tienen mayor presencia local;
* permite ver qué categorías circulan de manera transversal.

El uso de porcentajes facilita la comparación entre países, aunque los volúmenes totales de streams sean distintos. De esta manera, el foco está puesto en la composición de cada chart y no solo en el tamaño de cada mercado.

## Procesamiento de los datos

Para construir la visualización se trabajó con una base de Spotify Charts que incluye rankings de Chile, Argentina, Colombia y México entre noviembre de 2025 y abril de 2026.

La base original contenía información sobre país, fecha, posición en el ranking, nombre de la canción, artistas, nacionalidades de los artistas y streams.

Como muchas canciones tienen colaboraciones entre dos o más artistas, se decidió fraccionar los streams entre los artistas participantes. Esto se hizo para evitar duplicar el peso de una canción colaborativa.

Por ejemplo, si una canción tiene dos artistas, cada artista recibe el 50% de los streams de esa canción. Si tiene tres artistas, cada uno recibe un tercio. Luego, esos streams fraccionados se agrupan según la nacionalidad de cada artista.

Después de ese procesamiento, se calculó el peso relativo de cada nacionalidad artística dentro de cada país de escucha.

## Lectura de hallazgos

A partir de la visualización se observan algunos hallazgos relevantes:

* **México** aparece como el país con mayor peso de artistas nacionales dentro de su propio ranking.
* **Colombia** también presenta una presencia local fuerte, aunque con circulación de artistas de otros países.
* **Chile** muestra una escucha más combinada, donde la música local convive con artistas latinoamericanos e internacionales.
* **Argentina** también presenta una distribución más repartida entre artistas nacionales y externos.
* **Puerto Rico** funciona como una categoría relevante porque aparece en distintos países de la muestra, mostrando una circulación regional fuerte.

Estos hallazgos permiten sostener la idea de que Latinoamérica comparte tendencias musicales, pero no escucha de manera idéntica.

## Aporte a la hipótesis

La visualización ayuda a comprobar y ajustar la hipótesis del proyecto.

La hipótesis inicial planteaba que los charts de Spotify podían mostrar una circulación musical compartida entre países latinoamericanos. Sin embargo, al analizar el peso de las nacionalidades artísticas, la hipótesis evolucionó hacia una lectura más compleja.

Los datos muestran que la región está conectada por artistas, géneros y tendencias, pero esa conexión no se distribuye igual en todos los países. Algunos mercados mantienen una presencia nacional más fuerte, mientras otros se relacionan más intensamente con escenas externas.

Por eso, la visualización apoya la hipótesis final: **los charts de Spotify en Latinoamérica muestran una circulación musical conectada, pero desigual**.
