var count;
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
    $('input[type=range]').on('input change', function(){
        $('#per_label').text("Size:" + this.value + "%");
    });
    $('#text').on('change paste keyup', function(){
        var words = $("#text").val().split(" ");
        count = words.length - 1;
        $('.plabel2').html('<i>Word Count : ' + count + '</i>');
    });
    $('#text').on('keyup', function() {
    var key = event.keyCode || event.charCode;
        if( key == 8 || key == 46 ){
            if($('#text').val() != "")
            {
                var words = $("#text").val().split(" ");
                count = words.length;
                $('.plabel2').html('<i>Word Count : ' + count + '</i>');
            }
            else
            {
                $('.plabel2').html('<i>Word Count : 0000</i>');
            }
        }
    });
});