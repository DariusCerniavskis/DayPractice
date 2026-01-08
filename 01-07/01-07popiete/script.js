const cryptosWrapper = document.getElementById("cryptos-wrapper");

const buildScreen = async () => {
    const response = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1"
    );

    const unsortedCryptos = await response.json();

    const sortedCryptos = unsortedCryptos.sort((a, b) => {
        return a.name.localeCompare(b.name);
    });

    console.log(sortedCryptos);

    sortedCryptos.forEach((crypto) => {
        const card = document.createElement("div");

        const borderColor = `${
            crypto.current_price > 100 ? "gold" : "silver"
        }Border`;
        card.classList.add("crypto-wrapper", borderColor);

        const title = document.createElement("h1");
        title.classList.add("title");
        title.innerText = crypto.name;

        const logo = document.createElement("div");
        logo.classList.add("logo-wrapper");
        const logoImage = document.createElement("img");
        logoImage.src = crypto.image;

        const currPrice = document.createElement("h2");
        currPrice.classList.add("currPrice");
        currPrice.innerText = `$${Number(crypto.current_price).toFixed(6)}`;

        card.append(title, logo, currPrice);
        logo.append(logoImage);

        cryptosWrapper.append(card);

        card.addEventListener("click", () => {
            console.log(title);
        });
    });
};

buildScreen();
