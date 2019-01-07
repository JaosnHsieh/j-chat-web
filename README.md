My fullstack demo bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

<!-- ## Table of Contents

- [Updating to New Releases](#updating-to-new-releases) -->

### !Important

This project and [chatapi](https://github.com/JaosnHsieh/chatapi/tree/develop) are in the development phrase.

### Backend Server

[j-chat-app](https://github.com/JaosnHsieh/j-chat-web)

### Start the Development Server

```
npm i
npm start
```

### Build dev image

`docker build -t j-chat-web:dev --target dev .`

### Run Development Server from container

`docker run --rm -it --init -v "${PWD}:/usr/src/app" j-chat-web:dev npm start`

### Run web app and api server with docker-compose

`git clone https://github.com/JaosnHsieh/j-chat-web.git`
`cd ./j-chat-web`
`docker build -t j-chat-web:dev --target dev .`
`git clone https://github.com/JaosnHsieh/chatapi.git`
`cd ./chatapi`
`docker build -t chatapi:dev --target dev .`

replace your local machine ip by

`vim ./.env`
`docker-compose up -d`
