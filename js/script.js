// List of Objects stored in an array.
const quotes = [
  {
    quote: "I've failed over and over and over again in my life. And that is why I succeed.",
    source: "Micheal Jordan",
    citation: "Nike Culture : The Sign of the Swoosh",
    year: 1998
  },
  {
    quote: "Someone's sitting in the shade today because someone planted a tree a long time ago.",
    source: 'Warren Buffett',
    citation: "Of Permanent Value: The Story of Warren Buffett",
    year: 1991
  },
  {
    quote: "I love to compete. That's the essence of who I am.",
    source: "Tiger Woods",
    citation: "Tiger Woods Up Close And Personal",
    year: 2006
  },
  {
    quote: "The equivalent for a normal person would be to go in to work in your underwear... and try and do your job that you normally do. All of a sudden, you can't do anything. That's how a comedian feels when he's doing a new bit.",
    source: "Jerry Seinfeld",
    citation: "Comedian",
    year: 2002
  },
  {
    quote: "Behind every great man is a woman rolling her eyes.",
    source: "Jim Carrey"
  },
  {
    quote: "Halloween is the beginning of the holiday shopping season. That’s for women. The beginning of the holiday shopping season for men is Christmas Eve.",
    source: "David Letterman"
  },
  {
    quote: "A good hockey player plays where the puck is. A great hockey player plays where the puck is going to be.",
    source: "Wayne Gretzky"
  }
];

// The getRandomQuote function returns a random object from the quotes array.
function getRandomQuote () {
  let randomNumber = Math.floor(Math.random() * quotes.length); 
  return quotes[randomNumber];
}

// The printQuote function calls the getRandomQuote function.
// It stores the information in a variable named randomQuoteObject.
// We use conditional statments to check if the Object has certain keys and values.
function printQuote () {
  let randomQuoteObject = getRandomQuote();
  let html = `<p class ="quote"> ${randomQuoteObject.quote} </p> 
              <p class = "source"> ${randomQuoteObject.source} `
  if (randomQuoteObject.citation) {
    html += `<span class="citation"> ${randomQuoteObject.citation} </span>`
  }
  if (randomQuoteObject.year) {
    html += `<span class="year"> ${randomQuoteObject.year} </span>`
  }  else {
    html += `</p>`
  }  
  return document.getElementById('quote-box').innerHTML = html;    //CODE INCLUDED BY TEAMTREEHOUSE.   
}

 //click event listener for the print quote button.
document.getElementById('load-quote').addEventListener("click", printQuote, false); //CODE INCLUDED BY TEAMTREEHOUSE.