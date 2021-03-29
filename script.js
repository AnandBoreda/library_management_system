function redirect() {
  let option = document.getElementById("option").value;
  switch (parseInt(option)) {
    case 1:
      window.location.href = "./addBook.html";
      console.log("add book");
      break;
    case 2:
      window.location.href = "./searchBook.html";
      console.log("search book");
      break;
    case 3:
      window.location.href = "./updateBook.html";
      console.log("update book");
      break;
    case 4:
      window.location.href = "./removeBook.html";
      console.log("remove book");
  }
  if (option == 0 || option > 4) {
    setTimeout(() => {
      option = " ";
      console.log(option);
    }, 500);
    alert("selection should be between 1 - 4");
  }
}
