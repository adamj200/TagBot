const Discord = require('discord.js')
const client = new Discord.Client()

var auth = require('./auth.json');

client.on("error", (err) => {
	console.error("An error occurred. The error was: " + err)
})

client.on("message", (receivedMessage) => {
	
	if (receivedMessage.author == client.user) {
        	return
	}
	
	console.log(receivedMessage.channel.id)
	
	if (receivedMessage.channel.id == 368816534744858637) {
		receivedMessage.channel.send(receivedMessage.author + " test")
		return
	}
	
	if (receivedMessage.channel.id != 268510171125252096) {
		return
	}
	
	if (receivedMessage.content.includes(client.user.toString())) {
		if (receivedMessage.content.toLowerCase().search(new RegExp("\\b" + "admin" + "\\b")) != -1) {
			receivedMessage.channel.send(receivedMessage.author + " Don't tempt me.")
			return
		}
	}
	
	var region
	var regionCount = 0
	var skin
	var skinCount = 0

	if (receivedMessage.content.includes(client.user.toString())) {
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
		if (receivedMessage.content.toLowerCase().search(new RegExp("\\b" + "oce" + "\\b")) != -1) {
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
	
	if (regionCount == 1) {
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
		receivedMessage.member.removeRole(receivedMessage.guild.roles.find(x => x.name === "LAS").id).then(() => {
			setTimeout(function() {
				receivedMessage.member.addRole(receivedMessage.guild.roles.find(x => x.name === region).id)
			}, 500);
		})
	}
	if (skinCount == 1) {
		receivedMessage.member.removeRole(receivedMessage.guild.roles.find(x => x.name === "Rugged").id)
		receivedMessage.member.removeRole(receivedMessage.guild.roles.find(x => x.name === "Steel Legion").id)
		receivedMessage.member.removeRole(receivedMessage.guild.roles.find(x => x.name === "Rogue Admiral").id)
		receivedMessage.member.removeRole(receivedMessage.guild.roles.find(x => x.name === "Sanguine").id)
		receivedMessage.member.removeRole(receivedMessage.guild.roles.find(x => x.name === "Commando").id)
		receivedMessage.member.removeRole(receivedMessage.guild.roles.find(x => x.name === "Desert Trooper").id)
		receivedMessage.member.removeRole(receivedMessage.guild.roles.find(x => x.name === "Warring Kingdoms").id)
		receivedMessage.member.removeRole(receivedMessage.guild.roles.find(x => x.name === "Dreadknight").id)
		receivedMessage.member.removeRole(receivedMessage.guild.roles.find(x => x.name === "Noble Chroma").id)
		receivedMessage.member.removeRole(receivedMessage.guild.roles.find(x => x.name === "God King").id).then(() => {
			setTimeout(function() {
				receivedMessage.member.addRole(receivedMessage.guild.roles.find(x => x.name === skin).id)
			}, 500);
		})
	}
	
	if (receivedMessage.content.includes(client.user.toString())) {
		if (regionCount == 1 || skinCount == 1) {
			receivedMessage.channel.send(receivedMessage.author + " Tagged")
		}
		else {
			receivedMessage.channel.send(receivedMessage.author + " Unrecognised skin/region tag.")
		}
	}			
})

client.login(auth.token)
