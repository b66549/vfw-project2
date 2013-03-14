// Name: Rolando Velasco
// Term: VFW 1303
// Project Part 2

var addNewGoal = function() {

	// Initialize the local variables with the html elements
	var myGoalHeadline = document.getElementById("goalheadline");
	var myGoalType = document.getElementById("goaltype");
	var myDeadline = document.getElementById("deadline");
	var mySize = document.getElementById("size");
	var myDetails = document.getElementById("details");
	var myGoalComplete = document.getElementById("goalcomplete");

	// Test output
	console.log(myGoalHeadline + "\n" + myGoalType.value + "\n" + myDeadline.value + "\n" + mySize.value + "\n" + myDetails.value + "\n" + myGoalComplete.checked);

	for
	return;
}

var displayGoalsList = function() {
	for (var i = 0, j = localStorage.length; i < j; i++) {
		currentKey = localStorage.key[i];
		currentValue = localStorage.getItem(currentKey);
	}
	var myList = document.getElement("ul");
}


var saveGoalButton = document.getElementById("savegoal");
saveGoalButton.addEventListener("click", addNewGoal);

// var displayData = document.getElementById(