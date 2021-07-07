// console.log(localStorage["blog_id"]);
function renderTime(date) {
    var dateee = new Date(date).toJSON();
    return new Date(+new Date(dateee)).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '') 
  }

function getemail(id){
    var email;
    $.ajax({url:'http://localhost:8080/getemail',
            data: {"user_id":id},
            async: false,
            success: function(data){
                email = data;
            }
        });
        return email;
    }

$(function() {
    var testEditormdView;               
    $.ajax({
        url:"http://localhost:8080/getblog",
        type:"POST",
        data:{"blog_id": localStorage["blog_id"], "user_id":localStorage["id"]},
        async: false,
        success: function(data) {
            // console.log(data);
            testEditormdView = editormd.markdownToHTML("test-editormd-view", {
                markdown        : data["blog_content"] ,//+ "\r\n" + $("#append-test").text(),
                //htmlDecode      : true,       // 开启 HTML 标签解析，为了安全性，默认不开启
                htmlDecode      : "style,script,iframe",  // you can filter tags decode
                //toc             : false,
                tocm            : true,    // Using [TOCM]
                //tocContainer    : "#custom-toc-container", // 自定义 ToC 容器层
                //gfm             : false,
                //tocDropdown     : true,
                // markdownSourceCode : true, // 是否保留 Markdown 源码，即是否删除保存源码的 Textarea 标签
                emoji           : true,
                taskList        : true,
                tex             : true,  // 默认不解析
                flowChart       : true,  // 默认不解析
                sequenceDiagram : true,  // 默认不解析
            });
            $('#title').text(data["blog_title"]);
            $('#time').text(renderTime(data["blog_time"]));
            $('#type').text(data["blog_type"]);
            $('#bloglikes').text(data["blog_likes"]); //点赞人数
            if(data["ifliked"] == 1){
                $('a.like-button').toggleClass('liked');
            }
            localStorage.islike = data["ifliked"];
        }
    })

    $.ajax({
        url:"http://localhost:8080/getcomments",
        type:"POST",
        data:{"blog_id": localStorage["blog_id"], "user_id":localStorage["id"]},
        async: false,
        success: function(data) {
            // console.log(data);
            for(var i=0;i<data.length;i++){
                var randompic = Math.floor(Math.random()*10);
                var picpath = "avatar/" + randompic + ".jpg";
            
                //name
                var $h6 = $("<h6></h6>");
                $h6.attr("class", "comment-name");
                $h6.text(getemail(data[i]["user_id"]));
                
                //time
                var $span = $("<span></span>");
                $span.text(renderTime(data[i]["comment_time"]));
            
                //reply
                var $i1 =$("<i></i>");
                $i1.attr("class", "fa fa-reply");
                //like
                var $i2 = $("<i></i>");
                $i2.attr("class", "fa fa-heart");
            
                //head
                var $divhead = $("<div></div>");
                $divhead.attr("class", "comment-head");
                $divhead.append($h6);
                $divhead.append($span);
                $divhead.append($i1);
                $divhead.append($i2);
            
                //content
                var $divcontent = $("<div></div>");
                $divcontent.attr("class", "comment-content");
                $divcontent.text(data[i]["comment_content"]);
            
                //box --head --content
                var $divbox = $("<div></div>");
                $divbox.attr("class", "comment-box");
                $divbox.append($divhead);
                $divbox.append($divcontent);
            
                //img
                var $img = $("<img></img>");
                $img.attr("src", picpath);
            
                //avatar --img
                var $divavatar = $("<div></div>");
                $divavatar.attr("class", "comment-avatar")
                $divavatar.append($img);
            
                //main --avatar --box
                var $divmain = $("<div></div>");
                $divmain.attr("class", "comment-main-level");
                $divmain.append($divavatar);
                $divmain.append($divbox);
            
                //li --main
                var $li = $("<li></li>");
                $li.append($divmain);
            
                var ul = $("#comments-list");
            
                ul.append($li);
            }
        }
    })
});

function deleteblog(){
    $.post('http://localhost:8080/deleteblog',
    {'blog_id':localStorage["blog_id"]},
    function(data){
        if(data == 1){
            let pop = new Poppy({
                title: {
                  text: "删除成功！",
                  color: "#1abc9c"
                },
                position: "topRight",
              });
              pop.show();
              setInterval(function(){
                window.location.replace("../../blog.html");
              }, 1000);
        }
        else {alert('删除失败！')}
    })
}