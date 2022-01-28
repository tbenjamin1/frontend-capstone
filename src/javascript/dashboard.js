

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
      
      // console.log(userId)
      
      return`
      <div class="card">

                    <div class="card-body">
                        <h3>${user.title}</h3>
                        <p>Jan 1 2022</p>

                    </div>
                    <div class="button">
                    <button type='button' class="btn" data-user-id=${userId} id="edit"
      
                    onclick='editPost(event)'>Edit</button>
                    <button type='button' class="btn" data-user-id=${userId} id="delete"
      
                    onclick='deletePost(event)'>Delete</button>

                    </div>

                </div>
      `;
  })
  .join("");

   // Setting innerHTML as tab variable
document.getElementById("postCard").innerHTML = html ;


}
// Calling that async function
getapi(api_url);
  // Function to hide the loader
function hideloader() {
  document.getElementById('loading').style.display = 'none';

            // setTimeout(function(){
        
            //     document.getElementById('loading').style.display = 'none';
            //     window.location.reload()
        
            // },3000);
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










// delete

const deletePost = (event) => {
  const userId=event.target.dataset.userId
  console.log(userId);
  fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`, { method: 'DELETE' })
    .then(async response => {
        const isJson = response.headers.get('content-type')?.includes('application/json');
        const data = isJson && await response.json();
  console.log(data)
        // check for error response
        if (!response.ok) {
            // get error message from body or default to response status
            const error = (data && data.message) || response.status;
            return Promise.reject(error);
        }

    alert("succesfully deleted")
    })
    .catch(error => {
       
        console.error('There was an error!', error);
    });
 
  // window.location.reload();

};

// edit post
const editPost = (event) => {

  const newId=event.target.dataset.userId
  console.log(newId);
  window.localStorage.setItem("key", newId);
 

  window.location.href = "../pages/editpost.html";
};



