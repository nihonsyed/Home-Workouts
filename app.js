// Your web app's Firebase configuration
  const firebaseConfig = {
    // apiKey: "AIzaSyDYUyz4xKFnmzFZL53k9_s2652AWh8AxFw",
    // authDomain: "chat-application-27ab4.firebaseapp.com",
    // databaseURL: "https://chat-application-27ab4.firebaseio.com",
    // projectId: "chat-application-27ab4",
    // storageBucket: "chat-application-27ab4.appspot.com",
    // messagingSenderId: "433296968616",
    // appId: "1:433296968616:web:020defb862c1bd5af02b9d",
    // measurementId: "G-19ZPF0TWCM"
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional

  apiKey: "AIzaSyA_A_kKLfwLTkiu-OO5h3SzjYj6HbdKNIk",
  authDomain: "workout-a0f13.firebaseapp.com",
  databaseURL: "https://workout-a0f13.firebaseio.com",
  projectId: "workout-a0f13",
  storageBucket: "workout-a0f13.appspot.com",
  messagingSenderId: "943576614068",
  appId: "1:943576614068:web:bc6974fae4a45d0d36c3e1",
  measurementId: "G-TZ38SK60CK"

  }; 

    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


   var database = firebase.database();

  function sendMesssage()
  {
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;
    dateTime=dateTime.toString();


      var email=document.getElementById("email").value;
      var name=document.getElementById("name").value;
      var value=document.getElementById("message").value;
console.log(email+name+comment+dateTime)
      var newMessageKey = database.ref().child('value').push().key;
      // database.ref('comments/'+newMessageKey+'/email').set(email);
      // database.ref('comments/'+newMessageKey+'/name').set(name);
      database.ref('value/'+newMessageKey+'/value').set(value);
      // database.ref('comments/'+newMessageKey+'/date').set(dateTime);
  }

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);
  
// Submit form
function submitForm(e){
  e.preventDefault();


  // Show alert
  document.querySelector('.alert').style.display = 'block';
  
  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

}


//This is the perfect way to retrieve data leaving all the dull ways of youtubers now
var leadsRef = database.ref('comments');
leadsRef.on('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var childData = childSnapshot.val();
      // console.log(childData.message)

var name = document.createTextNode('Name: ' + childData.name);
var email = document.createTextNode('Email: ' + childData.email);
var comment = document.createTextNode('Comment : ' + childData.comment);
var date = document.createTextNode('Date: ' + childData.date);




var ult = document.getElementById("scoreList");
var lit = document.createElement("li");
lit.setAttribute('class','uls');
lit.appendChild(name);
lit.appendChild(document.createElement('br'));
lit.appendChild(email);
lit.appendChild(document.createElement('br'));
lit.appendChild(comment);
lit.appendChild(document.createElement('br'));
lit.appendChild(date);
lit.appendChild(document.createElement('br'));
ult.appendChild(lit);



//Hey this is
    });
});
//This is the perfect way to retrieve data leaving all the dull ways of youtubers now
