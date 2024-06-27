# Usa una imagen base oficial de Node.js
FROM node:20.3.1

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copia el package.json y el package-lock.json
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto de la aplicación
COPY . .


# Definir los argumentos de construcción
ARG BASIC_AUTH_USERNAME
ARG BASIC_AUTH_PASSWORD

# Establecer las variables de entorno
ENV BASIC_AUTH_USERNAME=${BASIC_AUTH_USERNAME}
ENV BASIC_AUTH_PASSWORD=${BASIC_AUTH_PASSWORD}

# Expone el puerto en el que la aplicación escuchará
EXPOSE 1000

# Comando para correr la aplicación
CMD ["node", "index.js"]
