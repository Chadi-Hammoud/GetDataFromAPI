   function test(){
   fetch('https://fathomless-mesa-68337.herokuapp.com/data')
  .then(response => response.json())
  .then(json => {
      var ul = document.getElementById('ul_01')
      json.forEach(element => {
          var li = document.createElement('li')
          li.innerHTML = element.name;
          ul.appendChild(li);

      });
  })
}