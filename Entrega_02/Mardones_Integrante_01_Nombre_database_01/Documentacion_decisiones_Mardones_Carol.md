## Documentación del proceso de limpieza de datos

### Proceso de construcción y limpieza de la base de datos

Para construir la base de datos se trabajó con los rankings semanales "Top Songs" de Spotify Charts para cuatro países de Latinoamérica, Chile, Argentina, México y Colombia. Estas fuentes fueron seleccionadas por su carácter público, su consistencia metodológica y su pertinencia para analizar patrones de consumo musical en la región.

El primer paso consistió en descargar los archivos en formato CSV desde la plataforma oficial de Spotify Charts, asegurando que todos correspondieran a la misma semana. Esta decisión fue clave para garantizar la comparabilidad entre países y evitar sesgos derivados de diferencias temporales.

Una vez obtenidos los datos, se unificaron en una sola tabla en Excel, incorporando una columna de país para identificar el origen de cada registro. Posteriormente, se revisó la estructura de la base, estandarizando los nombres de las columnas y asegurando formatos consistentes, especialmente en variables como fecha y ranking.

El siguiente paso fue la limpieza de los datos. En esta etapa se eliminaron posibles duplicados, se verificó la ausencia de celdas vacías en variables clave y se revisó la consistencia de los valores. Una de las decisiones más relevantes fue la creación de la columna "artista_normalizado", que permitió estandarizar los nombres de los artistas.

Esta normalización se realizó debido a que los datos originales presentaban variaciones en el uso de mayúsculas, así como la inclusión de múltiples artistas en una misma entrada. Para resolver esto, se optó por utilizar el nombre del artista principal en un formato uniforme, lo que facilita la comparación entre países y evita duplicidades en el análisis.

Finalmente, se incorporó una columna de fuente para asegurar la trazabilidad de los datos, dejando explícito que toda la información proviene de Spotify Charts.


### Fuentes de datos utilizadas

La única fuente utilizada fue Spotify Charts, específicamente los rankings "Top Songs" semanales por país. Esta plataforma fue elegida por ofrecer datos públicos, actualizados y comparables entre distintos mercados.

Su uso permite trabajar con información verificable y replicable, lo que es fundamental para un proyecto de periodismo de datos.


### Herramientas utilizadas

Para la construcción y limpieza de la base de datos se utilizó Microsoft Excel. En esta herramienta se realizaron tareas como la unificación de tablas, la estandarización de formatos, la eliminación de duplicados y la revisión general de la consistencia de los datos.

También se utilizaron funciones básicas de ordenamiento y filtrado para validar la calidad de la base final.


### Preguntas que permite responder la base de datos

A partir de la base de datos construida, es posible responder diversas preguntas relacionadas con la circulación musical en Latinoamérica.

En primer lugar, se puede identificar qué artistas aparecen simultáneamente en los charts de distintos países, lo que permite observar patrones de coincidencia en el consumo musical.

En segundo lugar, se puede analizar qué países comparten una mayor cantidad de artistas, lo que permite inferir niveles de similitud entre mercados.

Finalmente, se puede evaluar cuántos artistas logran presencia en múltiples países, lo que aporta evidencia sobre la existencia de una circulación regional de la música.
