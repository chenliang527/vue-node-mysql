＃VUE节点-mysq
1 进入demo 文件进行 npm install  
  启动demo cd文件下  www 文件
  node www 启动


2 进入vuedemo 文件安装npm install
  启动 vue 项目
  npm run dev 
  
  
3  前端vue  后端node 搭建一个前后端分离简单宽框架搭建好了。重点解决跨域
在vue文件 config里面配置index 文件 

    proxyTable: {
        '/api': {
            target: 'http://127.0.0.1:3000', //后端服务地址 最好写为 本地地址
            changeOrigin: true,
            pathRewrite: {
                '^/api': ''
            }
        }
    },
    
4  数据库为 mysql 
   字段为 id自增，账号account,密码password,名字name 
   
   
5 一切ok 启动吧   
