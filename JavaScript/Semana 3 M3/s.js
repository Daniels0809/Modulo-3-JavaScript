fetch("http://localhost:3000/productos/")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));