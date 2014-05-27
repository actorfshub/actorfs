
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
function featur(){
 $('fea').show();
 $('indx').hide();

}

function ind(){
 $('indx').show();
 $('fea').hide();

}



 var lff = [lf1, lf2, lf3,lf4,lf5,lf6,lf7,lf8,lf9,lf10,lf11,lf12];
    var x=1;

    function left1(){
        $('body').animate({scrollTop:'70px'})
    }
    function left2(){
        $('body').animate({scrollTop:'540'});
    }
    function left3(){
        $('body').animate({scrollTop:'605'})
    }
    function left4(){
        $('body').animate({scrollTop:'670'})
    }
    function left5(){
        $('body').animate({scrollTop:'740'})
    }
    function left6(){
        $('body').animate({scrollTop:'830'})
    }
    function left7(){
        $('body').animate({scrollTop:'920'})
    }
    function left8(){
        $('body').animate({scrollTop:'1000'})
    }
    function left9(){
        $('body').animate({scrollTop:'1100'})
    }
    function left10(){
        $('body').animate({scrollTop:'1190'})
    }
    function left11(){
        $('body').animate({scrollTop:'1275'})
    }
    function left12(){
        $('body').animate({scrollTop:'1425'})
    }

    $(document).scroll(function(){
        y= $("body").scrollTop();
        if(y >= 1425){
            lff[x-1].style.color = "#888888";
            x=12;
            lf12.style.color = "#000000";
        }
        else if(y >= 1275 && y < 1425){
            lff[x-1].style.color = "#888888";
            x=11;
            lf11.style.color = "#000000";
        }
        else if(y >= 1190 && y < 1275){
            lff[x-1].style.color = "#888888";
            x=10;
            lf10.style.color = "#000000";
        }
        else if(y >= 1100 && y < 1190){
            lff[x-1].style.color = "#888888";
            x=9;
            lf9.style.color = "#000000";
        }
        else if(y >= 1000 && y < 1100){
            lff[x-1].style.color = "#888888";
            x=8;
            lf8.style.color = "#000000";
        }
        else if(y >= 920 && y < 1000){
            lff[x-1].style.color = "#888888";
            x=7;
            lf7.style.color = "#000000";
        }
        else if(y >= 830 && y < 920){
            lff[x-1].style.color = "#888888";
            x=6;
            lf6.style.color = "#000000";
        }
        else if(y >= 740 && y < 830){
            lff[x-1].style.color = "#888888";
            x=5;
            lf5.style.color = "#000000";
        }
        else if(y >= 670 && y < 740){
            lff[x-1].style.color = "#888888";
            x=4;
            lf4.style.color = "#000000";
        }
        else if(y >= 605 && y < 670){
            lff[x-1].style.color = "#888888";
            x=3;
            lf3.style.color = "#000000";
        }
        else if(y >= 540 && y < 605){
            lff[x-1].style.color = "#888888";
            x=2;
            lf2.style.color = "#000000";
        }
        else if(y < 540){
            lff[x-1].style.color = "#888888";
            x=1;
            lf1.style.color = "#000000";
        }

    });