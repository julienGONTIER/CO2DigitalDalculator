/* IMPROVEMENT 
-> Durée des écrans
-> Type de voiture
-> Impact d'un Européen moyen
*/

		var TCOSite = "https://tcocertified.com/";
		var EpeatSite = "https://epeat.net";
		
		var working_days = 215;
		//330g CO2/Giga /USA
		var CO2GigaByteCloud = 0.330; // Fred Bordage Green IT
		//253g/km 
		var CO2kmcar = 0.253; // ADEME BASE CARBONE v11.5
		//
		var CO2kmtrain = 0.037; // ADEME BASE CARBONE v11.5 FR
		//93g/km -> Medium Bus / intercity
		var CO2kmtrainBus = 0.093; // ADEME BASE CARBONE v11.5
		//138g/km 
		var CO2kmairtravel = 0.138; // ADEME BASE CARBONE v11.5
		//500g / kwh -> Energétic mix Europe
		var CO2kwh = 0.5;
		//Medium kg CO2
		var CO2MoyEuropean = 9000;
		var CO2MoyFrench = 12000;
		//CO2 streaming per minute - carbonbrief.org Carbon Footprint Video Netflix
		var CO2streaming = 0.057;
		//CO2 compensed per a tree per year // ADEME
		var CO2TreeYear = 20;
		//CO2 Fleece: 11kg CO2 // LCA Decathlon
		var CO2Fleece = 11;


		$(document).ready(function(){
			var total_CO2_digital = 0;var total_CO2_travel = 0;	var total_CO2 = 0; var percent_european = 0;
			//Get all Brands
			var brands = getBrands();
			populateDevice($("#sel_laptop"), device);
			populate($("#sel_emails"), impactEmails);
			
			function populateDevice(select, jsonvar){
				var brands = "";
				jsonvar.sort(function (a, b) {
					return a.brand.localeCompare(b.brand);
				});

				$.each(jsonvar,function(key, value) 
				{
					if(brands != value.brand)
						select.append('<optgroup label=' + value.brand + '>');
					else
						select.append('</optgroup>');
					select.append('<option value=' + value.key + '>' + value.name + '</option>');
					brands = value.brand;
				});
			}

			function populate(select, jsonvar){
				$.each(jsonvar,function(key, value) 
				{
					select.append('<option value=' + value.key + '>' + value.name + '</option>');
				});
			}

			function getBrands(){
				//Filter Json devices with brands
				var lookup = {};
				var items = device;
				var result = [];

				for (var item, i = 0; item = items[i++];) {
				var brand = item.brand;

				if (!(brand in lookup)) {
					lookup[brand] = 1;
					result.push(brand);
				}
				}
				return result;
			}

			function ResetScreen(){
				$("#screen_total").html("");
				$("#screen_total_year").html("");
			}
			function ResetPhone(){
				$("#phone_total").html("");
				$("#phone_total_year").html("");
			}
			
			function RefreshTotal(){
				total_CO2_digital = Number($("#laptop_impact_annuel").html()) + Number($("#screen_total_year").html()) + Number($("#phone_total_year").html()) + Number($("#storage_google_year").html()) + Number($("#impact_email_year").html()) + Number($("#impact_stream_year").html());
				
				total_CO2_travel = Number($("#impact_car_year").html()) + Number($("#impact_public_transport_year").html()) + Number($("#impact_plane_year").html()) + Number($("#impact_train_year").html());
				
				total_CO2 = total_CO2_digital + total_CO2_travel;
				
				$("#total_impact_digital").html(total_CO2_digital.toFixed(2));
				$("#total_impact_trip").html(total_CO2_travel.toFixed(2));
				$("#total_impact").html(total_CO2.toFixed(2));
				
				//20kg per year per tree -> 2500
				nb_tree = (total_CO2.toFixed(2) /CO2TreeYear / 50);
				nb_fleece = (total_CO2.toFixed(2) /CO2Fleece);
				nb_bulb = (total_CO2.toFixed(2) *1000/19/24/365);
				percent_european = (total_CO2.toFixed(2) /CO2MoyFrench * 100);

				$("#nb_tree").html(nb_tree.toFixed(2));
				$("#nb_fleece").html(nb_fleece.toFixed(2));
				$("#nb_bulb").html(nb_bulb.toFixed(2));
				$("#percent_conso").html(percent_european.toFixed(2));
			}

			function refreshLaptop(){
				var laptop = $.grep(device, function( n, i ) {
				  return n.key===$("#sel_laptop").val();
				});
				var lasting = $("#sel_lastingLaptop").val();
				var use = Number(laptop[0].use * lasting * CO2kwh);
				var prod = Number(laptop[0].production);
				var TCO = laptop[0].TCO;
				var EPeat = laptop[0].epeat;
				$("#laptop_total").html((use + prod).toFixed(2));
				$("#laptop_production").html(prod);
				$("#laptop_use").html(use.toFixed(2));
				$("#laptop_impact_annuel").html(((use + prod )/ lasting).toFixed(2));

				
				if (laptop[0].link != ""){
					$("#device_link").attr("href", laptop[0].link);
					$("#device_link").css("display", "inline");
				}
				$("#tco").hide();
				$("#epeat").hide();
				if (TCO == "YES"){
					$("#tco").html("").show();
					$("#tco").append("<img src='./Images/tco_label.png' title='Label TCO' alt='Label TCO' class=''>");
				}
				if (EPeat != ""){
					$("#epeat").html("").show();
					switch (EPeat){
						case 'Gold':
							$("#epeat").append("<img src='./Images/epeat_label_gold.png' title='Epeat Gold' alt='Epeat Gold' class=''>");
							break;
						case 'Silver':
							$("#epeat").append("<img src='./Images/epeat_label_silver.png' title='Epeat Gold' alt='Epeat Silver' class=''>");
							break;
						case 'Bronze':
						default:
							$("#epeat").append("<img src='./Images/epeat_label_bronze.png' title='Epeat Bronze' alt='Epeat Bronze' class=''>");
							break;
						break;
					}
				}
				RefreshTotal();
			}
			
			$("#sel_laptop").change(function(){
				refreshLaptop();
			});

			$("#sel_lastingLaptop").change(function(){
				refreshLaptop();
			});
			
			$("#screen").change(function(){
				if ($("#screen").val() != "0"){
					var nb_screen = Number($("#screen").val());
					var total = ecran[0].total * nb_screen;
					$("#screen_total").html(total);
					$("#screen_total_year").html((total / ecran[0].lasting).toFixed(2));
				}
				else
					ResetScreen();
					
				RefreshTotal();
			});
			$("#phone").change(function(){
				if ($("#phone").val() == "yes"){
					$("#phone_total").html(phone[0].total);
					$("#phone_total_year").html((phone[0].total/ phone[0].lasting).toFixed(2));
				}
				else
					ResetPhone();
					
				RefreshTotal();
			});
			
			$("#storage_google").change(function(){
				if ($("#storage_google").val() != ""){
					$("#storage_google_year").html($("#storage_google").val() * CO2GigaByteCloud);
				}
				else
					$("#storage_google_year").html("0");
					
				RefreshTotal();
			});
			
			$("#sel_emails").change(function(){
				var impactdaily = $.grep(impactEmails, function( n, i ) {
					  return n.key===$("#sel_emails").val();
					});
				if ($(sel_emails).val() != ""){
					$("#impact_email_daily").html(impactdaily[0].total);
					$("#impact_email_year").html(impactdaily[0].total * working_days);
				}
				else{
					$("#impact_email_daily").html("0");
					$("#impact_email_year").html("0");
					}
					
				RefreshTotal();
			});

			$("#sel_stream").change(function(){
				if ($("#sel_stream").val() != ""){
					$("#impact_stream_daily").html(Number($("#sel_stream").val() * CO2streaming).toFixed(0));
					$("#impact_stream_year").html(Number($("#sel_stream").val() * CO2streaming  * working_days).toFixed(0));
				}
				else{
					$("#impact_stream_daily").html("0");
					$("#impact_stream_year").html("0");
				}
					
				RefreshTotal();
			});

			$("#trip_airplane").change(function(){
				if ($("#trip_airplane").val() != ""){
					var impactAnnuel = Number($("#trip_airplane").val() * CO2kmairtravel).toFixed(2);
					$("#impact_plane_year").html(Number(impactAnnuel).toFixed(2) );
				}
				else{
					$("#impact_plane_year").html("0");
				}
				RefreshTotal();
			});

			$("#trip_train").change(function(){
				if ($("#trip_train").val() != ""){
					var impactAnnuel = Number($("#trip_train").val() * CO2kmtrain).toFixed(2);
					$("#impact_train_year").html(Number(impactAnnuel).toFixed(2) );
				}
				else{
					$("#impact_train_year").html("0");
				}
				RefreshTotal();
			});
			
			$("#trip_car").change(function(){
				if ($("#trip_car").val() != ""){
					var impactQuotidien = Number($("#trip_car").val() * CO2kmcar).toFixed(2);
					var pourcent = $("#pourcent_car").val();
					$("#impact_car_daily").html(impactQuotidien);
					$("#impact_car_year").html(Number(impactQuotidien * working_days * (pourcent/ 100)).toFixed(2) );
				}
				else{
					$("#impact_car_daily").html("0");
					$("#impact_car_year").html("0");
				}
				RefreshTotal();
			});
			
			$("#pourcent_car").change(function(){
				if ($("#pourcent_car").val()>100){
					$("#pourcent_car").val(100);
					}
				$("#trip_car").change();
				CheckPercent();
			});
			
			$("#pourcent_car").click(function(){$("#pourcent_car").change()});
			
			$("#trip_public_transport").change(function(){
				if ($("#trip_public_transport").val() != ""){
					var impactQuotidien = Number($("#trip_public_transport").val() * CO2kmtrainBus).toFixed(2);
					var pourcent = $("#percent_public_transport").val();
					$("#impact_public_transport_daily").html(impactQuotidien);
					$("#impact_public_transport_year").html(Number(impactQuotidien * working_days * (pourcent/ 100)).toFixed(2) );
				}
				else{
					$("#impact_public_transport_daily").html("0");
					$("#impact_public_transport_year").html("0");
				}
				RefreshTotal();
			});
			
			$("#percent_public_transport").change(function(){
				if ($("#percent_public_transport").val()>100){
					$("#percent_public_transport").val(100);
					}
				$("#trip_public_transport").change();
				CheckPercent();
			});
			
			
			$("#percent_public_transport").click(function(){$("#percent_public_transport").change()});
			
			$("#percent_bike").change(function(){
				if (Number($("#percent_bike").val())>100){
					$("#percent_bike").val(100);
                }
                $("#impact_bike_daily").html("0");
                $("#impact_bike_year").html("0");
                
				CheckPercent();
			});
			
			function CheckPercent()
			{
				if (Number($("#percent_bike").val()) + Number($("#percent_public_transport").val()) + Number($("#pourcent_car").val()) >100)
					$(".percent").css("background-color", "red")
				else if(Number($("#percent_bike").val()) + Number($("#percent_public_transport").val()) + Number($("#pourcent_car").val()) <100)
					$(".percent").css("background-color", "orange")
				else
					$(".percent").css("background-color", "#ffffff");
			}			
			$(".lng").click(function(){
				Translate($(this).attr("id"));
				$(this).css("font-weight", "bold");
			});
			
			function Translate(lng){
				if (jQuery.inArray(lng, language) == -1)
					lng="fr";
				$(".lng").css("font-weight", "");
				$('[data-trad]').each(function() {
					if (translation[$(this).attr("data-trad")][lng] != '')
						$(this).html(translation[$(this).attr("data-trad")][lng]);
					else
						$(this).html(translation[$(this).attr("data-trad")]["en"]);
				});
				$("html").attr("lang", lng);
			}
			$("#sel_laptop").change();
			$("#screen").change();
			$("#phone").change();
            $("#sel_emails").change();
			$("#sel_stream").change();
            $("#storage_google").change();
			$("#trip_public_transport").change();
            $("#trip_car").change();
            $("#percent_bike").change();
            $("#trip_airplane").change();
			$("#trip_train").change();
            

			var url = document.location.href;
			var lng = url.substring(url.indexOf("#")+1);
			Translate(lng.toLowerCase());

			$("#score_env").html(localStorage.note);
        	$("#note_env").html(localStorage.eco_index);

			$("#reduce_intro").click(function(){
				$("#intro").toggle();
			});
			$("#detail_source").click(function(){
				$(".co2_explaination").toggle();
				return false;
			});
		});