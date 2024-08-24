FROM node:18.20.2-buster-slim

RUN apt-get update && apt-get install -y git

WORKDIR /app

RUN git clone https://github.com/vlmnst/API.git .

RUN npm install

RUN npm run build

EXPOSE 3000

CMD ["npm","start"]