简单后端结合数据库增删，后端设置了可以跨域，前端可不用再配置proxy

数据返回格式：
失败：
    { code: -1, msg: '用户名或密码错误！' }
    {code:-1,msg:"注册失败，用户名已存在"}
成功：
    { code: 1, msg: '登录成功',token:token}




AIP文档：
    api：http://127.0.0.1:3000   




请求路径:
    /login  
        参数：username（type：string，require：必填） password（type：string，require：必填）  
        请求方式：POST
    /regs     
        参数：username（type：string，require：必填） password（type：string，require：必填）  
        请求方式：POST


启动：
    npm install 
    node app.js