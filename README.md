# 💰 PadovaFX: Versatile Currency Converter (CLI & Web App)

**Author:** Gaurav Joshi (BSc Information Engineering Student, University of Padova)
**Status:** Fully Functional and Deployed
**Technologies:** Node.js, React, Tailwind CSS, External Currency APIs

---

## ✨ Project Goal

This repository showcases the development of a unified currency conversion system, demonstrating comprehensive versatility in both **back-end focused CLI tools** and modern, **responsive front-end web applications**.

PadovaFX is designed to be highly efficient for scripting and aesthetically pleasing for interactive use.

## 🚀 Architectural Overview

The project is divided into two distinct components that share the same core functionality, highlighting different development focus areas:

| Component | Technology Focus | Key Features | Deployment |
| :--- | :--- | :--- | :--- |
| **Project 1: CLI Tool** | Node.js, Error Handling | Professional, color-coded terminal output; quick, scripted conversions. | Run directly with Node.js. |
| **Project 2: Web App** | React Hooks, Tailwind CSS | Single Page Application (SPA); mobile-responsive design; debounced API calls. | Simple HTML file deployment. |

---

## 🛠️ Project 1: PadovaFX - Command Line Interface (CLI)

A robust Node.js utility demonstrating foundational scripting and professional terminal output using the **`chalk`** library.

### Key Skills Demonstrated

* **CLI Development:** Utilizing Node.js's `process.argv` for efficient command-line argument handling.
* **Asynchronous Programming:** Mastering network requests using `fetch` and modern `async/await` patterns.
* **Robust Error Handling:** Custom validation logic and graceful failure handling for invalid inputs or network outages.
* **Professional Output:** Integrating the `chalk` library for clear, color-coded, and professional feedback.

### ⚙️ Usage

1.  Ensure you have Node.js and the project dependencies (`node-fetch`, `chalk`) installed.
2.  Run the application with the desired conversion:

```bash
# Syntax: node index.js [AMOUNT] [FROM_CURRENCY] [TO_CURRENCY]

# Example 1: Convert 200 Euros to US Dollars
node index.js 200 EUR USD

# Example 2: Convert 10000 Indian Rupees to Euros
node index.js 10000 INR EUR