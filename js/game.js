randSuit = function(){

    var x = Math.floor(Math.random()*4) + 1
    
    switch(x){
        
        case x = 1:    
            var suit = "spades";
        break;
            
        case x = 2:    
            var suit = "hearts";
        break;
            
        case x = 3:    
            var suit = "clubs";
        break;
            
        case x = 4:    
            var suit = "diamonds";
        break;
        
        default:
            var suit = "Shit it broke";
        break;
    };
    // console.log("suit: "+suit);
    return(suit);
};

randNum = function(){
    
    var n = Math.floor(Math.random()*13) + 1
    
    switch(n) {
        case n = 1:
            var card = "Ace";
        break;
            
        case n = 2:
            var card = "2";
        break;
                
        case n = 3:
            var card = "3";
        break;
            
        case n = 4:
            var card = "4";
        break;
            
        case n = 5:
            var card = "5";
        break;
            
        case n = 6:
            var card = "6";
        break;
            
        case n = 7:
            var card = "7";
        break;
            
        case n = 8:
            var card = "8";
        break;
            
        case n = 9:
            var card = "9";
        break;
            
        case n = 10:
            var card = "10";
        break;
            
        case n = 11:
            var card = "Jack";
        break;
            
        case n = 12:
            var card = "Queen";
        break;
            
        case n = 13:
            var card = "King";
        break;
            
        default:
            console.log("fuck it broke");
        break;
    };
    // console.log("Card: "+card);
    return(card);
};
    
cardPull = function(){
    console.log(randNum()+" of "+randSuit());
    $(".card").css({
        background: 'url(images/cards/1_of_hearts.png)'
    });
};

