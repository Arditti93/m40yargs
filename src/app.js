
const yargs = require("yargs")
const Movie = require("./utils")

// console.log(process.argv)
// // console.log(yargs.argv )
// if (yargs.argv.add) {
//     console.log("its " + yargs.argv.title)
// } else {
//     console.log("Not true")
// }   


// node app.js --add --title Spiderman --actor "Dave Smith"

const app = (yargsObj) => {
    try {
        //check if something is true
        if () {
            //call your movie class 
            //log your movie array
        } else {
            console.log("incorrect command")
        }

    } catch (error) {
        console.log(error)
    }
} 

app(yargs.argv)

