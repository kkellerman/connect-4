class Token{
     //start constructors for all properties
     constructor(index, owner){
        this.owner = owner;
        this.id = `token-${index}-${owner.id}`; //temperate literal
        this.dropped = false;  //default to false because at start no tokens dropped
   
    }

    /**
     * Gets associated htmlToken.
     * @return {slement} Html element associated with token object
     */
    get htmlToken(){
        return document.getElementById(this.id);
    }

    /**
     * Draws new HTML token
     */
    drawHTMLToken(){
        const token = document.createElement('div');
        document.getElementById('game-board-underlay').appendChild(token);
        token.setAttribute('id', this.id);
        token.setAttribute('class', 'token');
        token.style.backgroundColor=this.owner.color;


    }

}
