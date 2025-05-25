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
      monthlySpent: 500,
      percentageUsed: 25,
      transactionCount: 12
    },
    {
      id: "transport",
      name: "Transportation",
      monthlySpent: 300,
      percentageUsed: 15,
      transactionCount: 8
    },
    {
      id: "entertainment",
      name: "Entertainment",
      monthlySpent: 700,
      percentageUsed: 35,
      transactionCount: 10
    },
    {
      id: "shopping",
      name: "Shopping",
      monthlySpent: 500,
      percentageUsed: 25,
      transactionCount: 14
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