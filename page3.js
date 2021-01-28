
for(const hero  of allHeros){
    document.querySelector('#herosList').innerHTML +=`
    <button onclick="changeIamgeOfHero(${hero.name})" id="${hero.name}" type="button" class="list-group-item list-group-item-action">${hero.name}</button>`
    // console.log(hero);
    // console.log(hero.name, hero.mainStrength, hero.picture);
}
console.log(allHeros);
let counter = -1;
const globalma = [];
function changeIamgeOfHero(hero){
    for(const heroCheck of allHeros){
        if(heroCheck.name == hero.id){
            document.querySelector('#print').innerHTML =`<img src="${heroCheck.picture}" alt="Cinque Terre" width="300" height="200">`;
            // console.log(heroCheck.picture);
            globalma.push(heroCheck);
            counter++;
        }
    }
}


function changeHeroPic(){
   const newSrc = document.querySelector('#srcInput').value;
   globalma[counter].picture = newSrc;
   document.querySelector('#print').innerHTML =`<img src="${newSrc}" alt="Cinque Terre" width="300" height="200">`;
   alert('The image has been updated');
    // console.log(globalma[counter]);
    let allHeros = window.localStorage.getItem("localHero");
    if(allHeros==null){
        allHeros =[];
       
    }else{
        allHeros= JSON.parse(localStorage.getItem("localHero")) 
    }

    for(const superHero of allHeros){
        if(superHero.name == globalma[counter].name){
            superHero.picture = globalma[counter].picture;
        }
    }
    window.localStorage.setItem("localHero",JSON.stringify(allHeros));
}













