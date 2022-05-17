$(document).ready(function(){
    setTimeout(function() {
        $.getJSON('./js/data.json', function(data) {
            $.each(data.placedescriptions, function(_, e) {
                $('body').append('<div class="city-desc-overlay blur" id="' + e.city + '"Read More</div>' + e.description);
            });
    }, 400);
    });

    $("#expansion").click(function () {
        $(".city-desc-overlay").css('filter', 'blur(0.5px)');
        $(".city-desc-overlay").css('background', 'rgba(25, 25, 25, 0.876943)');
        $(".city-desc-overlay").css('transform', 'translateY(-2px)');
        $(".city-desc-overlay").css('height', 'auto');
        $(".city-desc-overlay").css('box-shadow', '0px 0px 15px rgba(255, 255, 255, 0.1)');
    })
});