const div = document.getElementById('response');

fetch('/weather')
.then(response => response.json())
.then(res => {
  div.innerText = JSON.stringify(res);
});
