/*
 * Tweede tab, rss/nieuws
 */

(function() {
	Stuk.ui.createInfoWindow = function() {

		Titanium.App.tabgroup.setActiveTab(Titanium.App.navTab4);
		
		var infoWindow = Titanium.UI.createWindow(Stuk.combine(style.DetailWindow, {
			barImage : 'img/header.png',
			title:Stuk.tab4_name
		}));
		
		if(Ti.Platform.osname!=='android'){
			var lblTitle = Titanium.UI.createLabel(Stuk.combine(style.titleBar, {
				text : Stuk.tab4_name
			}));
			infoWindow.setTitleControl(lblTitle);
		}
		
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
		//Footer
		//
		var footer = Titanium.UI.createView(Stuk.combine(style.footerView, {
			top : 30
		}));

		var organiser = Titanium.UI.createLabel(Stuk.combine(style.textFooter, {
			text : '© '+Stuk.app_name,
			left : 15
		}));

		var tel = Titanium.UI.createLabel(Stuk.combine(style.textFooter, {
			text : 'T: '+Stuk.app_tel,
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
			//Titanium.Platform.openURL('mailto:' + Stuk.app_mail);
			var emailDialog = Ti.UI.createEmailDialog();
            emailDialog.toRecipients = [Stuk.app_mail];
            emailDialog.open();
		});
		
		footer.add(organiser);
		footer.add(tel);
		footer.add(mail);

		scrollView.add(footer);
		infoWindow.add(scrollView);

		return infoWindow;
	};
})();
