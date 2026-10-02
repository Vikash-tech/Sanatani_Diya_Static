/*
  STATIC WEBSITE SETTINGS
  ---------------------------------------------
  1. Change whatsappNumber if needed.
  2. Enter your Razorpay Payment Link for each product in paymentLinks.

  IMPORTANT:
  A fully static website cannot safely create Razorpay Orders or verify
  Razorpay signatures. For a static site, use Razorpay Payment Links.
*/
window.SANATANI_CONFIG = {
  storeName: "Sanatani Diya",
  whatsappNumber: "919870832147",
  currency: "INR",
  paymentLinks: {
    "7-orange": "",
    "7-yellow": "",
    "11-orange": "",
    "11-yellow": "",
    "21-orange": "",
    "21-yellow": ""
  },
  products: [
    { id: "7-orange", series: 7, color: "Orange", price: 299, description: "7 traditional-style LED diyas with realistic flickering glow." },
    { id: "7-yellow", series: 7, color: "Yellow", price: 299, description: "7 traditional-style LED diyas with realistic flickering glow." },
    { id: "11-orange", series: 11, color: "Orange", price: 399, description: "11 traditional-style LED diyas with realistic flickering glow." },
    { id: "11-yellow", series: 11, color: "Yellow", price: 399, description: "11 traditional-style LED diyas with realistic flickering glow." },
    { id: "21-orange", series: 21, color: "Orange", price: 599, description: "21 traditional-style LED diyas with realistic flickering glow." },
    { id: "21-yellow", series: 21, color: "Yellow", price: 599, description: "21 traditional-style LED diyas with realistic flickering glow." }
  ]
};
