document.addEventListener('DOMContentLoaded', () => {
  const itemContainer = document.querySelector('#items-container');
  const messageContainer = document.querySelector('.message-container');

  const items = [
    { imgSrc: '/assets/images/shop/assets/1.png', alt: 'Item 1', level: 'Level 1', price: 250, name: 'Item 1' },
    { imgSrc: '/assets/images/shop/assets/2.png', alt: 'Item 2', level: 'Level 2', price: 350, name: 'Item 2' },
      { imgSrc: '/assets/images/shop/assets/3.png', alt: 'Item 3', level: 'Level 3', price: 450, name: 'Item 3' },
      { imgSrc: '/assets/images/shop/assets/4.png', alt: 'Item 4', level: 'Level 4', price: 550, name: 'Item 4' },
      { imgSrc: '/assets/images/shop/assets/5.png', alt: 'Item 5', level: 'Level 5', price: 650, name: 'Item 5' },
      { imgSrc: '/assets/images/shop/assets/6.png', alt: 'Item 6', level: 'Level 6', price: 750, name: 'Item 6' },
      { imgSrc: '/assets/images/shop/assets/7.png', alt: 'Item 7', level: 'Level 7', price: 850, name: 'Item 7' },
      { imgSrc: '/assets/images/shop/assets/8.png', alt: 'Item 8', level: 'Level 8', price: 950, name: 'Item 8' },
        
  ];

  items.forEach((item) => {
    const shopItem = document.createElement('div');
    shopItem.classList.add('shop-item');
    shopItem.innerHTML = `
      <div class="item-details">
        <div class="item-icon-container">
          <img src="${item.imgSrc}" alt="${item.alt}" />
        </div>
        <span class="item-level">${item.level}</span>
        <button class="buy-btn" data-itemName="${item.name}">${item.price}</button>
      </div>
    `;
    itemContainer.appendChild(shopItem);
  });

    const buyBtns = document.querySelectorAll('.buy-btn');

    
    buyBtns.forEach((buyBtn) => {
        buyBtn.addEventListener('click', () => {
            
            const itemName = buyBtn.dataset.itemname;
      
            
            buyBtn.classList.toggle('buy-btn-active');
            messageContainer.classList.add('show');
            messageContainer.textContent = `${itemName || 'Item'} added to cart`;
            setTimeout(() => {
                messageContainer.classList.remove('show');
            }, 2000);
        });
    });
});
