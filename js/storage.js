$(document).ready(function() {
	if (window.localStorage) {
		$('textarea').on('input', function(e) {
			var markdown = $('textarea').val()
			localStorage.setItem('markdownStorage', markdown)
		})
	}
})



//  var textarea = document.getElementById('markdown')
//  if (window.localStorage) {
//     document.getElementByClassName('markdown');
// textarea.addEventListener('input', function() {
//  		localStorage.setItem('markdownStorage', textarea.value)
//  	})
//  }