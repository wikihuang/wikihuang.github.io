$(document).ready(function () {
    init();
});
function init() {
    "use strict";
    removeImgWrap();
    toggleAllImg();
    scrollToP();
    createH3ByImg();
    toggleSingleImg();
    //imgPrefix();
    //insertRef();
}
//* insert ref div to certain position
function insertRef() {
    $('.box').html
    var ref_html = $('.box')[0].outerHTML;
    $('.box').remove();
    $('<hr/>' + ref_html + '<hr/>').insertAfter($('#intro'));
    /*  $('.ref').html
     var ref_html = $('.ref')[0].outerHTML;
     $('.ref').remove();
     $('<hr/>'+ref_html+'<hr/>').insertAfter($('#intro'));*/
}
//* toggle all img expand
function toggleAllImg() {
    //##toggle img by key
    "use strict";
    $(document).on('keydown', function (e) {
//        var key = e.which;//-(189)//chrome
        var key = e.which;//-(173)//firefox
        if (e.altKey && key == 173) {
            $('img').toggle();
        }
    });
    //## toggle img by a
    var $toc = $('#markdown-toc');
    var h3 = "<hr><h3><a data-open_status='1' onclick='toggleImgByH3(this);return false' >收合全部圖片</a></h3>"
    $(h3).insertAfter($toc);
}
function toggleImgByH3(e) {
    var $this = $(e);
    var $img = $('img');
    var open_status = $this.data('open_status');
    if (open_status) {
        $this.data('open_status', 0);
        $this.text('展開全部圖片');
        $img.fadeOut();
        open_status_h3(0);
    } else {
        $this.data('open_status', 1);
        $this.text('收合全部圖片');
        $img.fadeIn();
        open_status_h3(1);
    }
//     $('h3.time a').trigger('click');
// $("h3.time a" )
//   .filter(function( index ) {
//       var i = $(this).data('open_status');
//     return $(this).data('open_status')==0
//   }).trigger('click')
}
function open_status_h3(open) {
    var text = (open == 1) ? '收合圖片' : '展開圖片';
    $("h3.time a")
        .each(function () {
            var $a = $(this);
            $a.data('open_status', open);
            $a.text(text);
        });
}
//* scroll to the <p>
function scrollToP() {
    "use strict";
    $('p').click(function () {
        var $this = $(this);
        var offset = $this.offset();
        $(document).scrollTop(offset.top);
    });
}
/**
 * //* h3 create by img.pic
 */
function createH3ByImg() {
    removeImgWrap();
    var $img = $('div.entry-content img');
    $img.each(function (i) {
        var $this = $(this);
        var src = $this.attr('src');
        var reg = /(-)(00|0\.)(.+)\.jpg/;
        var match = reg.exec(src);
        if (match !== null) {
            var time = match[2] + match[3];
            var $p = $this.prev('p');
            var h3 = '<h3 class="time">' + 'video time=>' + time + '<span><a>收合圖片</a></span>' + '</h3>'
            var $h3 = $(h3);
            $h3.find('a').data('open_status', 1);
            $h3.insertBefore($p);
        }
    })
}
/**
 * #remove img wrap <p>
 */
function removeImgWrap() {
    var demo_img = $('img.demo_img');
    var $img = $('div.entry-content img').not(demo_img);
    if ($img.parent().is("p")) {
        $img.unwrap();//todo unwrap
    }
}
//* toggle hide single img
function toggleSingleImg() {
    $('h3.time a').click(function (el) {
        var $this = $(this);
        //
        var open_status = $this.data('open_status');
        if (open_status) {
            $this.data('open_status', 0);
            $this.text('展開圖片')
        } else {
            $this.data('open_status', 1);
            $this.text('收合圖片');
        }
        /*$this.attr('open_staus', 1);
         var attr = $this.attr('open_staus');
         $('.open_all_example[date="' + date + '"] >a').text('收回例句');*/
        //
        var $parentTag = $this.parent().parent();
        var $img = $parentTag.nextAll("img:first");
        $img.toggle();
    });
}
//* img src prefix
function imgPrefix() {
    $('img').each(function (i, img) {
        var $img = $(img)
        var src = $img.attr('src');
        $img.attr("src", function (i, val) {
            return '../' + val;
        });
    })
}
