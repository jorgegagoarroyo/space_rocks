// const enemigo1 = {
//     x : 10,
//     y : 20,
//     UI: 'elemento clonado del dom',
//     color: 'brown'
//     setUI: function(){
//         const node = document.querySelector("#plantilla_enemigo")
//         enemigo1.UI = node.cloneNode(true)
//         document.querySelector(".ecenario").appendChild(enemigo1.UI)

//     },
//     setPosition: function(){
//         enemigo1.UI.style.top = `${enemigo1.y}px`;
//         enemigo1.UI.style.left =  `${enemigo1.x}px`;
//     },
// }

// enemigo1.setUI()
// enemigo1.setPosition()









// console.log(enemigo1.UI)
// enemigo1.setUI()
// console.log(enemigo1.UI)



// const node = document.querySelector("#plantilla_enemigo")
// const clone = node.cloneNode(true)

// const ecenario = document.querySelector(".ecenario")
// ecenario.appendChild(clone)



// const enemigo1 = new Enemigo(100,50)
// enemigo1.setInit()

// const enemigo2 = new Enemigo(1500,300,-5,2)
// enemigo2.setInit()

// const enemigo3 = new Enemigo(10,500,5,-2)
// enemigo3.setInit()



//para cambiar valores enemigo
// if( elemento.y < -200 || elemento.y > hy+200 || elemento.x < -200 || elemento.x > wx+200){
//     let pos = nuevosDatos()
//     elemento.x = pos[0]
//     elemento.y = pos[1]
//     elemento.velx = pos[2]
//     elemento.vely = pos[3]
//     console.log(enemigos)
// }






 // document.addEventListener("keydown", (elemento)=>{
        //     if(elemento.key == "a"){
        //         this.x -= this.vel;
        //     }
        //     if(elemento.key == "d"){
        //         this.x += this.vel;
        //     }
        //     if(elemento.key == "w"){
        //         this.y -= this.vel;
        //     }
        //     if(elemento.key == "s"){
        //         this.y += this.vel
        //     }
        //     this.setPosition()
        //     //console.log(elemento.key) 
        // })








// const rocas = 5
// var enemigos = []

// const wx = window.innerWidth
// const hy = window.innerHeight


// function mover(nave){
//     const frame = setInterval(() => {

//         nave.mover()
//         enemigos.forEach((elemento) => {
//             elemento.setMover()
//             if(elemento.x > wx+100){
//                 elemento.x = -100 
//             }
//             if(elemento.x < -100){
//                 elemento.x = (wx+100)
//             }
//             if(elemento.y < -100){
//                 elemento.y = hy+100
//             }
//             if(elemento.y > hy+100){
//                 elemento.y = -100
//             }
//             nave.colition(elemento)
//         });
//      }, 50);
 
// }

// function crearRocas(){
//     for(let i=0; i< rocas; i++){
//         enemigos.push(crearRoca())
//     }
// }

// function crearRoca(){
//     let pos = nuevosDatos()
//     let ene = new Enemigo(pos[0], pos[1], pos[2], pos[3]);
//     ene.setInit()
//     return ene;
// }

// function nuevosDatos(){
//     let x = datosPos(wx + 200)
//     let y = datosPos(hy + 200)
//     let vx = datosVel(5, x, wx)
//     let vy = datosVel(5, y, hy)

//     pos = [ x, y, vx, vy]
//     return pos
// }

// function datosPos(total){
//     let temp = Math.floor(Math.random()*total - 100);
//     if(temp > 0 && temp < wx){
//         temp = datosPos(total)
//     }
//     return temp
// }

// function datosVel(vel, pos, val){
//     let temp = Math.ceil(Math.random()*vel)
//     if( pos > val/2){
//         temp *=(-1)
//     }
//     return temp
// }







// function inicio(){
//     crearRocas()
//     const nave1 = new Nave(wx/2, hy/2)
//     return nave1;
// }
















// class Enemigo{
//     constructor(x=0, y=0, velx=1, vely=1){
//         this.x = x,
//         this.y = y,
//         this.velx = velx
//         this.vely = vely
//         this.UI = ""
//     }

//     setUI(){
//         let node = document.querySelector("#plantilla_enemigo");
//         this.UI = node.cloneNode(true);
//         document.querySelector(".ecenario").appendChild(this.UI)
//     }
//     setPosition(){
//         this.UI.style.top = `${this.y}px`;
//         this.UI.style.left = `${this.x}px`;
//     }
//     setVisible(){
//         this.UI.style.display="block"
//     }
//     setInit(){
//         this.setUI()
//         this.setPosition()
//         this.setVisible()
//     }
//     setMover(){
//         this.x += this.velx;
//         this.y += this.vely;
//         this.setPosition()
//     }

// }