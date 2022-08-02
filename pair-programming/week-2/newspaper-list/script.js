const newspapers = [
  "https://www.nytimes.com",
  "https://www.washingtonpost.com",
  "http://www.economist.com"
];

function listNewsPaper(arr) {
  let divContent = document.getElementById("content");
  let ulEle = document.createElement("ul");
  // loop through the arr of newspaper
  for (i = 0; i < arr.length; i++) {
    let liEle = document.createElement("li");
    let aTag = document.createElement("a");
    // appending ul to div
    divContent.appendChild(ulEle);
    //  appending li to ul
    ulEle.appendChild(liEle);
    //  appending anchor tag to li
    liEle.appendChild(aTag);

    aTag.href = arr[i];

    aTag.innerText = arr[i];
  }
}
// calling function
listNewsPaper(newspapers);
