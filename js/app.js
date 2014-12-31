(function() {

	/*
	 * global vars
	 */
	var window_height = window.innerHeight;

	/*
	 * functions
	 */
  
  	main = function() {
  		var title = document.getElementById('thisNatasha');
  		var title_height = parseInt(title.clientHeight + title.style.marginTop);
  		title.style.marginTop = (window_height - 300) + "px";

  		header_height = title_height + (window_height - 300);
		console.log(header_height + " / " + title_height);

		/*
		 * Keeping a sticky header, no jquery
		 */
		function stickyScroll(e) {
			var page = document.getElementById('page');
			var fix_class          = 'is--fixed';

			if(header_height  - window.pageYOffset < title_height) {
				title.childNodes[1].classList.add(fix_class); 
				page.style.paddingTop = title_height + "px";
			}

			if(header_height  - window.pageYOffset > title_height) {
				title.childNodes[1].classList.remove(fix_class); 
				page.style.paddingTop = 0 + "px";
			}
		}

		// Scroll handler to toggle classes.
		window.addEventListener('scroll', stickyScroll, false);
  	};
  	
 	
  	window.onload = main;
}).call(this);



