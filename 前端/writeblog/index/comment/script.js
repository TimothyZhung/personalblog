var pubbtn = $('#publishbtn');

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

pubbtn.click(function() {
    var text = $('#commenttext').val();
    console.log(text);

    var myDate = new Date();
    var time = myDate.toLocaleString('chinese', { hour12: false });
    
    time = time.replace('/', '-');
    time = time.replace('/', '-');
    var reg =/[\u4e00-\u9fa5]/g;
    time = time.replace(reg, "");

    console.log(time);
    $.ajax({
        url:"http://localhost:8080/addcomments",
        type:"POST",
        data:{"blog_id": localStorage["blog_id"], "user_id":localStorage["id"],"comment_time":time,"comment_content":text},
        async: true,
        success: function(data) {
            if(data == 1 ){
                var randompic = Math.floor(Math.random()*10);
                var picpath = "avatar/" + randompic + ".jpg";
            
                //name
                var $h6 = $("<h6></h6>");
                $h6.attr("class", "comment-name");
                $h6.text(getemail(localStorage["id"]));
            
                //time
                var $span = $("<span></span>");
                $span.text(time);
            
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
                $divcontent.text(text);
            
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
                $('#commenttext').val('');
            }
        }
    })
});