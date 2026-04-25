import { db, auth, ref, set, signInWithEmailAndPassword } from './firebase.js';

window.login = function () {
  let email = document.getElementById("email").value;
  let pass = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, pass)
    .then(() => alert("Login Success"))
    .catch(err => alert(err.message));
};

window.setRound = function () {
  let round = document.getElementById("roundInput").value;
  set(ref(db, 'game/round'), parseInt(round));
};

window.setNotice = function () {
  let notice = document.getElementById("noticeInput").value;
  set(ref(db, 'game/notice'), notice);
};
