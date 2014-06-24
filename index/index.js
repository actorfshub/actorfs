

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
window.open("index/Benchmark.html",'_top');
}
function Home(){
window.open("index.html",'_top');
}
function Diffrentiators(){ 
window.open("index/Diffrentiators.html",'_top');
}

function Mail(){ 
window.open("index/googleGroup.html",'_top');
}
function Bl(){window.open("http://actorfs.wordpress.com/",'_top');}
function GS(){window.open("index/doc/index.html#getting-started",'_top');}
	

