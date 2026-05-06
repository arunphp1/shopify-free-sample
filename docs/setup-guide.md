<h1>Setup Guide</h1>
<h2>Step 1: Create Metafield</h2>
<ul data-spread="false">
  <li>Go to Shopify Admin &rarr; Settings &rarr; Custom Data &rarr; Products</li>
  <li>Create:
      <ul data-spread="false">
        <li>Name: Sample Product</li>
        <li>Namespace: custom</li>
        <li>Key: sample_product</li>
        <li>Type: Product reference</li>
      </ul>
  </li>
</ul>
<div contenteditable="false">
  <hr />
</div>
<h2>Step 2: Tag Sample Products</h2>
<p>Add tag:<br />
  sample-product</p>
<div contenteditable="false">
  <hr />
</div>
<h2>Step 3: Add Theme Code</h2>
<ul data-spread="false">
  <li>Add button in main-product.liquid</li>
  <li>Add validation in main-cart-items.liquid</li>
  <li>Update global.js or upload sample.js</li>
</ul>

<div contenteditable="false">
  <hr /> 
  <h3><em><strong><u color:#990000>Step 4 and 5 is not needed if you are beginners</u></strong></em></h3>
</div>
<h2>Step 4: Deploy Shopify Function</h2>
<p>Install CLI:<br />
  npm install -g @shopify/cli</p>
<p>Login:<br />
  shopify login</p>
<p>Generate:<br />
  shopify app generate extension --template cart_validation</p>
<p>Replace code with provided logic</p>
<p>Deploy:<br />
  shopify app deploy</p>
<div contenteditable="false">
  <hr />
</div>
<h2>Step 5: Enable Function</h2>
<p>Shopify Admin &rarr; Settings &rarr; Checkout &rarr; Cart validation</p>
<div contenteditable="false">
  <hr />
</div>
<h2>&#9989; Done</h2>
