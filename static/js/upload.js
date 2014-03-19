$(document).ready(function() { 
setbg('#e5fff3');

$('#ft-response').change(function(){

alert("response detected!");

})
$('#ft-icon').click(function(e){

if($('#email_add').val()!='')
 $('#ft-file').click();
else{

   var retVal = confirm("Are you sure you do not want to add any email reciptent?");
   if( retVal == true )
     $('#ft-file').click();
   else
    alert("Please Add Email Reciptent in above box");
  
}


e.preventDefault();

});

$('#ft-file').change(function(event) {
 clk();
});

(function() {
var bar = $('.ft-bar');
var percent = $('.ft-percent');
var response = $('#ft-response');
   
$('form').ajaxForm({
    beforeSend: function(xhr) {
        console.log("Upload_in Progress");
     	response.empty();
        var percentVal = '0%';
        bar.width(percentVal);
        percent.html(percentVal);
        $('#ft-cancel').click(function(){
		
		xhr.abort();
		alert("Aborted");
		});
		return true;
    },
    uploadProgress: function(event, position, total, percentComplete) {
        var percentVal = percentComplete + '%';
        bar.width(percentVal)
        percent.html(percentVal);
        
		},
    success: function() {
        var percentVal = '100%';
        bar.width(percentVal)
        percent.html(percentVal);
    },
	complete:function(xhr) {
		var file_stat = jQuery.parseJSON(xhr.responseText);
		response.html("FileName::"+file_stat.name+"<br>FileType::"+file_stat.mimeType+"<br>FileSize::"+file_stat.humansize+"<br>FileUrl::"+file_stat.long_url);
		console.log(file_stat.name);
		//console.log("Completed successfully!! "+xhr.responseText);
	},
    dataType:  'json',             // 'xml', 'script', or 'json' (expected server response type) 
    clearForm: true  ,            // clear all form fields after successful submit 
    resetForm: true             // reset the form after successful submit 
 
		// other available options: 
	
	}); 

})();       
	}); 
function setbg(color)
{
document.getElementById("email_add").style.background=color
document.getElementById("phone_add").style.background=color
}
 function clk(){
 
 $("#ft-upload-form").submit();
  console.log("File ready For submitting");
 }
  