window.addEventListener ("load", () => {

    console.log("Script terminó de cargarse y ejecutarse")
    const project = document.getElementById("Project");
const AboutMe = document.getElementById("AboutMe");
const btnMenu = document.getElementById("btnMenu");
const navBtn = document.getElementById("navBtn");
const btnClose =document.getElementById("btnClose");
const elements = document.querySelectorAll('.element');
const infProjectContainer = document.getElementById("infProjectContainer");
const cardsContainer = document.getElementById("cardsContainer");
const modalProjectContainer = document.getElementById("modalProjectContainer");





const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.4, 
};

const observer = new IntersectionObserver(handleIntersect, options);

elements.forEach(element => {
  observer.observe(element);
});

function handleIntersect(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
    } else {
      entry.target.style.opacity = 0;
    }
  });
}




AboutMe.addEventListener("click", () =>{
    const mainCotainer = document.getElementById("mainCotainer");
    mainCotainer.scrollIntoView({ behavior: 'smooth'});
});
project.addEventListener("click", () =>{
    const projectContainer = document.getElementById("projectContainer");
    projectContainer.scrollIntoView({behavior:"smooth"});
});




function showBtnMenu(){
    if(window.innerWidth <= 600){
        navBtn.classList.add("hidden")
        btnMenu.classList.remove("hidden");
        btnMenu.classList.add("z-50");
    }else if(window.innerWidth >= 601){
        navBtn.classList.remove("hidden")
        btnMenu.classList.add("hidden")
    }
}
window.addEventListener('load', showBtnMenu);
window.addEventListener('resize', showBtnMenu);


// function showModalMenu(){
    
// }

let modalVisible = false;
btnMenu.addEventListener("click", () =>{
    const modalContainer =  document.getElementById("modalContainer");
    if(modalVisible){
        modalContainer.innerHTML = ""
    }else {
        let div = document.createElement("div");
        let ul = document.createElement("ul");
        let img = document.createElement("img");
        let items = ["About me", "Project"]

        items.forEach((itemText, index) =>{
            let li = document.createElement("li");
            let a = document.createElement("a");
            a.id = `Link${index}`
            a.textContent = itemText;
            //a.href = "#heroContainer"
            li.classList.add("font-semibold", "text-xl", "py-6");
            li.appendChild(a)
            ul.appendChild(li)
        });
        img.src = "imagenes/1689564132637.jpeg"
        //img.style.borderRadius = "100%"
        img.alt = "avatar"
        img.classList.add("m-0", "w-32", "h-32", "rounded-full")
        ul.classList.add("text-white", "flex", "items-center", "flex-col")
        div.classList.add("h-screen","text-white","absolute","bg-[#222222]","w-full", "h-screen","z-30","flex","items-center","justify-start","flex-col","pt-20", 'top-0', "right-0");
        div.appendChild(img)
        div.appendChild(ul)
        modalContainer.appendChild(div);
    }

    modalVisible = !modalVisible
});

const movieBtn = document.querySelectorAll(".card")
movieBtn.forEach((element, index) =>{
    element.id=`item${index}`
    element.addEventListener("click", function(){
        if(element.id === "item0"){
            infProjectContainer.innerHTML = ""
            btnClose.classList.remove("hidden");
            modalProjectContainer.classList.remove("hidden");
            cardsContainer.classList.add("hidden");
            modalProjectApp()
        }else if (element.id === "item1" || element.id === "item2") {
            console.log("this is fotis app")
        }
    });
});


btnClose.addEventListener("click", ()=>{
    btnClose.classList.add("hidden");
    cardsContainer.classList.remove("hidden");
    modalProjectContainer.classList.add("hidden");
});



//here is the content html of the modalMovieApp.
function modalProjectApp(){
    
    const dynamicHTML = `
<div  class="w-full h-auto  bg-[#2C3654]  text-white rounded-3xl drop-shadow-xl px-5">
        

<h1 class=" text-3xl text-center font-bold mt-4 pt-10">FontisAI</h1>
        <div class=" grid grid-cols-1 w-full h-full relative m-auto pb-10" px-10>
        
            <div class="m-auto flex flex-col md:flex-row justify-center   my-5 py-5">
                    <div class="max-w-sm mx-5">
                        <h3 class=" text-2xl font-semibold py-5 text-[#3d9bf3]">Hero</h3>
                        <p class="text-xl font-normal">In the hero section, I've added an infinite carousel to showcase our products using Tailwind CSS keyframes. I've optimized the scroll behavior for a smoother experience when clicking the 'Get Print from Gallery' button, making the user experience more engaging and user-friendly
                        </p>
                    </div>
                    <div class=" my-3 w-auto h-auto max-w-[600px]">
                        <img src="imagenes/hero.png" class="showImage w-full h-full rounded-3xl drop-shadow-lg">
                    </div>
            </div>


            <div class="m-auto flex flex-col md:flex-row my-5 ">
                <div class=" my-3 w-auto h-auto max-w-[600px]">
                    <img src="imagenes/mobilheros.jpg" class=" showImage w-full h-full rounded-3xl drop-shadow-lg">
                </div>
                <div class="max-w-sm px-2 mx-5">
                    <h3 class=" text-2xl font-semibold py-5 text-[#3d9bf3]">Responsive Mobile</h3>
                    <p class="text-xl font-normal">In this feature, I enhanced the page's responsiveness by introducing a menu button and a dropdown menu, thereby improving the user experience. These functions and events were implemented using JavaScript, resulting in a more user-friendly design to engage a wider audience.
                    </p>
                </div>
            </div>

            <div class="m-auto flex flex-col md:flex-row my-5 ">
                <div class="max-w-sm px-2 mx-5">
                    <h3 class=" text-2xl font-semibold py-5 text-[#3d9bf3]">Blog Section</h3>
                    <p class="text-xl font-normal">In this feature, I developed an entire section of informative static blogs for FontisAI. This section was initially built using Next.js and later migrated to the platform. I further customized and enriched it with various functionalities and events, enhancing its overall performance and user experience.
                    </p>
                </div>
                <div class=" my-3 w-auto h-auto max-w-[600px]">
                    <img  src="imagenes/Screenshot 2023-09-29 162447.png" class="showImage w-full h-full rounded-3xl drop-shadow-lg ">
                </div>
            </div>

            <div class="m-auto flex flex-col md:flex-row my-5">
                <div class=" my-3 w-auto h-auto max-w-[600px]">
                    <img  src="imagenes/skeleton.jpg" class="showImage w-full h-full rounded-3xl drop-shadow-lg">
                </div>
                <div class="max-w-sm px-2 mx-5">
                    <h3 class=" text-2xl font-semibold py-5 text-[#3d9bf3]">Skeleton Loader</h3>
                    <p class="text-xl font-normal">In this feature, I enhanced the loading experience by refining the skeleton loader. Previously, there was a slight delay before content appeared, leaving the interface empty while images loaded. This improvement ensures a smoother and more visually appealing transition during loading.
                    </p>
            </div>

                
        </div>
             <div class="bottom-1 flex flex-col items-center justify-center"> 
                <p class="text-center py-2 ">Webside Link</P>
                    <a href="https://fontis.ai/" target="_blank">
                        <img src="imagenes/fontisai_logo.png" class="w-[150px] h-[25px]transform transition-transform hover:scale-110 ease-in-out duration-300" blank=""> 
                    </a> 
                </div>
  </div>
  `;
    const infProject = document.createElement("div");
    infProject.innerHTML = dynamicHTML
    
    infProjectContainer.appendChild(infProject);
    return infProjectContainer;
}

})
document.addEventListener("DOMContentLoaded", () =>{
    const typingText =document.getElementById("typingText");

let text = "Enthusiastic Junior Frontend Developer"
let indexText = 0
    function typeText () {
        if(indexText < text.length) {
            typingText.textContent += text.charAt(indexText);
            indexText++ 
            setTimeout(typeText, 70);
        }
    }
    typeText()
})


