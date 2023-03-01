// Highlight link icons on hover
const links = document.querySelectorAll('.link');
links.forEach(link => {
    const linkName = link.textContent.toLowerCase();
    link.addEventListener('mouseenter', () => {
        link.childNodes[0].src = `./images/blue-icons/${linkName}_blue.png`;
    })
    link.addEventListener('mouseleave', () => {
        link.childNodes[0].src = `./images/gray-icons/${linkName}.png`;  
    })
});

// Clear search input on click outside of search bar
const search = document.querySelector('#search-bar');
search.addEventListener('focusout', () => {
    search.value = '';
});

// Handles displaying / hiding navbar when menu icons are clicked
const menuIcon = document.querySelector('#menu-icon');
const menuIcon2 = document.querySelector('#menu-icon-2')
const navbar = document.querySelector('#navbar');
const container = document.querySelector('.container');
// Display navbar, have it take up the whole screen, hide the overflow
menuIcon.addEventListener('click', () => {
    container.classList.add('mobile');
    navbar.classList.add('mobile');
})
// Revert back to standard styles for mobile and hide the navbar again
menuIcon2.addEventListener('click', () => {
    container.classList.remove('mobile');
    navbar.classList.remove('mobile');
})
// If the window is resized larger then mobile breakpoint, remove mobile classes
window.addEventListener('resize', () => {
    if(window.innerWidth > 768) {
        container.classList.remove('mobile');
        navbar.classList.remove('mobile');
    } 
})

//GitHub link - highlight on hover
const githubLink = document.querySelector('#github-link');
githubLink.addEventListener('mouseenter', () => {
    githubLink.src = './images/github-white.svg';
});

githubLink.addEventListener('mouseleave', () => {
    githubLink.src = './images/github-gray.svg';
});