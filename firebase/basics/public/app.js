document.addEventListener("DOMContentLoaded", event => {

  // check that the firebase app has loaded
  const app = firebase.app();
  console.log(app);

  // connect to the database
  const db = firebase.firestore();
  // specify this setting or we get a console error: APP MAY BREAK
  const settings = {timestampsInSnapshots: true};
  db.settings(settings);
  console.log(db);

  // get with id `firstpost` from collection `posts`
  const myPost = db.collection('posts').doc('firstpost');
  console.log(myPost);

  // get the data from `firstpost` as a promise
  // myPost.get()
  //       .then(doc => {
  //         const data = doc.data();
  //         // document.write( data.title + '<br>' );
  //         // document.write( data.createdAt.toDate() );
  //         console.log(data);
  //       })
  //       .catch(console.log);

  // get the data from `firstpost` as a realtime stream
  myPost.onSnapshot(doc => {
        const data = doc.data();
        document.querySelector('#title').innerHTML = data.title;
        console.log(data);
  });

  // query collection
  const productsRef = db.collection('products');
  const query = productsRef.where('price', '>', 10).orderBy('price', 'desc').limit(1);

  query.get()
        .then(products => {
          products.forEach(doc => {
            data = doc.data();
            // document.write(`${data.name} at ${data.price} <br>`);
            console.log(doc);
          })
        })
        .catch(console.log);

});

// login with google and display user name
function googleLogin() {
  const provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider)
    .then(result => {
      const user = result.user;
      document.write(`Hello ${user.displayName}`);
      console.log(user);
    })
    .catch(console.log);
}

// update database with value 
function updatePost(e) {
  const db = firebase.firestore();
  const myPost = db.collection('posts').doc('firstpost');
  myPost.update({ title: e.target.value });
}

function uploadFile(files) {
  const storageRef = firebase.storage().ref();
  const horseRef = storageRef.child('horse.jpg');

  console.log(files);
  const file = files.item(0);

  const task = horseRef.put(file);

  task.then(snapshot => {
    console.log(snapshot);
    snapshot.ref.getDownloadURL()
      .then(url => {
        document.querySelector('#imgUpload').setAttribute('src', url);
      });
  });
}
