$(document).ready(function(){
    $('.box').bind({
        click: function() {
          $(this).css('background-color', 'green');
          $(this).html('Clicked!');
          $(this).css("width", "400px");
        },
        hover: function() {
          $(this).css('background-color', 'purple');
          $(this).html('Hi!');
        }
    });
    $('#calculate').click(calculate);
    $('#favorite').click(favoriteThings);
    $('#my-friends').click(myFriends);
})

function calculate() {
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
    
    // if I have over 40,000 oreos for my life, do something
    if (oreosForLife > 40000) {
        $("#calculate").prepend("You will need " + oreosForLife + " oreos to last until the age " + myEventualAge + ". You have a ton of oreos to last the rest of your life.")
    } else {
        $("#calculate").prepend("you have less than 40,000 oreos");
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

    // replace alert results with prepend()  
    //alert(result);
    $("#favorite-things").prepend(result);

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
//    var result = "These are my friends: ";

    // for loop to describe each friend
    for (var i = 0; i < friends.length; i++) {
        var friend = friends[i];
        if (i < friends.length - 1) {
            result += friend.name + ", who is " + friend.age + " years old; "           
        } else {
            result += "and " + friend.name + ", who is " + friend.age + " years old.";
        }
        var result = describeFriend(friends[i]);
        $("#friends").prepend(result);
    }
    //alert the results
    //alert(result);
}

function describeFriend(friend){
    return "My friend " + friend.name + " is " + friend.age + " years old. ";
}