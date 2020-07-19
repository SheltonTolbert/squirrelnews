var admin = require('firebase-admin');

function help() {
  console.log("here comes the help");
}

async function test() {
  const snapshot = await admin.firestore().collection('issues-test').get();
  snapshot.forEach( doc => console.log(doc.data()));
}

/**
 * Main function
 */
(async function () {

  admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL: 'https://squirrel-news-789fd.firebaseio.com'
  });
  
  const command = process.argv[2];
  
  switch (command) {
    case "migratetitle":
      
      break;

    case "addCoverImageURL":

      break;

    case "test":
      test();
      break;

    case "help":
      help();
      break;

    default:
      help();
      break;
  }

})();