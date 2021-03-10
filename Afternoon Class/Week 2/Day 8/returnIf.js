function returnIf(isReturn) {
  if (isReturn) {
    console.log("Will return true");
    // return true;
  }

  console.log("Will return false");
  return false;
}

console.log(returnIf(true));
