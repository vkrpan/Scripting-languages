$("#odaberi").change(e =>{
  var selected = $("#odaberi :selected").val();
  console.log(selected);
  $("#ulaz").attr("type", selected);
  $("#ulaz").attr('placeholder',selected);
});


function ToJson(){
  var obj = {data : $('input').val()};
  var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(obj));
  var downloadAnchorNode = document.createElement('a');
  downloadAnchorNode.setAttribute("href",     dataStr);
  downloadAnchorNode.setAttribute("download", "data.json");
  document.body.appendChild(downloadAnchorNode); // required for firefox
  downloadAnchorNode.click();
  downloadAnchorNode.remove();
}