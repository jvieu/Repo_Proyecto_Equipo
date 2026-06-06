# Análisis individual — Visualización 01

## Visualización respaldada

La visualización respaldada corresponde a una matriz de presencia regional de artistas en los charts de Spotify de Argentina, Chile, Colombia y México durante seis meses.

Esta visualización fue desarrollada en la Entrega 03 y se mantiene sin cambios para esta entrega, ya que sigue cumpliendo su función dentro de la propuesta narrativa de la webstory.

El objetivo de la visualización es observar qué artistas aparecen en más de un país y con qué intensidad se repiten dentro de los rankings analizados. A partir de esta comparación, es posible identificar artistas con circulación más transversal y otros con una presencia más concentrada en mercados específicos.

## Pregunta que responde

Esta visualización responde principalmente a la siguiente pregunta:

**¿Qué artistas logran cruzar fronteras dentro de los charts de Spotify en Latinoamérica?**

También permite abordar preguntas secundarias como:

- ¿Qué artistas aparecen en más de un país?
- ¿Qué países comparten ciertos nombres dentro de sus rankings?
- ¿Qué artistas tienen una presencia más localizada?
- ¿Cómo se conecta Chile con otros mercados musicales de la región?

## Datos utilizados

La visualización fue construida a partir de una base procesada llamada **base_datos_01.csv**. Esta base deriva de una base homologada más amplia, construida con rankings semanales de Spotify Charts.

La muestra considera cuatro países: Argentina, Chile, Colombia y México. Para cada país se trabajó con una semana representativa por mes durante seis meses.

La base utilizada para la visualización resume la presencia de artistas por país e incluye las siguientes variables:

- **artista**: nombre del artista identificado en los charts.
- **pais**: país donde aparece el artista.
- **apariciones**: cantidad de veces que el artista aparece en el país durante el período analizado.
- **meses_presente**: cantidad de meses en que el artista aparece al menos una vez.
- **streams_total**: suma de streams asociados a las canciones en que participa el artista.

## Hallazgo principal

La visualización permite observar que algunos artistas funcionan como puntos de conexión regional, ya que aparecen en más de un país dentro del período analizado. Estos casos muestran que ciertos nombres no se limitan a un solo mercado, sino que circulan entre distintos públicos latinoamericanos.

Al mismo tiempo, la matriz evidencia que no todos los artistas tienen el mismo tipo de circulación. Algunos presentan una presencia más transversal, mientras otros se concentran con mayor fuerza en un país específico. Esto permite distinguir entre artistas de alcance regional y artistas con mayor peso local o territorial.

## Relación con la webstory

Esta visualización aporta directamente a la webstory porque permite introducir una de las ideas centrales del proyecto: los charts de Spotify pueden leerse como una red de circulación musical y no solo como rankings nacionales.

Dentro del prototipo, esta visualización se ubica como una evidencia visual para mostrar que existen artistas que se repiten en distintos países. Su lectura ayuda a mostrar que la música en Latinoamérica no circula de manera aislada, sino que ciertos artistas conectan distintos mercados a través de plataformas digitales.

Además, la visualización permite abrir la discusión sobre el rol de Chile dentro del mapa musical regional. Al compararlo con Argentina, Colombia y México, se puede observar si Chile comparte artistas con otros mercados o si presenta patrones de escucha más propios.

## Aporte periodístico

El aporte periodístico de esta visualización está en transformar datos de rankings musicales en una lectura sobre circulación cultural. La matriz no busca mostrar solamente quién es más popular, sino cómo se distribuye la presencia de los artistas entre países.

Esta perspectiva permite construir una historia más amplia sobre consumo musical, plataformas digitales y conexiones latinoamericanas. La visualización funciona como una herramienta narrativa que ayuda al usuario a comprender patrones que no serían evidentes al mirar cada ranking por separado.

## Uso dentro del prototipo

En el wireframe de la webstory, esta visualización se relaciona con la sección **Los artistas que cruzan fronteras**. Su función es mostrar, de manera clara y visual, que algunos artistas aparecen en más de un país y que otros concentran su presencia en mercados específicos.

La visualización debe estar acompañada por una lectura guiada que explique cómo interpretarla. Por ejemplo, se puede indicar que cada punto representa la presencia de un artista en un país y que el tamaño del punto indica la cantidad de apariciones.

De esta forma, la visualización puede ser comprendida tanto por usuarios generales como por personas con mayor interés en datos o música.

## Archivos incluidos

La carpeta de visualización incluye los siguientes archivos:

- **vis_01.html**: versión interactiva de la visualización.
- **vis_01.jpg**: versión fija de la visualización.
- **codigo_visualizacion.ipynb**: notebook utilizado para procesar los datos y generar la visualización.
- **base_datos.csv**: base procesada utilizada directamente para construir la visualización.

Estos archivos corresponden al respaldo de la visualización individual y permiten revisar el proceso utilizado para construirla.
