$(document).ready(function(){
	$('.head').dblclick(function(){
		$('.head').css('font-size', '20px')
		$('.head').css('transition', '0.5s ease-in')
	})
	$(".test").mouseleave(function(){
		$(".test").animate({
			left: '300px',
			width: '200px',
			height: '200px'
		},3000)
	})
	$(".image").mouseenter(function(){
		$(".image").animate({
			right: '200px',
			width: '200px',
			height: '200px'
		}, 3000)
	})
})