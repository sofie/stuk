/*
 * Search window
 */

(function() {
	Stuk.ui.createSearchWindow = function() {
		var searchWin = Titanium.UI.createWindow(Stuk.combine(style.Window, {
			barImage : 'img/header_zoeken.png'
		}));

		//LEFT NAVBAR BACK BUTTON
		if(Ti.Platform.osname!=='android'){
			var backButton = Titanium.UI.createButton(style.backButton);
			backButton.addEventListener('click', function() {
				Titanium.App.navTab1.close(searchWin, {
					animated : false
				});
			});
			searchWin.leftNavButton = backButton;
		}else{
			searchWin.addEventListener('android:back', function(e) {
			    searchWin.close();
			 });
		}
		

		var searchBg = Titanium.UI.createView(style.searchBar);
		searchWin.add(searchBg);

		var searchBar
		if(Ti.Platform.osname==='android'){
			searchBar = Titanium.UI.createTextField(Stuk.combine(style.SearchFieldAndroid,{
				hintText : 'Zoek op naam...'
			}));
		}else{
			searchBar = Titanium.UI.createTextField(Stuk.combine(style.SearchField,{
				hintText : 'Zoek op naam...'
			}));
		}
		
		searchWin.add(searchBar);

		searchBar.addEventListener('change', function() {
			getConcertsByName();
			lblTap.hide();
		});
		var lblTap = Titanium.UI.createLabel(Stuk.combine(style.textInstruction,{
			text : 'Tik in het zoekveld om te zoeken.',
		}));
		searchWin.add(lblTap);
		
		//
		//Geen zoekresultaat, label tonen
		//
		searchBar.addEventListener('return',function(){
			if(Titanium.App.datalist===0){
				var lblNo = Titanium.UI.createLabel(Stuk.combine(style.textError,{
					text : 'Geen optredens gevonden.',
				}));
				searchWin.add(lblNo);
			}
			if(!Titanium.Network.online) {
				var lblNoInternet = Ti.UI.createLabel(Stuk.combine(style.textError, {
					text : 'Kan geen connectie maken met internet. Controleer uw verbinding.',
					left : 20,
					right : 20
				}));
				searchWin.add(lblNoInternet);
			}
		});
		
		//
		//Zoekresultaat behouden
		//
		Titanium.App.addEventListener('app:reloadSearch', function(e) {
			searchBar.setValue(Titanium.App.searchValue);
		});
		searchWin.addEventListener('close', function() {
		    Ti.App.removeEventListener('app:reloadSearch',function(e) {
				searchBar.setValue(Titanium.App.searchValue);
			});
		});
		//
		// HTTP CLIENT GETCONCERTBYNAME
		//
		function getConcertsByName() {
			var data = [];

			var getReq = Titanium.Network.createHTTPClient();
			var url = 'http://build.uitdatabank.be/api/events/search?format=json&key=' + Stuk.api_key + '&organiser=' + Stuk.organizer + '&q=' + searchBar.value;

			if(url === 'http://build.uitdatabank.be/api/events/search?format=json&key=' + Stuk.api_key + '&organiser=' + Stuk.organizer + '&q=') {
				url = 'http://build.uitdatabank.be/api/events/search?format=json&key=' + Stuk.api_key + '&organiser=' + Stuk.organizer;
			} else {
				url = 'http://build.uitdatabank.be/api/events/search?format=json&key=' + Stuk.api_key + '&organiser=' + Stuk.organizer + '&q=' + searchBar.value;
			}

			getReq.timeout = 5000;
			getReq.onload = function() {
				try {
					var list = JSON.parse(this.responseText);
					Titanium.App.datalist = list.length;

					for(var i = 0, j = list.length; i < j; i++) {
						Titanium.App.evNaam1 = list[i].title;

						var cdbId = list[i].cdbid;
						var cdbNaam = list[i].title;
						var cdbPerfomers = list[i].performers;
						var cdbDate = list[i].calendarsummary;
						var cdbHeading = list[i].heading;

						var cdbImg = list[i].thumbnail;
						var strImg = cdbImg.substr(0, 77);
						var imgThumb = strImg + '?width=108&height=80&crop=auto';

						var row = Ti.UI.createTableViewRow(style.tableViewRow);
						
						if (Ti.Platform.displayCaps.density === 'high') {
						     var imgThumb = strImg + '?width=216&height=160&crop=auto';
						}else{
							imgThumb = strImg + '?width=108&height=80&crop=auto';
						};

						if(cdbImg === '') {
							imgThumb = 'img/no_thumb.png';
						}

						var image = Titanium.UI.createImageView(Stuk.combine(style.Img90,{
							image : imgThumb
						}));

						var name = Ti.UI.createLabel(Stuk.combine(style.titleNaam,{
							text : cdbNaam
						}));
						
						var performers = Ti.UI.createLabel(Stuk.combine(style.textPerformers,{
							text : cdbPerfomers
						}));
						
						var date = Ti.UI.createLabel(Stuk.combine(style.textDescription,{
							text : cdbDate
						}));
						var heading = Ti.UI.createLabel(Stuk.combine(style.textHeading,{
							text : cdbHeading
						}));
						var viewBlue = Titanium.UI.createView(style.viewBlue);
						
						row.add(image);
						row.add(name);
						row.add(performers);
						row.add(date);
						row.add(heading);
						row.add(viewBlue);

						data.push(row);
					};
					var tableView;
					if(Ti.Platform.osname==='android'){
						tableView = Titanium.UI.createTableView(Stuk.combine(style.TableViewSearchAndroid,{
							data : data
						}));
					}else{
						tableView = Titanium.UI.createTableView(Stuk.combine(style.TableViewSearch,{
							data : data
						}));
					}
					searchWin.add(tableView);
					
					searchBar.addEventListener('return', function(e) {
						tableView.setData(data);
						tableView.setBottom(0);
					});
					//Open detail van window
					tableView.addEventListener('click', function(e) {
						Titanium.App.searchValue = searchBar.value;

						Titanium.App.selectedIndex = list[e.index].cdbid;
						Titanium.API.info(Titanium.App.selectedIndex);
						
						if (Ti.Platform.osname === 'android') {
							searchWin.containingTab.open(Stuk.ui.createConcertDetailWindow());
							
						}else{
							Titanium.App.navTab1.open( Stuk.ui.createConcertDetailWindow(), {
								animated : false
							});
						}

						Titanium.App.navTab1.open(Stuk.ui.createConcertDetailWindow(),{
							animated:false
						});

					});
					
					
				} catch(e) {
					alert(e);
				}
			}
			/*getReq.onerror = function(e) {
				Ti.API.info("TEXT onerror:   " + this.responseText);
				alert('Er is iets mis met de databank.');
			}
			*/
			getReq.open("GET", url);

			getReq.send();
		}


		searchWin.open();
		return searchWin;
	};
})();