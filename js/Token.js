class Token{
     //start constructors for all properties
     constructor(index, owner){
        this.owner = owner;
        this.id = `token-${index}-${owner.id}`; //temperate literal
        this.dropped = false;  //default to false because at start no tokens dropped
        this.columnLocation = 0;  //moveLeft & moveRight will update this value
   
    }

    /**
     * Gets associated htmlToken.
     * @return {slement} Html element associated with token object
     */
    get htmlToken(){
        return document.getElementById(this.id);
    }


     /** 
     * Gets left offset of html element.
     * @return  {number}   Left offset of token object's htmlToken.
     */
    get offsetLeft(){
        return (this.htmlToken.offsetLeft)
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
    
    /**Moves html token one column to left. */
    moveLeft(){ 
        if(this.columnLocation >0){
            this.htmlToken.style.left = this.offsetLeft -76;
            this.columnLocation-=1;
        }
    }

    /**Move html token one column to right. */
    moveRight(columns){
        if(this.columnLocation < columns - 1){
            this.htmlToken.style.left = this.offsetLeft + 76;
            this.columnLocation +=1;

        }
    }

/** Drops html token into targeted board space.
 * @param   {Object}   target - Targeted space for dropped token.
 * @param   {function} reset  - The reset function to call after the drop animation has completed. */

    drop(target, reset){
        this.dropped = true; //set token object propetery to true

        $(this.htmlToken).animate({
            top: (target.y * target.diameter)
        }, 750, 'easeOutBounce', reset);

    }

    


}
