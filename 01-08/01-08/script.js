const topGamesWrapper = document.getElementById("top-games-wrapper");
const newGame = document.getElementById("newGame");

const buildScreen = async () => {
    const response = await fetch(
        "https://695e14ac2556fd22f6773e58.mockapi.io/topGames"
    );

    const topGames = await response.json();
    console.log(topGames);

    topGames.forEach((game) => {
        if (!game.isDeleted) {
            const card = document.createElement("div");
            card.classList.add("card");

            const image = document.createElement("img");
            image.classList.add("image");
            image.src = game.image;

            const title = document.createElement("h1");
            title.classList.add("title");
            title.innerText = game.name;

            const realiseAndPlatforms = document.createElement("div");
            realiseAndPlatforms.classList.add("real-plat-wrapper");

            const realiseDate = document.createElement("h4");
            realiseDate.classList.add("realise-date");
            realiseDate.innerText = game.RealiseYear;

            const platforms = document.createElement("h4");
            platforms.classList.add("platforms");
            platforms.innerText = game.platforms;

            const disciption = document.createElement("p");
            disciption.classList.add("discription");
            disciption.innerText = game.description;

            card.append(image, title, realiseAndPlatforms, disciption);
            realiseAndPlatforms.append(realiseDate, platforms);

            topGamesWrapper.append(card);

            // More detail
            card.addEventListener("Click", () => {
                console.log(game.name);
            });
        }
    });
};

buildScreen();

newGame.addEventListener("click", () => {
    // got to new
    window.location.replace("./newGame/index.html");
});
