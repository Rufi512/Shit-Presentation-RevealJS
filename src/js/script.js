Reveal.initialize()

//Create Graphics
var ctx = document.getElementById("myChart").getContext("2d")
var ctx1 = document.getElementById("myChart1").getContext("2d")
var ctx2 = document.getElementById("myChart2").getContext("2d")
Chart.defaults.global.defaultFontSize = 24;

const optionsDefault = {
  scales: {
    yAxes: [{
      ticks: {
        stepsSize: 5,
        stepValue: 5,
        maxTicksLimit: 20,
      }
    }]
  }
}


var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021'],
    datasets: [{
      label: 'Suicidios Diarios',
      data: [58, 170, 320, 152, 174, 339, 534, 443, 1600, 0],
      borderColor: [
        "#ffffff"
      ],
      backgroundColor: ["#efefef"],
      pointBorderWidth: 10,
      pointBorderColor: "#ff508c",
      pointHitRadius: 16,
      pointBackgroundColor: "#f53b7a"
    }]
  },
  options: optionsDefault
})

var myChart1 = new Chart(ctx1, {
  type: 'line',
  data: {
    labels: ['2017', '2018', '2019', '2020', '2021'],
    datasets: [{
      label: 'Analfabetismo de personas al dia',
      data: [5856, 3470, 2260, 1432, 1],
      borderColor: [
        "#ffffff"
      ],
      backgroundColor: ["#efefef"],
      pointBorderWidth: 10,
      pointBorderColor: "#ff508c",
      pointHitRadius: 16,
      pointBackgroundColor: "#f53b7a"
    }]
  },
  options: optionsDefault
})

var myChart2 = new Chart(ctx2, {
  type: 'bar',
  data: {
    labels: ['2017', '2018', '2019', '2020', '2021'],
    datasets: [{
      label: 'Idiomas nuevo en cada personas al año',
      data: [1, 2, 4, 100, 500],
      backgroundColor: [
        "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"
      ]
    }]
  },
  options: optionsDefault
})



//SlideCards
var count = 0
const sliderCards = (direction) => {
  const cards = document.querySelector('.card-container')
  const card = cards.querySelectorAll('.card-reflection')


  if (direction === "right") {
    card[count].classList.remove('card-reflection-left')
    card[count].classList.add('card-reflection-right')
    card[count].classList.remove('card-active')
    count = (count + 1) % card.length
    card[count].classList.add('card-active')
    card[(count + 1) % card.length].classList.add('card-reflection-left')
    card[(count + 1) % card.length].classList.remove('card-reflection-right')
    setTimeout(() => {
      card[(count - 1 + card.length) % card.length].classList.remove('card-reflection-right')
    }, 800)

  } else {
    card[count].classList.remove('card-reflection-right')
    card[count].classList.add('card-reflection-left')
    card[count].classList.remove('card-active')
    count = (count - 1 + card.length) % card.length
    card[count].classList.add('card-active')
    card[(count - 1 + card.length) % card.length].classList.add('card-reflection-right')
    card[(count - 1 + card.length) % card.length].classList.remove('card-reflection-left')
    setTimeout(() => {
      card[(count + 1) % card.length].classList.remove('card-reflection-left')
    }, 800)
  }

}
