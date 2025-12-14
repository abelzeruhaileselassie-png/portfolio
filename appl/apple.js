const mn = document.getElementById('mn')
const hd = document.getElementsByClassName('hidden')





$(function(){
     $('mn').click(function(){
       $('hd').slideToggle('slow')
     })
})