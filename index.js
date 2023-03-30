const express = require('express')
const app = express()
const fs = require('fs');
const PORT= 9000;  // this my port number assingned the one varible where we want can we use it

app.get('/', function (req, res) {
    var currentdate = JSON.stringify(new Date());               // get the time from using the js methods
    var name = JSON.parse(currentdate).concat((".txt"));        // concat the and some usinig some array method over here
    var newStr = name.split('');
    newStr = newStr.splice(10,14);
    newStr = newStr.join('');
    console.log(newStr);
    fs.writeFileSync("./date_time.txt",newStr,"UTF8")           // Create new file with curent date nd time
    fs.readFile(`./date_time/${newStr}`,'UTF-8',(err,data)=>{   //read the file after create new file 
        console.log("File is created")                          //once confirm here if file will create or not getting output on console
        res.send(data) // getting response data from what we did on craete a new file                    
        res.end()
    })
})
app.listen(PORT,console.log("Server is started:",PORT)); // once confirm server is start ot not

