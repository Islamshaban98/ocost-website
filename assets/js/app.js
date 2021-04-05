document.querySelector('.collapse').addEventListener('show.bs.collapse', function () {
    document.querySelector('nav').style.background = 'rgba(245,244,241,.25)'
})
document.querySelector('.collapse').addEventListener('hide.bs.collapse', function () {
    document.querySelector('nav').style.background = '#0bb783'
})