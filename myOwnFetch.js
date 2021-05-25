function oskarsFetch(url) {
    return new Promise(function(resolve, reject){
        var xmlhttp = new XMLHttpRequest();

        // called when response state is changed
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var data = JSON.parse(this.responseText);
                
                // resolve = whenDone
                return resolve(data);
            }
        };

        xmlhttp.open("GET", url, true);
        xmlhttp.send(); // send request
    });
}

function whenDone(data) { // resolve
    console.log(data.url);
}

oskarsFetch("https://thatcopy.pw/catapi/rest/").then(whenDone);

// fetch("https://thatcopy.pw/catapi/rest/").then(whenDone);