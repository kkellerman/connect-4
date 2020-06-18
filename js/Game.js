class Game{
            //start constructors for all properties
        constructor(){     //no arguments because board is static
           this.board = new Board();  //sets to a new board object
           this.players=this.createPlayers();  //hold array of two players
           this.ready= false;
       }
       /** Creates two player objects
         * @return  {Array}    An array of two Player objects.
         */

           /**Returns active player @return {Object} player - The active player
        This getter method should return the Player object whose active property is equal to true*/
        get activePlayer() {
            return this.players.find(player => player.active);
        }
        
        
        /** 
         * Creates two player objects
         * @return  {array}    An array of two player objects.
         */
        createPlayers() {
            const players = [new Player('Player 1', 1, '#e15258', true),
                             new Player('Player 2', 2, '#e59a13')];
            return players;
        }

//Initialize Game
    startGame(){
        this.board.drawHTMLBoard();
        this.activePlayer.activeToken.drawHTMLBoard();
        this.ready = true;
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
                this.playToken();
                   //play token
           } 
      
        }
    }


    /** Finds Space object to drop Token into, drops Token  */

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
               
                activeToken.drop(targetSpace, function(){
                    game.updateGameState(activeToken, targetSpace);           
                });  
            }
     }


    /** 
     * Updates game state after token is dropped. 
     * @param   {Object}    token - The token that's being dropped.
     * @param   {Object}    target - Targeted space for dropped token.
     */
    updateGameState(token, target) {
		target.mark(token);

        if (!this.checkForWin(target)) {
            console.log('no win');
			this.switchPlayers();
            
            if (this.activePlayer.checkTokens()) {
                this.activePlayer.activeToken.drawHTMLToken();
                this.ready = true;
            } else {
                this.gameOver('No more tokens');
            }
        } else {
			console.log('win');
            this.gameOver(`${target.owner.name} wins!`)
        }			
    }

    
    /** 
     * Checks if there a winner on the board after each token drop.
     * @param   {Object}    target - Targeted space for dropped token.
     * @return  {boolean}   Boolean value indicating whether the game has been won (true) or not (false)
     */
    checkForWin(target){
    	const owner = target.token.owner;
    	let win = false;
		console.log('checkforwin called');
    	// vertical
    	for (let x = 0; x < this.board.columns; x++ ){
            for (let y = 0; y < this.board.rows - 3; y++){
				console.log(x,y);
				console.log(y+1);
				console.log(y+2);
				console.log(y+3);
                if (this.board.spaces[x][y].owner === owner && 
    				this.board.spaces[x][y+1].owner === owner && 
    				this.board.spaces[x][y+2].owner === owner && 
    				this.board.spaces[x][y+3].owner === owner) {
                    	win = true;
						console.log(win);
                }           
            }
        }
	
    	// horizontal
    	for (let x = 0; x < this.board.columns - 3; x++ ){
            for (let y = 0; y < this.board.rows; y++){
                if (this.board.spaces[x][y].owner === owner && 
    				this.board.spaces[x+1][y].owner === owner && 
    				this.board.spaces[x+2][y].owner === owner && 
    				this.board.spaces[x+3][y].owner === owner) {
                    	win = true;
                }           
            }
        }
		
    	// diagonal
    	for (let x = 3; x < this.board.columns; x++ ){
            for (let y = 0; y < this.board.rows - 3; y++){
                if (this.board.spaces[x][y].owner === owner && 
    				this.board.spaces[x-1][y+1].owner === owner && 
    				this.board.spaces[x-2][y+2].owner === owner && 
    				this.board.spaces[x-3][y+3].owner === owner) {
                    	win = true;
                }           
            }
        }
	
    	// diagonal
    	for (let x = 3; x < this.board.columns; x++ ){
            for (let y = 3; y < this.board.rows; y++){
                if (this.board.spaces[x][y].owner === owner && 
    				this.board.spaces[x-1][y-1].owner === owner && 
    				this.board.spaces[x-2][y-2].owner === owner && 
    				this.board.spaces[x-3][y-3].owner === owner) {
                    	win = true;
                }           
            }
        }
	
    	return win;
    }


    /** 
     * Switches active player. 
     */
	switchPlayers() {
		for (let player of this.players) {
			player.active = player.active === true ? false : true;
		}
    }
    

    /** 
     * Displays winner info.
     * @param   {String}    message - Game over message.      
     */
    gameOver(message) {
		document.getElementById('game-over').style.display = 'block';
        document.getElementById('game-over').textContent = message;
    }
}