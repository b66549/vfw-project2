// Name: Rolando Velasco
// Term: VFW 1303
// Project Part 2

// Line to wait until the DOM is ready
window.addEventListener("DOMContentLoaded", function() {
	
	// function to create the select field element
	function makeGoalTypes() {
		var myformTag = document.getElementsByTagName("form"), selectList = document.getElementById("selecttype"), createSelect = document.createElement("select");
		createSelect.setAttribute("id", "types");
	
		for (var i = 0, j = goalTypes.length; i < j; i++) {
			var createOption = document.createElement("option");
			var optionText = goalTypes[i];
			createOption.setAttribute("value", optionText);
			createOption.innerHTML = optionText;
			createSelect.appendChild(createOption);
		}
		selectList.appendChild(createSelect);
	
	}
	
	function getGoalCompleteCheckBoxValue() {
		if(document.getElementById(goalcomplete).checked) {
			goalCompleteValue = document.getElementById(goalcomplete).value;
		} else {
			goalCompleteValue = "Goal Not Yet Achieved";
		}
	}
	
	function addNewGoal() {
	
		// random number generator
		var uniqueID = Math.floor(Math.random() * 1000001);
		
		// Initialize the local variables with the html elements
		// Create an Object with each property an array that contains the form label and the input value
		var goalObj 			= {};
		goalObj.goalHeadline 	= ["Goal:", document.getElementById("goalheadline").value];
		goalObj.goalType 		= ["Goal Type:", document.getElementById("goaltype").value];
		goalObj.deadline 		= ["Deadline:", document.getElementById("deadline").value];
		goalObj.size 			= ["Size:", document.getElementById("size").value];
		goalObj.details 		= ["Details", document.getElementById("details").value];
		goalObj.goalcomplete 	= ["Goal Complete:", goalCompleteValue]; document.getElementById("goalcomplete").checked];
			
		// Save the data into local Storage
		// Use Stringify to convert the object into a string
		localStorage.setItem(uniqueID, JSON.stringify(goalObj));
		alert("Goal Saved!");	
		return;
	}
/*	
	var displayGoalsList = function() {
	
		var myDisplayDataDiv = document.getElementById("displaydata");
		
		for (var i = 0, j = localStorage.length; i < j; i++) {
			currentKey = localStorage.key[i];
			currentValue = localStorage.getItem(currentKey);
			var myList = document.createElement("p");
			myList.innerHTML = currentValue;
			myDisplayDataDiv.appendChild(myList);
		}
	}
	
	var clearGoalsList = function() {
	
	
	
	
	}
*/	
	// array for the goal types
	var goalTypes = ["--Choose a Type--", "Personal", "Business", "Travel", "Finance", "Education"];
	var goalCompleteValue = "Goal Not Yet Achieved";
	makeGoalTypes();
	
	var saveGoalButton = document.getElementById("savegoal");
	saveGoalButton.addEventListener("click", addNewGoal);
	
	var displayDataLink = document.getElementById("display");
	displayDataLink.addEventListener("click", displayGoalsList);
	
	var clearDataLink = document.getElementById("clear");
	clearDataLink.addEventListener("click", clearGoalsList);

});