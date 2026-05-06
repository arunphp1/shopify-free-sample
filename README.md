<h1>Shopify Free Sample System</h1>
<p>This project implements a <strong>Free Sample Product system</strong> in Shopify with strict cart validation.<br>
<strong>For More Detail check my <a href="https://www.linkedin.com/posts/arun-sharmadev_free-sample-product-system-in-shopify-ugcPost-7457491084336848896-YNBi?utm_source=share&utm_medium=member_desktop&rcm=ACoAABox1gsBoQ0sTWNME0hbr8qOwoj87ME6-BE">Linked Post</a></strong></p>
<h2>🚀 Features</h2>
<ul data-spread="false">
  <li>Add free sample via product page button</li>
  <li>Only <strong>1 sample per order</strong></li>
  <li>Prevent checkout with only sample product</li>
  <li>Works with <strong>metafields (dynamic sample per product)</strong></li>
  <li>Backend validation using Shopify Functions (non-bypassable)</li>
</ul>
<div contenteditable="false">
  <hr />
</div>
<h2>🧱 Tech Stack</h2>
<ul data-spread="false">
  <li>Shopify Liquid (theme customization)</li>
  <li>JavaScript (AJAX Cart API)</li>
  <li>Shopify Functions (cart validation)</li>
</ul>
<div contenteditable="false">
  <hr />
</div>
<h2>📌 Requirements</h2>
<ul data-spread="false">
  <li>Shopify store (Online Store 2.0 theme like Dawn)</li>
  <li>Shopify CLI (for function deployment, not important for simple instalation)</li>
</ul>
<div contenteditable="false">
  <hr />
</div>
<h2>⚙️ Setup Summary</h2>
<ol data-spread="true" start="1">
  <li>Create product metafield:
      <ul data-spread="false">
        <li>custom.sample_product (Product reference)</li>
      </ul>
  </li>
  <li>Tag all sample products:
      <ul data-spread="false">
        <li>sample-product</li>
      </ul>
  </li>
  <li>Add theme code (see /theme folder)</li>
  <li>Deploy Shopify Function (see /shopify-function)</li>
</ol>
<div contenteditable="false">
  <hr />
</div>
<h2>🔐 Rules Enforced</h2>
<ul data-spread="false">
  <li>Only 1 sample allowed per order</li>
  <li>Sample cannot be purchased alone</li>
  <li>Cart must include at least one paid product</li>
</ul>
<div contenteditable="false">
  <hr />
</div>
<h2>� Folder Overview</h2>
<table>
  <tbody>
    <tr>
      <th>Folder</th>
      <th>Purpose</th>
    </tr>
    <tr>
      <td>theme/</td>
      <td>Liquid + JS code</td>
    </tr>
    <tr>
      <td>shopify-function/</td>
      <td>Backend validation</td>
    </tr>
    <tr>
      <td>docs/</td>
      <td>Setup instructions</td>
    </tr>
  </tbody>
</table>
<div contenteditable="false">
  <hr />
</div>
<h2>&#9888;&#65039; Important</h2>
<p>Frontend validation can be bypassed.<br />
    <strong>Shopify Function is required for real enforcement but for start you can leave.</strong></p>
    
    
