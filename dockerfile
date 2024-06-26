# Usa una imagen base oficial de Node.js
FROM node:22.2.0

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copia el package.json y el package-lock.json
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto de la aplicación
COPY . .

# Expone el puerto en el que la aplicación escuchará
EXPOSE 1000

# Comando para correr la aplicación
CMD ["node", "index.js"]
