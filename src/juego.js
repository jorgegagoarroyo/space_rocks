var wx = window.innerWidth
var hy = window.innerHeight

class Juego{
    constructor(rocas = 5){
        this.rocas = rocas
        this.enemigos = []
        this.pieza = []
        this.nave = this.inicioNave()
        this.document = document.querySelector(".vida")
        this.frame = ""
    }

    mover(){
        this.frame = setInterval(() => {
            wx = window.innerWidth
            hy = window.innerHeight
            this.nave.mover()
            this.enemigos.forEach((elemento) => {
                elemento.setMover()
                if(elemento.x > wx+100){
                    elemento.x = -100 
                }
                if(elemento.x < -100){
                    elemento.x = (wx+100)
                }
                if(elemento.y < -100){
                    elemento.y = hy+100
                }
                if(elemento.y > hy+100){
                    elemento.y = -100
                }
                if(this.nave.colition(elemento)){
                    this.vidas()
                    if(this.nave.vida == 0){ 
                        alert("has muerto")
                        this.rocas=5
                        replay()
                    }
                }
            });

            if(this.pieza.visible){
                this.pieza.setMover()
                if(this.pieza.x > wx+100 || this.pieza.x < -100 || this.pieza.y < -100 || this.pieza.y > hy+100){
                    this.pieza.x = this.datosPos(wx + 200)
                    this.pieza.y = this.datosPos(hy + 200)
                    this.pieza.velx = this.datosVel(Math.random()*10, this.pieza.x, wx)
                    this.pieza.vely = this.datosVel(Math.random()*10, this.pieza.y, hy)
                }
                if(this.nave.colition(this.pieza)){
                    this.vidas()
                    this.pieza.cant +=1
                    // this.pieza.broke()
                    this.pieza.x = this.datosPos(wx + 200)
                    this.pieza.y = this.datosPos(hy + 200)
                    this.pieza.broke()
                    this.nave.velx +=3
                    this.nave.vely +=3
                    this.enemigos.forEach((elemento) => {
                        elemento.velx *=1.3
                        elemento.vely *=1.3
                    })
                }
                if(this.pieza.cant == 5){
                    alert("level up")
                    this.rocas += 2 
                    replay()
                }
            }   
        }, 16);
     
    }
    
    crearRocas(){
        for(let i=0; i< this.rocas; i++){
            this.enemigos.push(this.crearRoca())
        }
    }
    
    crearRoca(){
        let pos = this.nuevosDatos()
        let ene = new Enemigo(pos[0], pos[1], pos[2], pos[3]);
        ene.setInit()
        return ene;
    }

    //crear pieza 
    crearPieza(){
        let pos= this.nuevosDatos()
        let pieza = new Piezas(pos[0], pos[1], pos[2], pos[3])
        this.pieza = pieza
        this.pieza.show()
    }

    datosPos(total){
        let temp = Math.floor(Math.random()*total - 100);
        if(temp > 0 && temp < wx){
            temp = this.datosPos(total)
        }
        return temp
    }
    
    nuevosDatos(){
        let x = this.datosPos(wx + 200)
        let y = this.datosPos(hy + 200)
        let vx = this.datosVel(5, x, wx)
        let vy = this.datosVel(5, y, hy)
        let pos = [ x, y, vx, vy]
        return pos
    }
    
    
    datosVel(vel, pos, val){
        let temp = Math.ceil(Math.random()*vel)
        if( pos > val/2){
            temp *=(-1)
        }
        return temp
    }
    
    inicioNave(){
        const nave = new Nave(wx/2, hy/2)
        nave.vida = 3 //para pruebas rapidas del juego
        return nave
    }

    vidas(){
        let html =""
        for (let i=0; i<this.nave.vida; i++){
            html += `<div class="vidas"></div>`
        }
        this.document.innerHTML = html
    }

    iniciar(){
        this.crearRocas()
        this.crearPieza()
        this.vidas()
        this.mover()
    }

    iniciarNuevo(){
        document.querySelector(".juego").innerHTML=" "
        this.enemigos.forEach((elemento)=>{elemento=null})
        this.nave = null
        this.enemigos = []
        this.pieza = null
        this.pieza = []
        this.nave = this.inicioNave()
        this.iniciar()
    }
}