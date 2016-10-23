angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
  var mysubway='';
  window.cbk = function(){
    mysubway = subway("mysubway",{
      easy: 1,
      adcode: '1100'
    });

    mysubway.event.on("subway.complete", function () {
      // mysubway.addInfoWindow('南锣鼓巷');
      var center = mysubway.getStCenter('南锣鼓巷');
      mysubway.setCenter(center);
    });
    $scope.subwaycle = function () {
      mysubway.clearInfoWindow();
      mysubway.clearRoute();
    }

    console.log(mysubway);
  };



})

.controller('ChatsCtrl', function($scope) {
  window.cbk = function(){
    var mysubway = subway("mysubway",{
      easy: 1,
      adcode: '1100'
    });
    $scope.subwayserch={
      sub:''
    };

    mysubway.event.on("subway.complete", function () {
      // var id = mysubway.getIdByName('8号线', 'line');
      mysubway.showLine($scope.subwayserch.sub);
      var $select_obj = document.getElementById('g-select');
      // mysubway.setFitView($select_obj);
      var center = mysubway.getSelectedLineCenter();
      mysubway.setCenter(center);

    });
  $scope.subways = function(){
    mysubway.clearInfoWindow();
    mysubway.clearRoute();
    mysubway.showLine($scope.subwayserch.sub);
    var center = mysubway.getSelectedLineCenter();
    mysubway.setCenter(center);
  };
    console.log(mysubway);
  };

})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  window.cbk = function(){
    var mysubway = subway("mysubway",{
      easy: 1,
      adcode: '1100000'
    });
  $scope.person={
    start:'北土城',
    end:'天安门西'
  }
    $scope.start='北土城';
    $scope.end='天安门西';
    mysubway.event.on("subway.complete", function () {

      mysubway.setStart($scope.person.start);
      mysubway.setEnd($scope.person.end);

      mysubway.route($scope.start, $scope.person.end, {
        closeBtn: true
      });
      $scope.changeSE = function () {
        mysubway.setStart($scope.person.start);
        mysubway.setEnd($scope.person.end);
        mysubway.route($scope.person.start, $scope.person.end, {
          closeBtn: true
        });
      }
    });
  };

});
