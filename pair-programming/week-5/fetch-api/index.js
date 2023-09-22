// Using Fetch make an API call to the URL. The API will return the data in an Array
async function fetchData() {
  const URL = "https://catfact.ninja/facts";
  // Use fetch to call the api with the URL
  const response = await fetch(URL); // complete this line;
  // Storing data in form of JSON
  let data = await response.json(); // complete this line;
  console.log(data);
  // add the return for the function
  return data.data;
}

// Don't change this code!
async function renderData() {
  let catFacts = await fetchData();
  let html = "<ul>";
  catFacts.forEach((fact) => {
    let htmlText = fact.fact;
    let htmlSegment = `<li>${htmlText}</li>`;
    html += htmlSegment;
  });
  html += "</ul>";

  let container = document.querySelector(".container");
  container.innerHTML = html;
}

renderData();
