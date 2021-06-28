var box = $("#messboxtbody");

function renderTime(date) {
    var dateee = new Date(date).toJSON();
    return new Date(+new Date(dateee)).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '') 
  }

function deleteRow(node) {
    var grandpa = node.parentNode.parentNode.parentNode;
    var papa = node.parentNode.parentNode;
    
    message_id = papa.getAttribute("id");
    // alert(message_id);
    $.post('http://localhost:8080/deletemess', {"message_id":message_id}, function(data){
        if(data == "1"){
            grandpa.removeChild(papa);
            let pop = new Poppy({
                title: {
                  text: "删除成功！",
                  color: "#1abc9c"
                },
                position: "topLeft",
                closeAfter: 3000
              });
              pop.show();
        }
        else {
            let pop = new Poppy({
                title: {
                  text: "删除失败！",
                  color: "#e74c3c"
                },
                position: "topLeft",
                closeAfter: 3000
              });
              pop.show();
        }
    })
}

$.get('http://localhost:8080/getmess', function(data){
    // console.log(data);
    var mess = data
    console.log("mess: " + mess);
    for(var i = 1;i<=mess.length;i++){
        var $tr = $("<tr></tr>");
        $tr.attr("id", mess[i-1]["message_id"]);

        var $th = $("<th></th>");
        $th.attr("scope", "row");
        $th.text("" + i);
		
        var $tdname = $("<td></td>");
        var $pn = $("<p></p>");
        $pn.text(mess[i-1]["message_name"]);
        $tdname.append($pn);
		
        var $tdemail = $("<td></td>");
        $tdemail.text(mess[i-1]["message_email"]);

        var $p1 = $("<p></p>");
        $p1.text(renderTime(mess[i-1]["message_time"]));
        var $p2 = $("<p></p>");
        $p2.text(mess[i-1]["message_content"]);
        var $tdcontent = $("<td></td>");
        $tdcontent.append($p1);
        $tdcontent.append($p2);

        var $tddelete = $("<td></td>");
        var $a = $("<a></a>");
        $a.attr({
            "href":"javascript:void(0)",
            "style":"color: white;",
            "onclick":"deleteRow(this)"
        })
        $a.text("delete");
        $tddelete.append($a);

        $tr.append($th);
        $tr.append($tdname);
        $tr.append($tdemail);
        $tr.append($tdcontent);
        $tr.append($tddelete);

        box.append($tr);
    }
})

$('#messend').on('click', function() {
    var name = $('#c_name').val();
    var email = $('#c_email').val();
    var content = $('#c_message').val();
    var myDate = new Date();
    var time = myDate.toLocaleString('chinese', { hour12: false });
    time = time.replace('/', '-');
    time = time.replace('/', '-');
    var reg =/[\u4e00-\u9fa5]/g;
    time = time.replace(reg, "");

    var user_id = localStorage["id"];
    // console.log(name +email+content+time+user_id)

    $.post('http://localhost:8080/sendmess', 
    {
        "message_name":name,
        "message_email":email,
        "message_content":content,
        "message_time":time,
        "user_id":user_id
    },
    function(data){
        if(data == "1"){
            let pop = new Poppy({
                title: {
                  text: "发送成功！",
                  color: "#1abc9c"
                },
                position: "topLeft",
                closeAfter: 3000
              });
              pop.show();
        }
        else{
            let pop = new Poppy({
                title: {
                  text: "发送失败！",
                  color: "#e74c3c"
                },
                position: "topLeft",
                closeAfter: 3000
              });
              pop.show();
        }
    })

    $('#c_name').val('');
    $('#c_email').val('');
    $('#c_message').val('');
})