
//Loader

/* const url = 'http://127.0.0.1:5500/index.html';

function load(url) {
    document.getElementById("loader").visible = true;
    var req = new XMLHttpRequest();
    req.open("POST", url, true);

    req.onreadystatechange = function () {
        if (req.readyState == 4 && req.status == 200) {
            if (req.responseText) {
                document.getElementsByTagName("body").innerHTML = req.responseText;
                document.getElementById("loader").visible = false;
            }
        }
    };
}

*/

$(window).load(function() {
    // Animate loader off screen
    $(".se-pre-con").fadeOut("slow");;
});