/*
 * Tweede tab, rss/nieuws
 */

(function() {
	Stuk.ui.createInfoWindow = function() {

		Titanium.App.tabgroup.setActiveTab(Titanium.App.navTab4);
		var infoWindow = Titanium.UI.createWindow(Stuk.combine(style.DetailWindow, {
			barImage : 'img/header.png'
		}));

		var lblTitle = Titanium.UI.createLabel(Stuk.combine(style.titleBar, {
			text : Stuk.tab4_name
		}));
		infoWindow.setTitleControl(lblTitle);
		
		var scrollView = Titanium.UI.createScrollView(style.scrollView);

		//
		//Openingsuren
		//
		var viewBgOpeningsuren = Titanium.UI.createView(style.viewTitleBg);
		scrollView.add(viewBgOpeningsuren);
		var openingsuren = Titanium.UI.createLabel(Stuk.combine(style.titleDetail, {
			text : 'openingsuren'
		}));
		scrollView.add(openingsuren);

		var lblOnthaal = Titanium.UI.createLabel(Stuk.combine(style.textLocation, {
			text : 'STUK onthaal'
		}));
		scrollView.add(lblOnthaal);
		var lblOnthaalDescription = Titanium.UI.createLabel(Stuk.combine(style.textLocationDescription, {
			text : 'ma- vr : 10u00 - 22u30 \nza : 19u30 - 22u30 \nzo : 14u30 - 17u00 en 19u30 - 22u30',
			height:60
		}));
		scrollView.add(lblOnthaalDescription);
		
		var lblCafe = Titanium.UI.createLabel(Stuk.combine(style.textLocation, {
			text : 'STUKcafé'
		}));
		scrollView.add(lblCafe);
		var lblCafeDescription = Titanium.UI.createLabel(Stuk.combine(style.textLocationDescription, {
			text : 'ma-vr : 11u00 - 2u00 \nza & zo : 14u00 - 2u00 \nOp feestdagen zijn we geopend vanaf 19u30, tenzij anders aangegeven.',
			height:100
		}));
		scrollView.add(lblCafeDescription);
		
		//
		//Zaalverhuur
		//
		var viewBgZaalverhuur = Titanium.UI.createView(style.viewTitleBg);
		scrollView.add(viewBgZaalverhuur);
		var zaalverhuur = Titanium.UI.createLabel(Stuk.combine(style.titleDetail, {
			text : 'zaalverhuur'
		}));
		scrollView.add(zaalverhuur);
		
		var lblPaviljoenen = Titanium.UI.createLabel(Stuk.combine(style.textLocation, {
			text : 'Paviljoenen'
		}));
		scrollView.add(lblPaviljoenen);
		var lblCafeDescription = Titanium.UI.createLabel(Stuk.combine(style.textLocationDescription, {
			text : 'STUK beschikt over 4 geluiddichte paviljoenen voor muzikanten. In paviljoen 5 staat er een piano. Deze paviljoenen worden gratis verhuurd op voorwaarde dat je een STUKkaart (€12) hebt. In de paviljoenen geldt, net zoals in het volledige STUKgebouw, een strikt rookverbod.\ncontact : ticket@stuk.be - 016 320 320',
			height:140
		}));
		scrollView.add(lblCafeDescription);
		

		//
		//Footer
		//
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
		infoWindow.add(scrollView);

		return infoWindow;
	};
})();
