$('.toggle').on('click', function() {
  $('.container').stop().addClass('active');
});

$('.close').on('click', function() {
  $('.container').stop().removeClass('active');
});

$('#loginbtn').on('click', function() {
  var email = $('#ineamil').val();
  var pwd = $('#inpwd').val();
  // console.log(email);
  // console.log(pwd);
  $.post("http://localhost:8080/login", 
          {"email":email,"password":pwd},
          function(data){
            if(data == "error"){
              let pop = new Poppy({
                title: {
                  text: "密码错误！",
                  color: "#e74c3c"
                },
                position: "topRight",
                closeAfter: 5000
              });
              pop.show();
              // alert('密码错误！')
            }
            else if(data == "none"){
              let pop = new Poppy({
                title: {
                  text: "不存在此账号！",
                  color: "#e74c3c"
                },
                position: "topRight",
                closeAfter: 5000
              });
              pop.show();
            }
            else{
              if (window.localStorage) {   
                  //存储变量的值
                  localStorage.id = data;
                  let pop = new Poppy({
                    title: {
                      text: "登录成功！",
                      color: "#1abc9c"
                    },
                    position: "topRight",
                  });
                  pop.show();
                  setInterval(function(){
                    window.location.replace("../index.html");
                  }, 1000);
                  
                } else {
                    alert("NOT SUPPORT");
                }
            }
            console.log(localStorage["id"]);
        })
})

$('#regibtn').on('click', function() {
  var email = $('#upemail').val();
  var pwd1 = $('#uppwd1').val();
  var pwd2 = $('#uppwd2').val();
  console.log(email);
  console.log(pwd1);
  if(pwd1 != pwd2){alert("两次输入密码不一致！");}
  else {
    $.post("http://localhost:8080/register", 
    {"email":email,"password":pwd1},
    function(data){
      if(data == "1"){
        let pop = new Poppy({
          title: {
            text: "注册成功！",
            color: "#1abc9c"
          },
          position: "topRight",
          closeAfter: 3000
        });
        pop.show();
      }
      else {
        let pop = new Poppy({
          title: {
            text: data,
            color: "#e74c3c"
          },
          position: "topRight",
          closeAfter: 3000
        });
        pop.show();
      }
    })
  }
})
