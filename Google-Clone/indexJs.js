function googleSearch()
{
  const search = document.getElementsByName("SearchBar")[0].value;
  window.location.href = "https://www.google.com/search?q="+ search;
}
