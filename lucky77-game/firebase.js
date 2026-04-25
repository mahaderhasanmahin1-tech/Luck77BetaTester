<script type="module">
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase, ref, set, onValue } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDG0qle5tkjbZznLZYIpuorGr_YFjZNDI4",
  authDomain: "lucky77-f382e.firebaseapp.com",
  projectId: "lucky77-f382e",
  storageBucket: "lucky77-f382e.firebasestorage.app",
  messagingSenderId: "867476582124",
  appId: "1:867476582124:web:7222304cb9a4d716aa3fc9",
  measurementId: "G-GEYXCZ7KGX"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);
export { ref, set, onValue, signInWithEmailAndPassword };
</script>
