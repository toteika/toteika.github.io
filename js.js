$(document).ready( function() {
$('#imgs').hide(1);
  var path = $('#imgs img').attr('src');
	$('#back').click(function(){
	  $('#homeimg').animate({opacity: 1},100,function(){
	    $(this).html('<img src=' + path + ' />').find('img');
	  });
	  return false;
	});


}); // End of ready
