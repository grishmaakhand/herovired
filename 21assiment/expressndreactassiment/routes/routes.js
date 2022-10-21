// Question : Simulate a backend api ,
//by using ExpressJs with a GET type of request handling
//the data of a set of movies.
//The data must be in the form of Array of objects
//and must be sent as response to the client .
// Also, mention the usage of each argument in the
// GET request route handler function.
// Example : moviedata =[
//                       {name:”movie1”,releaseDate:”jan 2021”},
//                       {name:”movie2”,releaseDate:”march 2021”},
//                        ])

const router = require("express").Router();

router.get("/movie", (req, res) => {
  res.json([
    { name: "movie1", releaseDate: "jan 2021" },
    { name: "movie2", releaseDate: "march 2021" },
  ]);
});
module.exports = router;
