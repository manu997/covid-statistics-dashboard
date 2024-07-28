## Prueba técnica frontend

### Para iniciar el proyecto en local

1. Instalar dependencias con `npm i`
2. Iniciar el servidor de desarrollo con `npm start`

> El archivo `environments.ts` contiene el campo `BASE_URL` el cual contiene la URI donde está ejecutándose el backend, por defecto es `http://localhost:3200`.

### Librerías que se han utilizado

 - `react-hook-form` para creación de formularios.
 - `zod` para validación de tipos y formularios.
 - `@tanstack/react-query` para manejo de peticiones a API.
 - `@tanstack/react-table` para renderizado de tablas.
 - `i18n-react` para el manejo de literales y traducciones.
 - `react-country-flag` para el renderizado de banderas de países.
 - `victory` para el renderizado de gráficas.

### Rutas
#### `/`
  > Desde aquí se puede navegar tanto al ejericio 1 como al ejercicio 2, mediante dos botones.

![Alt text](/images/Root.png "Root")

  #### `/exercice-1`
  > En esta pantalla se podrán ver las estadísticas del nombre que se introduzca en el campo `Nombre`. Estas estadísticas son su género, su procedencia y su edad, junto con la probabilidad de acierto de cada una de ellas.
  
![Alt text](/images/Exercice%201.png "Exercice 1")

  #### `/exercice-2`
  > En esta pantalla se muestran tres gráficas con la tendencia, de los ultimos dos años, de tres estadísticas relacionadas con el COVID-19. Estas estadísticas son número de muertes, número de casos y número de pruebas realizadas.

![Alt text](/images/Exercice%202.png "Exercice 2")