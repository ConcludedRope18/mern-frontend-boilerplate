import Database from "../public/backend placeholder/database.json";

/**
 * Fetch all transactions with additional imageUrl property.
 */
export const fetchTransactions = () => {
  return Database.transactions.map(transaction => ({
    ...transaction,
    imageUrl: "src/assets/placeholder_pfp.png"
  }));
};

/**
 * Fetch transactions specifically for the graph.
 * @param {number} startingBalance - The initial balance to start calculations.
 * @param {number} numberOfColumns - The number of columns (balances) to generate.
 * @returns {number[]} - An array of balances over time.
 */
export const fetchGraphTransactions = (startingBalance = 0, numberOfColumns = 10) => {
  const transactions = Database.transactions;

  // Calculate balances over time
  const balances = [];
  let currentBalance = startingBalance;

  for (let i = 0; i < numberOfColumns; i++) {
    const transaction = transactions[i % transactions.length]; // Loop through transactions
    currentBalance += transaction.amount || 0; // Add transaction amount to balance
    balances.push(currentBalance);
  }

  return balances;
};