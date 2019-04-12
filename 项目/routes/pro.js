//引入连接池对象  ../ 上一级
const pool=require('../pool.js');
const express=require('express');
//路由器是express下的一个功能
//创建一个空的路由器
var router=express.Router();
//添加路由

//用户登录 post
router.post("/login",(req,res)=>{
	//获取用户名
	var $uname=req.body.uname;
	if(!$uname){
		res.send({code:401,msg:'uname required'});
		return;
	}
	//获取密码
	var $upwd=req.body.upwd;
	if(!$upwd){
		res.send({code:402,msg:'upwd required'});
		return;
	}
	var sql="select uid from atz_userr where uname=? and upwd=?";
	pool.query(sql,[$uname,$upwd],(err,result)=>{
		if(err){throw err;}
		console.log(result);
		if(result.length>0){
			res.send({code:200,msg:'login success'});
		
		}else{
			res.send({code:202,msg:'login error'});
		}
	});
});

router.post("/loginl",(req,res)=>{
	//获取电话
	var $phone=req.body.phone;
	if(!$phone){
		res.send({code:403,msg:'phone required'});
		return;
	}
	
	var sql="select uid from atz_userr where phone=?";
	pool.query(sql,[$phone],(err,result)=>{
		if(err){throw err;}
		console.log(result);
		if(result.length>0){
			res.send({code:200,msg:'login success'});
		
		}else{
			res.send({code:202,msg:'login error'});
		}
	});
});
//查询用户表
router.get('/list',(req,res)=>{
	var sql="select * from atz_userr";
	pool.query(sql,(err,result)=>{
		if(err) throw err;
		res.send(result);
	});
});

//根据uid删除用户
router.get("/deleteuser",(req,res)=>{
	//接收请求参数uid
	var $uid=req.query.uid;
	if(!$uid){
		res.send("uid不存在");
		return;
	}
	//数据库操作删除
	var sql="delete from atz_user where uid=?";
	pool.query(sql,[$uid],(err,result)=>{
		if(err) throw err;
		res.send("1");//1表示删除成功
	});
});
//用户检索的接口

router.get("/userquery",(req,res)=>{
	//获得uid
	var $uid=req.query.uid;
	if(!$uid){
		res.send("uid不存在");
		return;
	}
	//查询数据库
	var sql="select * from atz_user where uid=?";
	pool.query(sql,[$uid],(err,result)=>{
		if(result.length>0){
			res.send(result);
		}else{
			res.send("0");
		}
	});
});
//修改用户数据的接口
router.post('/updateuser',(req,res)=>{
	//接收uid
	var $uid=req.body.uid;
	if(!$uid){
		res.send("用户id不存在");
		return;
	}
	//接收uname
	var $uname=req.body.uname;
	if(!$uname){
		res.send("用户名称不存在");
		return;
	}
	//接收email
	var $email=req.body.email;
	if(!$email){
		res.send("电子邮箱不存在");
		return;
	}
	//接收phone
	var $phone=req.body.phone;
	if(!$phone){
		res.send("联系方式不存在");
		return;
	}
	//接收user_name
	var $user_name=req.body.user_name;
	if(!$user_name){
		res.send("真实姓名不存在");
		return;
	}
	//接收gender
	var $gender=req.body.gender;
	if(!$gender){
		res.send("用户性别不存在");
		return;
	}
	//更新数据库
	var sql="update atz_user set uname=?,email=?,phone=?,user_name=?,gender=? where uid=?";
	pool.query(sql,
	[$uname,$email,$phone,$user_name,$gender,$uid],
		(err,result)=>{
		if(err) throw err;
		res.send("1");
	});
});
//检查用户名
router.get("/checkUname",(req,res)=>{
	//获取uname
	var $uname=req.query.uname;
	if(!$uname){
		res.send("用户名不能为空");
		return;
	}
	//查询数据库
	var sql="select * from atz_user where uname=?";
	pool.query(sql,[$uname],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.send("0");
		}else{
			res.send("1");
		}
	});
});


//注册用户
router.post('/register',(req,res)=>{

	 //2接收uname
	// var $uname=req.body.uname;
	// if(!$uname){
	// 	res.send("用户名称不存在");
	// 	return;
	// }
	// //3接收email
	// var $email=req.body.email;
	// if(!$email){
	// 	res.send("电子邮箱不存在");
	// 	return;
	// }
	//4接收phone
	var $phone=req.body.phone;
	if(!$phone){
		res.send("联系方式不存在");
		return;
	}
	// //5接收user_name
	// var $user_name=req.body.user_name;
	// if(!$user_name){
	// 	res.send("真实姓名不存在");
	// 	return;
	// }
	// //6接收gender
	// var $gender=req.body.gender;
	// if(!$gender){
	// 	res.send("用户性别不存在");
	// 	return;
	// }
	// //7接收upwd
	// var $upwd=req.body.upwd;
	// if(!$upwd){
	// 	res.send("用户密码不存在");
	// 	return;
	// }


	//插入数据库
	// var sql="insert into atz_user values(null,?,?,?,?,null,?,?)";
	// pool.query(sql,
	// [$uname,$upwd,$email,$phone,$user_name,$gender],
	// 	(err,result)=>{
	// 	if(err) throw err;
	// 	res.send("注册成功");
	// });
	var sql="insert into atz_usery values(?)";
	 pool.query(sql,
	 [$phone],
		(err,result)=>{
	 	if(err) throw err;
	 	res.send("注册成功");
	 });
});


//导出路由器
module.exports=router;




