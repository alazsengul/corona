$(document).ready(function() {

    $.each(data, function(index, value) {

        $("#" + value["state"]).attr("fill", value["color"])

        if (value["state"] == "DC") {
            $("#circle60").attr("fill", value["color"])
        }

    });

    var color_change = {
        "#FFFFE8" : "#FEFFBB",
        "#FEFFBB" : "#FFFFE8",
        "#F9E49C" : "#FBE46F",
        "#FBE46F" : "#F9E49C",
        "#F5C665" : "#F6C343",
        "#F6C343" : "#F5C665",
        "#F09E46" : "#F09536",
        "#F09536" : "#F09E46",
        "#DD7733" : "#ED692C",
        "#ED692C" : "#DD7733",
        "#BD5522" : "#D04121",
        "#D04121" : "#BD5522",
        "#8D3C18" : "#9F2415",
        "#9F2415" : "#8D3C18"
    }

    $("path").hover(function(e) {

        $(this).attr("fill", color_change[$(this).attr("fill")])

    }, function(e) {

        $(this).attr("fill", color_change[$(this).attr("fill")])

    });

    $("circle").hover(function(e) {

        $(this).attr("fill", color_change[$(this).attr("fill")])

    }, function(e) {

        $(this).attr("fill", color_change[$(this).attr("fill")])

    });


    $("path, circle").not("#path67").hover(function(e) {

        $('#info-box').css('display','block');
        $('#info-box').html($(this).data('info'));

    });

    $("path, circle").mouseleave(function(e) {

        $('#info-box').css('display','none');

    });

    $(document).mousemove(function(e) {

        $('#info-box').css('top',e.pageY-$('#info-box').height()-30);
        $('#info-box').css('left',e.pageX-($('#info-box').width())/2);

    }).mouseover();

    var ios = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    if(ios) {
        $('a').on('click touchend', function() {

            var link = $(this).attr('href');
            window.open(link,'_blank');
            return false;

        });
    }

})
