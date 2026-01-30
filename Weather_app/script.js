let input = document.getElementById("input");
let btn = document.getElementById("searchBtn");

btn.addEventListener("click", () => {
    let city = input.value.trim();
    console.log(city);
});
