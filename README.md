# shopify-free-sample
Built a Custom “Free Sample Product” System in Shopify (No Apps)
This project implements a Free Sample Product system in Shopify with strict cart validation.

🚀 Features
Add free sample via product page button
Only 1 sample per order
Prevent checkout with only sample product
Works with metafields (dynamic sample per product)
Backend validation using Shopify Functions (non-bypassable)
🧱 Tech Stack
Shopify Liquid (theme customization)
JavaScript (AJAX Cart API)
Shopify Functions (cart validation)
📌 Requirements
Shopify store (Online Store 2.0 theme like Dawn)
Shopify CLI (for function deployment in advance secure case, can also work without this )
⚙️ Setup Summary
Create product metafield:
custom.sample_product (Product reference)
Tag all sample products:
sample-product
Add theme code (see /theme folder)
Deploy Shopify Function (see /shopify-function)
🔐 Rules Enforced
Only 1 sample allowed per order
Sample cannot be purchased alone
Cart must include at least one paid product
📁 Folder Overview
Folder	Purpose
theme/	Liquid + JS code
shopify-function/	Backend validation
docs/	Setup instructions
⚠️ Important

Frontend validation can be bypassed.
Shopify Function is required for real enforcement.
