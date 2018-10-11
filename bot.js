const Discord = require('discord.js')
const client = new Discord.Client()

var auth = require('./auth.json');

client.on("error", (err) => {
  console.error(`An error occurred. The error was: ${err}.`)
});

client.on('message', (receivedMessage) => {
	
	//console.log(receivedMessage.content)
	
	if (receivedMessage.channel.id != 268510171125252096) {
		return
	}
	
	if (receivedMessage.author == client.user) {
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
			region = "euw"
			regionCount += 1
		}
		if (receivedMessage.content.toLowerCase().search(new RegExp("\\b" + "na" + "\\b")) != -1) {
			region = "na"
			regionCount += 1
		}
		if (receivedMessage.content.toLowerCase().search(new RegExp("\\b" + "kr" + "\\b")) != -1 || receivedMessage.content.toLowerCase().search(new RegExp("\\b" + "korea" + "\\b")) != -1) {
			region = "kr"
			regionCount += 1
		}
		if (receivedMessage.content.toLowerCase().search(new RegExp("\\b" + "oce" + "\\b")) != -1) {
			region = "oce"
			regionCount += 1
		}
		if (receivedMessage.content.toLowerCase().search(new RegExp("\\b" + "eune" + "\\b")) != -1) {
			region = "eune"
			regionCount += 1
		}
		if (receivedMessage.content.toLowerCase().search(new RegExp("\\b" + "lan" + "\\b")) != -1) {
			region = "lan"
			regionCount += 1
		}
		if (receivedMessage.content.toLowerCase().search(new RegExp("\\b" + "pt" + "\\b")) != -1) {
			region = "pt"
			regionCount += 1
		}
		if (receivedMessage.content.toLowerCase().search(new RegExp("\\b" + "jpn" + "\\b")) != -1 || receivedMessage.content.toLowerCase().search(new RegExp("\\b" + "japan" + "\\b")) != -1) {
			region = "jpn"
			regionCount += 1
		}
		if (receivedMessage.content.toLowerCase().search(new RegExp("\\b" + "tr" + "\\b")) != -1 || receivedMessage.content.toLowerCase().search(new RegExp("\\b" + "turkey" + "\\b")) != -1) {
			region = "tr"
			regionCount += 1
		}
		if (receivedMessage.content.toLowerCase().search(new RegExp("\\b" + "br" + "\\b")) != -1 || receivedMessage.content.toLowerCase().search(new RegExp("\\b" + "brazil" + "\\b")) != -1) {
			region = "br"
			regionCount += 1
		}
		if (receivedMessage.content.toLowerCase().search(new RegExp("\\b" + "las" + "\\b")) != -1) {
			region = "las"
			regionCount += 1
		}
		if (receivedMessage.content.toLowerCase().search(new RegExp("\\b" + "rugged" + "\\b")) != -1) {
			skin = "rugged"
			skinCount += 1
		}
		if (receivedMessage.content.toLowerCase().search(new RegExp("\\b" + "steel" + "\\b")) != -1 || receivedMessage.content.toLowerCase().search(new RegExp("\\b" + "legion" + "\\b")) != -1  || receivedMessage.content.toLowerCase().search(new RegExp("\\b" + "steellegion" + "\\b")) != -1) {
			skin = "steel legion"
			skinCount += 1
		}
		if (receivedMessage.content.toLowerCase().search(new RegExp("\\b" + "rogue" + "\\b")) != -1 || receivedMessage.content.toLowerCase().search(new RegExp("\\b" + "admiral" + "\\b")) != -1  || receivedMessage.content.toLowerCase().search(new RegExp("\\b" + "rogueadmiral" + "\\b")) != -1) {
			skin = "rogue admiral"
			skinCount += 1
		}
		if (receivedMessage.content.toLowerCase().search(new RegExp("\\b" + "sanguine" + "\\b")) != -1) {
			skin = "sanguine"
			skinCount += 1
		}
		if (receivedMessage.content.toLowerCase().search(new RegExp("\\b" + "commando" + "\\b")) != -1) {
			skin = "commando"
			skinCount += 1
		}
		if (receivedMessage.content.toLowerCase().search(new RegExp("\\b" + "desert" + "\\b")) != -1 || receivedMessage.content.toLowerCase().search(new RegExp("\\b" + "trooper" + "\\b")) != -1  || receivedMessage.content.toLowerCase().search(new RegExp("\\b" + "deserttrooper" + "\\b")) != -1) {
			skin = "desert trooper"
			skinCount += 1
		}
		if (receivedMessage.content.toLowerCase().search(new RegExp("\\b" + "warring" + "\\b")) != -1 || receivedMessage.content.toLowerCase().search(new RegExp("\\b" + "kingdoms" + "\\b")) != -1  || receivedMessage.content.toLowerCase().search(new RegExp("\\b" + "warringkingdoms" + "\\b")) != -1) {
			skin = "warring kingdoms"
			skinCount += 1
		}
		if (receivedMessage.content.toLowerCase().search(new RegExp("\\b" + "dread" + "\\b")) != -1 || receivedMessage.content.toLowerCase().search(new RegExp("\\b" + "knight" + "\\b")) != -1  || receivedMessage.content.toLowerCase().search(new RegExp("\\b" + "dreadknight" + "\\b")) != -1) {
			skin = "dreadknight"
			skinCount += 1
		}
		if (receivedMessage.content.toLowerCase().search(new RegExp("\\b" + "noble" + "\\b")) != -1 || receivedMessage.content.toLowerCase().search(new RegExp("\\b" + "chroma" + "\\b")) != -1) {
			skin = "noble chroma"
			skinCount += 1
		}
		if (receivedMessage.content.toLowerCase().search(new RegExp("\\b" + "god" + "\\b")) != -1 || receivedMessage.content.toLowerCase().search(new RegExp("\\b" + "king" + "\\b")) != -1  || receivedMessage.content.toLowerCase().search(new RegExp("\\b" + "godking" + "\\b")) != -1) {
			skin = "god king"
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
				addRolesRegion()
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
				addRolesSkin()
			}, 500);
		})
	}
	
	function addRolesRegion() {
		if (region == "euw") {
			receivedMessage.member.addRole(receivedMessage.guild.roles.find(x => x.name === region).id)
		}
		else if (region == "na") {
			receivedMessage.member.addRole(receivedMessage.guild.roles.find(x => x.name === "NA").id)
		}
		else if (region == "kr") {
			receivedMessage.member.addRole(receivedMessage.guild.roles.find(x => x.name === "KR").id)
		}
		else if (region == "oce") {
			receivedMessage.member.addRole(receivedMessage.guild.roles.find(x => x.name === "OCE").id)
		}
		else if (region == "eune") {
			receivedMessage.member.addRole(receivedMessage.guild.roles.find(x => x.name === "EUNE").id)
		}
		else if (region == "lan") {
			receivedMessage.member.addRole(receivedMessage.guild.roles.find(x => x.name === "LAN").id)
		}
		else if (region == "pt") {
			receivedMessage.member.addRole(receivedMessage.guild.roles.find(x => x.name === "PT").id)
		}
		else if (region == "jpn") {
			receivedMessage.member.addRole(receivedMessage.guild.roles.find(x => x.name === "JPN").id)
		}
		else if (region == "tr") {
			receivedMessage.member.addRole(receivedMessage.guild.roles.find(x => x.name === "TR").id)
		}
		else if (region == "br") {
			receivedMessage.member.addRole(receivedMessage.guild.roles.find(x => x.name === "BR").id)
		}
		else if (region == "las") {
			receivedMessage.member.addRole(receivedMessage.guild.roles.find(x => x.name === "LAS").id)
		}
	}
	
	function addRolesSkin() {
		if (skin == "rugged") {
			receivedMessage.member.addRole(receivedMessage.guild.roles.find(x => x.name === "Rugged").id)
		}
		else if (skin == "steel legion") {
			receivedMessage.member.addRole(receivedMessage.guild.roles.find(x => x.name === "Steel Legion").id)
		}
		else if (skin == "rogue admiral") {
			receivedMessage.member.addRole(receivedMessage.guild.roles.find(x => x.name === "Rogue Admiral").id)
		}
		else if (skin == "sanguine") {
			receivedMessage.member.addRole(receivedMessage.guild.roles.find(x => x.name === "Sanguine").id)
		}
		else if (skin == "commando") {
			receivedMessage.member.addRole(receivedMessage.guild.roles.find(x => x.name === "Commando").id)
		}
		else if (skin == "desert trooper") {
			receivedMessage.member.addRole(receivedMessage.guild.roles.find(x => x.name === "Desert Trooper").id)
		}
		else if (skin == "warring kingdoms") {
			receivedMessage.member.addRole(receivedMessage.guild.roles.find(x => x.name === "Warring Kingdoms").id)
		}
		else if (skin == "dreadknight") {
			receivedMessage.member.addRole(receivedMessage.guild.roles.find(x => x.name === "Dreadknight").id)
		}
		else if (skin == "noble chroma") {
			receivedMessage.member.addRole(receivedMessage.guild.roles.find(x => x.name === "Noble Chroma").id)
		}
		else if (skin == "god king") {
			receivedMessage.member.addRole(receivedMessage.guild.roles.find(x => x.name === "God King").id)
		}
	}
	
	if (receivedMessage.content.includes(client.user.toString())) {
		if (regionCount == 1 || skinCount == 1) {
			receivedMessage.channel.send(receivedMessage.author + " Tagged")
		}
		else if (regionCount == 0 || skinCount == 0) {
			receivedMessage.channel.send(receivedMessage.author + " Unrecognised skin/region tag.")
		}
	}
			
})

client.login(auth.token)
