const postData = async (url = '', data = {}) => {
    console.log(data);
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        // Body data type must match "Content-Type" header        
        body: JSON.stringify(data),
    });

    try {
        const newData = await response.json();
        console.log(newData);
        return newData;
    } catch (error) {
        console.log("error", error);
    }
}
const getData = async (url = "") => {
    const res = await fetch(url);
    try {
        const data = await res.json();
        console.log(data);
    } catch (er) {
        console.log(er);
    }
}
// postData('/addAnimal', { animal: "Lion" });

getData("/fakeData").then(function (data) {
    postData('/addAnimal', { animal: "Lion" });
    document.body.appendChild(data);
});