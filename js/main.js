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

	function delayNav(e, element) {
    // Check if it's a touch device
    if (window.matchMedia("(pointer: coarse)").matches) {
        e.preventDefault(); // Stop the page from changing immediately
        
        const url = element.getAttribute('href');
        
        // The logo swap happens naturally on tap, 
        // we just wait 300ms before moving to the next page
        setTimeout(function() {
            window.location.href = url;
        }, 600); 
    }
}
