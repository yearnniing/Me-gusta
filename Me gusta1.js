var button = document.getElementById("likeButton");
var result = document.getElementById("likeCount");
var counter = 0;

button.addEventListener("click", function() {
    counter++;
    result.textContent = counter;
});