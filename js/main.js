(function () {
  const searchInput = document.querySelector('.search');
  console.log(searchInput);
  searchInput.addEventListener('keydown', function (event) {
    if (event.key == "Enter") {
      searchInput.blur();
      searchInput.value = "";
    };
  })
}());