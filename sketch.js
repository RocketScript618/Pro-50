var canvas;
var database, gameState;
var lobby,form, player,players;
var allLobbies;
var lobbies = [];

//BP
function preload() {
  
}

//BP
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();

  Lobby.getLobbiesInfo();

  form = new Form();
  form.display();

}

//BP
function draw() {
  background("black");

  Lobby.getLobbiesInfo();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}