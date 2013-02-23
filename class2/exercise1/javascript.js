var myCurrentAge = 26;
var myEventualAge = 79;
var oreosPerDay = 10;
var oreosPerMonth = oreosPerDay * 30;

// how many years left?
var yearsLeft = myEventualAge - myCurrentAge;

// figure out how many days I have left in my life
var daysLeft = yearsLeft * 365;

// multiple days left by number of oreos per days
var oreosForLife = daysLeft * oreosPerDay;

function calculate() {
    //output the result in an alert
    alert("I will need " + oreosForLife + " oreos to last until my old old age of " + myEventualAge + "!!!! That's " + oreosPerMonth + " oreos every month!!");
    // if I have over 40,000 oreos for my life, do something
    if (oreosForLife > 40000) {
        alert("You have a ton of oreos to last the rest of your life.")
    } else {
        alert("you have less than 40,000 oreos");
    }
}

function favoriteThings() {
    // this is a list of favorite things
    var list = ["kittens", "computers", "beer", "food"];
    var result = "my favorite things are ";
    var number = list.length;
    // loop through the results
    for (var i = 0; i < list.length; i++) {
         result += list[i] + ', ';
    }

    // output the results in an alert   
    alert(result);
}

function myFriends(){
    var friends = [
        {name: 'Santa Claus',
        age: '100'},
        {name: 'Easter Bunny',
        age: '10'},
        {name: 'Tooth Fairy',
        age: '1'}
    ];
    var result = "These are my friends: ";

    // for loop to describe each friend
    for (var i = 0; i < friends.length; i++) {
        var friend = friends[i];
        /*if (i < friends.length - 1) {
            result += friend.name + ", who is " + friend.age + " years old; "           
        } else {
            result += "and " + friend.name + ", who is " + friend.age + " years old.";
        }*/
        result += describeFriend(friends[i]);
    }
    //alert the results
    alert(result);
}

function describeFriend(friend){
    return "My friend " + friend.name + " is " + friend.age + " years old. ";
}