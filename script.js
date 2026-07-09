const likeBtn = document.getElementById("likeBtn");
const likeCount = document.getElementById("likeCount");

let likes = localStorage.getItem("likes");

if (likes === null) {
    likes = 0;
}

likes = Number(likes);

likeCount.textContent = likes;

likeBtn.addEventListener("click", () => {
    likes++;

    likeCount.textContent = likes;

    localStorage.setItem("likes", likes);
});