
const postId = window.localStorage.getItem('id');
console.log(postId)













// api url
const api_url = 
      `https://jsonplaceholder.typicode.com/posts/${postId}`;
  
// Defining async function
async function getapi(url) {
    
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    if (response) {
        hideloader();
    }
   

   for (let [key, body] of Object.entries(data)) {

          
  let  html=`
  <article>
  <div class="article-header">

      
      <div class="headline">
          <p>The Sights & Sounds of</p>
          <h1>${body.title}</h1>
          <div class="byline">by Cortney Drummond</div>
      </div>
      <div class="image"></div>
  </div>

  <div class="" id="articlecard">


  </div>
  <div class="article-text">
      <p >${body}</p>
      <p>ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi 
      nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit</p>
      <p></p>
  </div>
</article>
  `;
  

  

   // Setting innerHTML as tab variable
document.getElementById("article").innerHTML = html ;
   }

}
// Calling that async function
getapi(api_url);
  // Function to hide the loader
function hideloader() {
  document.getElementById('loading').style.display = 'none';
}
//  document.getElementById("single").addEventListener("click", singlePost);



 
  

 



//  get all posts


   
 
   


// view a single post



// const submitPost = () => {
//   let name = document.getElementById("name").value;
//   let title = document.getElementById("title").value;
//   let textarea = document.getElementById("textarea").value;

//   //   submitData();
//   console.log("post");
// };




// const card = document.querySelector("#comntcontainer");
// card.innerHTML += ` <div class="card-body">
               
               
//                 <p>I think I will buy the red car, or I will lease the blue one. ${
//                   coment.val().comment
//                 } </p>
//                 <p>Jan 1 2020</p>
               
        
//             </div>`;



// document.getElementById("comments").addEventListener("submit", submitcomments);
