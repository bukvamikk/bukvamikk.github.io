
$( document ).ready(function() {
    var randomNumber = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById('quoteDisplay').innerHTML = randomNumber.quote + '<br>' + randomNumber.where;
});

function newQuote() {
  var randomNumber = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById('quoteDisplay').innerHTML = randomNumber.quote + '<br>' + randomNumber.where;
}






var quotes = [{
    quote: '\"After all, to the well-organised mind, death is but the next great adventure.\”',
    where: 'Harry Potter and the Sorcerer\'s Stone'
  },
  {
    quote: '\"After all this time?\" \"Always,\" said Snape.',
    where: 'The Deathly Hallows'
  },
  {
    quote: '\"The truth.\" Dumbledore sighed. \"It is a beautiful and terrible thing, and should therefore be treated with great caution.\"',
    where: 'The Philosopher\’s Stone'
  },
  {
    quote: '\"It is our choices, Harry, that show what we truly are, far more than our abilities.\"',
    where: 'The Chamber of Secrets'
  },
  {
    quote: '\"It matters not what someone is born, but what they grow to be.\"',
    where: 'The Goblet of Fire'
  },
  {
    quote: '\"The consequences of our actions are always so complicated, so diverse, that predicting the future is a very difficult business indeed.\"',
    where: 'The Prisoner of Azkaban'
  },
  {
    quote: '\"It does not do to dwell on dreams and forget to live.\"',
    where: 'The Sorcerer\'s Stone'
  },
  {
    quote: '\"Fear of a name increases fear of the thing itself.\"',
    where: 'The Sorcerer\'s Stone'
  },
  {
    quote: '\"There are all kinds of courage,\" said Dumbledore, smiling. \"It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.\"',
    where: 'The Sorcerer\'s Stone'
  },
  {
    quote: '\"People find it far easier to forgive others for being wrong than being right.\"',
    where: 'The Half-Blood Prince'
  },
  {
    quote: '\"We are only as strong as we are united, as weak as we are divided.\"',
    where: 'The Goblet of Fire'
  },
  {
    quote: '\"Differences of habit and language are nothing at all if our aims are identical and our hearts are open.\"',
    where: 'The Goblet of Fire'
  },
  {
    quote: '\"We cannot choose our fate, but we can choose others. Be careful in knowing that.\"',
    where: 'The Order of the Phoenix'
  },
  {
    quote: '\"It is important,\" Dumbledore said, \"to fight, and fight again, and keep fighting, for only then could evil be kept at bay, though never quite eradicated.\"',
    where: 'The Half-Blood Prince'
  },
  {
    quote: '\"The truth.\" Dumbledore sighed. \"It is a beautiful and terrible thing, and should therefore be treated with great caution.\"',
    where: 'The Sorcerer\'s Stone'
  },
  {
    quote: '\"Curiosity is not a sin…but we should exercise caution with our curiosity.\"',
    where: 'The Goblet of Fire'
  },
  {
    quote: '\"Numbing the pain for a while will make it worse when you finally feel it.\"',
    where: 'The Goblet of Fire'
  },
  {
    quote: '\"Understanding is the first step to acceptance, and only with acceptance can there be recovery.\"',
    where: 'The Goblet of Fire'
  },
  {
    quote: '\"Youth cannot know how age thinks and feels, but old men are guilty if they forget what it was to be young.\"',
    where: 'The Order of the Phoenix'
  },
  {
    quote: '\"You think the dead we loved truly ever leave us? You think that we don\'t recall them more clearly in times of great trouble?\"',
    where: 'The Prisoner of Azkaban'
  },
  {
    quote: '\"Do not pity the dead, Harry, pity the living, and above all those where live without love.\"',
    where: 'The Deathly Hallows'
  },
  {
    quote: '\"It is the unknown we fear when we look upon death and darkness, nothing more.\"',
    where: 'The Half-Blood Prince'
  },
  {
    quote: '\"Let us step into the night and pursue that flighty temptress, adventure.\"',
    where: 'The Half-Blood Prince'
  },
  {
    quote: '\"Ah, music,\" he said wiping his eyes. \"A magic beyond all we do here.\"',
    where: 'The Sorcerer\'s Stone'
  },
  {
    quote: '\"Of course it is happening inside your head, Harry, but why on earth should that mean it is not real?\"',
    where: 'The Deathly Hallows'
  },
  {
    quote: '\"Words are, in my not so humble opinion, our most inexhaustible source of magic, capable of both influencing injury, and remedying it.\"',
    where: 'The Deathly Hallows'
  }
]



var scrollSpeed = 70;

    // set the default position
    var current = 0;

    // set the direction
    var direction = 'h';

    function bgscroll(){

        // 1 pixel row at a time
        current -= 1;

        // move the background with backgrond-position css properties
       $('.main-bg').css("backgroundPosition", (direction == 'h') ? current+"px 0" : "0 " + current+"px");

    }

    //Calls the scrolling function repeatedly
setInterval(bgscroll, scrollSpeed);
