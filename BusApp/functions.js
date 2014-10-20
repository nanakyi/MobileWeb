$(document).ready(function(){

//remove seat function 
  $("#add").click(function()
  {
    var sl = parseInt($('#seats').text(), 10);
    // var loc = document.getElementById('location').innerHTML;
    if( sl >= 0 && sl<40)
    {
      var ticket_cost=5;
      var diff = sl+1;
      $('#seats').text(diff);
      var seats_left=40-diff;
       var revenue=diff*ticket_cost;
      $('#sales').text(revenue);
      var u ="busAction.php?cmd=8&avail_seats="+diff+"&revenue="+revenue+"&seats_left="+seats_left;
      // var num_passengers = parseInt($('#embarked').text(), 10);
      // num_passengers ++;
      // $('#embarked').text(num_passengers);
      // var revenue = parseInt($('#profit').text(),10);
      // revenue = num_passengers * 30;
      // $('#profit').text(revenue);
       return syncAjax(u);
  }
  });
   $("#subtract").click(function()
  {
    
    var sl = parseInt($('#seats').text(), 10);
    // var loc = document.getElementById('location').innerHTML;
    if(sl <= sl && sl > 0)
    {
      var ticket_cost=5;
      var diff = sl-1;
       $('#seats').text(diff);
        var seats_left=40-diff;
       var revenue=diff*ticket_cost;
      $('#sales').text(revenue);

      var u ="busAction.php?cmd=8&avail_seats="+diff+"&revenue="+revenue+"&seats_left="+seats_left;
      // // var num_passengers = parseInt($('#embarked').text(), 10);
      // // num_passengers ++;
      // // $('#embarked').text(num_passengers);
      // // var revenue = parseInt($('#profit').text(),10);
      // // revenue = num_passengers * 30;
      // // $('#profit').text(revenue);
      return syncAjax(u);
  }




  });


  $("#empty").click(function(){
    $('#seats').text(0);
    var ticket_cost=5;
    $('#sales').text(0);
    r=syncAjax("busAction.php?cmd=8&avail_seats=0&revenue=0&seats_left=40");
  
  // $('#embarked').text(0);
  });
  $("#full").click(function(){
     

    r=syncAjax("busAction.php?cmd=8&avail_seats=0&revenue=0&seats_left=40");
  $('#seats').text(40);
  $('#sales').text(200);
  // $('#embarked').text(0);
  });
   $("#capacity").click(function(){
     var u ="busAction.php?cmd=9";
     r=syncAjax("busAction.php?cmd=9");
     // alert (r.message);
    $("#actual").text(r.message);
   
   
     });



$('#date').click(function()
  {
    
    var today = new Date();

      $('#date').text(today);

r=syncAjax("busAction.php?cmd=11");

  });
$('#busNumber').click(function()
  {
    
    var busNumber = "AS 1237-09";

      $('#busNumber').text(busNumber);

r=syncAjax("busAction.php?cmd=12");

  });

$("#esubmit").click(function(){
    var name = $('#uname').val();
    var location = $('#option').val();
   
    
    r=syncAjax("busAction.php?cmd=3&name="+name+"&location="+lacation);
  
  // $('#embarked').text(0);
  });

});

function syncAjax(u){
        console.log(u);
        var obj=$.ajax(
          {url:u,
           async:false
           }
        );
        console.log(obj.responseText);
        return $.parseJSON(obj.responseText);
    
      }




// $(function(){ 
// var operation = "A"; //"A"=Adding; "E"=Editing var selected_index = -1; //Index of the selected list item var tbClients = localStorage.getItem("tbClients");//Retrieve the stored data tbClients = JSON.parse(tbClients); //Converts string to object if(tbClients == null) //If there is no data, initialize an empty array tbClients = [];
//  }); 



// function Add(){ 
//     var client = JSON.stringify(
//         { Lat : $("#Lat").val(), 
//         Long: $("#Long").val();
//     tbClients.push(client); localStorage.setItem("tbClients", JSON.stringify(tbClients)); 
//     alert("The data was saved."); 
//     return true; } 

// function Edit(){ tbClients[selected_index] = JSON.stringify({ ID : $("#txtID").val(), Name : $("#txtName").val(), Phone : $("#txtPhone").val(), Email : $("#txtEmail").val() });//Alter the selected item on the table localStorage.setItem("tbClients", JSON.stringify(tbClients)); alert("The data was edited.") operation = "A"; //Return to default value return true; } 

$(function() {

        var Geo={};

        if (navigator.geolocation) {
           navigator.geolocation.getCurrentPosition(success, error);
        }

        //Get the latitude and the longitude;
        function success(position) {
            Geo.lat = position.coords.latitude;
            Geo.lng = position.coords.longitude;
            populateHeader(Geo.lat, Geo.lng);
        }

        function error(){
            console.log("Geocoder failed");
        }

        function populateHeader(lat, lng){
            $('#Lat').html(lat);
            $('#Long').html(lng);
        }

    });
