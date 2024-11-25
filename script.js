document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.querySelector('input[name="name"]').value;
  const email = document.querySelector('input[name="email"]').value;

  console.log(`Subscribed: ${name}, ${email}`);

  document.querySelector("form").reset();
});

let currentIndex = 0;
const posts = document.querySelectorAll(".post-card");

function changePost() {
  posts[currentIndex].style.display = "none";

  currentIndex = (currentIndex + 1) % posts.length;

  posts[currentIndex].style.display = "block";
}

//-------------------------------- Change post every 4 seconds
setInterval(changePost, 4000);
