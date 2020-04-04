const TOYS = [
    {
    photo: './assets/toy1.jpg',
    name: 'Penguin',
    cost: '20$',
    description: 'Best toy ever',
    },

     {
    photo: './assets/toy2.jpg',
    name: 'Octopus',
    cost: '20$',
    description: 'Best toy ever',
    },
    
     {
    photo: './assets/toy3.jpg',
    name: 'White cat',
    cost: '20$',
    description: 'Best toy ever',
    },

     {
    photo: './assets/toy4.jpg',
    name: 'Red cat',
    cost: '20$',
    description: 'Best toy ever',
    },

     {
    photo: './assets/toy5.jpg',
    name: 'Dino',
    cost: '20$',
    description: 'Best toy ever',
    },

     {
    photo: './assets/toy6.jpg',
    name: 'Bear',
    cost: '20$',
    description: 'Best toy ever',
    },

     {
    photo: './assets/toy7.jpg',
    name: 'Small white cat',
    cost: '20$',
    description: 'Best toy ever',
    },

     {
    photo: './assets/toy8.jpg',
    name: 'Frog',
    cost: '20$',
    description: 'Best toy ever',
    },

     {
    photo: './assets/toy9.jpg',
    name: 'Shrimp',
    cost: '20$',
    description: 'Best toy ever',
    },

     {
    photo: './assets/toy10.jpg',
    name: 'Crab',
    cost: '20$',
    description: 'Best toy ever',
    },
    
]

let images = document.querySelectorAll('.slider__img');
let current = 0;


let slider = document.querySelector('.slider');
slider.addEventListener('click', ()=>{
    for (let i = 0; i<images.length; i++) {
        images[i].classList.add('opasity0');
    }
    images[current].classList.remove('opasity0');
    
    if (current+1 == images.length){
        current = 0;
    }
    else {
        current++;
    }
});

const catalog = document.querySelector('.catalog__content');


for (let i = 0; i<TOYS.length; i++){
    const item = document.createElement('div');
    item.classList.add('catalog__item');
    catalog.appendChild(item);

    const image = document.createElement('img');
    image.src = TOYS[i].photo;
    image.classList.add('item_image');
    item.appendChild(image);

    const itemName = document.createElement('p');
    itemName.classList.add('item_name');
    itemName.textContent = `${TOYS[i].name}`;
    item.appendChild(itemName);

    const itemDescription = document.createElement('p');
    itemDescription.classList.add('item_description');
    itemDescription.textContent = `${TOYS[i].description}`;
    item.appendChild(itemDescription);


}
