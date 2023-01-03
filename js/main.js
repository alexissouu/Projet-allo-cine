fetch('./../data/moovies.json')
  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
    console.log('Response json : ', data)


    let divMoovies = document.querySelector('.moovies')

    data.forEach(moovies => {
      divMoovies.innerHTML = divMoovies.innerHTML += `
      <div class="card mb-5 bg-light bg-opacity-75" style="max-width: 740px;">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="${moovies.Poster}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h2 class="card-title">${moovies.Title} <i class="fa-solid fa-ticket text-dark"></i></h2>
            <p class="card-text fs-4 m-3">${moovies.Plot}</p>
            <div class="mini-image d-flex">
            <img src="${moovies.Images[0]}" class="img-fluid rounded m-2" alt="">
            <img src="${moovies.Images[1]}" class="img-fluid rounded m-2" alt="">
            <img src="${moovies.Images[2]}" class="img-fluid rounded m-2" alt="">
            </div>
            <div class="d-flex align-items-center">
            <p class="card-text fs-4 m-3">${moovies.imdbRating}</p><i class="fa-solid fa-star text-warning"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
`
    })
  })

let mybutton = document.getElementById("myBtn");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}