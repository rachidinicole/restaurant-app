import PaystackWebView from "react-native-paystack";

// Set up your Paystack configuration
PaystackWebView.chargeCard({
  cardNumber: "4123450131001381",
  expiryMonth: "09",
  expiryYear: "32",
  cvc: "883",
  email: "test@example.com",
  amountInKobo: 10000, // Amount in kobo (e.g., 10000 for ₦100.00)
  currency: "NGN",
  subaccount: "", // Optional, if you're using subaccounts
  reference: "unique_transaction_reference", // Generate a unique reference
  bearer: "account", // Optional: "account" or "subaccount" or null
});
