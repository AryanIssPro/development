import { 
    initializeApp 
} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";

import { 
    getFirestore, doc, getDoc, updateDoc, onSnapshot 
} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

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

document.addEventListener("DOMContentLoaded", async () => {
    const serialNumber = localStorage.getItem("serialNumber");
    if (!serialNumber) {
        window.location.href = "/";
        return;
    }

    const srnoDisplay = document.getElementById("srnoDisplay");
    if (srnoDisplay) srnoDisplay.textContent = serialNumber;

    const studentRef = doc(db, "students", serialNumber);

    const codeSlotsContainer = document.getElementById("codeSlots");

    onSnapshot(studentRef, (docSnap) => {
        if (docSnap.exists()) {
            const studentData = docSnap.data();
            const codeSlots = studentData.codeSlots || [];
            updateOrRenderCodeSlots(codeSlots);
        } else {
            updateOrRenderCodeSlots([]);
        }
    });

    function updateOrRenderCodeSlots(codeSlots) {
        // Create slots if needed, update content otherwise
        while (codeSlotsContainer.children.length < codeSlots.length) {
            const slotIndex = codeSlotsContainer.children.length;

            const codeSlotDiv = document.createElement("div");
            codeSlotDiv.className = "code-slot";

            const heading = document.createElement("h3");
            heading.textContent = `Code Slot ${slotIndex + 1}`;

            const codeEditor = document.createElement("textarea");
            codeEditor.placeholder = "Write your code here...";
            codeEditor.dataset.index = slotIndex; // Track the index in the dataset
            codeEditor.spellcheck = false; // Disable spellcheck
            codeEditor.autocorrect = "off"; // Disable auto-correct
            codeEditor.autocapitalize = "none"; // Prevent automatic capitalization
            codeEditor.setAttribute("autocomplete", "off"); // Disable input suggestions


            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete";
            deleteBtn.className = "delete-btn";
            deleteBtn.addEventListener("click", () => deleteCodeSlot(slotIndex));

            codeSlotDiv.appendChild(heading);
            codeSlotDiv.appendChild(codeEditor);
            codeSlotDiv.appendChild(deleteBtn);

            codeSlotsContainer.appendChild(codeSlotDiv);

            codeEditor.addEventListener("input", (e) => {
                const index = e.target.dataset.index;
                updateCodeSlot(parseInt(index), e.target.value);
            });
        }

        // Remove extra slots if needed
        while (codeSlotsContainer.children.length > codeSlots.length) {
            codeSlotsContainer.removeChild(codeSlotsContainer.lastChild);
        }

        // Update text areas with current code
        Array.from(codeSlotsContainer.children).forEach((slotDiv, index) => {
            const textArea = slotDiv.querySelector("textarea");
            if (textArea && textArea.value !== codeSlots[index]) {
                const cursorPosition = textArea.selectionStart; // Save cursor position
                textArea.value = codeSlots[index];
                textArea.setSelectionRange(cursorPosition, cursorPosition); // Restore cursor position
            }
        });
    }

    const addCodeSlotBtn = document.getElementById("addCodeSlotBtn");
    if (addCodeSlotBtn) {
        addCodeSlotBtn.addEventListener("click", async () => {
            const docSnap = await getDoc(studentRef);
            const studentData = docSnap.data();
            const updatedCodeSlots = studentData.codeSlots ? [...studentData.codeSlots, ""] : [""];

            await updateDoc(studentRef, { codeSlots: updatedCodeSlots });
        });
    }

    async function updateCodeSlot(index, code) {
        const docSnap = await getDoc(studentRef);
        const studentData = docSnap.data();
        const updatedCodeSlots = [...(studentData.codeSlots || [])];
        updatedCodeSlots[index] = code;

        await updateDoc(studentRef, { codeSlots: updatedCodeSlots });
    }

    async function deleteCodeSlot(index) {
        const docSnap = await getDoc(studentRef);
        const studentData = docSnap.data();
        const updatedCodeSlots = [...(studentData.codeSlots || [])];
        updatedCodeSlots.splice(index, 1);

        await updateDoc(studentRef, { codeSlots: updatedCodeSlots });
    }

    const logoutBtn = document.getElementById("logoutBtn");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
            localStorage.removeItem("serialNumber");
            window.location.href = "index.html";
        });
    }
});
