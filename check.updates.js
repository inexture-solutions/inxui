const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

// Base directories where "libs" and "apps" folders are located
const baseDirs = [
  path.resolve(__dirname, "libs"),
  path.resolve(__dirname, "apps"),
];

// Function to recursively update dependencies
const updateDependencies = (currentDir) => {
  // Exclude "node_modules" directory
  if (currentDir.includes("node_modules")) return;

  // Check if "package.json" exists in the current directory
  const packageJsonPath = path.join(currentDir, "package.json");
  if (fs.existsSync(packageJsonPath)) {
    console.log(`Updating dependencies in ${currentDir}...`);
    try {
      // Run `ncu -u` in the current directory
      execSync("ncu -u", { cwd: currentDir, stdio: "inherit" });
    } catch (err) {
      console.error(
        `Error updating dependencies in ${currentDir}:`,
        err.message,
      );
    }
  }

  // Recurse into subdirectories
  fs.readdirSync(currentDir, { withFileTypes: true }).forEach((dirent) => {
    if (dirent.isDirectory()) {
      updateDependencies(path.join(currentDir, dirent.name));
    }
  });
};

// Start the process for each base directory
baseDirs.forEach((baseDir) => {
  if (fs.existsSync(baseDir)) {
    console.log(`Starting dependency updates in "${baseDir}"...`);
    updateDependencies(baseDir);
  } else {
    console.error(`The folder "${baseDir}" does not exist.`);
  }
});

console.log("Dependency updates completed.");
