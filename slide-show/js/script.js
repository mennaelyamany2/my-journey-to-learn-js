let myImage=document.getElementById("slideshow");

let images=["images/photo1.JPG" ,"images/photo2.jpg","images/photo3.jpg"];

let i=0;


function slideshow(){
    myImage.setAttribute('src',images[i%3]);

    setTimeout(() => {
        slideshow()
        i++;
        
    }, 2000);
}

slideshow();