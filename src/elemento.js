class Elemento{

    constructor(x=0, y=0){
        this.x = x,
        this.y = y,
        this.UI = ""
    }

    setUI(){
        let node = document.querySelector("#plantilla_elemento");
        this.UI = node.cloneNode(true);
        document.querySelector(".juego").appendChild(this.UI)
    }
    setPosition(){
        this.UI.style.top = `${this.y}px`;
        this.UI.style.left = `${this.x}px`;
    }
    setVisible(){
        this.UI.style.display="block"
    }
    setInit(){
        this.setUI()
        this.setPosition()
        this.setVisible()
    }

}
