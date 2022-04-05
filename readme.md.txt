landing page project
*first the project had 3 sections in the html file so we added a fourth html section.
*the project contains 4 sections now with a dynamic nav bar linked with them.
*by adding a new section to the HTML file it'll automatically added in the nav bar menu and by clicking on it, it'll scroll to its position.
*we test thecode performance at the beginning and the end of our code. 
*we added some variables to declare smooth scrolling by setting the scroll behavior to smooth. 
*we also added some other variable for the navbar list and the sections.
*we created a loop on the sections numbers to create li elements with the same value and append them to the ul element
*each li contains an anchor tag by clicking on it, it moves to its section.
*then we created another function for the scrolling based on getBoundingClientRect().
*using if condition we have set the getBoundingClientRect()'s top and buttom 
*if the section is in view point the class will be added and if not it'll be removed
*by scrolling to any section of the page a class will be added which contains moving bublies and gradient background.
