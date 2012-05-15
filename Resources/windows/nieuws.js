/*
 * Tweede tab, rss/nieuws
 */

Ti.include('/windows/nieuws_detail.js');

(function() {
	Stuk.ui.createNieuwsWindow = function() {

		Titanium.App.tabgroup.setActiveTab(Titanium.App.navTab2);
		var nieuwsWindow = Titanium.UI.createWindow(Stuk.combine(style.Window, {
			barImage : 'img/header.png',
			title: Stuk.tab2_name
		}));
		if(Ti.Platform.osname!=='android'){
			var lblTitle = Titanium.UI.createLabel(Stuk.combine(style.titleBar, {
				text : Stuk.tab2_name
			}));
			nieuwsWindow.setTitleControl(lblTitle);
		}

		// load the feed
		nieuwsWindow.addEventListener('open', function(e) {
			
		});

		// RIGHT NAVBAR REFRESH BUTTON
		var refreshButton = Titanium.UI.createButton(style.refreshButton);
		refreshButton.addEventListener('click', function() {
			Stuk.ui.activityIndicator.showModal('Loading...', 10000, 'Kan nieuws items niet ophalen. Controleer uw internetverbinding.');
			url = Stuk.url_news_feed;
			i = 0;
			loadRSSFeed(url);
		});
		nieuwsWindow.rightNavButton = refreshButton;

		if(!Titanium.Network.online) {
			var lblNoInternet = Ti.UI.createLabel(Stuk.combine(style.textError, {
				text : 'Kan geen connectie maken met internet. Refresh of controleer uw verbinding.',
				left:20,
				right:20
			}));
			nieuwsWindow.add(lblNoInternet);
		} else {

			Titanium.include('/config/strip_tags.js');
			var url = Stuk.url_news_feed;

			var data;
			var i = 0;

			loadRSSFeed(url);
		};

		function displayNieuws(itemList) {

			for(var c = 0; c < itemList.length; c++) {

				var title = itemList.item(c).getElementsByTagName("title").item(0).text;
				var desc = itemList.item(c).getElementsByTagName("description").item(0).text;
				var date = itemList.item(c).getElementsByTagName("pubDate").item(0).text;
				date = date.substr(5, 11);
				var link = itemList.item(c).getElementsByTagName("link").item(0).text;

				//Clean up characters
				title = title.replace(/\n/gi, " ");
				title = title.replace(/<br \/>/gi, "");
				title = title.replace(/&eacute;/gi, "é");
				title = title.replace(/&Aring;/gi, "Ä");
				title = title.replace(/&aring;/gi, "ä");
				title = title.replace(/&ouml;/gi, "ö");
				title = title.replace(/&amp;/gi, "&");
				title = title.replace(/&egrave;/gi, "è");
				title = title.replace(/&euml;/gi, "ë");
				desc = desc.replace(/\n/gi, " ");
				desc = desc.replace(/<br \/>/gi, "");
				desc = desc.replace(/&amp;/gi, "&");
				desc = desc.replace(/&Aring;/gi, "Ä");
				desc = desc.replace(/&aring;/gi, "ä");
				desc = desc.replace(/&eacute;/gi, "é");
				desc = desc.replace(/&ouml;/gi, "ö");
				desc = desc.replace(/&egrave;/gi, "è");
				desc = desc.replace(/&euml;/gi, "ë");

				// Create a table row for this item
				var row = Ti.UI.createTableViewRow(style.tableViewRowNieuws);

				var post_title = Ti.UI.createLabel(Stuk.combine(style.titleFeeds, {
					text : title
				}));
				row.add(post_title);

				var post_desc = Ti.UI.createLabel(Stuk.combine(style.textFeed, {
					text : desc
				}));
				row.add(post_desc);

				var post_date = Ti.UI.createLabel(Stuk.combine(style.feedDate, {
					text : date
				}));
				row.add(post_date);
				
				var viewBlue;
				if(Ti.Platform.osname!=='android'){
					viewBlue = Titanium.UI.createView(Stuk.combine(style.viewBlue,{
						top:-19
					}));
				}else{
					viewBlue = Titanium.UI.createView(Stuk.combine(style.viewBlue,{
						top:-7
					}));
				}
				

				// Add some rowData for when it is clicked
				row.thisTitle = title;
				row.thisLink = link;
				row.thisDesc = desc;
				row.add(viewBlue);
				

				// Add the row to the data
				data[i] = row;
				i++;

			};

			// create the table
			var feedTableView;
			if(Ti.Platform.osname!=='android'){
				feedTableView = Titanium.UI.createTableView(Stuk.combine(style.TableView, {
					data : data
				}));
			}else{
				feedTableView = Titanium.UI.createTableView(Stuk.combine(style.TableViewAndroid, {
					data : data
				}));
			}
			nieuwsWindow.add(feedTableView);

			//WEBVIEW OPENEN VAN NIEUWSITEM
			feedTableView.addEventListener('click', function(e) {
				//Titanium.App.selectedItemNieuws = e.rowData.thisLink;
				if (Ti.Platform.osname === 'android') {
					Titanium.App.selectedItemNieuws = e.rowData.thisLink;
					Titanium.App.selectedItemNieuws = "http://m.demorgen.be/dm-muziek.html";
					//Ti.API.info(Titanium.App.selectedItemNieuws);
					nieuwsWindow.containingTab.open(Stuk.ui.createNieuwsDetailWindow());		
				}else{
					Titanium.App.selectedItemNieuws = e.rowData.thisLink;
					Titanium.App.navTab2.open(Stuk.ui.createNieuwsDetailWindow(), {
						animated : false
					});
				}

			});
		};

		function loadRSSFeed(url) {
			data = [];
			xhr = Titanium.Network.createHTTPClient();

			xhr.onload = function() {
				try {
					// Now parse the feed XML
					var xml = this.responseXML;

					// Find the channel element
					var channel = xml.documentElement.getElementsByTagName("channel");
					feedTitle = channel.item(0).getElementsByTagName("title").item(0).text;

					// Find the RSS feed 'items'
					var itemList = xml.documentElement.getElementsByTagName("item");

					// Now add the items to a tableView
					displayNieuws(itemList);
					Stuk.ui.activityIndicator.hideModal();

				} catch(e) {
					alert(e);
				}
			};
			xhr.open('GET', url);
			xhr.send();
		};

		return nieuwsWindow;
	}
})();
