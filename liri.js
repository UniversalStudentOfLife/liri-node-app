

// Require these modules
var request = require("request");
var Twitter = require('twitter');
var keys = require("./keys");

//Take in user inputs
userAction = process.argv[2];
userInput = process.argv[3];

//Check if the user wants to access their tweets
if (userAction === "my-tweets") {
console.log("Attempting to retrieve your tweets...");
userTweets();

}



function userTweets() {
    var client = new Twitter(keys);
    var params = {
        screen_name: 'BobisAwesome17', 
        count: 20
    };
    client.get('statuses/user_timeline', params, function (error, tweets, response) {
        if (!error) {
        	console.log("Retrieval successful!");
        	console.log("\nHere are your tweets:");

            for (var i = 0; i < tweets.length; i++) {
                console.log("----------------------------------------");
                console.log("Tweet: " + tweets[i].text);
                console.log("\nTweet Number: " + (i + 1));
                console.log("\nCreated: " + tweets[i].created_at);
                console.log("----------------------------------------");

            }
        }
    });
}