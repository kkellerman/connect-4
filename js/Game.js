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

           /**Returns active player @return {Object} player - The active player
        This getter method should return the Player object whose active property is equal to true*/
        get activePlayer()
        {
        return this.players.find(player => player.active);
        }


       createPlayers() {
    const players = [new players('Player 1', 1, '#e15258',true),
                    new players('Player 2', 2, '#e59a13')];
    return players;
    }

//Starts Game
    startGame(){
        this.board.drawHTMLBoard();
        this.activePlayer.activeToken.drawHTMLBoard();
        this.ready= true;

        }

    
       
       /**
        * Branches code, depending on what key player presses
        * @param   {Object}    e - Keydown event object
        */
       handleKeydown(e) {  
           if(this.ready){
               if(e.key === "ArrowLeft") {
                 this.activePlayer.activeToken.moveLeft();   // move left
               } else if (e.key === "ArrowRight"){
                this.activePlayer.activeToken.moveRight(this.board.columns);
               } else if (e.key === "ArrowDown") {
                   //play token
           } 
      
        }
    
        playToken(){
            let spaces = this.board.spaces;
            let activeToken = this.activePlayer.activeToken;
            let targetColumn = spaces[activeToken.columnLocation];
            let targetSpace = null;
            
            for (let space of targetColumn){
                if(space.token === null) {
                    targetSpace = space;

                }
            }
            
            if (targetSpace !== null) {
                game.ready = false;
                activeToken.drop(targetSpace);
            }

        
     }

}
}
