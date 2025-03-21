const { GPU } = require('gpu.js');

const gpu = new GPU();
const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const charCount = chars.length;
const passwordLength = 6;
const targetPassword = "AbCdEf";

// GPU Kernel
const bruteForceKernel = gpu.createKernel(function (target, charCount) {
    let password = "";

    for (let i = 0; i < 6; i++) {
        let charIndex = Math.floor(this.thread.x / Math.pow(charCount, i)) % charCount;
        password += String.fromCharCode(97 + charIndex); // Convert ASCII to char
    }

    if (password === target) {
        return this.thread.x;
    }
    return -1;
}).setOutput([52 ** 6]);

console.log("Starting brute force attack on GPU...");

const result = bruteForceKernel(targetPassword, charCount);

const foundIndex = result.find(index => index !== -1);
if (foundIndex !== undefined) {
    console.log(`Password found at index: ${foundIndex}`);
} else {
    console.log("Password not found.");
}
