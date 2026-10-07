FROM node:18-alpine

#directorio de trabajo
WORKDIR app

#copiar  fichero de dependencias
COPY package.json .

# copio la app
#COPY . .

#instalar las deps
RUN npm install

#ENVEnt para controlar el tiempo
ENV LAPSE=5000

#copia codigo hecho 
COPY app.js .

#ejecucion del comando despues de construir el contenedor
ENTRYPOINT ["node", "app"]