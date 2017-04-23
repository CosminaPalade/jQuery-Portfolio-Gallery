$(document).ready(function(){

	//Creating a method to automatically capitalize the first letter in a string:
	String.prototype.capitalize = function(){

		return this.substr(0, 1).toUpperCase() + this.slice(1, this.length);
	};

	$("#groups > li > a").click(function(){

			//create the variables for main title heading and photos gallery 
			var text = $(this).text(), arr = [], current = $(this).parent().index(),  count = $(this).parent(), img = $(".gallery > li"),
				txt = $(this).text().toLowerCase(), title = $(".group-title > h3"), arrFirst;

			$( "#groups li" ).each(function( index ) {

  				arr.push(index);

			});

			arrFirst = arr.shift();

			title.text(text);

			current === arrFirst ? img.show() : img.hide();
			 
			//loop through array and show/hide content and images depending on which category is active
			$.each( arr, function(i) {
  				
  				if(current === arr[i] ){

					$(".gallery").find("li."+txt).show();
 				
 				}
		});

	});

	//Display overlay on mouseenter event
	$(".gallery > li").on("mouseenter", function(){

		var title = $(this).attr("data-title") + " category - " + ($(this).attr("class")).capitalize(), description = $(this).attr("data-description"); 

		$(this).append("<div class='overlay'><div class='overlay-grp'><h4>"+title+"</h4><p>"+description+"</p></div></div>").fadeIn(3000); 


	});

	//Remove overlay on mouseleave event
	$(".gallery > li").on("mouseleave", function(){

		$(this).find("div").fadeOut(3000).remove(); 

	});

	//fade overlay if element is clicked - activate the lightbox plugin
	$(".gallery > li ").on("click", function(e){

		$("div.overlay").css("z-index", "-1");

	});



});