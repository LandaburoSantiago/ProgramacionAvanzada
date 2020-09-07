const getLastFM = async() => {
    // const apiKey = 'bd171c0a459861fa63452fa6b814a6e2';
    // const respuesta = await fetch(`https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=bd171c0a459861fa63452fa6b814a6e2&format=json&callback`);
    // const {data} = respuesta.json();
    // console.log(respuesta);
    // console.log(data)

    const apiKey = 'bd171c0a459861fa63452fa6b814a6e2';
    const respuesta = await fetch(`https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&limit=10&api_key=${apiKey}&format=json`);
    const {artists} = await respuesta.json();
    console.log(typeof(respuesta));
    console.log(artists);
    let armadoTabla = `<tr>
                        <td><strong>Artista</strong></td>
                        <td><strong>Reproducciones</strong></td>
                        <td><strong>Oyentes</strong></td>
                    </tr>`
    const tabla = document.querySelector("table")
    artists.artist.forEach(element => {
        armadoTabla += `
        <tr>
            <td>${element.name}</td>
            <td>${element.playcount}</td>
            <td>${element.listeners}</td>
        </tr>
        `;
        tabla.innerHTML = armadoTabla;
    });


}   


getLastFM()