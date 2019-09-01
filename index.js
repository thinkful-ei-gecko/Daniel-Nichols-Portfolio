//Some sort of toggle for the hamburger menu

function toggleMenu() {
  $('.nav-switch').click(function () {
    $('.navlinks').toggleClass('hide');
  });
}


//The issue with this is that when you click a link, the menu is still displayed on mobile. 


function main() {
  toggleMenu();
}

$(main);