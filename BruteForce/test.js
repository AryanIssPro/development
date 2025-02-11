const cl = require("node-opencl");

const charset = "abcdefghijklmnopqrstuvwxyz";
const password = "abcd";
const maxLength = password.length;

// OpenCL Kernel for brute-force
const kernelSource = `
__kernel void bruteForce(__global char *charset, int charsetSize, __global char *target, int targetLength, __global int *found) {
    int id = get_global_id(0);
    char guess[${maxLength}];

    for (int i = 0; i < targetLength; i++) {
        guess[i] = charset[(id / (int)pow(charsetSize, i)) % charsetSize];
    }

    if (strncmp(guess, target, targetLength) == 0) {
        *found = id;
    }
}
`;

// Get OpenCL platform & device
const platform = cl.getPlatformIDs()[0];
const device = cl.getDeviceIDs(platform, cl.DEVICE_TYPE_GPU)[0];
const context = cl.createContext([device]);

// Create queue & program
const queue = cl.createCommandQueue(context, device);
const program = cl.createProgramWithSource(context, kernelSource);
cl.buildProgram(program, [device]);

// Create kernel
const kernel = cl.createKernel(program, "bruteForce");

// Allocate memory
const bufferCharset = cl.createBuffer(context, cl.MEM_READ_ONLY, charset.length);
const bufferTarget = cl.createBuffer(context, cl.MEM_READ_ONLY, password.length);
const bufferFound = cl.createBuffer(context, cl.MEM_WRITE_ONLY, 4);

cl.enqueueWriteBuffer(queue, bufferCharset, true, 0, Buffer.from(charset));
cl.enqueueWriteBuffer(queue, bufferTarget, true, 0, Buffer.from(password));
cl.enqueueWriteBuffer(queue, bufferFound, true, 0, Buffer.alloc(4));

// Set kernel arguments
cl.setKernelArg(kernel, 0, "pointer", bufferCharset);
cl.setKernelArg(kernel, 1, "int", charset.length);
cl.setKernelArg(kernel, 2, "pointer", bufferTarget);
cl.setKernelArg(kernel, 3, "int", password.length);
cl.setKernelArg(kernel, 4, "pointer", bufferFound);

// Execute kernel
cl.enqueueNDRangeKernel(queue, kernel, 1, null, [charset.length ** maxLength], null);

// Read result
const foundBuffer = Buffer.alloc(4);
cl.enqueueReadBuffer(queue, bufferFound, true, 0, foundBuffer);
const result = foundBuffer.readInt32LE(0);

if (result !== 0) {
    console.log("Password found!");
} else {
    console.log("Password not found!");
}
