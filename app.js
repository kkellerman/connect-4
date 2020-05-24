//listeners & Event handlers bridge between the visual and objects files
//Listens for click on `#begin-game` and calls startGame() on game object

const game = new Game();


  
  document.getElementById('begin-game').addEventListener('click', function(){
    game.startGame();

    this.style.display = 'none';
    document.getElementById('play-area').style.opacity = '1';
  });

  