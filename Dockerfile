FROM node:18.15.0
COPY . /diary

WORKDIR /diary/client
RUN npm install

WORKDIR /diary/server
RUN npm install

WORKDIR /diary
RUN npm install
CMD npm run dev

EXPOSE 5173
EXPOSE 5000