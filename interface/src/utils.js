export const saveToFirebase = (data) => {
  fetch('http://localhost:5000/save',{
    method: 'POST',
    headers:{'Content-Type': 'application/json', 'Accept-Type': 'application/json'},
    body: JSON.stringify(data)
  }).then(response => response.json()).then(response =>console.log(response));
};