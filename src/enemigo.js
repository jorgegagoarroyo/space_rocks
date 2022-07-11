class Enemigo extends Elemento{
    constructor(x=0, y=0, velx=1, vely=1){
        super(x, y)
        this.velx = velx;
        this.vely = vely;
    }


    setMover(){
        this.x += this.velx;
        this.y += this.vely;
        this.setPosition()
    }
}


