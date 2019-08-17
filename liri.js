var keys = require("./keys.js");
var inquirer = require("inquirer");
require("dotenv").config();

var spotify = new Spotify(keys.spotify);
var list = [
    "concert-this", "spotify-this-song", "movie-this", "do-what-it-says"
];
argv[2] = list;
var askQuestion = function() {
    inquirer.prompt([
        {
            type: "list",

        }
    ])
};