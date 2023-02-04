// Highlight link icons on hover
const links = document.querySelectorAll('.link');
links.forEach(link => {
    const linkName = link.textContent.toLowerCase();
    link.addEventListener('mouseenter', () => {
        link.childNodes[0].src = `./images/blue-icons/${linkName}_blue.png`;
    })
    link.addEventListener('mouseleave', () => {
        link.childNodes[0].src = `/images/gray-icons/${linkName}.png`;  
    })
});

// Clear search input on click outside of search bar
const search = document.querySelector('#search-bar');
search.addEventListener('focusout', () => {
    search.value = '';
});