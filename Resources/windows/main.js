/*
 * Main window met tabgroup en navgroup
 */
Ti.include(
	'/config/config.js',
	'/config/activityIndicator.js',
	'/styles/styles.js',
	
	'/windows/concerten.js', 
	'/windows/nieuws.js', 
	'/windows/locatie.js' 
);

(function() {

	Stuk.ui.createApplicationMainWin = function() {

		var tabGroup = Titanium.UI.createTabGroup(style.tabGroup);
		Titanium.App.tabgroup = tabGroup;

		// EERSTE TAB
		var mainWinTab1 = Stuk.ui.createConcertenWindow();
		
		var navTab1 = Titanium.UI.iPhone.createNavigationGroup({
			window : mainWinTab1
		});
		Titanium.App.navTab1 = navTab1;
		var baseWinTab1 = Titanium.UI.createWindow({
			navBarHidden : true,
			tabBarHidden : true
		});
		baseWinTab1.add(navTab1);

		// TWEEDE TAB
		var mainWinTab2 = Stuk.ui.createNieuwsWindow();

		var navTab2 = Titanium.UI.iPhone.createNavigationGroup({
			window : mainWinTab2
		});
		Titanium.App.navTab2 = navTab2;

		var baseWinTab2 = Titanium.UI.createWindow({
			navBarHidden : true,
			tabBarHidden : true
		});
		baseWinTab2.add(navTab2);
		
		// DERDE TAB
		var mainWinTab3 = Stuk.ui.createLocatieWindow();

		var navTab3 = Titanium.UI.iPhone.createNavigationGroup({
			window : mainWinTab3
		});
		Titanium.App.navTab3 = navTab3;

		var baseWinTab3 = Titanium.UI.createWindow({
			navBarHidden : true,
			tabBarHidden : true
		});
		baseWinTab3.add(navTab3);

		//TAB GROUP
		var tab1 = Titanium.UI.createTab({
			window : baseWinTab1
		});

		var tab2 = Titanium.UI.createTab({
			window : baseWinTab2
		});
		var tab3 = Titanium.UI.createTab({
			window : baseWinTab3
		});

		tabGroup.addTab(tab1);
		tabGroup.addTab(tab2);
		tabGroup.addTab(tab3);

		tabGroup.open();

		//CUSTOM TAB
		//Tutorial: Custom iPhone tabbar using Appcelerator Titanium
		//http://www.samjordan.co.uk/2011/02/tutorial-custom-iphone-tabbar-using-appcelerator-titanium/
		Ti.include("config/customTabBar.js");

		var myCustomTabBar = new CustomTabBar({
			tabBar : tabGroup,
			imagePath : '/img/customTabBar/',
			height : 40,
			width:107,
			items : [{
				image : Stuk.customTab1,
				selected : Stuk.customTab1_selected
			}, {
				image : Stuk.customTab2,
				selected : Stuk.customTab2_selected
			}, {
				image : Stuk.customTab3,
				selected : Stuk.customTab3_selected
			}]
		});

		return tabGroup;
	}
})();
