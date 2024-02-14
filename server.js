const express = require('express');
const mySQL = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');   // helps to read data from form

const app = express();
// const router = require("./router/auth-router");
app.use(cors());

app.use(bodyParser.json());  // converts the form data into json format
// app.use(bodyParser.urlencoded({extended: true}));


app.use(express.json()); // This line of code adds express middleware that parses request bodies
                         // with JSON payloads. It is important to place this before any routes that need
                         // to handle JSON data in the request body. This middleware is responsible for
                         // parsing JSON data from requests, and it should be applied at the beginning of
                         // your middleware stack to ensure it is available for all subsequent route handlers.

// app.use("/api/auth", router); // Mount the Router: To use the router in your main Express app, you can mount
                              // it at a specific URL prefix

app.get("/", (req, res) => {
    try {
        res.status(200).send("Welcome to BackEnd using express.Router() & Controllers"); 
    } catch (error) {
        console.log(error);
    }
});





// Establishing connection with the MySQL database
const db = mySQL.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "food"
});

db.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL:', err);
      return;
    }
    console.log('Connected to MySQL');
  });

// Simple in-memory user data (replace with a database in a real application)

app.post('/login', (req, res) => {
    var username = req.body.username;  
    var password = req.body.password;
  
    // Check if user exists and credentials are valid
    db.query(
        'SELECT * FROM users WHERE username = ? AND password = ?',
        [username, password],
        (error, results) => {
          if (error) {
            console.error('Error executing query:', error);
            res.status(500).json({ message: 'Internal Server Error' });
            return;
          }
  
    if (results.length > 0) {
      res.status(200).json({ message: 'Login successful' });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } 
 );
});


// app.post('/register/user', (req, res) => {
//     const nam = req.body.nam;
//     const username = req.body.username;
//     const password = req.body.password;

//     con.query("INSERT INTO users (email, username, password) VALUES (?, ?, ?)", [email, username, password], 
//         (err, result) => {
//             if(result){
//                 res.send(result);
//             }else{
//                 res.send({message: "ENTER CORRECT ASKED DETAILS!"})
//             }
//         }
//     )
// })

app.post("/register/user", (req,res) => {
    try{
    const sql = "INSERT INTO `users` (`name`, `clg_id`, `username`, `phone`, `password`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.clg_id,
        req.body.username,
        req.body.phone,
        req.body.password
    ]
    db.query(sql, [values], (req, data) => {
        return res.send(data);
   
    }) ;
}  catch(err){
    return res.send(err);
}
}
);


// // creating an API to get data from our database
// app.get("register/user", (req, res) => {
//     const sql = "SELECT * FROM users";
//     db.query(sql, (err, data) => {
//         if(err) return res.send(err);
//         return res.send(data);
//     });
// });


/*
// creating an API to get something on the console
app.get("/", (req, res) => {
    return res.status(200).send("Hi from Backend Side");
});

app.get("/register", (req, res) => {
    return res.send("REGISTER Page");
});
*/

// ADMIN LOGIN
app.post('/admin_login', (req, res) => {
    var username = req.body.username;  
    var password = req.body.password;
  
    // Check if admin exists and credentials are valid
    db.query(
        'SELECT * FROM admin WHERE username = ? AND password = ?',
        [username, password],
        (error, results) => {
          if (error) {
            console.error('Error executing query:', error);
            res.status(500).json({ message: 'Internal Server Error' });
            return;
          }
  
    if (results.length > 0) {
      res.status(200).json({ message: 'Login successful' });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } 
 );
});





// our app should run on port 8081 (HTTP)
app.listen(8081, () => {
    console.log("listening on port 8081");
});



