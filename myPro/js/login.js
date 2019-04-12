document.getElementById("formi")
.onclick=
function(){
    var xhr=new XMLHttpRequest();
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4&&xhr.status==200){
            var result=xhr.responseText;
            //  alert(result);
            var u=JSON.parse(result);
             console.log(u);
            if(u.code=="200"){
//跳转到首页
window.location.href="http://127.0.0.1:3000/login_after_index2.html";
}else{
alert("登陆失败");
}
        }
    }
    xhr.open("post","/pro/login",true);
    var formdata="uname="+uname.value+"&upwd="+upwd.value;
    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    xhr.send(formdata);
}