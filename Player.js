class Player {
  constructor(){
    this.name = null;
    this.distance = 0;
    this.index = null;
  }
  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + playerCount;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }
  static getplayerinfo(){
    var playerinfo = database.ref('players')
    playerinfo.on('value',(data) =>{
      allplayers = data.val();
    })
  }
}
