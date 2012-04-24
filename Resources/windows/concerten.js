/*
 * Eerste tab, alle concerten in tableview
 */

Ti.include('/windows/concert_detail.js', '/windows/zoeken.js');

(function() {
	Stuk.ui.createConcertenWindow = function() {

		Titanium.App.tabgroup.setActiveTab(Titanium.App.navTab1);

		var mainWin = Titanium.UI.createWindow(Stuk.combine(style.Window, {
			barImage : 'img/header.png'
		}));

		var lblTitle = Titanium.UI.createLabel(Stuk.combine(style.titleBar, {
			text : Stuk.tab1_name
		}));
		mainWin.setTitleControl(lblTitle);


		// LEFT NAVBAR: REFRESH BUTTON
		var refreshButton = Titanium.UI.createButton(style.refreshButton);
		refreshButton.addEventListener('click', function() {
			url = 'http://build.uitdatabank.be/api/events/search?format=json&key=' + Stuk.api_key + '&organiser=' + Stuk.organizer;
			Stuk.ui.activityIndicator.showModal('Loading...', 10000, 'Kan programma niet ophalen. Controleer uw internetverbinding.');
			getData();
		});
		mainWin.leftNavButton = refreshButton;


		if(!Titanium.Network.online) {
			var lblNoInternet = Ti.UI.createLabel(Stuk.combine(style.textNoList, {
				text : 'Kan geen connectie maken met internet. Refresh of controleer uw verbinding.',
				left:20,
				right:20
			}));
			mainWin.add(lblNoInternet);
		} else {
			
			var url = 'http://build.uitdatabank.be/api/events/search?format=json&key=' + Stuk.api_key + '&organiser=' + Stuk.organizer;
			getData();	
		}
		
		function getData() {
			// RIGHT NAVBAR: SEARCH BUTTON
			var searchButton = Titanium.UI.createButton(style.searchButton);
			searchButton.addEventListener('click', function() {
				var searchWin = Stuk.ui.createSearchWindow();
				Titanium.App.navTab1.open(searchWin, {
					animated : false
				});
			});
			
			//
			//Filter op resultaten
			//
			var filterView = Titanium.UI.createView({
				height : 35,
				width : 320,
				backgroundColor : Stuk.ui.theme.blueColor,
				top : 0,
				left : 0
			});

			var vandaagButton = Titanium.UI.createButton({
				title : 'vandaag',
				color : '#2F6885',
				font : {
					fontFamily : 'Arial',
					fontWeight : 'bold',
					fontSize : 11
				},
				backgroundImage : "img/btn_vandaag.png",
				width : 73,
				height : 35,
				left : 15
			});
			vandaagButton.addEventListener('click', function() {
				url = 'http://build.uitdatabank.be/api/events/search?format=json&key=' + Stuk.api_key + '&organiser=' + Stuk.organizer + '&datetype=today';
				getData();
			});

			var dezeWeekButton = Titanium.UI.createButton({
				title : 'deze week',
				color : '#2F6885',
				font : {
					fontFamily : 'Arial',
					fontWeight : 'bold',
					fontSize : 11
				},
				backgroundImage : "img/btn_deze_week.png",
				width : 73,
				height : 35,
				left : 120
			});
			dezeWeekButton.addEventListener('click', function() {
				url = 'http://build.uitdatabank.be/api/events/search?format=json&key=' + Stuk.api_key + '&organiser=' + Stuk.organizer + '&datetype=thisweek';
				getData();
			});

			var dezeMaandButton = Titanium.UI.createButton({
				title : 'deze maand',
				color : '#2F6885',
				font : {
					fontFamily : 'Arial',
					fontWeight : 'bold',
					fontSize : 11
				},
				backgroundImage : "img/btn_deze_maand.png",
				width : 73,
				height : 35,
				right : 15
			});
			dezeMaandButton.addEventListener('click', function() {
				url = 'http://build.uitdatabank.be/api/events/search?format=json&key=' + Stuk.api_key + '&organiser=' + Stuk.organizer + '&datetype=thismonth';
				getData();
			});
		

			var data = [];

			var getReq = Titanium.Network.createHTTPClient();

			getReq.onload = function() {
				try {
					mainWin.rightNavButton = searchButton;
					filterView.add(vandaagButton);
					filterView.add(dezeWeekButton);
					filterView.add(dezeMaandButton);
					mainWin.add(filterView);
					var list = JSON.parse(this.responseText);

					for(var i = 0, j = list.length; i < j; i++) {

						var cdbId = list[i].cdbid;
						var cdbNaam = list[i].title;
						var cdbPerfomers = list[i].performers;
						var cdbDate = list[i].calendarsummary;
						var cdbHeading = list[i].heading;

						var cdbImg = list[i].thumbnail;
						var strImg = cdbImg.substr(0, 77);
						//var imgThumb = strImg + '?width=108&height=80&crop=auto';

						var row = Ti.UI.createTableViewRow(style.tableViewRow);
						
						if (Ti.Platform.displayCaps.density === 'high') {
						     var imgThumb = strImg + '?width=216&height=160&crop=auto';
						}else{
							imgThumb = strImg + '?width=108&height=80&crop=auto';
						};

						if(cdbImg === '') {
							imgThumb = 'img/no_thumb.png';
						};

						var image = Titanium.UI.createView(Stuk.combine(style.Img90, {
							backgroundImage : imgThumb
						}));
						
						var name = Ti.UI.createLabel(Stuk.combine(style.titleNaam, {
							text : cdbNaam
						}));

						var performers = Ti.UI.createLabel(Stuk.combine(style.textPerformers, {
							text : cdbPerfomers
						}));

						var date = Ti.UI.createLabel(Stuk.combine(style.textDescription, {
							text : cdbDate
						}));
						var heading = Ti.UI.createLabel(Stuk.combine(style.textHeading, {
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

					var tableView = Titanium.UI.createTableView(Stuk.combine(style.TableViewConcerten, {
						data : data
					}));
					mainWin.add(tableView);

					//Open detail window
					tableView.addEventListener('click', function(e) {
						Titanium.App.selectedIndex = list[e.index].cdbid;
						Titanium.API.info(Titanium.App.selectedIndex);
						Titanium.App.rowIndex = e.index;
						
						Titanium.App.navTab1.open( Stuk.ui.createConcertDetailWindow(), {
							animated : false
						});
					});

					Stuk.ui.activityIndicator.hideModal();

				} catch(e) {
					alert(e);
				}
			};

			getReq.open("GET", url);
			getReq.timeout = 5000;
			getReq.send();
		};

		return mainWin;
	}
})();
