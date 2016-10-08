var keys = require('./key.js'); // requres key file
//var myKey = keys.twitterKeys;
var Twitter = require('twitter');
var spotify = require('spotify'); // spotify module
var request = require('request'); // require the http request module
var fs = require('fs');

var client = new Twitter(keys.twitterKeys);
tweetTweet();
//------------------------
// twitter function

function tweetTweet() {
    // Establish Twitter object



    //var client = new Twitter(key.twitterKeys);
    var params = { screen_name: 'whitegrlproblem' };
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (!error) {
            for (var i = 0; i < tweets.length; i++) {
                console.log('----');
                console.log(tweets[i].text);
            }
        } else {
            console.log(error);
        }
    });
}
//-------------------------

function playSpotify() {
    var spotify = require('spotify');

    spotify.search({ type: 'track', query: 'dancing in the moonlight' }, function(err, data) {
        if (err) {
            console.log('Error occured: ' + err);
            return;
        }
        // do something with data
    });
}

function doIt() {
    switch (datThang) {
        case 'my-tweets':
            tweetTweet();
            break;
        case 'spotify-this-song':
            spotifyThisSong();
            break;
        case 'do-what-it-says':
            doWhatItSays();
            break;
        default:
            console.log("Unsure of command - try again plz");

    }
}

//---------

if (process.argv[2] === 'my-tweets') {
    tweetTweet();
}

if (process.argv[2] === 'spotify-this-song') {
    var songName = '';
    songName = process.argv[3];
    playSpotify(songName);

}

if (process.argv[2] === 'movie-this') {
    var movieName = '';
    movieName = process.arv[3];
    getMovie(movieName)
}

if (process.argv[2] === 'do-what-it-says') {
    doWhatItSays();
}
