/*
 * Detail window
 */

(function() {
	Stuk.ui.createConcertDetailWindow = function() {

		var detailWin = Titanium.UI.createWindow(Stuk.combine(style.DetailWindow, {
			barImage : 'img/header_detail.png'
		}));

		// LEFT NAVBAR BACK BUTTON
		var backButton = Ti.UI.createButton(style.backButton);
		backButton.addEventListener('click', function() {
			Ti.App.fireEvent('app:reloadSearch', {
				action : 'Reload search'
			});
			
			Titanium.App.navTab1.close(detailWin, {
				animated : false
			});
			
		});
		detailWin.leftNavButton = backButton;

		detailWin.addEventListener('blur', function(e) {
			Titanium.App.navTab1.close(detailWin, {
				animated : false
			});
		});
		var navActInd = Titanium.UI.createActivityIndicator({
			style:Ti.UI.iPhone.ActivityIndicatorStyle.DARK
		});

		detailWin.addEventListener('open', function(e) {
			getData();

			detailWin.setRightNavButton(navActInd);
			navActInd.show();
		});
		
		//HTTP CLIENT GETDATA
		function getData() {
			var getReq = Titanium.Network.createHTTPClient();
			var url = 'http://build.uitdatabank.be/api/event/' + Titanium.App.selectedIndex + '?format=json&key=' + Stuk.api_key;

			getReq.onload = function() {
				try {
					var detail = JSON.parse(this.responseText);

					var cdbNaam = detail.event.eventdetails.eventdetail.title;
					var cdbDatum = detail.event.eventdetails.eventdetail.calendarsummary;
					var cdbHeading = detail.event.headings.heading.value;
					var cdbTel = detail.event.contactinfo.phone.value;
					var cdbImg = detail.event.eventdetails.eventdetail.media;
					var cdbPrijs = detail.event.eventdetails.eventdetail.price;
					var cdbDescription = detail.event.eventdetails.eventdetail.shortdescription;

					var scrollView = Titanium.UI.createScrollView(style.scrollView);
					

					//Als er geen foto is, foto weglaten
					/*if (Ti.Platform.displayCaps.density === 'high') {
						  Ti.API.info('Retina');
					     var crop = '?width=640&height=350&crop=auto';
					   
					}else{
						Ti.API.info('Gewoon');
						crop ='?width=320&height=175&crop=auto';
					};*/
					var crop ='?width=320&height=175&crop=auto';
					
					if(cdbImg !== undefined) {
						if(cdbImg.file[0] !== undefined) {
							cdbImg = cdbImg.file[0].hlink + crop;
						} else {
							if(cdbImg.file.hlink!=='http:\/\/www.stuk.be'){
								cdbImg = cdbImg.file.hlink + crop;
							}else{
								cdbImg='img/no_img.png'
							}
						}
					} else {
						cdbImg = 'img/no_img.png'
					}
					
					var image = Ti.UI.createView(Stuk.combine(style.Img320, {
						backgroundImage : cdbImg,
						defaultImage:'img/default_img.png'
					}));
					Ti.API.info(image.backgroundImage);

					scrollView.add(image);

					var viewBgTitle = Titanium.UI.createView(style.viewTitleBg);

					var name = Titanium.UI.createLabel(Stuk.combine(style.titleDetail, {
						text : cdbNaam
					}));
					

					var date = Ti.UI.createLabel(Stuk.combine(style.textGreyBold, {
						text : cdbDatum
					}));

					if(cdbHeading === undefined) {
						cdbHeading = detail.event.headings.heading[0].value;
					}
					var heading = Ti.UI.createLabel(Stuk.combine(style.textBlueBold, {
						text : cdbHeading
					}));
					
					cdbDescription = cdbDescription.replace(/<br \/>/gi, " ");

					var description = Ti.UI.createLabel(Stuk.combine(style.textDescriptionDetail, {
						text : cdbDescription
					}));
					
					
					if(cdbPrijs !== undefined) {
						var price = Ti.UI.createLabel(Stuk.combine(style.textPrice, {
							text : cdbPrijs.pricedescription
						}));
						if(cdbPrijs.pricedescription !== undefined) {
							price.text = cdbPrijs.pricedescription;
							if(cdbPrijs.pricevalue === '0.00') {
								price.text = 'GRATIS'
							};
						} else {
							price.text = "€ " + cdbPrijs.pricevalue;
							if(cdbPrijs.pricevalue === '0.00') {
								price.text = 'GRATIS';
							};
						}
					};
					
					var tickets = Ti.UI.createLabel(Stuk.combine(style.textTickets, {
						text : 'tickets »'
					}));

					//Als optreden gratis, ticketlink verbergen
					if(cdbPrijs.pricevalue === '0.00') {
						tickets.hide();
					};

					tickets.addEventListener('click', function(e) {
						windowLink.open({
							modal : true,
							modalTransitionStyle : Ti.UI.iPhone.MODAL_TRANSITION_STYLE_COVER_VERTICAL,
							modalStyle : Ti.UI.iPhone.MODAL_PRESENTATION_CURRENT_CONTEXT,
						});
					});
					//
					//Webview window
					//
					var webview = Titanium.UI.createWebView({
						url : Stuk.app_site
					});

					var windowLink = Titanium.UI.createWindow(Stuk.combine(style.Window, {
						barImage : 'img/header_tickets.png'
					}));

					var backBtnLinkWindow = Titanium.UI.createButton(style.backButton);
					backBtnLinkWindow.addEventListener('click', function() {
						windowLink.close({
							animated : false
						});
						Titanium.App.navTab1.open(Stuk.ui.createConcertDetailWindow(), {
							animated : false
						});
					});
					windowLink.leftNavButton = backBtnLinkWindow;

					windowLink.add(webview);

					//Footer
					var footer = Titanium.UI.createView(style.footerView);

					var organiser = Titanium.UI.createLabel(Stuk.combine(style.textFooter, {
						text : '© ' + Stuk.app_name,
						left : 15
					}));

					var tel = Titanium.UI.createLabel(Stuk.combine(style.textFooter, {
						text : 'T: ' + cdbTel,
						left : 95
					}));
					if(cdbTel === undefined) {
						tel.text='T: '+Stuk.app_tel;
					};
					tel.addEventListener('click', function() {
						Titanium.Platform.openURL('tel:' + Stuk.app_tel)
					});
					var mail = Titanium.UI.createLabel(Stuk.combine(style.textFooter, {
						color:Stuk.ui.theme.darkBlue,
						text : Stuk.app_mail,
						left : 190
					}));
					mail.addEventListener('click', function() {
						Titanium.Platform.openURL('mail:' + Stuk.app_mail)
					});
					footer.add(organiser);
					footer.add(tel);
					footer.add(mail);

					scrollView.add(viewBgTitle);
					scrollView.add(name);
					scrollView.add(date);
					scrollView.add(heading);
					scrollView.add(description);
					//scrollView.add(tickets);
					scrollView.add(price);
					
					scrollView.add(footer);

					detailWin.add(scrollView);
					navActInd.hide();
					

				} catch(e) {
					alert(e);
				}
			}
			getReq.onerror = function(e) {
				Ti.API.info("TEXT onerror:   " + this.responseText);
				alert('Er is iets mis met de databank.');
				navActInd.hide();
			}
			getReq.timeout = 5000;
			getReq.open("GET", url);
			getReq.send();
		}

		return detailWin;
	};
})();
