(function() {

	/*
	 * global vars
	 */
	var window_height = window.innerHeight;

	/*
	 * functions
	 */
  
  	main = function() {
  		// fix header variables
  		var title = document.getElementById('thisNatasha');
  		title.style.paddingTop = (window_height - 200) + "px";
  		var title_height = title.clientHeight;
  		var page = document.getElementById('page');
		var fix_class          = 'is--fixed';
		var title_height_during_fixed = 120;
		var title_margin_during_fixed = title_height_during_fixed - title.childNodes[1].clientHeight;

		// first check on heafer
	 	if(title_height  - window.pageYOffset < 120) {
			title.classList.add(fix_class); 
			title.style.paddingTop = title_margin_during_fixed + "px"; // eh!?
			page.style.paddingTop = title_height + "px";
		}
		// console.log(title_height + " / " + window.pageYOffset + " / " + title_margin_during_fixed);

		// Keeping a sticky header, no jquery
		function stickyScroll(e) {
			// console.log(title_margin_during_fixed + " | " + title_height + " | " + window.pageYOffset + " | " + (title_height  - window.pageYOffset));
			if(title_height  - window.pageYOffset < 120) {
				title.classList.add(fix_class); 
				title.style.paddingTop = title_margin_during_fixed + "px"; // eh!?
				page.style.paddingTop = title_height + "px";
			}

			if(title_height  - window.pageYOffset >= 120) {
				title.classList.remove(fix_class); 
				title.style.paddingTop = (window_height - 200) + "px";
				page.style.paddingTop = 0 + "px";
			}
		}

		// Scroll handler to toggle classes.
		window.addEventListener('scroll', stickyScroll, false);
  	};
  	
 	
  	window.onload = main;
}).call(this);



