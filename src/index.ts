function sendSpaceship (name:string, captain:string) {
    const spaceship = {
        name, 
        captain,
        speed: 20,
        inMission: true,
        crew: []
    }

    alert(`A nave ${spaceship.name} comandada pelo Cap ${spaceship.captain} foi enviada em uma mission`)
    return spaceship
}

function accelerate(targetSpeed: number, spaceship: { name: string, speed: number}) {
    if (spaceship.speed > targetSpeed) {

        alert(`Reduzindo a velocidade da ${spaceship.name} para ${targetSpeed}...`)
        
    } else if (spaceship.speed < targetSpeed){

        alert(`Aumentando a velocidade da ${spaceship.name} para ${targetSpeed}...`)
        
    } else {
        alert(`Mantendo a velocidade da ${spaceship.name}...`)
    }
}