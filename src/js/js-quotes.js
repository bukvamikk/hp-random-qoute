
$(document).ready(function() {
  $(".btn").click(function(){
      $("#").hide()
  });


});




var quotes = [{
    quote: '\"After all, to the well-organised mind, death is but the next great adventure.\”',
    who: 'Harry Potter and the Sorcerer\'s Stone'
  },
  {
    quote: '\"After all this time?\" \"Always,\" said Snape.',
    who: 'The Deathly Hallows'
  },
  {
    quote: '\"The truth.\" Dumbledore sighed. \"It is a beautiful and terrible thing, and should therefore be treated with great caution.\"',
    who: 'The Philosopher\’s Stone'
  },
  {
    quote: '\"It is our choices, Harry, that show what we truly are, far more than our abilities.\"',
    who: 'The Chamber of Secrets'
  },
  {
    quote: '\"It matters not what someone is born, but what they grow to be.\"',
    who: 'The Goblet of Fire'
  },
  {
    quote: '\"The consequences of our actions are always so complicated, so diverse, that predicting the future is a very difficult business indeed.\"',
    who: 'The Prisoner of Azkaban'
  },
  {
    quote: '\"It does not do to dwell on dreams and forget to live.\"',
    who: 'The Sorcerer\'s Stone'
  },
  {
    quote: '\"Fear of a name increases fear of the thing itself.\"',
    who: 'The Sorcerer\'s Stone'
  },
  {
    quote: '\"There are all kinds of courage,\" said Dumbledore, smiling. \"It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.\"',
    who: 'The Sorcerer\'s Stone'
  },
  {
    quote: '\"People find it far easier to forgive others for being wrong than being right.\"',
    who: 'The Half-Blood Prince'
  },
  {
    quote: '\"We are only as strong as we are united, as weak as we are divided.\"',
    who: 'The Goblet of Fire'
  },
  {
    quote: '\"Differences of habit and language are nothing at all if our aims are identical and our hearts are open.\"',
    who: 'The Goblet of Fire'
  },
  {
    quote: '\"We cannot choose our fate, but we can choose others. Be careful in knowing that.\"',
    who: 'The Order of the Phoenix'
  },
  {
    quote: '\"It is important,\" Dumbledore said, \"to fight, and fight again, and keep fighting, for only then could evil be kept at bay, though never quite eradicated.\"',
    who: 'The Half-Blood Prince'
  },
  {
    quote: '\"The truth.\" Dumbledore sighed. \"It is a beautiful and terrible thing, and should therefore be treated with great caution.\"',
    who: 'The Sorcerer\'s Stone'
  },
  {
    quote: '\"Curiosity is not a sin…but we should exercise caution with our curiosity.\"',
    who: 'The Goblet of Fire'
  },
  {
    quote: '\"Numbing the pain for a while will make it worse when you finally feel it.\"',
    who: 'The Goblet of Fire'
  },
  {
    quote: '\"Understanding is the first step to acceptance, and only with acceptance can there be recovery.\"',
    who: 'The Goblet of Fire'
  },
  {
    quote: '\"Youth cannot know how age thinks and feels, but old men are guilty if they forget what it was to be young.\"',
    who: 'The Order of the Phoenix'
  },
  {
    quote: '\"You think the dead we loved truly ever leave us? You think that we don\'t recall them more clearly in times of great trouble?\"',
    who: 'The Prisoner of Azkaban'
  },
  {
    quote: '\"Do not pity the dead, Harry, pity the living, and above all those who live without love.\"',
    who: 'The Deathly Hallows'
  },
  {
    quote: '\"It is the unknown we fear when we look upon death and darkness, nothing more.\"',
    who: 'The Half-Blood Prince'
  },
  {
    quote: '\"Let us step into the night and pursue that flighty temptress, adventure.\"',
    who: 'The Half-Blood Prince'
  },
  {
    quote: '\"Ah, music,\" he said wiping his eyes. \"A magic beyond all we do here.\"',
    who: 'The Sorcerer\'s Stone'
  },
  {
    quote: '\"Of course it is happening inside your head, Harry, but why on earth should that mean it is not real?\"',
    who: 'The Deathly Hallows'
  },
  {
    quote: '\"Words are, in my not so humble opinion, our most inexhaustible source of magic, capable of both influencing injury, and remedying it.\"',
    who: 'The Deathly Hallows'
  }
]



function newQuote() {
  var randomNumber = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById('quoteDisplay').innerHTML = randomNumber.quote + '<br>' + randomNumber.who;
}
