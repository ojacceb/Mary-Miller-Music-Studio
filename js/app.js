//from https://www.sitepoint.com/jquery-cleanly-open-links-popup-windows/

jQuery(document).ready(function($) {
	jQuery('a.popup').live('click', function(){
		newwindow=window.open($(this).attr('href'),'','height=200,width=150');
		if (window.focus) {newwindow.focus()}
		return false;
	});
});