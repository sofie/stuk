var Stuk = {
	ui : {},
	api_key : '147c56bc-ae80-4b2f-b246-b83e55f364fc',
	organizer : '269AFC18-AEF7-603E-F134EC26BBAA13BE',

	url_news_feed : 'http://www.demorgen.be/cache/rss_muziek.xml',
	app_name : 'STUK',
	app_site : 'http://www.stuk.be/',
	app_mail :'info@stuk.be',
	app_tel: '016 320 300',

	tab1_name : 'Programma',
	tab2_name : 'Nieuws',

	//Tabgroup
	customTab1 : 'btn_programma.png',
	customTab1_selected : 'btn_programma_selected.png',
	customTab2 : 'btn_nieuws.png',
	customTab2_selected : 'btn_nieuws_selected.png',
	customTab3 : 'btn_locatie.png',
	customTab3_selected : 'btn_locatie_selected.png',
	
	basic_font:'Arial'
};

Ti.include('windows/main.js');

/*if(Titanium.Network.online===false){
	Titanium.UI.createAlertDialog({
		title:'Geen internet'
	}).show();
}else{*/
	Stuk.ui.createApplicationMainWin();
//}

