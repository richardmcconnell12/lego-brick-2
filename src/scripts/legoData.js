const data = {
    // Creating fetch to for POSTing new lego to database
    postLego(legoToSave) {
        fetch("http://localhost:8088/legos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(legoToSave)
        })
    },

    getColors() {
        return fetch("http://localhost:8088/colors")
            .then(response => response.json())
    }
}

export default data