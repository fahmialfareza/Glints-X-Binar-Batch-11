// Switch case likes if else
let option = 6;

switch (option) {
  case 1:
  case 4:
  case 6:
    // case 1 or 4 or 6
    console.log("This is one!");
    break; // It will break here
  case 2:
    console.log("This is two!");
    break; // It will break here
  case 3:
    console.log("This is three");
    break; // It will break here
  default:
    console.log("This is default");
  // We don't need break because this is last code
}
