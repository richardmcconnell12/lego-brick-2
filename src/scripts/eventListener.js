import data from "./legoData"

const eventListener = {
    handleSubmissionForm() {
        // Get input values from input form
        const creator = document.getElementById("lego__creator").value;
        const name = document.getElementById("lego__name").value;
        const shape = document.getElementById("lego__shape").value;
        const color = document.getElementById("lego__color").value;

        // Creating logo objects for database
        const legoObject = {
            creatorName: creator,
            legoName: name,
            legoShape: shape,
            legoColor: color
        }
        data.postLego(legoObject);
    },
}

export default eventListener