const file = require("fs")
const myExpress = require("express")
const path = require("path")

const xp = myExpress()
xp.use(myExpress.urlencoded({ extended: false }))

xp.get("/", function(req, res) {
    res.send("<form action='/take-name' method='POST'><label>Name</label><input type='text' name='user'></input><button>Submit</button></form>")
})

xp.get("/time", function(req, res) {
    res.send("<h1>" + new Date().toISOString() + "</h1>")
})

xp.post("/take-name", function(req, res) {
    const userName = req.body.user
    const myfile = path.join(__dirname, "user.json");

    const userFile = JSON.parse(file.readFileSync(myfile))
    userFile.push(userName)
    file.writeFileSync(myfile, JSON.stringify(userFile))
    res.send(`<h1>user ${userName} has been stored</h1>`)
})

xp.get("/user", function(req, res) {
    const myfile = path.join(__dirname, "user.json");
    const userFile = JSON.parse(file.readFileSync(myfile))
    let userList = "<ul>";
    for (const user of userFile) {
        userList += "<li>" + user + "</li>"
    }
    userList += "</ul>"
    res.send(userList)
})

xp.listen(3000)