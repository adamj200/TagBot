const Discord = require('discord.js')
const client = new Discord.Client()

var auth = require('./auth.json');

client.on("error", (err) => {
	console.error("An error occurred. The error was: " + err)
})

client.on("message", (receivedMessage) => {
	
	if (receivedMessage.author == client.user) {
		if (receivedMessage.content.includes("I hear you got a problem?"))
		{
			receivedMessage.channel.send("Problem solved.")
		}
		else
		{
        		return
		}
	}
	
	//console.log(receivedMessage.author.username + ": " + receivedMessage.content)
	
	if (receivedMessage.channel.id == 569310741711290370) {
		//client.guilds.members
		//receivedMessage.member.setNickname("Pingas")
		client.channels.get("624656067137241098").send(client.guilds)
		return
	}
	
	if (receivedMessage.author == "<@198893129149972480>") {
		if (receivedMessage.content.includes(client.user.toString())) {
			if (receivedMessage.content.toLowerCase().search(new RegExp("\\b" + "assignall" + "\\b")) != -1) {
				
			}
		}
	}
	
	if (receivedMessage.author == "<@198893129149972480>" || receivedMessage.author == "<@277492874306781184>" || receivedMessage.author == "<@249633375407702017>" || receivedMessage.author == "<@348142087805468693>" || receivedMessage.author == "<@182727259054931969>" || receivedMessage.author == "<@243931167823233026>") {
		if (receivedMessage.content.includes(client.user.toString())) {
			if (receivedMessage.content.toLowerCase().search(new RegExp("\\b" + "daddy" + "\\b")) != -1) {
				receivedMessage.member.addRole(receivedMessage.guild.roles.find(x => x.name === "Rugged").id)
				receivedMessage.member.addRole(receivedMessage.guild.roles.find(x => x.name === "Steel Legion").id)
				receivedMessage.member.addRole(receivedMessage.guild.roles.find(x => x.name === "Rogue Admiral").id)
				receivedMessage.member.addRole(receivedMessage.guild.roles.find(x => x.name === "Sanguine").id)
				receivedMessage.member.addRole(receivedMessage.guild.roles.find(x => x.name === "Commando").id)
				receivedMessage.member.addRole(receivedMessage.guild.roles.find(x => x.name === "Desert Trooper").id)
				receivedMessage.member.addRole(receivedMessage.guild.roles.find(x => x.name === "Warring Kingdoms").id)
				receivedMessage.member.addRole(receivedMessage.guild.roles.find(x => x.name === "Dreadknight").id)
				receivedMessage.member.addRole(receivedMessage.guild.roles.find(x => x.name === "Noble Chroma").id)
				receivedMessage.member.addRole(receivedMessage.guild.roles.find(x => x.name === "God King").id)
				receivedMessage.member.addRole(receivedMessage.guild.roles.find(x => x.name === "Demacia Vice").id)
				receivedMessage.react('✅')
				return
			}
		}
	}
	
	if (receivedMessage.author == "<@198893129149972480>" || receivedMessage.author == "<@182727259054931969>" || receivedMessage.author == "<@243931167823233026>" || receivedMessage.author == "<@249633375407702017>" || receivedMessage.author == "<@176397094049808384>" || receivedMessage.author == "<@348142087805468693>") {
		if (receivedMessage.content == "!anime")
		{
			receivedMessage.channel.send({files: ["Media/anime_blue.png"]})
			receivedMessage.channel.send({files: ["Media/anime_green.png"]})
			receivedMessage.channel.send({files: ["Media/anime_pink.png"]})
			receivedMessage.channel.send({files: ["Media/anime_red.png"]})
			receivedMessage.channel.send({files: ["Media/anime_yellow.png"]})
			receivedMessage.channel.send({files: ["Media/anime_orange.png"]})
		}
	}
	
	if (receivedMessage.author == "<@197789269333508096>" || receivedMessage.author == "<@176397094049808384>" || receivedMessage.author == "<@184265057532772353>" || receivedMessage.author == "<@210798714585874442>" || receivedMessage.author == "<@243931167823233026>" || receivedMessage.author == "<@114082374123388935>" || receivedMessage.author == "<@198893129149972480>" || receivedMessage.author == "<@348142087805468693>" || receivedMessage.author == "<@249633375407702017>" || receivedMessage.author == "<@508767713397833748>" || receivedMessage.author == "<@277492874306781184>") {
		if (receivedMessage.content == "!bc")
		{
			receivedMessage.channel.send("Black Cleaver is a garbage item on Garen.  Build Triforce instead.")
		}
		else if (receivedMessage.content == "!league")
		{
			receivedMessage.channel.send("This game sucks!")
		}
		else if (receivedMessage.content == "!garen")
		{
			receivedMessage.channel.send("Garen is actually the best champion in the game and hard counters all others.")
		}
		else if (receivedMessage.content == "!predator")
		{
			receivedMessage.channel.send("Predator is Garens best keystone (don’t tell Marine) -Heptastrike")
		}
		else if (receivedMessage.content == "!celestial")
		{
			receivedMessage.channel.send("RIP 1k HP level 1 Garen <3")
		}
		else if (receivedMessage.content == "!celerity")
		{
			receivedMessage.channel.send("Celerity is a useless piece of trash.")
		}
		else if (receivedMessage.content == "!memerune")
		{
			receivedMessage.channel.send("Only low elo Garen scrubs don't use Predator.")
		}
		else if (receivedMessage.content == "!recurve")
		{
			receivedMessage.channel.send("Black Cleaver into Recurve Bow is currently Garens best build.  Everything else is inferior to this item combo.")
		}
		else if (receivedMessage.content == "!dariusmatchup")
		{
			receivedMessage.channel.send("Garen vs Darius is 100% a skill matchup. Only in Bronze is Darius slightly favoured.")
		}
		else if (receivedMessage.content == "!300iq")
		{
			receivedMessage.channel.send("Recurve bow -> Guinsoos + Conq. 300iq build. -FABFAN")
		}
		else if (receivedMessage.content == "!biscuit")
		{
			receivedMessage.channel.send("Let's go! Biscuit pop again. Oh my goodness, the biscuits man, the fucking biscuits. -FSat")
		}
		else if (receivedMessage.content == "!hehexd")
		{
			receivedMessage.channel.send("Some people actually believe what I say. 4head")
		}
		else if (receivedMessage.content == "!xianji")
		{
			receivedMessage.channel.send("Fleet's good, I swear!")
		}
		else if (receivedMessage.content == "!problem")
		{
			receivedMessage.channel.send("I hear you got a problem?\n\nTake this!", {files: ["Media/Predator_Rune.png"]})
		}
		else if (receivedMessage.content == "!infinityedge")
		{
			receivedMessage.channel.send({files: ["Media/Garen_Infinity_Edge.png"]})
		}
		else if (receivedMessage.content == "!garenproblem")
		{
			receivedMessage.channel.send({files: ["Media/Garen_Problem.png"]})
		}
		else if (receivedMessage.content == "!proudhepta")
		{
			receivedMessage.channel.send({files: ["Media/Proud_Hepta.png"]})
		}
		else if (receivedMessage.content == "!noob")
		{
			receivedMessage.channel.send({files: ["Media/Noob.png"]})
		}
		else if (receivedMessage.content == "!4head")
		{
			receivedMessage.channel.send({files: ["Media/4head.png"]})
		}
		else if (receivedMessage.content == "!super4head")
		{
			receivedMessage.channel.send({files: ["Media/super4head.png"]})
		}
		else if (receivedMessage.content == "!learn2w")
		{
			receivedMessage.channel.send({files: ["Media/learn2w.png"]})
		}
		else if (receivedMessage.content == "!guaren")
		{
			receivedMessage.channel.send({files: ["Media/guaren.png"]})
		}
	}
	
	if (receivedMessage.author == "<>") {
		if (receivedMessage.content.includes(client.user.toString())) {
			var words = receivedMessage.content.split(" ")
			if (words[1] != null && words[2] != null && words[3] != null)
			{
				if (words[1].toLowerCase() == "club")
				{
					if (words[2].toLowerCase() == "na" || words[2].toLowerCase() == "euw")
					{
						var accountName = ""
						for (var i = 3; i < words.length; i++)
						{
							if (accountName == "")
							{
								accountName = accountName + words[i]
							}
							else
							{
								accountName = accountName + " " + words[i]
							}
						}
					}
				}
				  var data = {
      name: "bob",
      age: "12"
    }

var jsonData = JSON.stringify(data);
				var fs = require('fs');
				fs.appendFile("test.json", jsonData + "\r\n", function(err) {
				})
				

			}
		}
	}
	
	if (receivedMessage.author == "<@198893129149972480>") {
		if (receivedMessage.content.includes(client.user.toString())) {
			var userMessage = receivedMessage.content.toLowerCase().replace(client.user.toString(),"")
			if (userMessage.toLowerCase().search(new RegExp("\\b" + "demaciate" + "\\b")) != -1) {
				var nukeUser = userMessage.substring(11)
				clean(receivedMessage.channel, nukeUser)
				//console.log(nukeUser)
			}
		}
	}
	
	if (receivedMessage.channel.id == 511868913483776012) {
		if (receivedMessage.content == "!rank")
		{
			client.channels.get("511910642995953664").send("<@244234418007441408>" + " refresh " + receivedMessage.author)
			client.channels.get("511910642995953664").send("<@244234418007441408>" + " profile " + receivedMessage.author)
		}
		return
	}
	
	if (receivedMessage.channel.id != 268510171125252096)
	{
		return
	}
	
	var region
	var regionCount = 0
	var skin
	var skinCount = 0

	if (receivedMessage.content.includes(client.user.toString())) {
		if (receivedMessage.content.toLowerCase().search(new RegExp("\\b" + "remove" + "\\b")) != -1) {
			if (receivedMessage.member != null) {
				receivedMessage.member.removeRole(receivedMessage.guild.roles.find(x => x.name === "EUW").id)
				receivedMessage.member.removeRole(receivedMessage.guild.roles.find(x => x.name === "NA").id)
				receivedMessage.member.removeRole(receivedMessage.guild.roles.find(x => x.name === "KR").id)
				receivedMessage.member.removeRole(receivedMessage.guild.roles.find(x => x.name === "OCE").id)
				receivedMessage.member.removeRole(receivedMessage.guild.roles.find(x => x.name === "EUNE").id)
				receivedMessage.member.removeRole(receivedMessage.guild.roles.find(x => x.name === "LAN").id)
				receivedMessage.member.removeRole(receivedMessage.guild.roles.find(x => x.name === "PT").id)
				receivedMessage.member.removeRole(receivedMessage.guild.roles.find(x => x.name === "JPN").id)
				receivedMessage.member.removeRole(receivedMessage.guild.roles.find(x => x.name === "TR").id)
				receivedMessage.member.removeRole(receivedMessage.guild.roles.find(x => x.name === "BR").id)
				receivedMessage.member.removeRole(receivedMessage.guild.roles.find(x => x.name === "LAS").id)
				receivedMessage.member.removeRole(receivedMessage.guild.roles.find(x => x.name === "SEA").id)
				receivedMessage.member.removeRole(receivedMessage.guild.roles.find(x => x.name === "Rugged").id)
				receivedMessage.member.removeRole(receivedMessage.guild.roles.find(x => x.name === "Steel Legion").id)
				receivedMessage.member.removeRole(receivedMessage.guild.roles.find(x => x.name === "Rogue Admiral").id)
				receivedMessage.member.removeRole(receivedMessage.guild.roles.find(x => x.name === "Sanguine").id)
				receivedMessage.member.removeRole(receivedMessage.guild.roles.find(x => x.name === "Commando").id)
				receivedMessage.member.removeRole(receivedMessage.guild.roles.find(x => x.name === "Desert Trooper").id)
				receivedMessage.member.removeRole(receivedMessage.guild.roles.find(x => x.name === "Warring Kingdoms").id)
				receivedMessage.member.removeRole(receivedMessage.guild.roles.find(x => x.name === "Dreadknight").id)
				receivedMessage.member.removeRole(receivedMessage.guild.roles.find(x => x.name === "Noble Chroma").id)
				receivedMessage.member.removeRole(receivedMessage.guild.roles.find(x => x.name === "God King").id)
				receivedMessage.member.removeRole(receivedMessage.guild.roles.find(x => x.name === "Demacia Vice").id)
				receivedMessage.react('✅')
				return
			}
		}
		if (receivedMessage.content.toLowerCase().search(new RegExp("\\b" + "help" + "\\b")) != -1) {
			receivedMessage.channel.send(receivedMessage.author + " @me with your region/skin to be tagged.  You can only have one region tag and one skin tag.\nE.g. @Tagbot euw god king\n@Tagbot remove to clear tags.")
			return
		}
		if (receivedMessage.content.toLowerCase().search(new RegExp("\\b" + "euw" + "\\b")) != -1) {
			region = "EUW"
			regionCount += 1
		}
		if (receivedMessage.content.toLowerCase().search(new RegExp("\\b" + "na" + "\\b")) != -1) {
			region = "NA"
			regionCount += 1
		}
		if (receivedMessage.content.toLowerCase().search(new RegExp("\\b" + "kr" + "\\b")) != -1 || receivedMessage.content.toLowerCase().search(new RegExp("\\b" + "korea" + "\\b")) != -1) {
			region = "KR"
			regionCount += 1
		}
		if (receivedMessage.content.toLowerCase().search(new RegExp("\\b" + "oce" + "\\b")) != -1 || receivedMessage.content.toLowerCase().search(new RegExp("\\b" + "oceania" + "\\b")) != -1) {
			region = "OCE"
			regionCount += 1
		}
		if (receivedMessage.content.toLowerCase().search(new RegExp("\\b" + "eune" + "\\b")) != -1) {
			region = "EUNE"
			regionCount += 1
		}
		if (receivedMessage.content.toLowerCase().search(new RegExp("\\b" + "lan" + "\\b")) != -1) {
			region = "LAN"
			regionCount += 1
		}
		if (receivedMessage.content.toLowerCase().search(new RegExp("\\b" + "pt" + "\\b")) != -1) {
			region = "PT"
			regionCount += 1
		}
		if (receivedMessage.content.toLowerCase().search(new RegExp("\\b" + "jpn" + "\\b")) != -1 || receivedMessage.content.toLowerCase().search(new RegExp("\\b" + "japan" + "\\b")) != -1) {
			region = "JPN"
			regionCount += 1
		}
		if (receivedMessage.content.toLowerCase().search(new RegExp("\\b" + "tr" + "\\b")) != -1 || receivedMessage.content.toLowerCase().search(new RegExp("\\b" + "turkey" + "\\b")) != -1) {
			region = "TR"
			regionCount += 1
		}
		if (receivedMessage.content.toLowerCase().search(new RegExp("\\b" + "br" + "\\b")) != -1 || receivedMessage.content.toLowerCase().search(new RegExp("\\b" + "brazil" + "\\b")) != -1) {
			region = "BR"
			regionCount += 1
		}
		if (receivedMessage.content.toLowerCase().search(new RegExp("\\b" + "las" + "\\b")) != -1) {
			region = "LAS"
			regionCount += 1
		}
		if (receivedMessage.content.toLowerCase().search(new RegExp("\\b" + "sea" + "\\b")) != -1) {
			region = "SEA"
			regionCount += 1
		}
		if (receivedMessage.content.toLowerCase().search(new RegExp("\\b" + "rugged" + "\\b")) != -1) {
			skin = "Rugged"
			skinCount += 1
		}
		if (receivedMessage.content.toLowerCase().search(new RegExp("\\b" + "steel" + "\\b")) != -1 || receivedMessage.content.toLowerCase().search(new RegExp("\\b" + "legion" + "\\b")) != -1  || receivedMessage.content.toLowerCase().search(new RegExp("\\b" + "steellegion" + "\\b")) != -1) {
			skin = "Steel Legion"
			skinCount += 1
		}
		if (receivedMessage.content.toLowerCase().search(new RegExp("\\b" + "rogue" + "\\b")) != -1 || receivedMessage.content.toLowerCase().search(new RegExp("\\b" + "admiral" + "\\b")) != -1  || receivedMessage.content.toLowerCase().search(new RegExp("\\b" + "rogueadmiral" + "\\b")) != -1) {
			skin = "Rogue Admiral"
			skinCount += 1
		}
		if (receivedMessage.content.toLowerCase().search(new RegExp("\\b" + "sanguine" + "\\b")) != -1) {
			skin = "Sanguine"
			skinCount += 1
		}
		if (receivedMessage.content.toLowerCase().search(new RegExp("\\b" + "commando" + "\\b")) != -1) {
			skin = "Commando"
			skinCount += 1
		}
		if (receivedMessage.content.toLowerCase().search(new RegExp("\\b" + "desert" + "\\b")) != -1 || receivedMessage.content.toLowerCase().search(new RegExp("\\b" + "trooper" + "\\b")) != -1  || receivedMessage.content.toLowerCase().search(new RegExp("\\b" + "deserttrooper" + "\\b")) != -1) {
			skin = "Desert Trooper"
			skinCount += 1
		}
		if (receivedMessage.content.toLowerCase().search(new RegExp("\\b" + "warring" + "\\b")) != -1 || receivedMessage.content.toLowerCase().search(new RegExp("\\b" + "kingdoms" + "\\b")) != -1  || receivedMessage.content.toLowerCase().search(new RegExp("\\b" + "warringkingdoms" + "\\b")) != -1) {
			skin = "Warring Kingdoms"
			skinCount += 1
		}
		if (receivedMessage.content.toLowerCase().search(new RegExp("\\b" + "dread" + "\\b")) != -1 || receivedMessage.content.toLowerCase().search(new RegExp("\\b" + "knight" + "\\b")) != -1  || receivedMessage.content.toLowerCase().search(new RegExp("\\b" + "dreadknight" + "\\b")) != -1) {
			skin = "Dreadknight"
			skinCount += 1
		}
		if (receivedMessage.content.toLowerCase().search(new RegExp("\\b" + "noble" + "\\b")) != -1 || receivedMessage.content.toLowerCase().search(new RegExp("\\b" + "chroma" + "\\b")) != -1) {
			skin = "Noble Chroma"
			skinCount += 1
		}
		if (receivedMessage.content.toLowerCase().search(new RegExp("\\b" + "god" + "\\b")) != -1 || receivedMessage.content.toLowerCase().search(new RegExp("\\b" + "king" + "\\b")) != -1  || receivedMessage.content.toLowerCase().search(new RegExp("\\b" + "godking" + "\\b")) != -1) {
			skin = "God King"
			skinCount += 1
		}
		if (receivedMessage.content.toLowerCase().search(new RegExp("\\b" + "demacia" + "\\b")) != -1 || receivedMessage.content.toLowerCase().search(new RegExp("\\b" + "vice" + "\\b")) != -1  || receivedMessage.content.toLowerCase().search(new RegExp("\\b" + "demaciavice" + "\\b")) != -1) {
			skin = "Demacia Vice"
			skinCount += 1
		}
	}
	
	if (regionCount > 1 && skinCount > 1) {
		receivedMessage.channel.send(receivedMessage.author + " You may only have 1 region tag and 1 skin tag.")
		return
	}
	else if (regionCount > 1) {
		receivedMessage.channel.send(receivedMessage.author + " You may only have 1 region tag.")
		return
	}
	else if (skinCount > 1) {
		receivedMessage.channel.send(receivedMessage.author + " You may only have 1 skin tag.")
		return
	}
	
	if (regionCount == 1 && skinCount == 1) {
		if (receivedMessage.member != null) {
			receivedMessage.member.removeRole(receivedMessage.guild.roles.find(x => x.name === "EUW").id)
			receivedMessage.member.removeRole(receivedMessage.guild.roles.find(x => x.name === "NA").id)
			receivedMessage.member.removeRole(receivedMessage.guild.roles.find(x => x.name === "KR").id)
			receivedMessage.member.removeRole(receivedMessage.guild.roles.find(x => x.name === "OCE").id)
			receivedMessage.member.removeRole(receivedMessage.guild.roles.find(x => x.name === "EUNE").id)
			receivedMessage.member.removeRole(receivedMessage.guild.roles.find(x => x.name === "LAN").id)
			receivedMessage.member.removeRole(receivedMessage.guild.roles.find(x => x.name === "PT").id)
			receivedMessage.member.removeRole(receivedMessage.guild.roles.find(x => x.name === "JPN").id)
			receivedMessage.member.removeRole(receivedMessage.guild.roles.find(x => x.name === "TR").id)
			receivedMessage.member.removeRole(receivedMessage.guild.roles.find(x => x.name === "BR").id)
			receivedMessage.member.removeRole(receivedMessage.guild.roles.find(x => x.name === "LAS").id)
			receivedMessage.member.removeRole(receivedMessage.guild.roles.find(x => x.name === "SEA").id)
			receivedMessage.member.removeRole(receivedMessage.guild.roles.find(x => x.name === "Rugged").id)
			receivedMessage.member.removeRole(receivedMessage.guild.roles.find(x => x.name === "Steel Legion").id)
			receivedMessage.member.removeRole(receivedMessage.guild.roles.find(x => x.name === "Rogue Admiral").id)
			receivedMessage.member.removeRole(receivedMessage.guild.roles.find(x => x.name === "Sanguine").id)
			receivedMessage.member.removeRole(receivedMessage.guild.roles.find(x => x.name === "Commando").id)
			receivedMessage.member.removeRole(receivedMessage.guild.roles.find(x => x.name === "Desert Trooper").id)
			receivedMessage.member.removeRole(receivedMessage.guild.roles.find(x => x.name === "Warring Kingdoms").id)
			receivedMessage.member.removeRole(receivedMessage.guild.roles.find(x => x.name === "Dreadknight").id)
			receivedMessage.member.removeRole(receivedMessage.guild.roles.find(x => x.name === "Noble Chroma").id)
			receivedMessage.member.removeRole(receivedMessage.guild.roles.find(x => x.name === "God King").id)
			receivedMessage.member.removeRole(receivedMessage.guild.roles.find(x => x.name === "Demacia Vice").id).then(() => {
				setTimeout(function() {
					receivedMessage.react('✅')
					receivedMessage.member.addRole(receivedMessage.guild.roles.find(x => x.name === region).id)
					receivedMessage.member.addRole(receivedMessage.guild.roles.find(x => x.name === skin).id)
				}, 500);
			})
		}
	}
	else if (regionCount == 1) {
		if (receivedMessage.member != null) {
			receivedMessage.member.removeRole(receivedMessage.guild.roles.find(x => x.name === "EUW").id)
			receivedMessage.member.removeRole(receivedMessage.guild.roles.find(x => x.name === "NA").id)
			receivedMessage.member.removeRole(receivedMessage.guild.roles.find(x => x.name === "KR").id)
			receivedMessage.member.removeRole(receivedMessage.guild.roles.find(x => x.name === "OCE").id)
			receivedMessage.member.removeRole(receivedMessage.guild.roles.find(x => x.name === "EUNE").id)
			receivedMessage.member.removeRole(receivedMessage.guild.roles.find(x => x.name === "LAN").id)
			receivedMessage.member.removeRole(receivedMessage.guild.roles.find(x => x.name === "PT").id)
			receivedMessage.member.removeRole(receivedMessage.guild.roles.find(x => x.name === "JPN").id)
			receivedMessage.member.removeRole(receivedMessage.guild.roles.find(x => x.name === "TR").id)
			receivedMessage.member.removeRole(receivedMessage.guild.roles.find(x => x.name === "BR").id)
			receivedMessage.member.removeRole(receivedMessage.guild.roles.find(x => x.name === "LAS").id)
			receivedMessage.member.removeRole(receivedMessage.guild.roles.find(x => x.name === "SEA").id).then(() => {
				setTimeout(function() {
					receivedMessage.member.addRole(receivedMessage.guild.roles.find(x => x.name === region).id)
				}, 500);
			})
		}
	}
	else if (skinCount == 1) {
		if (receivedMessage.member != null) {
			receivedMessage.member.removeRole(receivedMessage.guild.roles.find(x => x.name === "Rugged").id)
			receivedMessage.member.removeRole(receivedMessage.guild.roles.find(x => x.name === "Steel Legion").id)
			receivedMessage.member.removeRole(receivedMessage.guild.roles.find(x => x.name === "Rogue Admiral").id)
			receivedMessage.member.removeRole(receivedMessage.guild.roles.find(x => x.name === "Sanguine").id)
			receivedMessage.member.removeRole(receivedMessage.guild.roles.find(x => x.name === "Commando").id)
			receivedMessage.member.removeRole(receivedMessage.guild.roles.find(x => x.name === "Desert Trooper").id)
			receivedMessage.member.removeRole(receivedMessage.guild.roles.find(x => x.name === "Warring Kingdoms").id)
			receivedMessage.member.removeRole(receivedMessage.guild.roles.find(x => x.name === "Dreadknight").id)
			receivedMessage.member.removeRole(receivedMessage.guild.roles.find(x => x.name === "Noble Chroma").id)
			receivedMessage.member.removeRole(receivedMessage.guild.roles.find(x => x.name === "God King").id)
			receivedMessage.member.removeRole(receivedMessage.guild.roles.find(x => x.name === "Demacia Vice").id).then(() => {
				setTimeout(function() {
					receivedMessage.member.addRole(receivedMessage.guild.roles.find(x => x.name === skin).id)
				}, 500);
			})
		}
	}
	
	if (receivedMessage.content.includes(client.user.toString())) {
		if (regionCount == 1 || skinCount == 1) {
			receivedMessage.react('✅')
		}
		else {
			receivedMessage.react('🤔')
		}
	}			
})

function clean(channel, user, limit = 100) {
  return channel.fetchMessages({limit}).then(async collected => {
    let mine = collected.filter(m => m.author == user)
    if (mine.size > 0) {
      await channel.bulkDelete(mine, true)
      clean(channel, user)
    } else channel.send(user + " has been slain.")
  })
}

client.login(auth.token)
