(function(){
	$(function(){

	})

	// $('.top_menu').on('click', function(){
	// 	console.log('click');
	// 	$('#slidePage2').css('display','block')
		
	// })

	// $('body').on('click', function(){
	// 			console.log($(this));
	// 				$('#slidePage2').css('display','none')
	// })

	

}())
	
jQuery(document).ready(function($) {
    $('.top_menu').click(function(e) {
console.log('works');
        $('#slidePage2').toggleClass('active');
        $('.top_menu').toggleClass('active');
 				
        e.preventDefault();
    });
    $('#slidePage2 ul').click(function(e) {
        $('.top_menu').toggleClass('active');
        $('#slidePage2').toggleClass('active');


    });
});