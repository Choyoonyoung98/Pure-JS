const posts = [
  {title: 'Post One', body: 'This is post one'},
  {title: 'Post Two', body: 'This is post two'}
];

function getPosts() {
  setTimeout(() => {
    let output ='';
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);//1초 지연
}

function createPosts(post, callback) {
  return new Promise((resolve, reject) => {
    //예외처리 부분
    setTimeout(() => {
      posts.push(post);

      const error = false;

      if (!error) {
        resolve();
      }else {
        reject('Error: Something went wrong');
      }
    }, 2000);
  });
}

// createPosts({title: 'Post Three', body: 'This is post three'})
// .then(getPosts)
// .catch(err => console.log(err));
//error가 false여서 resolve라면, getPosts 하라~~~ 두 함수가 동시에 발생

//Async /Await: cleaner then promises
// async function init() {
//   await createPosts({title: 'Post Three', body: 'This is post three'});

//   getPosts();
// }

// init(); //반드시 함수를 호출해야함

//Async /Await / Fetch
async function fetchUsers() {
  const res = await fetch
  ('https://jsonplaceholder.typicode.com/users');

  const data = await res.json();

  console.log(data);
}

fetchUsers();



//Promise.all
// const promise1 = Promise.resolve('Hello world');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) =>
// setTimeout(resolve, 2000, 'Goodbye')
// );

// const promise4 = fetch
// ('https://jsonplaceholder.typicode.com/users').then(res => res.json()
// );
// //로그에 데이터 확인용

// Promise.all([promise1, promise2, promise3, promise4]).then(
//   values => console.log(values)
// );



