function randomFight() {
    console.log(allHeros.length);
    if(allHeros.length<=1){
        window.location.href = 'add-hero.html';
        alert('need 2 hero min');
        return;
    }
    let toFight1 = Math.floor(Math.random() * allHeros.length);
    let toFight2 = Math.floor(Math.random() * allHeros.length);
    
    while (toFight1 == toFight2) {
        toFight2 = Math.floor(Math.random() * allHeros.length);
    }
    setTimeout(function(){ 
        alert(`the winner is ${allHeros[toFight1].name}`)
     }, 5000);
   
    document.getElementById("card1").innerHTML = `
    <div class="">
                <div class="responsive">
                    <div class="gallery">
                        <a target="_blank">
                            <img src="${allHeros[toFight1].picture}" alt="Cinque Terre" width="400" height="200">
                        </a>
                        <div class="desc">Name:${allHeros[toFight1].name}.<br> Power: ${allHeros[toFight1].mainStrength}</div>
                    </div>
                </div>
            </div>`;
    document.getElementById("card2").innerHTML = `
    <div class="">
                <div class="responsive">
                    <div class="gallery">
                        <a target="_blank">
                            <img src="${allHeros[toFight2].picture}" alt="Cinque Terre" width="400" height="200">
                        </a>
                        <div class="desc">Name:${allHeros[toFight2].name}.<br> Power: ${allHeros[toFight2].mainStrength}</div>
                    </div>
                </div>
            </div>`;

    document.getElementById("removehidden").classList.remove("hidden");
}
randomFight()