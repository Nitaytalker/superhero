class Superhero{
    constructor(name, mainStrength, picture){
        this.name=name;
        this.mainStrength=mainStrength;
        this.picture=picture;
    }
}
const allHeros = [
    new Superhero("Supermen","Fly",'Superman_Vol_5_1_Textless.jpg'),
    new Superhero("Spidermen","Spider",'spider-man.png'),
    new Superhero("Thor", "Hummer", "thor.jpg")
];

function inStart(){
    let heros = window.localStorage.getItem("localHero");
        if(heros==null){
            heros =[];
           
        }else{
            heros= JSON.parse(localStorage.getItem("localHero")) 
        }
        for(let hero of heros){
            hero = new Superhero(hero.name,hero.mainStrength,hero.picture);
            allHeros.push(hero);
        }
        console.log(allHeros);
}

function GoToAddHero(event){
    event.preventDefault();
    window.location.href = 'add-hero.html';
}


inStart()