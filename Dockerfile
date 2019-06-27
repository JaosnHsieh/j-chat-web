FROM node:8.10.0-alpine
RUN mkdir /app
WORKDIR "/app"
COPY . .
RUN yarn global add pm2
RUN yarn
#https://stackoverflow.com/a/34600106/6414615
ARG REACT_APP_API_URL
ARG REACT_APP_WS_URL
ENV REACT_APP_API_URL "$REACT_APP_API_URL"
ENV REACT_APP_WS_URL "$REACT_APP_WS_URL"

RUN yarn run build
CMD ["pm2-runtime","start","server.js"]