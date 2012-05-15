/*
 * Detail window
 */

(function() {
	Stuk.ui.createNieuwsDetailWindow = function() {
		
		var detailWin = Titanium.UI.createWindow(Stuk.combine(style.Window, {
			barImage : 'img/header_nieuws.png'
		}));
		
		if(Ti.Platform.osname!=='android'){
			// LEFT NAVBAR BACK BUTTON
			var backButton = Titanium.UI.createButton(style.backButton);
			backButton.addEventListener('click', function() {
				Titanium.App.navTab2.close(detailWin, {
					animated : false
				});
			});
			detailWin.leftNavButton = backButton;

		
			detailWin.addEventListener('blur', function(e) {
				Titanium.App.navTab2.close(detailWin, {
					animated : false
				});
			});
			detailWin.addEventListener('close', function(e) {
				Titanium.App.navTab2.close(detailWin, {
					animated : false
				});
			});
		}
		var navActInd = Titanium.UI.createActivityIndicator({
			style:Ti.UI.iPhone.ActivityIndicatorStyle.DARK
		});

		detailWin.addEventListener('open', function(e) {
			if(Ti.Platform.osname!=='android'){
				detailWin.setRightNavButton(navActInd);
			}
			navActInd.show();
		});

		var webview;
		if(Ti.Platform.osname==='android'){
			webview = Titanium.UI.createWebView(Stuk.combine(style.webViewFeedAndroid,{
				url : Titanium.App.selectedItemNieuws
			}));
		}else{
			webview = Titanium.UI.createWebView(Stuk.combine(style.webViewFeed,{
				url : Titanium.App.selectedItemNieuws
			}));
		}
		
		webview.addEventListener('load', function() {
			navActInd.hide();
		});
		
		detailWin.add(webview);

		return detailWin;
	};
})();
