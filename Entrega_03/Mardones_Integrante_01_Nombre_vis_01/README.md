# Documentación individual — Visualización 01

## Visualización realizada

La visualización desarrollada corresponde a una matriz de presencia regional de artistas en los charts de Spotify de Argentina, Chile, Colombia y México durante seis meses. El objetivo fue observar qué artistas aparecen en más de un mercado y con qué intensidad se repiten en los países analizados.

La visualización busca responder una pregunta central del proyecto: qué artistas logran cruzar fronteras dentro de los charts latinoamericanos y qué patrones de circulación musical se pueden observar a partir de sus apariciones en distintos países.


## Base de datos utilizada

Para construir la visualización se utilizó una base de datos limpia elaborada a partir de rankings semanales de Spotify Charts. La base original considera una semana representativa por mes durante seis meses, en cuatro países: Argentina, Chile, Colombia y México.

Desde esa base general se procesó una base específica para la visualización, llamada **base_visualizacion_coincidencias_artistas.csv**.

Esta base resume la presencia de cada artista por país e incluye las siguientes variables principales: **artista**, **pais**, **apariciones**, **meses_presente** y **streams_total**.

De esta forma, la base permite observar cuántas veces aparece cada artista en los charts de cada país, en cuántos meses se mantiene presente y cuántos streams acumula dentro del período analizado.


## Proceso de preparación de los datos

El proceso comenzó con la carga de la base limpia en Google Colab mediante la librería Pandas. Luego se revisaron las columnas disponibles, la cantidad de filas y la estructura general de los datos.

Como la base original separaba los artistas en columnas individuales, desde **artist_01** hasta **artist_10**, fue necesario transformar esas columnas en una sola variable llamada **artista**. Este paso permitió pasar de una base ancha a una base larga, donde cada fila representa la presencia de un artista asociado a una canción, país y mes específico.

Posteriormente, se limpiaron los valores de la columna **artista**, eliminando espacios al inicio o al final de los nombres, valores vacíos, registros marcados como **NA** y casos que Python interpretaba como **nan**. Esta limpieza fue necesaria para evitar que nombres mal leídos o celdas vacías fueran contados como artistas reales.

Después de esa transformación, los datos fueron agrupados por **artista** y **pais**. A partir de ese cruce se calcularon tres indicadores: cantidad de apariciones, cantidad de meses en que el artista estuvo presente y streams acumulados. Finalmente, se seleccionaron los quince artistas con mayor cantidad de apariciones totales para construir una visualización clara y legible.


## Decisiones tomadas

Una de las principales decisiones fue trabajar con una matriz de puntos en lugar de un ranking tradicional de barras. Esta elección responde al objetivo periodístico del proyecto: no se buscaba únicamente identificar qué artista aparece más veces, sino observar cómo se distribuye su presencia entre distintos países.

Un gráfico de barras habría permitido ordenar artistas por cantidad de apariciones, pero no mostraría con la misma claridad si esa presencia se concentra en un solo mercado o si se reparte entre varios países. En cambio, la matriz permite comparar simultáneamente artistas y territorios, mostrando qué nombres tienen circulación regional y cuáles se concentran en mercados específicos.

También se decidió limitar la visualización a quince artistas principales. Esta selección permite mantener la lectura del gráfico clara y evitar una visualización sobrecargada, considerando que la base completa contiene una cantidad mayor de artistas. La decisión responde a un criterio editorial: priorizar los casos más visibles para facilitar la interpretación dentro de una futura webstory.

Otra decisión relevante fue usar el tamaño y la intensidad de los puntos para representar la cantidad de apariciones. Así, la visualización no solo muestra presencia o ausencia, sino también niveles de intensidad dentro de cada país.


## Preguntas que responde la visualización

La visualización permite responder preguntas como:

- ¿Qué artistas aparecen en más de un país durante el período analizado?
- ¿Qué artistas tienen una presencia más transversal en los charts latinoamericanos?
- ¿Qué artistas concentran su presencia en un mercado específico?
- ¿Qué diferencias se observan entre los países analizados?
- ¿Cómo se conecta Chile con los otros mercados musicales de la muestra?

Estas preguntas se relacionan directamente con la hipótesis del proyecto, ya que permiten observar si los charts latinoamericanos funcionan como espacios aislados o como parte de una red regional de circulación musical.


## Relación con la historia del proyecto

La visualización aporta a la historia general del proyecto porque permite observar la circulación musical más allá del ranking nacional. Al comparar artistas y países, el gráfico muestra que algunos nombres logran instalarse en más de un mercado, mientras otros aparecen con mayor fuerza en territorios específicos.

Esta lectura es relevante para el enfoque periodístico del trabajo, ya que permite pensar los charts como señales de conexión cultural. La música que aparece en los rankings no solo refleja preferencias locales, también muestra qué artistas, géneros y escenas logran circular entre países latinoamericanos.

En el caso de Chile, la visualización permite observar su relación con artistas presentes en otros mercados, así como posibles rasgos propios dentro del consumo musical regional. Esto contribuye a la pregunta central del proyecto sobre si Chile funciona principalmente como receptor de tendencias, amplificador de ciertos sonidos o mercado con patrones de escucha diferenciados.


## Herramientas utilizadas

Para el procesamiento de datos y la creación de la visualización se utilizó Google Colab. El trabajo se desarrolló con las librerías Pandas y Altair.

Pandas permitió cargar, limpiar, transformar y agrupar los datos. Altair fue utilizada para construir la visualización final en formato de matriz de puntos, exportada en HTML y JPG.

El script completo del proceso se encuentra en la carpeta **scripts/codigo_para_visualizar_1.ipynb**.


## Archivos generados

A partir del procesamiento realizado, se generaron los siguientes archivos:

- **base_visualizacion_coincidencias_artistas.csv**
- **visualizacion/vis_01.html**
- **visualizacion/vis_01.jpg**
- **visualizacion/cronica.md**
- **scripts/codigo_para_visualizar_1.ipynb**

Estos archivos permiten revisar tanto el resultado final como el proceso utilizado para construirlo.
Estos archivos permiten revisar tanto el resultado final como el proceso utilizado para construirlo.
