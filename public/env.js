// connect to the socket


let socket = io();

socket.on('number', (msg) => {
    console.log('Random number: ' + msg);
})

// main
$(document).ready(function(){
  console.log('Ready')

  $.get('/init', (result) => {
    $('#hero-area').append(createHero(result[0].heroContent))
    $('#intro-area').append(createIntro(result[0].introContent))
    for (let item of result[0].frameSlideContent) {
      $('#frameslide-area').append(createFrameCard(item))
    }
    $('#tabs-area').append(createTabs(result[0].tabsContent, result[0].buttons))
    createTabContent(result[0].tabsContent)
    createSlideContent(result[0].slideContent)
    createAmenitiesContent(result[0].amenitiesContent)

    //nav
    $('#nav-bar').load('components/navbar.html', () => {
      createBookingModal(result[1].bookModalContent);
      //$('.sidenav').sidenav()
      $('.tabs').tabs()
      $('.slider').slider();
      $('.scrollspy').scrollSpy();
      $('.modal').modal();
      $('select').formSelect();
    })
  }) 
})
