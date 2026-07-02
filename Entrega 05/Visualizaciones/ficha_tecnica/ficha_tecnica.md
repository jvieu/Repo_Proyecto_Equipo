# Ficha técnica de la base de datos

## Nombre de la base

**base_datos_01.csv**

## Fuente de los datos

Los datos utilizados provienen de **Spotify Charts**, plataforma que publica rankings de canciones según país, fecha, posición en el ranking y cantidad de reproducciones.

Para esta entrega se trabajó con rankings de cuatro países latinoamericanos:

* Chile
* Argentina
* Colombia
* México

La base fue construida a partir de datos recolectados y trabajados durante las entregas anteriores del proyecto.

## Periodo de análisis

La muestra considera seis meses de rankings, entre:

```text
Noviembre de 2025 y abril de 2026
```

El trabajo no busca representar todo el consumo histórico de Spotify en Latinoamérica, sino observar una muestra acotada que permita comparar tendencias de circulación musical entre los países seleccionados.


## Unidad de análisis original

En la base original, la unidad de análisis correspondía a una canción dentro de un ranking nacional de Spotify Charts.

Cada fila representaba una canción posicionada en el chart de un país, en una fecha determinada, e incluía información como:

* país del ranking;
* fecha;
* posición en el ranking;
* nombre de la canción;
* artistas;
* nacionalidades de los artistas;
* streams.

## Unidad de análisis de la base final

Para la visualización principal, la base fue transformada.

La unidad de análisis de `base_datos_01.csv` corresponde al peso de una nacionalidad artística dentro de un país de escucha.

Es decir, cada fila resume cuánto representan los artistas de una determinada nacionalidad dentro del total de streams considerados para un país.

Por ejemplo, una fila puede indicar el peso relativo de artistas chilenos dentro del chart de Chile, o el peso de artistas puertorriqueños dentro del chart de Argentina.

## Variables de la base final

La base final contiene las siguientes variables:

| Variable               | Descripción                                                                                |
| ---------------------- | ------------------------------------------------------------------------------------------ |
| `pais_escucha`         | País al que corresponde el ranking de Spotify Charts.                                      |
| `nacionalidad_artista` | Nacionalidad o categoría de origen de los artistas presentes en las canciones del ranking. |
| `streams_total`        | Total de streams asignados a esa nacionalidad artística después del procesamiento.         |
| `artistas_distintos`   | Cantidad de artistas distintos asociados a esa nacionalidad dentro del país de escucha.    |
| `canciones_distintas`  | Cantidad de canciones distintas asociadas a esa nacionalidad dentro del país de escucha.   |
| `total_pais`           | Total de streams considerados para el país de escucha.                                     |
| `peso_relativo`        | Porcentaje que representa esa nacionalidad artística dentro del total del país de escucha. |

## Categorías utilizadas

Para la visualización, las nacionalidades fueron agrupadas en las siguientes categorías:

* Chile
* Argentina
* Colombia
* México
* Puerto Rico
* Otros

La categoría **Otros** agrupa nacionalidades que aparecen en los rankings, pero que no corresponden a las categorías principales definidas para esta visualización.

Puerto Rico fue considerado como categoría propia debido a su presencia relevante dentro de la circulación musical regional, especialmente en géneros urbanos.

## Procesamiento realizado

El procesamiento de la base tuvo como objetivo observar el peso relativo de distintas nacionalidades de artistas dentro de cada país de escucha.

El procedimiento general fue el siguiente:

1. Se trabajó con una base original de Spotify Charts que contenía información de país, fecha, ranking, canción, artistas, nacionalidades y streams.
2. Se identificaron los artistas participantes en cada canción.
3. Se asociaron las nacionalidades correspondientes a esos artistas.
4. En canciones con colaboraciones, los streams fueron fraccionados entre los artistas participantes.
5. Los streams fraccionados fueron agrupados por país de escucha y nacionalidad artística.
6. Se calculó el total de streams considerados para cada país.
7. Finalmente, se calculó el peso relativo de cada nacionalidad artística dentro de cada país de escucha.

## Criterio de streams fraccionados

Para evitar duplicar streams en canciones colaborativas, se aplicó un criterio de fraccionamiento.

El criterio utilizado fue el siguiente:

* Si una canción tiene un solo artista, ese artista recibe el 100% de los streams.
* Si una canción tiene dos artistas, cada artista recibe el 50% de los streams.
* Si una canción tiene tres artistas, cada artista recibe un tercio de los streams.
* Si una canción tiene más artistas, los streams se dividen proporcionalmente entre ellos.

Este procedimiento permite que una canción colaborativa no pese más que una canción interpretada por un solo artista dentro del cálculo final.

## Uso de la base en la visualización

La base `base_datos_01.csv` fue utilizada para construir la visualización principal de la webstory:

**¿De dónde viene la música que escuchamos?**

El gráfico compara el peso relativo de las nacionalidades de artistas dentro de los charts de Chile, Argentina, Colombia y México.

La visualización permite observar qué países tienen mayor presencia de artistas nacionales en sus propios rankings y cuáles presentan una escucha más mezclada con artistas de otros países latinoamericanos o internacionales.

## Lectura que permite la base

A partir de esta base es posible observar que la circulación musical latinoamericana está conectada, pero no distribuida de la misma manera en todos los países.

La base permite comparar, por ejemplo:

* el peso de artistas mexicanos dentro del chart de México;
* la presencia de artistas colombianos en Colombia;
* la mezcla de artistas locales y externos en Chile y Argentina;
* la circulación de Puerto Rico como categoría transversal dentro de la muestra.

De esta manera, la base ayuda a sostener la idea de que Latinoamérica comparte sonidos y tendencias, pero cada país construye una banda sonora propia.

## Limitaciones de la base

La base permite observar tendencias dentro de la muestra seleccionada, pero tiene algunas limitaciones:

* Solo considera cuatro países: Chile, Argentina, Colombia y México.
* Trabaja con un periodo acotado de seis meses.
* No representa la totalidad del consumo musical latinoamericano.
* La nacionalidad de artistas fue utilizada como una categoría principal de análisis, aunque algunos artistas pueden tener trayectorias, audiencias o escenas de circulación más amplias que un solo país.
* La categoría **Otros** agrupa distintas nacionalidades, por lo que no permite observar en detalle todos los países presentes en los rankings.
* La base permite analizar presencia y peso relativo en los charts, pero no explica por sí sola las razones culturales, comerciales o algorítmicas detrás de esos patrones.

Aun con estas limitaciones, la base permite comparar de manera clara el peso relativo de distintas escenas musicales dentro de los países analizados.

## Observación

La base `base_datos_01.csv` corresponde a una base procesada y resumida para fines de visualización. Su función principal es permitir una lectura comparativa del origen de la música escuchada en los rankings analizados y aportar evidencia para la hipótesis de la webstory.

