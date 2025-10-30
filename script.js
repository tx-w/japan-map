const allPaths = document.querySelectorAll("path");

const infoBox = document.getElementById("info-box");

const prefectureData = {
  hokkaido: { name: "Hokkaido", capital: "Sapporo", population: "5.1M" },
  aomori: { name: "Aomori", capital: "Aomori City", population: "1.2M" },
  iwate: { name: "Iwate", capital: "Morioka", population: "1.2M" },
  miyagi: { name: "Miyagi", capital: "Sendai", population: "2.3M" },
  akita: { name: "Akita", capital: "Akita City", population: "0.9M" },
  yamagata: { name: "Yamagata", capital: "Yamagata City", population: "1.0M" },
  fukushima: {
    name: "Fukushima",
    capital: "Fukushima City",
    population: "1.8M",
  },
  ibaraki: { name: "Ibaraki", capital: "Mito", population: "2.8M" },
  tochigi: { name: "Tochigi", capital: "Utsunomiya", population: "1.9M" },
  gunma: { name: "Gunma", capital: "Maebashi", population: "1.9M" },
  saitama: { name: "Saitama", capital: "Saitama City", population: "7.3M" },
  chiba: { name: "Chiba", capital: "Chiba City", population: "6.2M" },
  tokyo: { name: "Tokyo", capital: "Shinjuku", population: "14.0M" },
  kanagawa: { name: "Kanagawa", capital: "Yokohama", population: "9.2M" },
  niigata: { name: "Niigata", capital: "Niigata City", population: "2.2M" },
  toyama: { name: "Toyama", capital: "Toyama City", population: "1.0M" },
  ishikawa: { name: "Ishikawa", capital: "Kanazawa", population: "1.1M" },
  fukui: { name: "Fukui", capital: "Fukui City", population: "0.8M" },
  yamanashi: { name: "Yamanashi", capital: "Kofu", population: "0.8M" },
  nagano: { name: "Nagano", capital: "Nagano City", population: "2.0M" },
  gifu: { name: "Gifu", capital: "Gifu City", population: "1.9M" },
  shizuoka: { name: "Shizuoka", capital: "Shizuoka City", population: "3.6M" },
  aichi: { name: "Aichi", capital: "Nagoya", population: "7.5M" },
  mie: { name: "Mie", capital: "Tsu", population: "1.7M" },
  shiga: { name: "Shiga", capital: "Otsu", population: "1.4M" },
  kyoto: { name: "Kyoto", capital: "Kyoto City", population: "2.5M" },
  osaka: { name: "Osaka", capital: "Osaka City", population: "8.8M" },
  hyogo: { name: "Hyogo", capital: "Kobe", population: "5.4M" },
  nara: { name: "Nara", capital: "Nara City", population: "1.3M" },
  wakayama: { name: "Wakayama", capital: "Wakayama City", population: "0.9M" },
  tottori: { name: "Tottori", capital: "Tottori City", population: "0.5M" },
  shimane: { name: "Shimane", capital: "Matsue", population: "0.7M" },
  okayama: { name: "Okayama", capital: "Okayama City", population: "1.9M" },
  hiroshima: {
    name: "Hiroshima",
    capital: "Hiroshima City",
    population: "2.8M",
  },
  yamaguchi: {
    name: "Yamaguchi",
    capital: "Yamaguchi City",
    population: "1.3M",
  },
  tokushima: {
    name: "Tokushima",
    capital: "Tokushima City",
    population: "0.7M",
  },
  kagawa: { name: "Kagawa", capital: "Takamatsu", population: "0.9M" },
  ehime: { name: "Ehime", capital: "Matsuyama", population: "1.3M" },
  kochi: { name: "Kochi", capital: "Kochi City", population: "0.7M" },
  fukuoka: { name: "Fukuoka", capital: "Fukuoka City", population: "5.1M" },
  saga: { name: "Saga", capital: "Saga City", population: "0.8M" },
  nagasaki: { name: "Nagasaki", capital: "Nagasaki City", population: "1.3M" },
  kumamoto: { name: "Kumamoto", capital: "Kumamoto City", population: "1.7M" },
  oita: { name: "Oita", capital: "Oita City", population: "1.1M" },
  miyazaki: { name: "Miyazaki", capital: "Miyazaki City", population: "1.1M" },
  kagoshima: { name: "Kagoshima", capital: "Kagoshima City", population: "1.6M" },
  okinawa: { name: "Okinawa", capital: "Naha", population: "1.5M" },
};

allPaths.forEach((path) => {
  path.addEventListener("mouseover", (event) => {
    const prefectureID = event.target.id;
    const info = prefectureData[prefectureID];

    infoBox.innerHTML = `
        <h3>${info.name}</h3>
        <p>Capital: ${info.capital}</p>
        <p>Population: ${info.population}</p>
        `;

    infoBox.style.opacity = 1;

    infoBox.style.left = event.pageX + 10 + "px";
    infoBox.style.top = event.pageY + 10 + "px";
    infoBox.style.opacity = 1;
  });

  path.addEventListener("mouseout", (event) => {
    infoBox.style.opacity = 0;
  });

  path.addEventListener("click", (event) => {
    const prefectureID = event.target.id;
    const destinationURL = `prefecture-pages/${prefectureID}.html`;
    window.location.href = destinationURL;
  });

  window.addEventListener(
    "pageshow",
    () => (document.body.style.pointerEvents = "none")
  );
  window.addEventListener(
    "mousemove",
    () => (document.body.style.pointerEvents = "")
  );

  
});
