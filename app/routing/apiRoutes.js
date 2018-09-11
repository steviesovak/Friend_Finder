var path = require("path");
var friends = require("../data/friends.js")


module.exports = (app) => {
   
    // View JSON
    
	app.get("/api/friends", (req, res) => {
	  res.json(friends);
	});

    // Add new friend
    
	app.post("/api/friends", (req, res) => {
		
		var userResponses = req.body.scores;

        // Find the best match
        
		var matchName = '';
		var matchImage = '';
		var bestMatch = 50;
		for (var i=0; i < friends.length -1; i++) {
			var diff = 0;
			for (var j = 0; j < userResponses.length; j++) {
				diff += Math.abs(friends[i].scores[j] - userResponses[j]);

			}
			console.log("diff " + i + ": " + diff)
			if (diff < bestMatch) {
				bestMatch = diff;	
				matchName = friends[i].name;
				matchImage = friends[i].photo;
				console.log("NEW BEST MATCH NUMBER " + bestMatch)	
				console.log("NAME " + matchName)	
				console.log("IMAGE " + matchImage)
			}
		}

		res.json({status: 'OK', matchName: matchName, matchImage: matchImage});
	});

}