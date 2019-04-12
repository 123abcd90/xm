document.getElementById("reg")
.onclick=
function(){
    //2.小黄人四部曲 post
         //2.1创建小黄人
         var xhr=new XMLHttpRequest();
         //2.2绑定监听
         xhr.onreadystatechange=function(){
          if(xhr.readyState==4&&xhr.status==200){
            var result=xhr.responseText;
            var u=JSON.parse(result);
             console.log(u);
            if(u.code=="350"){
             window.location.href="http://127.0.0.1:3000/register_after.html";
            }
          }
         }
         //2.3打开连接
         xhr.open("post","/pro/register",true);
         //2.3.1修改请求头
         xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        
         var formdata="&phone="+phone.value;
         //2.4.2
         xhr.send(formdata);
    }
