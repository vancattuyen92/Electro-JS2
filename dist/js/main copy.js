
/*
$(document).ready(function () {
    $("#starter").click(function (e) { 
        e.preventDefault();
        $('input[type=radio]').prop('checked');
        $("#mybutton").html("Download for Free");
        $("#icon").html("<i class='fas fa-download'></i>");
        //$("#icon").append($('i').addClass('fas fa-download'));
        //document.getElementById("icon").toggleClass('fa-star-o fa-star');
    });
    $("#liberty").click(function (e) { 
        e.preventDefault();  
        $("#mybutton").html("Buy Now ($10)");
        $("#icon").html("<i class='far fa-window-restore'></i>");
        //$("#icon").append($('i').addClass('far fa-window-restore'));
        
    });
});
*/

$(document).ready(function () {
    $('input[type="radio"]').click(function (e) { 
        if ($('#starter').is(':checked')) {
            $("#mybutton").html("Download for Free");
            $("#icon").html("<i class='fas fa-download'></i>");
        }
        if ($('#liberty').is(':checked')) {
            $("#mybutton").html("Buy Now ($10)");
            $("#icon").html("<i class='far fa-window-restore'></i>");
        }
    });
});

