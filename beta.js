if (receivedMessage.channel.id == xxxxxxxxxxxxxxx) {
  if (receivedMessage.author != client.user) {
    if (receivedMessage.content.includes(client.user.toString())) {
      var region
      var userMessage = receivedMessage.content.toLowerCase().replace(client.user.toString(),"")
      if (userMessage.substring(0, 3) == "add") {
        var regionAccount = userMessage.substring(4);
          if (totalWords.replace(/ .*/,'').toLowerCase() == "euw") {
            region = "euw"
          }
          else if (totalWords.replace(/ .*/,'').toLowerCase() == "na") {
            region = "na"
          }
          else if (totalWords.replace(/ .*/,'').toLowerCase() == "eune") {
            region = "eune"
          }
        
        
        
        
        //if first word = region, store and split string
      }
    }
  }
}



//@TagBot add [region] [account]
