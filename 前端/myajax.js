function objStr(obj){
    var arr = [];
    for(var key in obj){
        arr.push(encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]));
    }
    return(arr.join("&"));
}


//封装ajax请求函数
function ajax(all) {
    var timer;
    //1.创建一个异步对象
    let xmlhttp = new XMLHttpRequest();
    if(all.type == "GET"){
        //2.设置请求方式和请求地址 method url async:ture(异步)flase(同步)
        xmlhttp.open(all.type, all.url+"?"+objStr(all.data), true);
        //3.发送请求
        xmlhttp.send();
    }
    else{
        xmlhttp.open(all.type, all.url, true);
        //发送参数放在open和send中间
        xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        //3.发送请求
        xmlhttp.send(objStr(all.data));
    }
    
    //4.监听状态变化
    xmlhttp.onreadystatechange = function(ev2) {
        //5.处理返回结果
        if(xmlhttp.readyState === 4){ //4代表请求已完成，且响应已就绪
            clearInterval(timer);
            if((xmlhttp.status>=200 && xmlhttp.status<300) || xmlhttp.status===304){
                all.success(xmlhttp);
            }else{
                all.error(xmlhttp);
            }                            
        }       
    }
    if(all.timeout){
        timer = setInterval(function(){
            xmlhttp.abort();
            console.log('time out!')
            clearInterval(timer);
        }, all.timeout)
    }
}