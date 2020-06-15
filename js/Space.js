class Space{
    constructor(x,y){
        this.x = x;
        this.y=y;
        this.id=`space-${x}-${y}`;
        this.tokane = null;
        this.diameter = 76;
        this.radius = this.diameter/2;
    }



/** Updates space to reflect a token has been dropped into it.
 * @param {Object} token - The dropped token
 */
mark(token){



}



/** Getter Method
 * Checks if space has an associated token to find its owner
 * @return  {(null|Object)} Returns null or the owner object of the space's associated token.
 */

get owner(){
    if (this.token === null){
        return null;
   } else {
       return this.token.owner;
   }

}


/** 
 * Checks if there a winner on the board after each token drop.
 * @param   {Object}    Targeted space for dropped token.
 * @return  {boolean}   Boolean value indicating whether the game has been won (true) or not (false)
 */
checkForWin(target) {
    const owner = target.token.owner;
    let win = false

     // vertical
     for (let x = 0; x < this.board.columns; x++ ){
        for (let y = 0; y < this.board.rows - 3; y++){
            if (this.board.spaces[x][y].owner === owner && 
                this.board.spaces[x][y+1].owner === owner && 
                this.board.spaces[x][y+2].owner === owner && 
                this.board.spaces[x][y+3].owner === owner) {
                    win = true;
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

}



    //Render Method
drawSVGSpace(){
const svgSpace = document.createElementNS("http://www.w3.org/2000/svg", "circle"); //new element created
//attirbutes of element
svgSpace.setAttributeNS(null, "id", this.id);
svgSpace.setAttributeNS(null, "cx", (this.x * this.diameter) + this.radius);
svgSpace.setAttributeNS(null, "cy", (this.y * this.diameter) + this.radius);
svgSpace.setAttributeNS(null, "r", this.radius - 8);
svgSpace.setAttributeNS(null, "fill", "black");
svgSpace.setAttributeNS(null, "stroke", "none");

document.getElementById("mask").appendChild(svgSpace);   


     }
}