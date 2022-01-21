var globalData;

function bringData(){
    $.get("brief10.json", function(data){
        console.log(data);
        globalData = data;
        filltable()
    });
}

bringData();


function filltable(){
    globalData.forEach(element => {
        var provider_info = element.seller["rs"] +'<br>' + element.seller["address"];
        $('#tb').append($('<tr>')
        .append($('<td>').append(element.id))
        .append($('<td>').append(element.category))
        .append($('<td>').append(element.productName))

        .append($('<td>').append(element.prix))
        .append($('<td>').append(element.availability))
        .append($('<td>').append(provider_info))
        
    )});
}


$(document).ready(function(){
    $("#search").on("keyup",function(){
        var value =$(this).val().toLowerCase();
        $("#tb tr").filter(function(){
            $(this).toggle($(this).text().toLowerCase().indexOf(value)>-1)

        });
    });
    });




    function sortTable(column, type) {

        //Get and set order
        //Use -data to store wheater it will be sorted ascending or descending
        var order = $('.table thead tr>th:eq(' + column + ')').data('order');
        order = order === 'ASC' ? 'DESC' : 'ASC';
        $('.table thead tr>th:eq(' + column + ')').data('order', order);
    
    
        $('#tb tr').sort(function(a, b) {
    
          a = $(a).find('td:eq(' + column + ')').text();
          b = $(b).find('td:eq(' + column + ')').text();
          switch (type) {
            case 'text':
              return order === 'ASC' ? a.localeCompare(b) : b.localeCompare(a);
              break;
            case 'number':
              return order === 'ASC' ? a - b : b - a;
              break;
    
          }
    
        }).appendTo('.table tbody');
      }
      $('#id').click(function() {
        sortTable(0, 'text');
      });
      $('#DES').click(function() {
        sortTable(1, 'text');
      });
      $('#PRX').click(function() {
        sortTable(2, 'text');
      });
      $('#CAT').click(function() {
        sortTable(3, 'text');
      });
      $('#DISP').click(function() {
        sortTable(4, 'text');
      });
      $('#FOUR').click(function() {
        sortTable(5, 'text');
      });

