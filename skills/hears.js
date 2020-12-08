// Botkit is powered by "skills". For example this one is "hears"
// Basically the bot listens to to direct mentions and mentions (of the bot)
// and if it hears the word "!thanks" then the skill is triggered
// try changing the trigger word 
// here are the docs for more info https://botkit.ai/docs/v0/core.html
// and the Botkit Discord code which has some great examples! 
// https://github.com/brh55/botkit-discord

module.exports = function(controller) {
  controller.hears("!thanks", ["direct_mention", "mention"], (bot, message) => {
    let response;
    let sender = message.user;
    
    // Many bots use the this method but sometimes it doesn't work, for example if you mention more than one person
    //let recipient = message.mentions.users.last();
    
    
    // this method filters out any users that aren't bots
    // if you have a bot that does more administrative things like blocking people, you might want to filter even more
    // like filter out admins or the person sending the message
    // it's using Discord.js for all this, yep that's right you have access to everything in Botkit AND Discord.js
    // https://discord.js.org/#/docs/main/master/class/User
    let recipient = message.mentions.users.filter(user => user.bot === false).last();

    
    // this is a list of potential responses, it chooses from them randomly.
    // Try changing them or adding your own. 
    let responses = [
      `__Welcome to Golden Parks. This channel includes a brief summary of all information we are revealing at the moment about Golden Parks.__

**General Q&A**

To begin, what is Golden Parks?
-Well, Golden Parks is a Minecraft Bedrock Edition theme park server. 

What parks do you have?
-We are currently not open, and do not have a set opening date. However, the parks we have currently announced are Walt Disneyworld. All of our other parks will come from Florida as well.

Do you have any other social media?
-Yes, we do. Our Twitter and YouTube accounts are currently live on both sites right now, though will not have any content posted to them until we are closer to our opening date.

**Discord Q&A**

What are the channels used for on the Discord?
-The General channel is used for all guests to communicate with each other. The Speculation channel is for everyone to ponder and share their views on Golden Parks. The Questions channel is for everyone to ask their burning Golden Parks questions, if it wasn't answered here of course.

How do I use the Voice Channels?
-The Voice Channels are quite simple to use. The General channel is for general guest voice communication. The Music channel is for guests to choose their own music. You control the music via the Fredbear bot, and its prefix is (;;). Thus to pick a song, use the command ;;p (Song Title). Finally, the Radio channel is a 24/7 music channel, where you can listen to whatever is currently playing. During this Christmas season, we will have Christmas music playing, though if you would like to request a new station, then ping the @DJ role.

__Thanks for reading, and we hope you enjoy your stay in Florida.__`
    ]

    response = responses[Math.floor(Math.random() * responses.length)];
    
    bot.reply(message, response);
  });
}; 
