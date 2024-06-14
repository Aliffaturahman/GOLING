FROM node:21-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN ["npx", "prisma", "generate"]

RUN ["npx", "prisma", "db", "push"]

RUN ["npm", "run", "seed"]

CMD ["npm", "run", "start"]