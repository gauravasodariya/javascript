let bagItems;
onLoad();
function onLoad()
{
    let bagItemsStr=localStorage.getItem('bagItems');    
    bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : []; 
    displayItemsOnHomePage();
    displayBagIcon();
}
function addToBag(itemId) 
{
    if (!bagItems.includes(itemId)) 
        {
        bagItems.push(itemId);
        localStorage.setItem('bagItems', JSON.stringify(bagItems));
        displayBagIcon();
    } 
    else 
    {
        alert('Item is already in the bag.');
    }
}
function displayBagIcon()
{
    let bagItemCountElement=document.querySelector('.bag-item-count');
    if(!bagItemCountElement)
    {
        return; 
    }
    if(bagItems.length>0)
    {
        bagItemCountElement.style.visibility='visible';
        bagItemCountElement.innerText=bagItems.length;
    }
    else
    {
        bagItemCountElement.style.visibility='hidden';
    }
}
function displayItemsOnHomePage()
{
    let itemsContainerElement=document.querySelector('.items-container');

let innerHTML='';
items.forEach(item =>
{
    innerHTML+=`<div class="item-container">
                <img class="item-image" src="
                ${item.image}">
                <div class="rating">
                    ${item.rating.stars} ⭐ | ${item.rating.count}
                </div>
                <div class="company-name">
                    ${item.company}
                </div>
                <div class="item-name">${item.item_name}</div>
                <div class="price">
                    <span class="current-price">Rs. ${item.current_price}</span>
                    <span class="original-price">Rs. ${item.original_price}</span>
                    <span class="discount">(${item.discount_percentage}% OFF)</span>
                </div>
                <button class="btn-add-bag" onclick='addToBag(${item.id})'>Add to Bag</button>
            </div>`
})
itemsContainerElement.innerHTML=innerHTML;
}



   