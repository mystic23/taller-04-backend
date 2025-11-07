# taller-04-backend
Bueno, aquí se desarrolló el Taller 04. En este proyecto se integran los talleres anteriores y se organiza todo en rutas, controladores y servicios.

## Cómo me ejecuto
Primero instala las dependencias con:
    "npm install"

Luego inicia el servidor con:
    "npm run dev"

Después ejecuta el script para probar todos los endpoints automáticamente:
    "bash scripts/test-all.sh"
    

El servidor corre por defecto en:
    http://localhost:3000

Todas las rutas son tipo POST y los parámetros se envían por body en formato JSON. El script test-all.sh ya prueba todos los talleres (1, 2 y 3)
