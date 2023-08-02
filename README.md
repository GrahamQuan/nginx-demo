# (2023) Nginx + node + express + docker

### 1) install Nignx on mac

`brew install nginx`



### 2) edit `nginx.conf` file

```shell
# show the config file path
# /opt/homebrew/etc/nginx/nginx.conf
nginx -t

# path = /opt/homebrew/etc/nginx
cd <path>

# open with VScode
code .
```



### 3) replace with this `nginx.conf` file

change your root path in `nginx.conf`



### 4) Nginx load balance (using docker)

```shell
# make sure using the right working dir
cd ./server

# build image
docker build -d -t my-app .

# run dockers
docker run -d -p 1111:7777 my-app
docker run -d -p 2222:7777 my-app
docker run -d -p 3333:7777 my-app
docker run -d -p 4444:7777 my-app
```



### 5) open url: localhost:8080, try refesh couple times



### 6) print the logs

```
cat /opt/homebrew/var/run/nginx/access.log
```

It will look like this

```
 to: 127.0.0.1:1111 {GET / HTTP/1.1} upstream_response_time 0.023 request_time 0.023
 to: 127.0.0.1:2222 {GET / HTTP/1.1} upstream_response_time 0.012 request_time 0.011
 to: 127.0.0.1:3333 {GET / HTTP/1.1} upstream_response_time 0.012 request_time 0.012
 to: 127.0.0.1:4444 {GET / HTTP/1.1} upstream_response_time 0.016 request_time 0.017
 to: 127.0.0.1:1111 {GET / HTTP/1.1} upstream_response_time 0.010 request_time 0.010
 to: 127.0.0.1:2222 {GET / HTTP/1.1} upstream_response_time 0.007 request_time 0.006
```

