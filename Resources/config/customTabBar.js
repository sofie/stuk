/**
 * Tutorial: Custom iPhone tabbar using Appcelerator Titanium
 * http://www.samjordan.co.uk/2011/02/tutorial-custom-iphone-tabbar-using-appcelerator-titanium/
 * 
 * https://github.com/netsells/customTabBar
 */

CustomTabBar = function(settings) {
	var tabBarItems = [];
	var	tabCurrent = 0;
	
	var resetTabs = function() {
		for(var i = 0; i < tabBarItems.length; i++) {
			tabBarItems[i].image = settings.imagePath+"clear.png";
		}
	};
	
	var assignClick = function(tabItem) {
		tabItem.addEventListener('click', function(e) {
			var pos = e.source.pos;

			if (tabCurrent == pos) {
				// TODO
				// Change back to root window, like the native tab action.
    			return false;
	        }		
			
			// Switch to the tab associated with the image pressed
			settings.tabBar.tabs[pos].active = true;
			tabCurrent = pos;

			
			// Reset all the tab images
			resetTabs();
			
			// Set the current tab as selected
			tabBarItems[pos].image = settings.imagePath + settings.items[pos].selected;		
		});
	};
	
	// Create the container for our tab items
	var customTabBar = Ti.UI.createWindow({
		height: settings.height,
		bottom: 0
	});
	
	
	for(var i = 0; i < settings.items.length; i++) {
		tabBarItems[i] = Titanium.UI.createImageView({
			backgroundImage: settings.imagePath + settings.items[i].image,
			
			image: settings.imagePath + settings.items[i].selected,
			width: settings.items[i].width,
			height: settings.height,
			left: settings.items[0].width * i
		});

		// Pass the item number (used later for changing tabs)
		tabBarItems[i].pos = i;
		assignClick(tabBarItems[i]);

		// Add to the container window
		customTabBar.add(tabBarItems[i]);
	}

	// Display the container and it's items
	settings.tabBar.add(customTabBar);
	customTabBar.open();

	// Set the first item as current :)
	resetTabs();
	tabBarItems[0].image = settings.imagePath + settings.items[0].selected;
	
	return {
		hide: function() { customTabBar.hide(); },
		show: function() { customTabBar.show(); }
	};
};
