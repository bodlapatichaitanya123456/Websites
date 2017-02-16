$(document).ready(function(){
	
	var pos = $('#second-div').position();
console.dir(pos);
	$("#first-button").click(function(){
        $("#second-div").animate({left:'850px'})
		
    });
   $("#second-button").click(function(){
        $("#second-div").animate({top:'400px'});
		
    });
  
});