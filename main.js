
async function getapi(url) {
    
    // Storing response
    const response = await fetch('https://restcountries.com/v2/all');
    
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    if (response) {
        hideloader();
    }
    show(data);
}
// Calling that async function
getapi('https://restcountries.com/v2/all');

// document.getElementById("head").innerHTML = ${data.name};



