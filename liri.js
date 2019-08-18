var keys = require("./keys.js");
var inquirer = require("inquirer");
require("dotenv").config();

var spotify = new Spotify(keys.spotify);

  list = inquirer.prompt([
        {
            name: "choseAction",
            type: "list",
            choices: ["concert-this", "spotify-this-song", "movie-this", "do-what-it-says"],
            message: "What type of information are you looking for?"

        }
    ]).then(function(answers) {
        argv[2] = answers.choseAction;
    });

var bandsInTown = 