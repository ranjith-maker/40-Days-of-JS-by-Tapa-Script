
/**

 */
const err = document.getElementById("error");
const loader = document.getElementById("loader");
const searchInp = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const addFavBtn = document.getElementById("addFavBtn");
const showFavBtn = document.getElementById("showFavBtn");
const countryDetails = document.getElementById("countryDetails");

let map;
let currentCountry = null;

function getFavourites() {

    return JSON.parse( localStorage.getItem("favourites")) || [];

}

searchBtn.addEventListener("click", async () => {

    const country = searchInp.value.trim();

    if (!country) {
        return;
    }
    await fetchData(country);

});

searchInp.addEventListener("keydown", async (event) => {

    if (event.key === "Enter") {

        const country = searchInp.value.trim();

        if (!country) {
            return;
        }

        await fetchData(country);

    }

});


async function fetchData(name) {

    try {

        loader.classList.remove("hidden");
        err.classList.add("hidden");
        addFavBtn.classList.add("hidden");

        const response = await fetch(
            `https://restcountries.com/v3.1/name/${encodeURIComponent(name)}?fullText=true`
        );
        if (!response.ok) {
            throw new Error("Invalid Country Name");
        }
        const data = await response.json();
        const country = data[0];
        if (!country) {
            throw new Error("Invalid Country Name");
        }
        currentCountry = country;

        const languages = country.languages
            ? Object.values(country.languages).join(", ")
            : "N/A";

        countryDetails.innerHTML = `

            <div class="p-4 border border-gray-700 rounded shadow bg-gray-800">

                <img
                    src="${country.flags.svg}"
                    alt="${country.name.common} flag"
                    class="w-32 mb-3"
                />


                <h2 class="text-2xl font-bold mb-3">
                    ${country.name.common}
                </h2>


                <p class="mb-2">
                    <strong>Capital:</strong>
                    ${country.capital?.join(", ") || "N/A"}
                </p>


                <p class="mb-2">
                    <strong>Population:</strong>
                    ${country.population.toLocaleString()}
                </p>


                <p class="mb-4">
                    <strong>Languages:</strong>
                    ${languages}
                </p>


                <!-- Local Times -->

                <div>

                    <h2 class="text-xl font-semibold mb-2">
                        Local Times
                    </h2>

                    <ul
                        id="timezoneList"
                        class="list-disc ml-6"
                    ></ul>

                </div>

            </div>

        `;

        updateTimezones(country.timezones);
        drawMap(
            country.latlng,
            country.name.common
        );
        addFavBtn.classList.remove("hidden");
        updateFavouriteButton();
        console.log(data);
    } catch (error) {
        currentCountry = null;
        addFavBtn.classList.add("hidden");
        err.classList.remove("hidden");
        err.textContent =
            error.message ||
            "Failed to load the country info";


    } finally {
        loader.classList.add("hidden");

    }

}



function updateFavouriteButton() {

    if (!currentCountry) {
        return;
    }


    const favourites = getFavourites();


    const alreadyFavourite = favourites.some(
        (country) =>
            country.cca3 === currentCountry.cca3
    );


    if (alreadyFavourite) {

        addFavBtn.textContent = "❤️ Added to Fav";

        addFavBtn.classList.remove(
            "bg-red-500",
            "hover:bg-red-600"
        );

        addFavBtn.classList.add(
            "bg-green-500",
            "hover:bg-green-600"
        );

    } else {

        addFavBtn.textContent = "❤️ Add to Fav";

        addFavBtn.classList.remove(
            "bg-green-500",
            "hover:bg-green-600"
        );

        addFavBtn.classList.add(
            "bg-red-500",
            "hover:bg-red-600"
        );

    }

}

addFavBtn.addEventListener("click", () => {

    if (!currentCountry) {
        return;
    }

    let favourites = getFavourites();
    const alreadyFavourite = favourites.some(
        (country) =>
            country.cca3 === currentCountry.cca3
    );
    if (alreadyFavourite) {
        return;
    }
    // Create favourite object
    const favouriteCountry = {

        name: currentCountry.name.common,

        capital:
            currentCountry.capital?.[0] || "N/A",

        population:
            currentCountry.population,

        flag:
            currentCountry.flags.svg,

        cca3:
            currentCountry.cca3

    };

    favourites.push(favouriteCountry);
    localStorage.setItem("favourites", JSON.stringify(favourites));


    // Update button
    updateFavouriteButton();

});


showFavBtn.addEventListener("click", () => {

    const favourites = getFavourites();


    // No favourites
    if (favourites.length === 0) {

        countryDetails.innerHTML = `

            <div class="p-4 border border-gray-700 rounded bg-gray-800">

                <p class="text-lg">
                    No favourite countries yet.
                </p>

            </div>

        `;

        return;

    }

    addFavBtn.classList.add("hidden");

    countryDetails.innerHTML = `

        <h2 class="text-2xl font-bold mb-4">
            ⭐ Favourite Countries
        </h2>


        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

            ${favourites.map((country) => `

                <div
                    class="p-4 border border-gray-700 rounded shadow bg-gray-800"
                >

                    <img
                        src="${country.flag}"
                        alt="${country.name} flag"
                        class="w-32 mb-3"
                    />


                    <h3 class="text-xl font-bold mb-2">
                        ${country.name}
                    </h3>


                    <p class="mb-2">
                        <strong>Capital:</strong>
                        ${country.capital}
                    </p>


                    <p class="mb-3">
                        <strong>Population:</strong>
                        ${country.population.toLocaleString()}
                    </p>


                    <button
                        onclick="removeFavourite('${country.cca3}')"
                        class="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded"
                    >
                        🗑 Remove
                    </button>

                </div>

            `).join("")}

        </div>

    `;

});




function removeFavourite(code) {

    let favourites = getFavourites();
    favourites = favourites.filter(
        (country) =>
            country.cca3 !== code
    );
    localStorage.setItem("favourites", JSON.stringify(favourites) )
    showFavBtn.click()
}


function updateTimezones(timezones) {

    const timezoneList =
        document.getElementById("timezoneList");

    if (!timezoneList) {
        return;
    }

    timezoneList.innerHTML = "";

    timezones.forEach((tz) => {

        const li =document.createElement("li");
        const localTime = getTimeUsingIntl(tz);
        li.textContent =`${tz} - ${localTime}`
        timezoneList.appendChild(li);
    })
}



function getTimeUsingIntl(tz) {

    try {

        const options = {
            timeZone: convertToIANA(tz),
            hour: "2-digit",
            minute: "2-digit",
            hour12: true
        }
        return Intl.DateTimeFormat(
            "en-US",
            options
        ).format(new Date());

    } catch (error) {

        console.warn(
            `Timezone ${tz} not supported.`
        )
        return "Unsupported timezone";
    }
}


function convertToIANA(utcString) {

    if (utcString === "UTC") {
        return "Etc/UTC";
    }

    const match =
        utcString.match(
            /^UTC([+-]\d{2}):(\d{2})$/
        );

    if (match) {

        const [, hour] = match;

        const offset =
            parseInt(hour, 10);

        const sign =
            offset < 0 ? "+" : "-";

        return `Etc/GMT${sign}${Math.abs(offset)}`;
    }
    return "Etc/UTC";
}


function drawMap(latlng, name) {

    if (!latlng || latlng.length < 2) {
        return;
    }

    const [lat, lng] = latlng;

    if (!map) {

        map = L.map("map").setView(
            [lat, lng],
            5
        );

        L.tileLayer(
            "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
            {
                attribution:
                    '&copy; OpenStreetMap contributors'
            }
        ).addTo(map);


    } else {

        map.setView(
            [lat, lng],
            5
        );

    }

    L.marker([lat, lng])
        .addTo(map)
        .bindPopup(name)
        .openPopup();

}




















