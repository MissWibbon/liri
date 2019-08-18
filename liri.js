var keys = require("./keys.js");
var inquirer = require("inquirer");
var axios = require("axios");
require("dotenv").config();


list = inquirer.prompt([
    {
        name: "choseAction",
        type: "list",
        choices: ["concert-this", "spotify-this-song", "movie-this", "do-what-it-says"],
        message: "What type of information are you looking for?"
        
    }
]).then(function(answers) {
    var choice = argv[2];
    if (choice === "concert-this") {
        var omdb = function () {
            var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
            return axios.get(queryUrl).then(
                function(response) {
                    console.log("The movie was made in: " + response.data.Year);
                })
                .catch(function(error) {
                    if (error.response) {
                        // The request was made and the server responded with a status code
                        // that falls out of the range of 2xx
                        console.log("---------------Data---------------");
                        console.log(error.response.data);
                        console.log("---------------Status---------------");
                        console.log(error.response.status);
                        console.log("---------------Status---------------");
                        console.log(error.response.headers);
                    } else if (error.request) {
                        // The request was made but no response was received
                        // `error.request` is an object that comes back with details pertaining to the error that occurred.
                        console.log(error.request);
                    } else {
                        // Something happened in setting up the request that triggered an Error
                        console.log("Error", error.message);
                    }
                    console.log(error.config);
                });
            }
            
        }
    else if (choice === "spotify-this-song") {
        var spotify = new Spotify(keys.spotify);
            console.log(spotify);
            
    }
    else if (choice === "movie-this") {
        var bandsInTown = function () {
            var queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
            return axios.get(queryUrl).then(
            function(response) {
                console.log(response);
            });
        }
        return bandsInTown;
    }
    else {
        var fs = require("fs");
        fs.readFile('./random.txt');
    }
});
        