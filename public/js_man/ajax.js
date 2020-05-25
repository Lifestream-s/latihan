$(document).ready(function(){
		$('#masuk_data').click(function(e){
			
			e.preventDefault();
			
			var form = document.getElementById("query_masuk");
			
			var formData = new FormData(form);
			formData.append("_token", $('meta[name="csrf-token"]').attr('content'));
			formData.append("masuk_data", $('#masuk_data').val());
			
			$.ajax({
				type: "POST",
				url : "hasil",
				data : formData,
				contentType : false,
				processData:false,
				success: function(response){
					//alert(response.success);
					
					$('#hasil').html(response);
					//for(var k in response.data) {
					//	$('#hasil').html(response.data[k]['nama_tempat']+' '+response.data[k]['alamat']);
					//}
					
				//	var string = JSON.stringify(response.data);
			//		for (var i = 0; i < string.length; i++) {
						
						//$('#hasil').html(response.sukses+''+string[i]['id_tempat']);
		//				console.log(string[i]['id_tempat']);
		//			}
					
					
					//alert(response);
				}
			});
		});
	});
