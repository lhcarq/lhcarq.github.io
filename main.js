$(document).ready(function() {
	var $Images = $("#content img");
	var index = 0;
	
	setTimeout(function() {
	    $Images.eq(index).removeClass('hide').addClass('show');
	    
	    setInterval(function() {
	    	$Images.eq(index).removeClass('show').addClass('hide');
	    	index++;
	    	if (index >= $Images.length) {
	    			index = 0;
	    	}
	    	$Images.eq(index).removeClass('hide').addClass('show');
    	}, 4000);
	    
	    /*setInterval(function() {
	    	if(index < 2) {
	    		$Images.eq(index).removeClass('show').addClass('hide');
	    		index++;
	    		if (index >= $Images.length) {
	    			index = 0;
	    		}
	    		$Images.eq(index).removeClass('hide').addClass('show');
	    	}
    	}, 3000);
	    
	    setInterval(function() {
	    	if(index >= 2) {
	    		$Images.eq(index).removeClass('show').addClass('hide');
	    		index++;
	    		if (index >= $Images.length) {
	    			index = 0;
	    		}
	    		$Images.eq(index).removeClass('hide').addClass('show');
	    	}
    	}, 6000);*/
	}, 2000);
});