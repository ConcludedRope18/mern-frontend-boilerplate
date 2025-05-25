import Database from "../public/backend placeholder/database.json";


export const fetchTransactions = () => {
  return Database.transactions.map(transaction => ({
    ...transaction,
    imageUrl: "src/assets/placeholder_pfp.png"
  }));
};


export const fetchGraphTransactions = (startingBalance = 0, numberOfColumns = 10) => {
  const transactions = Database.transactions;

  const balances = [];
  let currentBalance = startingBalance;

  for (let i = 0; i < numberOfColumns; i++) {
    const transaction = transactions[i % transactions.length];
    currentBalance += transaction.amount || 0;
    balances.push(currentBalance);
  }

  return balances;
};
export const fetchBudgets = () => {
  return [
    {
      id: "food",
      name: "Food & Dining",
      allocated: 1500,
      spent: 875,
      remaining: 625,
      percentage: 58
    },
    {
      id: "transport",
      name: "Transportation",
      allocated: 800,
      spent: 420,
      remaining: 380,
      percentage: 53
    },
    {
      id: "entertainment",
      name: "Entertainment",
      allocated: 500,
      spent: 320,
      remaining: 180,
      percentage: 64
    },
    {
      id: "utilities",
      name: "Utilities",
      allocated: 1200,
      spent: 1150,
      remaining: 50,
      percentage: 96
    }
  ];
};
export const fetchCategories = () => {
  return [
    {
      id: "food",
      name: "Food & Dining",
      monthlyBudget: 1500,
      monthlySpent: 875,
      monthlyRemaining: 625,
      percentageUsed: 58,
      transactionCount: 24
    },
    {
      id: "transport",
      name: "Transportation",
      monthlyBudget: 800,
      monthlySpent: 420,
      monthlyRemaining: 380,
      percentageUsed: 53,
      transactionCount: 12
    },
    {
      id: "entertainment",
      name: "Entertainment",
      monthlyBudget: 500,
      monthlySpent: 320,
      monthlyRemaining: 180,
      percentageUsed: 64,
      transactionCount: 18
    },
    {
      id: "utilities",
      name: "Utilities",
      monthlyBudget: 1200,
      monthlySpent: 1150,
      monthlyRemaining: 50,
      percentageUsed: 96,
      transactionCount: 8
    },
    {
      id: "shopping",
      name: "Shopping",
      monthlyBudget: 600,
      monthlySpent: 450,
      monthlyRemaining: 150,
      percentageUsed: 75,
      transactionCount: 15
    },
    {
      id: "health",
      name: "Health & Wellness",
      monthlyBudget: 400,
      monthlySpent: 210,
      monthlyRemaining: 190,
      percentageUsed: 53,
      transactionCount: 7
    }
  ];
};
export const addTransaction = (transaction) => {
  pass
};

export const addCategory = (category) => {
  pass
};

export const addBudget = (budget) => {
  pass
};