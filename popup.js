var dogs = [];
var master;

function shutUpDogs(dogsName) {
	console.log("shutup");
	console.log(dogs);
	$.each(dogs, function(idx, name) {
		var comment = $('.commenter_details');
		comment.each(function() {
			if($(this).find(".commenter_name:contains(" + name + ")").length > 0) {
				$(this).css("display", "none");
			}
		});
	});	
}

function addDog(newDog) {
	if(newDog == "") {
		return;
	}

	dogs.push(newDog);
}

function shutUp() {
	chrome.alarms.create("alarm", {"periodInMinutes": 0.1});
	chrome.alarms.onAlarm.addListener(shutUpDogs(dogs));
}

function stopShutUp() {
	chrome.alarms.clear("alarm");
}

function init() {
	console.log("init shut up dog");
	$("#btn-shut-up").click(function() {
		shutUp();
	});

	$("#btn-shut-up").click(function() {
		stopShutUp();
	});

	$("#btn-add-new-dog").click(function() {
		addDog($("#new-dog-name").val());
		$("#new-dog-name").val() = "";
	});
}

window.onload = init;