(function(){
  //发送ajax请求
  //删除index.html结尾的<script src="js/ajax.js">
  $.ajax({
    url:"http://127.0.0.1:3000/index",
    type:"get",
    //data:,
    dataType:"json",//自动JSON.parse()
    success:function(result){
        console.log(result)
            var html="";
    for(var i=0;i<result.length;i++){
      var p=result[i];
      html+=` <a href="" class="bg_a">
             <table>
                <tr>
                    <td class="bg_t">
                        <span class="bg_s1">${p.title}</span><span class="bg_S1">${p.subtitle}</span>
                    </td>
                </tr>
                <tr> 
                    <td>
                        <h6 class="bg_s2">${p.hkfs}</h6></td>
                </tr>
                <tr> 
                    <td class="bg_T">
                        <span class="bg_s3">${p.xynlv}</span><span class="bg_S3">%</span></td>
                </tr>
                <tr>                
                    <td>
                        <span class="bg_s4">协议年利率</span></td>
                </tr>
                <tr> 
                    <td class="bg_I">
                         <img src="${p.pic}" width="" height="" border="0" alt=""><span class="bg_s5">${p.xmqx}</span></td>
                </tr>
                <tr>
                    <td>
                        <div id="" class="bg_s6">
                        </div>
                    </td>
                </tr>
                <tr>    
                    <td>
                        <p class="bg_s7">剩余可加入:${p.sykjr}</p></td>
                </tr>
                <tr> 
                    <td>
                        <span class="bg_s8">${p.hkz}</span></td>
                </tr>
               </table>
            </a>`
    }
      var div1=document.querySelectorAll(
      "body>div:nth-child(6)>.BG>a"
    )
    div1.innerHTML=html;
  }
   
  })//return Promise
    //  onreadystatechange中: 
    //           result <- 收到服务端的
    //  然后把result放入
    //              ↓
    //      open(result)
    //              ↓
//   .then(function(result){
//     console.log(result);  
})()