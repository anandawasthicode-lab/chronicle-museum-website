
var exhibits = document.getElementsByClassName("exhibit");

function filterExhibits(period) {

    for (var i = 0; i < exhibits.length; i++) {

        if (period == "all") {
            exhibits[i].style.display = "inline-block";
        }

        else if (exhibits[i].getAttribute("data-period") == period) {
            exhibits[i].style.display = "inline-block";
        }

        else {
            exhibits[i].style.display = "none";
        }

    }

}

document.getElementById("all").addEventListener("click", function() {
    filterExhibits("all");
});

document.getElementById("ancient").addEventListener("click", function() {
    filterExhibits("ancient");
});

document.getElementById("medieval").addEventListener("click", function() {
    filterExhibits("medieval");
});

document.getElementById("modern").addEventListener("click", function() {
    filterExhibits("modern");
});


for (var i = 0; i < exhibits.length; i++) {

    exhibits[i].addEventListener("click", function() {

        var title = this.getAttribute("data-title");

        var details = this.getAttribute("data-details");

        alert(title + "\n\n" + details);

    });

}
