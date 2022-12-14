jQuery(document).ready(listo);

function listo(){
	jQuery(".hamb").click(function(e){
		e.preventDefault();
		jQuery("header .container nav").toggleClass("open");
	});

}