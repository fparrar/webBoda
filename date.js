let tiempo = setInterval(()=>{
        let fechaActual = new Date().getTime();
        let fechaBoda = new Date('2020-03-28');
        let restanteMs= fechaBoda-fechaActual;
        console.log(restanteMs);
        let horas = (miliseconds)=> Math.ceil(miliseconds/3600000);
        let dias = (miliseconds)=> Math.ceil(miliseconds/86400000);
        let segundos = (miliseconds)=>Math.ceil(miliseconds/1000);

        document.getElementById("horas").innerHTML = `${horas(restanteMs)} horas`;
        document.getElementById("dias").innerHTML = `<strong>${dias(restanteMs)} dias<strong>`;
        document.getElementById("segundos").innerHTML = `${segundos(restanteMs)} segundos`;
    },1000)    










