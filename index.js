// index.js

const fetch = require('node-fetch');
const chalk = require('chalk');

// --- 1. Define the API endpoint and accepted currencies ---
const API_URL = 'https://api.frankfurter.app/latest'; // Note the change to .app and added /latest
const SUPPORTED_CURRENCIES = ['EUR', 'USD', 'INR', 'GBP', 'JPY', 'CAD', 'AUD']; 

// --- 2. Get Input from the Command Line ---
const [amountInput, fromCurrency, toCurrency] = process.argv.slice(2);

// --- 3. Validate the User Input (UPDATED) ---
function validateInput(amount, from, to) {
    if (!amount || !from || !to) {
        console.error(chalk.red('\nERROR: Missing arguments!'));
        console.log(chalk.yellow('Usage Example: node index.js 100 EUR INR'));
        console.log(chalk.cyan('Supported Currencies: ' + SUPPORTED_CURRENCIES.join(', ')));
        process.exitCode = 1; // <-- FIX: Set exit code instead of forced exit
        return false;
    }
    
    if (isNaN(amount) || amount <= 0) {
        console.error(chalk.red(`\nERROR: The amount "${amount}" must be a positive number.`));
        process.exitCode = 1; // <-- FIX: Set exit code instead of forced exit
        return false;
    }

    const upperFrom = from.toUpperCase();
    const upperTo = to.toUpperCase();
    
    if (!SUPPORTED_CURRENCIES.includes(upperFrom) || !SUPPORTED_CURRENCIES.includes(upperTo)) {
        console.error(chalk.red(`\nERROR: Invalid currency provided.`));
        console.log(chalk.cyan('Supported Currencies: ' + SUPPORTED_CURRENCIES.join(', ')));
        process.exitCode = 1; // <-- FIX: Set exit code instead of forced exit
        return false;
    }

    return { amount: parseFloat(amount), from: upperFrom, to: upperTo };
}

// --- 4. Main Conversion Function ---
async function convertCurrency() {
    const validated = validateInput(amountInput, fromCurrency, toCurrency);

    if (!validated) {
        return; // Stop if validation failed (error message already printed)
    }

    const { amount, from, to } = validated;
    const conversionUrl = `${API_URL}?amount=${amount}&from=${from}&to=${to}`;

    try {
        console.log(chalk.blue(`\nConverting ${amount} ${from} to ${to}...`));
        
        const response = await fetch(conversionUrl);
        
        if (!response.ok) {
            throw new Error(`API Request Failed! Status: ${response.status}`);
        }

        const data = await response.json();
        const result = data.rates[to]; 

        // Display the final result
        console.log(chalk.green('----------------------------------------------------'));
        console.log(chalk.bold.white(`RESULT:`));
        console.log(chalk.bold.white(`${amount} ${from} is equal to ${chalk.yellow(result.toFixed(2))} ${to}`));
        console.log(chalk.green('----------------------------------------------------'));
        console.log(chalk.gray(`\nRates sourced from: ${data.base} (as of ${data.date})`));

    } catch (error) {
        console.error(chalk.red(`\nFATAL ERROR: ${error.message}`));
        process.exitCode = 1; // <-- FIX: Set exit code for fatal errors
    }
}

// Run the application
convertCurrency();