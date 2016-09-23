/**
 * Created by Jungle on 23/09/2016.
 */

//link to the connect module
var connect = require('connect');

// create a reference of the connect object
var app = new connect();

// link to the URL module
var url = require('url');

// Write a function that Accept 3 QueryString parameters: method, x, and y
var calculator = function (req, res, next) {

    // URL queries are parsed
    var qs = url.parse(req.url, true).query;

    // Parsed queries are assigned variables
    var meth = qs.method;
    var x = qs.x;
    var y = qs.y;
    var result;

    // Run a loop to output based on method chosen (valid: add, subtract, multiply, divide)

    // Add
    if(meth == 'add'){
        // calculate result & print
        result = parseFloat(x) + parseFloat(y);
        res.end(x + " + " + y +' = ' + result);
    }
    // Subtract
    else if(meth == 'subtract'){
        // calculate result & print
        result = parseFloat(x) - parseFloat(y);
        res.end(x + " - " + y +' = ' + result);
    }
    // Multiply
    else if(meth == 'multiply'){
        // calculate result & print
        result = parseFloat(x) * parseFloat(y);
        res.end(x + " * " + y +' = ' + result);
    }
    // Division
    else if(meth == 'divide'){
        // calculate result & print
        result = parseFloat(x) / parseFloat(y);
        res.end(x + " / " + y +' = ' + result);
    }
    //Print Error message
    else (
        //print error message
        res.end('Error - Unknown method!')
        )


};

app.use(calculator);

// start the web server on port 3000
app.listen(3000);

// display that the server is running
console.log('Connect running on port 3000');