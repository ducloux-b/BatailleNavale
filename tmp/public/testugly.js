angular.module("app").factory("RequestService",["$http",function(e){"use strict";return{pseudo:"benoit",getAll:function(){var t=e({method:"GET",url:"http://192.168.229.21:3000/games"}).then(function(e){console.log("success RequestsService",e);var t=angular.copy(e.data);return t}).then(function(e){return e.filter(function(e){return!e.user2||e.user1.pseudo===this.pseudo||e.user2.pseudo===this.pseudo}.bind(this))}.bind(this));return t},join:function(t){return t.user2={pseudo:this.pseudo},e.put("http://192.168.229.21:3000/games/"+t.id,t)},save:function(t){return t.user1.pseudo=this.pseudo,e.post("http://192.168.229.21:3000/games",t).then(function(e){console.log("success",e)})}}}]);