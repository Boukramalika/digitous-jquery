$(document).ready( function (){
    $("button").click(function(){
        let pays = $("input").val();
        $.ajax({
          
            url: "https://restcountries.eu/rest/v2/name/"+pays.toLowerCase(),
            success: function(data, status, response) {
                $("#country").html(
                    "<span id='country'>" + data[0].name + "</span>"
                )
                $("#capital").html(
                   " <span id='capital'>"+ data[0].capital + "</span>"
                 )   
             }
            })
    })  
 })