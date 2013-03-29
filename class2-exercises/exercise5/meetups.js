function getWebMeetups(){
	$.ajax({
		url: "http://api.meetup.com/2/open_events",
		data: {
			key: "50722e1d56c194e61763a2ee1e4535",
			zip: 19106,
			topic: 'web'
		},
		crossDomain: true,
		dataType: 'jsonp',
		type: "GET",
		success: function(data) {
			printMeetups(data.results)
		},
		error: function(data) {
			console.log("Error", data)
		}
	});
}

function printMeetups(results){
	for (var i = 0; i < results.length; i++) {
		var $result = results[i];
		$('#events').append('<h2>' + $result.name + '</h2>');
	}
}

$(document).ready(function(){
	getWebMeetups();
});
