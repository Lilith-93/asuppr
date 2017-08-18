$(document).ready(function(){
var time = 0;
var inter = 0;
	$("#boulot").click(function(){
		time = 2;
		$("#temps").text(time);
		if(time==0){
			$("#phrase").text('Une petite pause café bien méritée !');
		}
	});
	$("#cafe").click(function(){
		time = 300;
		$("#temps").text(time);
		if(time==0){
			$("#phrase").text("J'espère que tu as fini ton café. Il est temps d'y retourner !");
		}
	});
		$("#sieste").click(function(){
		time = 600;
		$("#temps").text(time);
		if(time==0){
			$("#phrase").text("Ta sieste était bonne ? C'est bien. Maintenant, au boulot !");
		}
	});
	$("#start").click(function(){
		inter = setInterval(count,1000);
	});
	function count(){
		time--;
		$("#temps").text(time);
		if(time<=0){
			clearInterval(inter);
		}
	}
	$("#pause").click(function(){

		clearInterval(inter);
		inter = 0;
	});
	$("#reset").click(function(){
		time=0;
		clearInterval(inter);	
		inter = 0;
		$("#temps").text(time);	
	});	
});