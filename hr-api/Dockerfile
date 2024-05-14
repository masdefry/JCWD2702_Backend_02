# Base Image: Where our app will running 
FROM node:latest

# Working Directory: Where our app will be placed
WORKDIR /app 

# Copy "package.json" into Working Directory
COPY package.json . 

# Install Dependencies
RUN npm install

# Copy all file(s) into Working Directory
COPY . .

# Prisma Generate
RUN npx prisma generate

# Port in index.ts
EXPOSE 5002

CMD ["npm", "run", "dev"]