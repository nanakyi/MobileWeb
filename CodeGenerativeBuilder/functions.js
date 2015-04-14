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

$(document).ready(function(){
  // Math.floor((Math.random() * 100) + 1);
$("#login").click(function()
  {

    var username = $('#username').val();
    var password=$('#password').val();
    return syncAjax("http://50.63.128.135/~csashesi/class2015/susana-ndede/formBuilder/formBuilder/action.php?cmd=4&username="+username+"&password="+password);
  });

$("#saveForm").click(function()
  {

    var name = $('#title').val();
    var description=$('#description').val();
    return syncAjax("http://50.63.128.135/~csashesi/class2015/susana-ndede/formBuilder/formBuilder/action.php?cmd=3&name="+name+"&description="+description);
  });

$("#saveQuestion").click(function()
  {

  	var questionId = $('#identity').val();
  	var question=$('#question').val();
  	var widget=$('#widget').val();
    var dataType=$('#dataType').val();

  	return syncAjax("http://50.63.128.135/~csashesi/class2015/susana-ndede/formBuilder/formBuilder/action.php?cmd=1&questionId="+questionId+"&question="+question+"&widget="+widget+"&dataType="+dataType);
  });

// $("#editQuestion").click(function()
//   {

//     var questionId = $('#identity').val();
//     var question=$('#question').val();
//     var widget=$('#widget').val();
//     var dataType=$('#dataType').val();

//     return syncAjax("action.php?cmd=1&questionId="+questionId+"&question="+question+"&widget="+widget+"&dataType="+dataType);
//   });


$("#getPreviousQuestion").click(function()
  {

  var r=syncAjax("http://50.63.128.135/~csashesi/class2015/susana-ndede/formBuilder/formBuilder/action.php?cmd=7");
  $('#editIdentity').val(r.questionNumber);
  $('#editQuestion').val(r.question);
     $('#editWidget').val=r.widget;
     $('#editDataType').val(r.dataType);
  
    return ;

  });


$("#editQuestions").click(function()
  {

  var questionId = $('#editIdentity').val();
    var question=$('#editQuestion').val();
    var widget=$('#editWidget').val();
    var dataType=$('#editDataType').val();
  
    return syncAjax("http://50.63.128.135/~csashesi/class2015/susana-ndede/formBuilder/formBuilder/action.php?cmd=8&questionId="+questionId+"&question="+question+"&widget="+widget+"&dataType="+dataType);

  });

$("#getAllQuestions").click(function()
  {
    var j=1;
    vari=0;
    var r= syncAjax("http://50.63.128.135/~csashesi/class2015/susana-ndede/formBuilder/formBuilder/action.php?cmd=10");
     for (i=0;i<r.Questions.length;i++){
      $("#myList").append('<li><a id="item'+i+'" href="#pageSeven">Question'+r.Questions[i].questionNumber+" "+r.Questions[i].name+'</a></li>');
     

}


  });


$("#getThisQuestion").click(function()
  {
 
  var questionId = $('#getQuestion').val();

  var r=syncAjax("http://50.63.128.135/~csashesi/class2015/susana-ndede/formBuilder/formBuilder/action.php?cmd=11&questionId="+questionId);
  $('#editIdentity').val(r.questionNumber);
  $('#editQuestion').val(r.question);
     $('#editWidget').val=r.widget;
     $('#editDataType').val(r.dataType);
  
    return ;

  });









$("#saveOption").click(function()
  {
    var totalTables = $('#totalOptions').val();
    var i=1;
    while(i<=totalTables){
      var option = $('#'+('form'+i)).val();
      
      
      syncAjax("http://50.63.128.135/~csashesi/class2015/susana-ndede/formBuilder/formBuilder/action.php?cmd=5&option="+option);


      
      i++;
    }
    return ;

  });

$("#editOption").click(function()
  {
    var totalTables = $('#totalOptions').val();
    var i=1;
    while(i<=totalTables){
      var option = $('#'+('form'+i)).val();
      
      
      syncAjax("http://50.63.128.135/~csashesi/class2015/susana-ndede/formBuilder/formBuilder/action.php?cmd=9&option="+option);


      
      i++;
    }
    return ;

  });


$("#generateCode").click(function()
  {
    
      
      
      var r=syncAjax("http://50.63.128.135/~csashesi/class2015/susana-ndede/formBuilder/formBuilder/action.php?cmd=6");
       if(r.message="code generated"){
  alert("Generated");
       }
       else{
 alert("try again");
       }


      
     
    });






$('#totalOptions').keypress(function(event){
 
  var keycode = (event.keyCode ? event.keyCode : event.which);
  if(keycode == '13'){
    
    var totalTables = $('#totalOptions').val();
    document.getElementById("options").innerHTML = "";
   
    var i;
    for(i=1;i<=totalTables;i++)
    {

      jQuery('<br><strong>Option'+i+'</strong>'+
        '<input type="text" id="form'+i+'"/><br>').appendTo('#options');
      

    }
  }
  
 
});


$('#edittotalOptions').keypress(function(event){
 
  var keycode = (event.keyCode ? event.keyCode : event.which);
  if(keycode == '13'){
    
    var totalTables = $('#edittotalOptions').val();
    document.getElementById("editoptions").innerHTML = "";
   
    var i;
    for(i=1;i<=totalTables;i++)
    {

      jQuery('<br><strong>Option'+i+'</strong>'+
        '<input type="text" id="form'+i+'"/><br>').appendTo('#editoptions');
      

    }
  }
  
 
});


});

