function randomFight() {
    if(allHeros.length<=1){
        window.location.href = 'add-hero.html';
        alert('need 2 hero min');
        return;
    }
    let toFight1 = Math.floor(Math.random() * allHeros.length);
    let toFight2 = Math.floor(Math.random() * allHeros.length);
    if()
    while (toFight1 == toFight2) {
        toFight2 = Math.floor(Math.random() * allHeros.length);
    }
    setTimeout(function(){ 
        alert(`the winner is ${allHeros[toFight1].name}`)
     }, 5000);
   
    document.getElementById("card1").innerHTML = `
    <img src="${allHeros[toFight1].picture}"
     class="card-img-top" alt="..."></img>
     <div class="card-body">
     <h5 class="card-title">Name:${allHeros[toFight1].name}</h5>
     <p class="card-text">Power: ${allHeros[toFight1].mainStrength}</p>
    </div>`;
    document.getElementById("card2").innerHTML = `
    <img src="${allHeros[toFight2].picture}"
     class="card-img-top" alt="..."></img>
     <div class="card-body">
     <h5 class="card-title">Name:${allHeros[toFight2].name}</h5>
     <p class="card-text">Power: ${allHeros[toFight2].mainStrength}</p>
    </div>`;

    document.getElementById("removehidden").classList.remove("hidden");
}
randomFight()