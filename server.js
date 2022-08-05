const express = require("express")
const app = express()
const PORT = 8000

const rappers = {
  "21 savage": {
    age: 29,
    birthname: "Smokey",
    birthLocation: "NunYa",
  },
  "post malone": {
    age: 27,
    birthname: "Austin Richard Post",
    birthLocation: "Syracuse, New York",
  },
  "dr. dre": {
    age: 57,
    birthname: "Andre Romelle Young",
    birthLocation: "Compton, California",
  },
  nope: {
    age: 0,
    birthname: "NOPPPPE",
    birthLocation: "SHUT THE FUCK UP",
  },
}

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html")
})

app.get("/api/:rapperName", (req, res) => {
  const rappersName = req.params.rapperName.toLowerCase()
  //res.json(rappers)
  if (rappers[rappersName]) {
    res.json(rappers[rappersName])
  } else {
    res.json(rappers["nope"])
  }
})

app.listen(PORT, () => {
  console.log(`The server is running on ${PORT}! You better go catch it!`)
})
