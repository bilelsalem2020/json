const form = document.querySelector("form");
const createPost = async (e) => {
  e.preventDefault();
  const doc = {
    title: form.title.value,
    body: form.body.value,
    age: 20,
  };
};
form.addEventListener("submit", createPost);
