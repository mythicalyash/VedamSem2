// document.querySelector("#grandparent").addEventListener('click', ()=> {
//     console.log('Grandparent Clicked');
// });

// document.querySelector("#parent").addEventListener('click', () => {
//     console.log('Parent Clicked');
// });

// document.querySelector("#child").addEventListener('click', () => {
//     console.log('Child Clicked');
// });



// event propagation----- capturing and bubbling

document.querySelector("#grandparent").addEventListener('click', (e)=> {
    console.log('Grandparent Clicked');
});

document.querySelector("#parent").addEventListener('click', (e) => {
    console.log('Parent Clicked');
    e.stopPropagation();
});

document.querySelector("#child").addEventListener('click', (e) => {
    console.log('Child Clicked');
});



