const quoteList = [
    "If you look at what you have in life, you’ll always have more. If you look at what you don’t have in life, you’ll never have enough.",
    "Your time is limited, so don’t waste it living someone else’s life.",
    "Life is what we make it, always has been, always will be.",
    "Strive not to be a success, but rather to be of value.",
    "I attribute my success to this: I never gave or took any excuse."
];

const authorList = [
    "Oprah Winfrey",
    "Steve Jobs",
    "Grandma Moses",
    "Albert Einstein",
    "Florence Nightingale"
];

const colorList = [
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
    '#73A857'
];

$(document).ready(function(){
    $('#tweet-quote').attr(
        'href',
        'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' +
          encodeURIComponent('"I attribute my success to this: I never gave or took any excuse." Florence Nightingale')
    );    
});

let  i = 0;

function generateNewQuote(){

    const colorIndex = Math.floor(Math.random()*12);


    $(document).ready(function(){
        $("#text").text(quoteList[i]);
        $("#author").text(authorList[i]);
        $("body, html, #tweet-quote").css({
            "background-color": colorList[colorIndex],
        });
        $(".quote-text, #quote-author").css({
            "color": colorList[colorIndex],
        });
        $("#new-quote").css({
            "background": colorList[colorIndex],
        });
        $('#tweet-quote').attr(
            'href',
            'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' +
              encodeURIComponent('"' + quoteList[i] + '" ' + authorList[i])
        );
    });
    i=i+1;
    if(i>4){
        i=0;
    }
}