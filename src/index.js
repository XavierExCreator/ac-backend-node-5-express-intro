// ---------------------------------
// Boilerplate Code to Set Up Server
// ---------------------------------

//Importing all of our node modules
import express from "express" //Express is the framework that lets us build web servers

//Creating an instance of express so we can use all of the methods, functions and  properties of express
const app = express();

//We are defining our port number
const port = 3000;

//Declaring that the server will be receiving and responding to requests in JSON
app.use(express.json());

//Turn on our server so that it can listen to requests and respond to them at the port number
app.listen(port, () => {
    console.log(`The server is listening on port: ${port}`);
    });


// ---------------------------------
// Helper Functions
// ---------------------------------

// ---------------------------------
// Our very first API Endpoints
// ---------------------------------

//app.get() takes in 2 parameters:
 // 1.The endpoint - URL path that the serve listens to
 // 2. The callback function - what we do when we receive a request at this endpoint, which takes in 2 parameters: the request and the response objects
 //The / represents the endpoint
app.get("/", (req, res) => {
    res.send("Hello World!");
})

app.get("/say-good-morning", (req, res) => {
    res.send("Good morning!");
    });

app.get("/get-user/:userName", (req, res) => {
    const userName = req.params.userName;
        // The res.send() method sends back text as a response
        res.send(`Hello, ${userName}!`);
        });


        app.get("/order-tacos/:protein/:numTacos", (req , res) => {
            const protein =  req.params.protein;
            const numTacos = req.params.numTacos;
            
            res.send(`Gracias por ordenar con nosotros! Ordenaste ${numTacos} tacos con ${protein}.`)
            });
// --------------------------------
// 🚀 LEVEL 1 CHALLENGES 
// --------------------------------

// 1. 🏆 Add a /goodbye endpoint that responds with "Goodbye, see you later!"

app.get("/goodbye", (req , res) => {
    res.send(`Goodbye, see you later!`);
    });

// 2. 🏆 Add a /happy-birthday endpoint that responds with "Happy birthday!!!"

app.get("/happy-birthday", (req , res) => {
    res.send(`Happy birthday!!!`);
    });
// --------------------------------
// 🚀 LEVEL 2 CHALLENGES — ADDING DYNAMIC PARAMETERS
// --------------------------------

// 1. 🏆 Add a /happy-birthday/:name endpoint says "Happy birthday, [name]!!!"

app.get("/happy-birthday/:name", (req , res) => {
    const name = req.params.name;
    res.send(`Happy birthday, ${name}!!!`);
    });
// 2. 🏆 Add a /say-hello/:name/:language endpoint that says hello in multiple languages. Examples:
//      - If language = "English", respond with "Hello, [name]!"
//      - If language = "Spanish", respond with "Hola, [name]!"
//      - If language = "Vietnamese", respond with "Xin chao, [name]!"
//      - If language = "Turkish", respond with "Merhaba, [name]!"
//      - Add as many languages as you want! 
//      - Otherwise, respond with "Language not supported."" 


app.get("/say-hello/:name/:language", (req , res) => {

    const name = req.params.name;

    const availableLanguages = [
        {
            language: "english",
            greeting: "Hello"
        },
        {
            language: "spanish",
            greeting: "Hola"
        },
        {
            language: "vietnamese",
            greeting: "Xin"
        },
        {
            language: "turkish",
            greeting: "Merhaba"
        },
        {
            language: "italian",
            greeting: "Ciao"
        },
        {
            language: "thai",
            greeting: "sa waa dii"
        }
         ]
    let language = req.params.language;

const foundLanguage = availableLanguages.find(
    (user) => user.language === language
);

if (foundLanguage) {
    res.send(`${foundLanguage.greeting}, ${name}`);
    } else {
        res.send(`Sorry, ${name}, current langauge is not supported. Or written incorrectly, make sure to write your preffered language in lowercase!`);
    }
    });

// --------------------------------
// 🚀 LEVEL 3 CHALLENGES — EVEN MORE DYNAMIC PARAMETERS
// --------------------------------

// 1. 🏆 Add a /calculate-dog-years/:dogName/:humanYears endpoint that calculates a dog's age in dog years. Refer to your dogAgeCalculator.js file. 


// 2. 🏆 Add a /calculate-tip/:bill/:tipPercentage/:numGuests endpoint that calculates the amount each guests owes. Refer to your tipCalculator.js file. 

// --------------------------------
// LEVEL 4 CHALLENGES — USING THE FILE SYSTEM MODULE
// --------------------------------

// 1. 🏆 Add a /get-birthstone/:month endpoint that tells the user the birthstone for the inputted month using the fs module. Use the birthstones-data.json file in this folder.

// 2. 🏆 Add a /get-all-pizza-orders endpoint that responds with the array of pizza orders. Use the pizza-orders-data.json file in this folder.

// 3. 🏆 Add a /get-one-pizza-order/:index endpoint that responds with the specified pizza order. 

// --------------------------------
// 🚀 LEVEL 5 CHALLENGES — USING THIRD-PARTY MODULES
// --------------------------------

// 1. 🏆 Add a /is-leap-year/:year endpoint that responds with whether the specified year is a leap year. Use the moment third-party node module and refer to your leap-year.js file.

// 2. 🏆 Add a /get-signs/:month/:day/:year endpoint that responds with the user's astrological and zodiac signs based on their inputted birthday. Use the horoscope third-party node module and refer to your sign-finder.js file.

