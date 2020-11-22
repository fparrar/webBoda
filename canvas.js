
    let canvas = document.getElementById('sky');
    let context= canvas.getContext('2d');
    let context2= canvas.getContext('2d')

class Star {    
    constructor(){
        // let opacity = ()=> Math.random()
        // let color = ()=> `rgba(255, 255, 255, ${opacity()})`;
        let randomPosition = ()=> (Math.random()*100)*(Math.random()*100);
        let randomSize = ()=> (Math.random()) 
        // this.color = color();
        this.size = randomSize();
        // this.opacity = opacity();
        this.coordinateX = randomPosition();
        this.coordinateY = randomPosition();
    }
    paintStar(){
        context.fillStyle=  `rgba(255, 255, 255, ${Math.random()})`
        context.strokeStyle='none';
        context.beginPath();
        context.arc(this.coordinateX, this.coordinateY, this.size*1, 0, 2 * Math.PI);
        context.stroke();
        context.fill(); 
    }
}

let sky = []
const createSky = (numberStars)=>{
    for (let i = 0; i < numberStars; i++) {
        sky.push(new Star)            
    }         
}
createSky(15000);
console.log(sky)

const paintSky = ()=>{
    sky.forEach(element => element.paintStar());
    setTimeout(()=>requestAnimationFrame(paintSky),Math.random*300)
    
}
paintSky()

///










