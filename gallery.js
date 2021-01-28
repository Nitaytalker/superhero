

function mesudar() {
    let counter = 0;
    let counter1 = 0;
    document.querySelector('#bodyId').innerHTML = ` <div id="counter${counter1}" class="row justify-content-around">`;
    
    for (const hero of allHeros) {
        document.querySelector(`#counter${counter1}`).innerHTML += `

    <div class="col-3">
                <div class="responsive">
                    <div class="gallery">
                        <a target="_blank">
                            <img src="${hero.picture}" alt="Cinque Terre" width="300" height="200">
                        </a>
                        <div class="desc">Name: ${hero.name}.<br> Power: ${hero.mainStrength}</div>
                    </div>
                </div>
            </div>`
            counter+=1;
            console.log(counter);
            if(counter == 3){
                counter1++;
                document.querySelector('#bodyId').innerHTML += ` <div id="counter${counter1}" class="row justify-content-around">`;
                counter=0;
            }
    }
}

mesudar();

