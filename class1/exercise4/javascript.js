function calculate(){
    var age = 26;
    var oldAge = 96;
    var perDay = 2;

    var days = (oldAge - age) * 356;
    var total = perDay * days;
    if(total > 40000){
        alert("You will need " + total + " to last you until the ripe old age of " + oldAge + ". Wow! That's a lot!");
    }else{
        alert("You will need " + total + " to last you until the ripe old age of " + oldAge + ". You seem pretty reasonable");
    } 
}

function favoriteThings(){
    var favoriteThings = ['kittens', 'beer', 'food', 'chocolate', 'cats'];
    var result = 'My favorite things are: ';
    for (var i = 0; i<favoriteThings.length; i++){
        // if the item number is not the last number, add a comma to the end
        if (i < favoriteThings.length - 1){
            result += favoriteThings[i] + ', ';
        }
        // otherwise (if it's the last item), add a "and" and a period 
        else{
            result += "and " + favoriteThings[i] + '.';
        }
    }
    alert(result);
}