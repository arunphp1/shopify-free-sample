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
  <li>Update global.js</li>
</ul>
<h3> Product Page (Metafield-based dynamic sample):</h3>
<p><strong><em>theme/sections/main-product.liquid</em></strong></p>
<p><strong><em>after buy button </em></strong><em>{%- render 'buy-buttons', ------------- -%}</em></p>
<p><strong>add this</strong></p>
<pre>{% assign sample_product_handle = product.metafields.custom.sample_product %}  
  {% if sample_product_handle %}   
 {% assign sample_product = all_products[sample_product_handle] %}    
  &lt;div class=&quot;sample-product-section&quot;&gt;     
 &lt;h3&gt;Not sure? Try a free sample first!&lt;/h3&gt; 
           &lt;button onclick=&quot;addSampleToCart('{{ sample_product.variants.first.id }}')&quot; class=&quot;product-form__submit button button--full-width button--secondary&quot; style=&quot;background-color: #7ef474;&quot;&gt;        Get a Free Sample      &lt;/button&gt; 
   &lt;/div&gt;        {% endif %}</pre>
<p><strong><em>IN theme/assets/Global.js At the end add this</em></strong></p>
<pre>  function addSampleToCart(variantId) {
      fetch('/cart.js')       
 .then(response =&gt; response.json())  
      .then(cart =&gt; {          
let hasSample = cart.items.some(item =&gt; item.id == variantId);   
                 if (hasSample) {            alert('You have already added a free sample to your cart.');       
   } else {          
  fetch('/cart/add.js', {    
          method: 'POST',              body: JSON.stringify({ id: variantId, quantity: 1 }), 
             headers: { 'Content-Type': 'application/json' }            })          
  .then(response =&gt; response.json())            .then(data =&gt; {             
 alert('Sample added to cart!');              window.location.href = '/cart';            })   
         .catch(error =&gt; console.error('Error:', error));          }        })   
     .catch(error =&gt; console.error('Error:', error));    }    <br />
</pre>
<p><strong><em>In theme/sections/main-cart-items.liquid</em></strong></p>
<p><br />
</p>
<pre>{% assign has_sample = false %}
  {% assign has_paid_product = false %}  
  {% for item in cart.items %}   
 {% if item.product.tags contains 'sample' %}    
  {% assign has_sample = true %}    {% else %}   
   {% assign has_paid_product = true %}   
 {% endif %}  {% endfor %}  
  {% if has_sample and has_paid_product == false %}   
 &lt;div style=&quot;color:#d00505; margin-bottom:10px;text-align: center;background-color: #f6d1d1;&quot;&gt;   
   Sample product can&rsquo;t be bought alone    &lt;/div&gt;      &lt;style&gt;      [name=&quot;checkout&quot;] {    
    pointer-events: none;        opacity: 0.5;      }    &lt;/style&gt;  {% endif %}</pre>
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
