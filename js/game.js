function randSuit() {

    var x = Math.floor(Math.random() * 4) + 1;
        
    if (x == 1) {
        var suit = "spades";
    }
    else if (x == 2) {
        var suit = "hearts";
    }
    else if (x == 3) {
        var suit = "clubs";
    }
    else if (x == 4) {
        var suit = "diamonds";
    }

    //console.log("suit: "+suit);
    return(suit);
}

function randNum() {
    
    var n = Math.floor(Math.random() * 13) + 1;

    if (n <= 10) {
        var number = n;
    }
    else if (n == 11) {
        var number = "jack";
    }
    else if (n == 12) {
        var number = "queen";
    }
    else if (n == 13) {
        var number = "king";
    }

    //console.log("Number: "+number);
    return(number);
}
    
function cardPull() {
    //console.log(randNum()+" of "+randSuit());
    var card = "url('images/cards/"+randNum()+"_of_"+randSuit()+".png')";
    //console.log(card);

    //TODO: replace jQuery with native
    $(".card").css('background', card);
}