let stars = document.querySelectorAll(".star");
let selectedRating = 0;

stars.forEach((star) => {
    star.addEventListener("click", function () {
        selectedRating = this.getAttribute("data-value");
        stars.forEach(s => s.classList.remove("selected"));
        for (let i = 0; i < selectedRating; i++) {
            stars[i].classList.add("selected");
        }
    });
});

document.getElementById("submitReview").addEventListener("click", function () {
    let username = document.getElementById("username").value;
    let reviewText = document.getElementById("reviewText").value;
    let reviewsList = document.getElementById("reviewsList");

    if (username && reviewText && selectedRating > 0) {
        let reviewHTML = `
            <div class="review">
                <h3>${username}</h3>
                <p>${reviewText}</p>
                <p>Rating: ${"⭐".repeat(selectedRating)}</p>
            </div>
        `;
        reviewsList.innerHTML += reviewHTML;
        document.getElementById("username").value = "";
        document.getElementById("reviewText").value = "";
        selectedRating = 0;
        stars.forEach(s => s.classList.remove("selected"));
    } else {
        alert("Please fill all fields and select a rating.");
    }
});
