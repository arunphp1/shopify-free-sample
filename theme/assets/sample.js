
document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("get-sample-btn");
  if (!btn) return;

  btn.addEventListener("click", function () {
    const variantId = this.dataset.variantId;

    fetch('/cart.js')
      .then(res => res.json())
      .then(cart => {
        let hasSample = cart.items.some(item =>
          item.product_type === 'sample-product' ||
          (item.tags && item.tags.includes('sample-product'))
        );

        if (hasSample) {
          alert("Only 1 free sample allowed per order");
          return;
        }

        return fetch('/cart/add.js', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            id: variantId,
            quantity: 1
          })
        });
      })
      .then(() => {
        window.location.href = '/cart';
      })
      .catch(err => console.error(err));
  });
});
