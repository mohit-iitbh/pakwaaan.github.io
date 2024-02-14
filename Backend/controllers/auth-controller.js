// In an Express.js application, a "controller" refers to a part of code that is responsible for handling
// the Application's logic. Controllers are typically to process incoming requests, interact with
// models (data sources), and send responses back to clients. They help organize your application by
// separating concerns and following the MVC (Model-View-Controller) design pattern.



// *----------------
// Home Logic
// *----------------

const home = async(req, res) => {
    try {
        res.status(200).send("Welcome to BackEnd using express.Router() & Controllers"); 
    } catch (error) {
        console.log(error);
    }
};


// *----------------
// Register Logic
// *----------------

const register = (req, res) => {
    try {
        console.log(req.body);  // will print on the data on the terminal
        res.status(200).json({message: req.body});
    } catch (error) {
        res.status(500).json("internal server error");
    }
};

module.exports = {home, register};
