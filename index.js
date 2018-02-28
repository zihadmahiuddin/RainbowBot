const Discord = require('discord.js')
const Config = require('./config.json')
const Client = new Discord.Client()

Client.login(Config.token)

Client.on('ready',function(){
    console.log(`Logged in as ${Client.user.username}`)
    Client.user.setActivity('!help')
    let role = Client.guilds.find(x => x.name == Config.guild).roles.find(x => x.name == Config.role)
    index = 0
    console.log(role.name)
    let colors = [
        '9400D3','4B0082','0000FF','00FF00','FFFF00','FF7F00','FF0000'
    ]
    setInterval(function () {
        changeRoleColor(role, colors)
    } ,1000)
})

Client.on('error',function (error) {
    console.log(error.message)
})

function getColorInt() {
    if(index == 7){
        index = 1
        return index
    }
    return index++
}
async function changeRoleColor(role, colors) {
    try{
        let color = getColorInt()
        await role.setColor(colors[color])
        console.log(`Set color to: ${colors[color]}`)
    }
    catch(error){
        console.log(`Error: ${error}`)
    }
}