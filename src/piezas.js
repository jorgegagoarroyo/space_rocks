class Piezas extends Enemigo{
    constructor(x, y, vx, vy){
        super(x, y, vx, vy)
        this.cant = 0
        this.good = true
        this.visible = true


        this.setInit()
        this.UI.classList.replace("elemento","pieza")
    }

    show(){
        setInterval(()=>{
            this.UI.style.display="block"
            this.visible = true
        }, (Math.random()*9000)+1000)
    }

    broke(){
        console.log("piezas "+this.cant)
        this.visible=false
        this.UI.style.display = "none"
        this.show()
    }

    


}