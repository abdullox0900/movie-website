let elList = document.querySelector(".list");
let elSelect = document.querySelector(".form-select");

const fimlsGeneration = function (films) {

     let filteredGenres = []

     films.map(film => {
          film.genres.map(genre => {
               if (!filteredGenres.includes(genre)) {
                    filteredGenres.push(genre)
               }
          })
     })

     filteredGenres.map(gener => {
          let elOption = document.createElement("option")

          elOption.value = gener
          elOption.textContent = gener

          elSelect.appendChild(elOption)
     })
}

fimlsGeneration(films)

const filmsRendom = function (filmsArr, element) {
     filmsArr.forEach(film => {

          let elItem = document.createElement("li");
          let newRow = document.createElement("div");
          let newColBox = document.createElement("div");
          let newImg = document.createElement("img");
          let newColMd = document.createElement("div");
          let newCardBody = document.createElement("div");
          let cardTitle = document.createElement("h5");
          let cardText = document.createElement("p");
          let cardList = document.createElement("ul");

          // ============

          elItem.setAttribute("class", "list__item card");
          newRow.setAttribute("class", "row");
          newColBox.setAttribute("class", "col");
          newImg.setAttribute("class", "img-fluid");
          newImg.setAttribute("src", film.poster)
          // newImg.style.width = "400px";
          // newImg.style.height = "240px"
          newColMd.setAttribute("class", "col-md-8");
          newCardBody.setAttribute("class", "card-body");
          cardTitle.setAttribute("class", "card-title");
          cardText.setAttribute("class", "card-text");
          cardList.setAttribute("class", "card__list");

          film.genres.forEach(catalog => {
               let cardItem = document.createElement("li");
               cardItem.setAttribute("class", "card__item");
               cardList.appendChild(cardItem);
               cardItem.textContent = catalog;
          })

          // ===============

          cardTitle.textContent = film.title.slice(0, 15);
          cardText.textContent = film.overview.slice(0, 70);

          // ===============

          element.appendChild(elItem);
          elItem.appendChild(newRow);
          newRow.appendChild(newColBox);
          newColBox.appendChild(newImg);
          newRow.appendChild(newColMd);
          newColMd.appendChild(newCardBody);
          newCardBody.appendChild(cardTitle);
          newCardBody.appendChild(cardText);
          newCardBody.appendChild(cardList);
     })
}

filmsRendom(films, elList)