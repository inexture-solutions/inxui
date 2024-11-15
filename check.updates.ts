const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

// Base directory where "libs" folder is located
const baseDir = path.resolve(__dirname, "libs");

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

// Start the process from the "libs" folder
if (fs.existsSync(baseDir)) {
  updateDependencies(baseDir);
  console.log("Dependency updates completed.");
} else {
  console.error(`The folder "${baseDir}" does not exist.`);
}
