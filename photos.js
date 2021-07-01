var picjson;
var picjson2;

$.ajax({
    url: 'photos.json',
    type: "GET",
    async: false,
    success: function(data){
        console.log(data);
        picjson = data;

        var len = picjson['all'].length;

        for(var i=0;i<len;i++) {
            path = picjson['all'][i]['path'];
            type = picjson['all'][i]['type'];
            des = picjson['all'][i]['description'];
            var $img = $("<img></img>");
            $img.attr("src",path);
            var $figcap = $("<figcaption></figcaption>");
            var $a = $("<a></a>");
            $a.attr({
                "href" : path,
                "class" : "simple-ajax-popup"
            });
            $figcap.append($a);

            var $div = $("<div></div>");
            $div.attr("class", "caption-inner");

            var $h3 = $("<h3></h3>");
            $h3.attr("class", "portfolio-item-title");
            $h3.text(des);

            var $div2 = $("<div></div>");
            $div2.attr("class", "portfolio-item-desc");
            $div2.text(type);

            $div.append($h3);
            $div.append($div2);
            $figcap.append($div);

            var $fig = $("<figure></figure>");
            $fig.append($img);
            $fig.append($figcap);
            var $li = $("<li></li>");
            $li.attr({
                "class" : "list-item",
                "data-groups" : "all "+type
            })
            $li.append($fig);
            $('#photocontainer').append($li);
        }
    }
})

$.ajax({
    url: "http://localhost:8080/getphotos",
    type: "GET",
   // async: false,
    success: function(data){
        console.log(data);
        picjson2 = data;

        var len = picjson2['all'].length;

        for(var i=0;i<len;i++) {
            path = picjson2['all'][i]['photo_path'];
            type = picjson2['all'][i]['photo_type'];
            des = picjson2['all'][i]['photo_description'];
            var $img = $("<img></img>");
            $img.attr("src",path);
            var $figcap = $("<figcaption></figcaption>");
            var $a = $("<a></a>");
            $a.attr({
                "href" : path,
                "class" : "simple-ajax-popup"
            });
            $figcap.append($a);

            var $div = $("<div></div>");
            $div.attr("class", "caption-inner");

            var $h3 = $("<h3></h3>");
            $h3.attr("class", "portfolio-item-title");
            $h3.text(des);

            var $div2 = $("<div></div>");
            $div2.attr("class", "portfolio-item-desc");
            $div2.text(type);

            $div.append($h3);
            $div.append($div2);
            $figcap.append($div);

            var $fig = $("<figure></figure>");
            $fig.append($img);
            $fig.append($figcap);
            var $li = $("<li></li>");
            $li.attr({
                "class" : "list-item",
                "data-groups" : "all "+type
            })
            $li.append($fig);
            $('#photocontainer').append($li);
        }
    }
})