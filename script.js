const allPaths = document.querySelectorAll('path');

const infoBox = document.getElementById('info-box');

const prefectureData = {
    "hokkaido": {
        name: "Hokkaido",
        capital: "Sapporo",
        population: "1.9 million"
    },
    "fukuoka": {
        name: "Fukuoka",
        capital: "Fukuoka City",
        population: "1.6 million"
    }
}

allPaths.forEach(path => {
    path.addEventListener('mouseover', (event) => {
        const prefectureID = event.target.id;
        const info = prefectureData[prefectureID];
        
        infoBox.innerHTML = `
        <h3>${info.name}</h3>
        <p>Capital: ${info.capital}</p>
        <p>Population: $info{info.population}</p>
        `;

        infoBox.style.opacity = 1;

        infoBox.style.left = event.pageX + 10 + 'px';
        infoBox.style.top = event.pageY + 10 + 'px';
        infoBox.style.opacity = 1;

    });
    
    path.addEventListener('mouseout', (event) => {
        infoBox.style.opacity = 0;
    });

    path.addEventListener('click', (event) => {
        const prefectureID = event.target.id;
        const destinationURL = `prefecture-pages/${prefectureID}.html`;
        window.location.href = destinationURL;
    })
});