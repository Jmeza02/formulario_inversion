$(document).ready(function() {
			  $('.activation-plan').click(function() {
			    //console.log("Choice: ", $(this).val());
			    if ($(this).val() == "150"){
			    	document.getElementById('ws150').removeAttribute("disabled");
			    	document.getElementById('ws150').value = "";
			    	document.getElementById('rs150').setAttribute("disabled", "disabled");
			    	document.getElementById('rs150').value = "";
			    	document.getElementById('ws200').setAttribute("disabled", "disabled");
			    	document.getElementById('ws200').value = "";
			    	document.getElementById('rs200').setAttribute("disabled", "disabled");
			    	document.getElementById('rs200').value = "";
			    	document.getElementById('ws250').setAttribute("disabled", "disabled");
			    	document.getElementById('ws250').value = "";
			    	document.getElementById('rs250').setAttribute("disabled", "disabled");
			    	document.getElementById('rs250').value = "";
			    	document.getElementById('ws300').setAttribute("disabled", "disabled");
			    	document.getElementById('ws300').value = "";
			    	document.getElementById('rs300').setAttribute("disabled", "disabled");
			    	document.getElementById('rs300').value = "";
			    	document.getElementById('ws500').setAttribute("disabled", "disabled");
			    	document.getElementById('ws500').value = "";
			    	document.getElementById('rs500').setAttribute("disabled", "disabled");
			    	document.getElementById('rs500').value = "";
			    } else if ($(this).val() == "200"){
			    	document.getElementById('ws150').setAttribute("disabled", "disabled");
			    	document.getElementById('ws150').value = "";
			    	document.getElementById('rs150').setAttribute("disabled", "disabled");
			    	document.getElementById('rs150').value = "";
			    	document.getElementById('ws200').removeAttribute("disabled");
			    	document.getElementById('rs200').setAttribute("disabled", "disabled");
			    	document.getElementById('ws250').setAttribute("disabled", "disabled");
			    	document.getElementById('ws250').value = "";
			    	document.getElementById('rs250').setAttribute("disabled", "disabled");
			    	document.getElementById('rs250').value = "";
			    	document.getElementById('ws300').setAttribute("disabled", "disabled");
			    	document.getElementById('ws300').value = "";
			    	document.getElementById('rs300').setAttribute("disabled", "disabled");
			    	document.getElementById('rs300').value = "";
			    	document.getElementById('ws500').setAttribute("disabled", "disabled");
			    	document.getElementById('ws500').value = "";
			    	document.getElementById('rs500').setAttribute("disabled", "disabled");
			    	document.getElementById('rs500').value = "";
			    } else if ($(this).val() == "250"){
			    	document.getElementById('ws150').setAttribute("disabled", "disabled");
			    	document.getElementById('ws150').value = "";
			    	document.getElementById('rs150').setAttribute("disabled", "disabled");
			    	document.getElementById('rs150').value = "";
			    	document.getElementById('ws200').setAttribute("disabled", "disabled");
			    	document.getElementById('ws200').value = "";
			    	document.getElementById('rs200').setAttribute("disabled", "disabled");
			    	document.getElementById('rs200').value = "";
			    	document.getElementById('ws250').removeAttribute("disabled");
			    	document.getElementById('rs250').setAttribute("disabled", "disabled");
			    	document.getElementById('ws300').setAttribute("disabled", "disabled");
			    	document.getElementById('ws300').value = "";
			    	document.getElementById('rs300').setAttribute("disabled", "disabled");
			    	document.getElementById('rs300').value = "";
			    	document.getElementById('ws500').setAttribute("disabled", "disabled");
			    	document.getElementById('ws500').value = "";
			    	document.getElementById('rs500').setAttribute("disabled", "disabled");
			    	document.getElementById('rs500').value = "";
			    } else if ($(this).val() == "300"){
			    	document.getElementById('ws150').setAttribute("disabled", "disabled");
			    	document.getElementById('ws150').value = "";
			    	document.getElementById('rs150').setAttribute("disabled", "disabled");
			    	document.getElementById('rs150').value = "";
			    	document.getElementById('ws200').setAttribute("disabled", "disabled");
			    	document.getElementById('ws200').value = "";
			    	document.getElementById('rs200').setAttribute("disabled", "disabled");
			    	document.getElementById('rs200').value = "";
			    	document.getElementById('ws250').setAttribute("disabled", "disabled");
			    	document.getElementById('ws250').value = "";
			    	document.getElementById('rs250').setAttribute("disabled", "disabled");
			    	document.getElementById('rs250').value = "";
			    	document.getElementById('ws300').removeAttribute("disabled");
			    	document.getElementById('rs300').setAttribute("disabled", "disabled");
			    	document.getElementById('ws500').setAttribute("disabled", "disabled");
			    	document.getElementById('ws500').value = "";
			    	document.getElementById('rs500').setAttribute("disabled", "disabled");
			    	document.getElementById('rs500').value = "";
			    } else if ($(this).val() == "500"){
			    	document.getElementById('ws150').setAttribute("disabled", "disabled");
			    	document.getElementById('ws150').value = "";
			    	document.getElementById('rs150').setAttribute("disabled", "disabled");
			    	document.getElementById('rs150').value = "";
			    	document.getElementById('ws200').setAttribute("disabled", "disabled");
			    	document.getElementById('ws200').value = "";
			    	document.getElementById('rs200').setAttribute("disabled", "disabled");
			    	document.getElementById('rs200').value = "";
			    	document.getElementById('ws250').setAttribute("disabled", "disabled");
			    	document.getElementById('ws250').value = "";
			    	document.getElementById('rs250').setAttribute("disabled", "disabled");
			    	document.getElementById('rs250').value = "";
			    	document.getElementById('ws300').setAttribute("disabled", "disabled");
			    	document.getElementById('ws300').value = "";
			    	document.getElementById('rs300').setAttribute("disabled", "disabled");
			    	document.getElementById('rs300').value = "";
			    	document.getElementById('ws500').removeAttribute("disabled");
			    	document.getElementById('rs500').setAttribute("disabled", "disabled");
			    } else {
			    	document.getElementById('ws150').removeAttribute("disabled");
			    	document.getElementById('ws150').value = "";
			    	document.getElementById('rs150').setAttribute("disabled", "disabled");
			    	document.getElementById('rs150').value = "";
			    	document.getElementById('ws200').setAttribute("disabled", "disabled");
			    	document.getElementById('ws200').value = "";
			    	document.getElementById('rs200').setAttribute("disabled", "disabled");
			    	document.getElementById('rs200').value = "";
			    	document.getElementById('ws250').setAttribute("disabled", "disabled");
			    	document.getElementById('ws250').value = "";
			    	document.getElementById('rs250').setAttribute("disabled", "disabled");
			    	document.getElementById('rs250').value = "";
			    	document.getElementById('ws300').setAttribute("disabled", "disabled");
			    	document.getElementById('ws300').value = "";
			    	document.getElementById('rs300').setAttribute("disabled", "disabled");
			    	document.getElementById('rs300').value = "";
			    	document.getElementById('ws500').setAttribute("disabled", "disabled");
			    	document.getElementById('ws500').value = "";
			    	document.getElementById('rs500').setAttribute("disabled", "disabled");
			    	document.getElementById('rs500').value = "";
			    }
			  });
			
			});
			function restar150() {
				var ws150 = document.getElementById("ws150").value;
				var rs150 = (150 - ws150);
				document.getElementById("rs150").value = rs150;
			};
			function restar200() {
				var ws200 = document.getElementById("ws200").value;
				var rs200 = (200 - ws200);
				document.getElementById("rs200").value = rs200;
			};
			function restar250() {
				var ws250 = document.getElementById("ws250").value;
				var rs250 = (250 - ws250);
				document.getElementById("rs250").value = rs250;
			};
			function restar300() {
				var ws300 = document.getElementById("ws300").value;
				var rs300 = (300 - ws300);
				document.getElementById("rs300").value = rs300;
			};
			function restar500() {
				var ws500 = document.getElementById("ws500").value;
				var rs500 = (500 - ws500);
				document.getElementById("rs500").value = rs500;
			};
			function restarOther() {
				var wsOther01 = document.getElementById("wsOther01").value;
				var wsOther02 = document.getElementById("wsOther02").value;
				var rsOther03 = (wsOther01 - wsOther02);
				document.getElementById("rsOther03").value = rsOther03;
			};