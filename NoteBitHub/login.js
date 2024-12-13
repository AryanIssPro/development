// Firebase JS SDK import
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getFirestore, doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyD3RRD-GpfCXi3svgvOwfbhEisITws7A9Q",
    authDomain: "notesbithub.firebaseapp.com",
    projectId: "notesbithub",
    storageBucket: "notesbithub.firebasestorage.app",
    messagingSenderId: "366450711699",
    appId: "1:366450711699:web:a77fd9dacd6e6b8c8c4166",
    measurementId: "G-LJXJZXQDN5"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Check if serial number is already saved in localStorage
const storedSerialNumber = localStorage.getItem("serialNumber");
if (storedSerialNumber) {
    // If serialNumber exists in localStorage, redirect to editor page
    window.location.replace("editor/index.html");
}

// Handle Login
document.getElementById("loginBtn").addEventListener("click", async () => {
    const serialNumber = document.getElementById("serialNumber").value.trim();
    if (serialNumber.length === 4) {
        const studentRef = doc(db, "students", serialNumber);
        const docSnap = await getDoc(studentRef);
        if (docSnap.exists()) {
            // Store student info and redirect to note editor
            localStorage.setItem("serialNumber", serialNumber);
            window.location.replace("editor/index.html");
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
    const name = document.getElementById("newName").value.trim();
    const classEntered = document.getElementById('class').value.replace(/\s+/g, '').toUpperCase();
    if (serialNumber.length === 4) {
        const studentRef = doc(db, "students", serialNumber);
        const docSnap = await getDoc(studentRef);

        if (!docSnap.exists()) {
            // Save both serialNumber and name
            await setDoc(studentRef, {
                name: name,
                serialNumber: parseInt(serialNumber),
                class: classEntered,
            });

            // Store serialNumber and name in localStorage
            localStorage.setItem("serialNumber", serialNumber);
            localStorage.setItem("name", name);

            // Redirect to note editor
            window.location.href = "editor/index.html";
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
