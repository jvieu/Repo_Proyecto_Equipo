## Ficha técnica de la base de datos

### Fuente de los datos

Los datos utilizados en esta base provienen de Spotify Charts, específicamente de los rankings "Top Songs" semanales por país. Estos datos fueron obtenidos desde la plataforma oficial de Spotify Charts, que permite acceder a información pública y verificable sobre el consumo musical en distintos mercados.


### Metodología de construcción de la base

La base se construyó a partir de la recopilación de los rankings Top 50 de canciones en una misma semana para cuatro países de Latinoamérica, Chile, Argentina, México y Colombia. Se utilizó una misma fecha para todos los países con el fin de asegurar comparabilidad entre los datos.

Una vez descargados los archivos en formato CSV, se unificaron en una sola tabla, homologando nombres de columnas, formatos de fecha y escritura de variables. Luego se limpiaron los datos, eliminando duplicados, revisando celdas vacías y corrigiendo inconsistencias.

Para facilitar el análisis comparativo, se incorporó una columna de "artista_normalizado", donde se estandarizaron los nombres de los artistas. En esta columna se utilizó el nombre principal, corrigiendo diferencias en el uso de mayúsculas, colaboraciones y variaciones de escritura.


### Alcance de los datos

La base incluye información correspondiente a una semana específica de los charts musicales de Spotify en cuatro países de Latinoamérica. Esto permite analizar coincidencias entre rankings, presencia de artistas en distintos mercados y patrones de circulación musical en la región.

No busca representar el consumo musical en el tiempo, sino ofrecer un corte comparativo que permita observar dinámicas en un momento determinado.


### Características de los datos

La base está organizada en formato tabular e incluye variables categóricas y numéricas, como país, fecha, posición en el ranking, nombre de la canción y nombre del artista.

Se trata de datos comparables entre países, consistentes en su formato y adecuados para análisis descriptivo y visualización.


### Otras observaciones

Se trabajó con el Top 50 de cada país para enfocarse en las canciones de mayor relevancia en cada mercado, lo que facilita identificar coincidencias significativas sin incorporar ruido de posiciones menos representativas.

También se priorizó la consistencia en la estructura de los datos y en la estandarización de los nombres de artistas, con el objetivo de asegurar la calidad del análisis posterior.
