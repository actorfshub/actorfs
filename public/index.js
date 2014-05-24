
        $(document).scroll(function(){
            var i= $("body").scrollTop();
                if(i>=50){

                    $("#subhead").hide();
                    $("#mnu").animate({marginTop:'0px'});
                }
                else if(i<50)
                {
                    $("#subhead").show();

                }
        });