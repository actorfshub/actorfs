
var y= 0;
var x=0;
$(document).scroll(function(){
    y= $('body, html').scrollTop();
	x= $('body').scrollTop();
        if(y>=50 || x>=50){
            $("#subhead").hide();
            $("#mnu").animate({marginTop:'0px'});
        }
         else if(y<50 || x<50)
        {
            $("#subhead").show();
        }
});  

 
function Benchmark(){
window.open("Benchmark.html",'_top');
}

function Home(){
window.open("../index.html",'_top');
}

function Diffrentiators(){ 
window.open("Diffrentiators.html",'_top');
}

function Mail(){
window.open("googleGroup.html",'_top');

}

function Bl(){window.open("http://actorfs.wordpress.com/",'_top');}
function GS(){window.open("doc/howto/started.html",'_top');}
	

