// header responsive
const navbar = document.getElementById('navbar');
const bar = document.getElementById('bar');
const cancel = document.getElementById('cancel');

if(bar){
    bar.addEventListener('click',() =>{
        navbar.style.display='block';
        bar.style.display='none';
    })
}
if(cancel){
    cancel.addEventListener('click',() =>{
        console.log("jdhcdj");
        navbar.style.display='none';
        bar.style.display='block';
    })
}

// ssproducts - show small to big pic
 const mainImageEl = document.querySelector("#main-image");
        const selectImageEls = document.querySelectorAll(".select-image");

        function replaceImage(el) {
            mainImageEl.setAttribute("src", el.target.src)
            console.log(el.target.src)
        }

        selectImageEls.forEach(el => el.addEventListener('click', replaceImage));
// shop page to product page
const product = document.querySelectorAll(".select-product");
product.forEach(el => el.addEventListener('click',() =>{
    window.location.href = "sproduct.html";
}));

// let imgSrc1= null;
// const shopImage = document.querySelectorAll(".item img");
// shopImage.forEach(el => el.addEventListener('click',() =>{
//     const imgSrc =el.getAttribute("src");
//     imgSrc1= toString(imgSrc);
//     console.log(imgSrc);
//     window.location.href = "sproduct.html";
//     replaceImage;

// }));
// console.log("hjsdgashujdghjasd")
// console.log(imgSrc1)
//mainImageEl.src = imgSrc1;

// mainImageEl.setAttribute("src",imgSrc);