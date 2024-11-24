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
        window.location.href = "index.html";
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
    if (srnoDisplay) srnoDisplay.textContent = serialNumber;

    const studentRef = doc(db, "students", serialNumber);

    const codeSlotsContainer = document.getElementById("codeSlots");

    // Listen for real-time updates
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
        while (codeSlotsContainer.children.length < codeSlots.length) {
            const slotIndex = codeSlotsContainer.children.length;

            const codeSlotDiv = document.createElement("div");
            codeSlotDiv.className = "code-slot";

            const heading = document.createElement("h3");
            heading.textContent = `Code Slot ${slotIndex + 1}`;

            const codeEditor = document.createElement("textarea");
            codeEditor.placeholder = "Write your code here...";
            codeEditor.dataset.index = slotIndex;
            codeEditor.spellcheck = false;
            codeEditor.autocorrect = "off";
            codeEditor.autocapitalize = "none";
            codeEditor.setAttribute("autocomplete", "off");

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

        while (codeSlotsContainer.children.length > codeSlots.length) {
            codeSlotsContainer.removeChild(codeSlotsContainer.lastChild);
        }

        Array.from(codeSlotsContainer.children).forEach((slotDiv, index) => {
            const textArea = slotDiv.querySelector("textarea");
            if (textArea && textArea.value !== codeSlots[index]) {
                const cursorPosition = textArea.selectionStart;
                textArea.value = codeSlots[index];
                textArea.setSelectionRange(cursorPosition, cursorPosition);
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
