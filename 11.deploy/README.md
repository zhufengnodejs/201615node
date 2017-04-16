## 购买服务器

## 连接服务器
```
windows git-bash  mac terminal
```
```sh
ssh root@ip
ssh root@120.55.93.115
```
问我是否继续连接，选择yes
会提示你输入密码，输入密码
## 升级操作系统 
ubuntu 是一个linux操作系统 
apt-get 是ubuntu下的一个软件安装工具
类似于node npm

```
apt-get update
```
## 安装npm
```
apt-get install npm
```
## 安装n
n是在linux下安装 node
```
npm install n -g
```
## 安装node
```
n 7.5
```
## 安装git
```
apt-get install git
```
## 上传项目代码
```
git init 
git add -A
git commit -m"init"
git remote add origin https://github.com/zhufengnodejs/201615crawl.git
git push -u origin master

```
## 服务器下载代码
```
git clone https://github.com/zhufengnodejs/201615crawl.git
cd 201615crawl
npm install --registry=https://registry.npm.taobao.org
 export DEBUG=crawl:*
cd ..

```
## 安装mongodb
```
apt-get install mongodb
```
## 安装pm2
```
npm install pm2 -g

pm2 start server.js
```
## 安装nginx



