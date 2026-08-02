export const customer = {
  id: 1,
  name: "Deepika",
  email: "deepika@email.com",
  phone: "9876543210",
  address: "Bengaluru"
};

export const wallet = {
  balance: 25000,
  currency: "INR"
};

export const cards = [
  {
    id: 1,
    type: "Visa",
    lastFour: "4567",
    active: true
  },
  {
    id: 2,
    type: "MasterCard",
    lastFour: "9821",
    active: true
  }
];

export const transactions = [
  {
    id: 1,
    merchant: "Amazon",
    amount: 2500,
    status: "Completed"
  },
  {
    id: 2,
    merchant: "Flipkart",
    amount: 1000,
    status: "Completed"
  }
];
