/*
 * Main window met tabgroup en navgroup
 */
Ti.include(
	'/config/config.js',
	'/config/activityIndicator.js',
	'/styles/styles.js',
	
	'/windows/concerten.js', 
	'/windows/nieuws.js', 
	'/windows/locatie.js',
	'/windows/info.js'
);

(function() {

	Stuk.ui.createApplicationMainWin = function() {

		var tabGroup = Titanium.UI.createTabGroup(style.tabGroup);
		Titanium.App.tabgroup = tabGroup;

	    var navWindow1;
	    var mainWindow1= Stuk.ui.createConcertenWindow();
	    var navWindow2;
	    var mainWindow2= Stuk.ui.createNieuwsWindow();
	    var navWindow3;
	    var mainWindow3= Stuk.ui.createLocatieWindow();
	    var navWindow4;
	    var mainWindow4= Stuk.ui.createInfoWindow();
	    
	    if (Ti.Platform.osname === 'android') {
	    	navWindow1 = Ti.UI.createWindow({
				navBarHidden : false,
				tabBarHidden : false
			});
			Ti.App.navWin1 = navWindow1;
			navWindow2 = Ti.UI.createWindow({
				navBarHidden : false,
				tabBarHidden : false
			});
			navWindow3 = Ti.UI.createWindow({
				navBarHidden : false,
				tabBarHidden : false
			});
			navWindow4 = Ti.UI.createWindow({
				navBarHidden : false,
				tabBarHidden : false
			});
	        Stuk.navGroup = {
	            open: function (win, obj) {
	                win.open(obj);
	            },
	            close: function (win, obj) {
	                win.close(obj);
	            }
	        };
	        navWindow1 = mainWindow1;
	        navWindow2 = mainWindow2;
	        navWindow3 = mainWindow3;
	        navWindow4 = mainWindow4;
	    } else {
	    	//TAB 1
	        navWindow1 = Ti.UI.createWindow({
				navBarHidden : true,
				tabBarHidden : true
			});
	        navTab1 = Ti.UI.iPhone.createNavigationGroup({
	            window: mainWindow1
	        });
	        Titanium.App.navTab1 = navTab1;
	        navWindow1.add(navTab1);
	        
	        //TAB 2
	        navWindow2 = Ti.UI.createWindow({
				navBarHidden : true,
				tabBarHidden : true
			});
	        navTab2 = Ti.UI.iPhone.createNavigationGroup({
	            window: mainWindow2
	        });
	        Titanium.App.navTab2 = navTab2;
	        navWindow2.add(navTab2);
	        
	        //TAB 3
	        navWindow3 = Ti.UI.createWindow({
				navBarHidden : true,
				tabBarHidden : true
			});
	        navTab3 = Ti.UI.iPhone.createNavigationGroup({
	            window: mainWindow3
	        });
	        Titanium.App.navTab3 = navTab3;
	        navWindow3.add(navTab3);
	        
	        //TAB 4
	        navWindow4 = Ti.UI.createWindow({
				navBarHidden : true,
				tabBarHidden : true
			});
	        navTab4 = Ti.UI.iPhone.createNavigationGroup({
	            window: mainWindow4
	        });
	        Titanium.App.navTab4 = navTab4;
	        navWindow4.add(navTab4);
	        
	        //CUSTOM TAB
			//Tutorial: Custom iPhone tabbar using Appcelerator Titanium
			//http://www.samjordan.co.uk/2011/02/tutorial-custom-iphone-tabbar-using-appcelerator-titanium/
			Ti.include("config/customTabBar.js");
	
			var myCustomTabBar = new CustomTabBar({
				tabBar : tabGroup,
				imagePath : '/img/customTabBar/',
				height : 40,
				items : [{
					image : Stuk.customTab1,
					selected : Stuk.customTab1_selected,
					width:95
				}, {
					image : Stuk.customTab2,
					selected : Stuk.customTab2_selected,
					width:95
				}, {
					image : Stuk.customTab3,
					selected : Stuk.customTab3_selected,
					width:95
				}, {
					image : Stuk.customTab4,
					selected : Stuk.customTab4_selected,
					width:35
				}]
			});

	    }
   		
	    if (Ti.Platform.osname !== 'android') {
	        Ti.UI.orientation = Ti.UI.PORTRAIT;
	    }
		
		//TAB GROUP
		var tab1 = Titanium.UI.createTab({
			window : navWindow1,
			title: Stuk.tab1_name
		});
		navWindow1.containingTab = tab1;
		Ti.App.tab1 = tab1;
		
		var tab2 = Titanium.UI.createTab({
			window : navWindow2,
			title: Stuk.tab2_name
		});
		navWindow2.containingTab = tab2;
		Ti.App.tab2 = tab2;
		
		var tab3 = Titanium.UI.createTab({
			window : navWindow3,
			title: Stuk.tab3_name
		});
		var tab4 = Titanium.UI.createTab({
			window : navWindow4,
			title: Stuk.tab4_name,
			icon:'/img/icon_info.png'
		});


		tabGroup.addTab(tab1);
		tabGroup.addTab(tab2);
		tabGroup.addTab(tab3);
		tabGroup.addTab(tab4);

		tabGroup.open();

		
		return tabGroup;
	}
})();
