/**
 * Created by Tally on 02/06/2015.
 */

angular.module('LeaderBoard')
    .controller ('leaderBoardCtrl-first', function ($scope, $meteor){


    $scope.limitFirst = 4;

    $meteor.autorun($scope, function() {
        $scope.players = $scope.$meteorCollection(Players).subscribe('firstPlayers', $scope.getReactively ('limitFirst'));
    });


    $scope.selectedPlayer = undefined;

    $scope.addPoints = function () {
        if ($scope.selectedPlayer) {
            $scope.selectedPlayer.score +=5;
        }
    };

    $scope.isSelected = function (player) {
        return $scope.selectedPlayer && $scope.selectedPlayer._id === player._id;
    };

    $scope.selectPlayer = function (player){
        $scope.selectedPlayer = $scope.$meteorObject (Players, player._id) ;
    };

});




