
//      ___           ___           ___                       ___           ___     
//     /\  \         /\  \         /\  \          ___        /\  \         /\  \    
//    /::\  \       /::\  \       /::\  \        /\  \      /::\  \        \:\  \   
//   /:/\ \  \     /:/\:\  \     /:/\:\  \       \:\  \    /:/\:\  \        \:\  \  
//  _\:\~\ \  \   /:/  \:\  \   /::\~\:\  \      /::\__\  /::\~\:\  \       /::\  \ 
// /\ \:\ \ \__\ /:/__/ \:\__\ /:/\:\ \:\__\  __/:/\/__/ /:/\:\ \:\__\     /:/\:\__\
// \:\ \:\ \/__/ \:\  \  \/__/ \/_|::\/:/  / /\/:/  /    \/__\:\/:/  /    /:/  \/__/
//  \:\ \:\__\    \:\  \          |:|::/  /  \::/__/          \::/  /    /:/  /     
//   \:\/:/  /     \:\  \         |:|\/__/    \:\__\           \/__/     \/__/      
//    \::/  /       \:\__\        |:|  |       \/__/                                
//     \/__/         \/__/         \|__|                                            

//Entry default is a right-facing carrot
var entry = ">"; //Establishing variables needed for the history splash to work (ip & date)

var baseconnect = '';
var today = new Date(); //Not even sure if below does anything, but I tried it to help something and later it worked so I'm not taking it out

$.ajaxSetup({
"async": false
}); //Below gets IP and adds it and date into history by default

$.getJSON("https://api.ipify.org/?format=json", function (data) {
baseconnect = data.ip;
$("#history").html('-\nConnection obtained from ' + baseconnect + ' at ' + today);
}); //gets the permanently used historesplash, which comes back even when cleared by what it is now, after reset

var historesplash = $("#history").html(); //actual histore (which can be changed, unpermanent) is now based off the permanent

var histore = historesplash; //visresult, the image used in windowed, is a workable variable

var visresult = new Image(); //by default you aren't waiting (not even used anymore but I'll keep it in case)

var wait = 0; //specialresult is the immediate text result added onto the history string, by default nothing or else it would not be good

var specialresult = ''; //terminal is not in alternative states (such as game or contact)

var termstate = 'normal'; //Below are all variables needed for the game state; gamepart is basically 'room' of the game and gameclass is mage, knight, thief

var gamepart = 0;
var gameclass = 'none'; //below are game items

var torch = 0;
var shield = 0;
var trolled = 0;
var key = 0; //Variables necessary for being able to drag the window

var dragOn = 0;
var topStart = 50;
var leftStart = 50; //Want the terminal to be locked when starting off in login; no typing and no entering

var locked = 1; //.___________. _______ .______      .___  ___.  __  .__   __.      ___       __      
//|           ||   ____||   _  \     |   \/   | |  | |  \ |  |     /   \     |  |     
//`---|  |----`|  |__   |  |_)  |    |  \  /  | |  | |   \|  |    /  ^  \    |  |     
//    |  |     |   __|  |      /     |  |\/|  | |  | |  . `  |   /  /_\  \   |  |     
//    |  |     |  |____ |  |\  \----.|  |  |  | |  | |  |\   |  /  _____  \  |  `----.
//    |__|     |_______|| _| `._____||__|  |__| |__| |__| \__| /__/     \__\ |_______|
//------------Input Functions----------------
//Occurs whenever you hit a button

document.addEventListener('keypress', function (event) {
//Makes the history and line strings editable or get-able
var line = document.getElementById("line");
var history = document.getElementById("history"); //If you hit a key (that's not enter (so a letter)) and the terminal is available, then add that letter to the line string

if (event.key !== 'Enter' && wait !== 1 && locked === 0) {
entry = entry + event.key; //Hitting a key puts the command line into view for accessibility

document.getElementById('line').scrollIntoView();
} //Immediately makes the value of the string the content of the active command line


line.textContent = entry; //If you pressed enter and you're not locked from terminal

if (event.key === 'Enter' && locked === 0) {
//--------Put all commands like this:---------
//case 'nameofcommand': (stuff) break;
//---------------------------------------------
//If you are in a normal terminal state
if (termstate === 'normal') {
  //switch for entry; the first character of the entry is always > and so sliced off for convenience and ease of comprehension
  switch (entry.slice(1)) {
    //case 'black':
    //document.body.style.backgroundImage = "";
    //document.body.style.backgroundColor = 'black';
    //specialresult = '';
    //break;
    //----------------background images----------------
    case 'walter':
      document.body.style.backgroundImage = "url('https://www.indiewire.com/wp-content/uploads/2018/07/breakingbadformon_wide-22d0f0aa716956d518b391936d3bc323dd7a3848-s900-c85.jpg')";
      specialresult = '';
      break;

    case 'jesse':
      document.body.style.backgroundImage = "url('https://i.insider.com/5d9f3f5183486904582ee506?width=750&format=jpeg&auto=webp')";
      specialresult = '';
      break;

    case 'saul':
      document.body.style.backgroundImage = "url('https://www.queensjournal.ca/sites/default/files/img/story/2020/01/30/saul.png')";
      specialresult = '';
      break;

    case 'mike':
      document.body.style.backgroundImage = "url('https://tvline.com/wp-content/uploads/2018/09/better-call-saul-mike-ehrmantraut-jonathan-banks.jpg')";
      specialresult = '';
      break;

    case 'huell':
      document.body.style.backgroundImage = "url('https://www.gannett-cdn.com/-mm-/2f4dc9b24e02714de922c4f67a0ca096186d1bfc/c=2-0-1199-676/local/-/media/2016/06/17/Louisville/Louisville/636017722800212897-huell-money-breaking-bad.jpeg?width=660&height=373&fit=crop&format=pjpg&auto=webp')";
      specialresult = '';
      break;

    case 'gus':
      document.body.style.backgroundImage = "url('https://cdn.mos.cms.futurecdn.net/GE3y82v6CvSk28LXv2zRPm.jpg')";
      specialresult = '';
      break;
    //----------------links----------------

    case 'linkedin':
      window.open('https://www.linkedin.com/in/alex-watson-971530242/', '_blank').focus();
      specialresult = ' (Link Result)';
      break;

    case 'youtube':
      window.open('https://www.youtube.com/channel/UCEB8-Xvi4UVA5ab1R2IBdyg/featured', '_blank').focus();
      specialresult = ' (Link Result)';
      break;

    case 'lightning':
      window.open('http://lightningcompendium.com/', '_blank').focus();
      specialresult = ' (Link Result)';
      break;

    case 'morbius':
      window.open('https://morb.in/', '_blank').focus();
      specialresult = ' (Link Result)';
      break;
    //----------------images----------------

    case 'linkedup':
      windowSpawn('Pooh Shiesty Linked up with Spottemgotem', '');
      imageResult('https://pbs.twimg.com/media/EmmdAOFWEAM-e9o.jpg:large');
      break;

    case 'sneed':
      windowSpawn("Sneed's Feed and Seed", '');
      imageResult('https://i.ytimg.com/vi/qeTw0c6vxO8/maxresdefault.jpg');
      break;

    case 'kill jester':
      windowSpawn("You...can't kill jester!", '');
      imageResult('https://i.ibb.co/NjPMR7r/kill-jester.png');
      break;
    //----------------audio----------------

    case 'bruh':
      var audio = document.getElementById("audioplayer");
      audio.currentTime = 0;
      audio.src = 'https://audio.jukehost.co.uk/7gey25YFGIqLbQRCKq3H8Q8rbqs9lBIC';
      audio.play();
      specialresult = ' (Audio Result)';
      break;

    case 'boom':
      var audio = document.getElementById("audioplayer");
      audio.currentTime = 0;
      audio.src = 'https://audio.jukehost.co.uk/qj8sNqnPPaMp3vSU1YCmCvnBW0rdy7eq';
      audio.play();
      specialresult = ' (Audio Result)';
      break;

    case 'classic':
      var audio = document.getElementById("audioplayer");
      audio.currentTime = 0;
      audio.src = 'https://audio.jukehost.co.uk/PwB0ydKupGxvbjagSD5zrEWRmZAs7kXF';
      audio.play();
      specialresult = ' (Audio Result)';
      break;

    case 'roasted':
      var audio = document.getElementById("audioplayer");
      audio.currentTime = 0;
      audio.src = 'https://audio.jukehost.co.uk/En9LibDknlsEi1tZ2fjheuTyeGshPIJ1';
      audio.play();
      specialresult = ' (Audio Result)';
      break;

    case 'kitchen':
      var audio = document.getElementById("audioplayer");
      audio.currentTime = 0;
      audio.src = 'https://audio.jukehost.co.uk/rOCYhyy0a5ZaC8tkBgMgeWLPWyhfJMfb';
      audio.play();
      specialresult = ' (Audio Result)';
      break;

    case 'purge':
      var audio = document.getElementById("audioplayer");
      audio.currentTime = 0;
      audio.src = 'https://audio.jukehost.co.uk/bRPlE6qDdYdqrz0Lt6Xy3Lwi0isOzKMr';
      audio.play();
      specialresult = ' (Audio Result)';
      break;
    //----------------text results----------------

    case 'neat':
      specialresult = '\nI know right?';
      break;
    //----------------window results----------------

    case 'cool':
      windowSpawn('nice window!', 'thank you');
      specialresult = ' (Window Result)';
      break;

    case 'close':
      $('.window').hide();
      specialresult = '';
      break;
    //----------------terminal states----------------

    case 'game':
      gamepart = 'class';
      termstate = 'game';
      torch = 0;
      trolled = 0;
      shield = 0;
      key = 0;
      specialresult = '\nGame Started\nChoose your class:\n(mage knight thief)';
      break;

    case 'contact':
      termstate = 'contact';
      specialresult = '\nContact Syntax:\n(emailaddress):::(message)\nFor Example:\nmyemail@gmail.com:::Hello Alex! I love your website!';
      break;

    default:
      specialresult = ' (Unknown Command)';
      break;
  } //if terminal is not in normal configuration, but instead game

} else if (termstate === 'game') {
  switch (true) {
    //---------------------------------------game cases-----------------------------------------
    case entry.slice(1) === 'terminal':
      specialresult = '\nMain Terminal Activated';
      termstate = 'normal';
      break;

    case entry.slice(1) === 'mage' && gamepart === 'class':
      specialresult = '\nYou have chosen the Mage class!\nUsing the command "spell" at the right time can yield secret endings!\n...\nYou have found the location of a great dungeon. There are two entrances: a brightly-lit, ornate entrance, and an entrance hidden in a nearby cave. Which entrance do you use?\n(main cave)';
      gamepart = 'entrance';
      gameclass = 'mage';
      break;

    case entry.slice(1) === 'knight' && gamepart === 'class':
      specialresult = '\nYou have chosen the Knight class!\nUsing the command "slay" at the right time can yield secret endings!\n...\nYou have found the location of a great dungeon. There are two entrances: a brightly-lit, ornate entrance, and an entrance hidden in a nearby cave. Which entrance do you use?\n(main cave)';
      gamepart = 'entrance';
      gameclass = 'knight';
      break;

    case entry.slice(1) === 'thief' && gamepart === 'class':
      specialresult = '\nYou have chosen the Thief class!\nUsing the command "search" at the right time can yield secret endings!\n...\nYou have found the location of a great dungeon. There are two entrances: a brightly-lit, ornate entrance, and an entrance hidden in a nearby cave. Which entrance do you use?\n(main cave)';
      gamepart = 'entrance';
      gameclass = 'thief';
      break;

    case entry.slice(1) === 'main' && gamepart === 'entrance':
      specialresult = '\nYou have entered from the main entrance, coming into a long hallway. The stone walls are lined with torches, and the floor is a confusing mess of uneven stone slabs. What do you do?\n(continue inspect torch)';
      gamepart = 'hallwaywithtorch';
      break;

    case entry.slice(1) === 'cave' && gamepart === 'entrance' && torch === 0:
      specialresult = '\nYou enter the cave. It is very dark. You get a little lost, but leave before you can really get in trouble. It is too dark to explore. You go back outside.\n(main cave)';
      break;

    case entry.slice(1) === 'torch' && gamepart === 'hallwaywithtorch':
      specialresult = '\nYou got the torch. It feels warm in your hand. The hallway still awaits you.\n(continue inspect leave)';
      torch = 1;
      gamepart = 'hallwaynotorch';
      break;

    case entry.slice(1) === 'continue' && (gamepart === 'hallwaywithtorch' || gamepart === 'hallwaynotorch'):
      specialresult = '\nYou walk onto the uneven slabs. A few steps in, you feel a piece of the floor depress. The last thing you hear is a mechanical *woosh*. An arrow launches into your head and you die. \nBAD ENDING';
      gamepart = 'end';
      break;

    case entry.slice(1) === 'inspect' && (gamepart === 'hallwaywithtorch' || gamepart === 'hallwaynotorch'):
      specialresult = '\nYou realize that some of the stone slabs are discolored with red paint. You may continue by only stepping on the red slabs or the normal slabs.\n(red normal)';
      gamepart = 'hallwaypuzzle';
      break;

    case entry.slice(1) === 'red' && gamepart === 'hallwaypuzzle':
      specialresult = '\nYou walk only on the red slabs. On your first step, you feel a pressure plate on the floor depress. The last thing you hear is a mechanical *woosh*. An arrow launches into your head and you die. \nGAME OVER';
      gamepart = 'end';
      break;

    case entry.slice(1) === 'normal' && gamepart === 'hallwaypuzzle':
      specialresult = '\nYou successfully navigate through the hallway. At the end of the hallway is a wooden door.\n(enter listen)';
      gamepart = 'door';
      break;

    case entry.slice(1) === 'listen' && gamepart === 'door':
      specialresult = '\nYou hear something monstrous behind the door, humming just slightly.\n(enter leave)';
      gamepart = 'doorlisten';
      break;

    case trolled === 0 && entry.slice(1) === 'enter' && (gamepart === 'door' || gamepart === 'doorlisten') || entry.slice(1) === 'south' && gamepart === 'tunnel' && trolled === 0:
      specialresult = '\nInside of this room is a giant troll. He flashes a toothy smile at you. In a wretched voice, he says:\n"Hello human! I am here to guard this dungeon...I shall eat you lest you answer my riddle correctly. *AHEM*. I have one of these, you have one of these, so do the woods, the fields, the streams, the seas, the fish, beasts, and crops. Even the moon has one, though we rarely see it. What is it?\n(type-the-answer-to-the-riddle run)';
      gamepart = 'trollriddle';
      break;

    case entry.slice(1) === 'south' && gamepart === 'tunnel' && trolled === 1:
      specialresult = '\nThis is the room with the troll. There is not much else here, but you can enter the tunnel to the north.\n(tunnel)';
      gamepart = 'trolldone';
      break;

    case entry.slice(1) === 'leave' && (gamepart === 'doorlisten' || gamepart === 'hallwaynotorch'):
      specialresult = '\nYou leave the main entrance, now back outside of the dungeon. You have your choice of entrance, still.\n(main cave)';
      gamepart = 'entrance';
      break;

    case entry.slice(1) === 'run' && gamepart === 'trollriddle':
      specialresult = '\nYou try to escape from the troll, but he takes advantage of your cowardice, taking a bite out of your neck. You die drom blood loss not long after.\nBAD ENDING';
      gamepart = 'end';
      break;

    case entry.slice(1) === 'shadow' && gamepart === 'trollriddle':
      specialresult = '\nThe troll widens his eyes.\n"Oh! That is correct...well...be on your way then!"\nHe hurries you off into the north side of the room, into a four-way tunnel. Where do you want to go?\n(north east south west)';
      trolled = 1;
      gamepart = 'tunnel';
      break;

    case entry.slice(1) === 'slay' && gamepart === 'trollriddle' && gameclass === 'knight':
      specialresult = '\nAs a knight, you simply summon your sword from your sheath and slay the hideous troll. On his corpse was a magical key. You take it. You continue north, going into the four-way tunnel. Where do you want to go?\n(north east south west)';
      trolled = 1;
      key = 1;
      gamepart = 'tunnel';
      break;

    case (entry.slice(1) === 'enter' && gamepart === 'cave' || entry.slice(1) === 'west' && gamepart === 'tunnel') && shield === 0:
      specialresult = '\nIn this room is an old skeleton, covered in tattered armor. Beside him is a shiny blue shield. To the east is the entrance to the tunnels.\n(shield tunnel)';
      gamepart = 'westroomwithshield';
      break;

    case entry.slice(1) === 'cave' && gamepart === 'entrance' && torch === 1:
      specialresult = '\nYou use the torch the light the cave. After searching for a while, you find a trap door.\n(enter)';
      gamepart = 'cave';
      break;

    case (entry.slice(1) === 'enter' && gamepart === 'cave' || entry.slice(1) === 'west' && gamepart === 'tunnel') && shield === 1:
      specialresult = '\nThis is the room where you took that shield earlier. The skeleton is still here. To the east is the entrance to the tunnel.\n(tunnel)';
      gamepart = 'westroomnoshield';
      break;

    case entry.slice(1) === 'tunnel' && (gamepart === 'westroomnoshield' || gamepart === 'westroomwithshield' || gamepart === 'trolldone'):
      specialresult = '\nYou enter the four-way tunnel. Which way do you want to go?\n(north east south west)';
      gamepart = 'tunnel';
      break;

    case entry.slice(1) === 'shield' && gamepart === 'westroomwithshield':
      specialresult = '\nYou pick up the shield. It seems to be magical. You are now just in this room with a skeleton, and the tunnel entrance to the east.\n(tunnel)';
      shield = 1;
      gamepart = 'westroomnoshield';
      break;

    case entry.slice(1) === 'north' && gamepart === 'tunnel' && key === 0:
      specialresult = '\nYou walk further north in the tunnels. Unfortunately, there appears to be a magical barrier preventing further travel northwards. To the south is the four-way tunnel.\n(tunnel)';
      gamepart = 'northbarrier';
      break;

    case entry.slice(1) === 'north' && gamepart === 'tunnel' && key === 1:
      specialresult = '\nYou walk further north in the tunnels. Unfortunately, there appears to be a magical barrier preventing further travel northwards. To the south is the four-way tunnel.\n(key tunnel)';
      gamepart = 'northbarrier';
      break;

    case entry.slice(1) === 'spell' && gamepart === 'northbarrier' && gameclass === 'mage':
      specialresult = '\nYou dispel the magical barrier, allowing you to continue further north into this tunnel.\n(continue)';
      gamepart = 'northwin';
      break;

    case entry.slice(1) === 'search' && (gamepart === 'westroomnoshield' || gamepart === 'westroomwithshield'):
      specialresult = '\nYou search this room, finding a secret door. The door leads to a cramped, dank hole in the wall.\n(crawl)';
      gamepart = 'northcrawl';
      break;

    case entry.slice(1) === 'key' && gamepart === 'northbarrier' && key === 1:
      specialresult = "\nYou use the troll's key in order to open the northern barrier, allowing you to continue further north into this tunnel.\n(continue)";
      gamepart = 'northwin';
      break;

    case entry.slice(1) === 'continue' && gamepart === 'northwin' || entry.slice(1) === 'crawl' && gamepart === 'northcrawl':
      specialresult = '\nAfter heading north for a long time, you eventually find an ornate golden door. You open the door, revealing a cache of jewels, paintings, weapons, and gold coins. You become rich. \nGOOD ENDING';
      gamepart = 'end';
      break;

    case entry.slice(1) === 'east' && gamepart === 'tunnel' && shield === 0:
      specialresult = '\nYou enter the east room, finding a terrible lich. His jewel-filled crown begins to glow as he summons a deadly spell. What do you do?\n(dodge pray scream)';
      gamepart = 'lichnochance';
      break;

    case entry.slice(1) === 'east' && gamepart === 'tunnel' && shield === 1:
      specialresult = '\nYou enter the east room, finding a terrible lich. His jewel-filled crown begins to glow as he summons a deadly spell. What do you do?\n(shield dodge pray scream)';
      gamepart = 'lichwithchance';
      break;

    case gamepart === 'lichnochance' || gamepart === 'lichwithchance' && entry.slice(1) !== 'shield':
      specialresult = '\nUnfortunately, you were vaporized instantly.\nBAD ENDING';
      gamepart = 'end';
      break;

    case entry.slice(1) === 'shield' && gamepart === 'lichwithchance':
      specialresult = "'\nYou raise your magic shield up, deflecting the fatal spell. The lich looks outraged. Now's your chance to win! What do you do!?\n(uhh)";
      gamepart = 'lichcritical';
      break;

    case entry.slice(1) === 'spell' && gamepart === 'lichcritical' && gameclass === 'mage':
      specialresult = "\nYou realize the lich's crown is the source of his powerful magic. You dispel the magic from his crown, causing him to collapse to the ground, nothing more than a corpse.\nVICTORIOUS ENDING";
      gamepart = 'end';
      break;

    case entry.slice(1) === 'slay' && gamepart === 'lichcritical' && gameclass === 'knight':
      specialresult = "\nYou draw your sword and take advantage of the lich's surprise. Plunging your sword straight through his heart, you feel his soul leave his body. You rip your sword from his chest, and he collapses to the ground. Good job.\nVICTORIOUS ENDING";
      gamepart = 'end';
      break;

    case entry.slice(1) === 'search' && gamepart === 'lichcritical' && gameclass === 'thief':
      specialresult = "\nYou realize there is a pressure plate behind the lich. You sprint up to him and push him backwards, causing him to stumble into the trap. You hear a mechanical *woosh* as an arrow is launched from the wall and lodged into the lich's skull.\nVICTORIOUS ENDING";
      gamepart = 'end';
      break;

    case gamepart === 'lichcritical':
      specialresult = '\nWhat?? The lich is much faster than you, and curses you into the shadow realm. Next time try harder!\nBAD ENDING';
      gamepart = 'end';
      break;
    //get the last result again

    case entry.slice(1) === 'last':
      break;
    //need this or you'll get a specialresult in the game

    case entry.slice(1) === 'clear':
      break;

    case entry.slice(1) === '' && gamepart === '':
      specialresult = '\n';
      gamepart = '';
      break;
    //For unrecognized commands

    default:
      specialresult = '\nI do not understand';
      break;
  } //if gamepart has been set to end for an ending, exit game


  if (gamepart === 'end') {
    gamepart = 0;
    specialresult = specialresult + '\nReturned to Terminal';
    termstate = 'normal';
  } //if terminal is not in normal or game, it might be contact

} else if (termstate === 'contact') {
  //email is everything after the dots
  var email = entry.split(':::')[0]; //message if everything after

  var message = entry.substring(entry.indexOf(':::') + 3); //Below is for email verification

  var re = /\S+@\S+\.\S+/;
  var valid = re.test(email); //Below will always trigger if there are no dots in the entry

  if (2 === entry.indexOf(':::') + 3) {
    valid = false;
  } //if the email validates and there is a message (and the dots to seperate them) then you are thanked and returned to terminal


  if (valid === true) {
    alert('Thank you for the message: "' + message + '"!');
    specialresult = '\nReturned to Terminal';
    termstate = 'normal';
  } //if you type in terminal, you can leave early


  if (entry === 'terminal') {
    specialresult = '\nReturned to Terminal';
    termstate = 'normal';
  }
} //--------end of command list-----
// Still inside the "pressed enter" at this point!
//if you actually typed something and you aren't waiting,


if (entry !== '>' && entry !== '...') {
  //if the command was not 'clear' (specified because clear should be a universal commands)
  if (entry.slice(1) !== 'clear') {
    histore = histore + '\n:' + entry.slice(1) + specialresult; //if the universal entry was 'clear'
  } else {
    //Pause audios, reset temporary history into permanent history, hide all windows
    var audio = document.getElementById("audioplayer");
    var audio2 = document.getElementById("audioplayer");
    audio.pause();
    audio2.pause();
    histore = historesplash;
    $('.window').hide();
  } //if it's in wait state, and you hit enter, then hide the visual (not used anymore)

} else if (entry === '...') {
  $('.visual').hide();
  wait = 0;
} //Updates the history string


history.textContent = histore; //As long as you aren't waiting, resets entry; if you are, then command line becomes waited upon (...)

if (wait === 0) {
  entry = ">";
} else {
  entry = "...";
} //Updates the command line string


line.textContent = entry; //hitting enter will always scroll the command line into view

document.getElementById('line').scrollIntoView();
}
}); //If you hit ANY key (yeah, I know it's pretty inefficient but it works)

document.addEventListener('keydown', function (event) {
//Makes the line workable
var line = document.getElementById("line"); //If the key was backspace, then you slice the last character from the active command line string

if (event.key === 'Backspace' && entry.length > 1 && wait === 0) {
entry = entry.slice(0, -1);
line.textContent = entry;
}
}); //------------End of Input Functions----------------
//     ___       __       __________   ___    .______       __    __   __       _______     _______.
//    /   \     |  |     |   ____\  \ /  /    |   _  \     |  |  |  | |  |     |   ____|   /       |
//   /  ^  \    |  |     |  |__   \  V  /     |  |_)  |    |  |  |  | |  |     |  |__     |   (----`
//  /  /_\  \   |  |     |   __|   >   <      |      /     |  |  |  | |  |     |   __|     \   \    
// /  _____  \  |  `----.|  |____ /  .  \     |  |\  \----.|  `--'  | |  `----.|  |____.----)   |   
///__/     \__\ |_______||_______/__/ \__\    | _| `._____| \______/  |_______||_______|_______/    
//------------Clicking Functions followed by Hovering Functions----------------
//makes the vars for the "login" credentials, individual variables for getting unique failure texts

var cred1 = 0;
var cred2 = 0; //credentials are blue when hovered, white when hovered out
//note that you can't just use .coolhover because they need to stay black if you click them

$('#login1').hover(function () {
if (cred1 === 0) {
$(this).css('color', 'blue');
}
}, function () {
if (cred1 === 0) {
$(this).css('color', 'white');
}
});
$('#login2').hover(function () {
if (cred2 === 0) {
$(this).css('color', 'blue');
}
}, function () {
if (cred2 === 0) {
$(this).css('color', 'white');
}
}); //credentials turn black if you click them, and change the variable for hovering and login validation

$('#login1').click(function () {
$('#login1').css('color', 'black');
cred1 = 1;
});
$('#login2').click(function () {
$('#login2').css('color', 'black');
$('#login2').text('************   ');
cred2 = 1;
}); //clicking the logjn button, it works if both credentials have the correct variables

$('.loginClick').click(function () {
var failtext = document.getElementById('loginfailtext');

if (cred1 === 1 && cred2 === 1) {
$('.wholelogin').hide();
$('#everything').show();
today = new Date();
locked = 0; //unique failure codes for each combination
} else if (cred1 === 1 && cred2 === 0) {
failtext.textContent = '(incorrect password)';
} else if (cred1 === 0 && cred2 === 1) {
failtext.textContent = '(incorrect username)';
} else if (cred1 === 0 && cred2 === 0) {
failtext.textContent = '(incorrect username and password)';
}
}); //highlights menu items such as Terminal and Profile; can't use .coolhover because they are inverted colors

$('.menuItem').hover(function () {
$(this).css('color', 'blue');
}, function () {
$(this).css('color', 'black');
}); //makes the profile header clickable; locks and hides the terminal, displays the profile

$('#profileClick').click(function () {
locked = 1;
$('#termtext').hide();
$('#wholeprofile').show();
}); //makes the terminal header clickable; unlocks and shows the terminal, hides the profile

$('#TerminalClick').click(function () {
locked = 0;
$('#wholeprofile').hide();
$('#termtext').show();
}); //coolhover makes it so that the text turns blue if hovered over, but goes back to white if the mouse stops hovering

$('.coolhover').hover(function () {
$(this).css('color', 'blue');
}, function () {
$(this).css('color', 'white');
}); //makes my name clickable, spawning a window of a picture of me

$('#profileAlex').click(function () {
windowSpawn('Picture of Alex', '');
imageResult('https://i.ibb.co/ThgkDpn/alex-watson-1.jpg');
}); //makes the 'coding' item clickable, taking you to linkedin

$('#gitlink').click(function () {
window.open('https://github.com/alex-wat', '_blank').focus();
}); //makes the thing under my name clickable, taking you to github 

$('#linkedin').click(function () {
window.open('https://www.linkedin.com/in/alex-watson-971530242/', '_blank').focus();
}); //makes the academics item clickable, taking you to sig's website

$('#school').click(function () {
window.open('https://www.signature.edu/', '_blank').focus();
}); //------------End of Clicking Functions followed by Hovering Functions----------------
//____    ____  ______   .___________. _______     _______   ______   .______         .___  ___.  _______ 
//\   \  /   / /  __  \  |           ||   ____|   |   ____| /  __  \  |   _  \        |   \/   | |   ____|
// \   \/   / |  |  |  | `---|  |----`|  |__      |  |__   |  |  |  | |  |_)  |       |  \  /  | |  |__   
//  \      /  |  |  |  |     |  |     |   __|     |   __|  |  |  |  | |      /        |  |\/|  | |   __|  
//   \    /   |  `--'  |     |  |     |  |____    |  |     |  `--'  | |  |\  \----.   |  |  |  | |  |____ 
//    \__/     \______/      |__|     |_______|   |__|      \______/  | _| `._____|   |__|  |__| |_______|
//------------User Input Functions----------------
//-----------DRAG-----------LOGIC-----------NOW-----------
//just sets the variables, not really important specifically what they are, they are overwritten a lot

var xMs = 0;
var yMs = 0; //for starting the drag

function windowDragStart(e) {
//the position of the mouse in terms of both axes are recieved in pixels...
//...then compared against the total pixel measures to convert them into percent
xMs = e.clientX / $(document).width() * 100;
yMs = e.clientY / $(document).width() * 100; //other functions know that dragging is happening

dragOn = 1;
} //when you move the mouse AT ALL (yeah I know it's inefficient, sorry ¯\_(ツ)_/¯)


function windowDragOn(e) {
//if you're actually dragging, changed from windowDragStart (last line)
if (dragOn === 1) {
//prevents the default holding and moving text behaviour (selecting text)
event.preventDefault(); //calculate the change in each axis by taking the prior positions and current positions
//current positions calculated in percent the same way as prior, see that for more info

var changeX = e.clientX / $(document).width() * 100 - xMs;
var changeY = e.clientY / $(document).width() * 100 - yMs; //reads the current position of the window as a NUMBER, taking off the % at the end of each measurement for an integer 

var readX = Number(document.getElementById('wholewindow').style.left.slice(0, -1));
var readY = Number(document.getElementById('wholewindow').style.top.slice(0, -1)); //adds the change in mouse movement and the current position of window to get the new position of the window
//pretty neat how that works, huh? I thought of it myself :)

document.getElementById('wholewindow').style.left = changeX * 1 + readX + "%";
document.getElementById('wholewindow').style.top = 2 * changeY + readY + "%"; //makes the prior coordinates the 'now' positions
//took me forever to figure out that you had to do this :(

xMs = e.clientX / $(document).width() * 100;
yMs = e.clientY / $(document).width() * 100;
}
} //end dragging, occurs when releases mouse while dragging


function windowDragEnd() {
//simple changing of a var for windowDragOn()
dragOn = 0;
} //Used whenever spawning images, argument is link of image


function imageResult(visarg) {
specialresult = ' (Image Result)';
$('.visual').attr('src', visarg);
$('.visual').toggle();
} //If you click the X on a window, hide the window


$(".exitThing").click(function () {
$('.window').hide(); //Below code is NECESSARY in case they open a window with no image right after

$('.visual').hide();
}); //Used in window commands, spawns a window with appropriate parameters

function windowSpawn(title, content) {
//hides image by default
$('.visual').hide(); //below makes elements workable and then works then

var titleElement = document.getElementById("windowtitle");
var contentElement = document.getElementById("windowstext");
titleElement.textContent = title;
contentElement.textContent = content; //shows the window, finally

$('.window').show(); //Re-centers the window if it was opened, moved, closed, and then opened again

document.getElementById('wholewindow').style.top = '50%';
document.getElementById('wholewindow').style.left = '50%';
} //Allows the window to be workable


var windower = document.querySelector("#wholewindow"); //when the mouse is pusehd down, start the drag

windower.addEventListener('mousedown', windowDragStart); //when the mouse is released, end the drag

windower.addEventListener('mouseup', windowDragEnd); //if you MOVE THE MOUSE then do the actual dragging

addEventListener('mousemove', windowDragOn); //------------End of User Input Functions----------------
//.__   __.  ___________    ____  _______ .______           _______  __  ____    ____  _______     __    __  .______   
//|  \ |  | |   ____\   \  /   / |   ____||   _  \         /  _____||  | \   \  /   / |   ____|   |  |  |  | |   _  \  
//|   \|  | |  |__   \   \/   /  |  |__   |  |_)  |       |  |  __  |  |  \   \/   /  |  |__      |  |  |  | |  |_)  | 
//|  . `  | |   __|   \      /   |   __|  |      /        |  | |_ | |  |   \      /   |   __|     |  |  |  | |   ___/  
//|  |\   | |  |____   \    /    |  |____ |  |\  \----.   |  |__| | |  |    \    /    |  |____    |  `--'  | |  |      
//|__| \__| |_______|   \__/     |_______|| _| `._____|    \______| |__|     \__/     |_______|    \______/  | _|