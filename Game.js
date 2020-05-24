class Game{
            //start constructors for all properties
        constructor(){     //no arguments because board is static
           this.board = new Board();  //sets to a new board object
           this.players=this.createPlayers();  //hold array of two players
           this.ready= false;
       }
       /** 
         * Creates two player objects
         * @return  {Array}    An array of two Player objects.
         */
createPlayers() {
    const players = [new players('Player 1', 1, '#e15258',true),
                    new players('Player 2', 2, '#e59a13')];
    return players;
                }

//Gets game ready for play
    startGame(){
    

        }



}