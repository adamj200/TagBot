const fs = require("fs")

if (receivedMessage.channel.id == xxxxxxxxxxxxxxx) {
  if (receivedMessage.author != client.user) {
    if (receivedMessage.content.includes(client.user.toString())) {
      var region
      var account
      var userMessage = receivedMessage.content.toLowerCase().replace(client.user.toString(),"")
      if (userMessage.substring(0, 3) == "add") {
        var regionAccount = userMessage.substring(4)
          if (regionAccount.replace(/ .*/,'').toLowerCase() == "euw") {
            region = "euw"
            account = regionAccount.substring(4)
          }
          else if (regionAccount.replace(/ .*/,'').toLowerCase() == "na") {
            region = "na"
            account = regionAccount.substring(3)
          }
          else if (regionAccount.replace(/ .*/,'').toLowerCase() == "eune") {
            region = "eune"
            account = regionAccount.substring(5)
          }
      }
      
      let accounts = JSON.parse(fs.readFileSync("./points.json", "utf8"))
      
      fs.writeFile("./accounts.json", JSON.stringify(points), (err) => {
    if (err) console.error(err)
  })
        
        
        

    }
  }
}



//@TagBot add [region] [account]
