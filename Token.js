class Token{
     //start constructors for all properties
     constructor(index, owner){
        this.owner = owner;
        this.id = `token-${index}-${owner.id}`; //temperate literal
        this.dropped = false;  //default to false because at start no tokens dropped

      


    }
}

