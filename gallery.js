

function mesudar() {
    document.querySelector('#bodyId').innerHTML = ``;

    for (const hero of allHeros) {
        document.querySelector('#bodyId').innerHTML += `
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
    }
}

mesudar();

