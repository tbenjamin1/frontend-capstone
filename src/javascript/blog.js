

// api url
const api_url = 
      "https://jsonplaceholder.typicode.com/posts/";
  
// Defining async function
async function getapi(url) {
    
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    let data = await response.json();
    console.log(data);
    if (response) {
        hideloader();
    }
    var limit = 5;
    // var data = response.data.slice(0, limit);

    const html = data.slice(0, limit).map(user =>{

      const userId=user.id;
      const userName=user.name;
      // console.log(userId)
      
      return`
      <div class='card'>
      "<img src='https://picsum.photos/600/500/?random' alt='Random photo' class='card-img'/> 
      <div class='card-body'>
      <h1 id='heading'> ${user.title}</h1>
      <p id='year'>Jan 1 2020</p>
      <p >
      ${user.body }
      </p>
      <div class='button'>
      <button type='button' class="btn" data-user-id=${userId} id="single"
      
      onclick='viewContent(event)'  >ReadMore</button>
      </div></div> </div>
      `;
  })
  .join("");

   // Setting innerHTML as tab variable
document.getElementById("postcard").innerHTML = html ;


}
// Calling that async function
getapi(api_url);
  // Function to hide the loader
function hideloader() {
  document.getElementById('loading').style.display = 'none';
}
//  document.getElementById("single").addEventListener("click", singlePost);



 function viewContent(event){

  const userId=event.target.dataset.userId
  console.log(userId);
  window.localStorage.setItem("id", userId);
  console.log(window.location);

  window.location.href = '../artciles/artciles.html';
}

  

 



//  get all posts


   
 
   


// view a single post



// const submitPost = () => {
//   let name = document.getElementById("name").value;
//   let title = document.getElementById("title").value;
//   let textarea = document.getElementById("textarea").value;

//   //   submitData();
//   console.log("post");
// };



