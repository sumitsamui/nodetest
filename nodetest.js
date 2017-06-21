
// My first node js work .
console.log("Hello world");

var httpsumit =  require("http");
httpsumit.createServer
    (
    function (request, response) {

        // Send the HTTP header
        // HTTP Status: 200 : OK
        // Content Type: text/plain
        response.writeHead(200, {'Content-Type': 'text/plain'});
        // Send the response body as "Hello World"
        Response.end('Hellow world');

    }
    ).listen(8082);

// Console will print the message
console.log('Server running at http://127.0.0.1:8082/');
//import event module
var events = require('events');
//create an event emitter object
var eventEmitter = new events.EventEmitter();

//create an event handler

var connectionHandler = function connected ()
{
console.log("connection successful");
//var eventemitter = new emits.eventemitter();
eventEmitter.emit('data_received');
}

//bind the connection event with the handler 
eventEmitter.on('connection',connectionHandler);
//bind the connection event with the annonymous function
eventEmitter.on('data_received',function(){console.log('data received successfully');});

eventEmitter.emit('connection');
console.log("Program ended");

// File read 

var fs = require("fs");
fs.readFile('test.txt',function(err,data)
{
    if(err)
    {
        console.log(err.stack);
        return;
    }
    //else
    console.log('File read sucsess');
    
}
);
console.log('Program complete');


var buf = new Buffer('Simply Easy Learning');
console.log(buf);
var json = buf.toJSON(buf);
console.log(json);
    
var buffer1 = new Buffer('ABC');
var buffer2 = new Buffer('ABCD');
var result = buffer1.compare(buffer2);
if(result < 0) {
console.log(buffer1 +" comes before " + buffer2);
}else if(result == 0){
console.log(buffer1 +" is same as " + buffer2);
}else {
console.log(buffer1 +" comes after " + buffer2);
}

//writing a file
var fs = require("fs");
console.log("Going to write into existing file");
fs.writeFile('input.txt', 'Simply Easy Learning!', function(err) {
if (err) {
return console.error(err);
}
console.log("Data written successfully!");
console.log("Let's read newly written data");
fs.readFile('input.txt', function (err, data) {
if (err) {
return console.error(err);
}
console.log("Asynchronous read: " + data.toString());
});
});
//open and closing file 
var fs = require("fs");
var buf = new Buffer(1024);
console.log("Going to open an existing file");
fs.open('input.txt', 'r+', function(err, fd) {
if (err) {
return console.error(err);
}
console.log("File opened successfully!");
console.log("Going to read the file");
fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
if (err){
console.log(err);
}
// Print only read bytes to avoid junk.
if(bytes > 0){
console.log(buf.slice(0, bytes).toString());
}
// Close the opened file.
fs.close(fd, function(err){
if (err){
console.log(err);
}
console.log("File closed successfully.");
});
});
});

console.log( __filename );


