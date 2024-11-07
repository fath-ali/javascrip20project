  const menu = [    
            {
                id:1,
                title:'buttermik pancake',
                categroy :'break fast',
                price:15.99,
                img:'pictures/p-7.jpg',
                des:`i 'm baby woke mlkshk wold bitters live-edge blue bottle, hammock freegan copper mug whatever 
                cold pressed`,
            },
            {
                id:2,
                title:'diner double',
                categroy:'lunch',
                price:13.99,
                img:'pictures/p-8.jpg',
                des:`vaporware iphone mumlecore selvage raw denim slow-carb leggings gochujang helvetica man braid
                jiangbing .marfa thundercates`,
            },
            {
                id:3,
                title:'all',
                categroy:'nighmare',
                price:50,
                img:'pictures/p-9.png',
                des:`vaporware iphone mumlecore selvage raw denim slow-carb leggings gochujang helvetica man braid
                jiangbing .marfa thundercates`,
            },
            {
                id:4,
                title:'lastnight',
                categroy:'friday',
                price:1110,
                img:'p-11.jpeg',
                des:`vaporware iphone mumlecore selvage raw denim slow-carb leggings gochujang helvetica man braid
                jiangbing .marfa thundercates`,
            },
            {
                id:5,
                title:'he guys',
                categroy:'wh0000000000000000000',
                price:3000,
                img:'p-13.jpg',
                des:`vaporware iphone mumlecore selvage raw denim slow-carb leggings gochujang helvetica man braid
                jiangbing .marfa thundercates`,

            },
            {
                id:6,
                title:'what is that man',
                categroy:'howw',
                price:700,
                img:'p-14.jpeg',
                des:`vaporware iphone mumlecore selvage raw denim slow-carb leggings gochujang helvetica man braid
                jiangbing .marfa thundercates`,
            }
        
]

const sectionContainer = document.querySelector('.section-center');

window.addEventListener('DOMContentLoaded',function(){
    let displayMenu = menu.map(function(item){
        return `<article class="menu-item">
                <img src=${item.img}  class="photo">
                <div class="item-info">
                    <header>
                        <h4>${item.title}</h4>
                        <h4 class="price"> ${item.price}</h4>
                    </header>
                        <p class="item-text">${item.des}</p>
                    
                </div>
             </article> `
    })
    displayMenu = displayMenu.join("");
    sectionContainer.innerHTML = displayMenu
    
    
})