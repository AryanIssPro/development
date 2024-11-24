// Firebase JS SDK import
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getFirestore, doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyBk3zPJ24VfM0xbrwPzmNYH-iqf8yX0e9k",
    authDomain: "codebithub.firebaseapp.com",
    projectId: "codebithub",
    storageBucket: "codebithub.firebasestorage.app",
    messagingSenderId: "996676435419",
    appId: "1:996676435419:web:95b73c2d909ec8d1a77bfe",
    measurementId: "G-06KBGW0WDR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Handle Login
document.getElementById("loginBtn").addEventListener("click", async () => {
    const serialNumber = document.getElementById("serialNumber").value.trim();
    if (serialNumber.length === 4) {
        const studentRef = doc(db, "students", serialNumber);
        const docSnap = await getDoc(studentRef);
        if (docSnap.exists()) {
            // Store student info and redirect to code editor
            localStorage.setItem("serialNumber", serialNumber);
            window.location.href = "editor.html";
        } else {
            document.getElementById("loginError").style.display = "block";
        }
    } else {
        document.getElementById("loginError").style.display = "block";
    }
});

// Handle Register
document.getElementById("registerBtn").addEventListener("click", async () => {
    const serialNumber = document.getElementById("newSerialNumber").value.trim();
    if (serialNumber.length === 4) {
        const studentRef = doc(db, "students", serialNumber);
        const docSnap = await getDoc(studentRef);
        if (!docSnap.exists()) {
            await setDoc(studentRef, { serialNumber });
            localStorage.setItem("serialNumber", serialNumber);
            window.location.href = "editor.html";
        } else {
            document.getElementById("registerError").style.display = "block";
        }
    } else {
        document.getElementById("registerError").style.display = "block";
    }
});

// Toggle between Login and Register
document.getElementById("showRegisterBtn").addEventListener("click", () => {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("registerForm").style.display = "block";
});

document.getElementById("showLoginBtn").addEventListener("click", () => {
    document.getElementById("registerForm").style.display = "none";
    document.getElementById("loginForm").style.display = "block";
});
