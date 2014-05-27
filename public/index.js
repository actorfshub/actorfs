
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

 
var lf;
	
function ind(){
    $("#fea").animate({height:'0px'}); 
    $("#fea").css({overflow:"hidden"});
    $("#indx").animate({height:'1300px'});
    for(var i=1; i<13; i++){
        lf='#lf'+i;
        $(lf).css({position:"absolute"});
    }
}

function feat(){
    $("#indx").animate({height:'0px'});
    $("#indx").css({overflow:"hidden"});
    $("#fea").animate({height:'2100px'});
    for(var i=1; i<13; i++){
	    lf='#lf'+i;
        $(lf).css({position:"fixed"});
    }
}





    function left1(){
        $('body').animate({scrollTop:'70px'})
		
    }
    function left2(){
        $('body').animate({scrollTop:'540'})
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
	
	
var lastf= "#lf1";
var last= "#lf1";
var y= 0;
       // 0   1   2    3    4    5    6    7     8    9      10    11    12    13
var sc= [ 0, 70, 540, 605, 670, 740, 830, 920 ,1005 ,1100  ,1188 ,1272 ,1421 ,2100];
$(document).scroll(function(){
    y= $("body").scrollTop();
	for(var i=1; i < 13 ; i++){
	    if(y >= sc[i] && y< sc[i+1]){
		    $(last).css({color:"#888888"});
		    last= "#lf" + i;
			$(last).css({color : "#000000"});
		}
		
	}
	
});