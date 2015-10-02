/**
 * Created by Tallyb on 02-Oct-15.
 */

angular.module('LeaderBoard').config(

    function ($urlRouterProvider, $stateProvider, $locationProvider) {

        //main routes of the application

        $locationProvider.html5Mode(true);

        $stateProvider
            .state('top', {
                url: '/top',
                templateUrl: 'client/leaderboard-top.ng.html',
                controller: 'leaderBoardCtrl-top'

            })


            .state('first', {
                url: '/first',
                templateUrl: 'client/leaderboard-first.ng.html',
                controller: 'leaderBoardCtrl-first'

            });

        $urlRouterProvider.otherwise("/");


    });