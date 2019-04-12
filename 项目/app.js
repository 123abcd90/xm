const express=require('express');
const session = require("express-session");
const pro=require('./routes/pro.js');
// const cors=require("cors");
//引入body-parser中间件
const bodyParser=require('body-parser');

var index=require("./routes/index");
//创建web服务器
var app=express();
// app.use(cors({
//   origin:'http://localhost:3000',
//   credentials:true
// }))
app.listen(3000);
//托管静态资源到public目录


app.use(express.static('./myPro'));
//使用body-parser中间件来将post请求的数据解析为对象
//设置必须放在路由之前，只有设置好了，才能使用req.body
app.use(bodyParser.urlencoded({
  extended:false //不使用扩展的模块，而是使用nodejs提供的querystring模块解析为对象
}));
app.use(session({
  secret:'随机字符串',
  cookie:{maxAge:60*1000*30},//过期时间ms
  resave:false,
  saveUninitialized:true
}));//将服务器的session，放在req.session中
//使用路由器来管理路由

// //把商品路由器挂载到/product下
// //访问形式  /product/list
// app.use('/product',productRouter);


app.use('/pro',pro);
app.use("/index",index);
