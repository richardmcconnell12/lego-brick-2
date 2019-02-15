import data from "./legoData"

// Creating the data to be used in dropdown menu for brick colors

const domBuilder = {
    appendInputForm() {
        let selectOptions = "";
        data.getColors()
            .then(parsedColors => {
                parsedColors.forEach(color => {
                    selectOptions += `<options value="${color.color}">${color.color}<option>`
                    console.log(color.color)
                    return selectOptions
                })
                // Creating user inputForm for using innerHTML
                let inputForm = `
                <article>
                    <fieldset>
                    <label for="lego__creator">Creator:</label>
                    <input id="lego__creator" name="lego__creator" type="text" autofocus />
                    </fieldset>
                    <fieldset>
                    <label for="lego__name">Name:</label>
                    <input id="lego__name" name="lego__name" type="text" autofocus />
                    </fieldset>
                    <fieldset>
                    <label for="lego__shape">Shape:</label>
                    <input id="lego__shape" name="lego__shape" type="text" autofocus />
                    </fieldset>
                    <fieldset>
                    <label for="lego__color">Color:</label>
                    <select id="lego__color">${selectOptions}</select>
                    </fieldset>
                </article>
                `
                // Creating the container in be added to DOM
                let displayContainer = document.querySelector("#display-container");
                displayContainer.innerHTML = inputForm;

                let saveButton = document.createElement("button");
                saveButton.textContent = "Save New Lego"
                saveButton.classList.add = ("#saveButton");

                saveButton.addEventListener("click", )


            })
    }
}

export default domBuilder