/**
 * Created by Tally on 02/06/2015.
 */

angular.module('LeaderBoard')
.controller ('leaderBoardCtrl-top', function ($scope, $meteor){

    $scope.limitTop = 3;

    $scope.players = $scope.$meteorCollection(Players);

    $meteor.autorun($scope, function() {
        $scope.$meteorSubscribe('topPlayers', $scope.getReactively ('limitTop'));
    });

    // this is for increasing points.
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



