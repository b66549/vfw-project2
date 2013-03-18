// Name: Rolando Velasco
// Term: VFW 1303
// Project Part 2

// Line to wait until the DOM is ready
window.addEventListener("DOMContentLoaded", function() {
	var addNewGoal = function() {
	
		// Initialize the local variables with the html elements
		var myGoalHeadline = document.getElementById("goalheadline");
		var myGoalType = document.getElementById("goaltype");
		var myDeadline = document.getElementById("deadline");
		var mySize = document.getElementById("size");
		var myDetails = document.getElementById("details");
		var myGoalComplete = document.getElementById("goalcomplete");
	
		// Initialize the array for the form data and then check if our checkbox is checked or not, then enter data
		var myArray = [];
		isChecked = myGoalComplete.checked;	
		if (isChecked) {
			myArray = [myGoalHeadline.value, myGoalType.value, myDeadline.value, mySize.value, myDetails.value, myGoalComplete.value];
		} else {
			myArray = [myGoalHeadline.value, myGoalType.value, myDeadline.value, mySize.value, myDetails.value];
		};
		
		// Test output
		console.log(myArray);
		
			
		return;
	}
	
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
	
	
	var saveGoalButton = document.getElementById("savegoal");
	saveGoalButton.addEventListener("click", addNewGoal);
	
	// var displayData = document.getElementById(

});