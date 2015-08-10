$( document ).ready(function() {
	setTimeout(function(){}, 1000);
	var window = $('.box_container');
	window.find('.loadingAnimation').hide();
    var width = window.outerWidth() / 2;
	
    window.find('.left').animate({ right : width },{queue:false,duration:300});
    window.find('.right').animate({ left : width },{queue:false,duration:300});
	setTimeout(function(){ 	$('.ajax_loader').remove(); $('.data').fadeIn(400);}, 300);
	insert("about",$("#region"));
	return;
});

function insert(string, obj){
	var pos = document.URL.indexOf("index.html");
	var path;
	if(pos==-1)
		path = document.URL+"view/"+string.toLowerCase()+".html";
	else
		path = document.URL.substring(0,pos-1)+"/view/"+string.toLowerCase()+".html";
	obj.load(path, function (responseText, textStatus, req) {
        if (textStatus == "error") {
			obj.text("\n\nInformation not found");		
		}
	});
	return;
};