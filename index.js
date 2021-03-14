async function getContent() {
  try {
    const response = await fetch('http://localhost:362/');
    const data = await response.json();

    show(data);

  } catch (error) {

    console.error(error);
  }
}

function show(datas) {
  const h1 = document.querySelector("#h1");
  let output = ''

  for (let user of datas) {
    output += `<li>${user.name}</li>`
  }

  h1.innerHTML = output;
}

getContent();