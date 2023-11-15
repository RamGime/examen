## Para iniciar el proyecto se debe seguir los siguientes pasos

### Crear las imagenes de los archivos
- db:
```
docker build -t db-imagen ./db
```
- front:
```
docker build -t ejs-imagen ./frontRami
```
- rest:
```
docker build -t rest-imagen ./rest
```
- soap:
```
docker build -t soap-imagen ./soap
```

### Levantar los servicios
- Ejecutar el siguiente comando para iniciar los servicios
```
docker stack deploy -c servicios.yml servicios
```

### Acceso a la aplicación
- Para acceder a la aplicacion entrar en: 
```
http://localhost:3000/
```