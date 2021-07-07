console.log('user_id: '+ localStorage["id"])
console.log('blog_id: '+ localStorage["blog_id"])

$('a.like-button').on('click', function(e) {
  $(this).toggleClass('liked');
  $.post('http://localhost:8080/changelikes',
          {"blog_id":localStorage["blog_id"],"user_id":localStorage["id"]},
          function(data){
            if(data == 1){
              if(localStorage["islike"] == 0){
                var likes = parseInt($('#bloglikes').text());
                likes = likes+1;
                $('#bloglikes').text(''+likes);
                localStorage["islike"] = 1;
              }else{
                var likes = parseInt($('#bloglikes').text());
                likes = likes-1;
                $('#bloglikes').text(''+likes);
                localStorage["islike"] = 0;
              }            
            }
            else{alert("点赞失败！")}
          })
});