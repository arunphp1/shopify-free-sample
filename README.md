Shopify Free Sample System <br>
This project implements a Free Sample Product system in Shopify with strict cart validation. <br>
🚀 Features <br>
•	Add free sample via product page button <br>
•	Only 1 sample per order <br>
•	Prevent checkout with only sample product <br>
•	Works with metafields (dynamic sample per product) <br>
•	Backend validation using Shopify Functions (non-bypassable) <br>
________________________________________
🧱 Tech Stack <br>
•	Shopify Liquid (theme customization) <br>
•	JavaScript (AJAX Cart API) <br>
•	Shopify Functions (cart validation) <br>
________________________________________
📌 Requirements <br>
•	Shopify store (Online Store 2.0 theme like Dawn) <br>
•	Shopify CLI (for function deployment) <br>
________________________________________
⚙️ Setup Summary <br>
1.	Create product metafield: <br>
o	custom.sample_product (Product reference) <br>
2.	Tag all sample products: <br>
o	sample-product <br>
3.	Add theme code (see /theme folder) <br>
4.	Deploy Shopify Function (see /shopify-function) <br>
________________________________________
🔐 Rules Enforced <br>
•	Only 1 sample allowed per order <br>
•	Sample cannot be purchased alone <br>
•	Cart must include at least one paid product <br>
________________________________________
📁 Folder Overview
Folder	Purpose <br>
theme/	Liquid + JS code <br>
shopify-function/	Backend validation <br>
docs/	Setup instructions <br>
________________________________________
⚠️ Important <br>
Frontend validation can be bypassed. <br>
Shopify Function is required for real enforcement.

