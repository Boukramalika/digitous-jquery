$(document).ready( function (){
    $("button").click(function(){
        $.ajax({
            url: 'https://restcountries.eu/rest/v2/name/france',
            success: function(data, status, response) {
                $("#exercise").html(
                    "Mon pays est <strong class='important'>" + data[0].name + "</strong><br>" +
                    "Mon capital est <strong class='important'>" + data[0].capital
                    );
             }
        })  
    });
})