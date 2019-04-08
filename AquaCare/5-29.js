$( document ).ready(function() {
    
	$('#40g-done').hide();
	$('#34g-done').hide();
	$('#8g-done').hide();
	$('#5g-done').hide();
	$('#8g-todo').hide();
	$('#5g-todo').hide();
   
});


$('#40g-todo').click(function() {

	swal({  
			title: "Feed 1 Cube of Mysis Shrimp Located in Freezer",
		    icon: "info",
  			buttons:{
    				okay:{
      					text: "Cancel",
      					value: "cancel",
    					  },
    				done:{
      					text: "Complete",
      					value: "complete",
    					  },
  			},
		})
		.then((value) => {
  			switch (value) {
 
    			case "cancel":
      				
      			break;
 
    			case "complete":

    				$('#40g-done').show();
    				$('#40g-todo').hide();


      				swal({
  						title: "Thanks Dave!",
  						text: "Marked as Done",
  						icon: "success",
						});
      			break;
 
    			default:
      				
  		
  		}
	});

});

$('#34g-todo').click(function() {

	swal({
			title: "Feed Omega One Pellets Located Right of Tank",
			text: "I usually turn the flow off for this by turning the 2 switches closest to the window to the off position as well as the switch second closest to the front of the window sill to the off position on the black box to the right of the tank. I would put my fingers in the water so that the pellets float to the bottom bc the tang will not eat them off the surface.",
		    icon: "info",
  			buttons:{
    				okay:{
      					text: "Cancel",
      					value: "cancel",
    					  },
    				done:{
      					text: "Complete",
      					value: "complete",
    					  },
  			},
		})
		.then((value) => {
  			switch (value) {
 
    			case "cancel":
      				
      			break;
 
    			case "complete":

    				$('#34g-done').show();
    				$('#34g-todo').hide();


      				swal({
  						title: "Thanks Dave!",
  						text: "Marked as Done",
  						icon: "success",
						});
      			break;
 
    			default:
      				
  		
  		}
	});

});

$('#40g-done').click(function() {

	swal({  
			title: "Feed 1 Cube of Mysis Shrimp Located in Freezer",
		    icon: "info",
  			buttons:{
    				okay:{
      					text: "Cancel",
      					value: "cancel",
    					  },
    				done:{
      					text: "Actually, I am Not Done",
      					value: "not-done",
    					  },
  			},
		})
		.then((value) => {
  			switch (value) {
 
    			case "cancel":
      				
      			break;
 
    			case "not-done":

    				$('#40g-done').hide();
    				$('#40g-todo').show();


      				swal({
  						title: "I believe in you Dave!",
  						text: "Text me if you have any questions!",
  						icon: "success",
						});
      			break;
 
    			default:
      				
  		
  		}
	});

});

$('#34g-done').click(function() {

	swal({  
			title: "Feed Omega One Pellets Located Right of Tank",
			text: "I usually turn the flow off for this by turning the 2 switches closest to the window to the off position as well as the switch second closest to the front of the window sill to the off position on the black box to the right of the tank. I would put my fingers in the water so that the pellets float to the bottom bc the tang will not eat them off the surface.",
		    icon: "info",
  			buttons:{
    				okay:{
      					text: "Cancel",
      					value: "cancel",
    					  },
    				done:{
      					text: "Actually, I am Not Done",
      					value: "not-done",
    					  },
  			},
		})
		.then((value) => {
  			switch (value) {
 
    			case "cancel":
      				
      			break;
 
    			case "not-done":

    				$('#34g-done').hide();
    				$('#34g-todo').show();


      				swal({
  						title: "I believe in you Dave!",
  						text: "Text me if you have any questions!",
  						icon: "success",
						});
      			break;
 
    			default:
      				
  		
  		}
	});

});









