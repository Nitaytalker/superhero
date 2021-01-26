

function getInfoHero(event){
    event.preventDefault();
    let allInputs = document.querySelectorAll('form input');
    let name=allInputs[0].value;
    let mainStrength=allInputs[1].value;
    let picture=allInputs[2].value;
    // console.log(name);
    // console.log(mainStrength);
    // console.log(picture);
    if(name =='' ){
        alert('set your hero name');
        return;
    }else if(mainStrength==''){
        alert('set your hero Strength');
        return;
    }else if(picture==''){
        alert('set your hero img');
        return;
    }
    let myHero = new Superhero(name,mainStrength,picture);
//when is the first hero add need check  20-24 line
    let heros = window.localStorage.getItem("localHero");
    if(heros==null){
        heros =[];
    }
console.log(`${heros}`);
// console.log(myHero);
    heros.push(myHero);
    window.localStorage.setItem("localHero",heros);
    alert('your hero add to gallery');
    window.location.href = 'gallery.html';
    
    
}

