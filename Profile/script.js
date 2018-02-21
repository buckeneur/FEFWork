$(document).ready(function(){
    $('.repos li:nth-child(even)').addClass('alternate');

    $('#hide').click(function(){
        $('li').toggleClass("alternate");
        $('li').hide();
        });
    });


document.getElementById("button").addEventListener('click',loadRepo);

function loadRepo() {
    var gitHubRequest = new XMLHttpRequest();
    gitHubRequest.open("GET","https://api.github.com/users/buckeneur/repos",true);
    gitHubRequest.onload = function() {
        if( this.status == 200){
            var repos = JSON.parse(this.responseText);
            
            var output = '';
            
            for (var i in repos){
                output += 
                '<div class="repos"><ul>' +
                '<li><a href="'+repos[i].html_url+'">'+repos[i].name+ '</li>' +
                '</ul>' +
                '</div>';
            };
            
            document.getElementById('repos').innerHTML = output;
            // Using the DOM get the element ID from your <ul> in your HTML
        }
    };
    gitHubRequest.send();
  }

//   Sticky headers
  window.onscroll = function() {myFunction()};
  
  for (i=1;i;i++) {
      var header = document.getElementById("myHeader"+i);
      
      var sticky = header.offsetTop;
      
      function myFunction() {
          if (window.pageYOffset >= sticky) {
              header.classList.add("sticky");
            } else {
                header.classList.remove("sticky");
            }
        }
        
    }
        

function loadRepoCallback(gitHubRequest) {
    // Callback function needs to parse the JSON
    // You will need a forEach to loop through the parsed object
    // Using the DOM create new list elements
    // Plug in the .html_url and .name from the parsed object.  To make this a link you'll need 
    // Append the new list items to the element you retrieved from HTML
  }