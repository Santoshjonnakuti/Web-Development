function googleSearch() {
  const search = document.getElementsByName("SearchBar")[0].value;
  if (search) {
    window.location.href = "https://www.google.com/search?q="+ search;
  }
}
function googleFeelingLucky() {
  window.location.href = "https://www.google.com/doodles";
}
