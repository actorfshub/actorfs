
        $(document).scroll(function(){
            var x= $("body").scrollTop();
                if(x>=50){

                    $("#subhead").hide();
                    $("#mnu").animate({marginTop:'0px'});
                }
                else if(x<50)
                {
                    $("#subhead").show();

                }
        });