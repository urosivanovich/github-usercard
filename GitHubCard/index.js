import axios from 'axios'
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
  
  axios.get('https://api.github.com/users/urosivanovich')
  .then(response =>{
    const cardDiv = createAvatar(response);
    document.querySelector('.cards').appendChild(cardDiv)
  }).catch(error => {
    console.log(error)
  }).finally(()=>{
    console.log('doo doo')
  })
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [ 'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell'];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function createAvatar(obj){
  console.log(obj)
  //creating elements
  const cardDiv = document.createElement('div');
  const img = document.createElement('img');
  const cardInfoDiv = document.createElement('div');
  const nameH3 = document.createElement('h3');
  const userNameP = document.createElement('p');
  const locationP = document.createElement('p');
  const profileP = document.createElement('p');
  const anchorT = document.createElement('a');
  const followersP = document.createElement('p');
  const followingP = document.createElement('p');
  const bioP = document.createElement('p');
  // setting class names, attributes and text
  cardDiv.classList.add('card');
  img.src = obj.data.avatar_url;
  
  console.log(img.src)
  cardInfoDiv.classList.add('card-info');
  nameH3.classList.add('name');
  nameH3.textContent = obj.data.name;
  userNameP.textContent = obj.data.login;
  locationP.textContent = `Location ${obj.location}`;
  profileP.textContent = `Profile`;
  anchorT.href = obj.data.html_url;
  anchorT.textContent = obj.data.html_url;
  
  followersP.textContent = obj.data.followers;
  console.log(followersP)
  followingP.textContent = obj.data.following;
  bioP.textContent = obj.data.bio;
  // creating hierarchy
  cardDiv.appendChild(img);
  cardDiv.appendChild(cardInfoDiv);
  cardInfoDiv.appendChild(nameH3);
  cardInfoDiv.appendChild(userNameP);
  cardInfoDiv.appendChild(locationP);
  cardInfoDiv.appendChild(profileP);
  cardInfoDiv.appendChild(followersP);
  cardInfoDiv.appendChild(followingP);
  cardInfoDiv.appendChild(bioP);
  profileP.appendChild(anchorT);


  
  return cardDiv;

  
}


followersArray.forEach(e => {
  axios.get(`https://api.github.com/users/${e}`)
  .then(response =>{
    const cardDiv = createAvatar(response);
    document.querySelector('.cards').appendChild(cardDiv)
  })
})


/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/


// move your axios call with alal of the code with it into a new fucntrion getUsre
//update axios xall to interoplate isntea dof hard code username 