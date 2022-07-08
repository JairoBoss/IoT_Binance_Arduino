# IoT_Binance_Arduino

Este proyecto consta de 3 partes fundamentales [Api](https://github.com/JairoBoss/IoT_Binance_Arduino/tree/main/back), [Aplicación móvil](https://github.com/JairoBoss/IoT_Binance_Arduino/tree/main/app) y la placa de programación
[Ttgo Lora32](https://github.com/JairoBoss/IoT_Binance_Arduino/blob/main/arduino/lora/main.ino)

### Instalación y ejecución 🔧
#### API
Crear un archivo .env en el directorio raiz de back con las siguientes variables
- PORT
- BINANCE_APIKEY
- BINANCE_APISECRET
- MONGO_CLUSTER
```bash
npm i
npm start
```
#### Aplicación móvil
Cambiar la URL de api en el siguiente archivo:

./app/src/services/HttpClient.ts
```typescript
baseURL: "url_api"
```
Después instalar las dependencias y ejecutarlo
```bash
npm i
npm start
```
#### Placa de programación [Ttgo Lora32]
Cambiar las variables *network* y *password* por las de tu red, cambiar las variable *http.begin("url_api");* por la de la de tu API.

## Imágenes
### Ttgo Lora32
![image](https://user-images.githubusercontent.com/61020858/177919750-9d9e7d66-f670-48f4-b8ce-7009e39bc2d2.png)
![image](https://user-images.githubusercontent.com/61020858/177919569-d6868af9-4168-47dc-bfb2-262efdb4a0aa.png)
![image](https://user-images.githubusercontent.com/61020858/177919657-ef019377-251d-45d1-9eb6-2fbdaf1f8aaa.png)
![image](https://user-images.githubusercontent.com/61020858/177919724-1ed23421-0aca-4131-9184-a864adb35e60.png)

### Aplicación movil
![image](https://user-images.githubusercontent.com/61020858/177919341-85283758-bb6f-4da9-8b00-0d0bdaf59241.png)

![image](https://user-images.githubusercontent.com/61020858/177919418-81c5975b-044c-4630-a9b7-648e8630d5cc.png)

![image](https://user-images.githubusercontent.com/61020858/177919479-4e3b424f-517d-48c2-a627-6ffd54e08163.png)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)