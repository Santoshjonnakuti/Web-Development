function googleSearch() {
  const search = document.getElementsByName("SearchBar")[0].value;
  if (const) {
    window.location.href = "https://www.google.com/search?q="+ search;
  }
  else {
    window.location.href = "https://www.google.com/";
  }
}
function googleFeelingLucky() {
  window.location.href = "https://www.google.com/doodles";
}
