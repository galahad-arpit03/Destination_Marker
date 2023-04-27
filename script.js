var detailsForm = document.querySelector("#destination_details_form");

detailsForm.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(event) {
        event.preventDefault();

        var destName = event.target.elements["name"].value;
        var destLocation = event.target.elements["location"].value;
        var destPhoto = event.target.elements["photo"].value;
        var destDesc = event.target.elements["description"].value;

        for (var i = 0; i < detailsForm.length; i++) {
                detailsForm.elements[i].value = "";
        }
        

        //Function for creation of new card
        var wishListContainer = document.querySelector("#destinations_container");

        if(wishListContainer.children.length === 0){
                document.querySelector("#title").innerHTML = "My Wish List";
        }

        //add card
        var destCard = createDestinationCard(destName, destLocation, destPhoto, destDesc);

        document.querySelector("#destination_container").appendChild(destCard);

}

//Destination card 
function createDestinationCard(name, location, photoUrl, description) {
        var card = document.createElement("div");
        card.className = "card";

        var img = document.createElement('img');
        img.setAttribute('alt', name);

        var constantPhotoUrl = "images/signpost.jpg";

        if (photoUrl.length === 0) {
                img.setAttribute('src',constantPhotoUrl);
        }
        else {
                img.setAttribute('src',photoUrl);

        }
        card.appendChild(img);

        var cardBody = document.createElement("div");
        cardBody.className = "card-body"; 

        var cardTitle = document.createElement("h3");
        cardTitle.innerText = name;
        cardBody.appendChild(cardTitle);

        var cardSubtitle = document.createElement("h4");
        cardSubtitle.innerText = location;
        cardBody.appendChild(cardSubtitle);

        if (description.length !== 0) {
                var cardText = document.createElement("p");
                cardText.className = "card-text";
                cardText.innerHTML = description;
                cardBody.appendChild(cardText);
        }
        var cardDeletBtn = document.createElement("button");
        cardDeletBtn.innerHTML="Remove";

        cardDeletBtn.addEventListener("click", removeDestination);
        cardBody.appendChild(cardDeletBtn);

        card.appendChild(cardBody);

        return card;
}

function removeDestination(event) {
        var card = event.target.parentElement.parentElement;
        card.remove();
}