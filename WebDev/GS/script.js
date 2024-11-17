// Import necessary Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";
import { getFirestore, collection, getDocs, setDoc, doc, getDoc, updateDoc } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyAy4LNR4xNKP3DekQav7oTu9j8zGLV3KJM",
    authDomain: "gs-syllabus-tracker.firebaseapp.com",
    databaseURL: "https://gs-syllabus-tracker-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "gs-syllabus-tracker",
    storageBucket: "gs-syllabus-tracker.firebasestorage.app",
    messagingSenderId: "599402415347",
    appId: "1:599402415347:web:b7d9e67be9f997c3bb6386",
    measurementId: "G-NB5KBD1LTH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

// Subjects Data
const subjects = {
    History: ["Chapter 1", "Chapter 2", "Chapter 3", "Chapter 4", "Chapter 5", "Chapter 6", "Chapter 7", "Chapter 8"],
    Geography: ["Chapter 1", "Chapter 2", "Chapter 3", "Chapter 4", "Chapter 5"],
    Civics: ["Chapter 1", "Chapter 2", "Chapter 3", "Chapter 4", "Chapter 5", "Chapter 6", "Chapter 7", "Chapter 8"],
    Science: ["Chapter 1", "Chapter 2", "Chapter 3", "Chapter 4", "Chapter 5", "Chapter 6", "Chapter 7", "Chapter 8", "Chapter 9", "Chapter 10", "Chapter 11", "Chapter 12", "Chapter 13"],
    Maths: [...Array(20).keys()].map(i => `Chapter ${i + 1}`),
};

// Render Subjects and Chapters
const subjectList = document.getElementById("subject-list");

Object.entries(subjects).forEach(([subject, chapters]) => {
    const subjectDiv = document.createElement("div");
    subjectDiv.className = "subject-card";

    const chapterList = chapters
        .map(
            chapter => `  
        <div class="chapter">
            <span class="chapter-title">${chapter}</span>
            <div class="progress-wrapper">
                <div class="progress-bar">
                    <div class="progress not-started"></div>
                </div>
                <select class="chapter-select">
                    <option value="Not Started">Not Started</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                </select>
            </div>
            <div class="notes-container">
                <textarea class="chapter-notes" placeholder="Write notes here..."></textarea>
            </div>
        </div>`
        )
        .join(" ");

    subjectDiv.innerHTML = ` 
        <h3>${subject}</h3>
        ${chapterList}
    `;
    subjectList.appendChild(subjectDiv);
});

// Load Progress and Notes from Firestore
async function loadProgress() {
    const snapshot = await getDocs(collection(db, "subjects"));
    snapshot.forEach(docSnap => {
        const subject = docSnap.id;
        const chapters = docSnap.data().chapters;

        chapters.forEach(chapter => {
            const subjectDiv = Array.from(document.querySelectorAll(".subject-card"))
                .find(div => div.querySelector("h3").textContent === subject);
            if (subjectDiv) {
                const chapterDiv = Array.from(subjectDiv.querySelectorAll('.chapter'))
                    .find(div => div.querySelector('.chapter-title').textContent === chapter.name);
                if (chapterDiv) {
                    const selectElement = chapterDiv.querySelector('select');
                    selectElement.value = chapter.status;

                    const progressBar = chapterDiv.querySelector('.progress');
                    if (chapter.status === "Not Started") {
                        progressBar.style.width = "0%";
                        progressBar.className = "progress not-started";
                    }
                    if (chapter.status === "In Progress") {
                        progressBar.style.width = "50%";
                        progressBar.className = "progress in-progress";
                    }
                    if (chapter.status === "Completed") {
                        progressBar.style.width = "100%";
                        progressBar.className = "progress completed";
                    }

                    // Load notes
                    const notesTextarea = chapterDiv.querySelector('.chapter-notes');
                    notesTextarea.value = chapter.notes || "";
                }
            }
        });
    });
}

// Save Notes to Firestore
async function saveChapterNotes(subject, chapter, notes) {
    const subjectRef = doc(db, "subjects", subject);
    const docSnap = await getDoc(subjectRef);

    if (docSnap.exists()) {
        const existingData = docSnap.data();
        const chapters = existingData.chapters || [];

        const chapterIndex = chapters.findIndex(ch => ch.name === chapter);
        if (chapterIndex !== -1) {
            chapters[chapterIndex].notes = notes;
        } else {
            chapters.push({ name: chapter, notes });
        }

        await updateDoc(subjectRef, { chapters });
    } else {
        await setDoc(subjectRef, { chapters: [{ name: chapter, notes }] });
    }
}

// Update Chapter Progress
async function updateChapter(subject, chapter, status) {
    const subjectRef = doc(db, "subjects", subject);
    const docSnap = await getDoc(subjectRef);

    if (docSnap.exists()) {
        const existingData = docSnap.data();
        const chapters = existingData.chapters || [];

        const chapterIndex = chapters.findIndex(ch => ch.name === chapter);
        if (chapterIndex !== -1) {
            chapters[chapterIndex].status = status;
        } else {
            chapters.push({ name: chapter, status });
        }

        await setDoc(subjectRef, { chapters }, { merge: true });
    } else {
        await setDoc(subjectRef, { chapters: [{ name: chapter, status }] });
    }

    // Update the progress bar visually
    const subjectDiv = Array.from(document.querySelectorAll(".subject-card"))
        .find(div => div.querySelector("h3").textContent === subject);
    const chapterDiv = Array.from(subjectDiv.querySelectorAll('.chapter'))
        .find(div => div.querySelector('.chapter-title').textContent === chapter);

    const progressBar = chapterDiv.querySelector('.progress');
    if (status === "Not Started") {
        progressBar.style.width = "0%";
        progressBar.className = "progress not-started";
    }
    if (status === "In Progress") {
        progressBar.style.width = "50%";
        progressBar.className = "progress in-progress";
    }
    if (status === "Completed") {
        progressBar.style.width = "100%";
        progressBar.className = "progress completed";
    }
}

// Add event listeners to all select elements and note textareas after the page is rendered
document.addEventListener('DOMContentLoaded', () => {
    const selectElements = document.querySelectorAll(".chapter-select");
    const noteTextareas = document.querySelectorAll(".chapter-notes");

    selectElements.forEach(select => {
        select.addEventListener("change", (event) => {
            const selectElement = event.target;
            const subject = selectElement.closest(".subject-card").querySelector("h3").textContent;
            const chapter = selectElement.closest(".chapter").querySelector(".chapter-title").textContent.trim();
            const status = selectElement.value;

            // Update Firestore and UI
            updateChapter(subject, chapter, status);
        });
    });

    noteTextareas.forEach(textarea => {
        textarea.addEventListener('input', (event) => {
            const textareaElement = event.target;
            const subject = textareaElement.closest(".subject-card").querySelector("h3").textContent;
            const chapter = textareaElement.closest(".chapter").querySelector(".chapter-title").textContent.trim();
            const notes = textareaElement.value;

            // Save the notes to Firestore
            saveChapterNotes(subject, chapter, notes);
        });
    });
    
    // Load progress and notes on page load
    loadProgress();
});
