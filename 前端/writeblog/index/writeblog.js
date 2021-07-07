$.ajax({
    url:"http://localhost:8080/getblog",
    type:"POST",
    data:{"blog_id": 1,"user_id":localStorage["id"]},
    async: false,
    success: function(data){
        console.log(data);
        $("#editormd").val(data["blog_content"]);
        $('#title').val(data["blog_title"]);
        $('#typeselect').val(data["blog_type"]);
    }
})


$('#uploadbtn').click(function() {
    //获取第二个textarea的值，即生成的HTML代码   实际开发中此值存入后台数据库
    var content=$("#editormd").val();
    var title=$('#title').val();
    var type = $('#typeselect').val();

    var myDate = new Date();
    var time = myDate.toLocaleString('chinese', { hour12: false });
    time = time.replace('/', '-');
    time = time.replace('/', '-');
    var reg =/[\u4e00-\u9fa5]/g;
    time = time.replace(reg, "");

    console.log(content + title + type + time);
    $.post('http://localhost:8080/upblog',
            {
                "title":title,
                "content":content,
                "type":type,
                "time":time
            },
            function(data){
                if(data == '1'){
                    let pop = new Poppy({
                        title: {
                          text: "上传成功！",
                          color: "#1abc9c"
                        },
                        position: "bottomRight",
                        closeAfter: 3000
                      });
                      pop.show();
                }else{
                    let pop = new Poppy({
                        title: {
                          text: "上传失败！",
                          color: "#e74c3c"
                        },
                        position: "bottomRight",
                        closeAfter: 3000
                      });
                      pop.show();
                }
            })
})

$('#savebtn').click(function() {
    var content=$("#editormd").val();
    var title=$('#title').val();
    var type = $('#typeselect').val();

    // console.log(content + title + type);
    $.post('http://localhost:8080/saveblog',
            {
                "title":title,
                "content":content,
                "type":type
            },
            function(data){
                if(data == '1'){
                    let pop = new Poppy({
                        title: {
                          text: "保存成功！",
                          color: "#1abc9c"
                        },
                        position: "bottomRight",
                        closeAfter: 3000
                      });
                      pop.show();
                }else{
                    let pop = new Poppy({
                        title: {
                          text: "保存失败！",
                          color: "#e74c3c"
                        },
                        position: "bottomRight",
                        closeAfter: 3000
                      });
                      pop.show();
                }
            })
})