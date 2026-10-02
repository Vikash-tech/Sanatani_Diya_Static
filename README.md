# Sanatani Diya - Static Website

This is a pure static HTML/CSS/JavaScript website. It can be uploaded to Netlify, Vercel, GitHub Pages, Hostinger, cPanel or any normal web hosting.

## Files
- `index.html` - website page
- `styles.css` - responsive design
- `app.js` - products, WhatsApp ordering and payment-link handling
- `config.js` - prices, WhatsApp number and Razorpay Payment Links
- `assets/sanatani-diya-banner.jpg` - supplied product artwork

## Payment
A pure static site should not contain a Razorpay secret key and cannot securely create/verify Razorpay Orders. For static hosting, create a Razorpay Payment Link for each product/price and paste the URLs into `config.js` under `paymentLinks`.

Example:
`"7-orange": "https://rzp.io/l/your-link"`

The Pay Online button will open that payment link.

## Change prices
Edit the `price` values in `config.js`.

## Change WhatsApp
Edit:
`whatsappNumber: "919870832147"`

Use country code without `+` or spaces.
