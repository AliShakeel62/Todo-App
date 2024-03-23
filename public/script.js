// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getDatabase,ref,set  } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwOWLVxMwM-8kAwN78Ij5QjPEPKUsrgY0",
  authDomain: "last-assignment-be3bd.firebaseapp.com",
  databaseURL: "https://last-assignment-be3bd-default-rtdb.firebaseio.com",
  projectId: "last-assignment-be3bd",
  storageBucket: "last-assignment-be3bd.appspot.com",
  messagingSenderId: "22635357043",
  appId: "1:22635357043:web:ab700ea44170a3b2bf1b06"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);


var a = document.getElementById('main');
// var c = document.getElementById('stylearea')
var input = document.getElementById('inp')

 window.create = function() {
    var peragraph = document.createElement('P')
    peragraph.setAttribute('id', 'pera1');
    peragraph.innerHTML = input.value
    peragraph.setAttribute('class', 'p1')
    a.appendChild(peragraph)
    var reference = ref(database,`List`)
    set(reference,input.value)
    var btn = document.createElement('button')
    var txt = document.createTextNode('delete');
    btn.appendChild(txt)
    btn.setAttribute('onclick','del(this)')
    btn.setAttribute('class','btn3')
    peragraph.appendChild(btn)
    var edit = document.createElement('button')
    var etxt = document.createTextNode('Edit')
    edit.appendChild(etxt);
    edit.setAttribute('onclick','Edits()')
    edit.setAttribute('class','editsbtn')
    peragraph.appendChild(edit)
    var k = input.value

}


window.Edits = function (){
    var pro = prompt("enter your edit value");
    var rev = document.getElementById('pera1');
    pera1.innerHTML = ""
    input.value=""
   if(pro.value == pro.value ){
input.value = pro.value;

var reference1 = ref(database,`editer`)
    set(reference1,pro)
    pera1.innerHTML = pro
    onValue(reference1, (snapshot) => {
        const data = snapshot.val();
        updateStarCount(, data);
        console.log("ok")
      });
}
    
}
window.del = function(elem){
var peragraph = elem.parentNode
peragraph.remove()
console.log(peragraph.elem.parentNode)
}

window.remove =function() {
    var rev = document.getElementById('pera1');
    pera1.innerHTML = ""
    input.value=""
}
// window.abc =function(){
//     var reference = ref(database,`List`)
//     set(reference,input.value)
// }