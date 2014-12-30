(function() {

	/*
	 * global vars
	 */
	var window_height = window.innerHeight;

	/*
	 * functions
	 */
	function move(elem, amount) {

		var top = 0

		function frame() {
			top = top + 5;  // update parameters 

			elem.style.marginTop = top + 'px' // show frame 
			console.log(top + 'px' + ' | ' + amount);

			if (top >= amount)  // check finish condition
		  		clearInterval(id)
			}

			var id = setInterval(frame, 5) // draw every 10ms
	}


  
  	main = function() {
  		var title = document.getElementById('thisNatasha');
  		var title_height = title.clientHeight;
  		//title.style.marginTop = (window_height - 200) + "px";
  		//var margin_top = (window_height - 200) + "px";
  		var margin_top = (window_height - 200);
  		move(title, margin_top);

  		header_height = title_height + (window_height - 200);
		console.log(header_height + " / " + title_height);

		/*
		 * Keeping a sticky header, no jquery
		 */
		function stickyScroll(e) {
			//console.log("in function " + header_height + " | " + window.pageYOffset + " | " + (header_height - window.pageYOffset));
			var fix_class          = 'is--fixed';

			if(header_height  - window.pageYOffset < title_height) {
				title.childNodes[1].classList.add(fix_class); // NEED TO ADD CLASS
				console.log('now');
			}

			if(header_height  - window.pageYOffset > title_height) {
				title.childNodes[1].classList.remove(fix_class); // NEED TO ADD CLASS
			}
		}

		// Scroll handler to toggle classes.
		window.addEventListener('scroll', stickyScroll, false);
  	};
  	
 	
  	window.onload = main;
}).call(this);



