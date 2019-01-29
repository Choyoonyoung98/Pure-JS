//listen for form submit

document.getElementById('myForm').addEventListener('submit',saveBookmark);

function saveBookmark(e) {
  var siteName = document.getElementById('siteName').value;
  var siteUrl = document.getElementById('siteUrl').value;

  if(!validateForm(siteName, siteUrl)){
    return false;
  }


  var bookmark = {
    name: siteName,
    url : siteUrl
  }
  // //local storage Test
  // localStorage.setItem('test', 'Hello world');
  // console.log(localStorage.getItem('test'));

  // //want to delete from local storage
  // localStorage.removeItem('test');
  // console.log(localStorage.getItem('test'));

  //Test if bookmarks is null
  if(localStorage.getItem('bookmarks') === null) {
    //Init array
    var bookmarks = [];
    //Add to array
    bookmarks.push(bookmark);
    //Set to localStorage
    localStorage.setItem('bookmarks',JSON.stringify(bookmarks));//JSON to String

  } else {
    //Get bookmark from localStorage
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));//String to JSON
    //add bookmark to array
    bookmarks.push(bookmark);
    //Re-set back to localStorage
    localStorage.setItem('bookmarks',JSON.stringify(bookmarks));//JSON to String
  }

  //clear form
  document.getElementById('myForm').reset();


   //Re-fetch bookmark
   fetchBookmarks();
}

//Fetch Bookmarks;
function fetchBookmarks() {
  //Get bookmark from localStorage
  var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));//String to JSON
  // console.log(bookmarks);

  //Get bookmarks id
  var bookmarksResults = document.getElementById('bookmarksResults');

  //Build output
  bookmarksResults.innerHTML = '';
  for(var i = 0; i < bookmarks.length; i++) {
    var name = bookmarks[i].name;
    var url = bookmarks[i].url;

    bookmarksResults.innerHTML += '<div class="card">'+'<div class="card-body">'+'<h3>'+name+'<a class="btn btn-light" target="_blank" href="'+url+'">Visit</a>'+'<a onclick="deleteBookmark(\''+url+'\')" class="btn btn-danger" target="_blank" href="#">Delete</a>'+'</h3>'+'</div>'+'</div>';

  }

}

//Delete bookmarks
function deleteBookmark(url) {
  var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

  for(var i = 0; i < bookmarks.length;  i++){
    if(bookmarks[i].url == url) {
      //Remove from array
      bookmarks.splice(i,1);

      //Re-set back to localStorage
      localStorage.setItem('bookmarks',JSON.stringify(bookmarks));//JSON to String

      //Re-fetch bookmark
      fetchBookmarks();

    }

  }

}

//validate form
function validateForm(siteName, siteUrl) {
  if(!siteUrl || !siteName) {
    alert('Please fill in the form');
    return false;//submit되는 것을 막는다!
  }
  var expression = 'https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)';
  var regex = new RegExp(expression);

  if(!siteUrl.match(regex)) {
    alert('Please use a valid URL');
    return false
  }

  return true;

}
