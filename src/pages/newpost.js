
 let title = document.getElementById("title").value;
 let summary = document.getElementById("summary").value;
 let body = document.getElementById("body").value;
 

const articleId = window.localStorage.getItem('key');
console.log(articleId)

const editarticle =()=>{

  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ 
      
      title: 'Fetch PUT Request Example',
      summary: 'Fetch PUT Request Example',
      body: 'Fetch PUT Request Example',
  
  
  })
};
fetch('https://jsonplaceholder.typicode.com/posts/', requestOptions)
    .then(response => response.json())
    .then(data => element.innerHTML = data.updatedAt );

}
