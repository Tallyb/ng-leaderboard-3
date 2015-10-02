/**
 * Created by Tally on 02/06/2015.
 */
Meteor.startup(function () {
    Players.remove({});
    var names = ["Ada Lovelace", "Grace Hopper", "Marie Curie",
        "Carl Friedrich Gauss", "Nikola Tesla", "Claude Shannon", "Albert Einstein", "Isaac Newton"];
    _.each(names, function (name) {
        Players.insert({
            name: name,
            score: Math.floor(Random.fraction() * 10) * 5
        });
    });
});

Meteor.publish('topPlayers', function (limit){
    return Players.find({}, {sort: {score: -1}, limit: limit});
});

Meteor.publish('firstPlayers', function (limit){
    return Players.find({}, {sort: {name: 1}, limit: limit});
});