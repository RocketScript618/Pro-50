class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "Ingresa tu nombre");
    this.playButton = createButton("Play");
    
    this.resetButton = createButton("Reiniciar");
    this.titleImg = createImg("./assets/title.png", "game title");
    this.greeting = createElement("h2");
  }

  setElementsPosition() {
    this.titleImg.position(120, 160);
    this.input.position(width / 2 - 110, height / 2 - 80);
    this.playButton.position(width / 2 - 90, height / 2 - 20);
    this.greeting.position(width / 2 - 300, height / 2 - 100);
    
    this.resetButton.position(width  - 250,  20);
  }

  setElementsStyle() {
    this.titleImg.class("gameTitle");
    this.input.class("customInput");
    this.playButton.class("customButton");
    this.resetButton.class("customButton2");
    this.greeting.class("greeting");
  }

  //BP
  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
  }

  //BP
  handleMousePressed() {
    this.playButton.mousePressed(() => {
      this.input.hide();
      this.playButton.hide();
      var message = `
      Hola ${this.input.value()}
      </br>espera a que otro jugador se una...`;
      this.greeting.html(message);

      var lbs = 0;
      var free = 0;
      var lobbySearch = 0
      
      if(allLobbies.lobbyCount == 0){

        lobby = allLobbies.lobbyCount;

        //console.log(lobby)
        lobby = new Lobby(lobby);
        lobby.addLobby();

        Lobby.getData("lobby"+lobby.number);

        

        player = new Player();
        player.name = this.input.value();
        player.addToLobby(lobby.number);
      } else{

        player = new Player();
        player.name = this.input.value();

        for(lbs = 0; lbs<allLobbies.lobbyCount; lbs+1){
          lobbySearch = "lobby" + lbs;
          if(lobbies[lobbySearch].isFull == false){
            free = lbs;
            
            
            console.log(free + " for")

            lbs = allLobbies.lobbyCount;
          } else{
              lbs += 1;
              
          }
        }

        player.addToLobby(free);
      }
      
      
    });

    this.resetButton.mousePressed(() => {
      player.updateCount(0);
      game.update(0)
      player.resetPlayers();
    })

  }



  display() {
    this.setElementsPosition();
    this.setElementsStyle();
    this.handleMousePressed();
  }
}
