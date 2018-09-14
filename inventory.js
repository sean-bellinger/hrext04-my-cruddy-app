$(document).ready(function() {
	  var itemStorage = JSON.parse(localStorage.getItem('itemStorage')) || {};
  for(key in itemStorage){
    $("#inventory-content").append('<div class="display-item" data-storage-key="'+ key +'"> ' + key + ' ' +  itemStorage[key] + '</div>');
  };
  $("#add-item").on("click", function(){
    var itemVal = $("#item-input").val();
    $("#item-input").val("");
    if(!itemStorage.hasOwnProperty(itemVal)){
      itemStorage[itemVal] = 1
     
    let itemHtml = '<div class="display-item" data-storage-key="'+ itemVal +'"> ' + itemVal + ' ' +  itemStorage[itemVal] + '</div>';
    $("#inventory-content").append(itemHtml);
   } else {
      itemStorage[itemVal]++
      $("[data-storage-key='" + itemVal + "']").text(itemVal + ' ' + itemStorage[itemVal])
   }
   localStorage.setItem('itemStorage', JSON.stringify(itemStorage))
   console.log(JSON.stringify(itemStorage))
  });
});