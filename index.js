let result = document.getElementById("results");

    new URLSearchParams(window.location.search).forEach((value,name) => {
        result.append(`${name}: ${value}`)
        result.append(document.createElement('br'))
        result.append(document.createElement('br'))
});