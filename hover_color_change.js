function change(){
    alert();
	}

	var spanA = document.getElementsByClassName('event');
	var spanB = document.getElementsByClassName('epfl');
	var i = 0;
	while(i < spanA.length){
    	spanA[i].onmouseover = function change(){
        	var i = 0;
        	while(i < spanA.length){
        	    spanA[i].style.color = '#cc0000';
        	    spanB[i].style.color= 'black';
        	    i++;
        	}
    	}
    
    	spanA[i].onmouseout = function change(){
        	var i = 0;
        	while(i < spanA.length){
            	spanA[i].style.color = 'black';
            	spanB[i].style.color= '#cc0000';
            	i++;
        	}
    	}

    	i++;
	}