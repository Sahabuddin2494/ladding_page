// <!-- for_payment_system -->

    $(document).ready(function ()
    {
        $("#watch-me").click(function()
        {
            $("#show-me:hidden").show('slow');
            $("#show-me-two").hide();
            $("#show-me-three").hide();
        });
        $("#watch-me").click(function()
        {
            if($('watch-me').prop('checked')===false)
            {
                $('#show-me').hide();
            }
        });

        $("#see-me").click(function()
        {
            $("#show-me-two:hidden").show('slow');
            $("#show-me").hide();
            $("#show-me-three").hide();
            $("#show-me-four").hide();
            $("#show-me-five").hide();
        });
        $("#see-me").click(function()
        {
            if($('see-me-two').prop('checked')===false)
            {
                $('#show-me-two').hide();
            }
        });
                // see-me_end
        $("#look-me").click(function()
        {
            $("#show-me-three:hidden").show('slow');
            $("#show-me").hide();
            $("#show-me-two").hide();
            $("#show-me-four").hide();
            $("#show-me-five").hide();
        });
        $("#look-me").click(function()
        {
            if($('see-me-three').prop('checked')===false)
            {
                $('#show-me-three').hide();
            }
        });
        // look-me_end
        $("#look-again").click(function()
        {
            $("#show-me-four:hidden").show('slow');
            $("#show-me").hide();
            $("#show-me-two").hide();
            $('#show-me-three').hide();
            $('#show-me-five').hide();
        });
        $("#look-again").click(function()
        {
            if($('see-me-four').prop('checked')===false)
            {
                $('#show-me-four').hide();
            }
        });
       // look-again_end
       $("#look-bkash").click(function()
        {
            $("#show-me-five:hidden").show('slow');
            $("#show-me").hide();
            $("#show-me-two").hide();
            $('#show-me-three').hide();
            $('#show-me-four').hide();
        });
        $("#look-bkash").click(function()
        {
            if($('see-me-five').prop('checked')===false)
            {
                $('#show-me-five').hide();
            }
        });
    //    look_bkash_end
    });

    // <!-- for_payment_system -->