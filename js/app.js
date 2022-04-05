
//code performance before writing codes
let OldPerformance = (performance.now());

//const variables for smooth scrolling
const scroll = document.documentElement.style.scrollBehavior = "smooth";

//some global variables
let UL = document.getElementById("navbar__list");
let section = document.querySelectorAll('section');


//loop to dynamicly add li names to the nav bar
for(let i=0; i<section.length; i++){
        //create li dynamicly equals to the sections number
       let li = document.createElement('li');
       //name the li exactly like the section attribuite name
       let sectionName = section[i].getAttribute('data-nav');
       //add li to the existing html ul
       UL.appendChild(li);
       //get the id attribute of the section to help the anchor tag to jump to it onclicking <a>
       let sectionId = section[i].getAttribute('id');
        //set the id and the name to the li
       li.innerHTML = `<a class="menu__link" href='#${sectionId}'> ${sectionName} </a>`;
}; 


//loop to add and remove the class by scrolling the page
window.onscroll = function(){
    //loop on sections
      for(let i=0; i<section.length; i++){
        //check if the target section is in the view point 
        if(section[i].getBoundingClientRect().top >= -300 && section[i].getBoundingClientRect().top <= 300){
            //add the class to it
            section[i].classList.add('your-active-class');
        }else{
            //remove the class from it
            section[i].classList.remove('your-active-class');
        }
    }
};

//new performance
let newPerformance = (performance.now());
//check code performance
console.log(newPerformance - OldPerformance)