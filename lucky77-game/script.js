import { db, ref, set, onValue } from './firebase.js';

let timer = 20;

function randomResult() {
  let rand = Math.random() * 100;

  if (rand < 45) return "🍉";
  else if (rand < 90) return "🥭";
  else return "77";
}

setInterval(() => {
  timer--;
  document.getElementById("timer").innerText = timer;

  if (timer === 5) {
    let result = randomResult();
    document.getElementById("result").innerText = result;

    set(ref(db, 'game/result'), result);
  }

  if (timer === 0) {
    timer = 20;

    set(ref(db, 'game/round'), Date.now()); // auto round
  }

}, 1000);

// Live update
onValue(ref(db, 'game/notice'), (snap) => {
  document.getElementById("notice").innerText = snap.val();
});

onValue(ref(db, 'game/round'), (snap) => {
  document.getElementById("round").innerText = snap.val();
});
