var ul = $("#blogul");
function renderTime(date) {
    var dateee = new Date(date).toJSON();
    return new Date(+new Date(dateee)).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '') 
  }

function setBlogid(node){
    var papa = node.parentNode; 
    blog_id = papa.getAttribute("id");
    localStorage.blog_id = blog_id;
}

$.ajax({
    url:"http://localhost:8080/getallblogs",
    type:"get",
    async: false,
    success: function(data){
        // console.log(data);
        var infors = data;
        for(var i=0;i<infors.length;i++){
            var randompic = Math.floor(Math.random()*10);
            var picpath = "assets/images/blog" + randompic + ".jpg";
    
            //img
            var $img = $("<img></img>");
            $img.attr({
                "alt" : "Blog Desc",
                "src" : picpath
            });
            var $span = $("<span></span>");
            $span.text(infors[i]["blog_type"]);
            var $divimg = $("<div></div>");
            $divimg.attr("class", "blogList-img");
            $divimg.append($img);
            $divimg.append($span);
    
            //desc
            var $h4 = $("<h4></h4>");
            $h4.text(renderTime(infors[i]["blog_time"]));
            var $h3 = $("<h3></h3>");
            $h3.text(infors[i]["blog_title"]);
            var $divdesc = $("<div></div>");
            $divdesc.attr("class", "blogList-desc");
            $divdesc.append($h4);
            $divdesc.append($h3);
    
    
            var $a = $("<a></a>");
            $a.attr({
                "href":"writeblog/index/blog-details.html",
                "class":"blogList wow fadeInUp",
                "onclick":"setBlogid(this)"
            })
            $a.append($divimg);
            $a.append($divdesc);
    
    
            var $li = $("<li></li>");
            $li.attr({
                "class":"list-item",
                "data-groups":"all "+infors[i]["blog_type"],
                "id" : infors[i]["blog_id"]
            })
            $li.append($a);
    
            ul.append($li);
        }      
    }
})    