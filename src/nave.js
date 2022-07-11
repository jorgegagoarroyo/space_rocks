class Nave extends Elemento{
    constructor(x=300, y=300, velx=5, vely=5, w=100, h=50){
        super(x-(w/2), y-(h/2))
        this.velx = velx
        this.vely = vely
        this.velInix = velx
        this.velIniy = vely
        this.w = w
        this.h = h
        this.vida = 3
        this.up=false
        this.down=false
        this.right=false
        this.left=false
        this.hit = true


        this.setInit()
        this.UI.classList.replace("elemento","nave")
        this.UI.style.width = `${w}px`;
        this.UI.style.height = `${h}px`;
        this.UI.style.backgroundColor = "transparent"
        this.UI.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2014/04/02/10/38/spaceship-304073_960_720.png')"
        this.UI.style.backgroundRepeat = "no-repeat"
        this.UI.style.backgroundSize="cover"

        this.eventos()    
    }
    eventos(){
        document.addEventListener("keydown", (elemento)=>{
            let key = elemento.key
            //console.log("press "+key)
            if(key == "w" || key == "ArrowUp"){
                this.up = true
            }
            if(key == "s" || key == "ArrowDown"){
                this.down = true
            }
            if(key == "a" || key == "ArrowLeft"){
                this.left = true
            }
            if(key == "d" || key == "ArrowRight"){
                this.right = true
            }
        })

        document.addEventListener("keyup", (elemento)=>{
            let key = elemento.key
            //console.log("up "+key)
            if(key == "w" || key == "ArrowUp"){
                this.up = false
            }
            if(key == "s" || key == "ArrowDown"){
                this.down = false
            }
            if(key == "a" || key == "ArrowLeft"){
                this.left = false
            }
            if(key == "d" || key == "ArrowRight"){
                this.right = false
            }
        })
    }  

    mover(){
        if(this.up){
            this.y -= this.vely
        }
        if(this.down){
            this.y += this.vely
        }
        if(this.right){
            this.x += this.velx
        }
        if(this.left){
            this.x -= this.velx
        }
        this.setPosition()
    }

    colition(e){
      
        if (this.x <e.x+100 && this.x+this.w>e.x && this.y < e.y+100 && this.y+this.h>e.y){ 
            if(e.good){
                
                return "good"
            }
            if(this.hit){
                this.hit = false
                this.UI.style.opacity ="0.7"
                this.vida --
                //console.log(this.vida)
                this.velx = 10
                this.vely = 10
                if(this.vida == 0){
                    this.up = false
                    this.down = false
                    this.right = false
                    this.left = false
                    return "muerto"      
                }
                setInterval(()=>{
                    this.hit=true
                    this.velx = this.velInix
                    this.vely = this.velIniy
                    this.UI.style.opacity ="1"
                }, 2000)
                return "hit"
            }
        }  
    }


}