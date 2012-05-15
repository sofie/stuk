(function() {
	Stuk.ui.theme = {
		greyColor : '#464646',
		blueColor:'#DEE7CD',
		darkGreyColor: '#474747',
		darkBlue : '#2F6885',
		font : {
			fontFamily : 'Arial'
		}
	};

	Stuk.ui.properties = {
		platformWidth : Ti.Platform.displayCaps.platformWidth,
		platformHeight : Ti.Platform.displayCaps.platformHeight,

		Window : {
			width : '100%',
			backgroundColor : '#fff',
			tabBarHidden : true,
			barColor:'black'
		},
		DetailWindow : {
			width : '100%',
			backgroundImage:'img/bg.png',
			tabBarHidden : true,
		},
		tabGroup:{
			backgroundColor : '#fff'
		},
		scrollView : {
			contentWidth : 'auto',
			contentHeight : 'auto',
			showVerticalScrollIndicator : true,
			layout : 'vertical',
			top : 0,
			bottom : 40,
			verticalBounce:true
		},
		scrollViewAndroid : {
			contentWidth : 'auto',
			contentHeight : 'auto',
			showVerticalScrollIndicator : true,
			layout : 'vertical',
			top : 0,
			bottom : 0,
			verticalBounce:true
		},
		

		//
		// BUTTONS
		//
		backButton : {
			backgroundImage : "img/btn_back.png",
			width : 53,
			height : 22
		},
		searchButton : {
			backgroundImage : "img/btn_zoek.png",
			width : 53,
			height : 22
		},
		refreshButton : {
			backgroundImage : "img/btn_refresh.png",
			width : 50,
			height : 44
		},
		prevButton : {
			backgroundImage : 'img/prev.png',
			height : 14,
			width : 14,
			left : 20
		},
		nextButton : {
			backgroundImage : 'img/next.png',
			height : 14,
			width : 14,
			right : 20
		},

		//
		//IMAGEVIEWS
		//
		Img90 : {
			backgroundColor : '#fff',
			width : 105,
			height : 80,
			left : 0,
			top : 0
		},
		Img320 : {
			width : Ti.Platform.displayCaps.platformWidth,
			height : 175,
			top : 0,
			left : 0
		},

		//
		// VIEWS
		//
		TableView : {
			top : 0,
			left : 0,
			right : 0,
			bottom : 40,
		},
		TableViewAndroid : {
			top : 0,
			left : 0,
			right : 0,
			bottom :0,
			backgroundColor : '#fff'
		},
		TableViewConcerten : {
			top : 35,
			left : 0,
			right : 0,
			bottom : 40,
			backgroundColor : '#fff'
		},
		TableViewConcertenAndroid : {
			top : 35,
			left : 0,
			right : 0,
			bottom : 0,
			backgroundColor : '#fff'
		},
		TableViewSearch : {
			top : 44,
			left : 0,
			right : 0,
			bottom : 373,
			backgroundColor : '#fff',
			scrollable : true
		},
		tableViewRow : {
			rightImage : 'img/arrow.png',
			backgroundColor : '#fff',
			selectedBackgroundColor : '#B8DAE8',
			backgroundSelectedColor : '#B8DAE8',
			height : 100,
			bottom:65,
		},
		tableViewRowNieuws : {
			rightImage : 'img/arrow.png',
			backgroundImage : 'img/bg_row.jpg',
			backgroundColor : '#fff',
			selectedBackgroundColor : '#B8DAE8',
			backgroundSelectedColor : '#B8DAE8',
			height : 150,
			bottom:65,
			layout : 'vertical'
		},

		searchBar : {
			backgroundImage : 'img/bg_search.png',
			width : Ti.Platform.displayCaps.platformWidth,
			height : 43,
			top : 0,
			left : 0
		},
		toolBar : {
			width : Ti.Platform.displayCaps.platformWidth,
			height : 25,
			top : 0,
			backgroundImage : 'img/toolbar.png'
		},
		viewTitleBg : {
			width : 300,
			backgroundColor : '#ffffff',
			height : 35,
			left:20,
			top : 0,
			right : 0
		},
		
		viewBlue : {
			width:250,
			height:10,
			backgroundColor: '#dee7cd',
			bottom:0,
			left:0
		},				
		footerView : {
			backgroundColor : '#fff',
			height : 40,
			left : 20,
			right : 0,
			top : 20,
			bottom : 10
		},
		
		webViewFeed : {
			width : 440,
			left : 0,
			top :0,
			bottom : 40
		},
		webViewFeedAndroid : {
			width : 440,
			left : 0,
			top :0,
			bottom : 0
		},
		
		//
		// LABELS
		//
		titleBar : {
			color : '#474747',
			font : {
				fontSize : 22,
				fontFamily : 'Arial',
				fontWeight : 'bold'
			}
		},

		//TAB1
		titleNaam : {
			left : 115,
			top : 3,
			width : 190,
			height : 20,
			textAlign : 'left',
			color : '#464646',
			font : {
				fontFamily : 'Arial',
				fontWeight : 'bold',
				fontSize : 14
			}
		},
		textLocationTitle:{
			color : '#464646',
			font : {
				fontFamily : 'Arial',
				fontWeight : 'bold',
				fontSize : 14
			},
			top:20,
			left:30,
			width:260,
			height:32
		},
		textLocation:{
			color : '#2F6885',
			font : {
				fontFamily : 'Arial',
				fontWeight : 'bold',
				fontSize : 14
			},
			top:20,
			left:30,
			width:260
		},
		textPerformers : {
			left : 115,
			top : 22,
			width : 190,
			height : 15,
			textAlign : 'left',
			color : '#2F6885',
			font : {
				fontFamily : 'Arial',
				fontWeight : 'bold',
				fontSize : 14
			}
		},
		textDescription : {
			bottom : 40,
			left : 115,
			width : 190,
			height : 14,
			textAlign : 'left',
			color : '#464646',
			font : {
				fontFamily : 'Arial',
				fontSize : 13
			}
		},
		textLocationDescription : {
			left : 30,
			width : 260,
			top:0,
			textAlign : 'left',
			color : '#464646',
			font : {
				fontFamily : 'Arial',
				fontSize : 13
			}
		},
		textHeading : {
			left : 115,
			right:10,
			bottom : 24,
			height : 17,
			textAlign : 'left',
			color : '#2F6885',
			font : {
				fontFamily : 'Arial',
				fontWeight : 'bold',
				fontSize : 13
			}
		},
		titleDetail : {
			textAlign : 'left',
			font : {
				fontFamily : 'Arial',
				fontSize : 17,
				fontWeight:'bold'
			},
			color : '#464646',
			width : 280,
			height : 25,
			top : -30,
			left : 30
		},
		textBlueBold : {
			textAlign : 'left',
			color : '#2F6885',
			font : {
				fontFamily : 'Arial',
				fontWeight : 'bold',
				fontSize : 13
			},
			height : 17,
			left : 30,
			top:0
		},
		textGreyBold : {
			textAlign : 'left',
			color : '#464646',
			font : {
				fontFamily : 'Arial',
				fontWeight : 'bold',
				fontSize : 13
			},
			width : 280,
			left : 30,
			top:15
		},
		textDescriptionDetail : {
			textAlign : 'left',
			font : {
				fontFamily : 'Arial',
				fontSize : 12
			},
			color : '#464646',
			left:30,
			right:30,
			top:10,
			width:260
		},
		textPrice : {
			textAlign : 'left',
			color : '#464646',
			font : {
				fontFamily : 'Arial',
				fontSize : 12
			},
			left : 30,
			//top:-14 als ticket wel op window
			top:20,
			width:260
		},
		
		textTickets:{
			textAlign : 'left',
			font : {
				fontFamily : 'Arial',
				fontSize : 12,
				fontWeight: 'bold'
			},
			color : '#2D6883',
			top : 20,
			left :245,
			height:12
		},		
		textFooter : {
			textAlign : 'left',
			font : {
				fontFamily : 'Arial',
				fontSize : 11
			},
			color : '#464646',
			height:40
		},
		SearchField : {
			color : '#b3b3b3',
			font : {
				fontFamily : 'Tahoma',
				fontSize : 13
			},
			returnKeyType : Titanium.UI.RETURNKEY_SEARCH,
			width : 265,
			height : 30,
			top : 7,
			left : 40,
		},

		textInstruction : {
			font : {
				fontFamily : 'Arial',
				fontSize : 13
			},
			color : '#555',
			left : 20,
			right : 20,
			height : 40,
			top : 60
		},
		textError:{
			left : 30,
			height : 40,
			top : 45,
			color : '#2F6885',
			font : {
				fontFamily : 'Arial',
				fontWeight : 'bold',
				fontSize : 13
			}
		},
		viewBlue : {
			width:250,
			height:10,
			backgroundColor: '#dee7cd',
			bottom:0,
			left:0
		},

		//TAB2
		titleFeeds : {
			height : 'auto',
			width : 270,
			left : 20,
			top : 5,
			textAlign : 'left',
			font : {
				fontFamily : 'Arial',
				fontSize : 18
			}
		},
		textFeed : {
			color : '#000',
			textAlign : 'left',
			top : 0,
			left : 20,
			height : 43,
			width : 270,
			font : {
				fontFamily : 'Arial',
				fontSize : 11
			}
		},
		feedDate : {
			color : '#000',
			textAlign : 'left',
			font : {
				fontFamily : 'Arial',
				fontSize : 11,
				fontWeight : 'bold'
			},
			width : 270,
			top : 0,
			left : 20,
			bottom : 10
		},

		//
		//ACTIVITYINDICATOR
		//
		backgroundView : {
			backgroundColor : '#000',
			height : '100%',
			width : '100%',
			opacity : 0.6
		},
		activityIndicator : {
			style : Titanium.UI.iPhone.ActivityIndicatorStyle.PLAIN,
			color : '#fff',
			font : {
				fontFamily:'Arial',
				fontSize : 14
			}
		}

	};
})();

//Shortcut for UI properties
var style = Stuk.ui.properties;
