Shopify Free Sample System
This project implements a Free Sample Product system in Shopify with strict cart validation.
🚀 Features
•	Add free sample via product page button
•	Only 1 sample per order
•	Prevent checkout with only sample product
•	Works with metafields (dynamic sample per product)
•	Backend validation using Shopify Functions (non-bypassable)
________________________________________
🧱 Tech Stack
•	Shopify Liquid (theme customization)
•	JavaScript (AJAX Cart API)
•	Shopify Functions (cart validation)
________________________________________
📌 Requirements
•	Shopify store (Online Store 2.0 theme like Dawn)
•	Shopify CLI (for function deployment)
________________________________________
⚙️ Setup Summary
1.	Create product metafield:
o	custom.sample_product (Product reference)
2.	Tag all sample products:
o	sample-product
3.	Add theme code (see /theme folder)
4.	Deploy Shopify Function (see /shopify-function)
________________________________________
🔐 Rules Enforced
•	Only 1 sample allowed per order
•	Sample cannot be purchased alone
•	Cart must include at least one paid product
________________________________________
📁 Folder Overview
Folder	Purpose
theme/	Liquid + JS code
shopify-function/	Backend validation
docs/	Setup instructions
________________________________________
⚠️ Important
Frontend validation can be bypassed.
Shopify Function is required for real enforcement.

