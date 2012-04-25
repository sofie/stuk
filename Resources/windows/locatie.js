/*
 * Tweede tab, rss/nieuws
 */

(function() {
	Stuk.ui.createLocatieWindow = function() {

		Titanium.App.tabgroup.setActiveTab(Titanium.App.navTab3);
		var locatieWindow = Titanium.UI.createWindow(Stuk.combine(style.DetailWindow, {
			barImage : 'img/header.png'
		}));

		var lblTitle = Titanium.UI.createLabel(Stuk.combine(style.titleBar, {
			text : Stuk.tab3_name
		}));
		locatieWindow.setTitleControl(lblTitle);
		
		var scrollView = Titanium.UI.createScrollView(style.scrollView);

		var lblLocation = Titanium.UI.createLabel(Stuk.combine(style.textLocationTitle, {
			text : 'STUK KUNSTENCENTRUM vzw . Naamsestraat 96 . B-3000 Leuven'
		}));
		scrollView.add(lblLocation);

		var point = Titanium.Map.createAnnotation({
			latitude : 50.873666,
			longitude : 4.699736,
			title : "STUK Kunstencentrum",
			subtitle : 'Naamsestraat 96 . B-3000 Leuven',
			animate : true,
			image : 'img/pin.png'
		});

		var mapview = Titanium.Map.createView({
			left : 20,
			right : 20,
			top : 10,
			height : 260,
			mapType : Titanium.Map.STANDARD_TYPE,
			region : {
				latitude : 50.873666,
				longitude : 4.699736,
				latitudeDelta : 0.002,
				longitudeDelta : 0.002
			},
			animate : true,
			regionFit : true,
			userLocation : true,
			annotations : [point]
		});
		scrollView.add(mapview);
		
		mapview.addEventListener('click',function(){
			Ti.Platform.openURL('http://maps.google.com/maps?daddr=50.873666,4.699736');
		});

		var viewBgTitle = Titanium.UI.createView(style.viewTitleBg);
		scrollView.add(viewBgTitle);
		var name = Titanium.UI.createLabel(Stuk.combine(style.titleDetail, {
			text : 'wegbeschrijving'
		}));
		scrollView.add(name);

		var lblStation = Titanium.UI.createLabel(Stuk.combine(style.textLocation, {
			text : 'Van het station'
		}));
		scrollView.add(lblStation);
		var lblStationDescription = Titanium.UI.createLabel(Stuk.combine(style.textLocationDescription, {
			text : 'Stap de Bondgenotenlaan door, richting centrum. Je komt op de Grote Markt. Aan jouw linkerkant zie je het Leuvense stadhuis. Het stadhuis ligt op de hoek van de Grote Markt en de Naamsestraat. Sla dus onmiddellijk nà het stadhuis linksaf. Je bent nu in de Naamsestraat. STUK bevindt zich op nummer 96, aan jouw rechterkant.',
			height:125
		}));
		scrollView.add(lblStationDescription);
		var lblBus = Titanium.UI.createLabel(Stuk.combine(style.textLocation, {
			text : 'Met de bus'
		}));
		scrollView.add(lblBus);
		var lblBusDescription = Titanium.UI.createLabel(Stuk.combine(style.textLocationDescription, {
			text : 'Aan het station kan je ook bus 1 of 2 nemen richting Heverlee Campus. Stap af aan de halte Heilig-Hartziekenhuis aan de Naamsestraat en wandel 50 meter terug, STUK ligt aan nummer 96.',
			height:80
		}));
		scrollView.add(lblBusDescription);
		var lblAuto1 = Titanium.UI.createLabel(Stuk.combine(style.textLocation, {
			text : 'Van de E40 Brussel - Luik'
		}));
		scrollView.add(lblAuto1);
		var lblAuto1Description = Titanium.UI.createLabel(Stuk.combine(style.textLocationDescription, {
			text : 'Neem afrit 22 (Leuven). Na de scherpe bocht kom je op de E314. Neem onmiddellijk de eerste afrit (Afrit 15: Leuven). Je komt op de Koning Boudewijnlaan. Volg deze 4-baansweg. Je passeert 2 lichten. Na de 2de lichten kom je aan een viaduct. Sla net voor het viaduct rechtsaf. Je bevindt je nu op de ring rond Leuven. Je komt uit op de Naamsepoort. Ga aan de lichten linksaf, de Naamsestraat in. STUK bevindt zich op nummer 96, aan jouw linkerkant.',
			height:180
		}));
		scrollView.add(lblAuto1Description);
		var lblAuto2 = Titanium.UI.createLabel(Stuk.combine(style.textLocation, {
			text : 'Van E314 Hasselt - Leuven'
		}));
		scrollView.add(lblAuto2);
		var lblAuto2Description = Titanium.UI.createLabel(Stuk.combine(style.textLocationDescription, {
			text : 'Neem afrit 18, zo kom je op de Mechelsesteenweg. Sla linksaf, richting Leuven. Sorteer rechts voor. 500 meter rechtdoor kom je aan lichten. Sla rechtsaf. Je bevindt je nu op de ring rond Leuven. Aan de eerste lichten (de Tervuursepoort) ga je rechtdoor. Sorteer links voor. Je rijdt nu over een viaduct. Sla linksaf aan de de eerstvolgende lichten (de Naamsepoort), de Naamsestraat in. STUK bevindt zich op nummer 96, aan jouw linkerkant. Voor iedereen die met de wagen komt: Neem steeds de ring rond Leuven, tot aan de Naamsepoort. Sla daar de Naamsestraat in. Wanneer je een andere invalsweg neemt is de kans dat je op tijd in de zaal geraakt zeer klein. Het centrum van de stad is voor het overgrote deel verkeersvrij.',
			height:290
		}));
		scrollView.add(lblAuto2Description);
		var lblParking = Titanium.UI.createLabel(Stuk.combine(style.textLocation, {
			text : 'Parking'
		}));
		scrollView.add(lblParking);
		var lblParkingDescription = Titanium.UI.createLabel(Stuk.combine(style.textLocationDescription, {
			text : 'Als je vanop de Leuvense ring de Naamsestraat inrijdt, is er aan jouw linkerkant (net voor je het STUK tegenkomt) de H. Hartparking (tegenover het H.Hartziekenhuis). Hier kan je onbeperkt avondparkeren van 19u00 tot 7u00 voor een vast bedrag van € 3.',
			height:110
		}));
		scrollView.add(lblParkingDescription);

		var footer = Titanium.UI.createView(Stuk.combine(style.footerView, {
			top : 30
		}));

		var organiser = Titanium.UI.createLabel(Stuk.combine(style.textFooter, {
			text : Stuk.app_name,
			left : 15
		}));

		var tel = Titanium.UI.createLabel(Stuk.combine(style.textFooter, {
			text : Stuk.app_tel,
			left : 95
		}));

		tel.addEventListener('click', function() {
			Titanium.Platform.openURL('tel:' + Stuk.app_tel)
		});
		var mail = Titanium.UI.createLabel(Stuk.combine(style.textFooter, {
			color : Stuk.ui.theme.darkBlue,
			text : Stuk.app_mail,
			left : 190
		}));
		mail.addEventListener('click', function() {
			Titanium.Platform.openURL('mail:' + Stuk.app_mail)
		});
		footer.add(organiser);
		footer.add(tel);
		footer.add(mail);

		scrollView.add(footer);
		locatieWindow.add(scrollView);

		return locatieWindow;
	};
})();
