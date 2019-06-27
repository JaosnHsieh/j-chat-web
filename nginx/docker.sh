#! /bin/sh
docker stop my-nginx
docker rm -f my-nginx
docker run -d --name my-nginx \
-v $(pwd)/nginx.conf:/etc/nginx/nginx.conf:ro -d \
-p 80:80 \
nginx:1.17.0

docker logs -f my-nginx
echo "nginx docker is listening to 80"

