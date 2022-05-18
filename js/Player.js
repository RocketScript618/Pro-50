class Player{
    constructor(){
        this.name = null;
        this.lobby = null;
        this.index = null;
        this.positionX = 0;
        this.positionY = 0;
        this.score = 0;
    }

    addToLobby(lobbySelection){

        lobbySelection = "lobby" + lobbySelection;

        if(lobbies[lobbySelection].playerCount >= 2){
            lobby = allLobbies.lobbyCount;

            //console.log(lobby)
            lobby = new Lobby(lobby);
            lobby.addLobby();

            Lobby.getData("lobby"+lobby.number);

            this.addToLobby(lobby.number);

        } else if(lobbySelection != null){

            //int(lob);
            //console.log(lobbies[lob])


            this.index = lobbies[lobbySelection].playerCount+1;

            
            Lobby.updateData(lobbySelection,this.index);

            if (this.index === 1) {
            this.positionX = width / 2 - 100;
            } else {
            this.positionX = width / 2 + 100;
            }

            var lobbyIndex = "lobbies/"+lobbySelection+"/players/player" + this.index;
            
            database.ref(lobbyIndex).set({
            name: this.name,
            positionX: this.positionX,
            positionY: this.positionY,
            score: this.score,
            lobby: lobbySelection
            });
        }
        
    }

    update() {
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).update({
          name: this.name,
          positionX: this.positionX,
          positionY: this.positionY,
          rank: this.rank,
          score: this.score
         });
      }

      static getPlayerInfo(){
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value", (data) => {
            allPlayers = data.val();
        })
      }
}