$(document).ready(function(){
  alert("FUCK SHIT FUCK FUCK!");
  $("#poop").submit(function(event){
    event.preventDefault();
    var poop = new Poop(1);
    poop.setSmelliness();
    $(".something").empty();
    $(".something").append(poop.smelliness);
    alert(poop.smelliness);
  })
})
