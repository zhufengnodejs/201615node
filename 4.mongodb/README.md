## 为什么要学mongodb 
1. 基本语法就是JS语法  `var name = 'zfpx';`
2. 存储结构是JSON
3. 分布式架构可以存放任意数量的数据
4. 高性能支持高并发 mongodb 16000 mysql 1200
mongodb 是容易丢数据
mysql 是非常安全的 

## 启动数据库
```
mongod --dbpath=E:\mongodata
```
> dbpath后面的路径一定是要事先存在好的


## 关闭数据库
window同学 服务器黑窗口要一直开着
mac 同学 执行完`sudo mongod &` 之后可以关闭窗口，服务也不会停止

如果要关闭数据库，最优雅的方式是用命令
```sh
use admin
db.shutdownServer();
```

## mongoose
对象模型工具 ORM
把对数据库的操作映射为对象的对象
```
let user = {id:1,name:'zfpx1'};
user.save();
```

