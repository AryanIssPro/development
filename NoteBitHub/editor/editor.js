import { 
    initializeApp 
} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";

import { 
    getFirestore, doc, getDoc, updateDoc, onSnapshot 
} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

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

document.addEventListener("DOMContentLoaded", async () => {
    const serialNumber = localStorage.getItem("serialNumber");
    if (!serialNumber) {
        window.location.href = "../";
        return;
    }

    // Prevent caching this page
    window.history.replaceState(null, "", window.location.href);

    // Force page reload from the server, not cache
    window.addEventListener("pageshow", function (event) {
        if (event.persisted) {
            window.location.reload();
        }
    });

    const srnoDisplay = document.getElementById("srnoDisplay");
    const NoteSlotsContainer = document.getElementById("NoteSlots");
    const studentRef = doc(db, "students", serialNumber);

    try {
        // Fetch the student's document from Firestore
        const docSnap = await getDoc(studentRef);
        if (docSnap.exists()) {
            const studentData = docSnap.data();
            const studentName = studentData.name || "Unknown Student";
            if (srnoDisplay) srnoDisplay.textContent = studentName;

            // Render initial NoteSlots
            const NoteSlots = studentData.NoteSlots || [];
            updateOrRenderNoteSlots(NoteSlots);
        } else {
            console.error("Student document does not exist.");
        }
    } catch (error) {
        console.error("Error fetching student document:", error);
    }

    // Real-time updates for notes
    onSnapshot(studentRef, (docSnap) => {
        if (docSnap.exists()) {
            const studentData = docSnap.data();
            const NoteSlots = studentData.NoteSlots || [];
            updateOrRenderNoteSlots(NoteSlots);
        } else {
            updateOrRenderNoteSlots([]);
        }
    });

    // Function to update or render NoteSlots
    function updateOrRenderNoteSlots(NoteSlots) {
        while (NoteSlotsContainer.children.length < NoteSlots.length) {
            const slotIndex = NoteSlotsContainer.children.length;

            const NoteSlotDiv = document.createElement("div");
            NoteSlotDiv.className = "Note-slot";

            const heading = document.createElement("h3");
            heading.textContent = `Note Slot ${slotIndex + 1}`;

            const NoteEditor = document.createElement("textarea");
            NoteEditor.placeholder = "Write your Note here...";
            NoteEditor.dataset.index = slotIndex;
            NoteEditor.spellcheck = false;
            NoteEditor.autocorrect = "off";
            NoteEditor.autocapitalize = "none";
            NoteEditor.setAttribute("autocomplete", "off");

            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete";
            deleteBtn.className = "delete-btn";
            deleteBtn.addEventListener("click", () => deleteNoteSlot(slotIndex));

            NoteSlotDiv.appendChild(heading);
            NoteSlotDiv.appendChild(NoteEditor);
            NoteSlotDiv.appendChild(deleteBtn);
            NoteSlotsContainer.appendChild(NoteSlotDiv);

            NoteEditor.addEventListener("input", (e) => {
                const index = e.target.dataset.index;
                updateNoteSlot(parseInt(index), e.target.value);
            });
        }

        while (NoteSlotsContainer.children.length > NoteSlots.length) {
            NoteSlotsContainer.removeChild(NoteSlotsContainer.lastChild);
        }

        Array.from(NoteSlotsContainer.children).forEach((slotDiv, index) => {
            const textArea = slotDiv.querySelector("textarea");
            if (textArea && textArea.value !== NoteSlots[index]) {
                const cursorPosition = textArea.selectionStart;
                textArea.value = NoteSlots[index];
                textArea.setSelectionRange(cursorPosition, cursorPosition);
            }
        });
    }

    // Add new note slot
    const addNoteSlotBtn = document.getElementById("addNoteSlotBtn");
    if (addNoteSlotBtn) {
        addNoteSlotBtn.addEventListener("click", async () => {
            try {
                const docSnap = await getDoc(studentRef);
                const studentData = docSnap.data();
                const updatedNoteSlots = studentData.NoteSlots ? [...studentData.NoteSlots, ""] : [""];

                await updateDoc(studentRef, { NoteSlots: updatedNoteSlots });
            } catch (error) {
                console.error("Error adding note slot:", error);
            }
        });
    }

    // Update a note slot
    async function updateNoteSlot(index, Note) {
        try {
            const docSnap = await getDoc(studentRef);
            const studentData = docSnap.data();
            const updatedNoteSlots = [...(studentData.NoteSlots || [])];
            updatedNoteSlots[index] = Note;

            await updateDoc(studentRef, { NoteSlots: updatedNoteSlots });
        } catch (error) {
            console.error("Error updating note slot:", error);
        }
    }

    // Delete a note slot
    async function deleteNoteSlot(index) {
        try {
            const docSnap = await getDoc(studentRef);
            const studentData = docSnap.data();
            const updatedNoteSlots = [...(studentData.NoteSlots || [])];
            updatedNoteSlots.splice(index, 1);

            await updateDoc(studentRef, { NoteSlots: updatedNoteSlots });
        } catch (error) {
            console.error("Error deleting note slot:", error);
        }
    }

    // Logout button functionality
    const logoutBtn = document.getElementById("logoutBtn");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
            localStorage.removeItem("serialNumber");
            window.location.replace("../");
        });
    }
});
