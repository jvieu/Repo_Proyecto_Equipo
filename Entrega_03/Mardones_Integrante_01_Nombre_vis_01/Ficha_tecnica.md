# Ficha técnica — Base de visualización

## Nombre de la base

**base_visualizacion_coincidencias_artistas.csv**


## Fuente de los datos

La base fue construida a partir de datos públicos de **Spotify Charts**, específicamente de los rankings semanales **Top Songs** correspondientes a Argentina, Chile, Colombia y México.

Estos datos provienen de la base limpia individual utilizada para el proyecto, elaborada a partir de una semana representativa por mes durante seis meses.


## Metodología de construcción de la base

La base original contenía información de canciones presentes en los charts de Spotify, incluyendo país, fecha, mes de muestra, posición en el ranking, nombre de la canción, artistas, streams, peak rank, previous rank y semanas en chart.

Para construir la base utilizada en la visualización, primero se trabajó con las columnas de artistas separadas desde **artist_01** hasta **artist_10**. Estas columnas fueron transformadas en una sola variable llamada **artista**, permitiendo que cada fila representara la presencia individual de un artista dentro de una canción, país y mes.

Luego se eliminaron valores no válidos, como celdas vacías, registros marcados como **NA** y valores interpretados como **nan** por Python. También se limpiaron espacios al inicio o final de los nombres de artistas para evitar duplicaciones por errores de escritura.

Posteriormente, los datos fueron agrupados por **artista** y **pais**. A partir de esa agrupación se calcularon tres indicadores principales: cantidad de apariciones, cantidad de meses en que el artista estuvo presente y streams acumulados.

Finalmente, se seleccionaron los quince artistas con mayor cantidad de apariciones totales para construir una visualización clara y legible.


## Alcance de los datos

La base considera artistas presentes en los charts de Spotify de Argentina, Chile, Colombia y México durante seis meses. Para cada mes se utilizó una semana representativa, lo que permite observar patrones de circulación musical sin trabajar con la totalidad de semanas disponibles.

El alcance de esta base permite analizar presencia regional de artistas, coincidencias entre países y diferencias en la intensidad con que ciertos nombres aparecen en los mercados analizados.


## Características de los datos

La base está organizada en formato tabular y contiene variables categóricas y numéricas.

Las variables categóricas permiten identificar al artista y el país donde aparece. Las variables numéricas permiten medir la cantidad de apariciones, los meses de presencia y los streams acumulados.

Esta estructura permite construir una matriz de presencia regional, donde cada artista puede ser comparado entre países según su nivel de aparición en los charts.


## Variables incorporadas

| variable | descripción |
|---|---|
| artista | Nombre del artista identificado en las columnas originales artist_01 a artist_10. |
| pais | País del chart donde aparece el artista. |
| apariciones | Cantidad de veces que el artista aparece en el país dentro del período analizado. |
| meses_presente | Cantidad de meses en que el artista aparece al menos una vez en el chart de ese país. |
| streams_total | Suma de streams asociados a las canciones en que aparece el artista dentro del país analizado. |


## Observaciones sobre la base

La base fue construida específicamente para la visualización individual, por lo que no contiene todas las variables de la base original. Su objetivo es resumir la presencia de artistas por país y permitir una lectura comparativa de la circulación musical.

La selección de quince artistas responde a un criterio editorial y visual. La base original contiene más artistas, pero incluirlos a todos habría dificultado la lectura del gráfico. Por eso se priorizaron los nombres con mayor presencia total durante el período analizado.

La variable **streams_total** debe interpretarse como una medida aproximada de intensidad, ya que corresponde a la suma de streams de canciones en las que participa el artista. En canciones con múltiples intérpretes, los streams se asocian a cada artista participante, por lo que esta variable no representa necesariamente streams individuales exclusivos de cada artista.

La base permite responder preguntas sobre circulación regional, presencia sostenida y concentración territorial de artistas en los charts analizados.
