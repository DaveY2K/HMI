window.addEventListener('load', function() {
    document.querySelectorAll('.button-type img').forEach(function(img) {
        img.onload = function() {
            img.parentNode.style.width = `${img.naturalWidth}vw`;
            img.parentNode.style.height = `${img.naturalHeight}vh`;
        };
    });
});



var currentScreen = 'A';
var currentButtons = 'A';
var previousScreens = [];
var buttonStateToggled = false; // Hält fest, ob zwischen Button-Konfigurationen umgeschaltet wurde
// Erweiterte Button-Konfigurationen für die Screens "A", "B" und "C"




var buttonConfigurations = {
    'A': [
        { id: 'A1', image: 'uebersicht.png', targetScreen: 'A', buttonType: 'button-type-1' },
		{ id: 'A2', image: 'leer.png', targetScreen: 'D', buttonType: 'button-type-2' },
		{ id: 'A3', image: 'leer.png', targetScreen: 'E', buttonType: 'button-type-3' },
		{ id: 'A4', image: 'leer.png', targetScreen: 'F', buttonType: 'button-type-4' },
		{ id: 'A5', image: 'leer.png', targetScreen: 'G', buttonType: 'button-type-5' },
		{ id: 'A6', image: 'leer.png', targetScreen: 'AB', buttonType: 'button-type-6' },
		{ id: 'A7', image: 'leer.png', targetScreen: 'CH', buttonType: 'button-type-7' },
		{ id: 'A8', image: 'leer.png', targetScreen: 'A', buttonType: 'button-type-8' },
		{ id: 'A9', image: 'vorbereiten.png', targetScreen: 'AHB', buttonType: 'button-type-9' },
		{ id: 'A10', image: 'status.png', targetScreen: 'A', buttonType: 'button-type-10' },
		{ id: 'A11', image: 'handbetrieb.png', targetScreen: 'AI', buttonType: 'button-type-11' },
		{ id: 'A12', image: 'diagnose.png', targetScreen: 'AJ', buttonType: 'button-type-12' },
		{ id: 'A13', image: 'leer.png', targetScreen: '', buttonType: 'button-type-13' },
		{ id: 'A14', image: 'prozess.png', targetScreen: 'AK', buttonType: 'button-type-14' },
		{ id: 'A15', image: 'instandhalt.png', targetScreen: 'AL', buttonType: 'button-type-15' },
		{ id: 'A16', image: 'service.png', targetScreen: 'AM', buttonType: 'button-type-16' },
		{ id: 'A17', image: 'bbutton.png', targetScreen: 'A', buttonType: 'button-type-17' },
		{ id: 'A18', image: 'bbutton.png', targetScreen: 'A', buttonType: 'button-type-18' },
		
		
		 { id: 'A21', image: 'elektrikallgemein.png', targetScreen: 'D', buttonType: 'button-type-21' },
		{ id: 'A22', image: 'achsen.png', targetScreen: 'E', buttonType: 'button-type-22' },
		{ id: 'A23', image: 'kuehlaggregat.png', targetScreen: 'F', buttonType: 'button-type-23' },
		{ id: 'A24', image: 'mms.png', targetScreen: 'G', buttonType: 'button-type-24' },
		{ id: 'A25', image: 'hydraulikspannsystem.png', targetScreen: 'H', buttonType: 'button-type-25' },
		{ id: 'A26', image: 'werkzeugwechsler.png', targetScreen: 'CH', buttonType: 'button-type-26' },
		{ id: 'A27', image: 'steuerspannung.png', targetScreen: 'I', buttonType: 'button-type-27' },
		{ id: 'A28', image: 'spindeln.png', targetScreen: 'J', buttonType: 'button-type-28' },
		{ id: 'A29', image: 'bohrerbruchwerkzeugw.png', targetScreen: 'K', buttonType: 'button-type-29' },
		{ id: 'A30', image: 'grundstellung.png', targetScreen: 'L', buttonType: 'button-type-30' },
		{ id: 'A31', image: 'spaeneentsorgung.png', targetScreen: 'M', buttonType: 'button-type-31' },
		{ id: 'A32', image: 'hydraulikspanndruck.png', targetScreen: 'N', buttonType: 'button-type-32' },
		{ id: 'A33', image: 'nothalt.png', targetScreen: 'O', buttonType: 'button-type-33' },
		{ id: 'A34', image: 'absaugung.png', targetScreen: 'P', buttonType: 'button-type-34' },
		{ id: 'A35', image: 'schutztueren.png', targetScreen: 'R', buttonType: 'button-type-35' },
		{ id: 'A36', image: 'abblasventile.png', targetScreen: 'S', buttonType: 'button-type-36' },
		
		{ id: 'A37', image: 'auflagekontr18.png', targetScreen: 'T', buttonType: 'button-type-37' },
		{ id: 'A38', image: 'rolltorbeladestelle.png', targetScreen: 'U', buttonType: 'button-type-38' },
		{ id: 'A39', image: 'auflagekontr916.png', targetScreen: 'V', buttonType: 'button-type-39' },
		{ id: 'A40', image: 'pneumatikhauptluft.png', targetScreen: 'W', buttonType: 'button-type-40' },
		{ id: 'A41', image: 'hydraulikaggregat.png', targetScreen: 'Z', buttonType: 'button-type-41' },
		{ id: 'A42', image: 'schmierung.png', targetScreen: 'AA', buttonType: 'button-type-42' },
		{ id: 'A43', image: 'spannvorrallgemein.png', targetScreen: 'AB', buttonType: 'button-type-43' },
		{ id: 'A44', image: 'pneumatikspannsystem.png', targetScreen: 'AC', buttonType: 'button-type-44' },
		{ id: 'A45', image: 'pneumatikspanndruck.png', targetScreen: 'AD', buttonType: 'button-type-45' },
		 {id: 'A46', image: 'schnittstelle.png', targetScreen: "X", buttonType: 'button-type-75' },
	     {id: 'A47', image: 'jog.png', targetScreen: "X", buttonType: 'button-type-76' },
		  {id: 'A48', image: 'undo.png', targetScreen: "X", buttonType: 'button-type-77' },
		   {id: 'A49', image: 'screenShot.png', targetScreen: "X", buttonType: 'button-type-78' },
		  {id: 'A50', image: 'info.png', targetScreen: "X", buttonType: 'button-type-85' }
		  
	
		
        // Weitere Button-Konfigurationen für Screen "B"...
    ],
    'B': [
        { id: 'B1', image: 'indexierung.png', targetScreen: 'C', buttonType: 'button-type-1' },
		{ id: 'B2', image: 'palette.png', targetScreen: 'B', buttonType: 'button-type-2' },
        { id: 'B3', image: 'spannkrhyd.png', targetScreen: 'B', buttonType: 'button-type-3' },
		{ id: 'B4', image: 'spannkrpn.png', targetScreen: 'B', buttonType: 'button-type-4' },
		 { id: 'B5', image: 'spannkrpnhd.png', targetScreen: 'B', buttonType: 'button-type-5' },
		{ id: 'B6', image: 'auflagekontr.png', targetScreen: 'B', buttonType: 'button-type-6' },
		 { id: 'B7', image: 'abblasungpal.png', targetScreen: 'B', buttonType: 'button-type-7' },
		  { id: 'B8', image: 'leer.png', targetScreen: 'B', buttonType: 'button-type-8' },
		   { id: 'B17', image: 'bbutton.png', targetScreen: 'B', buttonType: 'button-type-17' },
		{ id: 'B18', image: 'bbutton.png', targetScreen: 'C', buttonType: 'button-type-18' },
		{ id: 'B19', image: 'next.png', targetScreen: 'BB', buttonType: 'button-type-19' },
		{ id: 'B20', image: 'next.png', targetScreen: 'B', buttonType: 'button-type-20' },
		
		],
		
		'BB': [
       
		
		{ id: 'B19', image: 'next.png', targetScreen: 'BB', buttonType: 'button-type-19' },
		{ id: 'B20', image: 'next.png', targetScreen: 'B', buttonType: 'button-type-20' },
		
		
		
		
        // Weitere Button-Konfigurationen für Screen "B".../
    ],
    'C': [
        { id: 'C1', image: 'leer.png', targetScreen: 'A', buttonType: 'button-type-1' },
		 { id: 'C2', image: 'leer.png', targetScreen: 'A', buttonType: 'button-type-2' },
		  { id: 'C3', image: 'leer.png', targetScreen: 'A', buttonType: 'button-type-3' },
		   { id: 'C4', image: 'leer.png', targetScreen: 'A', buttonType: 'button-type-4' },
         { id: 'C5', image: 'leer.png', targetScreen: 'A', buttonType: 'button-type-5' },
		  { id: 'C6', image: 'leer.png', targetScreen: 'A', buttonType: 'button-type-6' },
		   { id: 'C7', image: 'leer.png', targetScreen: 'A', buttonType: 'button-type-7' },
		    { id: 'C8', image: 'leer.png', targetScreen: 'A', buttonType: 'button-type-8' },
			
			{ id: 'C17', image: 'bbutton.png', targetScreen: 'C', buttonType: 'button-type-17' },
		{ id: 'C18', image: 'bbutton.png', targetScreen: 'C', buttonType: 'button-type-18' },
		
		
			 
			
             // elektrikallgemein
    ],
     'D': [
          
		   
		{ id: 'D1', image: 'elektrikallgemeinD.png', targetScreen: 'D', buttonType: 'button-type-1' },
		{ id: 'D2', image: 'steuerspannungD.png', targetScreen: 'I', buttonType: 'button-type-2' },
		{ id: 'D3', image: 'leer.png', targetScreen: '', buttonType: 'button-type-3' },
		{ id: 'D4', image: 'nothaltD.png', targetScreen: 'O', buttonType: 'button-type-4' },
		{ id: 'D5', image: 'schutztuerenD.png', targetScreen: 'R', buttonType: 'button-type-5' },
		{ id: 'D6', image: 'beladestelle.png', targetScreen: 'U', buttonType: 'button-type-6' },
		{ id: 'D7', image: 'pneumatik.png', targetScreen: 'W', buttonType: 'button-type-7' },
		{ id: 'D8', image: 'schmierungD.png', targetScreen: 'AA', buttonType: 'button-type-8' },
		{ id: 'D9', image: 'vorbereiten.png', targetScreen: 'AH', buttonType: 'button-type-9' },
		{ id: 'D10', image: 'status.png', targetScreen: 'D', buttonType: 'button-type-10' },
		{ id: 'D11', image: 'handbetrieb.png', targetScreen: 'AI', buttonType: 'button-type-11' },
		{ id: 'D12', image: 'diagnose.png', targetScreen: 'AJ', buttonType: 'button-type-12' },
		{ id: 'D13', image: 'leer.png', targetScreen: '', buttonType: 'button-type-13' },
		{ id: 'D14', image: 'prozess.png', targetScreen: 'AK', buttonType: 'button-type-14' },
		{ id: 'D15', image: 'instandhalt.png', targetScreen: 'AL', buttonType: 'button-type-15' },
		{ id: 'D16', image: 'service.png', targetScreen: 'AM', buttonType: 'button-type-16' },
		{ id: 'D17', image: 'bbbutton.png', targetScreen: 'A', buttonType: 'button-type-17' },
		{ id: 'D18', image: 'bbutton.png', targetScreen: 'D', buttonType: 'button-type-18' },
	
	
	
	],
	
	
	
	// achsen
    
	
	
	 'E': [
           
		   
		   
		{ id: 'E1', image: 'achsenE.png', targetScreen: 'E', buttonType: 'button-type-1' },
		{ id: 'E2', image: 'spindelE.png', targetScreen: 'J', buttonType: 'button-type-2' },
		{ id: 'E3', image: 'grundstell.png', targetScreen: 'L', buttonType: 'button-type-3' },
		{ id: 'E4', image: 'leer.png', targetScreen: '', buttonType: 'button-type-4' },
		{ id: 'E5', image: 'leer.png', targetScreen: '', buttonType: 'button-type-5' },
		{ id: 'E6', image: 'leer.png', targetScreen: '', buttonType: 'button-type-6' },
		{ id: 'E7', image: 'leer.png', targetScreen: '', buttonType: 'button-type-7' },
		{ id: 'E8', image: 'leer.png', targetScreen: '', buttonType: 'button-type-8' },
		{ id: 'E9', image: 'vorbereiten.png', targetScreen: 'AH', buttonType: 'button-type-9' },
		{ id: 'E10', image: 'status.png', targetScreen: 'E', buttonType: 'button-type-10' },
		{ id: 'E11', image: 'handbetrieb.png', targetScreen: 'AI', buttonType: 'button-type-11' },
		{ id: 'E12', image: 'diagnose.png', targetScreen: 'AJ', buttonType: 'button-type-12' },
		{ id: 'E13', image: 'leer.png', targetScreen: '', buttonType: 'button-type-13' },
		{ id: 'E14', image: 'prozess.png', targetScreen: 'AK', buttonType: 'button-type-14' },
		{ id: 'E15', image: 'instandhalt.png', targetScreen: 'AL', buttonType: 'button-type-15' },
		{ id: 'E16', image: 'service.png', targetScreen: 'AM', buttonType: 'button-type-16' },
		{ id: 'E17', image: 'bbbutton.png', targetScreen: 'A', buttonType: 'button-type-17' },
		{ id: 'E18', image: 'bbutton.png', targetScreen: 'D', buttonType: 'button-type-18' },
	
	
	
	// kuehlagregat
	
	],
	
	'F':  [
{ 'id': 'F1', image: 'kuehlaggr.png', 'targetScreen': 'F', 'buttonType': 'button-type-1' },
{ 'id': 'F2', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-2' },
{ 'id': 'F3', image: 'spaene.png', 'targetScreen': 'M', 'buttonType': 'button-type-3' },
{ 'id': 'F4', image: 'absaugungF.png', 'targetScreen': 'P', 'buttonType': 'button-type-4' },
{ 'id': 'F5', image: 'abblasvent.png', 'targetScreen': 'S', 'buttonType': 'button-type-5' },
{ 'id': 'F6', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-6' },
{ 'id': 'F7', image: 'hydraulik.png', 'targetScreen': 'Z', 'buttonType': 'button-type-7' },
{ 'id': 'F8', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-8' },
{ 'id': 'F9', image: 'vorbereiten.png', 'targetScreen': 'AH', 'buttonType': 'button-type-9' },
{ 'id': 'F10', image: 'status.png', 'targetScreen': 'F', 'buttonType': 'button-type-10' },
{ 'id': 'F11', image: 'handbetrieb.png', 'targetScreen': 'AI', 'buttonType': 'button-type-11' },
{ 'id': 'F12', image: 'diagnose.png', 'targetScreen': 'AJ', 'buttonType': 'button-type-12' },
{ 'id': 'F13', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-13' },
{ 'id': 'F14', image: 'prozess.png', 'targetScreen': 'AK', 'buttonType': 'button-type-14' },
{ 'id': 'F15', image: 'instandhalt.png', 'targetScreen': 'AL', 'buttonType': 'button-type-15' },
{ 'id': 'F16', image: 'service.png', 'targetScreen': 'AM', 'buttonType': 'button-type-16' },
{ 'id': 'F17', image: 'bbbutton.png', 'targetScreen': 'A', 'buttonType': 'button-type-17' },
{ 'id': 'F18', image: 'bbutton.png', 'targetScreen': 'D', 'buttonType': 'button-type-18' },


   
	
	
	
	],

// MMS

'G':  [

{ 'id': 'G1', image: 'mmsG.png', 'targetScreen': 'G', 'buttonType': 'button-type-1' },
{ 'id': 'G2', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-2' },
{ 'id': 'G3', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-3' },
{ 'id': 'G4', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-4' },
{ 'id': 'G5', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-5' },
{ 'id': 'G6', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-6' },
{ 'id': 'G7', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-7' },
{ 'id': 'G8', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-8' },
{ 'id': 'G9', image: 'vorbereiten.png', 'targetScreen': 'AH', 'buttonType': 'button-type-9' },
{ 'id': 'G10', image: 'status.png', 'targetScreen': 'G', 'buttonType': 'button-type-10' },
{ 'id': 'G11', image: 'handbetrieb.png', 'targetScreen': 'AI', 'buttonType': 'button-type-11' },
{ 'id': 'G12', image: 'diagnose.png', 'targetScreen': 'AJ', 'buttonType': 'button-type-12' },
{ 'id': 'G13', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-13' },
{ 'id': 'G14', image: 'prozess.png', 'targetScreen': 'AK', 'buttonType': 'button-type-14' },
{ 'id': 'G15', image: 'instandhalt.png', 'targetScreen': 'AL', 'buttonType': 'button-type-15' },
{ 'id': 'G16', image: 'service.png', 'targetScreen': 'AM', 'buttonType': 'button-type-16' },
{ 'id': 'G17', image: 'bbbutton.png', 'targetScreen': 'A', 'buttonType': 'button-type-17' },
{ 'id': 'G18', image: 'bbutton.png', 'targetScreen': 'D', 'buttonType': 'button-type-18' },



],


// hydraulikspannsystem



'H':  [
{ 'id': 'H1', image: 'hyspann.png', 'targetScreen': 'H', 'buttonType': 'button-type-1' },
{ 'id': 'H2', image: 'pneuspann.png', 'targetScreen': 'AC', 'buttonType': 'button-type-2' },
{ 'id': 'H3', image: 'hydruck.png', 'targetScreen': 'N', 'buttonType': 'button-type-3' },
{ 'id': 'H4', image: 'pneudruck.png', 'targetScreen': 'AD', 'buttonType': 'button-type-4' },
{ 'id': 'H5', image: 'auflag18.png', 'targetScreen': 'T', 'buttonType': 'button-type-5' },
{ 'id': 'H6', image: 'auflag916.png', 'targetScreen': 'V', 'buttonType': 'button-type-6' },
{ 'id': 'H7', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-7' },
{ 'id': 'H8', image: 'spvallgem.png', 'targetScreen': 'AB', 'buttonType': 'button-type-8' },
{ 'id': 'H9', image: 'vorbereiten.png', 'targetScreen': 'AH', 'buttonType': 'button-type-9' },
{ 'id': 'H10', image: 'status.png', 'targetScreen': 'H', 'buttonType': 'button-type-10' },
{ 'id': 'H11', image: 'handbetrieb.png', 'targetScreen': 'AI', 'buttonType': 'button-type-11' },
{ 'id': 'H12', image: 'diagnose.png', 'targetScreen': 'AJ', 'buttonType': 'button-type-12' },
{ 'id': 'H13', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-13' },
{ 'id': 'H14', image: 'prozess.png', 'targetScreen': 'AK', 'buttonType': 'button-type-14' },
{ 'id': 'H15', image: 'instandhalt.png', 'targetScreen': 'AL', 'buttonType': 'button-type-15' },
{ 'id': 'H16', image: 'service.png', 'targetScreen': 'AM', 'buttonType': 'button-type-16' },
{ 'id': 'H17', image: 'bbbutton.png', 'targetScreen': 'A', 'buttonType': 'button-type-17' },
{ 'id': 'H18', image: 'bbutton.png', 'targetScreen': 'D', 'buttonType': 'button-type-18' },





],

// werkzeugwechsler1

'CH':  [

{ 'id': 'CH1', image: 'werkzeugw.png', 'targetScreen': 'CH', 'buttonType': 'button-type-1' },
{ 'id': 'CH2', image: 'bohrerbruchI.png', 'targetScreen': 'AE', 'buttonType': 'button-type-2' },
{ 'id': 'CH3', image: 'beentladen.png', 'targetScreen': 'AG', 'buttonType': 'button-type-3' },
{ 'id': 'CH4', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-4' },
{ 'id': 'CH5', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-5' },
{ 'id': 'CH6', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-6' },
{ 'id': 'CH7', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-7' },
{ 'id': 'CH8', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-8' },
{ 'id': 'CH9', image: 'vorbereiten.png', 'targetScreen': 'AH ','buttonType': 'button-type-9' },
{ 'id': 'CH10', image: 'status.png', 'targetScreen': 'CH', 'buttonType': 'button-type-10' },
{ 'id': 'CH11', image: 'handbetrieb.png', 'targetScreen': 'AI', 'buttonType': 'button-type-11' },
{ 'id': 'CH12', image: 'diagnose.png', 'targetScreen': 'AJ', 'buttonType': 'button-type-12' },
{ 'id': 'CH13', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-13' },
{ 'id': 'CH14', image: 'prozess.png', 'targetScreen': 'AK', 'buttonType': 'button-type-14' },
{ 'id': 'CH15', image: 'instandhalt.png', 'targetScreen': 'AL', 'buttonType': 'button-type-15' },
{ 'id': 'CH16', image: 'service.png', 'targetScreen': 'AM', 'buttonType': 'button-type-16' },
{ 'id': 'CH17', image: 'bbbutton.png', 'targetScreen': 'A', 'buttonType': 'button-type-17' },
{ 'id': 'CH18', image: 'bbutton.png', 'targetScreen': 'D', 'buttonType': 'button-type-18' },

// ATC 1


{ 'id': 'CH19', image: 'atc2.png', 'targetScreen': 'Q', 'buttonType': 'button-type-46' },




],



// werkzeugwechsler2



'Q':  [

{ 'id': 'Q1', image: 'werkzeugw.png', 'targetScreen': 'CH', 'buttonType': 'button-type-1' },
{ 'id': 'Q2', image: 'bohrerbruchI.png', 'targetScreen': 'AE', 'buttonType': 'button-type-2' },
{ 'id': 'Q3', image: 'beentladen.png', 'targetScreen': 'AG', 'buttonType': 'button-type-3' },
{ 'id': 'Q4', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-4' },
{ 'id': 'Q5', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-5' },
{ 'id': 'Q6', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-6' },
{ 'id': 'Q7', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-7' },
{ 'id': 'Q8', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-8' },
{ 'id': 'Q9', image: 'vorbereiten.png', 'targetScreen': 'AH', 'buttonType': 'button-type-9' },
{ 'id': 'Q10', image: 'status.png', 'targetScreen': 'Q', 'buttonType': 'button-type-10' },
{ 'id': 'Q11', image: 'handbetrieb.png', 'targetScreen': 'AI', 'buttonType': 'button-type-11' },
{ 'id': 'Q12', image: 'diagnose.png', 'targetScreen': 'AJ', 'buttonType': 'button-type-12' },
{ 'id': 'Q13', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-13' },
{ 'id': 'Q14', image: 'prozess.png', 'targetScreen': 'AK', 'buttonType': 'button-type-14' },
{ 'id': 'Q15', image: 'instandhalt.png', 'targetScreen': 'AL', 'buttonType': 'button-type-15' },
{ 'id': 'Q16', image: 'service.png', 'targetScreen': 'AM', 'buttonType': 'button-type-16' },
{ 'id': 'Q17', image: 'bbbutton.png', 'targetScreen': 'A', 'buttonType': 'button-type-17' },
{ 'id': 'Q18', image: 'bbutton.png', 'targetScreen': 'D', 'buttonType': 'button-type-18' },

// ATC 2
{ 'id': 'Q19', image: 'atc1.png', 'targetScreen': 'CH', 'buttonType': 'button-type-47' },

],




// steuerspannung
'I':  [



{ 'id': 'I1', image: 'elektrikallg.png', 'targetScreen': 'D', 'buttonType': 'button-type-1' },
{ 'id': 'I2', image: 'steuersp.png', 'targetScreen': 'I', 'buttonType': 'button-type-2' },
{ 'id': 'I3', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-3' },
{ 'id': 'I4', image: 'nothaltD.png', 'targetScreen': 'O', 'buttonType': 'button-type-4' },
{ 'id': 'I5', image: 'schutztuerenD.png', 'targetScreen': 'R', 'buttonType': 'button-type-5' },
{ 'id': 'I6', image: 'beladestelle.png', 'targetScreen': 'U', 'buttonType': 'button-type-6' },
{ 'id': 'I7', image: 'pneumatik.png', 'targetScreen': 'W', 'buttonType': 'button-type-7' },
{ 'id': 'I8', image: 'schmierungD.png', 'targetScreen': 'AA', 'buttonType': 'button-type-8' },
{ 'id': 'I9', image: 'vorbereiten.png', 'targetScreen': 'AH', 'buttonType': 'button-type-9' },
{ 'id': 'I10', image: 'status.png', 'targetScreen': 'I', 'buttonType': 'button-type-10' },
{ 'id': 'I11', image: 'handbetrieb.png', 'targetScreen': 'AI', 'buttonType': 'button-type-11' },
{ 'id': 'I12', image: 'diagnose.png', 'targetScreen': 'AJ', 'buttonType': 'button-type-12' },
{ 'id': 'I13', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-13' },
{ 'id': 'I14', image: 'prozess.png', 'targetScreen': 'AK', 'buttonType': 'button-type-14' },
{ 'id': 'I15', image: 'instandhalt.png', 'targetScreen': 'AL', 'buttonType': 'button-type-15' },
{ 'id': 'I16', image: 'service.png', 'targetScreen': 'AM', 'buttonType': 'button-type-16' },
{ 'id': 'I17', image: 'bbbutton.png', 'targetScreen': 'A', 'buttonType': 'button-type-17' },
{ 'id': 'I18', image: 'bbutton.png', 'targetScreen': 'D', 'buttonType': 'button-type-18' },


],

// spindeln


'J':  [




{ 'id': 'J1', image: 'achsenJ.png', 'targetScreen': 'E', 'buttonType': 'button-type-1' },
{ 'id': 'J2', image: 'spindelJ.png', 'targetScreen': 'J', 'buttonType': 'button-type-2' },
{ 'id': 'J3', image: 'grundstell.png', 'targetScreen': 'L', 'buttonType': 'button-type-3' },
{ 'id': 'J4', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-4' },
{ 'id': 'J5', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-5' },
{ 'id': 'J6', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-6' },
{ 'id': 'J7', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-7' },
{ 'id': 'J8', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-8' },
{ 'id': 'J9', image: 'vorbereiten.png', 'targetScreen': 'AH', 'buttonType': 'button-type-9' },
{ 'id': 'J10', image: 'status.png', 'targetScreen': 'J', 'buttonType': 'button-type-10' },
{ 'id': 'J11', image: 'handbetrieb.png', 'targetScreen': 'AI', 'buttonType': 'button-type-11' },
{ 'id': 'J12', image: 'diagnose.png', 'targetScreen': 'AJ', 'buttonType': 'button-type-12' },
{ 'id': 'J13', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-13' },
{ 'id': 'J14', image: 'prozess.png', 'targetScreen': 'AK', 'buttonType': 'button-type-14' },
{ 'id': 'J15', image: 'instandhalt.png', 'targetScreen': 'AL', 'buttonType': 'button-type-15' },
{ 'id': 'J16', image: 'service.png', 'targetScreen': 'AM', 'buttonType': 'button-type-16' },
{ 'id': 'J17', image: 'bbbutton.png', 'targetScreen': 'A', 'buttonType': 'button-type-17' },
{ 'id': 'J18', image: 'bbutton.png', 'targetScreen': 'D', 'buttonType': 'button-type-18' },




],// bohrerbruchwerkzeugw
	
	
	
	
	'K':  [
	
	
{ 'id': 'K1', image: 'werkzeugwK.png', 'targetScreen': 'K', 'buttonType': 'button-type-1' },
{ 'id': 'K2', image: 'bohrerbruchK.png', 'targetScreen': 'AE', 'buttonType': 'button-type-2' },
{ 'id': 'K3', image: 'beentladen.png', 'targetScreen': 'AG', 'buttonType': 'button-type-3' },
{ 'id': 'K4', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-4' },
{ 'id': 'K5', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-5' },
{ 'id': 'K6', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-6' },
{ 'id': 'K7', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-7' },
{ 'id': 'K8', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-8' },
{ 'id': 'K9', image: 'vorbereiten.png', 'targetScreen': 'AH', 'buttonType': 'button-type-9' },
{ 'id': 'K10', image: 'status.png', 'targetScreen': 'K', 'buttonType': 'button-type-10' },
{ 'id': 'K11', image: 'handbetrieb.png', 'targetScreen': 'AI', 'buttonType': 'button-type-11' },
{ 'id': 'K12', image: 'diagnose.png', 'targetScreen': 'AJ', 'buttonType': 'button-type-12' },
{ 'id': 'K13', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-13' },
{ 'id': 'K14', image: 'prozess.png', 'targetScreen': 'AK', 'buttonType': 'button-type-14' },
{ 'id': 'K15', image: 'instandhalt.png', 'targetScreen': 'AL', 'buttonType': 'button-type-15' },
{ 'id': 'K16', image: 'service.png', 'targetScreen': 'AM', 'buttonType': 'button-type-16' },
{ 'id': 'K17', image: 'bbbutton.png', 'targetScreen': 'A', 'buttonType': 'button-type-17' },
{ 'id': 'K18', image: 'bbutton.png', 'targetScreen': 'D', 'buttonType': 'button-type-18' },
{ 'id': 'K19', image: 'atc2.png', 'targetScreen': 'AF', 'buttonType': 'button-type-46' },
	
	
	
	
	
	
	],
	
	
	
	// grundstellung
	
	'L':  [
	
	{ 'id': 'L1', image: 'achsenJ.png', 'targetScreen': 'E', 'buttonType': 'button-type-1' },
{ 'id': 'L2', image: 'spindelE.png', 'targetScreen': 'J', 'buttonType': 'button-type-2' },
{ 'id': 'L3', image: 'grundstellK.png', 'targetScreen': 'L', 'buttonType': 'button-type-3' },
{ 'id': 'L4', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-4' },
{ 'id': 'L5', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-5' },
{ 'id': 'L6', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-6' },
{ 'id': 'L7', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-7' },
{ 'id': 'L8', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-8' },
{ 'id': 'L9', image: 'vorbereiten.png', 'targetScreen': 'AH', 'buttonType': 'button-type-9' },
{ 'id': 'L10', image: 'status.png', 'targetScreen': 'L', 'buttonType': 'button-type-10' },
{ 'id': 'L11', image: 'handbetrieb.png', 'targetScreen': 'AI', 'buttonType': 'button-type-11' },
{ 'id': 'L12', image: 'diagnose.png', 'targetScreen': 'AJ', 'buttonType': 'button-type-12' },
{ 'id': 'L13', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-13' },
{ 'id': 'L14', image: 'prozess.png', 'targetScreen': 'AK', 'buttonType': 'button-type-14' },
{ 'id': 'L15', image: 'instandhalt.png', 'targetScreen': 'AL', 'buttonType': 'button-type-15' },
{ 'id': 'L16', image: 'service.png', 'targetScreen': 'AM', 'buttonType': 'button-type-16' },
{ 'id': 'L17', image: 'bbbutton.png', 'targetScreen': 'A', 'buttonType': 'button-type-17' },
{ 'id': 'L18', image: 'bbutton.png', 'targetScreen': 'D', 'buttonType': 'button-type-18' },

	
	

	
	
	],
	
	// spaeneentsorgung
	
	
	'M':  [
	
{ 'id': 'M1', image: 'kuehlaggregatM.png', 'targetScreen': 'F', 'buttonType': 'button-type-1' },
{ 'id': 'M2', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-2' },
{ 'id': 'M3', image: 'spaeneM.png', 'targetScreen': 'M', 'buttonType': 'button-type-3' },
{ 'id': 'M4', image: 'absaugungF.png', 'targetScreen': 'P', 'buttonType': 'button-type-4' },
{ 'id': 'M5', image: 'abblasvent.png', 'targetScreen': 'S', 'buttonType': 'button-type-5' },
{ 'id': 'M6', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-6' },
{ 'id': 'M7', image: 'hydraulik.png', 'targetScreen': 'Z', 'buttonType': 'button-type-7' },
{ 'id': 'M8', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-8' },
{ 'id': 'M9', image: 'vorbereiten.png', 'targetScreen': 'AH', 'buttonType': 'button-type-9' },
{ 'id': 'M10', image: 'status.png', 'targetScreen': 'M', 'buttonType': 'button-type-10' },
{ 'id': 'M11', image: 'handbetrieb.png', 'targetScreen': 'AI', 'buttonType': 'button-type-11' },
{ 'id': 'M12', image: 'diagnose.png', 'targetScreen': 'AJ', 'buttonType': 'button-type-12' },
{ 'id': 'M13', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-13' },
{ 'id': 'M14', image: 'prozess.png', 'targetScreen': 'AK', 'buttonType': 'button-type-14' },
{ 'id': 'M15', image: 'instandhalt.png', 'targetScreen': 'AL', 'buttonType': 'button-type-15' },
{ 'id': 'M16', image: 'service.png', 'targetScreen': 'AM', 'buttonType': 'button-type-16' },
{ 'id': 'M17', image: 'bbbutton.png', 'targetScreen': 'A', 'buttonType': 'button-type-17' },
{ 'id': 'M18', image: 'bbutton.png', 'targetScreen': 'D', 'buttonType': 'button-type-18' },

	

	
	
	],
	
	
	// hydraulikspanndruck
	
	
	
	'N': [
	
	{ 'id': 'N1', image: 'hyspannT.png', 'targetScreen': 'H', 'buttonType': 'button-type-1' },
{ 'id': 'N2', image: 'pneuspann.png', 'targetScreen': 'AC', 'buttonType': 'button-type-2' },
{ 'id': 'N3', image: 'hydruckN.png', 'targetScreen': 'N', 'buttonType': 'button-type-3' },
{ 'id': 'N4', image: 'pneudruck.png', 'targetScreen': 'AD', 'buttonType': 'button-type-4' },
{ 'id': 'N5', image: 'auflag18.png', 'targetScreen': 'T', 'buttonType': 'button-type-5' },
{ 'id': 'N6', image: 'auflag916.png', 'targetScreen': 'V', 'buttonType': 'button-type-6' },
{ 'id': 'N7', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-7' },
{ 'id': 'N8', image: 'spvallgem.png', 'targetScreen': 'AB', 'buttonType': 'button-type-8' },
{ 'id': 'N9', image: 'vorbereiten.png', 'targetScreen': 'AH', 'buttonType': 'button-type-9' },
{ 'id': 'N10', image: 'status.png', 'targetScreen': 'N', 'buttonType': 'button-type-10' },
{ 'id': 'N11', image: 'handbetrieb.png', 'targetScreen': 'AI', 'buttonType': 'button-type-11' },
{ 'id': 'N12', image: 'diagnose.png', 'targetScreen': 'AJ', 'buttonType': 'button-type-12' },
{ 'id': 'N13', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-13' },
{ 'id': 'N14', image: 'prozess.png', 'targetScreen': 'AK', 'buttonType': 'button-type-14' },
{ 'id': 'N15', image: 'instandhalt.png', 'targetScreen': 'AL', 'buttonType': 'button-type-15' },
{ 'id': 'N16', image: 'service.png', 'targetScreen': 'AM', 'buttonType': 'button-type-16' },
{ 'id': 'N17', image: 'bbbutton.png', 'targetScreen': 'A', 'buttonType': 'button-type-17' },
{ 'id': 'N18', image: 'bbutton.png', 'targetScreen': 'D', 'buttonType': 'button-type-18' },

	

	
	
	],
	
	
	// nothalt
	
	'O': [
	
	
	
	{ 'id': 'O1', image: 'elektrikallg.png', 'targetScreen': 'D', 'buttonType': 'button-type-1' },
{ 'id': 'O2', image: 'steuerspannungD.png', 'targetScreen': 'I', 'buttonType': 'button-type-2' },
{ 'id': 'O3', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-3' },
{ 'id': 'O4', image: 'nothaltO.png', 'targetScreen': 'O', 'buttonType': 'button-type-4' },
{ 'id': 'O5', image: 'schutztuerenD.png', 'targetScreen': 'R', 'buttonType': 'button-type-5' },
{ 'id': 'O6', image: 'beladestelle.png', 'targetScreen': 'A', 'buttonType': 'button-type-6' },
{ 'id': 'O7', image: 'pneumatik.png', 'targetScreen': 'A', 'buttonType': 'button-type-7' },
{ 'id': 'O8', image: 'schmierungD.png', 'targetScreen': 'A', 'buttonType': 'button-type-8' },
{ 'id': 'O9', image: 'vorbereiten.png', 'targetScreen': 'AH', 'buttonType': 'button-type-9' },
{ 'id': 'O10', image: 'status.png', 'targetScreen': 'O', 'buttonType': 'button-type-10' },
{ 'id': 'O11', image: 'handbetrieb.png', 'targetScreen': 'AI', 'buttonType': 'button-type-11' },
{ 'id': 'O12', image: 'diagnose.png', 'targetScreen': 'AJ', 'buttonType': 'button-type-12' },
{ 'id': 'O13', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-13' },
{ 'id': 'O14', image: 'prozess.png', 'targetScreen': 'AK', 'buttonType': 'button-type-14' },
{ 'id': 'O15', image: 'instandhalt.png', 'targetScreen': 'AL', 'buttonType': 'button-type-15' },
{ 'id': 'O16', image: 'service.png', 'targetScreen': 'AM', 'buttonType': 'button-type-16' },
{ 'id': 'O17', image: 'bbbutton.png', 'targetScreen': 'A', 'buttonType': 'button-type-17' },
{ 'id': 'O18', image: 'bbutton.png', 'targetScreen': 'D', 'buttonType': 'button-type-18' },

	
	
	
	
	
	],
	
	
	// absaugung
	
	'P': [
	
	{ 'id': 'P1', image: 'kuehlaggregatM.png', 'targetScreen': 'F', 'buttonType': 'button-type-1' },
{ 'id': 'P2', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-2' },
{ 'id': 'P3', image: 'spaene.png', 'targetScreen': 'M', 'buttonType': 'button-type-3' },
{ 'id': 'P4', image: 'absaugungP.png', 'targetScreen': 'P', 'buttonType': 'button-type-4' },
{ 'id': 'P5', image: 'abblasvent.png', 'targetScreen': 'S', 'buttonType': 'button-type-5' },
{ 'id': 'P6', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-6' },
{ 'id': 'P7', image: 'hydraulik.png', 'targetScreen': 'Z', 'buttonType': 'button-type-7' },
{ 'id': 'P8', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-8' },
{ 'id': 'P9', image: 'vorbereiten.png', 'targetScreen': 'AH', 'buttonType': 'button-type-9' },
{ 'id': 'P10', image: 'status.png', 'targetScreen': 'F', 'buttonType': 'button-type-10' },
{ 'id': 'P11', image: 'handbetrieb.png', 'targetScreen': 'AI', 'buttonType': 'button-type-11' },
{ 'id': 'P12', image: 'diagnose.png', 'targetScreen': 'AJ', 'buttonType': 'button-type-12' },
{ 'id': 'P13', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-13' },
{ 'id': 'P14', image: 'prozess.png', 'targetScreen': 'AK', 'buttonType': 'button-type-14' },
{ 'id': 'P15', image: 'instandhalt.png', 'targetScreen': 'AL', 'buttonType': 'button-type-15' },
{ 'id': 'P16', image: 'service.png', 'targetScreen': 'AM', 'buttonType': 'button-type-16' },
{ 'id': 'P17', image: 'bbbutton.png', 'targetScreen': 'A', 'buttonType': 'button-type-17' },
{ 'id': 'P18', image: 'bbutton.png', 'targetScreen': 'D', 'buttonType': 'button-type-18' },

	
	
	
	
	
	
	],
	
	
	// schutztueren
	
	'R': [
	
	
	{ 'id': 'R1', image: 'elektrikallg.png', 'targetScreen': 'D', 'buttonType': 'button-type-1' },
{ 'id': 'R2', image: 'steuerspannungD.png', 'targetScreen': 'I', 'buttonType': 'button-type-2' },
{ 'id': 'R3', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-3' },
{ 'id': 'R4', image: 'nothaltD.png', 'targetScreen': 'O', 'buttonType': 'button-type-4' },
{ 'id': 'R5', image: 'schutztuerenR.png', 'targetScreen': 'R', 'buttonType': 'button-type-5' },
{ 'id': 'R6', image: 'beladestelle.png', 'targetScreen': 'U', 'buttonType': 'button-type-6' },
{ 'id': 'R7', image: 'pneumatik.png', 'targetScreen': 'W', 'buttonType': 'button-type-7' },
{ 'id': 'R8', image: 'schmierungD.png', 'targetScreen': 'AA', 'buttonType': 'button-type-8' },
{ 'id': 'R9', image: 'vorbereiten.png', 'targetScreen': 'AH', 'buttonType': 'button-type-9' },
{ 'id': 'R10', image: 'status.png', 'targetScreen': 'R', 'buttonType': 'button-type-10' },
{ 'id': 'R11', image: 'handbetrieb.png', 'targetScreen': 'AI', 'buttonType': 'button-type-11' },
{ 'id': 'R12', image: 'diagnose.png', 'targetScreen': 'AJ', 'buttonType': 'button-type-12' },
{ 'id': 'R13', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-13' },
{ 'id': 'R14', image: 'prozess.png', 'targetScreen': 'AK', 'buttonType': 'button-type-14' },
{ 'id': 'R15', image: 'instandhalt.png', 'targetScreen': 'AL', 'buttonType': 'button-type-15' },
{ 'id': 'R16', image: 'service.png', 'targetScreen': 'AM', 'buttonType': 'button-type-16' },
{ 'id': 'R17', image: 'bbbutton.png', 'targetScreen': 'A', 'buttonType': 'button-type-17' },
{ 'id': 'R18', image: 'bbutton.png', 'targetScreen': 'D', 'buttonType': 'button-type-18' },

	
	
	
	],
	
	
	// abblasventile
	
	'S': [
	
	
	{ 'id': 'S1', image: 'kuehlaggregatM.png', 'targetScreen': 'F', 'buttonType': 'button-type-1' },
{ 'id': 'S2', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-2' },
{ 'id': 'S3', image: 'spaene.png', 'targetScreen': 'M', 'buttonType': 'button-type-3' },
{ 'id': 'S4', image: 'absaugungF.png', 'targetScreen': 'P', 'buttonType': 'button-type-4' },
{ 'id': 'S5', image: 'abblasventileS.png', 'targetScreen': 'S', 'buttonType': 'button-type-5' },
{ 'id': 'S6', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-6' },
{ 'id': 'S7', image: 'hydraulik.png', 'targetScreen': 'Z', 'buttonType': 'button-type-7' },
{ 'id': 'S8', image: 'leer.png', 'targetScreen': 'A', 'buttonType': 'button-type-8' },
{ 'id': 'S9', image: 'vorbereiten.png', 'targetScreen': 'AH', 'buttonType': 'button-type-9' },
{ 'id': 'S10', image: 'status.png', 'targetScreen': 'S', 'buttonType': 'button-type-10' },
{ 'id': 'S11', image: 'handbetrieb.png', 'targetScreen': 'AI', 'buttonType': 'button-type-11' },
{ 'id': 'S12', image: 'diagnose.png', 'targetScreen': 'AJ', 'buttonType': 'button-type-12' },
{ 'id': 'S13', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-13' },
{ 'id': 'S14', image: 'prozess.png', 'targetScreen': 'AK', 'buttonType': 'button-type-14' },
{ 'id': 'S15', image: 'instandhalt.png', 'targetScreen': 'AL', 'buttonType': 'button-type-15' },
{ 'id': 'S16', image: 'service.png', 'targetScreen': 'AM', 'buttonType': 'button-type-16' },
{ 'id': 'S17', image: 'bbbutton.png', 'targetScreen': 'A', 'buttonType': 'button-type-17' },
{ 'id': 'S18', image: 'bbutton.png', 'targetScreen': 'D', 'buttonType': 'button-type-18' },

	
	
	
	
	
	
	],
	
	// auflagekontr18
	
	
	
	'T': [
	
	
	
	{ 'id': 'T1', image: 'hyspannT.png', 'targetScreen': 'H', 'buttonType': 'button-type-1' },
{ 'id': 'T2', image: 'pneuspann.png', 'targetScreen': 'AC', 'buttonType': 'button-type-2' },
{ 'id': 'T3', image: 'hydruck.png', 'targetScreen': 'N', 'buttonType': 'button-type-3' },
{ 'id': 'T4', image: 'pneudruck.png', 'targetScreen': 'AD', 'buttonType': 'button-type-4' },
{ 'id': 'T5', image: 'auflagekontr18T.png', 'targetScreen': 'T', 'buttonType': 'button-type-5' },
{ 'id': 'T6', image: 'auflag916.png', 'targetScreen': 'V', 'buttonType': 'button-type-6' },
{ 'id': 'T7', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-7' },
{ 'id': 'T8', image: 'spvallgem.png', 'targetScreen': 'AB', 'buttonType': 'button-type-8' },
{ 'id': 'T9', image: 'vorbereiten.png', 'targetScreen': 'AH', 'buttonType': 'button-type-9' },
{ 'id': 'T10', image: 'status.png', 'targetScreen': 'T', 'buttonType': 'button-type-10' },
{ 'id': 'T11', image: 'handbetrieb.png', 'targetScreen': 'AI', 'buttonType': 'button-type-11' },
{ 'id': 'T12', image: 'diagnose.png', 'targetScreen': 'AJ', 'buttonType': 'button-type-12' },
{ 'id': 'T13', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-13' },
{ 'id': 'T14', image: 'prozess.png', 'targetScreen': 'AK', 'buttonType': 'button-type-14' },
{ 'id': 'T15', image: 'instandhalt.png', 'targetScreen': 'AL', 'buttonType': 'button-type-15' },
{ 'id': 'T16', image: 'service.png', 'targetScreen': 'AM', 'buttonType': 'button-type-16' },
{ 'id': 'T17', image: 'bbbutton.png', 'targetScreen': 'A', 'buttonType': 'button-type-17' },
{ 'id': 'T18', image: 'bbutton.png', 'targetScreen': 'D', 'buttonType': 'button-type-18' },

	
	
	
	
	],
	
	
	
	// rolltorbeladestelle
	
	
	
	'U': [
	
	
	{ 'id': 'U1', image: 'elektrikallg.png', 'targetScreen': 'D', 'buttonType': 'button-type-1' },
{ 'id': 'U2', image: 'steuerspannungD.png', 'targetScreen': 'I', 'buttonType': 'button-type-2' },
{ 'id': 'U3', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-3' },
{ 'id': 'U4', image: 'nothaltD.png', 'targetScreen': 'O', 'buttonType': 'button-type-4' },
{ 'id': 'U5', image: 'schutztuerenD.png', 'targetScreen': 'R', 'buttonType': 'button-type-5' },
{ 'id': 'U6', image: 'beladestelleU.png', 'targetScreen': 'U', 'buttonType': 'button-type-6' },
{ 'id': 'U7', image: 'pneumatik.png', 'targetScreen': 'W', 'buttonType': 'button-type-7' },
{ 'id': 'U8', image: 'schmierungD.png', 'targetScreen': 'AA', 'buttonType': 'button-type-8' },
{ 'id': 'U9', image: 'vorbereiten.png', 'targetScreen': 'AH', 'buttonType': 'button-type-9' },
{ 'id': 'U10', image: 'status.png', 'targetScreen': 'U', 'buttonType': 'button-type-10' },
{ 'id': 'U11', image: 'handbetrieb.png', 'targetScreen': 'AI', 'buttonType': 'button-type-11' },
{ 'id': 'U12', image: 'diagnose.png', 'targetScreen': 'AJ', 'buttonType': 'button-type-12' },
{ 'id': 'U13', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-13' },
{ 'id': 'U14', image: 'prozess.png', 'targetScreen': 'AK', 'buttonType': 'button-type-14' },
{ 'id': 'U15', image: 'instandhalt.png', 'targetScreen': 'AL', 'buttonType': 'button-type-15' },
{ 'id': 'U16', image: 'service.png', 'targetScreen': 'AM', 'buttonType': 'button-type-16' },
{ 'id': 'U17', image: 'bbbutton.png', 'targetScreen': 'A', 'buttonType': 'button-type-17' },
{ 'id': 'U18', image: 'bbutton.png', 'targetScreen': 'D', 'buttonType': 'button-type-18' },

	
	
	
	
	
	
	
	],
	
	// auflagekontr916
	
		'V':[
	
	{ 'id': 'V1', image: 'hyspannT.png', 'targetScreen': 'H', 'buttonType': 'button-type-1' },
{ 'id': 'V2', image: 'pneuspann.png', 'targetScreen': 'AC', 'buttonType': 'button-type-2' },
{ 'id': 'V3', image: 'hydruck.png', 'targetScreen': 'N', 'buttonType': 'button-type-3' },
{ 'id': 'V4', image: 'pneudruck.png', 'targetScreen': 'AD', 'buttonType': 'button-type-4' },
{ 'id': 'V5', image: 'auflag18.png', 'targetScreen': 'T', 'buttonType': 'button-type-5' },
{ 'id': 'V6', image: 'auflagekontr916V.png', 'targetScreen': 'V', 'buttonType': 'button-type-6' },
{ 'id': 'V7', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-7' },
{ 'id': 'V8', image: 'spvallgem.png', 'targetScreen': 'AB', 'buttonType': 'button-type-8' },
{ 'id': 'V9', image: 'vorbereiten.png', 'targetScreen': 'AH', 'buttonType': 'button-type-9' },
{ 'id': 'V10', image: 'status.png', 'targetScreen': 'V', 'buttonType': 'button-type-10' },
{ 'id': 'V11', image: 'handbetrieb.png', 'targetScreen': 'AI', 'buttonType': 'button-type-11' },
{ 'id': 'V12', image: 'diagnose.png', 'targetScreen': 'AJ', 'buttonType': 'button-type-12' },
{ 'id': 'V13', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-13' },
{ 'id': 'V14', image: 'prozess.png', 'targetScreen': 'AK', 'buttonType': 'button-type-14' },
{ 'id': 'V15', image: 'instandhalt.png', 'targetScreen': 'AL', 'buttonType': 'button-type-15' },
{ 'id': 'V16', image: 'service.png', 'targetScreen': 'AM', 'buttonType': 'button-type-16' },
{ 'id': 'V17', image: 'bbbutton.png', 'targetScreen': 'A', 'buttonType': 'button-type-17' },
{ 'id': 'V18', image: 'bbutton.png', 'targetScreen': 'D', 'buttonType': 'button-type-18' },

	
	
	
	
	
	
	
	
	
	
	
	
	],
	
	
	// pneumatikhauptluft
	
	
	'W':[
	
	
	
	{ 'id': 'W1', image: 'elektrikallg.png', 'targetScreen': 'B', 'buttonType': 'button-type-1' },
{ 'id': 'W2', image: 'steuerspannungD.png', 'targetScreen': 'I', 'buttonType': 'button-type-2' },
{ 'id': 'W3', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-3' },
{ 'id': 'W4', image: 'nothaltD.png', 'targetScreen': 'O', 'buttonType': 'button-type-4' },
{ 'id': 'W5', image: 'schutztuerenD.png', 'targetScreen': 'R', 'buttonType': 'button-type-5' },
{ 'id': 'W6', image: 'beladestelle.png', 'targetScreen': 'U', 'buttonType': 'button-type-6' },
{ 'id': 'W7', image: 'pneumatikW.png', 'targetScreen': 'W', 'buttonType': 'button-type-7' },
{ 'id': 'W8', image: 'schmierungD.png', 'targetScreen': 'AA', 'buttonType': 'button-type-8' },
{ 'id': 'W9', image: 'vorbereiten.png', 'targetScreen': 'AH', 'buttonType': 'button-type-9' },
{ 'id': 'W10', image: 'status.png', 'targetScreen': 'W', 'buttonType': 'button-type-10' },
{ 'id': 'W11', image: 'handbetrieb.png', 'targetScreen': 'AI', 'buttonType': 'button-type-11' },
{ 'id': 'W12', image: 'diagnose.png', 'targetScreen': 'AJ', 'buttonType': 'button-type-12' },
{ 'id': 'W13', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-13' },
{ 'id': 'W14', image: 'prozess.png', 'targetScreen': 'AK', 'buttonType': 'button-type-14' },
{ 'id': 'W15', image: 'instandhalt.png', 'targetScreen': 'AL', 'buttonType': 'button-type-15' },
{ 'id': 'W16', image: 'service.png', 'targetScreen': 'AM', 'buttonType': 'button-type-16' },
{ 'id': 'W17', image: 'bbbutton.png', 'targetScreen': 'A', 'buttonType': 'button-type-17' },
{ 'id': 'W18', image: 'bbutton.png', 'targetScreen': 'D', 'buttonType': 'button-type-18' },

	
	
	
	
	
	
	
	
	
	],
	
	
	
	// hydraulikaggregat
	
	
	'Z':[
	
	
	
	{ 'id': 'Z1', image: 'kuehlaggregatM.png', 'targetScreen': 'F', 'buttonType': 'button-type-1' },
{ 'id': 'Z2', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-2' },
{ 'id': 'Z3', image: 'spaene.png', 'targetScreen': 'M', 'buttonType': 'button-type-3' },
{ 'id': 'Z4', image: 'absaugungF.png', 'targetScreen': 'P', 'buttonType': 'button-type-4' },
{ 'id': 'Z5', image: 'abblasvent.png', 'targetScreen': 'S', 'buttonType': 'button-type-5' },
{ 'id': 'Z6', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-6' },
{ 'id': 'Z7', image: 'hydraulikN.png', 'targetScreen': 'Z', 'buttonType': 'button-type-7' },
{ 'id': 'Z8', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-8' },
{ 'id': 'Z9', image: 'vorbereiten.png', 'targetScreen': 'AH', 'buttonType': 'button-type-9' },
{ 'id': 'Z10', image: 'status.png', 'targetScreen': 'Z', 'buttonType': 'button-type-10' },
{ 'id': 'Z11', image: 'handbetrieb.png', 'targetScreen': 'AI', 'buttonType': 'button-type-11' },
{ 'id': 'Z12', image: 'diagnose.png', 'targetScreen': 'AJ', 'buttonType': 'button-type-12' },
{ 'id': 'Z13', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-13' },
{ 'id': 'Z14', image: 'prozess.png', 'targetScreen': 'AK', 'buttonType': 'button-type-14' },
{ 'id': 'Z15', image: 'instandhalt.png', 'targetScreen': 'AL', 'buttonType': 'button-type-15' },
{ 'id': 'Z16', image: 'service.png', 'targetScreen': 'AM', 'buttonType': 'button-type-16' },
{ 'id': 'Z17', image: 'bbbutton.png', 'targetScreen': 'A', 'buttonType': 'button-type-17' },
{ 'id': 'Z18', image: 'bbutton.png', 'targetScreen': 'D', 'buttonType': 'button-type-18' },

	
	
	
	
	
	
	
	],
	
	
	
	// schmierung
	
	'AA':[
	
	
	{ 'id': 'AA1', image: 'elektrikallg.png', 'targetScreen': 'D', 'buttonType': 'button-type-1' },
{ 'id': 'AA2', image: 'steuerspannungD.png', 'targetScreen': 'I', 'buttonType': 'button-type-2' },
{ 'id': 'AA3', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-3' },
{ 'id': 'AA4', image: 'nothaltD.png', 'targetScreen': 'O', 'buttonType': 'button-type-4' },
{ 'id': 'AA5', image: 'schutztuerenD.png', 'targetScreen': 'R', 'buttonType': 'button-type-5' },
{ 'id': 'AA6', image: 'beladestelle.png', 'targetScreen': 'U', 'buttonType': 'button-type-6' },
{ 'id': 'AA7', image: 'pneumatik.png', 'targetScreen': 'W', 'buttonType': 'button-type-7' },
{ 'id': 'AA8', image: 'schmierungAA.png', 'targetScreen': 'AA', 'buttonType': 'button-type-8' },
{ 'id': 'AA9', image: 'vorbereiten.png', 'targetScreen': 'AH', 'buttonType': 'button-type-9' },
{ 'id': 'AA10', image: 'status.png', 'targetScreen': 'AA', 'buttonType': 'button-type-10' },
{ 'id': 'AA11', image: 'handbetrieb.png', 'targetScreen': 'AI', 'buttonType': 'button-type-11' },
{ 'id': 'AA12', image: 'diagnose.png', 'targetScreen': 'AJ', 'buttonType': 'button-type-12' },
{ 'id': 'AA13', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-13' },
{ 'id': 'AA14', image: 'prozess.png', 'targetScreen': 'AK', 'buttonType': 'button-type-14' },
{ 'id': 'AA15', image: 'instandhalt.png', 'targetScreen': 'AL', 'buttonType': 'button-type-15' },
{ 'id': 'AA16', image: 'service.png', 'targetScreen': 'AM', 'buttonType': 'button-type-16' },
{ 'id': 'AA17', image: 'bbbutton.png', 'targetScreen': 'A', 'buttonType': 'button-type-17' },
{ 'id': 'AA18', image: 'bbutton.png', 'targetScreen': 'D', 'buttonType': 'button-type-18' },

	
	],
	
	// spannvorrallgemein
	
	'AB':[
	
	{ 'id': 'AB1', image: 'hyspannT.png', 'targetScreen': 'H', 'buttonType': 'button-type-1' },
{ 'id': 'AB2', image: 'pneuspann.png', 'targetScreen': 'AC', 'buttonType': 'button-type-2' },
{ 'id': 'AB3', image: 'hydruck.png', 'targetScreen': 'N', 'buttonType': 'button-type-3' },
{ 'id': 'AB4', image: 'pneudruck.png', 'targetScreen': 'AD', 'buttonType': 'button-type-4' },
{ 'id': 'AB5', image: 'auflag18.png', 'targetScreen': 'T', 'buttonType': 'button-type-5' },
{ 'id': 'AB6', image: 'auflag916.png', 'targetScreen': 'V', 'buttonType': 'button-type-6' },
{ 'id': 'AB7', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-7' },
{ 'id': 'AB8', image: 'spvallgemAB.png', 'targetScreen': 'AB', 'buttonType': 'button-type-8' },
{ 'id': 'AB9', image: 'vorbereiten.png', 'targetScreen': 'AH', 'buttonType': 'button-type-9' },
{ 'id': 'AB10', image: 'status.png', 'targetScreen': 'AB', 'buttonType': 'button-type-10' },
{ 'id': 'AB11', image: 'handbetrieb.png', 'targetScreen': 'AI', 'buttonType': 'button-type-11' },
{ 'id': 'AB12', image: 'diagnose.png', 'targetScreen': 'AJ', 'buttonType': 'button-type-12' },
{ 'id': 'AB13', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-13' },
{ 'id': 'AB14', image: 'prozess.png', 'targetScreen': 'AK', 'buttonType': 'button-type-14' },
{ 'id': 'AB15', image: 'instandhalt.png', 'targetScreen': 'AL', 'buttonType': 'button-type-15' },
{ 'id': 'AB16', image: 'service.png', 'targetScreen': 'AM', 'buttonType': 'button-type-16' },
{ 'id': 'AB17', image: 'bbbutton.png', 'targetScreen': 'A', 'buttonType': 'button-type-17' },
{ 'id': 'AB18', image: 'bbutton.png', 'targetScreen': 'D', 'buttonType': 'button-type-18' },

	
	
	
	],
	
	
	
	
	// pneumatikspannsystem
	'AC':[
	
	
	
	{ 'id': 'AC1', image: 'hyspannT.png', 'targetScreen': 'H', 'buttonType': 'button-type-1' },
{ 'id': 'AC2', image: 'pneuspannAC.png', 'targetScreen': 'AC', 'buttonType': 'button-type-2' },
{ 'id': 'AC3', image: 'hydruck.png', 'targetScreen': 'N', 'buttonType': 'button-type-3' },
{ 'id': 'AC4', image: 'pneudruck.png', 'targetScreen': 'AD', 'buttonType': 'button-type-4' },
{ 'id': 'AC5', image: 'auflag18.png', 'targetScreen': 'T', 'buttonType': 'button-type-5' },
{ 'id': 'AC6', image: 'auflag916.png', 'targetScreen': 'V', 'buttonType': 'button-type-6' },
{ 'id': 'AC7', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-7' },
{ 'id': 'AC8', image: 'spvallgem.png', 'targetScreen': 'AB', 'buttonType': 'button-type-8' },
{ 'id': 'AC9', image: 'vorbereiten.png', 'targetScreen': 'AH', 'buttonType': 'button-type-9' },
{ 'id': 'AC10', image: 'status.png', 'targetScreen': 'AC', 'buttonType': 'button-type-10' },
{ 'id': 'AC11', image: 'handbetrieb.png', 'targetScreen': 'AI', 'buttonType': 'button-type-11' },
{ 'id': 'AC12', image: 'diagnose.png', 'targetScreen': 'AJ', 'buttonType': 'button-type-12' },
{ 'id': 'AC13', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-13' },
{ 'id': 'AC14', image: 'prozess.png', 'targetScreen': 'AK', 'buttonType': 'button-type-14' },
{ 'id': 'AC15', image: 'instandhalt.png', 'targetScreen': 'AL', 'buttonType': 'button-type-15' },
{ 'id': 'AC16', image: 'service.png', 'targetScreen': 'AM', 'buttonType': 'button-type-16' },
{ 'id': 'AC17', image: 'bbbutton.png', 'targetScreen': 'A', 'buttonType': 'button-type-17' },
{ 'id': 'AC18', image: 'bbutton.png', 'targetScreen': 'D', 'buttonType': 'button-type-18' },

	
	],
	
	
	// pneumatikspandruck
	
	
	
	'AD':[
	
	{ 'id': 'AD1', image: 'hyspannT.png', 'targetScreen': 'H', 'buttonType': 'button-type-1' },
{ 'id': 'AD2', image: 'pneuspann.png', 'targetScreen': 'AC', 'buttonType': 'button-type-2' },
{ 'id': 'AD3', image: 'hydruck.png', 'targetScreen': 'N', 'buttonType': 'button-type-3' },
{ 'id': 'AD4', image: 'pneudruckW.png', 'targetScreen': 'AD', 'buttonType': 'button-type-4' },
{ 'id': 'AD5', image: 'auflag18.png', 'targetScreen': 'T', 'buttonType': 'button-type-5' },
{ 'id': 'AD6', image: 'auflag916.png', 'targetScreen': 'V', 'buttonType': 'button-type-6' },
{ 'id': 'AD7', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-7' },
{ 'id': 'AD8', image: 'spvallgem.png', 'targetScreen': 'AB', 'buttonType': 'button-type-8' },
{ 'id': 'AD9', image: 'vorbereiten.png', 'targetScreen': 'AH', 'buttonType': 'button-type-9' },
{ 'id': 'AD10', image: 'status.png', 'targetScreen': 'AD', 'buttonType': 'button-type-10' },
{ 'id': 'AD11', image: 'handbetrieb.png', 'targetScreen': 'AI', 'buttonType': 'button-type-11' },
{ 'id': 'AD12', image: 'diagnose.png', 'targetScreen': 'AJ', 'buttonType': 'button-type-12' },
{ 'id': 'AD13', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-13' },
{ 'id': 'AD14', image: 'prozess.png', 'targetScreen': 'AK', 'buttonType': 'button-type-14' },
{ 'id': 'AD15', image: 'instandhalt.png', 'targetScreen': 'AL', 'buttonType': 'button-type-15' },
{ 'id': 'AD16', image: 'service.png', 'targetScreen': 'AM', 'buttonType': 'button-type-16' },
{ 'id': 'AD17', image: 'bbbutton.png', 'targetScreen': 'A', 'buttonType': 'button-type-17' },
{ 'id': 'AD18', image: 'bbutton.png', 'targetScreen': 'D', 'buttonType': 'button-type-18' },





	],
	
	// Bohrerbruchkontrolle1

	'AE':[
	
	{ 'id': 'AE1', image: 'werkzeugwK.png', 'targetScreen': 'CH', 'buttonType': 'button-type-1' },
{ 'id': 'AE2', image: 'bohrerbruchK.png', 'targetScreen': 'AE', 'buttonType': 'button-type-2' },
{ 'id': 'AE3', image: 'beentladen.png', 'targetScreen': 'AG', 'buttonType': 'button-type-3' },
{ 'id': 'AE4', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-4' },
{ 'id': 'AE5', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-5' },
{ 'id': 'AE6', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-6' },
{ 'id': 'AE7', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-7' },
{ 'id': 'AE8', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-8' },
{ 'id': 'AE9', image: 'vorbereiten.png', 'targetScreen': 'AH', 'buttonType': 'button-type-9' },
{ 'id': 'AE10', image: 'status.png', 'targetScreen': 'A', 'buttonType': 'button-type-10' },
{ 'id': 'AE11', image: 'handbetrieb.png', 'targetScreen': 'AI', 'buttonType': 'button-type-11' },
{ 'id': 'AE12', image: 'diagnose.png', 'targetScreen': 'AJ', 'buttonType': 'button-type-12' },
{ 'id': 'AE13', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-13' },
{ 'id': 'AE14', image: 'prozess.png', 'targetScreen': 'AK', 'buttonType': 'button-type-14' },
{ 'id': 'AE15', image: 'instandhalt.png', 'targetScreen': 'AL', 'buttonType': 'button-type-15' },
{ 'id': 'AE16', image: 'service.png', 'targetScreen': 'AM', 'buttonType': 'button-type-16' },
{ 'id': 'AE17', image: 'bbbutton.png', 'targetScreen': 'A', 'buttonType': 'button-type-17' },
{ 'id': 'AE18', image: 'bbutton.png', 'targetScreen': 'D', 'buttonType': 'button-type-18' },
{ 'id': 'AE19', image: 'atc2.png', 'targetScreen': 'AF', 'buttonType': 'button-type-46' },
	
	
	],
	
	
	// Bohrerbruchkontrolle2
	
	'AF':[
	
	{ 'id': 'AF1', image: 'werkzeugwK.png', 'targetScreen': 'CH', 'buttonType': 'button-type-1' },
{ 'id': 'AF2', image: 'bohrerbruchK.png', 'targetScreen': 'AF', 'buttonType': 'button-type-2' },
{ 'id': 'AF3', image: 'beentladen.png', 'targetScreen': 'AG', 'buttonType': 'button-type-3' },
{ 'id': 'AF4', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-4' },
{ 'id': 'AF5', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-5' },
{ 'id': 'AF6', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-6' },
{ 'id': 'AF7', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-7' },
{ 'id': 'AF8', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-8' },
{ 'id': 'AF9', image: 'vorbereiten.png', 'targetScreen': 'AH', 'buttonType': 'button-type-9' },
{ 'id': 'AF10', image: 'status.png', 'targetScreen': 'A', 'buttonType': 'button-type-10' },
{ 'id': 'AF11', image: 'handbetrieb.png', 'targetScreen': 'AI', 'buttonType': 'button-type-11' },
{ 'id': 'AF12', image: 'diagnose.png', 'targetScreen': 'AJ', 'buttonType': 'button-type-12' },
{ 'id': 'AF13', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-13' },
{ 'id': 'AF14', image: 'prozess.png', 'targetScreen': 'AK', 'buttonType': 'button-type-14' },
{ 'id': 'AF15', image: 'instandhalt.png', 'targetScreen': 'AL', 'buttonType': 'button-type-15' },
{ 'id': 'AF16', image: 'service.png', 'targetScreen': 'AM', 'buttonType': 'button-type-16' },
{ 'id': 'AF17', image: 'bbbutton.png', 'targetScreen': 'A', 'buttonType': 'button-type-17' },
{ 'id': 'AF18', image: 'bbutton.png', 'targetScreen': 'D', 'buttonType': 'button-type-18' },
{ 'id': 'AF19', image: 'atc1.png', 'targetScreen': 'AE', 'buttonType': 'button-type-47' },
	
	
	],
	
	
	
	
	
	// grundbedingungen
	
	
	
	
	'AG':[
	
	

	
	
	
	{ 'id': 'AG1', image: 'werkzeugwK.png', 'targetScreen': 'CH', 'buttonType': 'button-type-1' },
{ 'id': 'AG2', image: 'bohrerbruchI.png', 'targetScreen': 'AE', 'buttonType': 'button-type-2' },
{ 'id': 'AG3', image: 'beentladenAG.png', 'targetScreen': 'AG', 'buttonType': 'button-type-3' },
{ 'id': 'AG4', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-4' },
{ 'id': 'AG5', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-5' },
{ 'id': 'AG6', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-6' },
{ 'id': 'AG7', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-7' },
{ 'id': 'AG8', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-8' },
{ 'id': 'AG9', image: 'vorbereiten.png', 'targetScreen': 'B', 'buttonType': 'button-type-9' },
{ 'id': 'AG10', image: 'status.png', 'targetScreen': 'A', 'buttonType': 'button-type-10' },
{ 'id': 'AG11', image: 'handbetrieb.png', 'targetScreen': 'A', 'buttonType': 'button-type-11' },
{ 'id': 'AG12', image: 'diagnose.png', 'targetScreen': 'A', 'buttonType': 'button-type-12' },
{ 'id': 'AG13', image: 'leer.png', 'targetScreen': 'A', 'buttonType': 'button-type-13' },
{ 'id': 'AG14', image: 'prozess.png', 'targetScreen': 'A', 'buttonType': 'button-type-14' },
{ 'id': 'AG15', image: 'instandhalt.png', 'targetScreen': 'A', 'buttonType': 'button-type-15' },
{ 'id': 'AG16', image: 'service.png', 'targetScreen': 'A', 'buttonType': 'button-type-16' },
{ 'id': 'AG17', image: 'bbbutton.png', 'targetScreen': 'A', 'buttonType': 'button-type-17' },
{ 'id': 'AG18', image: 'bbutton.png', 'targetScreen': 'D', 'buttonType': 'button-type-18' },

	
	
	
	
	
	
	
	
	
	
	
	],
	
	// vorbereiten1
	
	
	
	'AH':[
	
	
{ 'id': 'AH1', image: 'einschaltb.png', 'targetScreen': 'AH', 'buttonType': 'button-type-1' },
{ 'id': 'AH2', image: 'taktarten.png', 'targetScreen': 'AHB', 'buttonType': 'button-type-2' },
{ 'id': 'AH3', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-3' },
{ 'id': 'AH4', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-4' },
{ 'id': 'AH5', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-5' },
{ 'id': 'AH6', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-6' },
{ 'id': 'AH7', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-7' },
{ 'id': 'AH8', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-8' },
{ 'id': 'AH9', image: 'vorbereitenAH.png', 'targetScreen': 'AH', 'buttonType': 'button-type-9' },
{ 'id': 'AH10', image: 'statusAH.png', 'targetScreen': 'A', 'buttonType': 'button-type-10' },
{ 'id': 'AH11', image: 'handbetrieb.png', 'targetScreen': 'AI', 'buttonType': 'button-type-11' },
{ 'id': 'AH12', image: 'diagnose.png', 'targetScreen': 'AJ', 'buttonType': 'button-type-12' },
{ 'id': 'AH13', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-13' },
{ 'id': 'AH14', image: 'prozess.png', 'targetScreen': 'AK', 'buttonType': 'button-type-14' },
{ 'id': 'AH15', image: 'instandhalt.png', 'targetScreen': 'AL', 'buttonType': 'button-type-15' },
{ 'id': 'AH16', image: 'service.png', 'targetScreen': 'AM', 'buttonType': 'button-type-16' },
{ 'id': 'AH17', image: 'bbbutton.png', 'targetScreen': 'A', 'buttonType': 'button-type-17' },
{ 'id': 'AH18', image: 'bbutton.png', 'targetScreen': 'D', 'buttonType': 'button-type-18' },
{ 'id': 'AH19', image: 'nextP.png', 'targetScreen': 'ACH', 'buttonType': 'button-type-19' },
{' id': 'AH20', image: 'nextL.png', 'targetScreen': 'AH', 'buttonType': 'button-type-20' },
{ 'id': 'AH21', image: 'symbolik.png', 'targetScreen': 'AHA', 'buttonType': 'button-type-48' },
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	],
	
	
	
	// vorbereiten1Symbolik1
	
	
	'AHA':[
	
	
	{ 'id': 'AHA1', image: 'einschaltb.png', 'targetScreen': 'AH', 'buttonType': 'button-type-1' },
{ 'id': 'AHA2', image: 'taktarten.png', 'targetScreen': 'AE', 'buttonType': 'button-type-2' },
{ 'id': 'AHA3', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-3' },
{ 'id': 'AHA4', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-4' },
{ 'id': 'AHA5', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-5' },
{ 'id': 'AHA6', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-6' },
{ 'id': 'AHA7', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-7' },
{ 'id': 'AHA8', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-8' },
{ 'id': 'AHA9', image: 'vorbereitenAH.png', 'targetScreen': 'AH', 'buttonType': 'button-type-9' },
{ 'id': 'AHA10', image: 'statusAH.png', 'targetScreen': 'A', 'buttonType': 'button-type-10' },
{ 'id': 'AHA11', image: 'handbetrieb.png', 'targetScreen': 'AI', 'buttonType': 'button-type-11' },
{ 'id': 'AHA12', image: 'diagnose.png', 'targetScreen': 'AJ', 'buttonType': 'button-type-12' },
{ 'id': 'AHA13', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-13' },
{ 'id': 'AHA14', image: 'prozess.png', 'targetScreen': 'AK', 'buttonType': 'button-type-14' },
{ 'id': 'AHA15', image: 'instandhalt.png', 'targetScreen': 'AL', 'buttonType': 'button-type-15' },
{ 'id': 'AHA16', image: 'service.png', 'targetScreen': 'AM', 'buttonType': 'button-type-16' },
{ 'id': 'AHA17', image: 'bbbutton.png', 'targetScreen': 'A', 'buttonType': 'button-type-17' },
{ 'id': 'AHA18', image: 'bbutton.png', 'targetScreen': 'D', 'buttonType': 'button-type-18' },
{ 'id': 'AHA19', image: 'nextP1.png', 'targetScreen': 'ACHA', 'buttonType': 'button-type-19' },
{ 'id': 'AHA20', image: 'nextL1.png', 'targetScreen': 'AHA', 'buttonType': 'button-type-20' },
{ 'id': 'AHA21', image: 'symbolik.png', 'targetScreen': 'AH', 'buttonType': 'button-type-48' },

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	],
	
	
	
	
	// vorbereiten2
	
	
	'ACH':[
	
	
{ 'id': 'CH1', image: 'einschaltb.png', 'targetScreen': 'ACH', 'buttonType': 'button-type-1' },
{ 'id': 'CH2', image: 'taktarten.png', 'targetScreen': 'AHC', 'buttonType': 'button-type-2' },
{ 'id': 'CH3', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-3' },
{ 'id': 'CH4', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-4' },
{ 'id': 'CH5', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-5' },
{ 'id': 'CH6', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-6' },
{ 'id': 'CH7', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-7' },
{ 'id': 'CH8', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-8' },
{ 'id': 'CH9', image: 'vorbereitenAH.png', 'targetScreen': 'ACH', 'buttonType': 'button-type-9' },
{ 'id': 'CH10', image: 'statusAH.png', 'targetScreen': 'A', 'buttonType': 'button-type-10' },
{ 'id': 'CH11', image: 'handbetrieb.png', 'targetScreen': 'AI', 'buttonType': 'button-type-11' },
{ 'id': 'CH12', image: 'diagnose.png', 'targetScreen': 'AJ', 'buttonType': 'button-type-12' },
{ 'id': 'CH13', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-13' },
{ 'id': 'CH14', image: 'prozess.png', 'targetScreen': 'AK', 'buttonType': 'button-type-14' },
{ 'id': 'CH15', image: 'instandhalt.png', 'targetScreen': 'AL', 'buttonType': 'button-type-15' },
{ 'id': 'CH16', image: 'service.png', 'targetScreen': 'AM', 'buttonType': 'button-type-16' },
{ 'id': 'CH17', image: 'bbbutton.png', 'targetScreen': 'A', 'buttonType': 'button-type-17' },
{ 'id': 'CH18', image: 'bbutton.png', 'targetScreen': 'D', 'buttonType': 'button-type-18' },
{ 'id': 'CH19', image: 'nextP.png', 'targetScreen': 'ACH', 'buttonType': 'button-type-19' },
{ 'id': 'CH20', image: 'nextL.png', 'targetScreen': 'AH', 'buttonType': 'button-type-20' },
{ 'id': 'ACH21', image: 'symbolik.png', 'targetScreen': 'ACHA', 'buttonType' : 'button-type-48' },
	
	
	
	],
	
	
	
	// vorbereitenSymbolik2
	
	
	'ACHA':[
	
	{ 'id': 'ACHA1', image: 'einschaltb.png', 'targetScreen': 'ACH', 'buttonType': 'button-type-1' },
{ 'id': 'ACHA2', image: 'taktarten.png', 'targetScreen': 'AE', 'buttonType': 'button-type-2' },
{ 'id': 'ACHA3', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-3' },
{ 'id': 'ACHA4', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-4' },
{ 'id': 'ACHA5', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-5' },
{ 'id': 'ACHA6', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-6' },
{ 'id': 'ACHA7', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-7' },
{ 'id': 'ACHA8', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-8' },
{ 'id': 'ACHA9', image: 'vorbereitenAH.png', 'targetScreen': 'ACH', 'buttonType': 'button-type-9' },
{ 'id': 'ACHA10', image: 'statusAH.png', 'targetScreen': 'A', 'buttonType': 'button-type-10' },
{ 'id': 'ACHA11', image: 'handbetrieb.png', 'targetScreen': 'AI', 'buttonType': 'button-type-11' },
{ 'id': 'ACHA12', image: 'diagnose.png', 'targetScreen': 'AJ', 'buttonType': 'button-type-12' },
{ 'id': 'ACHA13', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-13' },
{ 'id': 'ACHA14', image: 'prozess.png', 'targetScreen': 'AK', 'buttonType': 'button-type-14' },
{ 'id': 'ACHA15', image: 'instandhalt.png', 'targetScreen': 'AL', 'buttonType': 'button-type-15' },
{ 'id': 'ACHA16', image: 'service.png', 'targetScreen': 'AM', 'buttonType': 'button-type-16' },
{ 'id': 'ACHA17', image: 'bbbutton.png', 'targetScreen': 'A', 'buttonType': 'button-type-17' },
{ 'id': 'ACHA18', image: 'bbutton.png', 'targetScreen': 'D', 'buttonType': 'button-type-18' },
{ 'id': 'ACHA19', image: 'nextP1.png', 'targetScreen': 'ACHA', 'buttonType': 'button-type-19' },
{ 'id': 'ACHA20', image: 'nextL1.png', 'targetScreen': 'AHA', 'buttonType': 'button-type-20' },
{ 'id': 'ACHA21', image: 'symbolik.png', 'targetScreen': 'ACH', 'buttonType': 'button-type-48' },

	
	
	
	
	],
	
	
	// taktarten1
	
	
	'AHB':[
	
	
	
	{ 'id': 'AHB1', image: 'einschaltbAH.png', 'targetScreen': 'AH', 'buttonType': 'button-type-1' },
{ 'id': 'AHB2', image: 'taktartenAH.png', 'targetScreen': 'AHB', 'buttonType': 'button-type-2' },
{ 'id': 'AHB3', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-3' },
{ 'id': 'AHB4', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-4' },
{ 'id': 'AHB5', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-5' },
{ 'id': 'AHB6', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-6' },
{ 'id': 'AHB7', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-7' },
{ 'id': 'AHB8', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-8' },
{ 'id': 'AHB9', image: 'vorbereitenAH.png', 'targetScreen': 'AHB', 'buttonType': 'button-type-9' },
{ 'id': 'AHB10', image: 'statusAH.png', 'targetScreen': 'A', 'buttonType': 'button-type-10' },
{ 'id': 'AHB11', image: 'handbetrieb.png', 'targetScreen': 'AI', 'buttonType': 'button-type-11' },
{ 'id': 'AHB12', image: 'diagnose.png', 'targetScreen': 'AJ', 'buttonType': 'button-type-12' },
{ 'id': 'AHB13', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-13' },
{ 'id': 'AHB14', image: 'prozess.png', 'targetScreen': 'AK', 'buttonType': 'button-type-14' },
{ 'id': 'AHB15', image: 'instandhalt.png', 'targetScreen': 'AL', 'buttonType': 'button-type-15' },
{ 'id': 'AHB16', image: 'service.png', 'targetScreen': 'AM', 'buttonType': 'button-type-16' },
{ 'id': 'AHB17', image: 'bbbutton.png', 'targetScreen': 'A', 'buttonType': 'button-type-17' },
{ 'id': 'AHB18', image: 'bbutton.png', 'targetScreen': 'D', 'buttonType': 'button-type-18' },
{ 'id': 'AHB19', image: 'nextP1.png', 'targetScreen': 'AHC', 'buttonType': 'button-type-19' },
{ 'id': 'AHB20', image: 'nextL1.png', 'targetScreen': 'AHB', 'buttonType': 'button-type-20' },
{ 'id': 'AHB21', image: 'symbolik.png', 'targetScreen': 'AHBB', 'buttonType': 'button-type-48' },

	
	

	

	
	
	
	],
	
	
	// taktartenSymbolik1
	
	
	'AHBB':[
	
	{ 'id': 'AHBB1', image: 'einschaltbAH.png', 'targetScreen': 'AH', 'buttonType': 'button-type-1' },
{ 'id': 'AHBB2', image: 'taktartenAH.png', 'targetScreen': 'AHBB', 'buttonType': 'button-type-2' },
{ 'id': 'AHBB3', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-3' },
{ 'id': 'AHBB4', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-4' },
{ 'id': 'AHBB5', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-5' },
{ 'id': 'AHBB6', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-6' },
{ 'id': 'AHBB7', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-7' },
{ 'id': 'AHBB8', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-8' },
{ 'id': 'AHBB9', image: 'vorbereitenAH.png', 'targetScreen': 'AHBB', 'buttonType': 'button-type-9' },
{ 'id': 'AHBB10', image: 'statusAH.png', 'targetScreen': 'A', 'buttonType': 'button-type-10' },
{ 'id': 'AHBB11', image: 'handbetrieb.png', 'targetScreen': 'AI', 'buttonType': 'button-type-11' },
{ 'id': 'AHBB12', image: 'diagnose.png', 'targetScreen': 'AJ', 'buttonType': 'button-type-12' },
{ 'id': 'AHBB13', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-13' },
{ 'id': 'AHBB14', image: 'prozess.png', 'targetScreen': 'AK', 'buttonType': 'button-type-14' },
{ 'id': 'AHBB15', image: 'instandhalt.png', 'targetScreen': 'AL', 'buttonType': 'button-type-15' },
{ 'id': 'AHBB16', image: 'service.png', 'targetScreen': 'AM', 'buttonType': 'button-type-16' },
{ 'id': 'AHBB17', image: 'bbbutton.png', 'targetScreen': 'A', 'buttonType': 'button-type-17' },
{ 'id': 'AHBB18', image: 'bbutton.png', 'targetScreen': 'D', 'buttonType': 'button-type-18' },
{ 'id': 'AHBB19', image: 'nextP1.png', 'targetScreen': 'AHCC', 'buttonType': 'button-type-19' },
{ 'id': 'AHBB20', image: 'nextL1.png', 'targetScreen': 'AHBB', 'buttonType': 'button-type-20' },
{ 'id': 'AHBB21', image: 'symbolik.png', 'targetScreen': 'AHB', 'buttonType': 'button-type-48' },

	
	
	],
	
	
	
	
	
	
	// taktarten2
	
	'AHC':[
	
	{ 'id': 'AHC1', image: 'einschaltbAH.png', 'targetScreen': 'AH', 'buttonType': 'button-type-1' },
{ 'id': 'AHC2', image: 'taktartenAH.png', 'targetScreen': 'AHC', 'buttonType': 'button-type-2' },
{ 'id': 'AHC3', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-3' },
{ 'id': 'AHC4', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-4' },
{ 'id': 'AHC5', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-5' },
{ 'id': 'AHC6', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-6' },
{ 'id': 'AHC7', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-7' },
{ 'id': 'AHC8', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-8' },
{ 'id': 'AHC9', image: 'vorbereitenAH.png', 'targetScreen': 'AHC', 'buttonType': 'button-type-9' },
{ 'id': 'AHC10', image: 'statusAH.png', 'targetScreen': 'A', 'buttonType': 'button-type-10' },
{ 'id': 'AHC11', image: 'handbetrieb.png', 'targetScreen': 'AI', 'buttonType': 'button-type-11' },
{ 'id': 'AHC12', image: 'diagnose.png', 'targetScreen': 'AJ', 'buttonType': 'button-type-12' },
{ 'id': 'AHC13', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-13' },
{ 'id': 'AHC14', image: 'prozess.png', 'targetScreen': 'AK', 'buttonType': 'button-type-14' },
{ 'id': 'AHC15', image: 'instandhalt.png', 'targetScreen': 'AL', 'buttonType': 'button-type-15' },
{ 'id': 'AHC16', image: 'service.png', 'targetScreen': 'AM', 'buttonType': 'button-type-16' },
{ 'id': 'AHC17', image: 'bbbutton.png', 'targetScreen': 'A', 'buttonType': 'button-type-17' },
{ 'id': 'AHC18', image: 'bbutton.png', 'targetScreen': 'D', 'buttonType': 'button-type-18' },
{ 'id': 'AHC19', image: 'nextP1.png', 'targetScreen': 'AHC', 'buttonType': 'button-type-19' },
{ 'id': 'AHC20', image: 'nextL1.png', 'targetScreen': 'AHB', 'buttonType': 'button-type-20' },
{ 'id': 'AHC21', image: 'symbolik.png', 'targetScreen': 'AHCC', 'buttonType': 'button-type-48' },

	
	
	
	
	
	],
	
	
	
	// taktartenSymbolik2
	
	
	'AHCC':[
	
	
	{ 'id': 'AHCC1', image: 'einschaltbAH.png', 'targetScreen': 'AH', 'buttonType': 'button-type-1' },
{ 'id': 'AHCC2', image: 'taktartenAH.png', 'targetScreen': 'AHC', 'buttonType': 'button-type-2' },
{ 'id': 'AHCC3', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-3' },
{ 'id': 'AHCC4', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-4' },
{ 'id': 'AHCC5', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-5' },
{ 'id': 'AHCC6', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-6' },
{ 'id': 'AHCC7', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-7' },
{ 'id': 'AHCC8', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-8' },
{ 'id': 'AHCC9', image: 'vorbereitenAH.png', 'targetScreen': 'AHCC', 'buttonType': 'button-type-9' },
{ 'id': 'AHCC10', image: 'statusAH.png', 'targetScreen': 'A', 'buttonType': 'button-type-10' },
{ 'id': 'AHCC11', image: 'handbetrieb.png', 'targetScreen': 'AI', 'buttonType': 'button-type-11' },
{ 'id': 'AHCC12', image: 'diagnose.png', 'targetScreen': 'AJ', 'buttonType': 'button-type-12' },
{ 'id': 'AHCC13', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-13' },
{ 'id': 'AHCC14', image: 'prozess.png', 'targetScreen': 'AK', 'buttonType': 'button-type-14' },
{ 'id': 'AHCC15', image: 'instandhalt.png', 'targetScreen': 'AL', 'buttonType': 'button-type-15' },
{ 'id': 'AHCC16', image: 'service.png', 'targetScreen': 'AM', 'buttonType': 'button-type-16' },
{ 'id': 'AHCC17', image: 'bbbutton.png', 'targetScreen': 'A', 'buttonType': 'button-type-17' },
{ 'id': 'AHCC18', image: 'bbutton.png', 'targetScreen': 'D', 'buttonType': 'button-type-18' },
{ 'id': 'AHCC19', image: 'nextP1.png', 'targetScreen': 'AHCC', 'buttonType': 'button-type-19' },
{ 'id': 'AHCC20', image: 'nextL1.png', 'targetScreen': 'AHBB', 'buttonType': 'button-type-20' },
{ 'id': 'AHCC21', image: 'symbolik.png', 'targetScreen': 'AHCC', 'buttonType': 'button-type-48' },

	
	
	
	
	],
	
	
	
	
	
	
	
	
	// abblasung
	
'AI':[	
	
	
	
	{ 'id': 'AI1', image: 'apc.png', 'targetScreen': 'AIA', 'buttonType': 'button-type-1' },
{ 'id': 'AI2', image: 'spindelnAI.png', 'targetScreen': 'AT', 'buttonType': 'button-type-2' },
{ 'id': 'AI3', image: 'atc.png', 'targetScreen': 'AV', 'buttonType': 'button-type-3' },
{ 'id': 'AI4', image: 'abblasungAI.png', 'targetScreen': 'AI', 'buttonType': 'button-type-4' },
{ 'id': 'AI5', image: 'achsenJ.png', 'targetScreen': 'AZ', 'buttonType': 'button-type-5' },
{ 'id': 'AI6', image: 'schutztur.png', 'targetScreen': 'BC', 'buttonType': 'button-type-6' },
{ 'id': 'AI7', image: 'spanef.png', 'targetScreen': 'BD', 'buttonType': 'button-type-7' },
{ 'id': 'AI8', image: 'absaugungF.png', 'targetScreen': 'BE', 'buttonType': 'button-type-8' },
{ 'id': 'AI9', image: 'vorbereiten.png', 'targetScreen': 'AH', 'buttonType': 'button-type-9' },
{ 'id': 'AI10', image: 'statusAH.png', 'targetScreen': 'A', 'buttonType': 'button-type-10' },
{ 'id': 'AI11', image: 'handbetriebAIA.png', 'targetScreen': 'AI', 'buttonType': 'button-type-11' },
{ 'id': 'AI12', image: 'diagnose.png', 'targetScreen': 'AJ', 'buttonType': 'button-type-12' },
{ 'id': 'AI13', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-13' },
{ 'id': 'AI14', image: 'prozess.png', 'targetScreen': 'AK', 'buttonType': 'button-type-14' },
{ 'id': 'AI15', image: 'instandhalt.png', 'targetScreen': 'AL', 'buttonType': 'button-type-15' },
{ 'id': 'AI16', image: 'service.png', 'targetScreen': 'AM', 'buttonType': 'button-type-16' },
{ 'id': 'AI17', image: 'bbutton.png', 'targetScreen': '', 'buttonType': 'button-type-17' },
{ 'id': 'AI18', image: 'bbutton.png', 'targetScreen': '', 'buttonType': 'button-type-18' },
{ 'id': 'AI19', image: 'nextP1.png', 'targetScreen': 'ACHA', 'buttonType': 'button-type-19' },
{ 'id': 'AI20', image: 'nextL1.png', 'targetScreen': 'AHA', 'buttonType': 'button-type-20' },
{ 'id': 'AI21', image: 'symbolik.png', 'targetScreen': 'AH', 'buttonType': 'button-type-48' },

	
	
	
		],
		
		
			
	// apc1
	
'AIA':[	
		
		
		{ 'id': 'AIA1', image: 'indexierung.png', 'targetScreen': 'AIA', 'buttonType': 'button-type-1' },
{ 'id': 'AIA2', image: 'palette.png', 'targetScreen': 'AIE', 'buttonType': 'button-type-2' },
{ 'id': 'AIA3', image: 'spannkrhyd.png', 'targetScreen': 'AIF', 'buttonType': 'button-type-3' },
{ 'id': 'AIA4', image: 'spannkrpn.png', 'targetScreen': 'AN', 'buttonType': 'button-type-4' },
{ 'id': 'AIA5', image: 'spannkrpnhd.png', 'targetScreen': 'AO', 'buttonType': 'button-type-5' },
{ 'id': 'AIA6', image: 'auflagekontr.png', 'targetScreen': 'AP', 'buttonType': 'button-type-6' },
{ 'id': 'AIA7', image: 'abblasungpal.png', 'targetScreen': 'AS', 'buttonType': 'button-type-7' },
{ 'id': 'AIA8', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-8' },
{ 'id': 'AIA9', image: 'vorbereiten.png', 'targetScreen': 'AH', 'buttonType': 'button-type-9' },
{ 'id': 'AIA10', image: 'statusAH.png', 'targetScreen': 'A', 'buttonType': 'button-type-10' },
{ 'id': 'AIA11', image: 'handbetriebAIA.png', 'targetScreen': 'AIA', 'buttonType': 'button-type-11' },
{ 'id': 'AIA12', image: 'diagnose.png', 'targetScreen': 'AJ', 'buttonType': 'button-type-12' },
{ 'id': 'AIA13', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-13' },
{ 'id': 'AIA14', image: 'prozess.png', 'targetScreen': 'AK', 'buttonType': 'button-type-14' },
{ 'id': 'AIA15', image: 'instandhalt.png', 'targetScreen': 'AL', 'buttonType': 'button-type-15' },
{ 'id': 'AIA16', image: 'service.png', 'targetScreen': 'AM', 'buttonType': 'button-type-16' },
{ 'id': 'AIA17', image: 'bbbutton.png', 'targetScreen': 'AI', 'buttonType': 'button-type-17' },
{ 'id': 'AIA18', image: 'bbutton.png', 'targetScreen': 'D', 'buttonType': 'button-type-18' },
{ 'id': 'AIA19', image: 'nextP1.png', 'targetScreen': 'AIC', 'buttonType': 'button-type-19' },
{ 'id': 'AIA20', image: 'nextL1.png', 'targetScreen': 'AIA', 'buttonType': 'button-type-20' },
{ 'id': 'AIA21', image: 'symbolik.png', 'targetScreen': 'AH', 'buttonType': 'button-type-48' },

		
		
		
		
		
		
		],
		
		
		// apc2
	'AIC':[		
		
		{ 'id': 'AIC1', image: 'indexierung.png', 'targetScreen': 'AIA', 'buttonType': 'button-type-1' },
{ 'id': 'AIC2', image: 'palette.png', 'targetScreen': 'AIE', 'buttonType': 'button-type-2' },
{ 'id': 'AIC3', image: 'spannkrhyd.png', 'targetScreen': 'AIF', 'buttonType': 'button-type-3' },
{ 'id': 'AIC4', image: 'spannkrpn.png', 'targetScreen': 'AN', 'buttonType': 'button-type-4' },
{ 'id': 'AIC5', image: 'spannkrpnhd.png', 'targetScreen': 'AO', 'buttonType': 'button-type-5' },
{ 'id': 'AIC6', image: 'auflagekontr.png', 'targetScreen': 'AP', 'buttonType': 'button-type-6' },
{ 'id': 'AIC7', image: 'abblasungpal.png', 'targetScreen': 'AS', 'buttonType': 'button-type-7' },
{ 'id': 'AIC8', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-8' },
{ 'id': 'AIC9', image: 'vorbereiten.png', 'targetScreen': 'AH', 'buttonType': 'button-type-9' },
{ 'id': 'AIC10', image: 'statusAH.png', 'targetScreen': 'A', 'buttonType': 'button-type-10' },
{ 'id': 'AIC11', image: 'handbetriebAIA.png', 'targetScreen': 'AIC', 'buttonType': 'button-type-11' },
{ 'id': 'AIC12', image: 'diagnose.png', 'targetScreen': 'AJ', 'buttonType': 'button-type-12' },
{ 'id': 'AIC13', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-13' },
{ 'id': 'AIC14', image: 'prozess.png', 'targetScreen': 'AK', 'buttonType': 'button-type-14' },
{ 'id': 'AIC15', image: 'instandhalt.png', 'targetScreen': 'AL', 'buttonType': 'button-type-15' },
{ 'id': 'AIC16', image: 'service.png', 'targetScreen': 'AM', 'buttonType': 'button-type-16' },
{ 'id': 'AIC17', image: 'bbbutton.png', 'targetScreen': 'AI', 'buttonType': 'button-type-17' },
{ 'id': 'AIC18', image: 'bbutton.png', 'targetScreen': '', 'buttonType': 'button-type-18' },
{ 'id': 'AIC19', image: 'nextP1.png', 'targetScreen': 'AIC', 'buttonType': 'button-type-19' },
{ 'id': 'AIC20', image: 'nextL1.png', 'targetScreen': 'AIA', 'buttonType': 'button-type-20' },
{ 'id': 'AIC21', image: 'symbolik.png', 'targetScreen': 'AH', 'buttonType': 'button-type-48' },

		
		
	],	
		
	
	
	
	
	//palette 
	
	'AIE':[	
	{ 'id': 'AIE1', image: 'indexierungAIE.png', 'targetScreen': 'AIA', 'buttonType': 'button-type-1' },
{ 'id': 'AIE2', image: 'paletteAIE.png', 'targetScreen': 'AIE', 'buttonType': 'button-type-2' },
{ 'id': 'AIE3', image: 'spannkrhyd.png', 'targetScreen': 'AIF', 'buttonType': 'button-type-3' },
{ 'id': 'AIE4', image: 'spannkrpn.png', 'targetScreen': 'AN', 'buttonType': 'button-type-4' },
{ 'id': 'AIE5', image: 'spannkrpnhd.png', 'targetScreen': 'AO', 'buttonType': 'button-type-5' },
{ 'id': 'AIE6', image: 'auflagekontr.png', 'targetScreen': 'AP', 'buttonType': 'button-type-6' },
{ 'id': 'AIE7', image: 'abblasungpal.png', 'targetScreen': 'AS', 'buttonType': 'button-type-7' },
{ 'id': 'AIE8', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-8' },
{ 'id': 'AIE9', image: 'vorbereiten.png', 'targetScreen': 'AH', 'buttonType': 'button-type-9' },
{ 'id': 'AIE10', image: 'statusAH.png', 'targetScreen': 'A', 'buttonType': 'button-type-10' },
{ 'id': 'AIE11', image: 'handbetriebAIA.png', 'targetScreen': 'AIE', 'buttonType': 'button-type-11' },
{ 'id': 'AIE12', image: 'diagnose.png', 'targetScreen': 'AJ', 'buttonType': 'button-type-12' },
{ 'id': 'AIE13', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-13' },
{ 'id': 'AIE14', image: 'prozess.png', 'targetScreen': 'AK', 'buttonType': 'button-type-14' },
{ 'id': 'AIE15', image: 'instandhalt.png', 'targetScreen': 'AL', 'buttonType': 'button-type-15' },
{ 'id': 'AIE16', image: 'service.png', 'targetScreen': 'AM', 'buttonType': 'button-type-16' },
{ 'id': 'AIE17', image: 'bbbutton.png', 'targetScreen': 'AI', 'buttonType': 'button-type-17' },
{ 'id': 'AIE18', image: 'bbutton.png', 'targetScreen': '', 'buttonType': 'button-type-18' },
{ 'id': 'AIE19', image: 'nextP1.png', 'targetScreen': '', 'buttonType': 'button-type-19' },
{ 'id': 'AIE20', image: 'nextL1.png', 'targetScreen': '', 'buttonType': 'button-type-20' },
{ 'id': 'AIE21', image: 'symbolik.png', 'targetScreen': 'AH', 'buttonType': 'button-type-48' },

	
	
	
		],	
		
		
	//spannkrhyd1	
		
	'AIF':[		
		
		
		{ 'id': 'AIF1', image: 'indexierungAIE.png', 'targetScreen': 'AIA', 'buttonType': 'button-type-1' },
{ 'id': 'AIF2', image: 'palette.png', 'targetScreen': 'AIE', 'buttonType': 'button-type-2' },
{ 'id': 'AIF3', image: 'spannkrhydAIF.png', 'targetScreen': 'AIF', 'buttonType': 'button-type-3' },
{ 'id': 'AIF4', image: 'spannkrpn.png', 'targetScreen': 'AN', 'buttonType': 'button-type-4' },
{ 'id': 'AIF5', image: 'spannkrpnhd.png', 'targetScreen': 'AO', 'buttonType': 'button-type-5' },
{ 'id': 'AIF6', image: 'auflagekontr.png', 'targetScreen': 'AP', 'buttonType': 'button-type-6' },
{ 'id': 'AIF7', image: 'abblasungpal.png', 'targetScreen': 'AS', 'buttonType': 'button-type-7' },
{ 'id': 'AIF8', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-8' },
{ 'id': 'AIF9', image: 'vorbereiten.png', 'targetScreen': 'AH', 'buttonType': 'button-type-9' },
{ 'id': 'AIF10', image: 'statusAH.png', 'targetScreen': 'A', 'buttonType': 'button-type-10' },
{ 'id': 'AIF11', image: 'handbetriebAIA.png', 'targetScreen': 'AIF', 'buttonType': 'button-type-11' },
{ 'id': 'AIF12', image: 'diagnose.png', 'targetScreen': 'AJ', 'buttonType': 'button-type-12' },
{ 'id': 'AIF13', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-13' },
{ 'id': 'AIF14', image: 'prozess.png', 'targetScreen': 'AK', 'buttonType': 'button-type-14' },
{ 'id': 'AIF15', image: 'instandhalt.png', 'targetScreen': 'AL', 'buttonType': 'button-type-15' },
{ 'id': 'AIF16', image: 'service.png', 'targetScreen': 'AM', 'buttonType': 'button-type-16' },
{ 'id': 'AIF17', image: 'bbbutton.png', 'targetScreen': 'AI', 'buttonType': 'button-type-17' },
{ 'id': 'AIF18', image: 'bbutton.png', 'targetScreen': '', 'buttonType': 'button-type-18' },
{ 'id': 'AIF19', image: 'nextP1.png', 'targetScreen': 'AIG', 'buttonType': 'button-type-19' },
{ 'id': 'AIF20', image: 'nextL1.png', 'targetScreen': 'AIF', 'buttonType': 'button-type-20' },
{ 'id': 'AIF21', image: 'symbolik.png', 'targetScreen': 'AH', 'buttonType': 'button-type-48' },

		
		
		
		
		
		],	
		
		
		//spannkrhyd2
		'AIG':[	
		
		
		{ 'id': 'AIG1', image: 'indexierungAIE.png', 'targetScreen': 'AIA', 'buttonType': 'button-type-1' },
{ 'id': 'AIG2', image: 'palette.png', 'targetScreen': 'AIE', 'buttonType': 'button-type-2' },
{ 'id': 'AIG3', image: 'spannkrhydAIF.png', 'targetScreen': 'AIF', 'buttonType': 'button-type-3' },
{ 'id': 'AIG4', image: 'spannkrpn.png', 'targetScreen': 'AN', 'buttonType': 'button-type-4' },
{ 'id': 'AIG5', image: 'spannkrpnhd.png', 'targetScreen': 'AO', 'buttonType': 'button-type-5' },
{ 'id': 'AIG6', image: 'auflagekontr.png', 'targetScreen': 'AP', 'buttonType': 'button-type-6' },
{ 'id': 'AIG7', image: 'abblasungpal.png', 'targetScreen': 'AS', 'buttonType': 'button-type-7' },
{ 'id': 'AIG8', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-8' },
{ 'id': 'AIG9', image: 'vorbereiten.png', 'targetScreen': 'AH', 'buttonType': 'button-type-9' },
{ 'id': 'AIG10', image: 'statusAH.png', 'targetScreen': 'A', 'buttonType': 'button-type-10' },
{ 'id': 'AIG11', image: 'handbetriebAIA.png', 'targetScreen': 'AIG', 'buttonType': 'button-type-11' },
{ 'id': 'AIG12', image: 'diagnose.png', 'targetScreen': 'AJ', 'buttonType': 'button-type-12' },
{ 'id': 'AIG13', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-13' },
{ 'id': 'AIG14', image: 'prozess.png', 'targetScreen': 'AK', 'buttonType': 'button-type-14' },
{ 'id': 'AIG15', image: 'instandhalt.png', 'targetScreen': 'AL', 'buttonType': 'button-type-15' },
{ 'id': 'AIG16', image: 'service.png', 'targetScreen': 'AM', 'buttonType': 'button-type-16' },
{ 'id': 'AIG17', image: 'bbbutton.png', 'targetScreen': 'AI', 'buttonType': 'button-type-17' },
{ 'id': 'AIG18', image: 'bbutton.png', 'targetScreen': '', 'buttonType': 'button-type-18' },
{ 'id': 'AIG19', image: 'nextP1.png', 'targetScreen': 'AIH', 'buttonType': 'button-type-19' },
{ 'id': 'AIG20', image: 'nextL1.png', 'targetScreen': 'AIF', 'buttonType': 'button-type-20' },
{ 'id': 'AIG21', image: 'symbolik.png', 'targetScreen': 'AH', 'buttonType': 'button-type-48' },

		
		
		],	
		
		//spannkrhyd3
		'AIH':[	
			
		
		{ 'id': 'AIH1', image: 'indexierungAIE.png', 'targetScreen': 'AIA', 'buttonType': 'button-type-1' },
{ 'id': 'AIH2', image: 'palette.png', 'targetScreen': 'AIE', 'buttonType': 'button-type-2' },
{ 'id': 'AIH3', image: 'spannkrhydAIF.png', 'targetScreen': 'AIF', 'buttonType': 'button-type-3' },
{ 'id': 'AIH4', image: 'spannkrpn.png', 'targetScreen': 'AN', 'buttonType': 'button-type-4' },
{ 'id': 'AIH5', image: 'spannkrpnhd.png', 'targetScreen': 'AO', 'buttonType': 'button-type-5' },
{ 'id': 'AIH6', image: 'auflagekontr.png', 'targetScreen': 'AP', 'buttonType': 'button-type-6' },
{ 'id': 'AIH7', image: 'abblasungpal.png', 'targetScreen': 'AS', 'buttonType': 'button-type-7' },
{ 'id': 'AIH8', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-8' },
{ 'id': 'AIH9', image: 'vorbereiten.png', 'targetScreen': 'AH', 'buttonType': 'button-type-9' },
{ 'id': 'AIH10', image: 'statusAH.png', 'targetScreen': 'A', 'buttonType': 'button-type-10' },
{ 'id': 'AIH11', image: 'handbetriebAIA.png', 'targetScreen': 'AIH', 'buttonType': 'button-type-11' },
{ 'id': 'AIH12', image: 'diagnose.png', 'targetScreen': 'AJ', 'buttonType': 'button-type-12' },
{ 'id': 'AIH13', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-13' },
{ 'id': 'AIH14', image: 'prozess.png', 'targetScreen': 'AK', 'buttonType': 'button-type-14' },
{ 'id': 'AIH15', image: 'instandhalt.png', 'targetScreen': 'AL', 'buttonType': 'button-type-15' },
{ 'id': 'AIH16', image: 'service.png', 'targetScreen': 'AM', 'buttonType': 'button-type-16' },
{ 'id': 'AIH17', image: 'bbbutton.png', 'targetScreen': 'AI', 'buttonType': 'button-type-17' },
{ 'id': 'AIH18', image: 'bbutton.png', 'targetScreen': '', 'buttonType': 'button-type-18' },
{ 'id': 'AIH19', image: 'nextP1.png', 'targetScreen': 'AII', 'buttonType': 'button-type-19' },
{ 'id': 'AIH20', image: 'nextL1.png', 'targetScreen': 'AIG', 'buttonType': 'button-type-20' },
{ 'id': 'AIH21', image: 'symbolik.png', 'targetScreen': 'AH', 'buttonType': 'button-type-48' },

		
		
	],		
	
	//spannkrhyd4
		'AII':[	
			
	
	
	{ 'id': 'AII1', image: 'indexierungAIE.png', 'targetScreen': 'AIA', 'buttonType': 'button-type-1' },
{ 'id': 'AII2', image: 'palette.png', 'targetScreen': 'AIE', 'buttonType': 'button-type-2' },
{ 'id': 'AII3', image: 'spannkrhydAIF.png', 'targetScreen': 'AIF', 'buttonType': 'button-type-3' },
{ 'id': 'AII4', image: 'spannkrpn.png', 'targetScreen': 'AN', 'buttonType': 'button-type-4' },
{ 'id': 'AII5', image: 'spannkrpnhd.png', 'targetScreen': 'AO', 'buttonType': 'button-type-5' },
{ 'id': 'AII6', image: 'auflagekontr.png', 'targetScreen': 'AP', 'buttonType': 'button-type-6' },
{ 'id': 'AII7', image: 'abblasungpal.png', 'targetScreen': 'AS', 'buttonType': 'button-type-7' },
{ 'id': 'AII8', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-8' },
{ 'id': 'AII9', image: 'vorbereiten.png', 'targetScreen': 'AH', 'buttonType': 'button-type-9' },
{ 'id': 'AII10', image: 'statusAH.png', 'targetScreen': 'A', 'buttonType': 'button-type-10' },
{ 'id': 'AII11', image: 'handbetriebAIA.png', 'targetScreen': 'AII', 'buttonType': 'button-type-11' },
{ 'id': 'AII12', image: 'diagnose.png', 'targetScreen': 'AJ', 'buttonType': 'button-type-12' },
{ 'id': 'AII13', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-13' },
{ 'id': 'AII14', image: 'prozess.png', 'targetScreen': 'AK', 'buttonType': 'button-type-14' },
{ 'id': 'AII15', image: 'instandhalt.png', 'targetScreen': 'AL', 'buttonType': 'button-type-15' },
{ 'id': 'AII16', image: 'service.png', 'targetScreen': 'AM', 'buttonType': 'button-type-16' },
{ 'id': 'AII17', image: 'bbbutton.png', 'targetScreen': 'AI', 'buttonType': 'button-type-17' },
{ 'id': 'AII18', image: 'bbutton.png', 'targetScreen': '', 'buttonType': 'button-type-18' },
{ 'id': 'AII19', image: 'nextP1.png', 'targetScreen': 'AII', 'buttonType': 'button-type-19' },
{ 'id': 'AII20', image: 'nextL1.png', 'targetScreen': 'AIH', 'buttonType': 'button-type-20' },
{ 'id': 'AII21', image: 'symbolik.png', 'targetScreen': 'AH', 'buttonType': 'button-type-48' },

	
	
	
	
	
	
	],	
	
	
	//spannkrpn
		'AN':[	
			
	
	
	{ 'id': 'AN1', image: 'indexierungAIE.png', 'targetScreen': 'AIA', 'buttonType': 'button-type-1' },
{ 'id': 'AN2', image: 'palette.png', 'targetScreen': 'AIE', 'buttonType': 'button-type-2' },
{ 'id': 'AN3', image: 'spannkrhyd.png', 'targetScreen': 'AIF', 'buttonType': 'button-type-3' },
{ 'id': 'AN4', image: 'spannkrpnAN.png', 'targetScreen': 'AN', 'buttonType': 'button-type-4' },
{ 'id': 'AN5', image: 'spannkrpnhd.png', 'targetScreen': 'AO', 'buttonType': 'button-type-5' },
{ 'id': 'AN6', image: 'auflagekontr.png', 'targetScreen': 'AP', 'buttonType': 'button-type-6' },
{ 'id': 'AN7', image: 'abblasungpal.png', 'targetScreen': 'AS', 'buttonType': 'button-type-7' },
{ 'id': 'AN8', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-8' },
{ 'id': 'AN9', image: 'vorbereiten.png', 'targetScreen': 'AH', 'buttonType': 'button-type-9' },
{ 'id': 'AN10', image: 'statusAH.png', 'targetScreen': 'A', 'buttonType': 'button-type-10' },
{ 'id': 'AN11', image: 'handbetriebAIA.png', 'targetScreen': 'AN', 'buttonType': 'button-type-11' },
{ 'id': 'AN12', image: 'diagnose.png', 'targetScreen': 'AJ', 'buttonType': 'button-type-12' },
{ 'id': 'AN13', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-13' },
{ 'id': 'AN14', image: 'prozess.png', 'targetScreen': 'AK', 'buttonType': 'button-type-14' },
{ 'id': 'AN15', image: 'instandhalt.png', 'targetScreen': 'AL', 'buttonType': 'button-type-15' },
{ 'id': 'AN16', image: 'service.png', 'targetScreen': 'AM', 'buttonType': 'button-type-16' },
{ 'id': 'AN17', image: 'bbbutton.png', 'targetScreen': 'AI', 'buttonType': 'button-type-17' },
{ 'id': 'AN18', image: 'bbutton.png', 'targetScreen': '', 'buttonType': 'button-type-18' },
{ 'id': 'AN19', image: 'nextP1.png', 'targetScreen': '', 'buttonType': 'button-type-19' },
{ 'id': 'AN20', image: 'nextL1.png', 'targetScreen': '', 'buttonType': 'button-type-20' },
{ 'id': 'AN21', image: 'symbolik.png', 'targetScreen': 'AH', 'buttonType': 'button-type-48' },

	
	
	
	],	
	
	
	
	//spannkrpnhdAO
		'AO':[	
			
	
	{ 'id': 'AO1', image: 'indexierungAIE.png', 'targetScreen': 'AIA', 'buttonType': 'button-type-1' },
{ 'id': 'AO2', image: 'palette.png', 'targetScreen': 'AIE', 'buttonType': 'button-type-2' },
{ 'id': 'AO3', image: 'spannkrhyd.png', 'targetScreen': 'AIF', 'buttonType': 'button-type-3' },
{ 'id': 'AO4', image: 'spannkrpn.png', 'targetScreen': 'AN', 'buttonType': 'button-type-4' },
{ 'id': 'AO5', image: 'spannkrpnhdAO.png', 'targetScreen': 'AO', 'buttonType': 'button-type-5' },
{ 'id': 'AO6', image: 'auflagekontr.png', 'targetScreen': 'AP', 'buttonType': 'button-type-6' },
{ 'id': 'AO7', image: 'abblasungpal.png', 'targetScreen': 'AS', 'buttonType': 'button-type-7' },
{ 'id': 'AO8', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-8' },
{ 'id': 'AO9', image: 'vorbereiten.png', 'targetScreen': 'AH', 'buttonType': 'button-type-9' },
{ 'id': 'AO10', image: 'statusAH.png', 'targetScreen': 'A', 'buttonType': 'button-type-10' },
{ 'id': 'AO11', image: 'handbetriebAIA.png', 'targetScreen': 'AO', 'buttonType': 'button-type-11' },
{ 'id': 'AO12', image: 'diagnose.png', 'targetScreen': 'AJ', 'buttonType': 'button-type-12' },
{ 'id': 'AO13', image: 'leer.png', 'targetScreen': '', 'buttonType': 'button-type-13' },
{ 'id': 'AO14', image: 'prozess.png', 'targetScreen': 'AK', 'buttonType': 'button-type-14' },
{ 'id': 'AO15', image: 'instandhalt.png', 'targetScreen': 'AL', 'buttonType': 'button-type-15' },
{ 'id': 'AO16', image: 'service.png', 'targetScreen': 'AM', 'buttonType': 'button-type-16' },
{ 'id': 'AO17', image: 'bbbutton.png', 'targetScreen': 'AI', 'buttonType': 'button-type-17' },
{ 'id': 'AO18', image: 'bbutton.png', 'targetScreen': '', 'buttonType': 'button-type-18' },
{ 'id': 'AO19', image: 'nextP1.png', 'targetScreen': '', 'buttonType': 'button-type-19' },
{ 'id': 'AO20', image: 'nextL1.png', 'targetScreen': '', 'buttonType': 'button-type-20' },
{ 'id': 'AO21', image: 'symbolik.png', 'targetScreen': 'AH', 'buttonType': 'button-type-48' },

	
	
	
	],	
	
	
	// auflagekontr1
		'AP':[	
			
	
	
	{ id: 'AP1', image: 'indexierungAIE.png', targetScreen: 'AIA', buttonType: 'button-type-1' },
{ id: 'AP2', image: 'palette.png', targetScreen: 'AIE', buttonType: 'button-type-2' },
{ id: 'AP3', image: 'spannkrhyd.png', targetScreen: 'AIF', buttonType: 'button-type-3' },
{ id: 'AP4', image: 'spannkrpn.png', targetScreen: 'AN', buttonType: 'button-type-4' },
{ id: 'AP5', image: 'spannkrpnhd.png', targetScreen: 'AO', buttonType: 'button-type-5' },
{ id: 'AP6', image: 'auflagekontrAP.png', targetScreen: 'AP', buttonType: 'button-type-6' },
{ id: 'AP7', image: 'abblasungpal.png', targetScreen: 'AS', buttonType: 'button-type-7' },
{ id: 'AP8', image: 'leer.png', targetScreen: '', buttonType: 'button-type-8' },
{ id: 'AP9', image: 'vorbereiten.png', targetScreen: 'AH', buttonType: 'button-type-9' },
{ id: 'AP10', image: 'statusAH.png', targetScreen: 'A', buttonType: 'button-type-10' },
{ id: 'AP11', image: 'handbetriebAIA.png', targetScreen: 'AP', buttonType: 'button-type-11' },
{ id: 'AP12', image: 'diagnose.png', targetScreen: 'AJ', buttonType: 'button-type-12' },
{ id: 'AP13', image: 'leer.png', targetScreen: '', buttonType: 'button-type-13' },
{ id: 'AP14', image: 'prozess.png', targetScreen: 'AK', buttonType: 'button-type-14' },
{ id: 'AP15', image: 'instandhalt.png', targetScreen: 'AL', buttonType: 'button-type-15' },
{ id: 'AP16', image: 'service.png', targetScreen: 'AM', buttonType: 'button-type-16' },
{ id: 'AP17', image: 'bbbutton.png', targetScreen: 'AI', buttonType: 'button-type-17' },
{ id: 'AP18', image: 'bbutton.png', targetScreen: '', buttonType: 'button-type-18' },
{ id: 'AP19', image: 'nextP1.png', targetScreen: 'AQ', buttonType: 'button-type-19' },
{ id: 'AP20', image: 'nextL1.png', targetScreen: 'AP', buttonType: 'button-type-20' },
{ id: 'AP21', image: 'symbolik.png', targetScreen: 'AH', buttonType: 'button-type-48' },

	
	
	
	
	
	],
	
	
	// auflagekontr2
		'AQ':[	
			
	
	
	{ id: 'AQ1', image: 'indexierungAIE.png', targetScreen: 'AIA', buttonType: 'button-type-1' },
{ id: 'AQ2', image: 'palette.png', targetScreen: 'AIE', buttonType: 'button-type-2' },
{ id: 'AQ3', image: 'spannkrhyd.png', targetScreen: 'AIF', buttonType: 'button-type-3' },
{ id: 'AQ4', image: 'spannkrpn.png', targetScreen: 'AN', buttonType: 'button-type-4' },
{ id: 'AQ5', image: 'spannkrpnhd.png', targetScreen: 'AO', buttonType: 'button-type-5' },
{ id: 'AQ6', image: 'auflagekontrAP.png', targetScreen: 'AP', buttonType: 'button-type-6' },
{ id: 'AQ7', image: 'abblasungpal.png', targetScreen: 'AS', buttonType: 'button-type-7' },
{ id: 'AQ8', image: 'leer.png', targetScreen: '', buttonType: 'button-type-8' },
{ id: 'AQ9', image: 'vorbereiten.png', targetScreen: 'AH', buttonType: 'button-type-9' },
{ id: 'AQ10', image: 'statusAH.png', targetScreen: 'A', buttonType: 'button-type-10' },
{ id: 'AQ11', image: 'handbetriebAIA.png', targetScreen: 'AQ', buttonType: 'button-type-11' },
{ id: 'AQ12', image: 'diagnose.png', targetScreen: 'AJ', buttonType: 'button-type-12' },
{ id: 'AQ13', image: 'leer.png', targetScreen: '', buttonType: 'button-type-13' },
{ id: 'AQ14', image: 'prozess.png', targetScreen: 'AK', buttonType: 'button-type-14' },
{ id: 'AQ15', image: 'instandhalt.png', targetScreen: 'AL', buttonType: 'button-type-15' },
{ id: 'AQ16', image: 'service.png', targetScreen: 'AM', buttonType: 'button-type-16' },
{ id: 'AQ17', image: 'bbbutton.png', targetScreen: 'AI', buttonType: 'button-type-17' },
{ id: 'AQ18', image: 'bbutton.png', targetScreen: '', buttonType: 'button-type-18' },
{ id: 'AQ19', image: 'nextP1.png', targetScreen: 'AR', buttonType: 'button-type-19' },
{ id: 'AQ20', image: 'nextL1.png', targetScreen: 'AP', buttonType: 'button-type-20' },
{ id: 'AQ21', image: 'symbolik.png', targetScreen: 'AH', buttonType: 'button-type-48' },

	
	
	
	
	
	
	],
	
	
	// auflagekontr3
		'AR':[	
	
	
	
	
		
	{ id: 'AQ1', image: 'indexierungAIE.png', targetScreen: 'AIA', buttonType: 'button-type-1' },
{ id: 'AQ2', image: 'palette.png', targetScreen: 'AIE', buttonType: 'button-type-2' },
{ id: 'AQ3', image: 'spannkrhyd.png', targetScreen: 'AIF', buttonType: 'button-type-3' },
{ id: 'AQ4', image: 'spannkrpn.png', targetScreen: 'AN', buttonType: 'button-type-4' },
{ id: 'AQ5', image: 'spannkrpnhd.png', targetScreen: 'AO', buttonType: 'button-type-5' },
{ id: 'AQ6', image: 'auflagekontrAP.png', targetScreen: 'AP', buttonType: 'button-type-6' },
{ id: 'AQ7', image: 'abblasungpal.png', targetScreen: 'AS', buttonType: 'button-type-7' },
{ id: 'AQ8', image: 'leer.png', targetScreen: '', buttonType: 'button-type-8' },
{ id: 'AQ9', image: 'vorbereiten.png', targetScreen: 'AH', buttonType: 'button-type-9' },
{ id: 'AQ10', image: 'statusAH.png', targetScreen: 'A', buttonType: 'button-type-10' },
{ id: 'AQ11', image: 'handbetriebAIA.png', targetScreen: 'AR', buttonType: 'button-type-11' },
{ id: 'AQ12', image: 'diagnose.png', targetScreen: 'AJ', buttonType: 'button-type-12' },
{ id: 'AQ13', image: 'leer.png', targetScreen: '', buttonType: 'button-type-13' },
{ id: 'AQ14', image: 'prozess.png', targetScreen: 'AK', buttonType: 'button-type-14' },
{ id: 'AQ15', image: 'instandhalt.png', targetScreen: 'AL', buttonType: 'button-type-15' },
{ id: 'AQ16', image: 'service.png', targetScreen: 'AM', buttonType: 'button-type-16' },
{ id: 'AQ17', image: 'bbbutton.png', targetScreen: 'AI', buttonType: 'button-type-17' },
{ id: 'AQ18', image: 'bbutton.png', targetScreen: '', buttonType: 'button-type-18' },
{ id: 'AQ19', image: 'nextP1.png', targetScreen: 'AR', buttonType: 'button-type-19' },
{ id: 'AQ20', image: 'nextL1.png', targetScreen: 'AQ', buttonType: 'button-type-20' },
{ id: 'AQ21', image: 'symbolik.png', targetScreen: 'AH', buttonType: 'button-type-48' },
	
	
	
	
	
	
	
	
	
	],
	
	
	
	
	
	// abblasungpalAP
		'AS':[	
	
	
	

	{ id: 'AS1', image: 'indexierungAIE.png', targetScreen: 'AIA', buttonType: 'button-type-1' },
{ id: 'AS2', image: 'palette.png', targetScreen: 'AIE', buttonType: 'button-type-2' },
{ id: 'AS3', image: 'spannkrhyd.png', targetScreen: 'AIF', buttonType: 'button-type-3' },
{ id: 'AS4', image: 'spannkrpn.png', targetScreen: 'AN', buttonType: 'button-type-4' },
{ id: 'AS5', image: 'spannkrpnhd.png', targetScreen: 'AO', buttonType: 'button-type-5' },
{ id: 'AS6', image: 'auflagekontr.png', targetScreen: 'AP', buttonType: 'button-type-6' },
{ id: 'AS7', image: 'abblasungpalAS.png', targetScreen: 'AS', buttonType: 'button-type-7' },
{ id: 'AS8', image: 'leer.png', targetScreen: '', buttonType: 'button-type-8' },
{ id: 'AS9', image: 'vorbereiten.png', targetScreen: 'AH', buttonType: 'button-type-9' },
{ id: 'AS10', image: 'statusAH.png', targetScreen: 'A', buttonType: 'button-type-10' },
{ id: 'AS11', image: 'handbetriebAIA.png', targetScreen: 'AS', buttonType: 'button-type-11' },
{ id: 'AS12', image: 'diagnose.png', targetScreen: 'AJ', buttonType: 'button-type-12' },
{ id: 'AS13', image: 'leer.png', targetScreen: '', buttonType: 'button-type-13' },
{ id: 'AS14', image: 'prozess.png', targetScreen: 'AK', buttonType: 'button-type-14' },
{ id: 'AS15', image: 'instandhalt.png', targetScreen: 'AL', buttonType: 'button-type-15' },
{ id: 'AS16', image: 'service.png', targetScreen: 'AM', buttonType: 'button-type-16' },
{ id: 'AS17', image: 'bbbutton.png', targetScreen: 'AI', buttonType: 'button-type-17' },
{ id: 'AS18', image: 'bbutton.png', targetScreen: '', buttonType: 'button-type-18' },
{ id: 'AS19', image: 'nextP1.png', targetScreen: '', buttonType: 'button-type-19' },
{ id: 'AS20', image: 'nextL1.png', targetScreen: '', buttonType: 'button-type-20' },
{ id: 'AS21', image: 'symbolik.png', targetScreen: 'AH', buttonType: 'button-type-48' },

	

	
	
	
	],
	
	
	
	
	// atcSP111
	
		'AV':[	
	
	
	{ id: 'AV1', image: 'atcSP111.png', targetScreen: 'AV', buttonType: 'button-type-1' },
{ id: 'AV2', image: 'atcSP112.png', targetScreen: 'AW', buttonType: 'button-type-2' },
{ id: 'AV3', image: 'leer.png', targetScreen: '', buttonType: 'button-type-3' },
{ id: 'AV4', image: 'leer.png', targetScreen: '', buttonType: 'button-type-4' },
{ id: 'AV5', image: 'leer.png', targetScreen: '', buttonType: 'button-type-5' },
{ id: 'AV6', image: 'leer.png', targetScreen: '', buttonType: 'button-type-6' },
{ id: 'AV7', image: 'leer.png', targetScreen: '', buttonType: 'button-type-7' },
{ id: 'AV8', image: 'leer.png', targetScreen: '', buttonType: 'button-type-8' },
{ id: 'AV9', image: 'vorbereiten.png', targetScreen: 'AH', buttonType: 'button-type-9' },
{ id: 'AV10', image: 'statusAH.png', targetScreen: 'A', buttonType: 'button-type-10' },
{ id: 'AV11', image: 'handbetriebAIA.png', targetScreen: 'AV', buttonType: 'button-type-11' },
{ id: 'AV12', image: 'diagnose.png', targetScreen: 'AJ', buttonType: 'button-type-12' },
{ id: 'AV13', image: 'leer.png', targetScreen: '', buttonType: 'button-type-13' },
{ id: 'AV14', image: 'prozess.png', targetScreen: 'AK', buttonType: 'button-type-14' },
{ id: 'AV15', image: 'instandhalt.png', targetScreen: 'AL', buttonType: 'button-type-15' },
{ id: 'AV16', image: 'service.png', targetScreen: 'AM', buttonType: 'button-type-16' },
{ id: 'AV17', image: 'bbbutton.png', targetScreen: 'AI', buttonType: 'button-type-17' },
{ id: 'AV18', image: 'bbutton.png', targetScreen: '', buttonType: 'button-type-18' },
{ id: 'AV19', image: 'nextP1.png', targetScreen: 'AVA', buttonType: 'button-type-19' },
{ id: 'AV20', image: 'nextL1.png', targetScreen: 'AV', buttonType: 'button-type-20' },
{ id: 'AV21', image: 'symbolik.png', targetScreen: 'AH', buttonType: 'button-type-48' },

	
	
	
	
	
	
	
],
	
	
	
	// atcSP112
	
	'AVA':[	
	
	{ id: 'AVA1', image: 'atcSP111.png', targetScreen: 'AVA', buttonType: 'button-type-1' },
{ id: 'AVA2', image: 'atcSP112.png', targetScreen: 'AW', buttonType: 'button-type-2' },
{ id: 'AVA3', image: 'leer.png', targetScreen: '', buttonType: 'button-type-3' },
{ id: 'AVA4', image: 'leer.png', targetScreen: '', buttonType: 'button-type-4' },
{ id: 'AVA5', image: 'leer.png', targetScreen: '', buttonType: 'button-type-5' },
{ id: 'AVA6', image: 'leer.png', targetScreen: '', buttonType: 'button-type-6' },
{ id: 'AVA7', image: 'leer.png', targetScreen: '', buttonType: 'button-type-7' },
{ id: 'AVA8', image: 'leer.png', targetScreen: '', buttonType: 'button-type-8' },
{ id: 'AVA9', image: 'vorbereiten.png', targetScreen: 'AH', buttonType: 'button-type-9' },
{ id: 'AVA10', image: 'statusAH.png', targetScreen: 'A', buttonType: 'button-type-10' },
{ id: 'AVA11', image: 'handbetriebAIA.png', targetScreen: 'AVA', buttonType: 'button-type-11' },
{ id: 'AVA12', image: 'diagnose.png', targetScreen: 'AJ', buttonType: 'button-type-12' },
{ id: 'AVA13', image: 'leer.png', targetScreen: '', buttonType: 'button-type-13' },
{ id: 'AVA14', image: 'prozess.png', targetScreen: 'AK', buttonType: 'button-type-14' },
{ id: 'AVA15', image: 'instandhalt.png', targetScreen: 'AL', buttonType: 'button-type-15' },
{ id: 'AVA16', image: 'service.png', targetScreen: 'AM', buttonType: 'button-type-16' },
{ id: 'AVA17', image: 'bbbutton.png', targetScreen: 'AI', buttonType: 'button-type-17' },
{ id: 'AVA18', image: 'bbutton.png', targetScreen: '', buttonType: 'button-type-18' },
{ id: 'AVA19', image: 'nextP1.png', targetScreen: 'AVA', buttonType: 'button-type-19' },
{ id: 'AVA20', image: 'nextL1.png', targetScreen: 'AV', buttonType: 'button-type-20' },
{ id: 'AVA21', image: 'symbolik.png', targetScreen: 'AH', buttonType: 'button-type-48' },

	
	
	],
	
	// atcSP411
	
	'AW':[	
	
	
	{ id: 'AW1', image: 'atcSP412.png', targetScreen: 'AV', buttonType: 'button-type-1' },
{ id: 'AW2', image: 'atcSP411.png', targetScreen: 'AW', buttonType: 'button-type-2' },
{ id: 'AW3', image: 'leer.png', targetScreen: '', buttonType: 'button-type-3' },
{ id: 'AW4', image: 'leer.png', targetScreen: '', buttonType: 'button-type-4' },
{ id: 'AW5', image: 'leer.png', targetScreen: '', buttonType: 'button-type-5' },
{ id: 'AW6', image: 'leer.png', targetScreen: '', buttonType: 'button-type-6' },
{ id: 'AW7', image: 'leer.png', targetScreen: '', buttonType: 'button-type-7' },
{ id: 'AW8', image: 'leer.png', targetScreen: '', buttonType: 'button-type-8' },
{ id: 'AW9', image: 'vorbereiten.png', targetScreen: 'AH', buttonType: 'button-type-9' },
{ id: 'AW10', image: 'statusAH.png', targetScreen: 'A', buttonType: 'button-type-10' },
{ id: 'AW11', image: 'handbetriebAIA.png', targetScreen: 'AW', buttonType: 'button-type-11' },
{ id: 'AW12', image: 'diagnose.png', targetScreen: 'AJ', buttonType: 'button-type-12' },
{ id: 'AW13', image: 'leer.png', targetScreen: '', buttonType: 'button-type-13' },
{ id: 'AW14', image: 'prozess.png', targetScreen: 'AK', buttonType: 'button-type-14' },
{ id: 'AW15', image: 'instandhalt.png', targetScreen: 'AL', buttonType: 'button-type-15' },
{ id: 'AW16', image: 'service.png', targetScreen: 'AM', buttonType: 'button-type-16' },
{ id: 'AW17', image: 'bbbutton.png', targetScreen: 'AI', buttonType: 'button-type-17' },
{ id: 'AW18', image: 'bbutton.png', targetScreen: '', buttonType: 'button-type-18' },
{ id: 'AW19', image: 'nextP1.png', targetScreen: 'AWA', buttonType: 'button-type-19' },
{ id: 'AW20', image: 'nextL1.png', targetScreen: 'AW', buttonType: 'button-type-20' },
{ id: 'AW21', image: 'symbolik.png', targetScreen: 'AH', buttonType: 'button-type-48' },

	
	
	
	],
	
	// atcSP412
	
	
	
	'AWA':[	
	
	
	
	
	
	
	{ id: 'AWA1', image: 'atcSP412.png', targetScreen: 'AV', buttonType: 'button-type-1' },
{ id: 'AWA2', image: 'atcSP411.png', targetScreen: 'AW', buttonType: 'button-type-2' },
{ id: 'AWA3', image: 'leer.png', targetScreen: '', buttonType: 'button-type-3' },
{ id: 'AWA4', image: 'leer.png', targetScreen: '', buttonType: 'button-type-4' },
{ id: 'AWA5', image: 'leer.png', targetScreen: '', buttonType: 'button-type-5' },
{ id: 'AWA6', image: 'leer.png', targetScreen: '', buttonType: 'button-type-6' },
{ id: 'AWA7', image: 'leer.png', targetScreen: '', buttonType: 'button-type-7' },
{ id: 'AWA8', image: 'leer.png', targetScreen: '', buttonType: 'button-type-8' },
{ id: 'AWA9', image: 'vorbereiten.png', targetScreen: 'AH', buttonType: 'button-type-9' },
{ id: 'AWA10', image: 'statusAH.png', targetScreen: 'A', buttonType: 'button-type-10' },
{ id: 'AWA11', image: 'handbetriebAIA.png', targetScreen: 'AWA', buttonType: 'button-type-11' },
{ id: 'AWA12', image: 'diagnose.png', targetScreen: 'AJ', buttonType: 'button-type-12' },
{ id: 'AWA13', image: 'leer.png', targetScreen: '', buttonType: 'button-type-13' },
{ id: 'AWA14', image: 'prozess.png', targetScreen: 'AK', buttonType: 'button-type-14' },
{ id: 'AWA15', image: 'instandhalt.png', targetScreen: 'AL', buttonType: 'button-type-15' },
{ id: 'AWA16', image: 'service.png', targetScreen: 'AM', buttonType: 'button-type-16' },
{ id: 'AWA17', image: 'bbbutton.png', targetScreen: 'AI', buttonType: 'button-type-17' },
{ id: 'AWA18', image: 'bbutton.png', targetScreen: '', buttonType: 'button-type-18' },
{ id: 'AWA19', image: 'nextP1.png', targetScreen: 'AWA', buttonType: 'button-type-19' },
{ id: 'AWA20', image: 'nextL1.png', targetScreen: 'AW', buttonType: 'button-type-20' },
{ id: 'AWA21', image: 'symbolik.png', targetScreen: 'AH', buttonType: 'button-type-48' },

	
	
	
	],
	
	
	// spindelnHandbetriebSP11
	
	
	
	'AU':[	
	
	
	
	
	{ id: 'AT1', image: 'SP111.png', targetScreen: 'AU', buttonType: 'button-type-1' },
{ id: 'AT2', image: 'SP112.png', targetScreen: 'AT', buttonType: 'button-type-2' },
{ id: 'AT3', image: 'leer.png', targetScreen: '', buttonType: 'button-type-3' },
{ id: 'AT4', image: 'leer.png', targetScreen: '', buttonType: 'button-type-4' },
{ id: 'AT5', image: 'leer.png', targetScreen: '', buttonType: 'button-type-5' },
{ id: 'AT6', image: 'leer.png', targetScreen: '', buttonType: 'button-type-6' },
{ id: 'AT7', image: 'leer.png', targetScreen: '', buttonType: 'button-type-7' },
{ id: 'AT8', image: 'leer.png', targetScreen: '', buttonType: 'button-type-8' },
{ id: 'AT9', image: 'vorbereiten.png', targetScreen: 'AH', buttonType: 'button-type-9' },
{ id: 'AT10', image: 'statusAH.png', targetScreen: 'A', buttonType: 'button-type-10' },
{ id: 'AT11', image: 'handbetriebAIA.png', targetScreen: 'AU', buttonType: 'button-type-11' },
{ id: 'AT12', image: 'diagnose.png', targetScreen: 'AJ', buttonType: 'button-type-12' },
{ id: 'AT13', image: 'leer.png', targetScreen: '', buttonType: 'button-type-13' },
{ id: 'AT14', image: 'prozess.png', targetScreen: 'AK', buttonType: 'button-type-14' },
{ id: 'AT15', image: 'instandhalt.png', targetScreen: 'AL', buttonType: 'button-type-15' },
{ id: 'AT16', image: 'service.png', targetScreen: 'AM', buttonType: 'button-type-16' },
{ id: 'AT17', image: 'bbbutton.png', targetScreen: 'AI', buttonType: 'button-type-17' },
{ id: 'AT18', image: 'bbutton.png', targetScreen: '', buttonType: 'button-type-18' },
{ id: 'AT19', image: 'nextP1.png', targetScreen: '', buttonType: 'button-type-19' },
{ id: 'AT20', image: 'nextL1.png', targetScreen: '', buttonType: 'button-type-20' },
{ id: 'AT21', image: 'symbolik.png', targetScreen: 'AH', buttonType: 'button-type-48' },

	
	],
	
	
	// spindelnHandbetriebSP41
	
	
	'AT':[	
	
	
	
	{ id: 'AU1', image: 'SP411.png', targetScreen: 'AU', buttonType: 'button-type-1' },
{ id: 'AU2', image: 'SP412.png', targetScreen: 'AT', buttonType: 'button-type-2' },
{ id: 'AU3', image: 'leer.png', targetScreen: '', buttonType: 'button-type-3' },
{ id: 'AU4', image: 'leer.png', targetScreen: '', buttonType: 'button-type-4' },
{ id: 'AU5', image: 'leer.png', targetScreen: '', buttonType: 'button-type-5' },
{ id: 'AU6', image: 'leer.png', targetScreen: '', buttonType: 'button-type-6' },
{ id: 'AU7', image: 'leer.png', targetScreen: '', buttonType: 'button-type-7' },
{ id: 'AU8', image: 'leer.png', targetScreen: '', buttonType: 'button-type-8' },
{ id: 'AU9', image: 'vorbereiten.png', targetScreen: 'AH', buttonType: 'button-type-9' },
{ id: 'AU10', image: 'statusAH.png', targetScreen: 'A', buttonType: 'button-type-10' },
{ id: 'AU11', image: 'handbetriebAIA.png', targetScreen: 'AT', buttonType: 'button-type-11' },
{ id: 'AU12', image: 'diagnose.png', targetScreen: 'AJ', buttonType: 'button-type-12' },
{ id: 'AU13', image: 'leer.png', targetScreen: '', buttonType: 'button-type-13' },
{ id: 'AU14', image: 'prozess.png', targetScreen: 'AK', buttonType: 'button-type-14' },
{ id: 'AU15', image: 'instandhalt.png', targetScreen: 'AL', buttonType: 'button-type-15' },
{ id: 'AU16', image: 'service.png', targetScreen: 'AM', buttonType: 'button-type-16' },
{ id: 'AU17', image: 'bbbutton.png', targetScreen: 'AI', buttonType: 'button-type-17' },
{ id: 'AU18', image: 'bbutton.png', targetScreen: '', buttonType: 'button-type-18' },
{ id: 'AU19', image: 'nextP1.png', targetScreen: '', buttonType: 'button-type-19' },
{ id: 'AU20', image: 'nextL1.png', targetScreen: '', buttonType: 'button-type-20' },
{ id: 'AU21', image: 'symbolik.png', targetScreen: 'AH', buttonType: 'button-type-48' },

	
	
	
	],
	
	
	// achsen1
	
	
	'AZ':[	
	
	{ id: 'AZ1', image: 'prg1.png', targetScreen: 'AZ', buttonType: 'button-type-1' },
{ id: 'AZ2', image: 'prg12.png', targetScreen: 'AZA', buttonType: 'button-type-2' },
{ id: 'AZ3', image: 'apc.png', targetScreen: 'AZB', buttonType: 'button-type-3' },
{ id: 'AZ4', image: 'leer.png', targetScreen: '', buttonType: 'button-type-4' },
{ id: 'AZ5', image: 'leer.png', targetScreen: '', buttonType: 'button-type-5' },
{ id: 'AZ6', image: 'leer.png', targetScreen: '', buttonType: 'button-type-6' },
{ id: 'AZ7', image: 'leer.png', targetScreen: '', buttonType: 'button-type-7' },
{ id: 'AZ8', image: 'leer.png', targetScreen: '', buttonType: 'button-type-8' },
{ id: 'AZ9', image: 'vorbereiten.png', targetScreen: 'AH', buttonType: 'button-type-9' },
{ id: 'AZ10', image: 'statusAH.png', targetScreen: 'A', buttonType: 'button-type-10' },
{ id: 'AZ11', image: 'handbetriebAIA.png', targetScreen: 'AZ', buttonType: 'button-type-11' },
{ id: 'AZ12', image: 'diagnose.png', targetScreen: 'AJ', buttonType: 'button-type-12' },
{ id: 'AZ13', image: 'leer.png', targetScreen: '', buttonType: 'button-type-13' },
{ id: 'AZ14', image: 'prozess.png', targetScreen: 'AK', buttonType: 'button-type-14' },
{ id: 'AZ15', image: 'instandhalt.png', targetScreen: 'AL', buttonType: 'button-type-15' },
{ id: 'AZ16', image: 'service.png', targetScreen: 'AM', buttonType: 'button-type-16' },
{ id: 'AZ17', image: 'bbbutton.png', targetScreen: 'AI', buttonType: 'button-type-17' },
{ id: 'AZ18', image: 'bbutton.png', targetScreen: '', buttonType: 'button-type-18' },
{ id: 'AZ19', image: 'nextP1.png', targetScreen: '', buttonType: 'button-type-19' },
{ id: 'AZ20', image: 'nextL1.png', targetScreen: '', buttonType: 'button-type-20' },
{ id: 'AZ21', image: 'symbolik.png', targetScreen: 'AH', buttonType: 'button-type-48' },

	
	],
	// achsen2
	
	'AZA':[	
	

{ id: 'AZA1', image: 'prg22.png', targetScreen: 'AZ', buttonType: 'button-type-1' },
{ id: 'AZA2', image: 'prg2.png', targetScreen: 'AZA', buttonType: 'button-type-2' },
{ id: 'AZA3', image: 'apc.png', targetScreen: 'AZB', buttonType: 'button-type-3' },
{ id: 'AZA4', image: 'leer.png', targetScreen: '', buttonType: 'button-type-4' },
{ id: 'AZA5', image: 'leer.png', targetScreen: '', buttonType: 'button-type-5' },
{ id: 'AZA6', image: 'leer.png', targetScreen: '', buttonType: 'button-type-6' },
{ id: 'AZA7', image: 'leer.png', targetScreen: '', buttonType: 'button-type-7' },
{ id: 'AZA8', image: 'leer.png', targetScreen: '', buttonType: 'button-type-8' },
{ id: 'AZA9', image: 'vorbereiten.png', targetScreen: 'AH', buttonType: 'button-type-9' },
{ id: 'AZA10', image: 'statusAH.png', targetScreen: 'A', buttonType: 'button-type-10' },
{ id: 'AZA11', image: 'handbetriebAIA.png', targetScreen: 'AZA', buttonType: 'button-type-11' },
{ id: 'AZA12', image: 'diagnose.png', targetScreen: 'AJ', buttonType: 'button-type-12' },
{ id: 'AZA13', image: 'leer.png', targetScreen: '', buttonType: 'button-type-13' },
{ id: 'AZA14', image: 'prozess.png', targetScreen: 'AK', buttonType: 'button-type-14' },
{ id: 'AZA15', image: 'instandhalt.png', targetScreen: 'AL', buttonType: 'button-type-15' },
{ id: 'AZA16', image: 'service.png', targetScreen: 'AM', buttonType: 'button-type-16' },
{ id: 'AZA17', image: 'bbbutton.png', targetScreen: 'AI', buttonType: 'button-type-17' },
{ id: 'AZA18', image: 'bbutton.png', targetScreen: '', buttonType: 'button-type-18' },
{ id: 'AZA19', image: 'nextP1.png', targetScreen: '', buttonType: 'button-type-19' },
{ id: 'AZA20', image: 'nextL1.png', targetScreen: '', buttonType: 'button-type-20' },
{ id: 'AZA21', image: 'symbolik.png', targetScreen: 'AH', buttonType: 'button-type-48' },

	
	
	
	
	],
	
	// achsen3
	
	'AZB':[	
	
	{ id: 'AZB1', image: 'prg22.png', targetScreen: 'AZ', buttonType: 'button-type-1' },
{ id: 'AZB2', image: 'prg12.png', targetScreen: 'AZA', buttonType: 'button-type-2' },
{ id: 'AZB3', image: 'apc3.png', targetScreen: 'AZB', buttonType: 'button-type-3' },
{ id: 'AZB4', image: 'leer.png', targetScreen: '', buttonType: 'button-type-4' },
{ id: 'AZB5', image: 'leer.png', targetScreen: '', buttonType: 'button-type-5' },
{ id: 'AZB6', image: 'leer.png', targetScreen: '', buttonType: 'button-type-6' },
{ id: 'AZB7', image: 'leer.png', targetScreen: '', buttonType: 'button-type-7' },
{ id: 'AZB8', image: 'leer.png', targetScreen: '', buttonType: 'button-type-8' },
{ id: 'AZB9', image: 'vorbereiten.png', targetScreen: 'AH', buttonType: 'button-type-9' },
{ id: 'AZB10', image: 'statusAH.png', targetScreen: 'A', buttonType: 'button-type-10' },
{ id: 'AZB11', image: 'handbetriebAIA.png', targetScreen: 'AZB', buttonType: 'button-type-11' },
{ id: 'AZB12', image: 'diagnose.png', targetScreen: 'AJ', buttonType: 'button-type-12' },
{ id: 'AZB13', image: 'leer.png', targetScreen: '', buttonType: 'button-type-13' },
{ id: 'AZB14', image: 'prozess.png', targetScreen: 'AK', buttonType: 'button-type-14' },
{ id: 'AZB15', image: 'instandhalt.png', targetScreen: 'AL', buttonType: 'button-type-15' },
{ id: 'AZB16', image: 'service.png', targetScreen: 'AM', buttonType: 'button-type-16' },
{ id: 'AZB17', image: 'bbbutton.png', targetScreen: 'AI', buttonType: 'button-type-17' },
{ id: 'AZB18', image: 'bbutton.png', targetScreen: '', buttonType: 'button-type-18' },
{ id: 'AZB19', image: 'nextP1.png', targetScreen: '', buttonType: 'button-type-19' },
{ id: 'AZB20', image: 'nextL1.png', targetScreen: '', buttonType: 'button-type-20' },
{ id: 'AZB21', image: 'symbolik.png', targetScreen: 'AH', buttonType: 'button-type-48' },

	
	
	],
	
	
	// schutztur
	
	'BC':[	
	
	
	{ id: 'BC1', image: 'apc.png', targetScreen: 'AIA', buttonType: 'button-type-1' },
{ id: 'BC2', image: 'spindelnAI.png', targetScreen: 'AT', buttonType: 'button-type-2' },
{ id: 'BC3', image: 'atc.png', targetScreen: 'AV', buttonType: 'button-type-3' },
{ id: 'BC4', image: 'abblasung.png', targetScreen: 'AI', buttonType: 'button-type-4' },
{ id: 'BC5', image: 'achsenJ.png', targetScreen: 'AZ', buttonType: 'button-type-5' },
{ id: 'BC6', image: 'schutztur1.png', targetScreen: 'BC', buttonType: 'button-type-6' },
{ id: 'BC7', image: 'spanef.png', targetScreen: 'BD', buttonType: 'button-type-7' },
{ id: 'BC8', image: 'absaugungF.png', targetScreen: 'BE', buttonType: 'button-type-8' },
{ id: 'BC9', image: 'vorbereiten.png', targetScreen: 'AH', buttonType: 'button-type-9' },
{ id: 'BC10', image: 'statusAH.png', targetScreen: 'A', buttonType: 'button-type-10' },
{ id: 'BC11', image: 'handbetriebAIA.png', targetScreen: 'BC', buttonType: 'button-type-11' },
{ id: 'BC12', image: 'diagnose.png', targetScreen: 'AJ', buttonType: 'button-type-12' },
{ id: 'BC13', image: 'leer.png', targetScreen: '', buttonType: 'button-type-13' },
{ id: 'BC14', image: 'prozess.png', targetScreen: 'AK', buttonType: 'button-type-14' },
{ id: 'BC15', image: 'instandhalt.png', targetScreen: 'AL', buttonType: 'button-type-15' },
{ id: 'BC16', image: 'service.png', targetScreen: 'AM', buttonType: 'button-type-16' },
{ id: 'BC17', image: 'bbutton.png', targetScreen: '', buttonType: 'button-type-17' },
{ id: 'BC18', image: 'bbutton.png', targetScreen: '', buttonType: 'button-type-18' },
{ id: 'BC19', image: 'nextP1.png', targetScreen: '', buttonType: 'button-type-19' },
{ id: 'BC20', image: 'nextL1.png', targetScreen: '', buttonType: 'button-type-20' },
{ id: 'BC21', image: 'symbolik.png', targetScreen: 'AH', buttonType: 'button-type-48' },

	
	
	
	
	
	],
	
	
	// spanef
	
	'BD':[	
	
	{ id: 'BD1', image: 'apc.png', targetScreen: 'AIA', buttonType: 'button-type-1' },
{ id: 'BD2', image: 'spindelnAI.png', targetScreen: 'AT', buttonType: 'button-type-2' },
{ id: 'BD3', image: 'atc.png', targetScreen: 'AV', buttonType: 'button-type-3' },
{ id: 'BD4', image: 'abblasung.png', targetScreen: 'AI', buttonType: 'button-type-4' },
{ id: 'BD5', image: 'achsenJ.png', targetScreen: 'AZ', buttonType: 'button-type-5' },
{ id: 'BD6', image: 'schutztur.png', targetScreen: 'BC', buttonType: 'button-type-6' },
{ id: 'BD7', image: 'spanef1.png', targetScreen: 'BD', buttonType: 'button-type-7' },
{ id: 'BD8', image: 'absaugungF.png', targetScreen: 'BE', buttonType: 'button-type-8' },
{ id: 'BD9', image: 'vorbereiten.png', targetScreen: 'AH', buttonType: 'button-type-9' },
{ id: 'BD10', image: 'statusAH.png', targetScreen: 'A', buttonType: 'button-type-10' },
{ id: 'BD11', image: 'handbetriebAIA.png', targetScreen: 'BD', buttonType: 'button-type-11' },
{ id: 'BD12', image: 'diagnose.png', targetScreen: 'AJ', buttonType: 'button-type-12' },
{ id: 'BD13', image: 'leer.png', targetScreen: '', buttonType: 'button-type-13' },
{ id: 'BD14', image: 'prozess.png', targetScreen: 'AK', buttonType: 'button-type-14' },
{ id: 'BD15', image: 'instandhalt.png', targetScreen: 'AL', buttonType: 'button-type-15' },
{ id: 'BD16', image: 'service.png', targetScreen: 'AM', buttonType: 'button-type-16' },
{ id: 'BD17', image: 'bbutton.png', targetScreen: '', buttonType: 'button-type-17' },
{ id: 'BD18', image: 'bbutton.png', targetScreen: '', buttonType: 'button-type-18' },
{ id: 'BD19', image: 'nextP1.png', targetScreen: '', buttonType: 'button-type-19' },
{ id: 'BD20', image: 'nextL1.png', targetScreen: '', buttonType: 'button-type-20' },
{ id: 'BD21', image: 'symbolik.png', targetScreen: 'AH', buttonType: 'button-type-48' },


	],
	
	
	
	
	
	
	
	
	// spanef
	
	'BE':[	
	
	{ id: 'BE1', image: 'apc.png', targetScreen: 'AIA', buttonType: 'button-type-1' },
{ id: 'BE2', image: 'spindelnAI.png', targetScreen: 'AT', buttonType: 'button-type-2' },
{ id: 'BE3', image: 'atc.png', targetScreen: 'AV', buttonType: 'button-type-3' },
{ id: 'BE4', image: 'abblasung.png', targetScreen: 'AI', buttonType: 'button-type-4' },
{ id: 'BE5', image: 'achsenJ.png', targetScreen: 'AZ', buttonType: 'button-type-5' },
{ id: 'BE6', image: 'schutztur.png', targetScreen: 'BC', buttonType: 'button-type-6' },
{ id: 'BE7', image: 'spanef.png', targetScreen: 'BD', buttonType: 'button-type-7' },
{ id: 'BE8', image: 'absaugungP.png', targetScreen: 'BE', buttonType: 'button-type-8' },
{ id: 'BE9', image: 'vorbereiten.png', targetScreen: 'AH', buttonType: 'button-type-9' },
{ id: 'BE10', image: 'statusAH.png', targetScreen: 'A', buttonType: 'button-type-10' },
{ id: 'BE11', image: 'handbetriebAIA.png', targetScreen: 'BE', buttonType: 'button-type-11' },
{ id: 'BE12', image: 'diagnose.png', targetScreen: 'AJ', buttonType: 'button-type-12' },
{ id: 'BE13', image: 'leer.png', targetScreen: '', buttonType: 'button-type-13' },
{ id: 'BE14', image: 'prozess.png', targetScreen: 'AK', buttonType: 'button-type-14' },
{ id: 'BE15', image: 'instandhalt.png', targetScreen: 'AL', buttonType: 'button-type-15' },
{ id: 'BE16', image: 'service.png', targetScreen: 'AM', buttonType: 'button-type-16' },
{ id: 'BE17', image: 'bbutton.png', targetScreen: '', buttonType: 'button-type-17' },
{ id: 'BE18', image: 'bbutton.png', targetScreen: '', buttonType: 'button-type-18' },
{ id: 'BE19', image: 'nextP1.png', targetScreen: '', buttonType: 'button-type-19' },
{ id: 'BE20', image: 'nextL1.png', targetScreen: '', buttonType: 'button-type-20' },
{ id: 'BE21', image: 'symbolik.png', targetScreen: 'AH', buttonType: 'button-type-48' },

	
	
	
	],
	
	
	// diagnose
	
	'AJ':[	
	
	
	
	
	{ id: 'AJ1', image: 'alarme.png', targetScreen: 'BF', buttonType: 'button-type-1' },
{ id: 'AJ2', image: 'meldungen.png', targetScreen: 'BG', buttonType: 'button-type-2' },
{ id: 'AJ3', image: 'historie.png', targetScreen: 'BH', buttonType: 'button-type-3' },
{ id: 'AJ4', image: 'alarmanaly.png', targetScreen: 'BCH', buttonType: 'button-type-4' },
{ id: 'AJ5', image: 'leer.png', targetScreen: '', buttonType: 'button-type-5' },
{ id: 'AJ6', image: 'bussysteme.png', targetScreen: 'BI', buttonType: 'button-type-6' },
{ id: 'AJ7', image: 'slchecksm.png', targetScreen: 'BJ', buttonType: 'button-type-7' },
{ id: 'AJ8', image: 'leer.png', targetScreen: 'BE', buttonType: 'button-type-8' },
{ id: 'AJ9', image: 'vorbereiten.png', targetScreen: 'AH', buttonType: 'button-type-9' },
{ id: 'AJ10', image: 'statusAH.png', targetScreen: 'A', buttonType: 'button-type-10' },
{ id: 'AJ11', image: 'handbetrieb.png', targetScreen: 'BE', buttonType: 'button-type-11' },
{ id: 'AJ12', image: 'diagnoseAJ.png', targetScreen: 'AJ', buttonType: 'button-type-12' },
{ id: 'AJ13', image: 'leer.png', targetScreen: '', buttonType: 'button-type-13' },
{ id: 'AJ14', image: 'prozess.png', targetScreen: 'AK', buttonType: 'button-type-14' },
{ id: 'AJ15', image: 'instandhalt.png', targetScreen: 'AL', buttonType: 'button-type-15' },
{ id: 'AJ16', image: 'service.png', targetScreen: 'AM', buttonType: 'button-type-16' },
{ id: 'AJ17', image: 'bbutton.png', targetScreen: '', buttonType: 'button-type-17' },
{ id: 'AJ18', image: 'bbutton.png', targetScreen: '', buttonType: 'button-type-18' },
{ "id": "BI26", "image": "detailsAnzeigen.png", "targetScreen": "", "buttonType": "button-type-97" },
  { "id": "BI27", "image": "leerNeben.png", "targetScreen": "", "buttonType": "button-type-98" },
  { "id": "BI28", "image": "alleGeräteAnzeigen.png", "targetScreen": "", "buttonType": "button-type-99" },
  { "id": "BIA9", "image": "vorhandeneGeräte.png", "targetScreen": "BIAF", "buttonType": "button-type-100" },
  { "id": "BIA0", "image": "unterdrückteGeräte.png", "targetScreen": "BIAG", "buttonType": "button-type-101" },
 { "id": "BI31", "image": "ausgefalleneGeräte.png", "targetScreen": "BIAH", "buttonType": "button-type-102" },
{ "id": "BIA2", "image": "gestörteGeräte.png", "targetScreen": "BIACH", "buttonType": "button-type-103" }




	],
	
	
	
	
	
	
	
	
	
	
	
	
	
		// alarme
	
	'BF':[	
	
	
	
	
	{ id: 'BF1', image: 'alarmeBF.png', targetScreen: 'BF', buttonType: 'button-type-1' },
{ id: 'BF2', image: 'meldungen.png', targetScreen: 'BG', buttonType: 'button-type-2' },
{ id: 'BF3', image: 'historie.png', targetScreen: 'BH', buttonType: 'button-type-3' },
{ id: 'BF4', image: 'alarmanalyBCH.png', targetScreen: 'BCH', buttonType: 'button-type-4' },
{ id: 'BF5', image: 'leer.png', targetScreen: '', buttonType: 'button-type-5' },
{ id: 'BF6', image: 'bussysteme.png', targetScreen: 'BI', buttonType: 'button-type-6' },
{ id: 'BF7', image: 'slchecksm.png', targetScreen: 'BJ', buttonType: 'button-type-7' },
{ id: 'BF8', image: 'leer.png', targetScreen: 'BE', buttonType: 'button-type-8' },
{ id: 'BF9', image: 'vorbereiten.png', targetScreen: 'AH', buttonType: 'button-type-9' },
{ id: 'BF10', image: 'statusAH.png', targetScreen: 'A', buttonType: 'button-type-10' },
{ id: 'BF11', image: 'handbetrieb.png', targetScreen: 'BE', buttonType: 'button-type-11' },
{ id: 'BF12', image: 'diagnoseAJ.png', targetScreen: 'AJ', buttonType: 'button-type-12' },
{ id: 'BF13', image: 'leer.png', targetScreen: '', buttonType: 'button-type-13' },
{ id: 'BF14', image: 'prozess.png', targetScreen: 'AK', buttonType: 'button-type-14' },
{ id: 'BF15', image: 'instandhalt.png', targetScreen: 'AL', buttonType: 'button-type-15' },
{ id: 'BF16', image: 'service.png', targetScreen: 'AM', buttonType: 'button-type-16' },
{ id: 'BF17', image: 'bbutton.png', targetScreen: '', buttonType: 'button-type-17' },
{ id: 'BF18', image: 'bbutton.png', targetScreen: '', buttonType: 'button-type-18' },


{ "id": "BF19", "image": "sortieren.png", "targetScreen": "BFAA", "buttonType": "button-type-99" }

	
	
	
	
	
	],
	
	
		// alarmeSortieren
	
	'BFAA':[	
	
	{ "id": "BFAAA1", "image": "alarmeBF.png", "targetScreen": "BF", "buttonType": "button-type-1" },
{ "id": "BFAAA2", "image": "meldungen.png", "targetScreen": "BG", "buttonType": "button-type-2" },
{ "id": "BFAAA3", "image": "historie.png", "targetScreen": "BH", "buttonType": "button-type-3" },
{ "id": "BFAAA4", "image": "alarmanalyBCH.png", "targetScreen": "BCH", "buttonType": "button-type-4" },
{ "id": "BFAAA5", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-5" },
{ "id": "BFAAA6", "image": "bussysteme.png", "targetScreen": "BI", "buttonType": "button-type-6" },
{ "id": "BFAAA7", "image": "slchecksm.png", "targetScreen": "BJ", "buttonType": "button-type-7" },
{ "id": "BFAAA8", "image": "leer.png", "targetScreen": "BE", "buttonType": "button-type-8" },
{ "id": "BFAAA9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
{ "id": "BFAAA10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
{ "id": "BFAAA11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
{ "id": "BFAAA12", "image": "diagnoseAJ.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
{ "id": "BFAAA13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
{ "id": "BFAAA14", "image": "prozess.png", "targetScreen": "AK", "buttonType": "button-type-14" },
{ "id": "BFAAA15", "image": "instandhalt.png", "targetScreen": "AL", "buttonType": "button-type-15" },
{ "id": "BFAAA16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
{ "id": "BFAAA17", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-17" },
{ "id": "BFAAA18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
{ "id": "BFAA19", "image": "aufsteigend.png", "targetScreen": "BFAC", "buttonType": "button-type-97" },
{ "id":"BFAA20", "image": "datum.png", "targetScreen": "BFAB", "buttonType": "button-type-98" },
{ "id": "BFAAA21", "image": "nummer.png", "targetScreen": "", "buttonType": "button-type-99" }

	
	
	
	],
	
		// alarmeDatum
	
	'BFAB':[	
	
	{ "id": "BFAB1", "image": "alarmeBF.png", "targetScreen": "BF", "buttonType": "button-type-1" },
{ "id": "BFAB2", "image": "meldungen.png", "targetScreen": "BG", "buttonType": "button-type-2" },
{ "id": "BFAB3", "image": "historie.png", "targetScreen": "BH", "buttonType": "button-type-3" },
{ "id": "BFAB4", "image": "alarmanalyBCH.png", "targetScreen": "BCH", "buttonType": "button-type-4" },
{ "id": "BFAB5", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-5" },
{ "id": "BFAB6", "image": "bussysteme.png", "targetScreen": "BI", "buttonType": "button-type-6" },
{ "id": "BFAB7", "image": "slchecksm.png", "targetScreen": "BJ", "buttonType": "button-type-7" },
{ "id": "BFAB8", "image": "leer.png", "targetScreen": "BE", "buttonType": "button-type-8" },
{ "id": "BFAB9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
{ "id": "BFAB10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
{ "id": "BFAB11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
{ "id": "BFAB12", "image": "diagnoseAJ.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
{ "id": "BFAB13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
{ "id": "BFAB14", "image": "prozess.png", "targetScreen": "AK", "buttonType": "button-type-14" },
{ "id": "BFAB15", "image": "instandhalt.png", "targetScreen": "AL", "buttonType": "button-type-15" },
{ "id": "BFAB16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
{ "id": "BFAB17", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-17" },
{ "id": "BFAB18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
{ "id": "BFAB19", "image": "aufsteigend.png", "targetScreen": "BFAC", "buttonType": "button-type-97" },
{ "id": "BFAB20", "image": "datumBFAB.png", "targetScreen": "BFAB", "buttonType": "button-type-98" },
{ "id": "BFAB21", "image": "nummer.png", "targetScreen": "BFAA", "buttonType": "button-type-99" }

	
	
	
	
		
	],
	
	
	
	
		// alarmeAufsteigend
	
	'BFAC':[	
	
	
	
	
	
	{ "id": "BFAC1", "image": "alarmeBF.png", "targetScreen": "BF", "buttonType": "button-type-1" },
{ "id": "BFAC2", "image": "meldungen.png", "targetScreen": "BG", "buttonType": "button-type-2" },
{ "id": "BFAC3", "image": "historie.png", "targetScreen": "BH", "buttonType": "button-type-3" },
{ "id": "BFAC4", "image": "alarmanalyBCH.png", "targetScreen": "BCH", "buttonType": "button-type-4" },
{ "id": "BFAC5", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-5" },
{ "id": "BFAC6", "image": "bussysteme.png", "targetScreen": "BI", "buttonType": "button-type-6" },
{ "id": "BFAC7", "image": "slchecksm.png", "targetScreen": "BJ", "buttonType": "button-type-7" },
{ "id": "BFAC8", "image": "leer.png", "targetScreen": "BE", "buttonType": "button-type-8" },
{ "id": "BFAC9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
{ "id": "BFAC10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
{ "id": "BFAC11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
{ "id": "BFAC12", "image": "diagnoseAJ.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
{ "id": "BFAC13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
{ "id": "BFAC14", "image": "prozess.png", "targetScreen": "AK", "buttonType": "button-type-14" },
{ "id": "BFAC15", "image": "instandhalt.png", "targetScreen": "AL", "buttonType": "button-type-15" },
{ "id": "BFAC16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
{ "id": "BFAC17", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-17" },
{ "id": "BFAC18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
{ "id": "BFAC19", "image": "absteigend.png", "targetScreen": "BFAC", "buttonType": "button-type-97" },
{ "id": "BFAC20", "image": "datumBFAB.png", "targetScreen": "BFAB", "buttonType": "button-type-98" },
{ "id": "BFAC21", "image": "nummer.png", "targetScreen": "BFAA", "buttonType": "button-type-99" }

	
	
	
	
	],
	
	
	
	
	
	
	
	
	
	
	
	
	
	
		// meldungen
	
	'BG':[	
	
	
	
	{ id: 'BG1', image: 'alarme.png', targetScreen: 'BF', buttonType: 'button-type-1' },
{ id: 'BG2', image: 'meldungenBG.png', targetScreen: 'BG', buttonType: 'button-type-2' },
{ id: 'BG3', image: 'historie.png', targetScreen: 'BH', buttonType: 'button-type-3' },
{ id: 'BG4', image: 'alarmanalyBCH.png', targetScreen: 'BCH', buttonType: 'button-type-4' },
{ id: 'BG5', image: 'leer.png', targetScreen: '', buttonType: 'button-type-5' },
{ id: 'BG6', image: 'bussysteme.png', targetScreen: 'BI', buttonType: 'button-type-6' },
{ id: 'BG7', image: 'slchecksm.png', targetScreen: 'BJ', buttonType: 'button-type-7' },
{ id: 'BG8', image: 'leer.png', targetScreen: 'BE', buttonType: 'button-type-8' },
{ id: 'BG9', image: 'vorbereiten.png', targetScreen: 'AH', buttonType: 'button-type-9' },
{ id: 'BG10', image: 'statusAH.png', targetScreen: 'A', buttonType: 'button-type-10' },
{ id: 'BG11', image: 'handbetrieb.png', targetScreen: 'BE', buttonType: 'button-type-11' },
{ id: 'BG12', image: 'diagnoseAJ.png', targetScreen: 'AJ', buttonType: 'button-type-12' },
{ id: 'BG13', image: 'leer.png', targetScreen: '', buttonType: 'button-type-13' },
{ id: 'BG14', image: 'prozess.png', targetScreen: 'AK', buttonType: 'button-type-14' },
{ id: 'BG15', image: 'instandhalt.png', targetScreen: 'AL', buttonType: 'button-type-15' },
{ id: 'BG16', image: 'service.png', targetScreen: 'AM', buttonType: 'button-type-16' },
{ id: 'BG17', image: 'bbutton.png', targetScreen: '', buttonType: 'button-type-17' },
{ id: 'BG18', image: 'bbutton.png', targetScreen: '', buttonType: 'button-type-18' },

	
	
	
	
	
	],
	
	
	
	
	
	
		// historie
	
	'BH':[	
	
	{ id: 'BH1', image: 'alarme.png', targetScreen: 'BF', buttonType: 'button-type-1' },
{ id: 'BH2', image: 'meldungen.png', targetScreen: 'BG', buttonType: 'button-type-2' },
{ id: 'BH3', image: 'historieBH.png', targetScreen: 'BH', buttonType: 'button-type-3' },
{ id: 'BH4', image: 'alarmanalyBCH.png', targetScreen: 'BCH', buttonType: 'button-type-4' },
{ id: 'BH5', image: 'leer.png', targetScreen: '', buttonType: 'button-type-5' },
{ id: 'BH6', image: 'bussysteme.png', targetScreen: 'BI', buttonType: 'button-type-6' },
{ id: 'BH7', image: 'slchecksm.png', targetScreen: 'BJ', buttonType: 'button-type-7' },
{ id: 'BH8', image: 'leer.png', targetScreen: 'BE', buttonType: 'button-type-8' },
{ id: 'BH9', image: 'vorbereiten.png', targetScreen: 'AH', buttonType: 'button-type-9' },
{ id: 'BH10', image: 'statusAH.png', targetScreen: 'A', buttonType: 'button-type-10' },
{ id: 'BH11', image: 'handbetrieb.png', targetScreen: 'BE', buttonType: 'button-type-11' },
{ id: 'BH12', image: 'diagnoseAJ.png', targetScreen: 'AJ', buttonType: 'button-type-12' },
{ id: 'BH13', image: 'leer.png', targetScreen: '', buttonType: 'button-type-13' },
{ id: 'BH14', image: 'prozess.png', targetScreen: 'AK', buttonType: 'button-type-14' },
{ id: 'BH15', image: 'instandhalt.png', targetScreen: 'AL', buttonType: 'button-type-15' },
{ id: 'BH16', image: 'service.png', targetScreen: 'AM', buttonType: 'button-type-16' },
{ id: 'BH17', image: 'bbutton.png', targetScreen: '', buttonType: 'button-type-17' },
{ id: 'BH18', image: 'bbutton.png', targetScreen: '', buttonType: 'button-type-18' }

],
	
	
	
			// alarmanaly
	
	'BCH':[	
	
	
	
	
	
	{ id: 'BCH1', image: 'alarme.png', targetScreen: 'BF', buttonType: 'button-type-1' },
{ id: 'BCH2', image: 'meldungen.png', targetScreen: 'BG', buttonType: 'button-type-2' },
{ id: 'BCH3', image: 'historie.png', targetScreen: 'BH', buttonType: 'button-type-3' },
{ id: 'BCH4', image: 'alarmanaly.png', targetScreen: 'BCH', buttonType: 'button-type-4' },
{ id: 'BCH5', image: 'leer.png', targetScreen: '', buttonType: 'button-type-5' },
{ id: 'BCH6', image: 'bussysteme.png', targetScreen: 'BI', buttonType: 'button-type-6' },
{ id: 'BCH7', image: 'slchecksm.png', targetScreen: 'BJ', buttonType: 'button-type-7' },
{ id: 'BCH8', image: 'leer.png', targetScreen: 'BE', buttonType: 'button-type-8' },
{ id: 'BCH9', image: 'vorbereiten.png', targetScreen: 'AH', buttonType: 'button-type-9' },
{ id: 'BCH10', image: 'statusAH.png', targetScreen: 'A', buttonType: 'button-type-10' },
{ id: 'BCH11', image: 'handbetrieb.png', targetScreen: 'BE', buttonType: 'button-type-11' },
{ id: 'BCH12', image: 'diagnoseAJ.png', targetScreen: 'AJ', buttonType: 'button-type-12' },
{ id: 'BCH13', image: 'leer.png', targetScreen: '', buttonType: 'button-type-13' },
{ id: 'BCH14', image: 'prozess.png', targetScreen: 'AK', buttonType: 'button-type-14' },
{ id: 'BCH15', image: 'instandhalt.png', targetScreen: 'AL', buttonType: 'button-type-15' },
{ id: 'BCH16', image: 'service.png', targetScreen: 'AM', buttonType: 'button-type-16' },
{ id: 'BCH17', image: 'bbutton.png', targetScreen: '', buttonType: 'button-type-17' },
{ id: 'BCH18', image: 'bbutton.png', targetScreen: '', buttonType: 'button-type-18' },
{ "id": "BI26", "image": "detailsAusblenden.png", "targetScreen": "", "buttonType": "button-type-97" },
  { "id": "BI27", "image": "leerNeben.png", "targetScreen": "", "buttonType": "button-type-98" },
  { "id": "BI28", "image": "alleGeräteAnzeigen.png", "targetScreen": "", "buttonType": "button-type-99" },
  { "id": "BIA9", "image": "vorhandeneGeräte.png", "targetScreen": "", "buttonType": "button-type-100" },
  { "id": "BIA0", "image": "unterdrückteGeräte.png", "targetScreen": "", "buttonType": "button-type-101" },
 { "id": "BI31", "image": "ausgefalleneGeräte.png", "targetScreen": "", "buttonType": "button-type-102" },
{ "id": "BIA2", "image": "gestörteGeräte.png", "targetScreen": "", "buttonType": "button-type-103" }
	
	
	
	
	
	
	],
	
	
		// bussystemePBPN
	
	'BI':[	
	
	
	{ id: 'BI1', image: 'PBPN.png', targetScreen: 'BI', buttonType: 'button-type-1' },
{ id: 'BI2', image: 'TCPIP.png', targetScreen: 'BIA', buttonType: 'button-type-2' },
{ id: 'BI3', image: 'leer.png', targetScreen: 'BH', buttonType: 'button-type-3' },
{ id: 'BI4', image: 'leer.png', targetScreen: 'BCH', buttonType: 'button-type-4' },
{ id: 'BI5', image: 'leer.png', targetScreen: '', buttonType: 'button-type-5' },
{ id: 'BI6', image: 'leer.png', targetScreen: 'BI', buttonType: 'button-type-6' },
{ id: 'BI7', image: 'leer.png', targetScreen: 'BJ', buttonType: 'button-type-7' },
{ id: 'BI8', image: 'leer.png', targetScreen: 'BE', buttonType: 'button-type-8' },
{ id: 'BI9', image: 'vorbereiten.png', targetScreen: 'AH', buttonType: 'button-type-9' },
{ id: 'BI10', image: 'statusAH.png', targetScreen: 'A', buttonType: 'button-type-10' },
{ id: 'BI11', image: 'handbetrieb.png', targetScreen: 'BE', buttonType: 'button-type-11' },
{ id: 'BI12', image: 'diagnoseAJ.png', targetScreen: 'AJ', buttonType: 'button-type-12' },
{ id: 'BI13', image: 'leer.png', targetScreen: '', buttonType: 'button-type-13' },
{ id: 'BI14', image: 'prozess.png', targetScreen: 'AK', buttonType: 'button-type-14' },
{ id: 'BI15', image: 'instandhalt.png', targetScreen: 'AL', buttonType: 'button-type-15' },
{ id: 'BI16', image: 'service.png', targetScreen: 'AM', buttonType: 'button-type-16' },
{ id: 'BI17', image: 'bbutton.png', targetScreen: '', buttonType: 'button-type-17' },
{ id: 'BI18', image: 'bbutton.png', targetScreen: '', buttonType: 'button-type-18' },
{ 'id': 'BI26', image: 'detailsAnzeigen.png', 'targetScreen': 'BIAAA', buttonType: 'button-type-97' },
  { 'id': 'BI27', image: 'leerNeben.png', 'targetScreen': '', buttonType: 'button-type-98' },
  { 'id': 'BI28', image: 'alleGeräteAnzeigen.png', 'targetScreen': 'BI', buttonType: 'button-type-99' },
  { 'id': 'BIA9', image: 'vorhandeneGeräte.png', 'targetScreen': 'BIAF', buttonType: 'button-type-100' },
  { 'id': 'BIA0', image: 'unterdrückteGeräte.png', 'targetScreen': 'BIAG', buttonType: 'button-type-101' },
 { 'id': 'BI31', image: 'ausgefalleneGeräte.png', 'targetScreen': 'BIAH', buttonType: 'button-type-102' },
{ 'id': 'BIA2', image: 'gestörteGeräte.png', 'targetScreen': 'BIACH', buttonType: 'button-type-103' }

	
	
	],
	
	
		 // alleGeräteAnzeigenBIAAA
	
	'BIAAA':[	
	
	
	
	
  { "id": "BIAAA1", "image": "PBPN.png", "targetScreen": "BI", "buttonType": "button-type-1" },
  { "id": "BIAAA2", "image": "TCPIP.png", "targetScreen": "BIA", "buttonType": "button-type-2" },
  { "id": "BIAAA3", "image": "leer.png", "targetScreen": "BH", "buttonType": "button-type-3" },
  { "id": "BIAAA4", "image": "leer.png", "targetScreen": "BCH", "buttonType": "button-type-4" },
  { "id": "BIAAA5", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-5" },
  { "id": "BIAAA6", "image": "leer.png", "targetScreen": "BI", "buttonType": "button-type-6" },
  { "id": "BIAAA7", "image": "leer.png", "targetScreen": "BJ", "buttonType": "button-type-7" },
  { "id": "BIAAA8", "image": "leer.png", "targetScreen": "BE", "buttonType": "button-type-8" },
  { "id": "BIAAA9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
  { "id": "BIAAA10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
  { "id": "BIAAA11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
  { "id": "BIAAA12", "image": "diagnoseAJ.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
  { "id": "BIAAA13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
  { "id": "BIAAA14", "image": "prozess.png", "targetScreen": "AK", "buttonType": "button-type-14" },
  { "id": "BIAAA15", "image": "instandhalt.png", "targetScreen": "AL", "buttonType": "button-type-15" },
  { "id": "BIAAA16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
  { "id": "BIAAA17", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-17" },
  { "id": "BIAAA18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
  { "id": "BIAAA26", "image": "detailsAusblenden.png", "targetScreen": "BI", "buttonType": "button-type-97" },
  { "id": "BIAAA27", "image": "leerNeben.png", "targetScreen": "", "buttonType": "button-type-98" },
  { "id": "BIAAA28", "image": "alleGeräteAnzeigen.png", "targetScreen": "", "buttonType": "button-type-99" },
  { "id": "BIAAA29", "image": "vorhandeneGeräte.png", "targetScreen": "AKZ", "buttonType": "button-type-100" },
  { "id": "BIAAA30", "image": "unterdrückteGeräte.png", "targetScreen": "BIAGA", "buttonType": "button-type-101" },
  { "id": "BIAAA31", "image": "ausgefalleneGeräte.png", "targetScreen": "BIAHA", "buttonType": "button-type-102" },
  { "id": "BIAAA32", "image": "gestörteGeräte.png", "targetScreen": "BIACHA", "buttonType": "button-type-103" }
],

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	// bussystemeTCPIP1
	
	
	
	
	'BIA':[	
	
	
	
  { "id": "BIA1", "image": "busTCPIP.png", "targetScreen": "BIAB", "buttonType": "button-type-1" },
  { "id": "BIA2", "image": "achsDiag.png", "targetScreen": "BIAC", "buttonType": "button-type-2" },
  { "id": "BIA3", "image": "safety.png", "targetScreen": "BIAD", "buttonType": "button-type-3" },
  { "id": "BIA4", "image": "trace.png", "targetScreen": "BIAE", "buttonType": "button-type-4" },
  
  { "id": "BIA7", "image": "systemAuslast.png", "targetScreen": "BJ", "buttonType": "button-type-7" },
  { "id": "BIA8", "image": "antriebsSystem.png", "targetScreen": "BE", "buttonType": "button-type-8" },
 
 
  { "id": "BIA17", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-17" },
  { "id": "BIA18", "image": "pfeilRechtsKlein.png", "targetScreen": "BIB", "buttonType": "button-type-86" },

	
  { "id": "BIA20", "image": "symbolDiagnose.png", "targetScreen": "X", "buttonType": "button-type-75" },
  {"id": "CB21", "image": "jog.png", "targetScreen": "X", "buttonType": "button-type-76" },
  { "id": "BIA22", "image": "undo.png", "targetScreen": "X", "buttonType": "button-type-77" },
  
  {"id": "CB23", "image": "redo.png", "targetScreen": "X", "buttonType": "button-type-78" },
	
  { "id": "BIA26", "image": "neuanzeigen.png", "targetScreen": "", "buttonType": "button-type-87" },
  { "id": "BIA27", "image": "TCPIPKonfig.png", "targetScreen": "", "buttonType": "button-type-88" },
  { "id": "BIA28", "image": "leerNeben.png", "targetScreen": "", "buttonType": "button-type-89" },
  { "id": "BIA29", "image": "fehlerAnalyse.png", "targetScreen": "", "buttonType": "button-type-90" },
  { "id": "BIA30", "image": "leerNeben.png", "targetScreen": "", "buttonType": "button-type-91" },
 { "id": "BIA31", "image": "detailsNeben.png", "targetScreen": "", "buttonType": "button-type-92" },
{ "id": "BIA32", "image": "diagnoseNetzwerk.png", "targetScreen": "", "buttonType": "button-type-93" },
 { "id": "BIA33", "image": "zurück.png", "targetScreen": "", "buttonType": "button-type-94" }
 
	
	],
	
	
	
	
	
	// busTCPIP1
	
	
	
	
	'BIAB':[	
	
	
	
  
  { "id": "BIAB1", "image": "busTCPIPBIA1.png", "targetScreen": "BIAB1", "buttonType": "button-type-1" },
  { "id": "BIAB2", "image": "achsDiag.png", "targetScreen": "BIAB2", "buttonType": "button-type-2" },
  { "id": "BIAB3", "image": "safety.png", "targetScreen": "BIAB3", "buttonType": "button-type-3" },
  { "id": "BIAB4", "image": "trace.png", "targetScreen": "BCH", "buttonType": "button-type-4" },
  { "id": "BIAB7", "image": "systemAuslast.png", "targetScreen": "BJ", "buttonType": "button-type-7" },
  { "id": "BIAB8", "image": "antriebsSystem.png", "targetScreen": "BE", "buttonType": "button-type-8" },
  { "id": "BIAB17", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-17" },
  { "id": "BIAB18", "image": "pfeilRechtsKlein.png", "targetScreen": "BIB", "buttonType": "button-type-86" },
  { "id": "BIAB20", "image": "symbolDiagnose.png", "targetScreen": "X", "buttonType": "button-type-75" },
  { "id": "BIAB21", "image": "jog.png", "targetScreen": "X", "buttonType": "button-type-76" },
  { "id": "BIAB22", "image": "undo.png", "targetScreen": "X", "buttonType": "button-type-77" },
  { "id": "BIAB23", "image": "redo.png", "targetScreen": "X", "buttonType": "button-type-78" },
  { "id": "BIAB26", "image": "neuanzeigen.png", "targetScreen": "", "buttonType": "button-type-87" },
  { "id": "BIAB27", "image": "TCPIPKonfig.png", "targetScreen": "", "buttonType": "button-type-88" },
  { "id": "BIAB28", "image": "leerNeben.png", "targetScreen": "", "buttonType": "button-type-89" },
  { "id": "BIAB29", "image": "fehlerAnalyse.png", "targetScreen": "", "buttonType": "button-type-90" },
  { "id": "BIAB30", "image": "leerNeben.png", "targetScreen": "", "buttonType": "button-type-91" },
  { "id": "BIAB31", "image": "detailsNeben.png", "targetScreen": "", "buttonType": "button-type-92" },
  { "id": "BIAB32", "image": "diagnoseNetzwerk.png", "targetScreen": "", "buttonType": "button-type-93" },
  { "id": "BIAB33", "image": "zurück.png", "targetScreen": "", "buttonType": "button-type-94" }




	],
	
	
	// achsDiag
	
	
	
	'BIAC':[	
	
	
  { "id": "BIAC1", "image": "busTCPIP.png", "targetScreen": "BIAC1", "buttonType": "button-type-1" },
  { "id": "BIAC2", "image": "achsDiagBIA2.png", "targetScreen": "BIAC2", "buttonType": "button-type-2" },
  { "id": "BIAC3", "image": "safety.png", "targetScreen": "BIAC3", "buttonType": "button-type-3" },
  { "id": "BIAC4", "image": "trace.png", "targetScreen": "BCH", "buttonType": "button-type-4" },
  { "id": "BIAC7", "image": "systemAuslast.png", "targetScreen": "BJ", "buttonType": "button-type-7" },
  { "id": "BIAC8", "image": "antriebsSystem.png", "targetScreen": "BE", "buttonType": "button-type-8" },
  { "id": "BIAC17", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-17" },
  { "id": "BIAC18", "image": "pfeilRechtsKlein.png", "targetScreen": "BIB", "buttonType": "button-type-86" },
  { "id": "BIAC20", "image": "symbolDiagnose.png", "targetScreen": "X", "buttonType": "button-type-75" },
  { "id": "BIAC21", "image": "jog.png", "targetScreen": "X", "buttonType": "button-type-76" },
  { "id": "BIAC22", "image": "undo.png", "targetScreen": "X", "buttonType": "button-type-77" },
  { "id": "BIAC23", "image": "redo.png", "targetScreen": "X", "buttonType": "button-type-78" },
  { "id": "BIAC26", "image": "neuanzeigen.png", "targetScreen": "", "buttonType": "button-type-87" },
  { "id": "BIAC27", "image": "TCPIPKonfig.png", "targetScreen": "", "buttonType": "button-type-88" },
  { "id": "BIAC28", "image": "leerNeben.png", "targetScreen": "", "buttonType": "button-type-89" },
  { "id": "BIAC29", "image": "fehlerAnalyse.png", "targetScreen": "", "buttonType": "button-type-90" },
  { "id": "BIAC30", "image": "leerNeben.png", "targetScreen": "", "buttonType": "button-type-91" },
  { "id": "BIAC31", "image": "detailsNeben.png", "targetScreen": "", "buttonType": "button-type-92" },
  { "id": "BIAC32", "image": "diagnoseNetzwerk.png", "targetScreen": "", "buttonType": "button-type-93" },
  { "id": "BIAC33", "image": "zurück.png", "targetScreen": "", "buttonType": "button-type-94" }
],



	
	
	
	// safetyBIA3
	
	
	
	'BIAD':[	
	
	
 
  { "id": "BIAD1", "image": "busTCPIP.png", "targetScreen": "BIAD1", "buttonType": "button-type-1" },
  { "id": "BIAD2", "image": "achsDiag.png", "targetScreen": "BIAD2", "buttonType": "button-type-2" },
  { "id": "BIAD3", "image": "safetyBIA3.png", "targetScreen": "BIAD3", "buttonType": "button-type-3" },
  { "id": "BIAD4", "image": "trace.png", "targetScreen": "BCH", "buttonType": "button-type-4" },
  { "id": "BIAD7", "image": "systemAuslast.png", "targetScreen": "BJ", "buttonType": "button-type-7" },
  { "id": "BIAD8", "image": "antriebsSystem.png", "targetScreen": "BE", "buttonType": "button-type-8" },
  { "id": "BIAD17", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-17" },
  { "id": "BIAD18", "image": "pfeilRechtsKlein.png", "targetScreen": "BIB", "buttonType": "button-type-86" },
  { "id": "BIAD20", "image": "symbolDiagnose.png", "targetScreen": "X", "buttonType": "button-type-75" },
  { "id": "BIAD21", "image": "jog.png", "targetScreen": "X", "buttonType": "button-type-76" },
  { "id": "BIAD22", "image": "undo.png", "targetScreen": "X", "buttonType": "button-type-77" },
  { "id": "BIAD23", "image": "redo.png", "targetScreen": "X", "buttonType": "button-type-78" },
  { "id": "BIAD26", "image": "neuanzeigen.png", "targetScreen": "", "buttonType": "button-type-87" },
  { "id": "BIAD27", "image": "TCPIPKonfig.png", "targetScreen": "", "buttonType": "button-type-88" },
  { "id": "BIAD28", "image": "leerNeben.png", "targetScreen": "", "buttonType": "button-type-89" },
  { "id": "BIAD29", "image": "fehlerAnalyse.png", "targetScreen": "", "buttonType": "button-type-90" },
  { "id": "BIAD30", "image": "leerNeben.png", "targetScreen": "", "buttonType": "button-type-91" },
  { "id": "BIAD31", "image": "detailsNeben.png", "targetScreen": "", "buttonType": "button-type-92" },
  { "id": "BIAD32", "image": "diagnoseNetzwerk.png", "targetScreen": "", "buttonType": "button-type-93" },
  { "id": "BIAD33", "image": "zurück.png", "targetScreen": "", "buttonType": "button-type-94" }


],

	
	// trace BIA4
	
	'BIAE':[	
	
 
  { "id": "BIAE1", "image": "busTCPIP.png", "targetScreen": "BIAB", "buttonType": "button-type-1" },
  { "id": "BIAE2", "image": "achsDiag.png", "targetScreen": "BIAC", "buttonType": "button-type-2" },
  { "id": "BIAE3", "image": "safety.png", "targetScreen": "BIAD", "buttonType": "button-type-3" },
  { "id": "BIAE4", "image": "traceBIA4.png", "targetScreen": "BIAE", "buttonType": "button-type-4" },
  { "id": "BIAE7", "image": "systemAuslast.png", "targetScreen": "BJ", "buttonType": "button-type-7" },
  { "id": "BIAE8", "image": "antriebsSystem.png", "targetScreen": "BE", "buttonType": "button-type-8" },
  { "id": "BIAE17", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-17" },
  { "id": "BIAE18", "image": "pfeilRechtsKlein.png", "targetScreen": "BIB", "buttonType": "button-type-86" },
  { "id": "BIAE20", "image": "symbolDiagnose.png", "targetScreen": "X", "buttonType": "button-type-75" },
  { "id": "BIAE21", "image": "jog.png", "targetScreen": "X", "buttonType": "button-type-76" },
  { "id": "BIAE22", "image": "undo.png", "targetScreen": "X", "buttonType": "button-type-77" },
  { "id": "BIAE23", "image": "redo.png", "targetScreen": "X", "buttonType": "button-type-78" },
  { "id": "BIAE26", "image": "neuanzeigen.png", "targetScreen": "", "buttonType": "button-type-87" },
  { "id": "BIAE27", "image": "TCPIPKonfig.png", "targetScreen": "", "buttonType": "button-type-88" },
  { "id": "BIAE28", "image": "leerNeben.png", "targetScreen": "", "buttonType": "button-type-89" },
  { "id": "BIAE29", "image": "fehlerAnalyse.png", "targetScreen": "", "buttonType": "button-type-90" },
  { "id": "BIAE30", "image": "leerNeben.png", "targetScreen": "", "buttonType": "button-type-91" },
  { "id": "BIAE31", "image": "detailsNeben.png", "targetScreen": "", "buttonType": "button-type-92" },
  { "id": "BIAE32", "image": "diagnoseNetzwerk.png", "targetScreen": "", "buttonType": "button-type-93" },
  { "id": "BIAE33", "image": "zurück.png", "targetScreen": "", "buttonType": "button-type-94" }


],


     // vorhandeneGeräte
	
	'BIAF':[	
	
	
  { "id": "BIAF1", "image": "PBPN.png", "targetScreen": "BI", "buttonType": "button-type-1" },
  { "id": "BIAF2", "image": "TCPIP.png", "targetScreen": "BIA", "buttonType": "button-type-2" },
  { "id": "BIAF3", "image": "leer.png", "targetScreen": "BH", "buttonType": "button-type-3" },
  { "id": "BIAF4", "image": "leer.png", "targetScreen": "BCH", "buttonType": "button-type-4" },
  { "id": "BIAF5", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-5" },
  { "id": "BIAF6", "image": "leer.png", "targetScreen": "BI", "buttonType": "button-type-6" },
  { "id": "BIAF7", "image": "leer.png", "targetScreen": "BJ", "buttonType": "button-type-7" },
  { "id": "BIAF8", "image": "leer.png", "targetScreen": "BE", "buttonType": "button-type-8" },
  { "id": "BIAF9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
  { "id": "BIAF10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
  { "id": "BIAF11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
  { "id": "BIAF12", "image": "diagnoseAJ.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
  { "id": "BIAF13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
  { "id": "BIAF14", "image": "prozess.png", "targetScreen": "AK", "buttonType": "button-type-14" },
  { "id": "BIAF15", "image": "instandhalt.png", "targetScreen": "AL", "buttonType": "button-type-15" },
  { "id": "BIAF16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
  { "id": "BIAF17", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-17" },
  { "id": "BIAF18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
  { "id": "BIAF26", "image": "detailsAnzeigen.png", "targetScreen": "AKZ", "buttonType": "button-type-97" },
  { "id": "BIAF27", "image": "leerNeben.png", "targetScreen": "", "buttonType": "button-type-98" },
  { "id": "BIAF28", "image": "alleGeräteAnzeigenBIAF.png", "targetScreen": "BI", "buttonType": "button-type-99" },
  { "id": "BIAF29", "image": "vorhandeneGeräteBIAF.png", "targetScreen": "BIAF", "buttonType": "button-type-100" },
  { "id": "BIAF30", "image": "unterdrückteGeräte.png", "targetScreen": "BIAG", "buttonType": "button-type-101" },
  { "id": "BIAF31", "image": "ausgefalleneGeräte.png", "targetScreen": "BIAH", "buttonType": "button-type-102" },
  { "id": "BIAF32", "image": "gestörteGeräte.png", "targetScreen": "BIACH", "buttonType": "button-type-103" }


	
	],
	
	
	

     // vorhandeneGeräteBIAFA
	
		
	'AKZ':[	
	
	
  { "id": "BIAFA1", "image": "PBPN.png", "targetScreen": "BI", "buttonType": "button-type-1" },
  { "id": "BIAFA2", "image": "TCPIP.png", "targetScreen": "BIA", "buttonType": "button-type-2" },
  { "id": "BIAFA3", "image": "leer.png", "targetScreen": "BH", "buttonType": "button-type-3" },
  { "id": "BIAFA4", "image": "leer.png", "targetScreen": "BCH", "buttonType": "button-type-4" },
  { "id": "BIAFA5", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-5" },
  { "id": "BIAFA6", "image": "leer.png", "targetScreen": "BI", "buttonType": "button-type-6" },
  { "id": "BIAFA7", "image": "leer.png", "targetScreen": "BJ", "buttonType": "button-type-7" },
  { "id": "BIAFA8", "image": "leer.png", "targetScreen": "BE", "buttonType": "button-type-8" },
  { "id": "BIAFA9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
  { "id": "BIAFA10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
  { "id": "BIAFA11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
  { "id": "BIAFA12", "image": "diagnoseAJ.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
  { "id": "BIAFA13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
  { "id": "BIAFA14", "image": "prozess.png", "targetScreen": "AK", "buttonType": "button-type-14" },
  { "id": "BIAFA15", "image": "instandhalt.png", "targetScreen": "AL", "buttonType": "button-type-15" },
  { "id": "BIAFA16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
  { "id": "BIAFA17", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-17" },
  { "id": "BIAFA18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
  { "id": "BIAFA26", "image": "detailsAusblenden.png", "targetScreen": "BIAF", "buttonType": "button-type-97" },
  { "id": "BIAFA27", "image": "leerNeben.png", "targetScreen": "", "buttonType": "button-type-98" },
  { "id": "BIAFA28", "image": "alleGeräteAnzeigenBIAF.png", "targetScreen": "BIAAA", "buttonType": "button-type-99" },
  { "id": "BIAFA29", "image": "vorhandeneGeräteBIAF.png", "targetScreen": "AKZ", "buttonType": "button-type-100" },
  { "id": "BIAFA30", "image": "unterdrückteGeräte.png", "targetScreen": "BIAGA", "buttonType": "button-type-101" },
  { "id": "BIAFA31", "image": "ausgefalleneGeräte.png", "targetScreen": "BIAHA", "buttonType": "button-type-102" },
  { "id": "BIAFA32", "image": "gestörteGeräte.png", "targetScreen": "BIACHA", "buttonType": "button-type-103" }
],

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	// unterdrückteGeräte
	
	'BIAG':[	
	
	
  { "id": "BIAG1", "image": "PBPN.png", "targetScreen": "BI", "buttonType": "button-type-1" },
  { "id": "BIAG2", "image": "TCPIP.png", "targetScreen": "BIA", "buttonType": "button-type-2" },
  { "id": "BIAG3", "image": "leer.png", "targetScreen": "BH", "buttonType": "button-type-3" },
  { "id": "BIAG4", "image": "leer.png", "targetScreen": "BCH", "buttonType": "button-type-4" },
  { "id": "BIAG5", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-5" },
  { "id": "BIAG6", "image": "leer.png", "targetScreen": "BI", "buttonType": "button-type-6" },
  { "id": "BIAG7", "image": "leer.png", "targetScreen": "BJ", "buttonType": "button-type-7" },
  { "id": "BIAG8", "image": "leer.png", "targetScreen": "BE", "buttonType": "button-type-8" },
  { "id": "BIAG9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
  { "id": "BIAG10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
  { "id": "BIAG11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
  { "id": "BIAG12", "image": "diagnoseAJ.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
  { "id": "BIAG13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
  { "id": "BIAG14", "image": "prozess.png", "targetScreen": "AK", "buttonType": "button-type-14" },
  { "id": "BIAG15", "image": "instandhalt.png", "targetScreen": "AL", "buttonType": "button-type-15" },
  { "id": "BIAG16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
  { "id": "BIAG17", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-17" },
  { "id": "BIAG18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
  { "id": "BIAG26", "image": "detailsAnzeigen.png", "targetScreen": "BIAGA", "buttonType": "button-type-97" },
  { "id": "BIAG27", "image": "leerNeben.png", "targetScreen": "", "buttonType": "button-type-98" },
  { "id": "BIAG28", "image": "alleGeräteAnzeigenBIAF.png", "targetScreen": "BI", "buttonType": "button-type-99" },
  { "id": "BIAG29", "image": "vorhandeneGeräte.png", "targetScreen": "BIAF", "buttonType": "button-type-100" },
  { "id": "BIAG30", "image": "unterdrückteGeräteBIAG.png", "targetScreen": "BIAG", "buttonType": "button-type-101" },
  { "id": "BIAG31", "image": "ausgefalleneGeräte.png", "targetScreen": "BIAH", "buttonType": "button-type-102" },
  { "id": "BIAG32", "image": "gestörteGeräte.png", "targetScreen": "BIACH", "buttonType": "button-type-103" }


],	
	
	
		
	// unterdrückteGeräteBIAGA
	
	'BIAGA':[	
	
	
  { "id": "BIAGA1", "image": "PBPN.png", "targetScreen": "BI", "buttonType": "button-type-1" },
  { "id": "BIAGA2", "image": "TCPIP.png", "targetScreen": "BIA", "buttonType": "button-type-2" },
  { "id": "BIAGA3", "image": "leer.png", "targetScreen": "BH", "buttonType": "button-type-3" },
  { "id": "BIAGA4", "image": "leer.png", "targetScreen": "BCH", "buttonType": "button-type-4" },
  { "id": "BIAGA5", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-5" },
  { "id": "BIAGA6", "image": "leer.png", "targetScreen": "BI", "buttonType": "button-type-6" },
  { "id": "BIAGA7", "image": "leer.png", "targetScreen": "BJ", "buttonType": "button-type-7" },
  { "id": "BIAGA8", "image": "leer.png", "targetScreen": "BE", "buttonType": "button-type-8" },
  { "id": "BIAGA9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
  { "id": "BIAGA10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
  { "id": "BIAGA11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
  { "id": "BIAGA12", "image": "diagnoseAJ.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
  { "id": "BIAGA13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
  { "id": "BIAGA14", "image": "prozess.png", "targetScreen": "AK", "buttonType": "button-type-14" },
  { "id": "BIAGA15", "image": "instandhalt.png", "targetScreen": "AL", "buttonType": "button-type-15" },
  { "id": "BIAGA16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
  { "id": "BIAGA17", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-17" },
  { "id": "BIAGA18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
  { "id": "BIAGA26", "image": "detailsAusblenden.png", "targetScreen": "BIAG", "buttonType": "button-type-97" },
  { "id": "BIAGA27", "image": "leerNeben.png", "targetScreen": "", "buttonType": "button-type-98" },
  { "id": "BIAGA28", "image": "alleGeräteAnzeigenBIAF.png", "targetScreen": "BIAAA", "buttonType": "button-type-99" },
  { "id": "BIAGA29", "image": "vorhandeneGeräte.png", "targetScreen": "AKZ", "buttonType": "button-type-100" },
  { "id": "BIAGA30", "image": "unterdrückteGeräteBIAG.png", "targetScreen": "BIAGA", "buttonType": "button-type-101" },
  { "id": "BIAGA31", "image": "ausgefalleneGeräte.png", "targetScreen": "BIAHA", "buttonType": "button-type-102" },
  { "id": "BIAGA32", "image": "gestörteGeräte.png", "targetScreen": "BIACHA", "buttonType": "button-type-103" }
],

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	// ausgefalleneGeräte
	
	'BIAH':[	
	
	
  { "id": "BIAH1", "image": "PBPN.png", "targetScreen": "BI", "buttonType": "button-type-1" },
  { "id": "BIAH2", "image": "TCPIP.png", "targetScreen": "BIA", "buttonType": "button-type-2" },
  { "id": "BIAH3", "image": "leer.png", "targetScreen": "BH", "buttonType": "button-type-3" },
  { "id": "BIAH4", "image": "leer.png", "targetScreen": "BCH", "buttonType": "button-type-4" },
  { "id": "BIAH5", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-5" },
  { "id": "BIAH6", "image": "leer.png", "targetScreen": "BI", "buttonType": "button-type-6" },
  { "id": "BIAH7", "image": "leer.png", "targetScreen": "BJ", "buttonType": "button-type-7" },
  { "id": "BIAH8", "image": "leer.png", "targetScreen": "BE", "buttonType": "button-type-8" },
  { "id": "BIAH9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
  { "id": "BIAH10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
  { "id": "BIAH11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
  { "id": "BIAH12", "image": "diagnoseAJ.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
  { "id": "BIAH13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
  { "id": "BIAH14", "image": "prozess.png", "targetScreen": "AK", "buttonType": "button-type-14" },
  { "id": "BIAH15", "image": "instandhalt.png", "targetScreen": "AL", "buttonType": "button-type-15" },
  { "id": "BIAH16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
  { "id": "BIAH17", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-17" },
  { "id": "BIAH18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
  { "id": "BIAH26", "image": "detailsAnzeigen.png", "targetScreen": "BIAHA", "buttonType": "button-type-97" },
  { "id": "BIAH27", "image": "leerNeben.png", "targetScreen": "", "buttonType": "button-type-98" },
  { "id": "BIAH28", "image": "alleGeräteAnzeigenBIAF.png", "targetScreen": "BI", "buttonType": "button-type-99" },
  { "id": "BIAH29", "image": "vorhandeneGeräte.png", "targetScreen": "BIAF", "buttonType": "button-type-100" },
  { "id": "BIAH30", "image": "unterdrückteGeräte.png", "targetScreen": "BIAG", "buttonType": "button-type-101" },
  { "id": "BIAH31", "image": "ausgefalleneGeräteBIAH.png", "targetScreen": "BIAH", "buttonType": "button-type-102" },
  { "id": "BIAH32", "image": "gestörteGeräte.png", "targetScreen": "BIACH", "buttonType": "button-type-103" }
],

	
	// ausgefalleneGeräteBIAHA
	
	
	'BIAHA':[	
	
	
	
  { "id": "BIAHA1", "image": "PBPN.png", "targetScreen": "BI", "buttonType": "button-type-1" },
  { "id": "BIAHA2", "image": "TCPIP.png", "targetScreen": "BIA", "buttonType": "button-type-2" },
  { "id": "BIAHA3", "image": "leer.png", "targetScreen": "BH", "buttonType": "button-type-3" },
  { "id": "BIAHA4", "image": "leer.png", "targetScreen": "BCH", "buttonType": "button-type-4" },
  { "id": "BIAHA5", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-5" },
  { "id": "BIAHA6", "image": "leer.png", "targetScreen": "BI", "buttonType": "button-type-6" },
  { "id": "BIAHA7", "image": "leer.png", "targetScreen": "BJ", "buttonType": "button-type-7" },
  { "id": "BIAHA8", "image": "leer.png", "targetScreen": "BE", "buttonType": "button-type-8" },
  { "id": "BIAHA9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
  { "id": "BIAHA10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
  { "id": "BIAHA11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
  { "id": "BIAHA12", "image": "diagnoseAJ.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
  { "id": "BIAHA13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
  { "id": "BIAHA14", "image": "prozess.png", "targetScreen": "AK", "buttonType": "button-type-14" },
  { "id": "BIAHA15", "image": "instandhalt.png", "targetScreen": "AL", "buttonType": "button-type-15" },
  { "id": "BIAHA16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
  { "id": "BIAHA17", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-17" },
  { "id": "BIAHA18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
  { "id": "BIAHA26", "image": "detailsAusblenden.png", "targetScreen": "BIAH", "buttonType": "button-type-97" },
  { "id": "BIAHA27", "image": "leerNeben.png", "targetScreen": "", "buttonType": "button-type-98" },
  { "id": "BIAHA28", "image": "alleGeräteAnzeigenBIAF.png", "targetScreen": "BIAAA", "buttonType": "button-type-99" },
  { "id": "BIAHA29", "image": "vorhandeneGeräte.png", "targetScreen": "AKZ", "buttonType": "button-type-100" },
  { "id": "BIAHA30", "image": "unterdrückteGeräte.png", "targetScreen": "BIAGA", "buttonType": "button-type-101" },
  { "id": "BIAHA31", "image": "ausgefalleneGeräteBIAH.png", "targetScreen": "BIAHA", "buttonType": "button-type-102" },
  { "id": "BIAHA32", "image": "gestörteGeräte.png", "targetScreen": "BIACHA", "buttonType": "button-type-103" }
],

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
		
	// gestörteGeräte
	
	'BIACH':[
	
	
  { "id": "BIACH1", "image": "PBPN.png", "targetScreen": "BI", "buttonType": "button-type-1" },
  { "id": "BIACH2", "image": "TCPIP.png", "targetScreen": "BIA", "buttonType": "button-type-2" },
  { "id": "BIACH3", "image": "leer.png", "targetScreen": "BH", "buttonType": "button-type-3" },
  { "id": "BIACH4", "image": "leer.png", "targetScreen": "BCH", "buttonType": "button-type-4" },
  { "id": "BIACH5", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-5" },
  { "id": "BIACH6", "image": "leer.png", "targetScreen": "BI", "buttonType": "button-type-6" },
  { "id": "BIACH7", "image": "leer.png", "targetScreen": "BJ", "buttonType": "button-type-7" },
  { "id": "BIACH8", "image": "leer.png", "targetScreen": "BE", "buttonType": "button-type-8" },
  { "id": "BIACH9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
  { "id": "BIACH10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
  { "id": "BIACH11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
  { "id": "BIACH12", "image": "diagnoseAJ.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
  { "id": "BIACH13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
  { "id": "BIACH14", "image": "prozess.png", "targetScreen": "AK", "buttonType": "button-type-14" },
  { "id": "BIACH15", "image": "instandhalt.png", "targetScreen": "AL", "buttonType": "button-type-15" },
  { "id": "BIACH16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
  { "id": "BIACH17", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-17" },
  { "id": "BIACH18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
  { "id": "BIACH26", "image": "detailsAnzeigen.png", "targetScreen": "BIACHA", "buttonType": "button-type-97" },
  { "id": "BIACH27", "image": "leerNeben.png", "targetScreen": "", "buttonType": "button-type-98" },
  { "id": "BIACH28", "image": "alleGeräteAnzeigenBIAF.png", "targetScreen": "BI", "buttonType": "button-type-99" },
  { "id": "BIACH29", "image": "vorhandeneGeräte.png", "targetScreen": "BIAF", "buttonType": "button-type-100" },
  { "id": "BIACH30", "image": "unterdrückteGeräte.png", "targetScreen": "BIAG", "buttonType": "button-type-101" },
  { "id": "BIACH31", "image": "ausgefalleneGeräte.png", "targetScreen": "BIAH", "buttonType": "button-type-102" },
  { "id": "BIACH32", "image": "gestörteGeräteBIACH.png", "targetScreen": "BIACH", "buttonType": "button-type-103" }



	
	
	
	
	],
	
	
		
	// gestörteGeräteBIACHA
	
	'BIACHA':[
	
	
	
	
  { "id": "BIACHA1", "image": "PBPN.png", "targetScreen": "BI", "buttonType": "button-type-1" },
  { "id": "BIACHA2", "image": "TCPIP.png", "targetScreen": "BIA", "buttonType": "button-type-2" },
  { "id": "BIACHA3", "image": "leer.png", "targetScreen": "BH", "buttonType": "button-type-3" },
  { "id": "BIACHA4", "image": "leer.png", "targetScreen": "BCH", "buttonType": "button-type-4" },
  { "id": "BIACHA5", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-5" },
  { "id": "BIACHA6", "image": "leer.png", "targetScreen": "BI", "buttonType": "button-type-6" },
  { "id": "BIACHA7", "image": "leer.png", "targetScreen": "BJ", "buttonType": "button-type-7" },
  { "id": "BIACHA8", "image": "leer.png", "targetScreen": "BE", "buttonType": "button-type-8" },
  { "id": "BIACHA9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
  { "id": "BIACHA10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
  { "id": "BIACHA11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
  { "id": "BIACHA12", "image": "diagnoseAJ.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
  { "id": "BIACHA13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
  { "id": "BIACHA14", "image": "prozess.png", "targetScreen": "AK", "buttonType": "button-type-14" },
  { "id": "BIACHA15", "image": "instandhalt.png", "targetScreen": "AL", "buttonType": "button-type-15" },
  { "id": "BIACHA16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
  { "id": "BIACHA17", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-17" },
  { "id": "BIACHA18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
  { "id": "BIACHA26", "image": "detailsAnzeigen.png", "targetScreen": "BIACH", "buttonType": "button-type-97" },
  { "id": "BIACHA27", "image": "leerNeben.png", "targetScreen": "", "buttonType": "button-type-98" },
  { "id": "BIACHA28", "image": "alleGeräteAnzeigenBIAF.png", "targetScreen": "BI", "buttonType": "button-type-99" },
  { "id": "BIACHA29", "image": "vorhandeneGeräte.png", "targetScreen": "BIAF", "buttonType": "button-type-100" },
  { "id": "BIACHA30", "image": "unterdrückteGeräte.png", "targetScreen": "BIAG", "buttonType": "button-type-101" },
  { "id": "BIACHA31", "image": "ausgefalleneGeräte.png", "targetScreen": "BIAH", "buttonType": "button-type-102" },
  { "id": "BIACHA32", "image": "gestörteGeräteBIACH.png", "targetScreen": "BIACH", "buttonType": "button-type-103" }
],

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	// bussystemeTCPIP2
	
	
	
	
	'BIB':[	
  { "id": "BIB1", "image": "alarmliste.png", "targetScreen": "BI", "buttonType": "button-type-1" },
  { "id": "BIB2", "image": "meldungenUnten.png", "targetScreen": "BIA", "buttonType": "button-type-2" },
  { "id": "BIB3", "image": "alarmProtokolle.png", "targetScreen": "BH", "buttonType": "button-type-3" },
  { "id": "BIB4", "image": "NCPLCVariable.png", "targetScreen": "BCH", "buttonType": "button-type-4" },

  
  
  { "id": "BIB7", "image": "ferndialog.png", "targetScreen": "BJ", "buttonType": "button-type-6" },
  
 { "id": "BIB9", "image": "versionUnten.png", "targetScreen": "BE", "buttonType": "button-type-8" },
 
 
  { "id": "BIB17", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-17" },
  { "id": "BIB20", "image": "symbolDiagnose.png", "targetScreen": "X", "buttonType": "button-type-75" },
  { "id": "BIB21", "image": "jog.png", "targetScreen": "X", "buttonType": "button-type-76" },
  { "id": "BIB22", "image": "undo.png", "targetScreen": "X", "buttonType": "button-type-77" },
  { "id": "BIB23", "image": "redo.png", "targetScreen": "X", "buttonType": "button-type-78" },
  { "id": "BIB26", "image": "neuanzeigen.png", "targetScreen": "", "buttonType": "button-type-87" },
  { "id": "BIB27", "image": "TCPIPKonfig.png", "targetScreen": "", "buttonType": "button-type-88" },
  { "id": "BIB28", "image": "leerNeben.png", "targetScreen": "", "buttonType": "button-type-89" },
  { "id": "BIB29", "image": "fehlerAnalyse.png", "targetScreen": "", "buttonType": "button-type-90" },
  { "id": "BIB30", "image": "leerNeben.png", "targetScreen": "", "buttonType": "button-type-91" },
  { "id": "BIB31", "image": "detailsNeben.png", "targetScreen": "", "buttonType": "button-type-92" },
  { "id": "BIB32", "image": "diagnoseNetzwerk.png", "targetScreen": "", "buttonType": "button-type-93" },
  
  
  { "id": "BIB33", "image": "zurück.png", "targetScreen": "", "buttonType": "button-type-94" },
  { "id": "BIB34", "image": "pfeilRechtsKlein.png", "targetScreen": "BIC", "buttonType": "button-type-95" }
  
  
  
],

	// bussystemeTCPIP3
	
	
	'BIC':[	
  { "id": "BIC1", "image": "PBPNDiag.png", "targetScreen": "BI", "buttonType": "button-type-1" },
  
  
 
  
  { "id": "BIC17", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-17" },
  { "id": "BIC20", "image": "symbolDiagnose.png", "targetScreen": "X", "buttonType": "button-type-75" },
  { "id": "BIC21", "image": "jog.png", "targetScreen": "X", "buttonType": "button-type-76" },
  { "id": "BIC22", "image": "undo.png", "targetScreen": "X", "buttonType": "button-type-77" },
  { "id": "BIC23", "image": "redo.png", "targetScreen": "X", "buttonType": "button-type-78" },
  { "id": "BIC26", "image": "neuanzeigen.png", "targetScreen": "", "buttonType": "button-type-87" },
  { "id": "BIC27", "image": "TCPIPKonfig.png", "targetScreen": "", "buttonType": "button-type-88" },
  { "id": "BIC28", "image": "leerNeben.png", "targetScreen": "", "buttonType": "button-type-89" },
  { "id": "BIC29", "image": "fehlerAnalyse.png", "targetScreen": "", "buttonType": "button-type-90" },
  { "id": "BIC30", "image": "leerNeben.png", "targetScreen": "", "buttonType": "button-type-91" },
  { "id": "BIC31", "image": "detailsNeben.png", "targetScreen": "", "buttonType": "button-type-92" },
  { "id": "BIC32", "image": "diagnoseNetzwerk.png", "targetScreen": "", "buttonType": "button-type-93" },
  { "id": "BIC33", "image": "zurück.png", "targetScreen": "", "buttonType": "button-type-94" },
  { "id": "BIC34", "image": "pfeilRechtsKlein.png", "targetScreen": "BIA", "buttonType": "button-type-96" }
],

	
	
	
	
	
	
	
	
	
	
	// prozess
	
	
	
	
	'AK':[	
	
	
	
	
{ "id": "AK1", "image": "konfigAnw.png", "targetScreen": "BK", "buttonType": "button-type-1" },
{ "id": "AK2", "image": "palStatus.png", "targetScreen": "BL", "buttonType": "button-type-2" },
{ "id": "AK3", "image": "bdeNamen.png", "targetScreen": "AK", "buttonType": "button-type-3" },
{ "id": "AK4", "image": "wZahlung.png", "targetScreen": "BM", "buttonType": "button-type-4" },
{ "id": "AK5", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-5" },
{ "id": "AK6", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-6" },
{ "id": "AK7", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-7" },
{ "id": "AK8", "image": "taktzeiten.png", "targetScreen": "BN", "buttonType": "button-type-8" },
{ "id": "AK9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
{ "id": "AK10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
{ "id": "AK11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
{ "id": "AK12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
{ "id": "AK13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
{ "id": "AK14", "image": "prozessBK.png", "targetScreen": "AK", "buttonType": "button-type-14" },
{ "id": "AK15", "image": "instandhalt.png", "targetScreen": "AL", "buttonType": "button-type-15" },
{ "id": "AK16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
{ "id": "AK17", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-17" },
{ "id": "AK18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
{ "id": "BIAFA26", "image": "leerNeben.png", "targetScreen": "BIAF", "buttonType": "button-type-97" },
{ "id": "BIAFA27", "image": "leerNeben.png", "targetScreen": "", "buttonType": "button-type-98" },
{ "id": "BIAFA28", "image": "typWählen.png", "targetScreen": "AKZA", "buttonType": "button-type-99" },
{ "id": "BIAFA29", "image": "leerNeben.png", "targetScreen": "", "buttonType": "button-type-100" },
{ "id": "BIAFA30", "image": "leerNeben.png", "targetScreen": "", "buttonType": "button-type-101" },
{ "id": "BIAFA31", "image": "bezeichnungÄndern.png", "targetScreen": "AKZ", "buttonType": "button-type-102" },
{ "id": "BIAFA32", "image": "leerNeben.png", "targetScreen": "", "buttonType": "button-type-103" }

	
	],
	
	
	
	
	
  "AKZA": [
    { "id": "AKZA1", "image": "konfigAnw.png", "targetScreen": "BK", "buttonType": "button-type-1" },
    { "id": "AKZA2", "image": "palStatus.png", "targetScreen": "BL", "buttonType": "button-type-2" },
    { "id": "AKZA3", "image": "bdeNamen.png", "targetScreen": "AK", "buttonType": "button-type-3" },
    { "id": "AKZA4", "image": "wZahlung.png", "targetScreen": "BM", "buttonType": "button-type-4" },
    { "id": "AKZA5", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-5" },
    { "id": "AKZA6", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-6" },
    { "id": "AKZA7", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-7" },
    { "id": "AKZA8", "image": "taktzeiten.png", "targetScreen": "BN", "buttonType": "button-type-8" },
    { "id": "AKZA9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
    { "id": "AKZA10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
    { "id": "AKZA11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
    { "id": "AKZA12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
    { "id": "AKZA13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
    { "id": "AKZA14", "image": "prozessBK.png", "targetScreen": "AK", "buttonType": "button-type-14" },
    { "id": "AKZA15", "image": "instandhalt.png", "targetScreen": "AL", "buttonType": "button-type-15" },
    { "id": "AKZA16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
    { "id": "AKZA17", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-17" },
    { "id": "AKZA18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
    { "id": "BIAFA26", "image": "leerNeben.png", "targetScreen": "BIAF", "buttonType": "button-type-97" },
    { "id": "BIAFA27", "image": "leerNeben.png", "targetScreen": "", "buttonType": "button-type-98" },
    { "id": "BIAFA28", "image": "typWählenAKZA.png", "targetScreen": "AK", "buttonType": "button-type-99" },
    { "id": "BIAFA29", "image": "leerNeben.png", "targetScreen": "", "buttonType": "button-type-100" },
    { "id": "BIAFA30", "image": "leerNeben.png", "targetScreen": "", "buttonType": "button-type-101" },
    { "id": "BIAFA31", "image": "bezeichnungÄndern.png", "targetScreen": "AKZ", "buttonType": "button-type-102" },
    { "id": "BIAFA32", "image": "leerNeben.png", "targetScreen": "", "buttonType": "button-type-103" }
  ],


	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	// prozess
	
	
	
  "AKZ": [
    { "id": "AKZ1", "image": "konfigAnw.png", "targetScreen": "BK", "buttonType": "button-type-1" },
    { "id": "AKZ2", "image": "palStatus.png", "targetScreen": "BL", "buttonType": "button-type-2" },
    { "id": "AKZ3", "image": "bdeNamen.png", "targetScreen": "AK", "buttonType": "button-type-3" },
    { "id": "AKZ4", "image": "wZahlung.png", "targetScreen": "BM", "buttonType": "button-type-4" },
    { "id": "AKZ5", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-5" },
    { "id": "AKZ6", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-6" },
    { "id": "AKZ7", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-7" },
    { "id": "AKZ8", "image": "taktzeiten.png", "targetScreen": "BN", "buttonType": "button-type-8" },
    { "id": "AKZ9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
    { "id": "AKZ10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
    { "id": "AKZ11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
    { "id": "AKZ12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
    { "id": "AKZ13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
    { "id": "AKZ14", "image": "prozessBK.png", "targetScreen": "AK", "buttonType": "button-type-14" },
    { "id": "AKZ15", "image": "instandhalt.png", "targetScreen": "AL", "buttonType": "button-type-15" },
    { "id": "AKZ16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
    { "id": "AKZ17", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-17" },
    { "id": "AKZ18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
    { "id": "AKZ26", "image": "leerNeben.png", "targetScreen": "", "buttonType": "button-type-97" },
    { "id": "AKZ27", "image": "leerNeben.png", "targetScreen": "", "buttonType": "button-type-98" },
    { "id": "AKZ28", "image": "leerNeben.png", "targetScreen": "", "buttonType": "button-type-99" },
    { "id": "AKZ29", "image": "leerNeben.png", "targetScreen": "", "buttonType": "button-type-100" },
    { "id": "AKZ30", "image": "leerNeben.png", "targetScreen": "", "buttonType": "button-type-101" },
    { "id": "AKZ31", "image": "abrechnen.png", "targetScreen": "AK", "buttonType": "button-type-102" },
    { "id": "AKZ32", "image": "ok.png", "targetScreen": "AK", "buttonType": "button-type-103" }
  ],


	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	// configAnw
	
	
	
	
	'BK':[	
	
	{ "id": "BK1", "image": "konf16.png", "targetScreen": "BK", "buttonType": "button-type-1" },
{ "id": "BK2", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-2" },
{ "id": "BK3", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-3" },
{ "id": "BK4", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-4" },
{ "id": "BK5", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-5" },
{ "id": "BK6", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-6" },
{ "id": "BK7", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-7" },
{ "id": "BK8", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-8" },
{ "id": "BK9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
{ "id": "BK10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
{ "id": "BK11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
{ "id": "BK12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
{ "id": "BK13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
{ "id": "BK14", "image": "prozessBK.png", "targetScreen": "BK", "buttonType": "button-type-14" },
{ "id": "BK15", "image": "instandhalt.png", "targetScreen": "AL", "buttonType": "button-type-15" },
{ "id": "BK16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
{ "id": "BK17", "image": "bbbutton.png", "targetScreen": "AK", "buttonType": "button-type-17" },
{ "id": "BK18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" }

	
	
	
	
	],
	
	
	
	
	// palStatus1
	
	
	
	
	'BL':[	
	
	{ "id": "BL1", "image": "palStatus1.png", "targetScreen": "BL", "buttonType": "button-type-1" },
{ "id": "BL2", "image": "palStatus12.png", "targetScreen": "BLA", "buttonType": "button-type-2" },
{ "id": "BL3", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-3" },
{ "id": "BL4", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-4" },
{ "id": "BL5", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-5" },
{ "id": "BL6", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-6" },
{ "id": "BL7", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-7" },
{ "id": "BL8", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-8" },
{ "id": "BL9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
{ "id": "BL10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
{ "id": "BL11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
{ "id": "BL12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
{ "id": "BL13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
{ "id": "BL14", "image": "prozessBK.png", "targetScreen": "BK", "buttonType": "button-type-14" },
{ "id": "BL15", "image": "instandhalt.png", "targetScreen": "AL", "buttonType": "button-type-15" },
{ "id": "BL16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
{ "id": "BL17", "image": "bbbutton.png", "targetScreen": "AK", "buttonType": "button-type-17" },
{ "id": "BL18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" }

	
	],
	
	
	
	
	
	// palStatus2
	
	'BLA':[	
	
	
	{ "id": "BLA1", "image": "palStatus12.png", "targetScreen": "BL", "buttonType": "button-type-1" },
{ "id": "BLA2", "image": "palStatus22.png", "targetScreen": "BLA", "buttonType": "button-type-2" },
{ "id": "BLA3", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-3" },
{ "id": "BLA4", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-4" },
{ "id": "BLA5", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-5" },
{ "id": "BLA6", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-6" },
{ "id": "BLA7", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-7" },
{ "id": "BLA8", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-8" },
{ "id": "BLA9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
{ "id": "BLA10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
{ "id": "BLA11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
{ "id": "BLA12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
{ "id": "BLA13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
{ "id": "BLA14", "image": "prozessBK.png", "targetScreen": "BK", "buttonType": "button-type-14" },
{ "id": "BLA15", "image": "instandhalt.png", "targetScreen": "AL", "buttonType": "button-type-15" },
{ "id": "BLA16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
{ "id": "BLA17", "image": "bbbutton.png", "targetScreen": "AK", "buttonType": "button-type-17" },
{ "id": "BLA18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" }

	
	
	
	
	
	
	
	],
	
	
	// wZAhlung
	
	
	
	
	
	'BM':[	
	
	
	
	
{ "id": "BM1", "image": "konfigAnw.png", "targetScreen": "BL", "buttonType": "button-type-1" },
{ "id": "BM2", "image": "palStatus.png", "targetScreen": "BLA", "buttonType": "button-type-2" },
{ "id": "BM3", "image": "bdeNamenBM.png", "targetScreen": "AK", "buttonType": "button-type-3" },
{ "id": "BM4", "image": "wZahlungBM.png", "targetScreen": "BM", "buttonType": "button-type-4" },
{ "id": "BM5", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-5" },
{ "id": "BM6", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-6" },
{ "id": "BM7", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-7" },
{ "id": "BM8", "image": "taktzeiten.png", "targetScreen": "BN", "buttonType": "button-type-8" },
{ "id": "BM9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
{ "id": "BM10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
{ "id": "BM11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
{ "id": "BM12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
{ "id": "BM13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
{ "id": "BM14", "image": "prozessBK.png", "targetScreen": "BK", "buttonType": "button-type-14" },
{ "id": "BM15", "image": "instandhalt.png", "targetScreen": "AL", "buttonType": "button-type-15" },
{ "id": "BM16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
{ "id": "BM17", "image": "alleGesZrücksetzen.png", "targetScreen": "BMX", "buttonType": "button-type-97" },
{ "id": "BM18", "image": "alleTagesZrücksetzen.png", "targetScreen": "BMXA", "buttonType": "button-type-98" },
{ "id": "BM19", "image": "alleSchichtRücksetzen.png", "targetScreen": "BMXB", "buttonType": "button-type-99" },
{ "id": "BM20", "image": "typGesZrücksetzen.png", "targetScreen": "BMXC", "buttonType": "button-type-100" },
{ "id": "BM21", "image": "typTagesZrücksetzen.png", "targetScreen": "BMXD", "buttonType": "button-type-101" },
{ "id": "BM22", "image": "typSchichtRücksetzen.png", "targetScreen": "BMXE", "buttonType": "button-type-102" }


	
	
	],
	
	
	// wZAhlung1
	
	
	
	
  "BMX": [
    { "id": "BMX1", "image": "konfigAnw.png", "targetScreen": "BL", "buttonType": "button-type-1" },
    { "id": "BMX2", "image": "palStatus.png", "targetScreen": "BLA", "buttonType": "button-type-2" },
    { "id": "BMX3", "image": "bdeNamenBM.png", "targetScreen": "AK", "buttonType": "button-type-3" },
    { "id": "BMX4", "image": "wZahlungBM.png", "targetScreen": "BM", "buttonType": "button-type-4" },
    { "id": "BMX5", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-5" },
    { "id": "BMX6", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-6" },
    { "id": "BMX7", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-7" },
    { "id": "BMX8", "image": "taktzeiten.png", "targetScreen": "BN", "buttonType": "button-type-8" },
    { "id": "BMX9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
    { "id": "BMX10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
    { "id": "BMX11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
    { "id": "BMX12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
    { "id": "BMX13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
    { "id": "BMX14", "image": "prozessBK.png", "targetScreen": "BK", "buttonType": "button-type-14" },
    { "id": "BMX15", "image": "instandhalt.png", "targetScreen": "AL", "buttonType": "button-type-15" },
    { "id": "BMX16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
    { "id": "BMX17", "image": "alleGesZrücksetzenBlau.png", "targetScreen": "BM", "buttonType": "button-type-97" },
    { "id": "BMX18", "image": "alleTagesZrücksetzen.png", "targetScreen": "BMXA", "buttonType": "button-type-98" },
    { "id": "BMX19", "image": "alleSchichtRücksetzen.png", "targetScreen": "BMXB", "buttonType": "button-type-99" },
    { "id": "BMX20", "image": "typGesZrücksetzen.png", "targetScreen": "BMXC", "buttonType": "button-type-100" },
    { "id": "BMX21", "image": "typTagesZrücksetzen.png", "targetScreen": "BMXD", "buttonType": "button-type-101" },
    { "id": "BMX22", "image": "typSchichtRücksetzen.png", "targetScreen": "BMXE", "buttonType": "button-type-102" }
  ],


	// wZAhlung2
	
 


  "BMXA": [
    { "id": "BMXA1", "image": "konfigAnw.png", "targetScreen": "BL", "buttonType": "button-type-1" },
    { "id": "BMXA2", "image": "palStatus.png", "targetScreen": "BLA", "buttonType": "button-type-2" },
    { "id": "BMXA3", "image": "bdeNamenBM.png", "targetScreen": "AK", "buttonType": "button-type-3" },
    { "id": "BMXA4", "image": "wZahlungBM.png", "targetScreen": "BM", "buttonType": "button-type-4" },
    { "id": "BMXA5", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-5" },
    { "id": "BMXA6", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-6" },
    { "id": "BMXA7", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-7" },
    { "id": "BMXA8", "image": "taktzeiten.png", "targetScreen": "BN", "buttonType": "button-type-8" },
    { "id": "BMXA9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
    { "id": "BMXA10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
    { "id": "BMXA11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
    { "id": "BMXA12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
    { "id": "BMXA13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
    { "id": "BMXA14", "image": "prozessBK.png", "targetScreen": "BK", "buttonType": "button-type-14" },
    { "id": "BMXA15", "image": "instandhalt.png", "targetScreen": "AL", "buttonType": "button-type-15" },
    { "id": "BMXA16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
    { "id": "BMXA17", "image": "alleGesZrücksetzen.png", "targetScreen": "BM", "buttonType": "button-type-97" },
    { "id": "BMXA18", "image": "alleTagesZrücksetzenBlau.png", "targetScreen": "BMXA", "buttonType": "button-type-98" },
    { "id": "BMXA19", "image": "alleSchichtRücksetzen.png", "targetScreen": "BMXB", "buttonType": "button-type-99" },
    { "id": "BMXA20", "image": "typGesZrücksetzen.png", "targetScreen": "BMXC", "buttonType": "button-type-100" },
    { "id": "BMXA21", "image": "typTagesZrücksetzen.png", "targetScreen": "BMXD", "buttonType": "button-type-101" },
    { "id": "BMXA22", "image": "typSchichtRücksetzen.png", "targetScreen": "BMXE", "buttonType": "button-type-102" }
  ],


















	
	// wZAhlung3
	
	
  "BMXB": [
    { "id": "BMXB1", "image": "konfigAnw.png", "targetScreen": "BL", "buttonType": "button-type-1" },
    { "id": "BMXB2", "image": "palStatus.png", "targetScreen": "BLA", "buttonType": "button-type-2" },
    { "id": "BMXB3", "image": "bdeNamenBM.png", "targetScreen": "AK", "buttonType": "button-type-3" },
    { "id": "BMXB4", "image": "wZahlungBM.png", "targetScreen": "BM", "buttonType": "button-type-4" },
    { "id": "BMXB5", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-5" },
    { "id": "BMXB6", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-6" },
    { "id": "BMXB7", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-7" },
    { "id": "BMXB8", "image": "taktzeiten.png", "targetScreen": "BN", "buttonType": "button-type-8" },
    { "id": "BMXB9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
    { "id": "BMXB10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
    { "id": "BMXB11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
    { "id": "BMXB12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
    { "id": "BMXB13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
    { "id": "BMXB14", "image": "prozessBK.png", "targetScreen": "BK", "buttonType": "button-type-14" },
    { "id": "BMXB15", "image": "instandhalt.png", "targetScreen": "AL", "buttonType": "button-type-15" },
    { "id": "BMXB16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
    { "id": "BMXB17", "image": "alleGesZrücksetzen.png", "targetScreen": "BMX", "buttonType": "button-type-97" },
    { "id": "BMXB18", "image": "alleTagesZrücksetzen.png", "targetScreen": "BMXA", "buttonType": "button-type-98" },
    { "id": "BMXB19", "image": "alleSchichtRücksetzenBLAU.png", "targetScreen": "BM", "buttonType": "button-type-99" },
    { "id": "BMXB20", "image": "typGesZrücksetzen.png", "targetScreen": "BMXC", "buttonType": "button-type-100" },
    { "id": "BMXB21", "image": "typTagesZrücksetzen.png", "targetScreen": "BMXD", "buttonType": "button-type-101" },
    { "id": "BMXB22", "image": "typSchichtRücksetzen.png", "targetScreen": "BMXE", "buttonType": "button-type-102" }
  ],


		// wZAhlung4
	
	
	
  "BMXC": [
    { "id": "BMXC1", "image": "konfigAnw.png", "targetScreen": "BL", "buttonType": "button-type-1" },
    { "id": "BMXC2", "image": "palStatus.png", "targetScreen": "BLA", "buttonType": "button-type-2" },
    { "id": "BMXC3", "image": "bdeNamenBM.png", "targetScreen": "AK", "buttonType": "button-type-3" },
    { "id": "BMXC4", "image": "wZahlungBM.png", "targetScreen": "BM", "buttonType": "button-type-4" },
    { "id": "BMXC5", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-5" },
    { "id": "BMXC6", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-6" },
    { "id": "BMXC7", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-7" },
    { "id": "BMXC8", "image": "taktzeiten.png", "targetScreen": "BN", "buttonType": "button-type-8" },
    { "id": "BMXC9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
    { "id": "BMXC10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
    { "id": "BMXC11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
    { "id": "BMXC12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
    { "id": "BMXC13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
    { "id": "BMXC14", "image": "prozessBK.png", "targetScreen": "BK", "buttonType": "button-type-14" },
    { "id": "BMXC15", "image": "instandhalt.png", "targetScreen": "AL", "buttonType": "button-type-15" },
    { "id": "BMXC16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
    { "id": "BMXC17", "image": "alleGesZrücksetzen.png", "targetScreen": "BMX", "buttonType": "button-type-97" },
    { "id": "BMXC18", "image": "alleTagesZrücksetzen.png", "targetScreen": "BMXA", "buttonType": "button-type-98" },
    { "id": "BMXC19", "image": "alleSchichtRücksetzen.png", "targetScreen": "BMXB", "buttonType": "button-type-99" },
    { "id": "BMXC20", "image": "typGesZrücksetzenBlau.png", "targetScreen": "BM", "buttonType": "button-type-100" },
    { "id": "BMXC21", "image": "typTagesZrücksetzen.png", "targetScreen": "BMXD", "buttonType": "button-type-101" },
    { "id": "BMXC22", "image": "typSchichtRücksetzen.png", "targetScreen": "BMXE", "buttonType": "button-type-102" }
  ],


		// wZAhlung5
	
	
	
  "BMXD": [
    { "id": "BMXD1", "image": "konfigAnw.png", "targetScreen": "BL", "buttonType": "button-type-1" },
    { "id": "BMXD2", "image": "palStatus.png", "targetScreen": "BLA", "buttonType": "button-type-2" },
    { "id": "BMXD3", "image": "bdeNamenBM.png", "targetScreen": "AK", "buttonType": "button-type-3" },
    { "id": "BMXD4", "image": "wZahlungBM.png", "targetScreen": "BM", "buttonType": "button-type-4" },
    { "id": "BMXD5", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-5" },
    { "id": "BMXD6", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-6" },
    { "id": "BMXD7", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-7" },
    { "id": "BMXD8", "image": "taktzeiten.png", "targetScreen": "BN", "buttonType": "button-type-8" },
    { "id": "BMXD9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
    { "id": "BMXD10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
    { "id": "BMXD11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
    { "id": "BMXD12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
    { "id": "BMXD13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
    { "id": "BMXD14", "image": "prozessBK.png", "targetScreen": "BK", "buttonType": "button-type-14" },
    { "id": "BMXD15", "image": "instandhalt.png", "targetScreen": "AL", "buttonType": "button-type-15" },
    { "id": "BMXD16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
    { "id": "BMXD17", "image": "alleGesZrücksetzen.png", "targetScreen": "BMX", "buttonType": "button-type-97" },
    { "id": "BMXD18", "image": "alleTagesZrücksetzen.png", "targetScreen": "BMXA", "buttonType": "button-type-98" },
    { "id": "BMXD19", "image": "alleSchichtRücksetzen.png", "targetScreen": "BMXB", "buttonType": "button-type-99" },
    { "id": "BMXD20", "image": "typGesZrücksetzen.png", "targetScreen": "BMXC", "buttonType": "button-type-100" },
    { "id": "BMXD21", "image": "typTagesZrücksetzenBlau.png", "targetScreen": "BM", "buttonType": "button-type-101" },
    { "id": "BMXD22", "image": "typSchichtRücksetzen.png", "targetScreen": "BMXE", "buttonType": "button-type-102" }
  ],

// wZAhlung6
	
	
	
  "BMXE": [
    { "id": "BMXE1", "image": "konfigAnw.png", "targetScreen": "BL", "buttonType": "button-type-1" },
    { "id": "BMXE2", "image": "palStatus.png", "targetScreen": "BLA", "buttonType": "button-type-2" },
    { "id": "BMXE3", "image": "bdeNamenBM.png", "targetScreen": "AK", "buttonType": "button-type-3" },
    { "id": "BMXE4", "image": "wZahlungBM.png", "targetScreen": "BM", "buttonType": "button-type-4" },
    { "id": "BMXE5", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-5" },
    { "id": "BMXE6", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-6" },
    { "id": "BMXE7", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-7" },
    { "id": "BMXE8", "image": "taktzeiten.png", "targetScreen": "BN", "buttonType": "button-type-8" },
    { "id": "BMXE9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
    { "id": "BMXE10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
    { "id": "BMXE11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
    { "id": "BMXE12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
    { "id": "BMXE13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
    { "id": "BMXE14", "image": "prozessBK.png", "targetScreen": "BK", "buttonType": "button-type-14" },
    { "id": "BMXE15", "image": "instandhalt.png", "targetScreen": "AL", "buttonType": "button-type-15" },
    { "id": "BMXE16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
    { "id": "BMXE17", "image": "alleGesZrücksetzen.png", "targetScreen": "BMX", "buttonType": "button-type-97" },
    { "id": "BMXE18", "image": "alleTagesZrücksetzen.png", "targetScreen": "BMXA", "buttonType": "button-type-98" },
    { "id": "BMXE19", "image": "alleSchichtRücksetzen.png", "targetScreen": "BMXB", "buttonType": "button-type-99" },
    { "id": "BMXE20", "image": "typGesZrücksetzen.png", "targetScreen": "BMXC", "buttonType": "button-type-100" },
    { "id": "BMXE21", "image": "typTagesZrücksetzen.png", "targetScreen": "BMXD", "buttonType": "button-type-101" },
    { "id": "BMXE22", "image": "typSchichtRücksetzenBlau.png", "targetScreen": "BM", "buttonType": "button-type-102" }
  ],


	
	
	
	// taktzeiten
	
	
	
	
	
	'BN':[	
	
	
	{ "id": "BN1", "image": "konfigAnw.png", "targetScreen": "BK", "buttonType": "button-type-1" },
{ "id": "BN2", "image": "palStatus.png", "targetScreen": "BL", "buttonType": "button-type-2" },
{ "id": "BN3", "image": "bdeNamenBM.png", "targetScreen": "AK", "buttonType": "button-type-3" },
{ "id": "BN4", "image": "wZahlung.png", "targetScreen": "BM", "buttonType": "button-type-4" },
{ "id": "BN5", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-5" },
{ "id": "BN6", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-6" },
{ "id": "BN7", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-7" },
{ "id": "BN8", "image": "taktzeitenBN.png", "targetScreen": "BN", "buttonType": "button-type-8" },
{ "id": "BN9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
{ "id": "BN10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
{ "id": "BN11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
{ "id": "BN12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
{ "id": "BN13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
{ "id": "BN14", "image": "prozessBK.png", "targetScreen": "AK", "buttonType": "button-type-14" },
{ "id": "BN15", "image": "instandhalt.png", "targetScreen": "AL", "buttonType": "button-type-15" },
{ "id": "BN16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
{ "id": "BN17", "image": "bbbutton.png", "targetScreen": "AK", "buttonType": "button-type-17" },
{ "id": "BN18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" }

	
	],
	
	
	
	
	// instandhaltVersion
	
	
'AL':[	



{ "id": "AL1", "image": "zahler.png", "targetScreen": "BO", "buttonType": "button-type-1" },
{ "id": "AL2", "image": "leer.png", "targetScreen": "BL", "buttonType": "button-type-2" },
{ "id": "AL3", "image": "leer.png", "targetScreen": "AK", "buttonType": "button-type-3" },
{ "id": "AL4", "image": "spracheAL.png", "targetScreen": "AL", "buttonType": "button-type-4" },
{ "id": "AL5", "image": "uhrstellen.png", "targetScreen": "BW", "buttonType": "button-type-5" },
{ "id": "AL6", "image": "reinigung.png", "targetScreen": "BZ", "buttonType": "button-type-6" },
{ "id": "AL7", "image": "VersionAL.png", "targetScreen": "CA", "buttonType": "button-type-7" },
{ "id": "AL8", "image": "leer.png", "targetScreen": "BN", "buttonType": "button-type-8" },
{ "id": "AL9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
{ "id": "AL10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
{ "id": "AL11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
{ "id": "AL12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
{ "id": "AL13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
{ "id": "AL14", "image": "prozess.png", "targetScreen": "AK", "buttonType": "button-type-14" },
{ "id": "AL15", "image": "instandhaltMaschine.png", "targetScreen": "AL", "buttonType": "button-type-15" },
{ "id": "AL16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
{ "id": "AL17", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-17" },
{ "id": "AL18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
 { "id": "AL17", "image": "okGreen.png", "targetScreen": "ALAA", "buttonType": "button-type-103" }

],




// instandhaltVersion


  'ALAA': [
  
  
  
    { "id": "ALAAA1", "image": "zahler.png", "targetScreen": "BO", "buttonType": "button-type-1" },
    { "id": "ALAAA2", "image": "leer.png", "targetScreen": "BL", "buttonType": "button-type-2" },
    { "id": "ALAAA3", "image": "leer.png", "targetScreen": "AK", "buttonType": "button-type-3" },
    { "id": "ALAAA4", "image": "spracheAL.png", "targetScreen": "AL", "buttonType": "button-type-4" },
    { "id": "ALAAA5", "image": "uhrstellen.png", "targetScreen": "BW", "buttonType": "button-type-5" },
    { "id": "ALAAA6", "image": "reinigung.png", "targetScreen": "BZ", "buttonType": "button-type-6" },
    { "id": "ALAAA7", "image": "VersionAL.png", "targetScreen": "CA", "buttonType": "button-type-7" },
    { "id": "ALAAA8", "image": "leer.png", "targetScreen": "BN", "buttonType": "button-type-8" },
    { "id": "ALAAA9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
    { "id": "ALAAA10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
    { "id": "ALAAA11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
    { "id": "ALAAA12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
    { "id": "ALAAA13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
    { "id": "ALAAA14", "image": "prozess.png", "targetScreen": "AK", "buttonType": "button-type-14" },
    { "id": "ALAAA15", "image": "instandhaltMaschine.png", "targetScreen": "AL", "buttonType": "button-type-15" },
    { "id": "ALAAA16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
    { "id": "ALAAA17", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-17" },
    { "id": "ALAAA18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
	{ "id": "ALAAA19", "image": "okBWAA.png", "targetScreen": "AL", "buttonType": "button-type-103" }
	
  ],









// instandhaltMaschine




'BO':[	

{ "id": "BO1", "image": "maschine.png", "targetScreen": "BO", "buttonType": "button-type-1" },
{ "id": "BO2", "image": "antriebe.png", "targetScreen": "BQ", "buttonType": "button-type-2" },
{ "id": "BO3", "image": "atcapc.png", "targetScreen": "BR", "buttonType": "button-type-3" },
{ "id": "BO4", "image": "hydraulik1.png", "targetScreen": "BS", "buttonType": "button-type-4" },
{ "id": "BO5", "image": "hydraulik2.png", "targetScreen": "BT", "buttonType": "button-type-5" },
{ "id": "BO6", "image": "pneumatik1.png", "targetScreen": "BU", "buttonType": "button-type-6" },
{ "id": "BO7", "image": "pneumatik2.png", "targetScreen": "BV", "buttonType": "button-type-7" },
{ "id": "BO8", "image": "leer.png", "targetScreen": "BN", "buttonType": "button-type-8" },
{ "id": "BO9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
{ "id": "BO10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
{ "id": "BO11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
{ "id": "BO12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
{ "id": "BO13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
{ "id": "BO14", "image": "prozess.png", "targetScreen": "B", "buttonType": "button-type-14" },
{ "id": "BO15", "image": "instandhaltMaschine.png", "targetScreen": "AL", "buttonType": "button-type-15" },
{ "id": "BO16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
{ "id": "BO17", "image": "bbbutton.png", "targetScreen": "AL", "buttonType": "button-type-17" },
{ "id": "BO18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
{ "id": "BO19", "image": "details.png", "targetScreen": "BP", "buttonType": "button-type-49" },
{ "id": "BO20", "image": "details.png", "targetScreen": "BPA", "buttonType": "button-type-50" },
{ "id": "BO21", "image": "details.png", "targetScreen": "BPB", "buttonType": "button-type-51" },
{ "id": "BO22", "image": "details.png", "targetScreen": "BPC", "buttonType": "button-type-52" },
{ "id": "BO23", "image": "details.png", "targetScreen": "BPD", "buttonType": "button-type-53" },
{ "id": "BO24", "image": "details.png", "targetScreen": "BPE", "buttonType": "button-type-54" },
{ "id": "BO25", "image": "details.png", "targetScreen": "BPF", "buttonType": "button-type-55" },
{ "id": "BO26", "image": "details.png", "targetScreen": "BPG", "buttonType": "button-type-56" },
{ "id": "BO27", "image": "details.png", "targetScreen": "BPH", "buttonType": "button-type-57" },
{ "id": "BO28", "image": "details.png", "targetScreen": "BPCH", "buttonType": "button-type-58" },
{ "id": "BO29", "image": "details.png", "targetScreen": "BPI", "buttonType": "button-type-59" },
{ "id": "BO30", "image": "details.png", "targetScreen": "BPJ", "buttonType": "button-type-60" },
{ "id": "BO31", "image": "details.png", "targetScreen": "BPK", "buttonType": "button-type-61" },
{ "id": "BO32", "image": "details.png", "targetScreen": "BPL", "buttonType": "button-type-62" }



],




// instandhaltMaschineZahler1




'BP':[	


{ "id": "BP1", "image": "zahlerdetails.png", "targetScreen": "BP", "buttonType": "button-type-1" },
{ "id": "BP2", "image": "antriebe.png", "targetScreen": "BQ", "buttonType": "button-type-2" },
{ "id": "BP3", "image": "atcapc.png", "targetScreen": "BR", "buttonType": "button-type-3" },
{ "id": "BP4", "image": "hydraulik1.png", "targetScreen": "BS", "buttonType": "button-type-4" },
{ "id": "BP5", "image": "hydraulik2.png", "targetScreen": "BT", "buttonType": "button-type-5" },
{ "id": "BP6", "image": "pneumatik1.png", "targetScreen": "BU", "buttonType": "button-type-6" },
{ "id": "BP7", "image": "pneumatik2.png", "targetScreen": "BV", "buttonType": "button-type-7" },
{ "id": "BP8", "image": "leer.png", "targetScreen": "BN", "buttonType": "button-type-8" },
{ "id": "BP9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
{ "id": "BP10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
{ "id": "BP11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
{ "id": "BP12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
{ "id": "BP13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
{ "id": "BP14", "image": "prozess.png", "targetScreen": "BK", "buttonType": "button-type-14" },
{ "id": "BP15", "image": "instandhaltMaschine.png", "targetScreen": "AL", "buttonType": "button-type-15" },
{ "id": "BP16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
{ "id": "BP17", "image": "bbbutton.png", "targetScreen": "AL", "buttonType": "button-type-17" },
{ "id": "BP18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
{ "id": "BP19", "image": "details.png", "targetScreen": "", "buttonType": "button-type-49" },
{ "id": "BP20", "image": "details.png", "targetScreen": "", "buttonType": "button-type-50" },
{ "id": "BO21", "image": "bildSchließen.png", "targetScreen": "BO", "buttonType": "button-type-63" }

],


// instandhaltMaschineZahler2




'BPA':[	


{ "id": "BPA1", "image": "zahlerdetails.png", "targetScreen": "BPA", "buttonType": "button-type-1" },
{ "id": "BPA2", "image": "antriebe.png", "targetScreen": "BQ", "buttonType": "button-type-2" },
{ "id": "BPA3", "image": "atcapc.png", "targetScreen": "BR", "buttonType": "button-type-3" },
{ "id": "BPA4", "image": "hydraulik1.png", "targetScreen": "BS", "buttonType": "button-type-4" },
{ "id": "BPA5", "image": "hydraulik2.png", "targetScreen": "BT", "buttonType": "button-type-5" },
{ "id": "BPA6", "image": "pneumatik1.png", "targetScreen": "BU", "buttonType": "button-type-6" },
{ "id": "BPA7", "image": "pneumatik2.png", "targetScreen": "BV", "buttonType": "button-type-7" },
{ "id": "BPA8", "image": "leer.png", "targetScreen": "BN", "buttonType": "button-type-8" },
{ "id": "BPA9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
{ "id": "BPA10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
{ "id": "BPA11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
{ "id": "BPA12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
{ "id": "BPA13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
{ "id": "BPA14", "image": "prozess.png", "targetScreen": "BK", "buttonType": "button-type-14" },
{ "id": "BPA15", "image": "instandhaltMaschine.png", "targetScreen": "AL", "buttonType": "button-type-15" },
{ "id": "BPA16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
{ "id": "BPA17", "image": "bbbutton.png", "targetScreen": "AL", "buttonType": "button-type-17" },
{ "id": "BPA18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
{ "id": "BPA19", "image": "bildSchließen.png", "targetScreen": "BO", "buttonType": "button-type-63" }





],



// instandhaltMaschineZahler3




'BPB':[	

{ "id": "BPB1", "image": "zahlerdetails.png", "targetScreen": "BPB", "buttonType": "button-type-1" },
{ "id": "BPB2", "image": "antriebe.png", "targetScreen": "BQ", "buttonType": "button-type-2" },
{ "id": "BPB3", "image": "atcapc.png", "targetScreen": "BR", "buttonType": "button-type-3" },
{ "id": "BPB4", "image": "hydraulik1.png", "targetScreen": "BS", "buttonType": "button-type-4" },
{ "id": "BPB5", "image": "hydraulik2.png", "targetScreen": "BT", "buttonType": "button-type-5" },
{ "id": "BPB6", "image": "pneumatik1.png", "targetScreen": "BU", "buttonType": "button-type-6" },
{ "id": "BPB7", "image": "pneumatik2.png", "targetScreen": "BV", "buttonType": "button-type-7" },
{ "id": "BPB8", "image": "leer.png", "targetScreen": "BN", "buttonType": "button-type-8" },
{ "id": "BPB9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
{ "id": "BPB10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
{ "id": "BPB11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
{ "id": "BPB12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
{ "id": "BPB13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
{ "id": "BPB14", "image": "prozess.png", "targetScreen": "BK", "buttonType": "button-type-14" },
{ "id": "BPB15", "image": "instandhaltMaschine.png", "targetScreen": "AL", "buttonType": "button-type-15" },
{ "id": "BPB16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
{ "id": "BPB17", "image": "bbbutton.png", "targetScreen": "AL", "buttonType": "button-type-17" },
{ "id": "BPB18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
{ "id": "BPB19", "image": "bildSchließen.png", "targetScreen": "BO", "buttonType": "button-type-63" }



],







// instandhaltMaschineZahler4


'BPC':[	
{ "id": "BPC1", "image": "zahlerdetails.png", "targetScreen": "BPC", "buttonType": "button-type-1" },
{ "id": "BPC2", "image": "antriebe.png", "targetScreen": "BQ", "buttonType": "button-type-2" },
{ "id": "BPC3", "image": "atcapc.png", "targetScreen": "BR", "buttonType": "button-type-3" },
{ "id": "BPC4", "image": "hydraulik1.png", "targetScreen": "BS", "buttonType": "button-type-4" },
{ "id": "BPC5", "image": "hydraulik2.png", "targetScreen": "BT", "buttonType": "button-type-5" },
{ "id": "BPC6", "image": "pneumatik1.png", "targetScreen": "BU", "buttonType": "button-type-6" },
{ "id": "BPC7", "image": "pneumatik2.png", "targetScreen": "BV", "buttonType": "button-type-7" },
{ "id": "BPC8", "image": "leer.png", "targetScreen": "BN", "buttonType": "button-type-8" },
{ "id": "BPC9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
{ "id": "BPC10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
{ "id": "BPC11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
{ "id": "BPC12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
{ "id": "BPC13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
{ "id": "BPC14", "image": "prozess.png", "targetScreen": "BK", "buttonType": "button-type-14" },
{ "id": "BPC15", "image": "instandhaltMaschine.png", "targetScreen": "AL", "buttonType": "button-type-15" },
{ "id": "BPC16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
{ "id": "BPC17", "image": "bbbutton.png", "targetScreen": "AL", "buttonType": "button-type-17" },
{ "id": "BPC18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
{ "id": "BPC19", "image": "bildSchließen.png", "targetScreen": "BO", "buttonType": "button-type-63" }




],





// instandhaltMaschineZahler5


'BPD':[	

{ "id": "BPD1", "image": "zahlerdetails.png", "targetScreen": "BPD", "buttonType": "button-type-1" },
{ "id": "BPD2", "image": "antriebe.png", "targetScreen": "BQ", "buttonType": "button-type-2" },
{ "id": "BPD3", "image": "atcapc.png", "targetScreen": "BR", "buttonType": "button-type-3" },
{ "id": "BPD4", "image": "hydraulik1.png", "targetScreen": "BS", "buttonType": "button-type-4" },
{ "id": "BPD5", "image": "hydraulik2.png", "targetScreen": "BT", "buttonType": "button-type-5" },
{ "id": "BPD6", "image": "pneumatik1.png", "targetScreen": "BU", "buttonType": "button-type-6" },
{ "id": "BPD7", "image": "pneumatik2.png", "targetScreen": "BV", "buttonType": "button-type-7" },
{ "id": "BPD8", "image": "leer.png", "targetScreen": "BN", "buttonType": "button-type-8" },
{ "id": "BPD9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
{ "id": "BPD10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
{ "id": "BPD11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
{ "id": "BPD12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
{ "id": "BPD13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
{ "id": "BPD14", "image": "prozess.png", "targetScreen": "BK", "buttonType": "button-type-14" },
{ "id": "BPD15", "image": "instandhaltMaschine.png", "targetScreen": "AL", "buttonType": "button-type-15" },
{ "id": "BPD16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
{ "id": "BPD17", "image": "bbbutton.png", "targetScreen": "AL", "buttonType": "button-type-17" },
{ "id": "BPD18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
{ "id": "BPD19", "image": "bildSchließen.png", "targetScreen": "BO", "buttonType": "button-type-63" }



],



// instandhaltMaschineZahler6


'BPE':[	


{ "id": "BPE1", "image": "zahlerdetails.png", "targetScreen": "BPE", "buttonType": "button-type-1" },
{ "id": "BPE2", "image": "antriebe.png", "targetScreen": "BQ", "buttonType": "button-type-2" },
{ "id": "BPE3", "image": "atcapc.png", "targetScreen": "BR", "buttonType": "button-type-3" },
{ "id": "BPE4", "image": "hydraulik1.png", "targetScreen": "BS", "buttonType": "button-type-4" },
{ "id": "BPE5", "image": "hydraulik2.png", "targetScreen": "BT", "buttonType": "button-type-5" },
{ "id": "BPE6", "image": "pneumatik1.png", "targetScreen": "BU", "buttonType": "button-type-6" },
{ "id": "BPE7", "image": "pneumatik2.png", "targetScreen": "BV", "buttonType": "button-type-7" },
{ "id": "BPE8", "image": "leer.png", "targetScreen": "BN", "buttonType": "button-type-8" },
{ "id": "BPE9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
{ "id": "BPE10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
{ "id": "BPE11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
{ "id": "BPE12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
{ "id": "BPE13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
{ "id": "BPE14", "image": "prozess.png", "targetScreen": "BK", "buttonType": "button-type-14" },
{ "id": "BPE15", "image": "instandhaltMaschine.png", "targetScreen": "AL", "buttonType": "button-type-15" },
{ "id": "BPE16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
{ "id": "BPE17", "image": "bbbutton.png", "targetScreen": "AL", "buttonType": "button-type-17" },
{ "id": "BPE18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
{ "id": "BPE19", "image": "bildSchließen.png", "targetScreen": "BO", "buttonType": "button-type-63" }






],









// instandhaltMaschineZahler7


'BPF':[	

{ "id": "BPE1", "image": "zahlerdetails.png", "targetScreen": "BPF", "buttonType": "button-type-1" },
{ "id": "BPE2", "image": "antriebe.png", "targetScreen": "BQ", "buttonType": "button-type-2" },
{ "id": "BPE3", "image": "atcapc.png", "targetScreen": "BR", "buttonType": "button-type-3" },
{ "id": "BPE4", "image": "hydraulik1.png", "targetScreen": "BS", "buttonType": "button-type-4" },
{ "id": "BPE5", "image": "hydraulik2.png", "targetScreen": "BT", "buttonType": "button-type-5" },
{ "id": "BPE6", "image": "pneumatik1.png", "targetScreen": "BU", "buttonType": "button-type-6" },
{ "id": "BPE7", "image": "pneumatik2.png", "targetScreen": "BV", "buttonType": "button-type-7" },
{ "id": "BPE8", "image": "leer.png", "targetScreen": "BN", "buttonType": "button-type-8" },
{ "id": "BPE9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
{ "id": "BPE10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
{ "id": "BPE11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
{ "id": "BPE12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
{ "id": "BPE13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
{ "id": "BPE14", "image": "prozess.png", "targetScreen": "BK", "buttonType": "button-type-14" },
{ "id": "BPE15", "image": "instandhaltMaschine.png", "targetScreen": "AL", "buttonType": "button-type-15" },
{ "id": "BPE16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
{ "id": "BPE17", "image": "bbbutton.png", "targetScreen": "AL", "buttonType": "button-type-17" },
{ "id": "BPE18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
{ "id": "BPE19", "image": "bildSchließen.png", "targetScreen": "BO", "buttonType": "button-type-63" }









],


// instandhaltMaschineZahler8


'BPG':[	


{ "id": "BPG1", "image": "zahlerdetails.png", "targetScreen": "BPG", "buttonType": "button-type-1" },
{ "id": "BPG2", "image": "antriebe.png", "targetScreen": "BQ", "buttonType": "button-type-2" },
{ "id": "BPG3", "image": "atcapc.png", "targetScreen": "BR", "buttonType": "button-type-3" },
{ "id": "BPG4", "image": "hydraulik1.png", "targetScreen": "BS", "buttonType": "button-type-4" },
{ "id": "BPG5", "image": "hydraulik2.png", "targetScreen": "BT", "buttonType": "button-type-5" },
{ "id": "BPG6", "image": "pneumatik1.png", "targetScreen": "BU", "buttonType": "button-type-6" },
{ "id": "BPG7", "image": "pneumatik2.png", "targetScreen": "BV", "buttonType": "button-type-7" },
{ "id": "BPG8", "image": "leer.png", "targetScreen": "BN", "buttonType": "button-type-8" },
{ "id": "BPG9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
{ "id": "BPG10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
{ "id": "BPG11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
{ "id": "BPG12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
{ "id": "BPG13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
{ "id": "BPG14", "image": "prozess.png", "targetScreen": "BK", "buttonType": "button-type-14" },
{ "id": "BPG15", "image": "instandhaltMaschine.png", "targetScreen": "AL", "buttonType": "button-type-15" },
{ "id": "BPG16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
{ "id": "BPG17", "image": "bbbutton.png", "targetScreen": "AL", "buttonType": "button-type-17" },
{ "id": "BPG18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
{ "id": "BPG19", "image": "bildSchließen.png", "targetScreen": "BO", "buttonType": "button-type-63" }







],







// instandhaltMaschineZahler9


'BPH':[	



{ "id": "BPH1", "image": "zahlerdetails.png", "targetScreen": "BPH", "buttonType": "button-type-1" },
{ "id": "BPH2", "image": "antriebe.png", "targetScreen": "BQ", "buttonType": "button-type-2" },
{ "id": "BPH3", "image": "atcapc.png", "targetScreen": "BR", "buttonType": "button-type-3" },
{ "id": "BPH4", "image": "hydraulik1.png", "targetScreen": "BS", "buttonType": "button-type-4" },
{ "id": "BPH5", "image": "hydraulik2.png", "targetScreen": "BT", "buttonType": "button-type-5" },
{ "id": "BPH6", "image": "pneumatik1.png", "targetScreen": "BU", "buttonType": "button-type-6" },
{ "id": "BPH7", "image": "pneumatik2.png", "targetScreen": "BV", "buttonType": "button-type-7" },
{ "id": "BPH8", "image": "leer.png", "targetScreen": "BN", "buttonType": "button-type-8" },
{ "id": "BPH9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
{ "id": "BPH10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
{ "id": "BPH11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
{ "id": "BPH12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
{ "id": "BPH13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
{ "id": "BPH14", "image": "prozess.png", "targetScreen": "BK", "buttonType": "button-type-14" },
{ "id": "BPH15", "image": "instandhaltMaschine.png", "targetScreen": "AL", "buttonType": "button-type-15" },
{ "id": "BPH16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
{ "id": "BPH17", "image": "bbbutton.png", "targetScreen": "AL", "buttonType": "button-type-17" },
{ "id": "BPH18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
{ "id": "BPH19", "image": "bildSchließen.png", "targetScreen": "BO", "buttonType": "button-type-63" }



],



// instandhaltMaschineZahler10


'BPCH':[	




{ "id": "BPH1", "image": "zahlerdetails.png", "targetScreen": "BPCH", "buttonType": "button-type-1" },
{ "id": "BPH2", "image": "antriebe.png", "targetScreen": "BQ", "buttonType": "button-type-2" },
{ "id": "BPH3", "image": "atcapc.png", "targetScreen": "BR", "buttonType": "button-type-3" },
{ "id": "BPH4", "image": "hydraulik1.png", "targetScreen": "BS", "buttonType": "button-type-4" },
{ "id": "BPH5", "image": "hydraulik2.png", "targetScreen": "BT", "buttonType": "button-type-5" },
{ "id": "BPH6", "image": "pneumatik1.png", "targetScreen": "BU", "buttonType": "button-type-6" },
{ "id": "BPH7", "image": "pneumatik2.png", "targetScreen": "BV", "buttonType": "button-type-7" },
{ "id": "BPH8", "image": "leer.png", "targetScreen": "BN", "buttonType": "button-type-8" },
{ "id": "BPH9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
{ "id": "BPH10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
{ "id": "BPH11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
{ "id": "BPH12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
{ "id": "BPH13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
{ "id": "BPH14", "image": "prozess.png", "targetScreen": "BK", "buttonType": "button-type-14" },
{ "id": "BPH15", "image": "instandhaltMaschine.png", "targetScreen": "AL", "buttonType": "button-type-15" },
{ "id": "BPH16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
{ "id": "BPH17", "image": "bbbutton.png", "targetScreen": "AL", "buttonType": "button-type-17" },
{ "id": "BPH18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
{ "id": "BPH19", "image": "bildSchließen.png", "targetScreen": "BO", "buttonType": "button-type-63" }


],



// instandhaltMaschineZahler11


'BPI':[	



{ "id": "BPI1", "image": "zahlerdetails.png", "targetScreen": "BPI", "buttonType": "button-type-1" },
{ "id": "BPI2", "image": "antriebe.png", "targetScreen": "BQ", "buttonType": "button-type-2" },
{ "id": "BPI3", "image": "atcapc.png", "targetScreen": "BR", "buttonType": "button-type-3" },
{ "id": "BPI4", "image": "hydraulik1.png", "targetScreen": "BS", "buttonType": "button-type-4" },
{ "id": "BPI5", "image": "hydraulik2.png", "targetScreen": "BT", "buttonType": "button-type-5" },
{ "id": "BPI6", "image": "pneumatik1.png", "targetScreen": "BU", "buttonType": "button-type-6" },
{ "id": "BPI7", "image": "pneumatik2.png", "targetScreen": "BV", "buttonType": "button-type-7" },
{ "id": "BPI8", "image": "leer.png", "targetScreen": "BN", "buttonType": "button-type-8" },
{ "id": "BPI9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
{ "id": "BPI10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
{ "id": "BPI11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
{ "id": "BPI12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
{ "id": "BPI13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
{ "id": "BPI14", "image": "prozess.png", "targetScreen": "BK", "buttonType": "button-type-14" },
{ "id": "BPI15", "image": "instandhaltMaschine.png", "targetScreen": "AL", "buttonType": "button-type-15" },
{ "id": "BPI16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
{ "id": "BPI17", "image": "bbbutton.png", "targetScreen": "AL", "buttonType": "button-type-17" },
{ "id": "BPI18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
{ "id": "BPI19", "image": "bildSchließen.png", "targetScreen": "BO", "buttonType": "button-type-63" }




],





// instandhaltMaschineZahler12


'BPJ':[	
{ "id": "BPJ1", "image": "zahlerdetails.png", "targetScreen": "BPJ", "buttonType": "button-type-1" },
{ "id": "BPJ2", "image": "antriebe.png", "targetScreen": "BQ", "buttonType": "button-type-2" },
{ "id": "BPJ3", "image": "atcapc.png", "targetScreen": "BR", "buttonType": "button-type-3" },
{ "id": "BPJ4", "image": "hydraulik1.png", "targetScreen": "BS", "buttonType": "button-type-4" },
{ "id": "BPJ5", "image": "hydraulik2.png", "targetScreen": "BT", "buttonType": "button-type-5" },
{ "id": "BPJ6", "image": "pneumatik1.png", "targetScreen": "BU", "buttonType": "button-type-6" },
{ "id": "BPJ7", "image": "pneumatik2.png", "targetScreen": "BV", "buttonType": "button-type-7" },
{ "id": "BPJ8", "image": "leer.png", "targetScreen": "BN", "buttonType": "button-type-8" },
{ "id": "BPJ9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
{ "id": "BPJ10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
{ "id": "BPJ11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
{ "id": "BPJ12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
{ "id": "BPJ13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
{ "id": "BPJ14", "image": "prozess.png", "targetScreen": "BK", "buttonType": "button-type-14" },
{ "id": "BPJ15", "image": "instandhaltMaschine.png", "targetScreen": "AL", "buttonType": "button-type-15" },
{ "id": "BPJ16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
{ "id": "BPJ17", "image": "bbbutton.png", "targetScreen": "AL", "buttonType": "button-type-17" },
{ "id": "BPJ18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
{ "id": "BPJ19", "image": "bildSchließen.png", "targetScreen": "BO", "buttonType": "button-type-63" }




],






// instandhaltMaschineZahler13


'BPK':[	

{ "id": "BPK1", "image": "zahlerdetails.png", "targetScreen": "BPK", "buttonType": "button-type-1" },
{ "id": "BPK2", "image": "antriebe.png", "targetScreen": "BQ", "buttonType": "button-type-2" },
{ "id": "BPK3", "image": "atcapc.png", "targetScreen": "BR", "buttonType": "button-type-3" },
{ "id": "BPK4", "image": "hydraulik1.png", "targetScreen": "BS", "buttonType": "button-type-4" },
{ "id": "BPK5", "image": "hydraulik2.png", "targetScreen": "BT", "buttonType": "button-type-5" },
{ "id": "BPK6", "image": "pneumatik1.png", "targetScreen": "BU", "buttonType": "button-type-6" },
{ "id": "BPK7", "image": "pneumatik2.png", "targetScreen": "BV", "buttonType": "button-type-7" },
{ "id": "BPK8", "image": "leer.png", "targetScreen": "BN", "buttonType": "button-type-8" },
{ "id": "BPK9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
{ "id": "BPK10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
{ "id": "BPK11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
{ "id": "BPK12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
{ "id": "BPK13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
{ "id": "BPK14", "image": "prozess.png", "targetScreen": "BK", "buttonType": "button-type-14" },
{ "id": "BPK15", "image": "instandhaltMaschine.png", "targetScreen": "AL", "buttonType": "button-type-15" },
{ "id": "BPK16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
{ "id": "BPK17", "image": "bbbutton.png", "targetScreen": "AL", "buttonType": "button-type-17" },
{ "id": "BPK18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
{ "id": "BPK19", "image": "bildSchließen.png", "targetScreen": "BO", "buttonType": "button-type-63" }



],




// instandhaltMaschineZahler14


'BPL':[	



{ "id": "BPL1", "image": "zahlerdetails.png", "targetScreen": "BPL", "buttonType": "button-type-1" },
{ "id": "BPL2", "image": "antriebe.png", "targetScreen": "BQ", "buttonType": "button-type-2" },
{ "id": "BPL3", "image": "atcapc.png", "targetScreen": "BR", "buttonType": "button-type-3" },
{ "id": "BPL4", "image": "hydraulik1.png", "targetScreen": "BS", "buttonType": "button-type-4" },
{ "id": "BPL5", "image": "hydraulik2.png", "targetScreen": "BT", "buttonType": "button-type-5" },
{ "id": "BPL6", "image": "pneumatik1.png", "targetScreen": "BU", "buttonType": "button-type-6" },
{ "id": "BPL7", "image": "pneumatik2.png", "targetScreen": "BV", "buttonType": "button-type-7" },
{ "id": "BPL8", "image": "leer.png", "targetScreen": "BN", "buttonType": "button-type-8" },
{ "id": "BPL9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
{ "id": "BPL10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
{ "id": "BPL11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
{ "id": "BPL12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
{ "id": "BPL13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
{ "id": "BPL14", "image": "prozess.png", "targetScreen": "BK", "buttonType": "button-type-14" },
{ "id": "BPL15", "image": "instandhaltMaschine.png", "targetScreen": "AL", "buttonType": "button-type-15" },
{ "id": "BPL16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
{ "id": "BPL17", "image": "bbbutton.png", "targetScreen": "AL", "buttonType": "button-type-17" },
{ "id": "BPL18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
{ "id": "BPL19", "image": "bildSchließen.png", "targetScreen": "BO", "buttonType": "button-type-63" }


],





// instandhaltAntriebe



'BQ':[	



{ "id": "BQ1", "image": "maschineBQ.png", "targetScreen": "BO", "buttonType": "button-type-1" },
{ "id": "BQ2", "image": "antriebeBQ.png", "targetScreen": "BQ", "buttonType": "button-type-2" },
{ "id": "BQ3", "image": "atcapc.png", "targetScreen": "BR", "buttonType": "button-type-3" },
{ "id": "BQ4", "image": "hydraulik1.png", "targetScreen": "BS", "buttonType": "button-type-4" },
{ "id": "BQ5", "image": "hydraulik2.png", "targetScreen": "BT", "buttonType": "button-type-5" },
{ "id": "BQ6", "image": "pneumatik1.png", "targetScreen": "BU", "buttonType": "button-type-6" },
{ "id": "BQ7", "image": "pneumatik2.png", "targetScreen": "BV", "buttonType": "button-type-7" },
{ "id": "BQ8", "image": "leer.png", "targetScreen": "BN", "buttonType": "button-type-8" },
{ "id": "BQ9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
{ "id": "BQ10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
{ "id": "BQ11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
{ "id": "BQ12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
{ "id": "BQ13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
{ "id": "BQ14", "image": "prozess.png", "targetScreen": "BK", "buttonType": "button-type-14" },
{ "id": "BQ15", "image": "instandhaltMaschine.png", "targetScreen": "AL", "buttonType": "button-type-15" },
{ "id": "BQ16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
{ "id": "BQ17", "image": "bbbutton.png", "targetScreen": "AL", "buttonType": "button-type-17" },
{ "id": "BQ18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
{ "id": "BQ19", "image": "details.png", "targetScreen": "BQA", "buttonType": "button-type-49" },
{ "id": "BQ20", "image": "details.png", "targetScreen": "BQB", "buttonType": "button-type-50" },
{ "id": "BQ21", "image": "details.png", "targetScreen": "BQC", "buttonType": "button-type-51" },
{ "id": "BQ22", "image": "details.png", "targetScreen": "BQD", "buttonType": "button-type-52" },
{ "id": "BQ23", "image": "details.png", "targetScreen": "BQE", "buttonType": "button-type-53" },
{ "id": "BQ24", "image": "details.png", "targetScreen": "BQF", "buttonType": "button-type-54" },
{ "id": "BQ25", "image": "details.png", "targetScreen": "BQG", "buttonType": "button-type-55" },
{ "id": "BQ26", "image": "details.png", "targetScreen": "BQH", "buttonType": "button-type-56" },
{ "id": "BQ27", "image": "details.png", "targetScreen": "BQCH", "buttonType": "button-type-57" },
{ "id": "BQ28", "image": "details.png", "targetScreen": "BQI", "buttonType": "button-type-58" },
{ "id": "BQ29", "image": "details.png", "targetScreen": "BQJ", "buttonType": "button-type-59" },
{ "id": "BQ30", "image": "details.png", "targetScreen": "BQK", "buttonType": "button-type-60" },
{ "id": "BQ31", "image": "details.png", "targetScreen": "BQL", "buttonType": "button-type-61" },
{ "id": "BQ32", "image": "details.png", "targetScreen": "BQM", "buttonType": "button-type-62" }



],




// instandhaltAntriebeZahler1



'BQA':[	




{ "id": "BQA1", "image": "maschineBQ.png", "targetScreen": "BQA", "buttonType": "button-type-1" },
{ "id": "BQA2", "image": "zahlerdetails.png", "targetScreen": "BQA", "buttonType": "button-type-2" },
{ "id": "BQA3", "image": "atcapc.png", "targetScreen": "BR", "buttonType": "button-type-3" },
{ "id": "BQA4", "image": "hydraulik1.png", "targetScreen": "BS", "buttonType": "button-type-4" },
{ "id": "BQA5", "image": "hydraulik2.png", "targetScreen": "BT", "buttonType": "button-type-5" },
{ "id": "BQA6", "image": "pneumatik1.png", "targetScreen": "BU", "buttonType": "button-type-6" },
{ "id": "BQA7", "image": "pneumatik2.png", "targetScreen": "BV", "buttonType": "button-type-7" },
{ "id": "BQA8", "image": "leer.png", "targetScreen": "BN", "buttonType": "button-type-8" },
{ "id": "BQA9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
{ "id": "BQA10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
{ "id": "BQA11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
{ "id": "BQA12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
{ "id": "BQA13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
{ "id": "BQA14", "image": "prozess.png", "targetScreen": "BK", "buttonType": "button-type-14" },
{ "id": "BQA15", "image": "instandhaltMaschine.png", "targetScreen": "AL", "buttonType": "button-type-15" },
{ "id": "BQA16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
{ "id": "BQA17", "image": "bbbutton.png", "targetScreen": "AL", "buttonType": "button-type-17" },
{ "id": "BQA18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
{ "id": "BQA21", "image": "bildSchließen.png", "targetScreen": "BQ", "buttonType": "button-type-63" }



],



// instandhaltAntriebeZahler2



'BQB':[	
{ "id": "BQB1", "image": "maschineBQ.png", "targetScreen": "BQP", "buttonType": "button-type-1" },
{ "id": "BQB2", "image": "zahlerdetails.png", "targetScreen": "BQB", "buttonType": "button-type-2" },
{ "id": "BQB3", "image": "atcapc.png", "targetScreen": "BR", "buttonType": "button-type-3" },
{ "id": "BQB4", "image": "hydraulik1.png", "targetScreen": "BS", "buttonType": "button-type-4" },
{ "id": "BQB5", "image": "hydraulik2.png", "targetScreen": "BT", "buttonType": "button-type-5" },
{ "id": "BQB6", "image": "pneumatik1.png", "targetScreen": "BU", "buttonType": "button-type-6" },
{ "id": "BQB7", "image": "pneumatik2.png", "targetScreen": "BV", "buttonType": "button-type-7" },
{ "id": "BQB8", "image": "leer.png", "targetScreen": "BN", "buttonType": "button-type-8" },
{ "id": "BQB9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
{ "id": "BQB10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
{ "id": "BQB11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
{ "id": "BQB12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
{ "id": "BQB13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
{ "id": "BQB14", "image": "prozess.png", "targetScreen": "BK", "buttonType": "button-type-14" },
{ "id": "BQB15", "image": "instandhaltMaschine.png", "targetScreen": "AL", "buttonType": "button-type-15" },
{ "id": "BQB16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
{ "id": "BQB17", "image": "bbbutton.png", "targetScreen": "AL", "buttonType": "button-type-17" },
{ "id": "BQB18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
{ "id": "BQB21", "image": "bildSchließen.png", "targetScreen": "BQ", "buttonType": "button-type-63" }




],




// instandhaltAntriebeZahler3



'BQC':[	

{ "id": "BQC1", "image": "maschineBQ.png", "targetScreen": "BQC", "buttonType": "button-type-1" },
{ "id": "BQC2", "image": "zahlerdetails.png", "targetScreen": "BQC", "buttonType": "button-type-2" },
{ "id": "BQC3", "image": "atcapc.png", "targetScreen": "BR", "buttonType": "button-type-3" },
{ "id": "BQC4", "image": "hydraulik1.png", "targetScreen": "BS", "buttonType": "button-type-4" },
{ "id": "BQC5", "image": "hydraulik2.png", "targetScreen": "BT", "buttonType": "button-type-5" },
{ "id": "BQC6", "image": "pneumatik1.png", "targetScreen": "BU", "buttonType": "button-type-6" },
{ "id": "BQC7", "image": "pneumatik2.png", "targetScreen": "BV", "buttonType": "button-type-7" },
{ "id": "BQC8", "image": "leer.png", "targetScreen": "BN", "buttonType": "button-type-8" },
{ "id": "BQC9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
{ "id": "BQC10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
{ "id": "BQC11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
{ "id": "BQC12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
{ "id": "BQC13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
{ "id": "BQC14", "image": "prozess.png", "targetScreen": "BK", "buttonType": "button-type-14" },
{ "id": "BQC15", "image": "instandhaltMaschine.png", "targetScreen": "AL", "buttonType": "button-type-15" },
{ "id": "BQC16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
{ "id": "BQC17", "image": "bbbutton.png", "targetScreen": "AL", "buttonType": "button-type-17" },
{ "id": "BQC18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
{ "id": "BQC21", "image": "bildSchließen.png", "targetScreen": "BQ", "buttonType": "button-type-63" }






],



// instandhaltAntriebeZahler4



'BQD':[	

{ "id": "BQD1", "image": "maschineBQ.png", "targetScreen": "BQD", "buttonType": "button-type-1" },
{ "id": "BQD2", "image": "zahlerdetails.png", "targetScreen": "BQD", "buttonType": "button-type-2" },
{ "id": "BQD3", "image": "atcapc.png", "targetScreen": "BR", "buttonType": "button-type-3" },
{ "id": "BQD4", "image": "hydraulik1.png", "targetScreen": "BS", "buttonType": "button-type-4" },
{ "id": "BQD5", "image": "hydraulik2.png", "targetScreen": "BT", "buttonType": "button-type-5" },
{ "id": "BQD6", "image": "pneumatik1.png", "targetScreen": "BU", "buttonType": "button-type-6" },
{ "id": "BQD7", "image": "pneumatik2.png", "targetScreen": "BV", "buttonType": "button-type-7" },
{ "id": "BQD8", "image": "leer.png", "targetScreen": "BN", "buttonType": "button-type-8" },
{ "id": "BQD9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
{ "id": "BQD10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
{ "id": "BQD11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
{ "id": "BQD12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
{ "id": "BQD13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
{ "id": "BQD14", "image": "prozess.png", "targetScreen": "BK", "buttonType": "button-type-14" },
{ "id": "BQD15", "image": "instandhaltMaschine.png", "targetScreen": "AL", "buttonType": "button-type-15" },
{ "id": "BQD16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
{ "id": "BQD17", "image": "bbbutton.png", "targetScreen": "AL", "buttonType": "button-type-17" },
{ "id": "BQD18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
{ "id": "BQD21", "image": "bildSchließen.png", "targetScreen": "BQ", "buttonType": "button-type-63" }



],





// instandhaltAntriebeZahler5



'BQE':[	





{ "id": "BQE1", "image": "maschineBQ.png", "targetScreen": "BP", "buttonType": "button-type-1" },
{ "id": "BQE2", "image": "zahlerdetails.png", "targetScreen": "BQE", "buttonType": "button-type-2" },
{ "id": "BQE3", "image": "atcapc.png", "targetScreen": "BR", "buttonType": "button-type-3" },
{ "id": "BQE4", "image": "hydraulik1.png", "targetScreen": "BS", "buttonType": "button-type-4" },
{ "id": "BQE5", "image": "hydraulik2.png", "targetScreen": "BT", "buttonType": "button-type-5" },
{ "id": "BQE6", "image": "pneumatik1.png", "targetScreen": "BU", "buttonType": "button-type-6" },
{ "id": "BQE7", "image": "pneumatik2.png", "targetScreen": "BV", "buttonType": "button-type-7" },
{ "id": "BQE8", "image": "leer.png", "targetScreen": "BN", "buttonType": "button-type-8" },
{ "id": "BQE9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
{ "id": "BQE10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
{ "id": "BQE11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
{ "id": "BQE12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
{ "id": "BQE13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
{ "id": "BQE14", "image": "prozess.png", "targetScreen": "BK", "buttonType": "button-type-14" },
{ "id": "BQE15", "image": "instandhaltMaschine.png", "targetScreen": "AL", "buttonType": "button-type-15" },
{ "id": "BQE16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
{ "id": "BQE17", "image": "bbbutton.png", "targetScreen": "AL", "buttonType": "button-type-17" },
{ "id": "BQE18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
{ "id": "BQE21", "image": "bildSchließen.png", "targetScreen": "BQ", "buttonType": "button-type-63" }





],







// instandhaltAntriebeZahler6



'BQF':[	


    { "id": "BQF1", "image": "maschineBQ.png", "targetScreen": "BP", "buttonType": "button-type-1" },
    { "id": "BQF2", "image": "zahlerdetails.png", "targetScreen": "BQF", "buttonType": "button-type-2" },
    { "id": "BQF3", "image": "atcapc.png", "targetScreen": "BR", "buttonType": "button-type-3" },
    { "id": "BQF4", "image": "hydraulik1.png", "targetScreen": "BS", "buttonType": "button-type-4" },
    { "id": "BQF5", "image": "hydraulik2.png", "targetScreen": "BT", "buttonType": "button-type-5" },
    { "id": "BQF6", "image": "pneumatik1.png", "targetScreen": "BU", "buttonType": "button-type-6" },
    { "id": "BQF7", "image": "pneumatik2.png", "targetScreen": "BV", "buttonType": "button-type-7" },
    { "id": "BQF8", "image": "leer.png", "targetScreen": "BN", "buttonType": "button-type-8" },
    { "id": "BQF9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
    { "id": "BQF10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
    { "id": "BQF11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
    { "id": "BQF12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
    { "id": "BQF13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
    { "id": "BQF14", "image": "prozess.png", "targetScreen": "BK", "buttonType": "button-type-14" },
    { "id": "BQF15", "image": "instandhaltMaschine.png", "targetScreen": "AL", "buttonType": "button-type-15" },
    { "id": "BQF16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
    { "id": "BQF17", "image": "bbbutton.png", "targetScreen": "AL", "buttonType": "button-type-17" },
    { "id": "BQF18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
    { "id": "BQF19", "image": "bildSchließen.png", "targetScreen": "BQ", "buttonType": "button-type-63" }



],





// instandhaltAntriebeZahler7



'BQG':[	



    { "id": "BQG1", "image": "maschineBQ.png", "targetScreen": "BP", "buttonType": "button-type-1" },
    { "id": "BQG2", "image": "zahlerdetails.png", "targetScreen": "BQG", "buttonType": "button-type-2" },
    { "id": "BQG3", "image": "atcapc.png", "targetScreen": "BR", "buttonType": "button-type-3" },
    { "id": "BQG4", "image": "hydraulik1.png", "targetScreen": "BS", "buttonType": "button-type-4" },
    { "id": "BQG5", "image": "hydraulik2.png", "targetScreen": "BT", "buttonType": "button-type-5" },
    { "id": "BQG6", "image": "pneumatik1.png", "targetScreen": "BU", "buttonType": "button-type-6" },
    { "id": "BQG7", "image": "pneumatik2.png", "targetScreen": "BV", "buttonType": "button-type-7" },
    { "id": "BQG8", "image": "leer.png", "targetScreen": "BN", "buttonType": "button-type-8" },
    { "id": "BQG9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
    { "id": "BQG10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
    { "id": "BQG11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
    { "id": "BQG12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
    { "id": "BQG13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
    { "id": "BQG14", "image": "prozess.png", "targetScreen": "BK", "buttonType": "button-type-14" },
    { "id": "BQG15", "image": "instandhaltMaschine.png", "targetScreen": "AL", "buttonType": "button-type-15" },
    { "id": "BQG16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
    { "id": "BQG17", "image": "bbbutton.png", "targetScreen": "AL", "buttonType": "button-type-17" },
    { "id": "BQG18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
    { "id": "BQG19", "image": "bildSchließen.png", "targetScreen": "BQ", "buttonType": "button-type-63" }




],



// instandhaltAntriebeZahler8



'BQH':[	


    { "id": "BQH1", "image": "maschineBQ.png", "targetScreen": "BP", "buttonType": "button-type-1" },
    { "id": "BQH2", "image": "zahlerdetails.png", "targetScreen": "BQH", "buttonType": "button-type-2" },
    { "id": "BQH3", "image": "atcapc.png", "targetScreen": "BR", "buttonType": "button-type-3" },
    { "id": "BQH4", "image": "hydraulik1.png", "targetScreen": "BS", "buttonType": "button-type-4" },
    { "id": "BQH5", "image": "hydraulik2.png", "targetScreen": "BT", "buttonType": "button-type-5" },
    { "id": "BQH6", "image": "pneumatik1.png", "targetScreen": "BU", "buttonType": "button-type-6" },
    { "id": "BQH7", "image": "pneumatik2.png", "targetScreen": "BV", "buttonType": "button-type-7" },
    { "id": "BQH8", "image": "leer.png", "targetScreen": "BN", "buttonType": "button-type-8" },
    { "id": "BQH9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
    { "id": "BQH10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
    { "id": "BQH11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
    { "id": "BQH12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
    { "id": "BQH13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
    { "id": "BQH14", "image": "prozess.png", "targetScreen": "BK", "buttonType": "button-type-14" },
    { "id": "BQH15", "image": "instandhaltMaschine.png", "targetScreen": "AL", "buttonType": "button-type-15" },
    { "id": "BQH16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
    { "id": "BQH17", "image": "bbbutton.png", "targetScreen": "AL", "buttonType": "button-type-17" },
    { "id": "BQH18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
    { "id": "BQH19", "image": "bildSchließen.png", "targetScreen": "BQ", "buttonType": "button-type-63" }




],




// instandhaltAntriebeZahler9



'BQCH':[	


    { "id": "BQCH1", "image": "maschineBQ.png", "targetScreen": "BP", "buttonType": "button-type-1" },
    { "id": "BQCH2", "image": "zahlerdetails.png", "targetScreen": "BQCH", "buttonType": "button-type-2" },
    { "id": "BQCH3", "image": "atcapc.png", "targetScreen": "BR", "buttonType": "button-type-3" },
    { "id": "BQCH4", "image": "hydraulik1.png", "targetScreen": "BS", "buttonType": "button-type-4" },
    { "id": "BQCH5", "image": "hydraulik2.png", "targetScreen": "BT", "buttonType": "button-type-5" },
    { "id": "BQCH6", "image": "pneumatik1.png", "targetScreen": "BU", "buttonType": "button-type-6" },
    { "id": "BQCH7", "image": "pneumatik2.png", "targetScreen": "BV", "buttonType": "button-type-7" },
    { "id": "BQCH8", "image": "leer.png", "targetScreen": "BN", "buttonType": "button-type-8" },
    { "id": "BQCH9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
    { "id": "BQCH10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
    { "id": "BQCH11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
    { "id": "BQCH12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
    { "id": "BQCH13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
    { "id": "BQCH14", "image": "prozess.png", "targetScreen": "BK", "buttonType": "button-type-14" },
    { "id": "BQCH15", "image": "instandhaltMaschine.png", "targetScreen": "AL", "buttonType": "button-type-15" },
    { "id": "BQCH16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
    { "id": "BQCH17", "image": "bbbutton.png", "targetScreen": "AL", "buttonType": "button-type-17" },
    { "id": "BQCH18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
    { "id": "BQCH19", "image": "bildSchließen.png", "targetScreen": "BQ", "buttonType": "button-type-63" }




],






// instandhaltAntriebeZahler10



'BQI':[	


    { "id": "BQI1", "image": "maschineBQ.png", "targetScreen": "BP", "buttonType": "button-type-1" },
    { "id": "BQI2", "image": "zahlerdetails.png", "targetScreen": "BQI", "buttonType": "button-type-2" },
    { "id": "BQI3", "image": "atcapc.png", "targetScreen": "BR", "buttonType": "button-type-3" },
    { "id": "BQI4", "image": "hydraulik1.png", "targetScreen": "BS", "buttonType": "button-type-4" },
    { "id": "BQI5", "image": "hydraulik2.png", "targetScreen": "BT", "buttonType": "button-type-5" },
    { "id": "BQI6", "image": "pneumatik1.png", "targetScreen": "BU", "buttonType": "button-type-6" },
    { "id": "BQI7", "image": "pneumatik2.png", "targetScreen": "BV", "buttonType": "button-type-7" },
    { "id": "BQI8", "image": "leer.png", "targetScreen": "BN", "buttonType": "button-type-8" },
    { "id": "BQI9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
    { "id": "BQI10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
    { "id": "BQI11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
    { "id": "BQI12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
    { "id": "BQI13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
    { "id": "BQI14", "image": "prozess.png", "targetScreen": "BK", "buttonType": "button-type-14" },
    { "id": "BQI15", "image": "instandhaltMaschine.png", "targetScreen": "AL", "buttonType": "button-type-15" },
    { "id": "BQI16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
    { "id": "BQI17", "image": "bbbutton.png", "targetScreen": "AL", "buttonType": "button-type-17" },
    { "id": "BQI18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
    { "id": "BQI19", "image": "bildSchließen.png", "targetScreen": "BQ", "buttonType": "button-type-63" }




],




// instandhaltAntriebeZahler11


'BQJ':[	


    { "id": "BQJ1", "image": "maschineBQ.png", "targetScreen": "BP", "buttonType": "button-type-1" },
    { "id": "BQJ2", "image": "zahlerdetails.png", "targetScreen": "BQJ", "buttonType": "button-type-2" },
    { "id": "BQJ3", "image": "atcapc.png", "targetScreen": "BR", "buttonType": "button-type-3" },
    { "id": "BQJ4", "image": "hydraulik1.png", "targetScreen": "BS", "buttonType": "button-type-4" },
    { "id": "BQJ5", "image": "hydraulik2.png", "targetScreen": "BT", "buttonType": "button-type-5" },
    { "id": "BQJ6", "image": "pneumatik1.png", "targetScreen": "BU", "buttonType": "button-type-6" },
    { "id": "BQJ7", "image": "pneumatik2.png", "targetScreen": "BV", "buttonType": "button-type-7" },
    { "id": "BQJ8", "image": "leer.png", "targetScreen": "BN", "buttonType": "button-type-8" },
    { "id": "BQJ9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
    { "id": "BQJ10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
    { "id": "BQJ11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
    { "id": "BQJ12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
    { "id": "BQJ13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
    { "id": "BQJ14", "image": "prozess.png", "targetScreen": "BK", "buttonType": "button-type-14" },
    { "id": "BQJ15", "image": "instandhaltMaschine.png", "targetScreen": "AL", "buttonType": "button-type-15" },
    { "id": "BQJ16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
    { "id": "BQJ17", "image": "bbbutton.png", "targetScreen": "AL", "buttonType": "button-type-17" },
    { "id": "BQJ18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
    { "id": "BQJ19", "image": "bildSchließen.png", "targetScreen": "BQ", "buttonType": "button-type-63" }




],







// instandhaltAntriebeZahler12


'BQK':[	


    { "id": "BQK1", "image": "maschineBQ.png", "targetScreen": "BP", "buttonType": "button-type-1" },
    { "id": "BQK2", "image": "zahlerdetails.png", "targetScreen": "BQK", "buttonType": "button-type-2" },
    { "id": "BQK3", "image": "atcapc.png", "targetScreen": "BR", "buttonType": "button-type-3" },
    { "id": "BQK4", "image": "hydraulik1.png", "targetScreen": "BS", "buttonType": "button-type-4" },
    { "id": "BQK5", "image": "hydraulik2.png", "targetScreen": "BT", "buttonType": "button-type-5" },
    { "id": "BQK6", "image": "pneumatik1.png", "targetScreen": "BU", "buttonType": "button-type-6" },
    { "id": "BQK7", "image": "pneumatik2.png", "targetScreen": "BV", "buttonType": "button-type-7" },
    { "id": "BQK8", "image": "leer.png", "targetScreen": "BN", "buttonType": "button-type-8" },
    { "id": "BQK9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
    { "id": "BQK10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
    { "id": "BQK11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
    { "id": "BQK12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
    { "id": "BQK13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
    { "id": "BQK14", "image": "prozess.png", "targetScreen": "BK", "buttonType": "button-type-14" },
    { "id": "BQK15", "image": "instandhaltMaschine.png", "targetScreen": "AL", "buttonType": "button-type-15" },
    { "id": "BQK16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
    { "id": "BQK17", "image": "bbbutton.png", "targetScreen": "AL", "buttonType": "button-type-17" },
    { "id": "BQK18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
    { "id": "BQK19", "image": "bildSchließen.png", "targetScreen": "BQ", "buttonType": "button-type-63" }




],







// instandhaltAntriebeZahler13


'BQL':[	


    { "id": "BQL1", "image": "maschineBQ.png", "targetScreen": "BP", "buttonType": "button-type-1" },
    { "id": "BQL2", "image": "zahlerdetails.png", "targetScreen": "BQL", "buttonType": "button-type-2" },
    { "id": "BQL3", "image": "atcapc.png", "targetScreen": "BR", "buttonType": "button-type-3" },
    { "id": "BQL4", "image": "hydraulik1.png", "targetScreen": "BS", "buttonType": "button-type-4" },
    { "id": "BQL5", "image": "hydraulik2.png", "targetScreen": "BT", "buttonType": "button-type-5" },
    { "id": "BQL6", "image": "pneumatik1.png", "targetScreen": "BU", "buttonType": "button-type-6" },
    { "id": "BQL7", "image": "pneumatik2.png", "targetScreen": "BV", "buttonType": "button-type-7" },
    { "id": "BQL8", "image": "leer.png", "targetScreen": "BN", "buttonType": "button-type-8" },
    { "id": "BQL9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
    { "id": "BQL10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
    { "id": "BQL11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
    { "id": "BQL12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
    { "id": "BQL13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
    { "id": "BQL14", "image": "prozess.png", "targetScreen": "BK", "buttonType": "button-type-14" },
    { "id": "BQL15", "image": "instandhaltMaschine.png", "targetScreen": "AL", "buttonType": "button-type-15" },
    { "id": "BQL16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
    { "id": "BQL17", "image": "bbbutton.png", "targetScreen": "AL", "buttonType": "button-type-17" },
    { "id": "BQL18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
    { "id": "BQL19", "image": "bildSchließen.png", "targetScreen": "BQ", "buttonType": "button-type-63" }




],




// instandhaltAntriebeZahler14


'BQM':[	



  { "id": "BQM1", "image": "maschineBQ.png", "targetScreen": "BO", "buttonType": "button-type-1" },
    { "id": "BQM2", "image": "zahlerdetails.png", "targetScreen": "BQM", "buttonType": "button-type-2" },
    { "id": "BQM3", "image": "atcapc.png", "targetScreen": "BR", "buttonType": "button-type-3" },
    { "id": "BQM4", "image": "hydraulik1.png", "targetScreen": "BS", "buttonType": "button-type-4" },
    { "id": "BQM5", "image": "hydraulik2.png", "targetScreen": "BT", "buttonType": "button-type-5" },
    { "id": "BQM6", "image": "pneumatik1.png", "targetScreen": "BU", "buttonType": "button-type-6" },
    { "id": "BQM7", "image": "pneumatik2.png", "targetScreen": "BV", "buttonType": "button-type-7" },
    { "id": "BQM8", "image": "leer.png", "targetScreen": "BN", "buttonType": "button-type-8" },
    { "id": "BQM9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
    { "id": "BQM10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
    { "id": "BQM11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
    { "id": "BQM12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
    { "id": "BQM13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
    { "id": "BQM14", "image": "prozess.png", "targetScreen": "BK", "buttonType": "button-type-14" },
    { "id": "BQM15", "image": "instandhaltMaschine.png", "targetScreen": "AL", "buttonType": "button-type-15" },
    { "id": "BQM16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
    { "id": "BQM17", "image": "bbbutton.png", "targetScreen": "AL", "buttonType": "button-type-17" },
    { "id": "BQM18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
    { "id": "BQM19", "image": "bildSchließen.png", "targetScreen": "BQ", "buttonType": "button-type-63" }





],






// instandhaltAtcApc



'BR':[	



{ "id": "BR1", "image": "maschineBQ.png", "targetScreen": "BO", "buttonType": "button-type-1" },
{ "id": "BR2", "image": "antriebe.png", "targetScreen": "BQ", "buttonType": "button-type-2" },
{ "id": "BR3", "image": "atcapcBR.png", "targetScreen": "BR", "buttonType": "button-type-3" },
{ "id": "BR4", "image": "hydraulik1.png", "targetScreen": "BS", "buttonType": "button-type-4" },
{ "id": "BR5", "image": "hydraulik2.png", "targetScreen": "BT", "buttonType": "button-type-5" },
{ "id": "BR6", "image": "pneumatik1.png", "targetScreen": "BU", "buttonType": "button-type-6" },
{ "id": "BR7", "image": "pneumatik2.png", "targetScreen": "BV", "buttonType": "button-type-7" },
{ "id": "BR8", "image": "leer.png", "targetScreen": "BN", "buttonType": "button-type-8" },
{ "id": "BR9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
{ "id": "BR10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
{ "id": "BR11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
{ "id": "BR12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
{ "id": "BR13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
{ "id": "BR14", "image": "prozess.png", "targetScreen": "BK", "buttonType": "button-type-14" },
{ "id": "BR15", "image": "instandhaltMaschine.png", "targetScreen": "AL", "buttonType": "button-type-15" },
{ "id": "BR16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
{ "id": "BR17", "image": "bbbutton.png", "targetScreen": "AL", "buttonType": "button-type-17" },
{ "id": "BR18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
{ "id": "BR19", "image": "details.png", "targetScreen": "BRA", "buttonType": "button-type-49" },
{ "id": "BR20", "image": "details.png", "targetScreen": "BRB", "buttonType": "button-type-50" },
{ "id": "BR21", "image": "details.png", "targetScreen": "BRC", "buttonType": "button-type-51" },
{ "id": "BR22", "image": "details.png", "targetScreen": "BRD", "buttonType": "button-type-52" },
{ "id": "BR23", "image": "details.png", "targetScreen": "BRE", "buttonType": "button-type-53" },
{ "id": "BR24", "image": "details.png", "targetScreen": "BRF", "buttonType": "button-type-54" },
{ "id": "BR25", "image": "details.png", "targetScreen": "BRG", "buttonType": "button-type-55" },
{ "id": "BR26", "image": "details.png", "targetScreen": "BRH", "buttonType": "button-type-56" },
{ "id": "BR27", "image": "details.png", "targetScreen": "BRCH", "buttonType": "button-type-57" },
{ "id": "BR28", "image": "details.png", "targetScreen": "BRI", "buttonType": "button-type-58" },
{ "id": "BR29", "image": "details.png", "targetScreen": "BRJ", "buttonType": "button-type-59" },
{ "id": "BR30", "image": "details.png", "targetScreen": "BRK", "buttonType": "button-type-60" },
{ "id": "BR31", "image": "details.png", "targetScreen": "BRL", "buttonType": "button-type-61" },
{ "id": "BR32", "image": "details.png", "targetScreen": "BRM", "buttonType": "button-type-62" }





],

//instandhaltAtcApc1

'BRA':[	


    { "id": "BRA1", "image": "maschineBQ.png", "targetScreen": "BR", "buttonType": "button-type-1" },
    { "id": "BRA2", "image": "antriebe.png", "targetScreen": "BQ", "buttonType": "button-type-2" },
    { "id": "BRA3", "image": "zahlerdetails.png", "targetScreen": "BRA", "buttonType": "button-type-3" },
    { "id": "BRA4", "image": "hydraulik1.png", "targetScreen": "BS", "buttonType": "button-type-4" },
    { "id": "BRA5", "image": "hydraulik2.png", "targetScreen": "BT", "buttonType": "button-type-5" },
    { "id": "BRA6", "image": "pneumatik1.png", "targetScreen": "BU", "buttonType": "button-type-6" },
    { "id": "BRA7", "image": "pneumatik2.png", "targetScreen": "BV", "buttonType": "button-type-7" },
    { "id": "BRA8", "image": "leer.png", "targetScreen": "BN", "buttonType": "button-type-8" },
    { "id": "BRA9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
    { "id": "BRA10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
    { "id": "BRA11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
    { "id": "BRA12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
    { "id": "BRA13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
    { "id": "BRA14", "image": "prozess.png", "targetScreen": "BK", "buttonType": "button-type-14" },
    { "id": "BRA15", "image": "instandhaltMaschine.png", "targetScreen": "AL", "buttonType": "button-type-15" },
    { "id": "BRA16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
    { "id": "BRA17", "image": "bbbutton.png", "targetScreen": "AL", "buttonType": "button-type-17" },
    { "id": "BRA18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
    { "id": "BRA19", "image": "bildSchließen.png", "targetScreen": "BR", "buttonType": "button-type-63" }


],





//instandhaltAtcApc2

'BRB':[	



    { "id": "BRB1", "image": "maschineBQ.png", "targetScreen": "BR", "buttonType": "button-type-1" },
    { "id": "BRB2", "image": "antriebe.png", "targetScreen": "BQ", "buttonType": "button-type-2" },
    { "id": "BRB3", "image": "zahlerdetails.png", "targetScreen": "BRA", "buttonType": "button-type-3" },
    { "id": "BRB4", "image": "hydraulik1.png", "targetScreen": "BS", "buttonType": "button-type-4" },
    { "id": "BRB5", "image": "hydraulik2.png", "targetScreen": "BT", "buttonType": "button-type-5" },
    { "id": "BRB6", "image": "pneumatik1.png", "targetScreen": "BU", "buttonType": "button-type-6" },
    { "id": "BRB7", "image": "pneumatik2.png", "targetScreen": "BV", "buttonType": "button-type-7" },
    { "id": "BRB8", "image": "leer.png", "targetScreen": "BN", "buttonType": "button-type-8" },
    { "id": "BRB9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
    { "id": "BRB10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
    { "id": "BRB11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
    { "id": "BRB12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
    { "id": "BRB13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
    { "id": "BRB14", "image": "prozess.png", "targetScreen": "BK", "buttonType": "button-type-14" },
    { "id": "BRB15", "image": "instandhaltMaschine.png", "targetScreen": "AL", "buttonType": "button-type-15" },
    { "id": "BRB16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
    { "id": "BRB17", "image": "bbbutton.png", "targetScreen": "AL", "buttonType": "button-type-17" },
    { "id": "BRB18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
    { "id": "BRB19", "image": "bildSchließen.png", "targetScreen": "BR", "buttonType": "button-type-63" }




],








//instandhaltAtcApc3

'BRC':[	



    { "id": "BRC1", "image": "maschineBQ.png", "targetScreen": "BR", "buttonType": "button-type-1" },
    { "id": "BRC2", "image": "antriebe.png", "targetScreen": "BQ", "buttonType": "button-type-2" },
    { "id": "BRC3", "image": "zahlerdetails.png", "targetScreen": "BRA", "buttonType": "button-type-3" },
    { "id": "BRC4", "image": "hydraulik1.png", "targetScreen": "BS", "buttonType": "button-type-4" },
    { "id": "BRC5", "image": "hydraulik2.png", "targetScreen": "BT", "buttonType": "button-type-5" },
    { "id": "BRC6", "image": "pneumatik1.png", "targetScreen": "BU", "buttonType": "button-type-6" },
    { "id": "BRC7", "image": "pneumatik2.png", "targetScreen": "BV", "buttonType": "button-type-7" },
    { "id": "BRC8", "image": "leer.png", "targetScreen": "BN", "buttonType": "button-type-8" },
    { "id": "BRC9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
    { "id": "BRC10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
    { "id": "BRC11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
    { "id": "BRC12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
    { "id": "BRC13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
    { "id": "BRC14", "image": "prozess.png", "targetScreen": "BK", "buttonType": "button-type-14" },
    { "id": "BRC15", "image": "instandhaltMaschine.png", "targetScreen": "AL", "buttonType": "button-type-15" },
    { "id": "BRC16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
    { "id": "BRC17", "image": "bbbutton.png", "targetScreen": "AL", "buttonType": "button-type-17" },
    { "id": "BRC18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
    { "id": "BRC19", "image": "bildSchließen.png", "targetScreen": "BR", "buttonType": "button-type-63" }




],









//instandhaltAtcApc4

'BRD':[	


    { "id": "BRD1", "image": "maschineBQ.png", "targetScreen": "BR", "buttonType": "button-type-1" },
    { "id": "BRD2", "image": "antriebe.png", "targetScreen": "BQ", "buttonType": "button-type-2" },
    { "id": "BRD3", "image": "zahlerdetails.png", "targetScreen": "BRA", "buttonType": "button-type-3" },
    { "id": "BRD4", "image": "hydraulik1.png", "targetScreen": "BS", "buttonType": "button-type-4" },
    { "id": "BRD5", "image": "hydraulik2.png", "targetScreen": "BT", "buttonType": "button-type-5" },
    { "id": "BRD6", "image": "pneumatik1.png", "targetScreen": "BU", "buttonType": "button-type-6" },
    { "id": "BRD7", "image": "pneumatik2.png", "targetScreen": "BV", "buttonType": "button-type-7" },
    { "id": "BRD8", "image": "leer.png", "targetScreen": "BN", "buttonType": "button-type-8" },
    { "id": "BRD9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
    { "id": "BRD10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
    { "id": "BRD11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
    { "id": "BRD12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
    { "id": "BRD13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
    { "id": "BRD14", "image": "prozess.png", "targetScreen": "BK", "buttonType": "button-type-14" },
    { "id": "BRD15", "image": "instandhaltMaschine.png", "targetScreen": "AL", "buttonType": "button-type-15" },
    { "id": "BRD16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
    { "id": "BRD17", "image": "bbbutton.png", "targetScreen": "AL", "buttonType": "button-type-17" },
    { "id": "BRD18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
    { "id": "BRD19", "image": "bildSchließen.png", "targetScreen": "BR", "buttonType": "button-type-63" }





],








//instandhaltAtcApc5

'BRE':[	


    { "id": "BRE1", "image": "maschineBQ.png", "targetScreen": "BR", "buttonType": "button-type-1" },
    { "id": "BRE2", "image": "antriebe.png", "targetScreen": "BQ", "buttonType": "button-type-2" },
    { "id": "BRE3", "image": "zahlerdetails.png", "targetScreen": "BRA", "buttonType": "button-type-3" },
    { "id": "BRE4", "image": "hydraulik1.png", "targetScreen": "BS", "buttonType": "button-type-4" },
    { "id": "BRE5", "image": "hydraulik2.png", "targetScreen": "BT", "buttonType": "button-type-5" },
    { "id": "BRE6", "image": "pneumatik1.png", "targetScreen": "BU", "buttonType": "button-type-6" },
    { "id": "BRE7", "image": "pneumatik2.png", "targetScreen": "BV", "buttonType": "button-type-7" },
    { "id": "BRE8", "image": "leer.png", "targetScreen": "BN", "buttonType": "button-type-8" },
    { "id": "BRE9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
    { "id": "BRE10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
    { "id": "BRE11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
    { "id": "BRE12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
    { "id": "BRE13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
    { "id": "BRE14", "image": "prozess.png", "targetScreen": "BK", "buttonType": "button-type-14" },
    { "id": "BRE15", "image": "instandhaltMaschine.png", "targetScreen": "AL", "buttonType": "button-type-15" },
    { "id": "BRE16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
    { "id": "BRE17", "image": "bbbutton.png", "targetScreen": "AL", "buttonType": "button-type-17" },
    { "id": "BRE18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
    { "id": "BRE19", "image": "bildSchließen.png", "targetScreen": "BR", "buttonType": "button-type-63" }





],



//instandhaltAtcApc6

'BRF':[	


    { "id": "BRF1", "image": "maschineBQ.png", "targetScreen": "BR", "buttonType": "button-type-1" },
    { "id": "BRF2", "image": "antriebe.png", "targetScreen": "BQ", "buttonType": "button-type-2" },
    { "id": "BRF3", "image": "zahlerdetails.png", "targetScreen": "BRA", "buttonType": "button-type-3" },
    { "id": "BRF4", "image": "hydraulik1.png", "targetScreen": "BS", "buttonType": "button-type-4" },
    { "id": "BRF5", "image": "hydraulik2.png", "targetScreen": "BT", "buttonType": "button-type-5" },
    { "id": "BRF6", "image": "pneumatik1.png", "targetScreen": "BU", "buttonType": "button-type-6" },
    { "id": "BRF7", "image": "pneumatik2.png", "targetScreen": "BV", "buttonType": "button-type-7" },
    { "id": "BRF8", "image": "leer.png", "targetScreen": "BN", "buttonType": "button-type-8" },
    { "id": "BRF9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
    { "id": "BRF10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
    { "id": "BRF11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
    { "id": "BRF12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
    { "id": "BRF13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
    { "id": "BRF14", "image": "prozess.png", "targetScreen": "BK", "buttonType": "button-type-14" },
    { "id": "BRF15", "image": "instandhaltMaschine.png", "targetScreen": "AL", "buttonType": "button-type-15" },
    { "id": "BRF16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
    { "id": "BRF17", "image": "bbbutton.png", "targetScreen": "AL", "buttonType": "button-type-17" },
    { "id": "BRF18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
    { "id": "BRF19", "image": "bildSchließen.png", "targetScreen": "BR", "buttonType": "button-type-63" }





],







//instandhaltAtcApc7

'BRG':[	


    { "id": "BRG1", "image": "maschineBQ.png", "targetScreen": "BR", "buttonType": "button-type-1" },
    { "id": "BRG2", "image": "antriebe.png", "targetScreen": "BQ", "buttonType": "button-type-2" },
    { "id": "BRG3", "image": "zahlerdetails.png", "targetScreen": "BRA", "buttonType": "button-type-3" },
    { "id": "BRG4", "image": "hydraulik1.png", "targetScreen": "BS", "buttonType": "button-type-4" },
    { "id": "BRG5", "image": "hydraulik2.png", "targetScreen": "BT", "buttonType": "button-type-5" },
    { "id": "BRG6", "image": "pneumatik1.png", "targetScreen": "BU", "buttonType": "button-type-6" },
    { "id": "BRG7", "image": "pneumatik2.png", "targetScreen": "BV", "buttonType": "button-type-7" },
    { "id": "BRG8", "image": "leer.png", "targetScreen": "BN", "buttonType": "button-type-8" },
    { "id": "BRG9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
    { "id": "BRG10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
    { "id": "BRG11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
    { "id": "BRG12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
    { "id": "BRG13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
    { "id": "BRG14", "image": "prozess.png", "targetScreen": "BK", "buttonType": "button-type-14" },
    { "id": "BRG15", "image": "instandhaltMaschine.png", "targetScreen": "AL", "buttonType": "button-type-15" },
    { "id": "BRG16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
    { "id": "BRG17", "image": "bbbutton.png", "targetScreen": "AL", "buttonType": "button-type-17" },
    { "id": "BRG18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
    { "id": "BRG19", "image": "bildSchließen.png", "targetScreen": "BR", "buttonType": "button-type-63" }





],









//instandhaltAtcApc8

'BRH':[	


{ "id": "BRH1", "image": "maschineBQ.png", "targetScreen": "BR", "buttonType": "button-type-1" },
    { "id": "BRH2", "image": "antriebe.png", "targetScreen": "BQ", "buttonType": "button-type-2" },
    { "id": "BRH3", "image": "zahlerdetails.png", "targetScreen": "BRA", "buttonType": "button-type-3" },
    { "id": "BRH4", "image": "hydraulik1.png", "targetScreen": "BS", "buttonType": "button-type-4" },
    { "id": "BRH5", "image": "hydraulik2.png", "targetScreen": "BT", "buttonType": "button-type-5" },
    { "id": "BRH6", "image": "pneumatik1.png", "targetScreen": "BU", "buttonType": "button-type-6" },
    { "id": "BRH7", "image": "pneumatik2.png", "targetScreen": "BV", "buttonType": "button-type-7" },
    { "id": "BRH8", "image": "leer.png", "targetScreen": "BN", "buttonType": "button-type-8" },
    { "id": "BRH9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
    { "id": "BRH10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
    { "id": "BRH11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
    { "id": "BRH12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
    { "id": "BRH13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
    { "id": "BRH14", "image": "prozess.png", "targetScreen": "BK", "buttonType": "button-type-14" },
    { "id": "BRH15", "image": "instandhaltMaschine.png", "targetScreen": "AL", "buttonType": "button-type-15" },
    { "id": "BRH16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
    { "id": "BRH17", "image": "bbbutton.png", "targetScreen": "AL", "buttonType": "button-type-17" },
    { "id": "BRH18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
    { "id": "BRH19", "image": "bildSchließen.png", "targetScreen": "BR", "buttonType": "button-type-63" }



],






//instandhaltAtcApc9

'BRCH':[	

    { "id": "BRH1", "image": "maschineBQ.png", "targetScreen": "BR", "buttonType": "button-type-1" },
    { "id": "BRH2", "image": "antriebe.png", "targetScreen": "BQ", "buttonType": "button-type-2" },
    { "id": "BRH3", "image": "zahlerdetails.png", "targetScreen": "BRA", "buttonType": "button-type-3" },
    { "id": "BRH4", "image": "hydraulik1.png", "targetScreen": "BS", "buttonType": "button-type-4" },
    { "id": "BRH5", "image": "hydraulik2.png", "targetScreen": "BT", "buttonType": "button-type-5" },
    { "id": "BRH6", "image": "pneumatik1.png", "targetScreen": "BU", "buttonType": "button-type-6" },
    { "id": "BRH7", "image": "pneumatik2.png", "targetScreen": "BV", "buttonType": "button-type-7" },
    { "id": "BRH8", "image": "leer.png", "targetScreen": "BN", "buttonType": "button-type-8" },
    { "id": "BRH9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
    { "id": "BRH10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
    { "id": "BRH11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
    { "id": "BRH12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
    { "id": "BRH13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
    { "id": "BRH14", "image": "prozess.png", "targetScreen": "BK", "buttonType": "button-type-14" },
    { "id": "BRH15", "image": "instandhaltMaschine.png", "targetScreen": "AL", "buttonType": "button-type-15" },
    { "id": "BRH16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
    { "id": "BRH17", "image": "bbbutton.png", "targetScreen": "AL", "buttonType": "button-type-17" },
    { "id": "BRH18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
    { "id": "BRH19", "image": "bildSchließen.png", "targetScreen": "BR", "buttonType": "button-type-63" }


    

],













//instandhaltAtcApc10

'BRI':[	

    { "id": "BRI1", "image": "maschineBQ.png", "targetScreen": "BR", "buttonType": "button-type-1" },
    { "id": "BRI2", "image": "antriebe.png", "targetScreen": "BQ", "buttonType": "button-type-2" },
    { "id": "BRI3", "image": "zahlerdetails.png", "targetScreen": "BRA", "buttonType": "button-type-3" },
    { "id": "BRI4", "image": "hydraulik1.png", "targetScreen": "BS", "buttonType": "button-type-4" },
    { "id": "BRI5", "image": "hydraulik2.png", "targetScreen": "BT", "buttonType": "button-type-5" },
    { "id": "BRI6", "image": "pneumatik1.png", "targetScreen": "BU", "buttonType": "button-type-6" },
    { "id": "BRI7", "image": "pneumatik2.png", "targetScreen": "BV", "buttonType": "button-type-7" },
    { "id": "BRI8", "image": "leer.png", "targetScreen": "BN", "buttonType": "button-type-8" },
    { "id": "BRI9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
    { "id": "BRI10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
    { "id": "BRI11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
    { "id": "BRI12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
    { "id": "BRI13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
    { "id": "BRI14", "image": "prozess.png", "targetScreen": "BK", "buttonType": "button-type-14" },
    { "id": "BRI15", "image": "instandhaltMaschine.png", "targetScreen": "AL", "buttonType": "button-type-15" },
    { "id": "BRI16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
    { "id": "BRI17", "image": "bbbutton.png", "targetScreen": "AL", "buttonType": "button-type-17" },
    { "id": "BRI18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
    { "id": "BRI19", "image": "bildSchließen.png", "targetScreen": "BR", "buttonType": "button-type-63" }


],


//instandhaltAtcApc11

'BRJ':[	



    { "id": "BRJ1", "image": "maschineBQ.png", "targetScreen": "BR", "buttonType": "button-type-1" },
    { "id": "BRJ2", "image": "antriebe.png", "targetScreen": "BQ", "buttonType": "button-type-2" },
    { "id": "BRJ3", "image": "zahlerdetails.png", "targetScreen": "BRA", "buttonType": "button-type-3" },
    { "id": "BRJ4", "image": "hydraulik1.png", "targetScreen": "BS", "buttonType": "button-type-4" },
    { "id": "BRJ5", "image": "hydraulik2.png", "targetScreen": "BT", "buttonType": "button-type-5" },
    { "id": "BRJ6", "image": "pneumatik1.png", "targetScreen": "BU", "buttonType": "button-type-6" },
    { "id": "BRJ7", "image": "pneumatik2.png", "targetScreen": "BV", "buttonType": "button-type-7" },
    { "id": "BRJ8", "image": "leer.png", "targetScreen": "BN", "buttonType": "button-type-8" },
    { "id": "BRJ9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
    { "id": "BRJ10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
    { "id": "BRJ11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
    { "id": "BRJ12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
    { "id": "BRJ13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
    { "id": "BRJ14", "image": "prozess.png", "targetScreen": "BK", "buttonType": "button-type-14" },
    { "id": "BRJ15", "image": "instandhaltMaschine.png", "targetScreen": "AL", "buttonType": "button-type-15" },
    { "id": "BRJ16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
    { "id": "BRJ17", "image": "bbbutton.png", "targetScreen": "AL", "buttonType": "button-type-17" },
    { "id": "BRJ18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
    { "id": "BRJ19", "image": "bildSchließen.png", "targetScreen": "BR", "buttonType": "button-type-63" }


],



//instandhaltAtcApc12





'BRK':[	

    { "id": "BRK1", "image": "maschineBQ.png", "targetScreen": "BR", "buttonType": "button-type-1" },
    { "id": "BRK2", "image": "antriebe.png", "targetScreen": "BQ", "buttonType": "button-type-2" },
    { "id": "BRK3", "image": "zahlerdetails.png", "targetScreen": "BRA", "buttonType": "button-type-3" },
    { "id": "BRK4", "image": "hydraulik1.png", "targetScreen": "BS", "buttonType": "button-type-4" },
    { "id": "BRK5", "image": "hydraulik2.png", "targetScreen": "BT", "buttonType": "button-type-5" },
    { "id": "BRK6", "image": "pneumatik1.png", "targetScreen": "BU", "buttonType": "button-type-6" },
    { "id": "BRK7", "image": "pneumatik2.png", "targetScreen": "BV", "buttonType": "button-type-7" },
    { "id": "BRK8", "image": "leer.png", "targetScreen": "BN", "buttonType": "button-type-8" },
    { "id": "BRK9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
    { "id": "BRK10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
    { "id": "BRK11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
    { "id": "BRK12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
    { "id": "BRK13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
    { "id": "BRK14", "image": "prozess.png", "targetScreen": "BK", "buttonType": "button-type-14" },
    { "id": "BRK15", "image": "instandhaltMaschine.png", "targetScreen": "AL", "buttonType": "button-type-15" },
    { "id": "BRK16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
    { "id": "BRK17", "image": "bbbutton.png", "targetScreen": "AL", "buttonType": "button-type-17" },
    { "id": "BRK18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
    { "id": "BRK19", "image": "bildSchließen.png", "targetScreen": "BR", "buttonType": "button-type-63" }





],




//instandhaltAtcApc13

'BRL':[	


   
    { "id": "BRL1", "image": "maschineBQ.png", "targetScreen": "BR", "buttonType": "button-type-1" },
    { "id": "BRL2", "image": "antriebe.png", "targetScreen": "BQ", "buttonType": "button-type-2" },
    { "id": "BRL3", "image": "zahlerdetails.png", "targetScreen": "BRA", "buttonType": "button-type-3" },
    { "id": "BRL4", "image": "hydraulik1.png", "targetScreen": "BS", "buttonType": "button-type-4" },
    { "id": "BRL5", "image": "hydraulik2.png", "targetScreen": "BT", "buttonType": "button-type-5" },
    { "id": "BRL6", "image": "pneumatik1.png", "targetScreen": "BU", "buttonType": "button-type-6" },
    { "id": "BRL7", "image": "pneumatik2.png", "targetScreen": "BV", "buttonType": "button-type-7" },
    { "id": "BRL8", "image": "leer.png", "targetScreen": "BN", "buttonType": "button-type-8" },
    { "id": "BRL9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
    { "id": "BRL10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
    { "id": "BRL11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
    { "id": "BRL12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
    { "id": "BRL13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
    { "id": "BRL14", "image": "prozess.png", "targetScreen": "BK", "buttonType": "button-type-14" },
    { "id": "BRL15", "image": "instandhaltMaschine.png", "targetScreen": "AL", "buttonType": "button-type-15" },
    { "id": "BRL16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
    { "id": "BRL17", "image": "bbbutton.png", "targetScreen": "AL", "buttonType": "button-type-17" },
    { "id": "BRL18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
    { "id": "BRL19", "image": "bildSchließen.png", "targetScreen": "BR", "buttonType": "button-type-63" }

 

],




//instandhaltAtcApc14

'BRM':[	



    { "id": "BRM1", "image": "maschineBQ.png", "targetScreen": "BR", "buttonType": "button-type-1" },
    { "id": "BRM2", "image": "antriebe.png", "targetScreen": "BQ", "buttonType": "button-type-2" },
    { "id": "BRM3", "image": "zahlerdetails.png", "targetScreen": "BRA", "buttonType": "button-type-3" },
    { "id": "BRM4", "image": "hydraulik1.png", "targetScreen": "BS", "buttonType": "button-type-4" },
    { "id": "BRM5", "image": "hydraulik2.png", "targetScreen": "BT", "buttonType": "button-type-5" },
    { "id": "BRM6", "image": "pneumatik1.png", "targetScreen": "BU", "buttonType": "button-type-6" },
    { "id": "BRM7", "image": "pneumatik2.png", "targetScreen": "BV", "buttonType": "button-type-7" },
    { "id": "BRM8", "image": "leer.png", "targetScreen": "BN", "buttonType": "button-type-8" },
    { "id": "BRM9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
    { "id": "BRM10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
    { "id": "BRM11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
    { "id": "BRM12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
    { "id": "BRM13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
    { "id": "BRM14", "image": "prozess.png", "targetScreen": "BK", "buttonType": "button-type-14" },
    { "id": "BRM15", "image": "instandhaltMaschine.png", "targetScreen": "AL", "buttonType": "button-type-15" },
    { "id": "BRM16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
    { "id": "BRM17", "image": "bbbutton.png", "targetScreen": "AL", "buttonType": "button-type-17" },
    { "id": "BRM18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
    { "id": "BRM19", "image": "bildSchließen.png", "targetScreen": "BR", "buttonType": "button-type-63" }





],







// instandhaltHydraulik1



'BS':[	



{ "id": "BS1", "image": "maschineBQ.png", "targetScreen": "BO", "buttonType": "button-type-1" },
{ "id": "BS2", "image": "antriebe.png", "targetScreen": "BL", "buttonType": "button-type-2" },
{ "id": "BS3", "image": "atcapc.png", "targetScreen": "BR", "buttonType": "button-type-3" },
{ "id": "BS4", "image": "hydraulik1BS.png", "targetScreen": "BS", "buttonType": "button-type-4" },
{ "id": "BS5", "image": "hydraulik2.png", "targetScreen": "BT", "buttonType": "button-type-5" },
{ "id": "BS6", "image": "pneumatik1.png", "targetScreen": "BU", "buttonType": "button-type-6" },
{ "id": "BS7", "image": "pneumatik2.png", "targetScreen": "BV", "buttonType": "button-type-7" },
{ "id": "BS8", "image": "leer.png", "targetScreen": "BN", "buttonType": "button-type-8" },
{ "id": "BS9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
{ "id": "BS10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
{ "id": "BS11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
{ "id": "BS12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
{ "id": "BS13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
{ "id": "BS14", "image": "prozess.png", "targetScreen": "BK", "buttonType": "button-type-14" },
{ "id": "BS15", "image": "instandhaltMaschine.png", "targetScreen": "AL", "buttonType": "button-type-15" },
{ "id": "BS16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
{ "id": "BS17", "image": "bbbutton.png", "targetScreen": "AL", "buttonType": "button-type-17" },
{ "id": "BS18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
{ "id": "BS19", "image": "details.png", "targetScreen": "BSA", "buttonType": "button-type-49" },
{ "id": "BS20", "image": "details.png", "targetScreen": "BSB", "buttonType": "button-type-50" },
{ "id": "BS21", "image": "details.png", "targetScreen": "BSC", "buttonType": "button-type-51" },
{ "id": "BS22", "image": "details.png", "targetScreen": "BSD", "buttonType": "button-type-52" },
{ "id": "BS23", "image": "details.png", "targetScreen": "BSE", "buttonType": "button-type-53" },
{ "id": "BS24", "image": "details.png", "targetScreen": "BSF", "buttonType": "button-type-54" },
{ "id": "BS25", "image": "details.png", "targetScreen": "BSG", "buttonType": "button-type-55" },
{ "id": "BS26", "image": "details.png", "targetScreen": "BSH", "buttonType": "button-type-56" },
{ "id": "BS27", "image": "details.png", "targetScreen": "BSCH", "buttonType": "button-type-57" },
{ "id": "BS28", "image": "details.png", "targetScreen": "BSI", "buttonType": "button-type-58" },
{ "id": "BS29", "image": "details.png", "targetScreen": "BSJ", "buttonType": "button-type-59" },
{ "id": "BS30", "image": "details.png", "targetScreen": "BSK", "buttonType": "button-type-60" },
{ "id": "BS31", "image": "details.png", "targetScreen": "BSL", "buttonType": "button-type-61" },
{ "id": "BS32", "image": "details.png", "targetScreen": "BSM", "buttonType": "button-type-62" }


],



// instandhaltHydraulik1.1

'BSA':[	

{ "id": "BSA1", "image": "maschineBQ.png", "targetScreen": "BO", "buttonType": "button-type-1" },
{ "id": "BSA2", "image": "antriebe.png", "targetScreen": "BL", "buttonType": "button-type-2" },
{ "id": "BSA3", "image": "atcapc.png", "targetScreen": "BR", "buttonType": "button-type-3" },
{ "id": "BSA4", "image": "zahlerdetails.png", "targetScreen": "BS", "buttonType": "button-type-4" },
{ "id": "BSA5", "image": "hydraulik2.png", "targetScreen": "BT", "buttonType": "button-type-5" },
{ "id": "BSA6", "image": "pneumatik1.png", "targetScreen": "BU", "buttonType": "button-type-6" },
{ "id": "BSA7", "image": "pneumatik2.png", "targetScreen": "BV", "buttonType": "button-type-7" },
{ "id": "BSA8", "image": "leer.png", "targetScreen": "BN", "buttonType": "button-type-8" },
{ "id": "BSA9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
{ "id": "BSA10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
{ "id": "BSA11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
{ "id": "BSA12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
{ "id": "BSA13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
{ "id": "BSA14", "image": "prozess.png", "targetScreen": "BK", "buttonType": "button-type-14" },
{ "id": "BSA15", "image": "instandhaltMaschine.png", "targetScreen": "AL", "buttonType": "button-type-15" },
{ "id": "BSA16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
{ "id": "BSA17", "image": "bbbutton.png", "targetScreen": "AL", "buttonType": "button-type-17" },
{ "id": "BSA18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
{ "id": "BSA19", "image": "bildSchließen.png", "targetScreen": "BS", "buttonType": "button-type-63" }







],


// instandhaltHydraulik1.2


'BSB':[	



{ "id": "BSB1", "image": "maschineBQ.png", "targetScreen": "BO", "buttonType": "button-type-1" },
{ "id": "BSB2", "image": "antriebe.png", "targetScreen": "BL", "buttonType": "button-type-2" },
{ "id": "BSB3", "image": "atcapc.png", "targetScreen": "BR", "buttonType": "button-type-3" },
{ "id": "BSB4", "image": "zahlerdetails.png", "targetScreen": "BS", "buttonType": "button-type-4" },
{ "id": "BSB5", "image": "hydraulik2.png", "targetScreen": "BT", "buttonType": "button-type-5" },
{ "id": "BSB6", "image": "pneumatik1.png", "targetScreen": "BU", "buttonType": "button-type-6" },
{ "id": "BSB7", "image": "pneumatik2.png", "targetScreen": "BV", "buttonType": "button-type-7" },
{ "id": "BSB8", "image": "leer.png", "targetScreen": "BN", "buttonType": "button-type-8" },
{ "id": "BSB9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
{ "id": "BSB10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
{ "id": "BSB11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
{ "id": "BSB12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
{ "id": "BSB13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
{ "id": "BSB14", "image": "prozess.png", "targetScreen": "BK", "buttonType": "button-type-14" },
{ "id": "BSB15", "image": "instandhaltMaschine.png", "targetScreen": "AL", "buttonType": "button-type-15" },
{ "id": "BSB16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
{ "id": "BSB17", "image": "bbbutton.png", "targetScreen": "AL", "buttonType": "button-type-17" },
{ "id": "BSB18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
{ "id": "BSB19", "image": "bildSchließen.png", "targetScreen": "BS", "buttonType": "button-type-63" }






],



// instandhaltHydraulik1.3


'BSC':[	

{ "id": "BSC1", "image": "maschineBQ.png", "targetScreen": "BO", "buttonType": "button-type-1" },
{ "id": "BSC2", "image": "antriebe.png", "targetScreen": "BL", "buttonType": "button-type-2" },
{ "id": "BSC3", "image": "atcapc.png", "targetScreen": "BR", "buttonType": "button-type-3" },
{ "id": "BSC4", "image": "zahlerdetails.png", "targetScreen": "BS", "buttonType": "button-type-4" },
{ "id": "BSC5", "image": "hydraulik2.png", "targetScreen": "BT", "buttonType": "button-type-5" },
{ "id": "BSC6", "image": "pneumatik1.png", "targetScreen": "BU", "buttonType": "button-type-6" },
{ "id": "BSC7", "image": "pneumatik2.png", "targetScreen": "BV", "buttonType": "button-type-7" },
{ "id": "BSC8", "image": "leer.png", "targetScreen": "BN", "buttonType": "button-type-8" },
{ "id": "BSC9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
{ "id": "BSC10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
{ "id": "BSC11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
{ "id": "BSC12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
{ "id": "BSC13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
{ "id": "BSC14", "image": "prozess.png", "targetScreen": "BK", "buttonType": "button-type-14" },
{ "id": "BSC15", "image": "instandhaltMaschine.png", "targetScreen": "AL", "buttonType": "button-type-15" },
{ "id": "BSC16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
{ "id": "BSC17", "image": "bbbutton.png", "targetScreen": "AL", "buttonType": "button-type-17" },
{ "id": "BSC18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
{ "id": "BSC19", "image": "bildSchließen.png", "targetScreen": "BS", "buttonType": "button-type-63" }




],


// instandhaltHydraulik1.4


'BSD':[	




{ "id": "BSD1", "image": "maschineBQ.png", "targetScreen": "BO", "buttonType": "button-type-1" },
{ "id": "BSD2", "image": "antriebe.png", "targetScreen": "BL", "buttonType": "button-type-2" },
{ "id": "BSD3", "image": "atcapc.png", "targetScreen": "BR", "buttonType": "button-type-3" },
{ "id": "BSD4", "image": "zahlerdetails.png", "targetScreen": "BS", "buttonType": "button-type-4" },
{ "id": "BSD5", "image": "hydraulik2.png", "targetScreen": "BT", "buttonType": "button-type-5" },
{ "id": "BSD6", "image": "pneumatik1.png", "targetScreen": "BU", "buttonType": "button-type-6" },
{ "id": "BSD7", "image": "pneumatik2.png", "targetScreen": "BV", "buttonType": "button-type-7" },
{ "id": "BSD8", "image": "leer.png", "targetScreen": "BN", "buttonType": "button-type-8" },
{ "id": "BSD9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
{ "id": "BSD10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
{ "id": "BSD11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
{ "id": "BSD12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
{ "id": "BSD13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
{ "id": "BSD14", "image": "prozess.png", "targetScreen": "BK", "buttonType": "button-type-14" },
{ "id": "BSD15", "image": "instandhaltMaschine.png", "targetScreen": "AL", "buttonType": "button-type-15" },
{ "id": "BSD16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
{ "id": "BSD17", "image": "bbbutton.png", "targetScreen": "AL", "buttonType": "button-type-17" },
{ "id": "BSD18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
{ "id": "BSD19", "image": "bildSchließen.png", "targetScreen": "BS", "buttonType": "button-type-63" }

],


// instandhaltHydraulik1.5


'BSE':[	


{ "id": "BSE1", "image": "maschineBQ.png", "targetScreen": "BO", "buttonType": "button-type-1" },
{ "id": "BSE2", "image": "antriebe.png", "targetScreen": "BL", "buttonType": "button-type-2" },
{ "id": "BSE3", "image": "atcapc.png", "targetScreen": "BR", "buttonType": "button-type-3" },
{ "id": "BSE4", "image": "zahlerdetails.png", "targetScreen": "BS", "buttonType": "button-type-4" },
{ "id": "BSE5", "image": "hydraulik2.png", "targetScreen": "BT", "buttonType": "button-type-5" },
{ "id": "BSE6", "image": "pneumatik1.png", "targetScreen": "BU", "buttonType": "button-type-6" },
{ "id": "BSE7", "image": "pneumatik2.png", "targetScreen": "BV", "buttonType": "button-type-7" },
{ "id": "BSE8", "image": "leer.png", "targetScreen": "BN", "buttonType": "button-type-8" },
{ "id": "BSE9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
{ "id": "BSE10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
{ "id": "BSE11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
{ "id": "BSE12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
{ "id": "BSE13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
{ "id": "BSE14", "image": "prozess.png", "targetScreen": "BK", "buttonType": "button-type-14" },
{ "id": "BSE15", "image": "instandhaltMaschine.png", "targetScreen": "AL", "buttonType": "button-type-15" },
{ "id": "BSE16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
{ "id": "BSE17", "image": "bbbutton.png", "targetScreen": "AL", "buttonType": "button-type-17" },
{ "id": "BSE18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
{ "id": "BSE19", "image": "bildSchließen.png", "targetScreen": "BS", "buttonType": "button-type-63" }




],


// instandhaltHydraulik1.6


'BSF':[	

{ "id": "BSF1", "image": "maschineBQ.png", "targetScreen": "BO", "buttonType": "button-type-1" },
{ "id": "BSF2", "image": "antriebe.png", "targetScreen": "BL", "buttonType": "button-type-2" },
{ "id": "BSF3", "image": "atcapc.png", "targetScreen": "BR", "buttonType": "button-type-3" },
{ "id": "BSF4", "image": "zahlerdetails.png", "targetScreen": "BS", "buttonType": "button-type-4" },
{ "id": "BSF5", "image": "hydraulik2.png", "targetScreen": "BT", "buttonType": "button-type-5" },
{ "id": "BSF6", "image": "pneumatik1.png", "targetScreen": "BU", "buttonType": "button-type-6" },
{ "id": "BSF7", "image": "pneumatik2.png", "targetScreen": "BV", "buttonType": "button-type-7" },
{ "id": "BSF8", "image": "leer.png", "targetScreen": "BN", "buttonType": "button-type-8" },
{ "id": "BSF9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
{ "id": "BSF10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
{ "id": "BSF11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
{ "id": "BSF12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
{ "id": "BSF13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
{ "id": "BSF14", "image": "prozess.png", "targetScreen": "BK", "buttonType": "button-type-14" },
{ "id": "BSF15", "image": "instandhaltMaschine.png", "targetScreen": "AL", "buttonType": "button-type-15" },
{ "id": "BSF16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
{ "id": "BSF17", "image": "bbbutton.png", "targetScreen": "AL", "buttonType": "button-type-17" },
{ "id": "BSF18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
{ "id": "BSF19", "image": "bildSchließen.png", "targetScreen": "BS", "buttonType": "button-type-63" }


],


// instandhaltHydraulik1.7

'BSG':[	

{ "id": "BSG1", "image": "maschineBQ.png", "targetScreen": "BO", "buttonType": "button-type-1" },
{ "id": "BSG2", "image": "antriebe.png", "targetScreen": "BL", "buttonType": "button-type-2" },
{ "id": "BSG3", "image": "atcapc.png", "targetScreen": "BR", "buttonType": "button-type-3" },
{ "id": "BSG4", "image": "zahlerdetails.png", "targetScreen": "BS", "buttonType": "button-type-4" },
{ "id": "BSG5", "image": "hydraulik2.png", "targetScreen": "BT", "buttonType": "button-type-5" },
{ "id": "BSG6", "image": "pneumatik1.png", "targetScreen": "BU", "buttonType": "button-type-6" },
{ "id": "BSG7", "image": "pneumatik2.png", "targetScreen": "BV", "buttonType": "button-type-7" },
{ "id": "BSG8", "image": "leer.png", "targetScreen": "BN", "buttonType": "button-type-8" },
{ "id": "BSG9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
{ "id": "BSG10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
{ "id": "BSG11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
{ "id": "BSG12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
{ "id": "BSG13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
{ "id": "BSG14", "image": "prozess.png", "targetScreen": "BK", "buttonType": "button-type-14" },
{ "id": "BSG15", "image": "instandhaltMaschine.png", "targetScreen": "AL", "buttonType": "button-type-15" },
{ "id": "BSG16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
{ "id": "BSG17", "image": "bbbutton.png", "targetScreen": "AL", "buttonType": "button-type-17" },
{ "id": "BSG18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
{ "id": "BSG19", "image": "bildSchließen.png", "targetScreen": "BS", "buttonType": "button-type-63" }




],


// instandhaltHydraulik1.8

'BSH':[	
{ "id": "BSH1", "image": "maschineBQ.png", "targetScreen": "BO", "buttonType": "button-type-1" },
{ "id": "BSH2", "image": "antriebe.png", "targetScreen": "BL", "buttonType": "button-type-2" },
{ "id": "BSH3", "image": "atcapc.png", "targetScreen": "BR", "buttonType": "button-type-3" },
{ "id": "BSH4", "image": "zahlerdetails.png", "targetScreen": "BS", "buttonType": "button-type-4" },
{ "id": "BSH5", "image": "hydraulik2.png", "targetScreen": "BT", "buttonType": "button-type-5" },
{ "id": "BSH6", "image": "pneumatik1.png", "targetScreen": "BU", "buttonType": "button-type-6" },
{ "id": "BSH7", "image": "pneumatik2.png", "targetScreen": "BV", "buttonType": "button-type-7" },
{ "id": "BSH8", "image": "leer.png", "targetScreen": "BN", "buttonType": "button-type-8" },
{ "id": "BSH9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
{ "id": "BSH10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
{ "id": "BSH11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
{ "id": "BSH12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
{ "id": "BSH13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
{ "id": "BSH14", "image": "prozess.png", "targetScreen": "BK", "buttonType": "button-type-14" },
{ "id": "BSH15", "image": "instandhaltMaschine.png", "targetScreen": "AL", "buttonType": "button-type-15" },
{ "id": "BSH16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
{ "id": "BSH17", "image": "bbbutton.png", "targetScreen": "AL", "buttonType": "button-type-17" },
{ "id": "BSH18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
{ "id": "BSH19", "image": "bildSchließen.png", "targetScreen": "BS", "buttonType": "button-type-63" }



],



// instandhaltHydraulik1.9


'BSCH':[	

{ "id": "BSCH1", "image": "maschineBQ.png", "targetScreen": "BO", "buttonType": "button-type-1" },
{ "id": "BSCH2", "image": "antriebe.png", "targetScreen": "BL", "buttonType": "button-type-2" },
{ "id": "BSCH3", "image": "atcapc.png", "targetScreen": "BR", "buttonType": "button-type-3" },
{ "id": "BSCH4", "image": "zahlerdetails.png", "targetScreen": "BS", "buttonType": "button-type-4" },
{ "id": "BSCH5", "image": "hydraulik2.png", "targetScreen": "BT", "buttonType": "button-type-5" },
{ "id": "BSCH6", "image": "pneumatik1.png", "targetScreen": "BU", "buttonType": "button-type-6" },
{ "id": "BSCH7", "image": "pneumatik2.png", "targetScreen": "BV", "buttonType": "button-type-7" },
{ "id": "BSCH8", "image": "leer.png", "targetScreen": "BN", "buttonType": "button-type-8" },
{ "id": "BSCH9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
{ "id": "BSCH10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
{ "id": "BSCH11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
{ "id": "BSCH12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
{ "id": "BSCH13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
{ "id": "BSCH14", "image": "prozess.png", "targetScreen": "BK", "buttonType": "button-type-14" },
{ "id": "BSCH15", "image": "instandhaltMaschine.png", "targetScreen": "AL", "buttonType": "button-type-15" },
{ "id": "BSCH16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
{ "id": "BSCH17", "image": "bbbutton.png", "targetScreen": "AL", "buttonType": "button-type-17" },
{ "id": "BSCH18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
{ "id": "BSCH19", "image": "bildSchließen.png", "targetScreen": "BS", "buttonType": "button-type-63" }




],


// instandhaltHydraulik1.10


'BSI':[	

{ "id": "BSI1", "image": "maschineBQ.png", "targetScreen": "BO", "buttonType": "button-type-1" },
{ "id": "BSI2", "image": "antriebe.png", "targetScreen": "BL", "buttonType": "button-type-2" },
{ "id": "BSI3", "image": "atcapc.png", "targetScreen": "BR", "buttonType": "button-type-3" },
{ "id": "BSI4", "image": "zahlerdetails.png", "targetScreen": "BS", "buttonType": "button-type-4" },
{ "id": "BSI5", "image": "hydraulik2.png", "targetScreen": "BT", "buttonType": "button-type-5" },
{ "id": "BSI6", "image": "pneumatik1.png", "targetScreen": "BU", "buttonType": "button-type-6" },
{ "id": "BSI7", "image": "pneumatik2.png", "targetScreen": "BV", "buttonType": "button-type-7" },
{ "id": "BSI8", "image": "leer.png", "targetScreen": "BN", "buttonType": "button-type-8" },
{ "id": "BSI9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
{ "id": "BSI10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
{ "id": "BSI11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
{ "id": "BSI12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
{ "id": "BSI13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
{ "id": "BSI14", "image": "prozess.png", "targetScreen": "BK", "buttonType": "button-type-14" },
{ "id": "BSI15", "image": "instandhaltMaschine.png", "targetScreen": "AL", "buttonType": "button-type-15" },
{ "id": "BSI16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
{ "id": "BSI17", "image": "bbbutton.png", "targetScreen": "AL", "buttonType": "button-type-17" },
{ "id": "BSI18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
{ "id": "BSI19", "image": "bildSchließen.png", "targetScreen": "BS", "buttonType": "button-type-63" }


],



// instandhaltHydraulik1.11


'BSJ':[	

{ "id": "BSJ1", "image": "maschineBQ.png", "targetScreen": "BO", "buttonType": "button-type-1" },
{ "id": "BSJ2", "image": "antriebe.png", "targetScreen": "BL", "buttonType": "button-type-2" },
{ "id": "BSJ3", "image": "atcapc.png", "targetScreen": "BR", "buttonType": "button-type-3" },
{ "id": "BSJ4", "image": "zahlerdetails.png", "targetScreen": "BS", "buttonType": "button-type-4" },
{ "id": "BSJ5", "image": "hydraulik2.png", "targetScreen": "BT", "buttonType": "button-type-5" },
{ "id": "BSJ6", "image": "pneumatik1.png", "targetScreen": "BU", "buttonType": "button-type-6" },
{ "id": "BSJ7", "image": "pneumatik2.png", "targetScreen": "BV", "buttonType": "button-type-7" },
{ "id": "BSJ8", "image": "leer.png", "targetScreen": "BN", "buttonType": "button-type-8" },
{ "id": "BSJ9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
{ "id": "BSJ10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
{ "id": "BSJ11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
{ "id": "BSJ12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
{ "id": "BSJ13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
{ "id": "BSJ14", "image": "prozess.png", "targetScreen": "BK", "buttonType": "button-type-14" },
{ "id": "BSJ15", "image": "instandhaltMaschine.png", "targetScreen": "AL", "buttonType": "button-type-15" },
{ "id": "BSJ16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
{ "id": "BSJ17", "image": "bbbutton.png", "targetScreen": "AL", "buttonType": "button-type-17" },
{ "id": "BSJ18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
{ "id": "BSJ19", "image": "bildSchließen.png", "targetScreen": "BS", "buttonType": "button-type-63" }



],


// instandhaltHydraulik1.12


'BSK':[	



{ "id": "BSK1", "image": "maschineBQ.png", "targetScreen": "BO", "buttonType": "button-type-1" },
{ "id": "BSK2", "image": "antriebe.png", "targetScreen": "BL", "buttonType": "button-type-2" },
{ "id": "BSK3", "image": "atcapc.png", "targetScreen": "BR", "buttonType": "button-type-3" },
{ "id": "BSK4", "image": "zahlerdetails.png", "targetScreen": "BS", "buttonType": "button-type-4" },
{ "id": "BSK5", "image": "hydraulik2.png", "targetScreen": "BT", "buttonType": "button-type-5" },
{ "id": "BSK6", "image": "pneumatik1.png", "targetScreen": "BU", "buttonType": "button-type-6" },
{ "id": "BSK7", "image": "pneumatik2.png", "targetScreen": "BV", "buttonType": "button-type-7" },
{ "id": "BSK8", "image": "leer.png", "targetScreen": "BN", "buttonType": "button-type-8" },
{ "id": "BSK9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
{ "id": "BSK10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
{ "id": "BSK11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
{ "id": "BSK12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
{ "id": "BSK13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
{ "id": "BSK14", "image": "prozess.png", "targetScreen": "BK", "buttonType": "button-type-14" },
{ "id": "BSK15", "image": "instandhaltMaschine.png", "targetScreen": "AL", "buttonType": "button-type-15" },
{ "id": "BSK16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
{ "id": "BSK17", "image": "bbbutton.png", "targetScreen": "AL", "buttonType": "button-type-17" },
{ "id": "BSK18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
{ "id": "BSK19", "image": "bildSchließen.png", "targetScreen": "BS", "buttonType": "button-type-63" }

],


// instandhaltHydraulik1.13


'BSL':[	

{ "id": "BSL1", "image": "maschineBQ.png", "targetScreen": "BO", "buttonType": "button-type-1" },
{ "id": "BSL2", "image": "antriebe.png", "targetScreen": "BL", "buttonType": "button-type-2" },
{ "id": "BSL3", "image": "atcapc.png", "targetScreen": "BR", "buttonType": "button-type-3" },
{ "id": "BSL4", "image": "zahlerdetails.png", "targetScreen": "BS", "buttonType": "button-type-4" },
{ "id": "BSL5", "image": "hydraulik2.png", "targetScreen": "BT", "buttonType": "button-type-5" },
{ "id": "BSL6", "image": "pneumatik1.png", "targetScreen": "BU", "buttonType": "button-type-6" },
{ "id": "BSL7", "image": "pneumatik2.png", "targetScreen": "BV", "buttonType": "button-type-7" },
{ "id": "BSL8", "image": "leer.png", "targetScreen": "BN", "buttonType": "button-type-8" },
{ "id": "BSL9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
{ "id": "BSL10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
{ "id": "BSL11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
{ "id": "BSL12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
{ "id": "BSL13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
{ "id": "BSL14", "image": "prozess.png", "targetScreen": "BK", "buttonType": "button-type-14" },
{ "id": "BSL15", "image": "instandhaltMaschine.png", "targetScreen": "AL", "buttonType": "button-type-15" },
{ "id": "BSL16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
{ "id": "BSL17", "image": "bbbutton.png", "targetScreen": "AL", "buttonType": "button-type-17" },
{ "id": "BSL18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
{ "id": "BSL19", "image": "bildSchließen.png", "targetScreen": "BS", "buttonType": "button-type-63" }



],


// instandhaltHydraulik1.14



'BSM':[	

{ "id": "BSM1", "image": "maschineBQ.png", "targetScreen": "BO", "buttonType": "button-type-1" },
{ "id": "BSM2", "image": "antriebe.png", "targetScreen": "BL", "buttonType": "button-type-2" },
{ "id": "BSM3", "image": "atcapc.png", "targetScreen": "BR", "buttonType": "button-type-3" },
{ "id": "BSM4", "image": "zahlerdetails.png", "targetScreen": "BS", "buttonType": "button-type-4" },
{ "id": "BSM5", "image": "hydraulik2.png", "targetScreen": "BT", "buttonType": "button-type-5" },
{ "id": "BSM6", "image": "pneumatik1.png", "targetScreen": "BU", "buttonType": "button-type-6" },
{ "id": "BSM7", "image": "pneumatik2.png", "targetScreen": "BV", "buttonType": "button-type-7" },
{ "id": "BSM8", "image": "leer.png", "targetScreen": "BN", "buttonType": "button-type-8" },
{ "id": "BSM9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
{ "id": "BSM10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
{ "id": "BSM11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
{ "id": "BSM12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
{ "id": "BSM13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
{ "id": "BSM14", "image": "prozess.png", "targetScreen": "BK", "buttonType": "button-type-14" },
{ "id": "BSM15", "image": "instandhaltMaschine.png", "targetScreen": "AL", "buttonType": "button-type-15" },
{ "id": "BSM16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
{ "id": "BSM17", "image": "bbbutton.png", "targetScreen": "AL", "buttonType": "button-type-17" },
{ "id": "BSM18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
{ "id": "BSM19", "image": "bildSchließen.png", "targetScreen": "BS", "buttonType": "button-type-63" }


],


// instandhaltHydraulik2


'BT':[	




{ "id": "BT1", "image": "maschineBQ.png", "targetScreen": "BO", "buttonType": "button-type-1" },
{ "id": "BT2", "image": "antriebe.png", "targetScreen": "BL", "buttonType": "button-type-2" },
{ "id": "BT3", "image": "atcapc.png", "targetScreen": "BR", "buttonType": "button-type-3" },
{ "id": "BT4", "image": "hydraulik1.png", "targetScreen": "BS", "buttonType": "button-type-4" },
{ "id": "BT5", "image": "hydraulik2BT.png", "targetScreen": "BT", "buttonType": "button-type-5" },
{ "id": "BT6", "image": "pneumatik1.png", "targetScreen": "BU", "buttonType": "button-type-6" },
{ "id": "BT7", "image": "pneumatik2.png", "targetScreen": "BV", "buttonType": "button-type-7" },
{ "id": "BT8", "image": "leer.png", "targetScreen": "BN", "buttonType": "button-type-8" },
{ "id": "BT9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
{ "id": "BT10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
{ "id": "BT11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
{ "id": "BT12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
{ "id": "BT13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
{ "id": "BT14", "image": "prozess.png", "targetScreen": "BK", "buttonType": "button-type-14" },
{ "id": "BT15", "image": "instandhaltMaschine.png", "targetScreen": "AL", "buttonType": "button-type-15" },
{ "id": "BT16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
{ "id": "BT17", "image": "bbbutton.png", "targetScreen": "AL", "buttonType": "button-type-17" },
{ "id": "BT18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
{ "id": "BT19", "image": "details.png", "targetScreen": "BTA", "buttonType": "button-type-49" },
{ "id": "BT20", "image": "details.png", "targetScreen": "BTB", "buttonType": "button-type-50" },
{ "id": "BT21", "image": "details.png", "targetScreen": "BTC", "buttonType": "button-type-51" },
{ "id": "BT22", "image": "details.png", "targetScreen": "BTD", "buttonType": "button-type-52" },
{ "id": "BT23", "image": "details.png", "targetScreen": "BTE", "buttonType": "button-type-53" },
{ "id": "BT24", "image": "details.png", "targetScreen": "BTF", "buttonType": "button-type-54" },
{ "id": "BT25", "image": "details.png", "targetScreen": "BTG", "buttonType": "button-type-55" },
{ "id": "BT26", "image": "details.png", "targetScreen": "BTH", "buttonType": "button-type-56" },
{ "id": "BT27", "image": "details.png", "targetScreen": "BTCH", "buttonType": "button-type-57" },
{ "id": "BT28", "image": "details.png", "targetScreen": "BTI", "buttonType": "button-type-58" },
{ "id": "BT29", "image": "details.png", "targetScreen": "BTJ", "buttonType": "button-type-59" },
{ "id": "BT30", "image": "details.png", "targetScreen": "BTK", "buttonType": "button-type-60" },
{ "id": "BT31", "image": "details.png", "targetScreen": "BTL", "buttonType": "button-type-61" },
{ "id": "BT32", "image": "details.png", "targetScreen": "BTM", "buttonType": "button-type-62" }



],

// instandhaltHydraulik2.1

'BTA':[	


{ "id": "BTA1", "image": "maschineBQ.png", "targetScreen": "BO", "buttonType": "button-type-1" },
{ "id": "BTA2", "image": "antriebe.png", "targetScreen": "BL", "buttonType": "button-type-2" },
{ "id": "BTA3", "image": "atcapc.png", "targetScreen": "BR", "buttonType": "button-type-3" },
{ "id": "BTA4", "image": "hydraulik1.png", "targetScreen": "BS", "buttonType": "button-type-4" },
{ "id": "BTA5", "image": "zahlerdetails.png", "targetScreen": "BTA", "buttonType": "button-type-5" },
{ "id": "BTA6", "image": "pneumatik1.png", "targetScreen": "BU", "buttonType": "button-type-6" },
{ "id": "BTA7", "image": "pneumatik2.png", "targetScreen": "BV", "buttonType": "button-type-7" },
{ "id": "BTA8", "image": "leer.png", "targetScreen": "BN", "buttonType": "button-type-8" },
{ "id": "BTA9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
{ "id": "BTA10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
{ "id": "BTA11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
{ "id": "BTA12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
{ "id": "BTA13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
{ "id": "BTA14", "image": "prozess.png", "targetScreen": "BK", "buttonType": "button-type-14" },
{ "id": "BTA15", "image": "instandhaltMaschine.png", "targetScreen": "AL", "buttonType": "button-type-15" },
{ "id": "BTA16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
{ "id": "BTA17", "image": "bbbutton.png", "targetScreen": "AL", "buttonType": "button-type-17" },
{ "id": "BTA18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
{ "id": "BTA19", "image": "bildSchließen.png", "targetScreen": "BT", "buttonType": "button-type-63" }


],

// instandhaltHydraulik2.2


'BTB':[	
{ "id": "BTB1", "image": "maschineBQ.png", "targetScreen": "BO", "buttonType": "button-type-1" },
{ "id": "BTB2", "image": "antriebe.png", "targetScreen": "BL", "buttonType": "button-type-2" },
{ "id": "BTB3", "image": "atcapc.png", "targetScreen": "BR", "buttonType": "button-type-3" },
{ "id": "BTB4", "image": "hydraulik1.png", "targetScreen": "BS", "buttonType": "button-type-4" },
{ "id": "BTB5", "image": "zahlerdetails.png", "targetScreen": "BTA", "buttonType": "button-type-5" },
{ "id": "BTB6", "image": "pneumatik1.png", "targetScreen": "BU", "buttonType": "button-type-6" },
{ "id": "BTB7", "image": "pneumatik2.png", "targetScreen": "BV", "buttonType": "button-type-7" },
{ "id": "BTB8", "image": "leer.png", "targetScreen": "BN", "buttonType": "button-type-8" },
{ "id": "BTB9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
{ "id": "BTB10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
{ "id": "BTB11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
{ "id": "BTB12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
{ "id": "BTB13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
{ "id": "BTB14", "image": "prozess.png", "targetScreen": "BK", "buttonType": "button-type-14" },
{ "id": "BTB15", "image": "instandhaltMaschine.png", "targetScreen": "AL", "buttonType": "button-type-15" },
{ "id": "BTB16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
{ "id": "BTB17", "image": "bbbutton.png", "targetScreen": "AL", "buttonType": "button-type-17" },
{ "id": "BTB18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
{ "id": "BTB19", "image": "bildSchließen.png", "targetScreen": "BT", "buttonType": "button-type-63" }




],


// instandhaltHydraulik2.3

'BTC':[	
{ "id": "BTC1", "image": "maschineBQ.png", "targetScreen": "BO", "buttonType": "button-type-1" },
{ "id": "BTC2", "image": "antriebe.png", "targetScreen": "BL", "buttonType": "button-type-2" },
{ "id": "BTC3", "image": "atcapc.png", "targetScreen": "BR", "buttonType": "button-type-3" },
{ "id": "BTC4", "image": "hydraulik1.png", "targetScreen": "BS", "buttonType": "button-type-4" },
{ "id": "BTC5", "image": "zahlerdetails.png", "targetScreen": "BTA", "buttonType": "button-type-5" },
{ "id": "BTC6", "image": "pneumatik1.png", "targetScreen": "BU", "buttonType": "button-type-6" },
{ "id": "BTC7", "image": "pneumatik2.png", "targetScreen": "BV", "buttonType": "button-type-7" },
{ "id": "BTC8", "image": "leer.png", "targetScreen": "BN", "buttonType": "button-type-8" },
{ "id": "BTC9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
{ "id": "BTC10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
{ "id": "BTC11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
{ "id": "BTC12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
{ "id": "BTC13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
{ "id": "BTC14", "image": "prozess.png", "targetScreen": "BK", "buttonType": "button-type-14" },
{ "id": "BTC15", "image": "instandhaltMaschine.png", "targetScreen": "AL", "buttonType": "button-type-15" },
{ "id": "BTC16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
{ "id": "BTC17", "image": "bbbutton.png", "targetScreen": "AL", "buttonType": "button-type-17" },
{ "id": "BTC18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
{ "id": "BTC19", "image": "bildSchließen.png", "targetScreen": "BT", "buttonType": "button-type-63" }

],




// instandhaltHydraulik2.4


'BTD':[	
{ "id": "BTD1", "image": "maschineBQ.png", "targetScreen": "BO", "buttonType": "button-type-1" },
{ "id": "BTD2", "image": "antriebe.png", "targetScreen": "BL", "buttonType": "button-type-2" },
{ "id": "BTD3", "image": "atcapc.png", "targetScreen": "BR", "buttonType": "button-type-3" },
{ "id": "BTD4", "image": "hydraulik1.png", "targetScreen": "BS", "buttonType": "button-type-4" },
{ "id": "BTD5", "image": "zahlerdetails.png", "targetScreen": "BTA", "buttonType": "button-type-5" },
{ "id": "BTD6", "image": "pneumatik1.png", "targetScreen": "BU", "buttonType": "button-type-6" },
{ "id": "BTD7", "image": "pneumatik2.png", "targetScreen": "BV", "buttonType": "button-type-7" },
{ "id": "BTD8", "image": "leer.png", "targetScreen": "BN", "buttonType": "button-type-8" },
{ "id": "BTD9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
{ "id": "BTD10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
{ "id": "BTD11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
{ "id": "BTD12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
{ "id": "BTD13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
{ "id": "BTD14", "image": "prozess.png", "targetScreen": "BK", "buttonType": "button-type-14" },
{ "id": "BTD15", "image": "instandhaltMaschine.png", "targetScreen": "AL", "buttonType": "button-type-15" },
{ "id": "BTD16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
{ "id": "BTD17", "image": "bbbutton.png", "targetScreen": "AL", "buttonType": "button-type-17" },
{ "id": "BTD18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
{ "id": "BTD19", "image": "bildSchließen.png", "targetScreen": "BT", "buttonType": "button-type-63" }

],



// instandhaltHydraulik2.5


'BTE':[	

{ "id": "BTE1", "image": "maschineBQ.png", "targetScreen": "BO", "buttonType": "button-type-1" },
{ "id": "BTE2", "image": "antriebe.png", "targetScreen": "BL", "buttonType": "button-type-2" },
{ "id": "BTE3", "image": "atcapc.png", "targetScreen": "BR", "buttonType": "button-type-3" },
{ "id": "BTE4", "image": "hydraulik1.png", "targetScreen": "BS", "buttonType": "button-type-4" },
{ "id": "BTE5", "image": "zahlerdetails.png", "targetScreen": "BTA", "buttonType": "button-type-5" },
{ "id": "BTE6", "image": "pneumatik1.png", "targetScreen": "BU", "buttonType": "button-type-6" },
{ "id": "BTE7", "image": "pneumatik2.png", "targetScreen": "BV", "buttonType": "button-type-7" },
{ "id": "BTE8", "image": "leer.png", "targetScreen": "BN", "buttonType": "button-type-8" },
{ "id": "BTE9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
{ "id": "BTE10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
{ "id": "BTE11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
{ "id": "BTE12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
{ "id": "BTE13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
{ "id": "BTE14", "image": "prozess.png", "targetScreen": "BK", "buttonType": "button-type-14" },
{ "id": "BTE15", "image": "instandhaltMaschine.png", "targetScreen": "AL", "buttonType": "button-type-15" },
{ "id": "BTE16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
{ "id": "BTE17", "image": "bbbutton.png", "targetScreen": "AL", "buttonType": "button-type-17" },
{ "id": "BTE18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
{ "id": "BTE19", "image": "bildSchließen.png", "targetScreen": "BT", "buttonType": "button-type-63" }


],


// instandhaltHydraulik2.6

'BTF':[	
{ "id": "BTF1", "image": "maschineBQ.png", "targetScreen": "BO", "buttonType": "button-type-1" },
{ "id": "BTF2", "image": "antriebe.png", "targetScreen": "BL", "buttonType": "button-type-2" },
{ "id": "BTF3", "image": "atcapc.png", "targetScreen": "BR", "buttonType": "button-type-3" },
{ "id": "BTF4", "image": "hydraulik1.png", "targetScreen": "BS", "buttonType": "button-type-4" },
{ "id": "BTF5", "image": "zahlerdetails.png", "targetScreen": "BTA", "buttonType": "button-type-5" },
{ "id": "BTF6", "image": "pneumatik1.png", "targetScreen": "BU", "buttonType": "button-type-6" },
{ "id": "BTF7", "image": "pneumatik2.png", "targetScreen": "BV", "buttonType": "button-type-7" },
{ "id": "BTF8", "image": "leer.png", "targetScreen": "BN", "buttonType": "button-type-8" },
{ "id": "BTF9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
{ "id": "BTF10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
{ "id": "BTF11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
{ "id": "BTF12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
{ "id": "BTF13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
{ "id": "BTF14", "image": "prozess.png", "targetScreen": "BK", "buttonType": "button-type-14" },
{ "id": "BTF15", "image": "instandhaltMaschine.png", "targetScreen": "AL", "buttonType": "button-type-15" },
{ "id": "BTF16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
{ "id": "BTF17", "image": "bbbutton.png", "targetScreen": "AL", "buttonType": "button-type-17" },
{ "id": "BTF18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
{ "id": "BTF19", "image": "bildSchließen.png", "targetScreen": "BT", "buttonType": "button-type-63" }

],


// instandhaltHydraulik2.7


'BTG':[	
{ "id": "BTG1", "image": "maschineBQ.png", "targetScreen": "BO", "buttonType": "button-type-1" },
{ "id": "BTG2", "image": "antriebe.png", "targetScreen": "BL", "buttonType": "button-type-2" },
{ "id": "BTG3", "image": "atcapc.png", "targetScreen": "BR", "buttonType": "button-type-3" },
{ "id": "BTG4", "image": "hydraulik1.png", "targetScreen": "BS", "buttonType": "button-type-4" },
{ "id": "BTG5", "image": "zahlerdetails.png", "targetScreen": "BTA", "buttonType": "button-type-5" },
{ "id": "BTG6", "image": "pneumatik1.png", "targetScreen": "BU", "buttonType": "button-type-6" },
{ "id": "BTG7", "image": "pneumatik2.png", "targetScreen": "BV", "buttonType": "button-type-7" },
{ "id": "BTG8", "image": "leer.png", "targetScreen": "BN", "buttonType": "button-type-8" },
{ "id": "BTG9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
{ "id": "BTG10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
{ "id": "BTG11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
{ "id": "BTG12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
{ "id": "BTG13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
{ "id": "BTG14", "image": "prozess.png", "targetScreen": "BK", "buttonType": "button-type-14" },
{ "id": "BTG15", "image": "instandhaltMaschine.png", "targetScreen": "AL", "buttonType": "button-type-15" },
{ "id": "BTG16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
{ "id": "BTG17", "image": "bbbutton.png", "targetScreen": "AL", "buttonType": "button-type-17" },
{ "id": "BTG18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
{ "id": "BTG19", "image": "bildSchließen.png", "targetScreen": "BT", "buttonType": "button-type-63" }

],


// instandhaltHydraulik2.8


'BTH':[	

{ "id": "BTH1", "image": "maschineBQ.png", "targetScreen": "BO", "buttonType": "button-type-1" },
{ "id": "BTH2", "image": "antriebe.png", "targetScreen": "BL", "buttonType": "button-type-2" },
{ "id": "BTH3", "image": "atcapc.png", "targetScreen": "BR", "buttonType": "button-type-3" },
{ "id": "BTH4", "image": "hydraulik1.png", "targetScreen": "BS", "buttonType": "button-type-4" },
{ "id": "BTH5", "image": "zahlerdetails.png", "targetScreen": "BTA", "buttonType": "button-type-5" },
{ "id": "BTH6", "image": "pneumatik1.png", "targetScreen": "BU", "buttonType": "button-type-6" },
{ "id": "BTH7", "image": "pneumatik2.png", "targetScreen": "BV", "buttonType": "button-type-7" },
{ "id": "BTH8", "image": "leer.png", "targetScreen": "BN", "buttonType": "button-type-8" },
{ "id": "BTH9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
{ "id": "BTH10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
{ "id": "BTH11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
{ "id": "BTH12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
{ "id": "BTH13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
{ "id": "BTH14", "image": "prozess.png", "targetScreen": "BK", "buttonType": "button-type-14" },
{ "id": "BTH15", "image": "instandhaltMaschine.png", "targetScreen": "AL", "buttonType": "button-type-15" },
{ "id": "BTH16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
{ "id": "BTH17", "image": "bbbutton.png", "targetScreen": "AL", "buttonType": "button-type-17" },
{ "id": "BTH18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
{ "id": "BTH19", "image": "bildSchließen.png", "targetScreen": "BT", "buttonType": "button-type-63" }

],


// instandhaltHydraulik2.9



'BTCH':[	

{ "id": "BTCH1", "image": "maschineBQ.png", "targetScreen": "BO", "buttonType": "button-type-1" },
{ "id": "BTCH2", "image": "antriebe.png", "targetScreen": "BL", "buttonType": "button-type-2" },
{ "id": "BTCH3", "image": "atcapc.png", "targetScreen": "BR", "buttonType": "button-type-3" },
{ "id": "BTCH4", "image": "hydraulik1.png", "targetScreen": "BS", "buttonType": "button-type-4" },
{ "id": "BTCH5", "image": "zahlerdetails.png", "targetScreen": "BTA", "buttonType": "button-type-5" },
{ "id": "BTCH6", "image": "pneumatik1.png", "targetScreen": "BU", "buttonType": "button-type-6" },
{ "id": "BTCH7", "image": "pneumatik2.png", "targetScreen": "BV", "buttonType": "button-type-7" },
{ "id": "BTCH8", "image": "leer.png", "targetScreen": "BN", "buttonType": "button-type-8" },
{ "id": "BTCH9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
{ "id": "BTCH10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
{ "id": "BTCH11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
{ "id": "BTCH12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
{ "id": "BTCH13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
{ "id": "BTCH14", "image": "prozess.png", "targetScreen": "BK", "buttonType": "button-type-14" },
{ "id": "BTCH15", "image": "instandhaltMaschine.png", "targetScreen": "AL", "buttonType": "button-type-15" },
{ "id": "BTCH16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
{ "id": "BTCH17", "image": "bbbutton.png", "targetScreen": "AL", "buttonType": "button-type-17" },
{ "id": "BTCH18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
{ "id": "BTCH19", "image": "bildSchließen.png", "targetScreen": "BT", "buttonType": "button-type-63" }

],


// instandhaltHydraulik2.10

'BTI':[	

{ "id": "BTI1", "image": "maschineBQ.png", "targetScreen": "BO", "buttonType": "button-type-1" },
{ "id": "BTI2", "image": "antriebe.png", "targetScreen": "BL", "buttonType": "button-type-2" },
{ "id": "BTI3", "image": "atcapc.png", "targetScreen": "BR", "buttonType": "button-type-3" },
{ "id": "BTI4", "image": "hydraulik1.png", "targetScreen": "BS", "buttonType": "button-type-4" },
{ "id": "BTI5", "image": "zahlerdetails.png", "targetScreen": "BTA", "buttonType": "button-type-5" },
{ "id": "BTI6", "image": "pneumatik1.png", "targetScreen": "BU", "buttonType": "button-type-6" },
{ "id": "BTI7", "image": "pneumatik2.png", "targetScreen": "BV", "buttonType": "button-type-7" },
{ "id": "BTI8", "image": "leer.png", "targetScreen": "BN", "buttonType": "button-type-8" },
{ "id": "BTI9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
{ "id": "BTI10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
{ "id": "BTI11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
{ "id": "BTI12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
{ "id": "BTI13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
{ "id": "BTI14", "image": "prozess.png", "targetScreen": "BK", "buttonType": "button-type-14" },
{ "id": "BTI15", "image": "instandhaltMaschine.png", "targetScreen": "AL", "buttonType": "button-type-15" },
{ "id": "BTI16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
{ "id": "BTI17", "image": "bbbutton.png", "targetScreen": "AL", "buttonType": "button-type-17" },
{ "id": "BTI18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
{ "id": "BTI19", "image": "bildSchließen.png", "targetScreen": "BT", "buttonType": "button-type-63" }

],


// instandhaltHydraulik2.11


'BTJ':[	

{ "id": "BTJ1", "image": "maschineBQ.png", "targetScreen": "BO", "buttonType": "button-type-1" },
{ "id": "BTJ2", "image": "antriebe.png", "targetScreen": "BL", "buttonType": "button-type-2" },
{ "id": "BTJ3", "image": "atcapc.png", "targetScreen": "BR", "buttonType": "button-type-3" },
{ "id": "BTJ4", "image": "hydraulik1.png", "targetScreen": "BS", "buttonType": "button-type-4" },
{ "id": "BTJ5", "image": "zahlerdetails.png", "targetScreen": "BTA", "buttonType": "button-type-5" },
{ "id": "BTJ6", "image": "pneumatik1.png", "targetScreen": "BU", "buttonType": "button-type-6" },
{ "id": "BTJ7", "image": "pneumatik2.png", "targetScreen": "BV", "buttonType": "button-type-7" },
{ "id": "BTJ8", "image": "leer.png", "targetScreen": "BN", "buttonType": "button-type-8" },
{ "id": "BTJ9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
{ "id": "BTJ10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
{ "id": "BTJ11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
{ "id": "BTJ12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
{ "id": "BTJ13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
{ "id": "BTJ14", "image": "prozess.png", "targetScreen": "BK", "buttonType": "button-type-14" },
{ "id": "BTJ15", "image": "instandhaltMaschine.png", "targetScreen": "AL", "buttonType": "button-type-15" },
{ "id": "BTJ16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
{ "id": "BTJ17", "image": "bbbutton.png", "targetScreen": "AL", "buttonType": "button-type-17" },
{ "id": "BTJ18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
{ "id": "BTJ19", "image": "bildSchließen.png", "targetScreen": "BT", "buttonType": "button-type-63" }

],


// instandhaltHydraulik2.12

'BTK':[	
{ "id": "BTK1", "image": "maschineBQ.png", "targetScreen": "BO", "buttonType": "button-type-1" },
{ "id": "BTK2", "image": "antriebe.png", "targetScreen": "BL", "buttonType": "button-type-2" },
{ "id": "BTK3", "image": "atcapc.png", "targetScreen": "BR", "buttonType": "button-type-3" },
{ "id": "BTK4", "image": "hydraulik1.png", "targetScreen": "BS", "buttonType": "button-type-4" },
{ "id": "BTK5", "image": "zahlerdetails.png", "targetScreen": "BTA", "buttonType": "button-type-5" },
{ "id": "BTK6", "image": "pneumatik1.png", "targetScreen": "BU", "buttonType": "button-type-6" },
{ "id": "BTK7", "image": "pneumatik2.png", "targetScreen": "BV", "buttonType": "button-type-7" },
{ "id": "BTK8", "image": "leer.png", "targetScreen": "BN", "buttonType": "button-type-8" },
{ "id": "BTK9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
{ "id": "BTK10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
{ "id": "BTK11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
{ "id": "BTK12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
{ "id": "BTK13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
{ "id": "BTK14", "image": "prozess.png", "targetScreen": "BK", "buttonType": "button-type-14" },
{ "id": "BTK15", "image": "instandhaltMaschine.png", "targetScreen": "AL", "buttonType": "button-type-15" },
{ "id": "BTK16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
{ "id": "BTK17", "image": "bbbutton.png", "targetScreen": "AL", "buttonType": "button-type-17" },
{ "id": "BTK18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
{ "id": "BTK19", "image": "bildSchließen.png", "targetScreen": "BT", "buttonType": "button-type-63" },

],



// instandhaltHydraulik2.13



'BTL':[	

{ "id": "BTL1", "image": "maschineBQ.png", "targetScreen": "BO", "buttonType": "button-type-1" },
{ "id": "BTL2", "image": "antriebe.png", "targetScreen": "BL", "buttonType": "button-type-2" },
{ "id": "BTL3", "image": "atcapc.png", "targetScreen": "BR", "buttonType": "button-type-3" },
{ "id": "BTL4", "image": "hydraulik1.png", "targetScreen": "BS", "buttonType": "button-type-4" },
{ "id": "BTL5", "image": "zahlerdetails.png", "targetScreen": "BTA", "buttonType": "button-type-5" },
{ "id": "BTL6", "image": "pneumatik1.png", "targetScreen": "BU", "buttonType": "button-type-6" },
{ "id": "BTL7", "image": "pneumatik2.png", "targetScreen": "BV", "buttonType": "button-type-7" },
{ "id": "BTL8", "image": "leer.png", "targetScreen": "BN", "buttonType": "button-type-8" },
{ "id": "BTL9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
{ "id": "BTL10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
{ "id": "BTL11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
{ "id": "BTL12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
{ "id": "BTL13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
{ "id": "BTL14", "image": "prozess.png", "targetScreen": "BK", "buttonType": "button-type-14" },
{ "id": "BTL15", "image": "instandhaltMaschine.png", "targetScreen": "AL", "buttonType": "button-type-15" },
{ "id": "BTL16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
{ "id": "BTL17", "image": "bbbutton.png", "targetScreen": "AL", "buttonType": "button-type-17" },
{ "id": "BTL18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
{ "id": "BTL19", "image": "bildSchließen.png", "targetScreen": "BT", "buttonType": "button-type-63" },

],

// instandhaltHydraulik2.14


'BTM':[	




{ "id": "BTM1", "image": "maschineBQ.png", "targetScreen": "BO", "buttonType": "button-type-1" },
{ "id": "BTM2", "image": "antriebe.png", "targetScreen": "BL", "buttonType": "button-type-2" },
{ "id": "BTM3", "image": "atcapc.png", "targetScreen": "BR", "buttonType": "button-type-3" },
{ "id": "BTM4", "image": "hydraulik1.png", "targetScreen": "BS", "buttonType": "button-type-4" },
{ "id": "BTM5", "image": "zahlerdetails.png", "targetScreen": "BTA", "buttonType": "button-type-5" },
{ "id": "BTM6", "image": "pneumatik1.png", "targetScreen": "BU", "buttonType": "button-type-6" },
{ "id": "BTM7", "image": "pneumatik2.png", "targetScreen": "BV", "buttonType": "button-type-7" },
{ "id": "BTM8", "image": "leer.png", "targetScreen": "BN", "buttonType": "button-type-8" },
{ "id": "BTM9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
{ "id": "BTM10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
{ "id": "BTM11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
{ "id": "BTM12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
{ "id": "BTM13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
{ "id": "BTM14", "image": "prozess.png", "targetScreen": "BK", "buttonType": "button-type-14" },
{ "id": "BTM15", "image": "instandhaltMaschine.png", "targetScreen": "AL", "buttonType": "button-type-15" },
{ "id": "BTM16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
{ "id": "BTM17", "image": "bbbutton.png", "targetScreen": "AL", "buttonType": "button-type-17" },
{ "id": "BTM18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
{ "id": "BTM19", "image": "bildSchließen.png", "targetScreen": "BT", "buttonType": "button-type-63" } 


],





// instandhaltPneumatik1





'BU':[	


{ "id": "BU1", "image": "maschineBQ.png", "targetScreen": "BO", "buttonType": "button-type-1" },
{ "id": "BU2", "image": "antriebe.png", "targetScreen": "BL", "buttonType": "button-type-2" },
{ "id": "BU3", "image": "atcapc.png", "targetScreen": "BR", "buttonType": "button-type-3" },
{ "id": "BU4", "image": "hydraulik1.png", "targetScreen": "BS", "buttonType": "button-type-4" },
{ "id": "BU5", "image": "hydraulik2.png", "targetScreen": "BT", "buttonType": "button-type-5" },
{ "id": "BU6", "image": "pneumatik1BU.png", "targetScreen": "BU", "buttonType": "button-type-6" },
{ "id": "BU7", "image": "pneumatik2.png", "targetScreen": "BV", "buttonType": "button-type-7" },
{ "id": "BU8", "image": "leer.png", "targetScreen": "BN", "buttonType": "button-type-8" },
{ "id": "BU9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
{ "id": "BU10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
{ "id": "BU11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
{ "id": "BU12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
{ "id": "BU13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
{ "id": "BU14", "image": "prozess.png", "targetScreen": "BK", "buttonType": "button-type-14" },
{ "id": "BU15", "image": "instandhaltMaschine.png", "targetScreen": "AL", "buttonType": "button-type-15" },
{ "id": "BU16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
{ "id": "BU17", "image": "bbbutton.png", "targetScreen": "AL", "buttonType": "button-type-17" },
{ "id": "BU18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
{ "id": "BU19", "image": "details.png", "targetScreen": "BUA", "buttonType": "button-type-49" },
{ "id": "BU20", "image": "details.png", "targetScreen": "BUB", "buttonType": "button-type-50" },
{ "id": "BU21", "image": "details.png", "targetScreen": "BUC", "buttonType": "button-type-51" },
{ "id": "BU22", "image": "details.png", "targetScreen": "BUD", "buttonType": "button-type-52" },
{ "id": "BU23", "image": "details.png", "targetScreen": "BUE", "buttonType": "button-type-53" },
{ "id": "BU24", "image": "details.png", "targetScreen": "BUF", "buttonType": "button-type-54" },
{ "id": "BU25", "image": "details.png", "targetScreen": "BUG", "buttonType": "button-type-55" },
{ "id": "BU26", "image": "details.png", "targetScreen": "BUH", "buttonType": "button-type-56" },
{ "id": "BU27", "image": "details.png", "targetScreen": "BUCH", "buttonType": "button-type-57" },
{ "id": "BU28", "image": "details.png", "targetScreen": "BUI", "buttonType": "button-type-58" },
{ "id": "BU29", "image": "details.png", "targetScreen": "BUJ", "buttonType": "button-type-59" },
{ "id": "BU30", "image": "details.png", "targetScreen": "BUK", "buttonType": "button-type-60" },
{ "id": "BU31", "image": "details.png", "targetScreen": "BUL", "buttonType": "button-type-61" },
{ "id": "BU32", "image": "details.png", "targetScreen": "BUM", "buttonType": "button-type-62" }

],

// instandhaltPneumatik1.1


'BUA':[	


{ "id": "BUA1", "image": "maschineBQ.png", "targetScreen": "BO", "buttonType": "button-type-1" },
{ "id": "BUA2", "image": "antriebe.png", "targetScreen": "BL", "buttonType": "button-type-2" },
{ "id": "BUA3", "image": "atcapc.png", "targetScreen": "BR", "buttonType": "button-type-3" },
{ "id": "BUA4", "image": "hydraulik1.png", "targetScreen": "BS", "buttonType": "button-type-4" },
{ "id": "BUA5", "image": "hydraulik2.png", "targetScreen": "BT", "buttonType": "button-type-5" },
{ "id": "BUA6", "image": "zahlerdetails.png", "targetScreen": "BU", "buttonType": "button-type-6" },
{ "id": "BUA7", "image": "pneumatik2.png", "targetScreen": "BV", "buttonType": "button-type-7" },
{ "id": "BUA8", "image": "leer.png", "targetScreen": "BN", "buttonType": "button-type-8" },
{ "id": "BUA9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
{ "id": "BUA10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
{ "id": "BUA11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
{ "id": "BUA12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
{ "id": "BUA13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
{ "id": "BUA14", "image": "prozess.png", "targetScreen": "BK", "buttonType": "button-type-14" },
{ "id": "BUA15", "image": "instandhaltMaschine.png", "targetScreen": "AL", "buttonType": "button-type-15" },
{ "id": "BUA16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
{ "id": "BUA17", "image": "bbbutton.png", "targetScreen": "AL", "buttonType": "button-type-17" },
{ "id": "BUA18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
{ "id": "BUA19", "image": "bildSchließen.png", "targetScreen": "BU", "buttonType": "button-type-63" } 




],

// instandhaltPneumatik1.2

'BUB':[	

{ "id": "BUB1", "image": "maschineBQ.png", "targetScreen": "BO", "buttonType": "button-type-1" },
{ "id": "BUB2", "image": "antriebe.png", "targetScreen": "BL", "buttonType": "button-type-2" },
{ "id": "BUB3", "image": "atcapc.png", "targetScreen": "BR", "buttonType": "button-type-3" },
{ "id": "BUB4", "image": "hydraulik1.png", "targetScreen": "BS", "buttonType": "button-type-4" },
{ "id": "BUB5", "image": "hydraulik2.png", "targetScreen": "BT", "buttonType": "button-type-5" },
{ "id": "BUB6", "image": "zahlerdetails.png", "targetScreen": "BU", "buttonType": "button-type-6" },
{ "id": "BUB7", "image": "pneumatik2.png", "targetScreen": "BV", "buttonType": "button-type-7" },
{ "id": "BUB8", "image": "leer.png", "targetScreen": "BN", "buttonType": "button-type-8" },
{ "id": "BUB9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
{ "id": "BUB10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
{ "id": "BUB11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
{ "id": "BUB12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
{ "id": "BUB13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
{ "id": "BUB14", "image": "prozess.png", "targetScreen": "BK", "buttonType": "button-type-14" },
{ "id": "BUB15", "image": "instandhaltMaschine.png", "targetScreen": "AL", "buttonType": "button-type-15" },
{ "id": "BUB16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
{ "id": "BUB17", "image": "bbbutton.png", "targetScreen": "AL", "buttonType": "button-type-17" },
{ "id": "BUB18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
{ "id": "BUB19", "image": "bildSchließen.png", "targetScreen": "BU", "buttonType": "button-type-63" }


],


// instandhaltPneumatik1.3

'BUC':[	

{ "id": "BUC1", "image": "maschineBQ.png", "targetScreen": "BO", "buttonType": "button-type-1" },
{ "id": "BUC2", "image": "antriebe.png", "targetScreen": "BL", "buttonType": "button-type-2" },
{ "id": "BUC3", "image": "atcapc.png", "targetScreen": "BR", "buttonType": "button-type-3" },
{ "id": "BUC4", "image": "hydraulik1.png", "targetScreen": "BS", "buttonType": "button-type-4" },
{ "id": "BUC5", "image": "hydraulik2.png", "targetScreen": "BT", "buttonType": "button-type-5" },
{ "id": "BUC6", "image": "zahlerdetails.png", "targetScreen": "BU", "buttonType": "button-type-6" },
{ "id": "BUC7", "image": "pneumatik2.png", "targetScreen": "BV", "buttonType": "button-type-7" },
{ "id": "BUC8", "image": "leer.png", "targetScreen": "BN", "buttonType": "button-type-8" },
{ "id": "BUC9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
{ "id": "BUC10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
{ "id": "BUC11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
{ "id": "BUC12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
{ "id": "BUC13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
{ "id": "BUC14", "image": "prozess.png", "targetScreen": "BK", "buttonType": "button-type-14" },
{ "id": "BUC15", "image": "instandhaltMaschine.png", "targetScreen": "AL", "buttonType": "button-type-15" },
{ "id": "BUC16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
{ "id": "BUC17", "image": "bbbutton.png", "targetScreen": "AL", "buttonType": "button-type-17" },
{ "id": "BUC18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
{ "id": "BUC19", "image": "bildSchließen.png", "targetScreen": "BU", "buttonType": "button-type-63" }



],



// instandhaltPneumatik1.4

'BUD':[	




{ "id": "BUD1", "image": "maschineBQ.png", "targetScreen": "BO", "buttonType": "button-type-1" },
{ "id": "BUD2", "image": "antriebe.png", "targetScreen": "BL", "buttonType": "button-type-2" },
{ "id": "BUD3", "image": "atcapc.png", "targetScreen": "BR", "buttonType": "button-type-3" },
{ "id": "BUD4", "image": "hydraulik1.png", "targetScreen": "BS", "buttonType": "button-type-4" },
{ "id": "BUD5", "image": "hydraulik2.png", "targetScreen": "BT", "buttonType": "button-type-5" },
{ "id": "BUD6", "image": "zahlerdetails.png", "targetScreen": "BU", "buttonType": "button-type-6" },
{ "id": "BUD7", "image": "pneumatik2.png", "targetScreen": "BV", "buttonType": "button-type-7" },
{ "id": "BUD8", "image": "leer.png", "targetScreen": "BN", "buttonType": "button-type-8" },
{ "id": "BUD9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
{ "id": "BUD10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
{ "id": "BUD11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
{ "id": "BUD12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
{ "id": "BUD13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
{ "id": "BUD14", "image": "prozess.png", "targetScreen": "BK", "buttonType": "button-type-14" },
{ "id": "BUD15", "image": "instandhaltMaschine.png", "targetScreen": "AL", "buttonType": "button-type-15" },
{ "id": "BUD16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
{ "id": "BUD17", "image": "bbbutton.png", "targetScreen": "AL", "buttonType": "button-type-17" },
{ "id": "BUD18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
{ "id": "BUD19", "image": "bildSchließen.png", "targetScreen": "BU", "buttonType": "button-type-63" }


],



// instandhaltPneumatik1.5

'BUE':[	



{ "id": "BUE1", "image": "maschineBQ.png", "targetScreen": "BO", "buttonType": "button-type-1" },
{ "id": "BUE2", "image": "antriebe.png", "targetScreen": "BL", "buttonType": "button-type-2" },
{ "id": "BUE3", "image": "atcapc.png", "targetScreen": "BR", "buttonType": "button-type-3" },
{ "id": "BUE4", "image": "hydraulik1.png", "targetScreen": "BS", "buttonType": "button-type-4" },
{ "id": "BUE5", "image": "hydraulik2.png", "targetScreen": "BT", "buttonType": "button-type-5" },
{ "id": "BUE6", "image": "zahlerdetails.png", "targetScreen": "BU", "buttonType": "button-type-6" },
{ "id": "BUE7", "image": "pneumatik2.png", "targetScreen": "BV", "buttonType": "button-type-7" },
{ "id": "BUE8", "image": "leer.png", "targetScreen": "BN", "buttonType": "button-type-8" },
{ "id": "BUE9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
{ "id": "BUE10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
{ "id": "BUE11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
{ "id": "BUE12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
{ "id": "BUE13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
{ "id": "BUE14", "image": "prozess.png", "targetScreen": "BK", "buttonType": "button-type-14" },
{ "id": "BUE15", "image": "instandhaltMaschine.png", "targetScreen": "AL", "buttonType": "button-type-15" },
{ "id": "BUE16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
{ "id": "BUE17", "image": "bbbutton.png", "targetScreen": "AL", "buttonType": "button-type-17" },
{ "id": "BUE18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
{ "id": "BUE19", "image": "bildSchließen.png", "targetScreen": "BU", "buttonType": "button-type-63" }







],


// instandhaltPneumatik1.6

'BUF':[	

{ "id": "BUF1", "image": "maschineBQ.png", "targetScreen": "BO", "buttonType": "button-type-1" },
{ "id": "BUF2", "image": "antriebe.png", "targetScreen": "BL", "buttonType": "button-type-2" },
{ "id": "BUF3", "image": "atcapc.png", "targetScreen": "BR", "buttonType": "button-type-3" },
{ "id": "BUF4", "image": "hydraulik1.png", "targetScreen": "BS", "buttonType": "button-type-4" },
{ "id": "BUF5", "image": "hydraulik2.png", "targetScreen": "BT", "buttonType": "button-type-5" },
{ "id": "BUF6", "image": "zahlerdetails.png", "targetScreen": "BU", "buttonType": "button-type-6" },
{ "id": "BUF7", "image": "pneumatik2.png", "targetScreen": "BV", "buttonType": "button-type-7" },
{ "id": "BUF8", "image": "leer.png", "targetScreen": "BN", "buttonType": "button-type-8" },
{ "id": "BUF9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
{ "id": "BUF10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
{ "id": "BUF11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
{ "id": "BUF12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
{ "id": "BUF13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
{ "id": "BUF14", "image": "prozess.png", "targetScreen": "BK", "buttonType": "button-type-14" },
{ "id": "BUF15", "image": "instandhaltMaschine.png", "targetScreen": "AL", "buttonType": "button-type-15" },
{ "id": "BUF16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
{ "id": "BUF17", "image": "bbbutton.png", "targetScreen": "AL", "buttonType": "button-type-17" },
{ "id": "BUF18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
{ "id": "BUF19", "image": "bildSchließen.png", "targetScreen": "BU", "buttonType": "button-type-63" }



],


// instandhaltPneumatik1.7

'BUG':[	


{ "id": "BUG1", "image": "maschineBQ.png", "targetScreen": "BO", "buttonType": "button-type-1" },
{ "id": "BUG2", "image": "antriebe.png", "targetScreen": "BL", "buttonType": "button-type-2" },
{ "id": "BUG3", "image": "atcapc.png", "targetScreen": "BR", "buttonType": "button-type-3" },
{ "id": "BUG4", "image": "hydraulik1.png", "targetScreen": "BS", "buttonType": "button-type-4" },
{ "id": "BUG5", "image": "hydraulik2.png", "targetScreen": "BT", "buttonType": "button-type-5" },
{ "id": "BUG6", "image": "zahlerdetails.png", "targetScreen": "BU", "buttonType": "button-type-6" },
{ "id": "BUG7", "image": "pneumatik2.png", "targetScreen": "BV", "buttonType": "button-type-7" },
{ "id": "BUG8", "image": "leer.png", "targetScreen": "BN", "buttonType": "button-type-8" },
{ "id": "BUG9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
{ "id": "BUG10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
{ "id": "BUG11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
{ "id": "BUG12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
{ "id": "BUG13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
{ "id": "BUG14", "image": "prozess.png", "targetScreen": "BK", "buttonType": "button-type-14" },
{ "id": "BUG15", "image": "instandhaltMaschine.png", "targetScreen": "AL", "buttonType": "button-type-15" },
{ "id": "BUG16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
{ "id": "BUG17", "image": "bbbutton.png", "targetScreen": "AL", "buttonType": "button-type-17" },
{ "id": "BUG18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
{ "id": "BUG19", "image": "bildSchließen.png", "targetScreen": "BU", "buttonType": "button-type-63" }





],

// instandhaltPneumatik1.8

'BUH':[	



{ "id": "BUH1", "image": "maschineBQ.png", "targetScreen": "BO", "buttonType": "button-type-1" },
{ "id": "BUH2", "image": "antriebe.png", "targetScreen": "BL", "buttonType": "button-type-2" },
{ "id": "BUH3", "image": "atcapc.png", "targetScreen": "BR", "buttonType": "button-type-3" },
{ "id": "BUH4", "image": "hydraulik1.png", "targetScreen": "BS", "buttonType": "button-type-4" },
{ "id": "BUH5", "image": "hydraulik2.png", "targetScreen": "BT", "buttonType": "button-type-5" },
{ "id": "BUH6", "image": "zahlerdetails.png", "targetScreen": "BU", "buttonType": "button-type-6" },
{ "id": "BUH7", "image": "pneumatik2.png", "targetScreen": "BV", "buttonType": "button-type-7" },
{ "id": "BUH8", "image": "leer.png", "targetScreen": "BN", "buttonType": "button-type-8" },
{ "id": "BUH9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
{ "id": "BUH10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
{ "id": "BUH11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
{ "id": "BUH12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
{ "id": "BUH13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
{ "id": "BUH14", "image": "prozess.png", "targetScreen": "BK", "buttonType": "button-type-14" },
{ "id": "BUH15", "image": "instandhaltMaschine.png", "targetScreen": "AL", "buttonType": "button-type-15" },
{ "id": "BUH16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
{ "id": "BUH17", "image": "bbbutton.png", "targetScreen": "AL", "buttonType": "button-type-17" },
{ "id": "BUH18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
{ "id": "BUH19", "image": "bildSchließen.png", "targetScreen": "BU", "buttonType": "button-type-63" }




],


// instandhaltPneumatik1.9

'BUCH':[	

{ "id": "BUCH1", "image": "maschineBQ.png", "targetScreen": "BO", "buttonType": "button-type-1" },
{ "id": "BUCH2", "image": "antriebe.png", "targetScreen": "BL", "buttonType": "button-type-2" },
{ "id": "BUCH3", "image": "atcapc.png", "targetScreen": "BR", "buttonType": "button-type-3" },
{ "id": "BUCH4", "image": "hydraulik1.png", "targetScreen": "BS", "buttonType": "button-type-4" },
{ "id": "BUCH5", "image": "hydraulik2.png", "targetScreen": "BT", "buttonType": "button-type-5" },
{ "id": "BUCH6", "image": "zahlerdetails.png", "targetScreen": "BU", "buttonType": "button-type-6" },
{ "id": "BUCH7", "image": "pneumatik2.png", "targetScreen": "BV", "buttonType": "button-type-7" },
{ "id": "BUCH8", "image": "leer.png", "targetScreen": "BN", "buttonType": "button-type-8" },
{ "id": "BUCH9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
{ "id": "BUCH10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
{ "id": "BUCH11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
{ "id": "BUCH12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
{ "id": "BUCH13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
{ "id": "BUCH14", "image": "prozess.png", "targetScreen": "BK", "buttonType": "button-type-14" },
{ "id": "BUCH15", "image": "instandhaltMaschine.png", "targetScreen": "AL", "buttonType": "button-type-15" },
{ "id": "BUCH16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
{ "id": "BUCH17", "image": "bbbutton.png", "targetScreen": "AL", "buttonType": "button-type-17" },
{ "id": "BUCH18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
{ "id": "BUCH19", "image": "bildSchließen.png", "targetScreen": "BU", "buttonType": "button-type-63" }




],



// instandhaltPneumatik1.10

'BUI':[	




{ "id": "BUI1", "image": "maschineBQ.png", "targetScreen": "BO", "buttonType": "button-type-1" },
{ "id": "BUI2", "image": "antriebe.png", "targetScreen": "BL", "buttonType": "button-type-2" },
{ "id": "BUI3", "image": "atcapc.png", "targetScreen": "BR", "buttonType": "button-type-3" },
{ "id": "BUI4", "image": "hydraulik1.png", "targetScreen": "BS", "buttonType": "button-type-4" },
{ "id": "BUI5", "image": "hydraulik2.png", "targetScreen": "BT", "buttonType": "button-type-5" },
{ "id": "BUI6", "image": "zahlerdetails.png", "targetScreen": "BU", "buttonType": "button-type-6" },
{ "id": "BUI7", "image": "pneumatik2.png", "targetScreen": "BV", "buttonType": "button-type-7" },
{ "id": "BUI8", "image": "leer.png", "targetScreen": "BN", "buttonType": "button-type-8" },
{ "id": "BUI9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
{ "id": "BUI10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
{ "id": "BUI11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
{ "id": "BUI12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
{ "id": "BUI13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
{ "id": "BUI14", "image": "prozess.png", "targetScreen": "BK", "buttonType": "button-type-14" },
{ "id": "BUI15", "image": "instandhaltMaschine.png", "targetScreen": "AL", "buttonType": "button-type-15" },
{ "id": "BUI16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
{ "id": "BUI17", "image": "bbbutton.png", "targetScreen": "AL", "buttonType": "button-type-17" },
{ "id": "BUI18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
{ "id": "BUI19", "image": "bildSchließen.png", "targetScreen": "BU", "buttonType": "button-type-63" }
],


// instandhaltPneumatik1.11

'BUJ':[	



{ "id": "BUJ1", "image": "maschineBQ.png", "targetScreen": "BO", "buttonType": "button-type-1" },
{ "id": "BUJ2", "image": "antriebe.png", "targetScreen": "BL", "buttonType": "button-type-2" },
{ "id": "BUJ3", "image": "atcapc.png", "targetScreen": "BR", "buttonType": "button-type-3" },
{ "id": "BUJ4", "image": "hydraulik1.png", "targetScreen": "BS", "buttonType": "button-type-4" },
{ "id": "BUJ5", "image": "hydraulik2.png", "targetScreen": "BT", "buttonType": "button-type-5" },
{ "id": "BUJ6", "image": "zahlerdetails.png", "targetScreen": "BU", "buttonType": "button-type-6" },
{ "id": "BUJ7", "image": "pneumatik2.png", "targetScreen": "BV", "buttonType": "button-type-7" },
{ "id": "BUJ8", "image": "leer.png", "targetScreen": "BN", "buttonType": "button-type-8" },
{ "id": "BUJ9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
{ "id": "BUJ10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
{ "id": "BUJ11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
{ "id": "BUJ12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
{ "id": "BUJ13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
{ "id": "BUJ14", "image": "prozess.png", "targetScreen": "BK", "buttonType": "button-type-14" },
{ "id": "BUJ15", "image": "instandhaltMaschine.png", "targetScreen": "AL", "buttonType": "button-type-15" },
{ "id": "BUJ16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
{ "id": "BUJ17", "image": "bbbutton.png", "targetScreen": "AL", "buttonType": "button-type-17" },
{ "id": "BUJ18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
{ "id": "BUJ19", "image": "bildSchließen.png", "targetScreen": "BU", "buttonType": "button-type-63" }

],






// instandhaltPneumatik1.12

'BUK':[	


{ "id": "BUK1", "image": "maschineBQ.png", "targetScreen": "BO", "buttonType": "button-type-1" },
{ "id": "BUK2", "image": "antriebe.png", "targetScreen": "BL", "buttonType": "button-type-2" },
{ "id": "BUK3", "image": "atcapc.png", "targetScreen": "BR", "buttonType": "button-type-3" },
{ "id": "BUK4", "image": "hydraulik1.png", "targetScreen": "BS", "buttonType": "button-type-4" },
{ "id": "BUK5", "image": "hydraulik2.png", "targetScreen": "BT", "buttonType": "button-type-5" },
{ "id": "BUK6", "image": "zahlerdetails.png", "targetScreen": "BU", "buttonType": "button-type-6" },
{ "id": "BUK7", "image": "pneumatik2.png", "targetScreen": "BV", "buttonType": "button-type-7" },
{ "id": "BUK8", "image": "leer.png", "targetScreen": "BN", "buttonType": "button-type-8" },
{ "id": "BUK9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
{ "id": "BUK10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
{ "id": "BUK11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
{ "id": "BUK12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
{ "id": "BUK13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
{ "id": "BUK14", "image": "prozess.png", "targetScreen": "BK", "buttonType": "button-type-14" },
{ "id": "BUK15", "image": "instandhaltMaschine.png", "targetScreen": "AL", "buttonType": "button-type-15" },
{ "id": "BUK16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
{ "id": "BUK17", "image": "bbbutton.png", "targetScreen": "AL", "buttonType": "button-type-17" },
{ "id": "BUK18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
{ "id": "BUK19", "image": "bildSchließen.png", "targetScreen": "BU", "buttonType": "button-type-63" }


],




// instandhaltPneumatik1.13

'BUL':[	

{ "id": "BUL1", "image": "maschineBQ.png", "targetScreen": "BO", "buttonType": "button-type-1" },
{ "id": "BUL2", "image": "antriebe.png", "targetScreen": "BL", "buttonType": "button-type-2" },
{ "id": "BUL3", "image": "atcapc.png", "targetScreen": "BR", "buttonType": "button-type-3" },
{ "id": "BUL4", "image": "hydraulik1.png", "targetScreen": "BS", "buttonType": "button-type-4" },
{ "id": "BUL5", "image": "hydraulik2.png", "targetScreen": "BT", "buttonType": "button-type-5" },
{ "id": "BUL6", "image": "zahlerdetails.png", "targetScreen": "BU", "buttonType": "button-type-6" },
{ "id": "BUL7", "image": "pneumatik2.png", "targetScreen": "BV", "buttonType": "button-type-7" },
{ "id": "BUL8", "image": "leer.png", "targetScreen": "BN", "buttonType": "button-type-8" },
{ "id": "BUL9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
{ "id": "BUL10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
{ "id": "BUL11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
{ "id": "BUL12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
{ "id": "BUL13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
{ "id": "BUL14", "image": "prozess.png", "targetScreen": "BK", "buttonType": "button-type-14" },
{ "id": "BUL15", "image": "instandhaltMaschine.png", "targetScreen": "AL", "buttonType": "button-type-15" },
{ "id": "BUL16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
{ "id": "BUL17", "image": "bbbutton.png", "targetScreen": "AL", "buttonType": "button-type-17" },
{ "id": "BUL18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
{ "id": "BUL19", "image": "bildSchließen.png", "targetScreen": "BU", "buttonType": "button-type-63" }



],



// instandhaltPneumatik1.14

'BUM':[	


{ "id": "BUM1", "image": "maschineBQ.png", "targetScreen": "BO", "buttonType": "button-type-1" },
{ "id": "BUM2", "image": "antriebe.png", "targetScreen": "BL", "buttonType": "button-type-2" },
{ "id": "BUM3", "image": "atcapc.png", "targetScreen": "BR", "buttonType": "button-type-3" },
{ "id": "BUM4", "image": "hydraulik1.png", "targetScreen": "BS", "buttonType": "button-type-4" },
{ "id": "BUM5", "image": "hydraulik2.png", "targetScreen": "BT", "buttonType": "button-type-5" },
{ "id": "BUM6", "image": "zahlerdetails.png", "targetScreen": "BU", "buttonType": "button-type-6" },
{ "id": "BUM7", "image": "pneumatik2.png", "targetScreen": "BV", "buttonType": "button-type-7" },
{ "id": "BUM8", "image": "leer.png", "targetScreen": "BN", "buttonType": "button-type-8" },
{ "id": "BUM9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
{ "id": "BUM10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
{ "id": "BUM11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
{ "id": "BUM12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
{ "id": "BUM13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
{ "id": "BUM14", "image": "prozess.png", "targetScreen": "BK", "buttonType": "button-type-14" },
{ "id": "BUM15", "image": "instandhaltMaschine.png", "targetScreen": "AL", "buttonType": "button-type-15" },
{ "id": "BUM16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
{ "id": "BUM17", "image": "bbbutton.png", "targetScreen": "AL", "buttonType": "button-type-17" },
{ "id": "BUM18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
{ "id": "BUM19", "image": "bildSchließen.png", "targetScreen": "BU", "buttonType": "button-type-63" }


],







// instandhaltPneumatik2



'BV':[	



{ "id": "BV1", "image": "maschineBQ.png", "targetScreen": "BO", "buttonType": "button-type-1" },
{ "id": "BV2", "image": "antriebe.png", "targetScreen": "BL", "buttonType": "button-type-2" },
{ "id": "BV3", "image": "atcapc.png", "targetScreen": "BR", "buttonType": "button-type-3" },
{ "id": "BV4", "image": "hydraulik1.png", "targetScreen": "BS", "buttonType": "button-type-4" },
{ "id": "BV5", "image": "hydraulik2.png", "targetScreen": "BT", "buttonType": "button-type-5" },
{ "id": "BV6", "image": "pneumatik1.png", "targetScreen": "BU", "buttonType": "button-type-6" },
{ "id": "BV7", "image": "pneumatik2BV.png", "targetScreen": "BV", "buttonType": "button-type-7" },
{ "id": "BV8", "image": "leer.png", "targetScreen": "BN", "buttonType": "button-type-8" },
{ "id": "BV9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
{ "id": "BV10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
{ "id": "BV11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
{ "id": "BV12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
{ "id": "BV13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
{ "id": "BV14", "image": "prozess.png", "targetScreen": "BK", "buttonType": "button-type-14" },
{ "id": "BV15", "image": "instandhaltMaschine.png", "targetScreen": "AL", "buttonType": "button-type-15" },
{ "id": "BV16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
{ "id": "BV17", "image": "bbbutton.png", "targetScreen": "AL", "buttonType": "button-type-17" },
{ "id": "BV18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
{ "id": "BV19", "image": "details.png", "targetScreen": "BVA", "buttonType": "button-type-49" },
{ "id": "BV20", "image": "details.png", "targetScreen": "BVB", "buttonType": "button-type-50" },
{ "id": "BV21", "image": "details.png", "targetScreen": "BVC", "buttonType": "button-type-51" },
{ "id": "BV22", "image": "details.png", "targetScreen": "BVD", "buttonType": "button-type-52" },
{ "id": "BV23", "image": "details.png", "targetScreen": "BVE", "buttonType": "button-type-53" },
{ "id": "BV24", "image": "details.png", "targetScreen": "BVF", "buttonType": "button-type-54" },
{ "id": "BV25", "image": "details.png", "targetScreen": "BVG", "buttonType": "button-type-55" },
{ "id": "BV26", "image": "details.png", "targetScreen": "BVH", "buttonType": "button-type-56" },
{ "id": "BV27", "image": "details.png", "targetScreen": "BVCH", "buttonType": "button-type-57" },
{ "id": "BV28", "image": "details.png", "targetScreen": "BVI", "buttonType": "button-type-58" },
{ "id": "BV29", "image": "details.png", "targetScreen": "BVJ", "buttonType": "button-type-59" },
{ "id": "BV30", "image": "details.png", "targetScreen": "BVK", "buttonType": "button-type-60" },
{ "id": "BV31", "image": "details.png", "targetScreen": "BVL", "buttonType": "button-type-61" },
{ "id": "BV32", "image": "details.png", "targetScreen": "BVM", "buttonType": "button-type-62" }


],


// instandhaltPneumatik2.1
'BVA':[	



{ "id": "BVA1", "image": "maschineBQ.png", "targetScreen": "BO", "buttonType": "button-type-1" },
{ "id": "BVA2", "image": "antriebe.png", "targetScreen": "BL", "buttonType": "button-type-2" },
{ "id": "BVA3", "image": "atcapc.png", "targetScreen": "BR", "buttonType": "button-type-3" },
{ "id": "BVA4", "image": "hydraulik1.png", "targetScreen": "BS", "buttonType": "button-type-4" },
{ "id": "BVA5", "image": "hydraulik2.png", "targetScreen": "BT", "buttonType": "button-type-5" },
{ "id": "BVA6", "image": "pneumatik1.png", "targetScreen": "BU", "buttonType": "button-type-6" },
{ "id": "BVA7", "image": "zahlerdetails.png", "targetScreen": "BV", "buttonType": "button-type-7" },
{ "id": "BVA8", "image": "leer.png", "targetScreen": "BN", "buttonType": "button-type-8" },
{ "id": "BVA9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
{ "id": "BVA10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
{ "id": "BVA11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
{ "id": "BVA12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
{ "id": "BVA13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
{ "id": "BVA14", "image": "prozess.png", "targetScreen": "BK", "buttonType": "button-type-14" },
{ "id": "BVA15", "image": "instandhaltMaschine.png", "targetScreen": "AL", "buttonType": "button-type-15" },
{ "id": "BVA16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
{ "id": "BVA17", "image": "bbbutton.png", "targetScreen": "AL", "buttonType": "button-type-17" },
{ "id": "BVA18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
{ "id": "BVA19", "image": "bildSchließen.png", "targetScreen": "BV", "buttonType": "button-type-63" }


],


// instandhaltPneumatik2.2

'BVB':[	

{ "id": "BVB1", "image": "maschineBQ.png", "targetScreen": "BO", "buttonType": "button-type-1" },
{ "id": "BVB2", "image": "antriebe.png", "targetScreen": "BL", "buttonType": "button-type-2" },
{ "id": "BVB3", "image": "atcapc.png", "targetScreen": "BR", "buttonType": "button-type-3" },
{ "id": "BVB4", "image": "hydraulik1.png", "targetScreen": "BS", "buttonType": "button-type-4" },
{ "id": "BVB5", "image": "hydraulik2.png", "targetScreen": "BT", "buttonType": "button-type-5" },
{ "id": "BVB6", "image": "pneumatik1.png", "targetScreen": "BU", "buttonType": "button-type-6" },
{ "id": "BVB7", "image": "zahlerdetails.png", "targetScreen": "BV", "buttonType": "button-type-7" },
{ "id": "BVB8", "image": "leer.png", "targetScreen": "BN", "buttonType": "button-type-8" },
{ "id": "BVB9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
{ "id": "BVB10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
{ "id": "BVB11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
{ "id": "BVB12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
{ "id": "BVB13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
{ "id": "BVB14", "image": "prozess.png", "targetScreen": "BK", "buttonType": "button-type-14" },
{ "id": "BVB15", "image": "instandhaltMaschine.png", "targetScreen": "AL", "buttonType": "button-type-15" },
{ "id": "BVB16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
{ "id": "BVB17", "image": "bbbutton.png", "targetScreen": "AL", "buttonType": "button-type-17" },
{ "id": "BVB18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
{ "id": "BVB19", "image": "bildSchließen.png", "targetScreen": "BV", "buttonType": "button-type-63" }

],

// instandhaltPneumatik2.3
'BVC':[	
{ "id": "BVC1", "image": "maschineBQ.png", "targetScreen": "BO", "buttonType": "button-type-1" },
{ "id": "BVC2", "image": "antriebe.png", "targetScreen": "BL", "buttonType": "button-type-2" },
{ "id": "BVC3", "image": "atcapc.png", "targetScreen": "BR", "buttonType": "button-type-3" },
{ "id": "BVC4", "image": "hydraulik1.png", "targetScreen": "BS", "buttonType": "button-type-4" },
{ "id": "BVC5", "image": "hydraulik2.png", "targetScreen": "BT", "buttonType": "button-type-5" },
{ "id": "BVC6", "image": "pneumatik1.png", "targetScreen": "BU", "buttonType": "button-type-6" },
{ "id": "BVC7", "image": "zahlerdetails.png", "targetScreen": "BV", "buttonType": "button-type-7" },
{ "id": "BVC8", "image": "leer.png", "targetScreen": "BN", "buttonType": "button-type-8" },
{ "id": "BVC9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
{ "id": "BVC10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
{ "id": "BVC11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
{ "id": "BVC12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
{ "id": "BVC13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
{ "id": "BVC14", "image": "prozess.png", "targetScreen": "BK", "buttonType": "button-type-14" },
{ "id": "BVC15", "image": "instandhaltMaschine.png", "targetScreen": "AL", "buttonType": "button-type-15" },
{ "id": "BVC16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
{ "id": "BVC17", "image": "bbbutton.png", "targetScreen": "AL", "buttonType": "button-type-17" },
{ "id": "BVC18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
{ "id": "BVC19", "image": "bildSchließen.png", "targetScreen": "BV", "buttonType": "button-type-63" }


],


// instandhaltPneumatik2.4

'BVD':[	

{ "id": "BVD1", "image": "maschineBQ.png", "targetScreen": "BO", "buttonType": "button-type-1" },
{ "id": "BVD2", "image": "antriebe.png", "targetScreen": "BL", "buttonType": "button-type-2" },
{ "id": "BVD3", "image": "atcapc.png", "targetScreen": "BR", "buttonType": "button-type-3" },
{ "id": "BVD4", "image": "hydraulik1.png", "targetScreen": "BS", "buttonType": "button-type-4" },
{ "id": "BVD5", "image": "hydraulik2.png", "targetScreen": "BT", "buttonType": "button-type-5" },
{ "id": "BVD6", "image": "pneumatik1.png", "targetScreen": "BU", "buttonType": "button-type-6" },
{ "id": "BVD7", "image": "zahlerdetails.png", "targetScreen": "BV", "buttonType": "button-type-7" },
{ "id": "BVD8", "image": "leer.png", "targetScreen": "BN", "buttonType": "button-type-8" },
{ "id": "BVD9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
{ "id": "BVD10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
{ "id": "BVD11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
{ "id": "BVD12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
{ "id": "BVD13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
{ "id": "BVD14", "image": "prozess.png", "targetScreen": "BK", "buttonType": "button-type-14" },
{ "id": "BVD15", "image": "instandhaltMaschine.png", "targetScreen": "AL", "buttonType": "button-type-15" },
{ "id": "BVD16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
{ "id": "BVD17", "image": "bbbutton.png", "targetScreen": "AL", "buttonType": "button-type-17" },
{ "id": "BVD18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
{ "id": "BVD19", "image": "bildSchließen.png", "targetScreen": "BV", "buttonType": "button-type-63" }


],


// instandhaltPneumatik2.5
'BVE':[	

{ "id": "BVE1", "image": "maschineBQ.png", "targetScreen": "BO", "buttonType": "button-type-1" },
{ "id": "BVE2", "image": "antriebe.png", "targetScreen": "BL", "buttonType": "button-type-2" },
{ "id": "BVE3", "image": "atcapc.png", "targetScreen": "BR", "buttonType": "button-type-3" },
{ "id": "BVE4", "image": "hydraulik1.png", "targetScreen": "BS", "buttonType": "button-type-4" },
{ "id": "BVE5", "image": "hydraulik2.png", "targetScreen": "BT", "buttonType": "button-type-5" },
{ "id": "BVE6", "image": "pneumatik1.png", "targetScreen": "BU", "buttonType": "button-type-6" },
{ "id": "BVE7", "image": "zahlerdetails.png", "targetScreen": "BV", "buttonType": "button-type-7" },
{ "id": "BVE8", "image": "leer.png", "targetScreen": "BN", "buttonType": "button-type-8" },
{ "id": "BVE9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
{ "id": "BVE10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
{ "id": "BVE11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
{ "id": "BVE12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
{ "id": "BVE13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
{ "id": "BVE14", "image": "prozess.png", "targetScreen": "BK", "buttonType": "button-type-14" },
{ "id": "BVE15", "image": "instandhaltMaschine.png", "targetScreen": "AL", "buttonType": "button-type-15" },
{ "id": "BVE16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
{ "id": "BVE17", "image": "bbbutton.png", "targetScreen": "AL", "buttonType": "button-type-17" },
{ "id": "BVE18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
{ "id": "BVE19", "image": "bildSchließen.png", "targetScreen": "BV", "buttonType": "button-type-63" }



],


// instandhaltPneumatik2.6

'BVF':[	

{ "id": "BVF1", "image": "maschineBQ.png", "targetScreen": "BO", "buttonType": "button-type-1" },
{ "id": "BVF2", "image": "antriebe.png", "targetScreen": "BL", "buttonType": "button-type-2" },
{ "id": "BVF3", "image": "atcapc.png", "targetScreen": "BR", "buttonType": "button-type-3" },
{ "id": "BVF4", "image": "hydraulik1.png", "targetScreen": "BS", "buttonType": "button-type-4" },
{ "id": "BVF5", "image": "hydraulik2.png", "targetScreen": "BT", "buttonType": "button-type-5" },
{ "id": "BVF6", "image": "pneumatik1.png", "targetScreen": "BU", "buttonType": "button-type-6" },
{ "id": "BVF7", "image": "zahlerdetails.png", "targetScreen": "BV", "buttonType": "button-type-7" },
{ "id": "BVF8", "image": "leer.png", "targetScreen": "BN", "buttonType": "button-type-8" },
{ "id": "BVF9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
{ "id": "BVF10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
{ "id": "BVF11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
{ "id": "BVF12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
{ "id": "BVF13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
{ "id": "BVF14", "image": "prozess.png", "targetScreen": "BK", "buttonType": "button-type-14" },
{ "id": "BVF15", "image": "instandhaltMaschine.png", "targetScreen": "AL", "buttonType": "button-type-15" },
{ "id": "BVF16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
{ "id": "BVF17", "image": "bbbutton.png", "targetScreen": "AL", "buttonType": "button-type-17" },
{ "id": "BVF18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
{ "id": "BVF19", "image": "bildSchließen.png", "targetScreen": "BV", "buttonType": "button-type-63" }



],



// instandhaltPneumatik2.7
'BVG':[	
{ "id": "BVG1", "image": "maschineBQ.png", "targetScreen": "BO", "buttonType": "button-type-1" },
{ "id": "BVG2", "image": "antriebe.png", "targetScreen": "BL", "buttonType": "button-type-2" },
{ "id": "BVG3", "image": "atcapc.png", "targetScreen": "BR", "buttonType": "button-type-3" },
{ "id": "BVG4", "image": "hydraulik1.png", "targetScreen": "BS", "buttonType": "button-type-4" },
{ "id": "BVG5", "image": "hydraulik2.png", "targetScreen": "BT", "buttonType": "button-type-5" },
{ "id": "BVG6", "image": "pneumatik1.png", "targetScreen": "BU", "buttonType": "button-type-6" },
{ "id": "BVG7", "image": "zahlerdetails.png", "targetScreen": "BV", "buttonType": "button-type-7" },
{ "id": "BVG8", "image": "leer.png", "targetScreen": "BN", "buttonType": "button-type-8" },
{ "id": "BVG9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
{ "id": "BVG10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
{ "id": "BVG11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
{ "id": "BVG12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
{ "id": "BVG13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
{ "id": "BVG14", "image": "prozess.png", "targetScreen": "BK", "buttonType": "button-type-14" },
{ "id": "BVG15", "image": "instandhaltMaschine.png", "targetScreen": "AL", "buttonType": "button-type-15" },
{ "id": "BVG16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
{ "id": "BVG17", "image": "bbbutton.png", "targetScreen": "AL", "buttonType": "button-type-17" },
{ "id": "BVG18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
{ "id": "BVG19", "image": "bildSchließen.png", "targetScreen": "BV", "buttonType": "button-type-63" }


],


// instandhaltPneumatik2.8

'BVH':[	

{ "id": "BVH1", "image": "maschineBQ.png", "targetScreen": "BO", "buttonType": "button-type-1" },
{ "id": "BVH2", "image": "antriebe.png", "targetScreen": "BL", "buttonType": "button-type-2" },
{ "id": "BVH3", "image": "atcapc.png", "targetScreen": "BR", "buttonType": "button-type-3" },
{ "id": "BVH4", "image": "hydraulik1.png", "targetScreen": "BS", "buttonType": "button-type-4" },
{ "id": "BVH5", "image": "hydraulik2.png", "targetScreen": "BT", "buttonType": "button-type-5" },
{ "id": "BVH6", "image": "pneumatik1.png", "targetScreen": "BU", "buttonType": "button-type-6" },
{ "id": "BVH7", "image": "zahlerdetails.png", "targetScreen": "BV", "buttonType": "button-type-7" },
{ "id": "BVH8", "image": "leer.png", "targetScreen": "BN", "buttonType": "button-type-8" },
{ "id": "BVH9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
{ "id": "BVH10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
{ "id": "BVH11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
{ "id": "BVH12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
{ "id": "BVH13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
{ "id": "BVH14", "image": "prozess.png", "targetScreen": "BK", "buttonType": "button-type-14" },
{ "id": "BVH15", "image": "instandhaltMaschine.png", "targetScreen": "AL", "buttonType": "button-type-15" },
{ "id": "BVH16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
{ "id": "BVH17", "image": "bbbutton.png", "targetScreen": "AL", "buttonType": "button-type-17" },
{ "id": "BVH18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
{ "id": "BVH19", "image": "bildSchließen.png", "targetScreen": "BV", "buttonType": "button-type-63" }

],

// instandhaltPneumatik2.9

'BVCH':[	
{ "id": "BVCH1", "image": "maschineBQ.png", "targetScreen": "BO", "buttonType": "button-type-1" },
{ "id": "BVCH2", "image": "antriebe.png", "targetScreen": "BL", "buttonType": "button-type-2" },
{ "id": "BVCH3", "image": "atcapc.png", "targetScreen": "BR", "buttonType": "button-type-3" },
{ "id": "BVCH4", "image": "hydraulik1.png", "targetScreen": "BS", "buttonType": "button-type-4" },
{ "id": "BVCH5", "image": "hydraulik2.png", "targetScreen": "BT", "buttonType": "button-type-5" },
{ "id": "BVCH6", "image": "pneumatik1.png", "targetScreen": "BU", "buttonType": "button-type-6" },
{ "id": "BVCH7", "image": "zahlerdetails.png", "targetScreen": "BV", "buttonType": "button-type-7" },
{ "id": "BVCH8", "image": "leer.png", "targetScreen": "BN", "buttonType": "button-type-8" },
{ "id": "BVCH9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
{ "id": "BVCH10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
{ "id": "BVCH11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
{ "id": "BVCH12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
{ "id": "BVCH13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
{ "id": "BVCH14", "image": "prozess.png", "targetScreen": "BK", "buttonType": "button-type-14" },
{ "id": "BVCH15", "image": "instandhaltMaschine.png", "targetScreen": "AL", "buttonType": "button-type-15" },
{ "id": "BVCH16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
{ "id": "BVCH17", "image": "bbbutton.png", "targetScreen": "AL", "buttonType": "button-type-17" },
{ "id": "BVCH18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
{ "id": "BVCH19", "image": "bildSchließen.png", "targetScreen": "BV", "buttonType": "button-type-63" }


],


// instandhaltPneumatik2.10
'BVI':[	

{ "id": "BVI1", "image": "maschineBQ.png", "targetScreen": "BO", "buttonType": "button-type-1" },
{ "id": "BVI2", "image": "antriebe.png", "targetScreen": "BL", "buttonType": "button-type-2" },
{ "id": "BVI3", "image": "atcapc.png", "targetScreen": "BR", "buttonType": "button-type-3" },
{ "id": "BVI4", "image": "hydraulik1.png", "targetScreen": "BS", "buttonType": "button-type-4" },
{ "id": "BVI5", "image": "hydraulik2.png", "targetScreen": "BT", "buttonType": "button-type-5" },
{ "id": "BVI6", "image": "pneumatik1.png", "targetScreen": "BU", "buttonType": "button-type-6" },
{ "id": "BVI7", "image": "zahlerdetails.png", "targetScreen": "BV", "buttonType": "button-type-7" },
{ "id": "BVI8", "image": "leer.png", "targetScreen": "BN", "buttonType": "button-type-8" },
{ "id": "BVI9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
{ "id": "BVI10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
{ "id": "BVI11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
{ "id": "BVI12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
{ "id": "BVI13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
{ "id": "BVI14", "image": "prozess.png", "targetScreen": "BK", "buttonType": "button-type-14" },
{ "id": "BVI15", "image": "instandhaltMaschine.png", "targetScreen": "AL", "buttonType": "button-type-15" },
{ "id": "BVI16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
{ "id": "BVI17", "image": "bbbutton.png", "targetScreen": "AL", "buttonType": "button-type-17" },
{ "id": "BVI18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
{ "id": "BVI19", "image": "bildSchließen.png", "targetScreen": "BV", "buttonType": "button-type-63" }




],


// instandhaltPneumatik2.11
'BVJ':[	

{ "id": "BVJ1", "image": "maschineBQ.png", "targetScreen": "BO", "buttonType": "button-type-1" },
{ "id": "BVJ2", "image": "antriebe.png", "targetScreen": "BL", "buttonType": "button-type-2" },
{ "id": "BVJ3", "image": "atcapc.png", "targetScreen": "BR", "buttonType": "button-type-3" },
{ "id": "BVJ4", "image": "hydraulik1.png", "targetScreen": "BS", "buttonType": "button-type-4" },
{ "id": "BVJ5", "image": "hydraulik2.png", "targetScreen": "BT", "buttonType": "button-type-5" },
{ "id": "BVJ6", "image": "pneumatik1.png", "targetScreen": "BU", "buttonType": "button-type-6" },
{ "id": "BVJ7", "image": "zahlerdetails.png", "targetScreen": "BV", "buttonType": "button-type-7" },
{ "id": "BVJ8", "image": "leer.png", "targetScreen": "BN", "buttonType": "button-type-8" },
{ "id": "BVJ9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
{ "id": "BVJ10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
{ "id": "BVJ11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
{ "id": "BVJ12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
{ "id": "BVJ13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
{ "id": "BVJ14", "image": "prozess.png", "targetScreen": "BK", "buttonType": "button-type-14" },
{ "id": "BVJ15", "image": "instandhaltMaschine.png", "targetScreen": "AL", "buttonType": "button-type-15" },
{ "id": "BVJ16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
{ "id": "BVJ17", "image": "bbbutton.png", "targetScreen": "AL", "buttonType": "button-type-17" },
{ "id": "BVJ18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
{ "id": "BVJ19", "image": "bildSchließen.png", "targetScreen": "BV", "buttonType": "button-type-63" }



],


// instandhaltPneumatik2.12

'BVK':[	

{ "id": "BVK1", "image": "maschineBQ.png", "targetScreen": "BO", "buttonType": "button-type-1" },
{ "id": "BVK2", "image": "antriebe.png", "targetScreen": "BL", "buttonType": "button-type-2" },
{ "id": "BVK3", "image": "atcapc.png", "targetScreen": "BR", "buttonType": "button-type-3" },
{ "id": "BVK4", "image": "hydraulik1.png", "targetScreen": "BS", "buttonType": "button-type-4" },
{ "id": "BVK5", "image": "hydraulik2.png", "targetScreen": "BT", "buttonType": "button-type-5" },
{ "id": "BVK6", "image": "pneumatik1.png", "targetScreen": "BU", "buttonType": "button-type-6" },
{ "id": "BVK7", "image": "zahlerdetails.png", "targetScreen": "BV", "buttonType": "button-type-7" },
{ "id": "BVK8", "image": "leer.png", "targetScreen": "BN", "buttonType": "button-type-8" },
{ "id": "BVK9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
{ "id": "BVK10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
{ "id": "BVK11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
{ "id": "BVK12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
{ "id": "BVK13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
{ "id": "BVK14", "image": "prozess.png", "targetScreen": "BK", "buttonType": "button-type-14" },
{ "id": "BVK15", "image": "instandhaltMaschine.png", "targetScreen": "AL", "buttonType": "button-type-15" },
{ "id": "BVK16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
{ "id": "BVK17", "image": "bbbutton.png", "targetScreen": "AL", "buttonType": "button-type-17" },
{ "id": "BVK18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
{ "id": "BVK19", "image": "bildSchließen.png", "targetScreen": "BV", "buttonType": "button-type-63" }



],




// instandhaltPneumatik2.13
'BVL':[	

{ "id": "BVL1", "image": "maschineBQ.png", "targetScreen": "BO", "buttonType": "button-type-1" },
{ "id": "BVL2", "image": "antriebe.png", "targetScreen": "BL", "buttonType": "button-type-2" },
{ "id": "BVL3", "image": "atcapc.png", "targetScreen": "BR", "buttonType": "button-type-3" },
{ "id": "BVL4", "image": "hydraulik1.png", "targetScreen": "BS", "buttonType": "button-type-4" },
{ "id": "BVL5", "image": "hydraulik2.png", "targetScreen": "BT", "buttonType": "button-type-5" },
{ "id": "BVL6", "image": "pneumatik1.png", "targetScreen": "BU", "buttonType": "button-type-6" },
{ "id": "BVL7", "image": "zahlerdetails.png", "targetScreen": "BV", "buttonType": "button-type-7" },
{ "id": "BVL8", "image": "leer.png", "targetScreen": "BN", "buttonType": "button-type-8" },
{ "id": "BVL9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
{ "id": "BVL10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
{ "id": "BVL11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
{ "id": "BVL12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
{ "id": "BVL13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
{ "id": "BVL14", "image": "prozess.png", "targetScreen": "BK", "buttonType": "button-type-14" },
{ "id": "BVL15", "image": "instandhaltMaschine.png", "targetScreen": "AL", "buttonType": "button-type-15" },
{ "id": "BVL16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
{ "id": "BVL17", "image": "bbbutton.png", "targetScreen": "AL", "buttonType": "button-type-17" },
{ "id": "BVL18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
{ "id": "BVL19", "image": "bildSchließen.png", "targetScreen": "BV", "buttonType": "button-type-63" }

],



// instandhaltPneumatik2.14


'BVM':[	

{ "id": "BVM1", "image": "maschineBQ.png", "targetScreen": "BO", "buttonType": "button-type-1" },
{ "id": "BVM2", "image": "antriebe.png", "targetScreen": "BL", "buttonType": "button-type-2" },
{ "id": "BVM3", "image": "atcapc.png", "targetScreen": "BR", "buttonType": "button-type-3" },
{ "id": "BVM4", "image": "hydraulik1.png", "targetScreen": "BS", "buttonType": "button-type-4" },
{ "id": "BVM5", "image": "hydraulik2.png", "targetScreen": "BT", "buttonType": "button-type-5" },
{ "id": "BVM6", "image": "pneumatik1.png", "targetScreen": "BU", "buttonType": "button-type-6" },
{ "id": "BVM7", "image": "zahlerdetails.png", "targetScreen": "BV", "buttonType": "button-type-7" },
{ "id": "BVM8", "image": "leer.png", "targetScreen": "BN", "buttonType": "button-type-8" },
{ "id": "BVM9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
{ "id": "BVM10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
{ "id": "BVM11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
{ "id": "BVM12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
{ "id": "BVM13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
{ "id": "BVM14", "image": "prozess.png", "targetScreen": "BK", "buttonType": "button-type-14" },
{ "id": "BVM15", "image": "instandhaltMaschine.png", "targetScreen": "AL", "buttonType": "button-type-15" },
{ "id": "BVM16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
{ "id": "BVM17", "image": "bbbutton.png", "targetScreen": "AL", "buttonType": "button-type-17" },
{ "id": "BVM18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
{ "id": "BVM19", "image": "bildSchließen.png", "targetScreen": "BV", "buttonType": "button-type-63" }



],



	 
			 
              // instandhaltUhrStellen
	    
	   
	      
			  'BW':[
			 
{ "id": "BW1", "image": "zahler.png", "targetScreen": "BO", "buttonType": "button-type-1" },
{ "id": "BW2", "image": "leer.png", "targetScreen": "BL", "buttonType": "button-type-2" },
{ "id": "BW3", "image": "leer.png", "targetScreen": "AK", "buttonType": "button-type-3" },
{ "id": "BW4", "image": "sprache.png", "targetScreen": "AL", "buttonType": "button-type-4" },
{ "id": "BW5", "image": "uhrstellenBW.png", "targetScreen": "BW", "buttonType": "button-type-5" },
{ "id": "BW6", "image": "reinigung.png", "targetScreen": "BZ", "buttonType": "button-type-6" },
{ "id": "BW7", "image": "VersionAL.png", "targetScreen": "CA", "buttonType": "button-type-7" },
{ "id": "BW8", "image": "leer.png", "targetScreen": "BN", "buttonType": "button-type-8" },
{ "id": "BW9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
{ "id": "BW10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
{ "id": "BW11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
{ "id": "BW12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
{ "id": "BW13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
{ "id": "BW14", "image": "prozess.png", "targetScreen": "AK", "buttonType": "button-type-14" },
{ "id": "BW15", "image": "instandhaltMaschine.png", "targetScreen": "BW", "buttonType": "button-type-15" },
{ "id": "BW16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
{ "id": "BW17", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-17" },
{ "id": "BW18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
	{ "id": "BIAFA31", "image": "okGreen.png", "targetScreen": "BWAA", "buttonType": "button-type-102" }		 
			 
		 ],
		 
		 
		  // instandhaltUhrStellen
		 
		 
		 
		 
  "BWAA": [
    { "id": "BWAA1", "image": "zahler.png", "targetScreen": "BO", "buttonType": "button-type-1" },
    { "id": "BWAA2", "image": "leer.png", "targetScreen": "BL", "buttonType": "button-type-2" },
    { "id": "BWAA3", "image": "leer.png", "targetScreen": "AK", "buttonType": "button-type-3" },
    { "id": "BWAA4", "image": "sprache.png", "targetScreen": "AL", "buttonType": "button-type-4" },
    { "id": "BWAA5", "image": "uhrstellenBW.png", "targetScreen": "BW", "buttonType": "button-type-5" },
    { "id": "BWAA6", "image": "reinigung.png", "targetScreen": "BZ", "buttonType": "button-type-6" },
    { "id": "BWAA7", "image": "VersionAL.png", "targetScreen": "CA", "buttonType": "button-type-7" },
    { "id": "BWAA8", "image": "leer.png", "targetScreen": "BN", "buttonType": "button-type-8" },
    { "id": "BWAA9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
    { "id": "BWAA10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
    { "id": "BWAA11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
    { "id": "BWAA12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
    { "id": "BWAA13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
    { "id": "BWAA14", "image": "prozess.png", "targetScreen": "AK", "buttonType": "button-type-14" },
    { "id": "BWAA15", "image": "instandhaltMaschine.png", "targetScreen": "BW", "buttonType": "button-type-15" },
    { "id": "BWAA16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
    { "id": "BWAA17", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-17" },
    { "id": "BWAA18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
	{ "id": "BIAFA31", "image": "okBWAA.png", "targetScreen": "BW", "buttonType": "button-type-102" }
	
	
  ],


		 
		 
		 
		 
		 
		 
		 
		 
		 
            // instandhaltReinigung


      'X':[
	   { "id": "X1", "image": "bigLeer.png", "targetScreen": " ",  "buttonType": "button-type-64" },
	  { "id": "X2", "image": "mMaschine.png", "command": "goBack",  "buttonType": "button-type-65" },
	  { "id": "X3", "image": "pParameter.png", "command": "goBack",  "buttonType": "button-type-66" },
	  { "id": "X4", "image": "pProgramm.png", "targetScreen": "AM",  "buttonType": "button-type-67" },
	  { "id": "X5", "image": "pProgrammManager.png", "targetScreen": "AM",  "buttonType": "button-type-68" },
	  { "id": "X6", "image": "dDiagnose.png", "targetScreen": "AM",  "buttonType": "button-type-69" },
	  { "id": "X7", "image": "iInbetriebnahme.png", "targetScreen": "AM",  "buttonType": "button-type-70" },
	  { "id": "X8", "image": "hHmi.png", "targetScreen": "AM",  "buttonType": "button-type-71" },
	  { "id": "X9", "image": "bigLeer.png", "targetScreen": "AM",  "buttonType": "button-type-72" },
	  { "id": "X10", "image": "pfeilRechts.png", "targetScreen": "AM",  "buttonType": "button-type-73" },
	  { "id": "X11", "image": "lLeer.png", "targetScreen": "AM",  "buttonType": "button-type-74" },
	   {"id": "X12", "image": "schnittstelle.png", "targetScreen": 'goBack', "buttonType": "button-type-75" }

	   ],       




	   // serviceAtc
	    
	   
'AM':[	

{ "id": "AM1", "image": "zugriffstufe.png", "targetScreen": "CB", "buttonType": "button-type-1" },
{ "id": "AM2", "image": "apc.png", "targetScreen": "CC", "buttonType": "button-type-2" },
{ "id": "AM3", "image": "spindelE.png", "targetScreen": "C1H", "buttonType": "button-type-3" },
{ "id": "AM4", "image": "atcCB.png", "targetScreen": "AM", "buttonType": "button-type-4" },
{ "id": "AM5", "image": "teststopp.png", "targetScreen": "CI", "buttonType": "button-type-5" },
{ "id": "AM6", "image": "konfig.png", "targetScreen": "CK", "buttonType": "button-type-6" },
{ "id": "AM7", "image": "lampentest.png", "targetScreen": "AM", "buttonType": "button-type-7" },
{ "id": "AM8", "image": "traces.png", "targetScreen": "CM", "buttonType": "button-type-8" },
{ "id": "AM9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
{ "id": "AM10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
{ "id": "AM11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
{ "id": "AM12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
{ "id": "AM13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
{ "id": "AM14", "image": "prozess.png", "targetScreen": "AK", "buttonType": "button-type-14" },
{ "id": "AM15", "image": "instandhalt.png", "targetScreen": "AL", "buttonType": "button-type-15" },
{ "id": "AM16", "image": "serviceAM.png", "targetScreen": "AM", "buttonType": "button-type-16" },
{ "id": "AM17", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-17" },
{ "id": "AM18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" }

 ],
	



		   // serviceZugriffstufe
            
	  'CB':[
	   
  { "id": "CB1", "image": "serviceMod.png", "targetScreen": "CB", "buttonType": "button-type-1" },
  { "id": "CB2", "image": "eks.png", "targetScreen": "CBA", "buttonType": "button-type-2" },
  { "id": "CB3", "image": "eksLog.png", "targetScreen": "CBB", "buttonType": "button-type-3" },
  { "id": "CB4", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-4" },
  { "id": "CB5", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-5" },
  { "id": "CB6", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-6" },
  { "id": "CB7", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-7" },
  { "id": "CB8", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-8" },
  { "id": "CB9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
  { "id": "CB10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
  { "id": "CB11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
  { "id": "CB12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
  { "id": "CB13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
  { "id": "CB14", "image": "prozess.png", "targetScreen": "AK", "buttonType": "button-type-14" },
  { "id": "CB15", "image": "instandhalt.png", "targetScreen": "AL", "buttonType": "button-type-15" },
  { "id": "CB16", "image": "serviceAM.png", "targetScreen": "CB", "buttonType": "button-type-16" },
  { "id": "CB17", "image": "bbbutton.png", "targetScreen": "AM", "buttonType": "button-type-17" },
  { "id": "CB18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
  {"id": "CB20", "image": "schnittstelle.png", "targetScreen": "X", "buttonType": "button-type-75" },
 {"id": "CB21", "image": "jog.png", "targetScreen": "X", "buttonType": "button-type-76" },
 {"id": "CB22", "image": "undo.png", "targetScreen": "X", "buttonType": "button-type-77" },
 {"id": "CB23", "image": "screenShot.png", "targetScreen": "X", "buttonType": "button-type-78" },
	 {"id": "CB24", "image": "info.png", "targetScreen": "X", "buttonType": "button-type-85" },
	 {"id": "CB25", "image": "allesBeenden.png", "targetScreen": "", "buttonType": "button-type-79" },
	 {"id": "CB26", "image": "serviceModus.png", "targetScreen": "", "buttonType": "button-type-80" },
	  {"id": "CB27", "image": "apcService.png", "targetScreen": "", "buttonType": "button-type-81" },
	    {"id": "CB28", "image": "safetyService.png", "targetScreen": "", "buttonType": "button-type-82" },
		{"id": "CB29", "image": "sbhWAchsen.png", "targetScreen": "", "buttonType": "button-type-83" },
		{"id": "CB30", "image": "AutoMdaBeiOffenemRolltor.png", "targetScreen": "", "buttonType": "button-type-84" }
		
		
		
		
	       ],
		   
		   
		     // eks
            
	  'CBA':[
		   
		   
  { "id": "CBA1", "image": "serviceModCBA.png", "targetScreen": "CB", "buttonType": "button-type-1" },
  { "id": "CBA2", "image": "eksCBA.png", "targetScreen": "CBA", "buttonType": "button-type-2" },
  { "id": "CBA3", "image": "eksLog.png", "targetScreen": "CBB", "buttonType": "button-type-3" },
  { "id": "CBA4", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-4" },
  { "id": "CBA5", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-5" },
  { "id": "CBA6", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-6" },
  { "id": "CBA7", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-7" },
  { "id": "CBA8", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-8" },
  { "id": "CBA9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
  { "id": "CBA10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
  { "id": "CBA11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
  { "id": "CBA12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
  { "id": "CBA13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
  { "id": "CBA14", "image": "prozess.png", "targetScreen": "AK", "buttonType": "button-type-14" },
  { "id": "CBA15", "image": "instandhalt.png", "targetScreen": "AL", "buttonType": "button-type-15" },
  { "id": "CBA16", "image": "serviceAM.png", "targetScreen": "CBA", "buttonType": "button-type-16" },
  { "id": "CBA17", "image": "bbbutton.png", "targetScreen": "AM", "buttonType": "button-type-17" },
  { "id": "CBA18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
  { "id": "CBA19", "image": "schnittstelle.png", "targetScreen": "X", "buttonType": "button-type-75" },
  { "id": "CBA20", "image": "schnittstelle.png", "targetScreen": "X", "buttonType": "button-type-75" },
  { "id": "CBA21", "image": "jog.png", "targetScreen": "X", "buttonType": "button-type-76" },
  { "id": "CBA22", "image": "undo.png", "targetScreen": "X", "buttonType": "button-type-77" },
  { "id": "CBA23", "image": "screenShot.png", "targetScreen": "X", "buttonType": "button-type-78" },
  { "id": "CBA24", "image": "info.png", "targetScreen": "X", "buttonType": "button-type-85" },
  { "id": "CBA25", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-79" },
  { "id": "CBA26", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-80" },
  { "id": "CBA27", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-81" },
  { "id": "CBA28", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-82" },
  { "id": "CBA29", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-83" },
  { "id": "CBA30", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-84" }


		   
		   
		   
		    ],
		   
		   
		   
		   // eksLog
		   
		   
		   
  'CBB': [
    { "id": "CBB1", "image": "serviceModCBA.png", "targetScreen": "CB", "buttonType": "button-type-1" },
    { "id": "CBB2", "image": "eks.png", "targetScreen": "CBA", "buttonType": "button-type-2" },
    { "id": "CBB3", "image": "eksLogCBB.png", "targetScreen": "CBB", "buttonType": "button-type-3" },
    { "id": "CBB4", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-4" },
    { "id": "CBB5", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-5" },
    { "id": "CBB6", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-6" },
    { "id": "CBB7", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-7" },
    { "id": "CBB8", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-8" },
    { "id": "CBB9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
    { "id": "CBB10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
    { "id": "CBB11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
    { "id": "CBB12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
    { "id": "CBB13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
    { "id": "CBB14", "image": "prozess.png", "targetScreen": "AK", "buttonType": "button-type-14" },
    { "id": "CBB15", "image": "instandhalt.png", "targetScreen": "AL", "buttonType": "button-type-15" },
    { "id": "CBB16", "image": "serviceAM.png", "targetScreen": "CBB", "buttonType": "button-type-16" },
    { "id": "CBB17", "image": "bbbutton.png", "targetScreen": "AM", "buttonType": "button-type-17" },
    { "id": "CBB18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
    { "id": "CBB19", "image": "schnittstelle.png", "targetScreen": "X", "buttonType": "button-type-75" },
    { "id": "CBB20", "image": "schnittstelle.png", "targetScreen": "X", "buttonType": "button-type-75" },
    { "id": "CBB21", "image": "jog.png", "targetScreen": "X", "buttonType": "button-type-76" },
    { "id": "CBB22", "image": "undo.png", "targetScreen": "X", "buttonType": "button-type-77" },
    { "id": "CBB23", "image": "screenShot.png", "targetScreen": "X", "buttonType": "button-type-78" },
    { "id": "CBB24", "image": "info.png", "targetScreen": "X", "buttonType": "button-type-85" }
    
  ],


		   
		   
		   	   
		   // serviceApcLinks
		   
		   
		   
  'CC': [
		   
		   
  { "id": "CC1", "image": "apcLinks.png", "targetScreen": "CC", "buttonType": "button-type-1" },
  { "id": "CC2", "image": "apcRechts.png", "targetScreen": "CD", "buttonType": "button-type-2" },
  { "id": "CC3", "image": "schrittkette.png", "targetScreen": "CE", "buttonType": "button-type-3" },
  { "id": "CC4", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-4" },
  { "id": "CC5", "image": "koppelPos.png", "targetScreen": "CF", "buttonType": "button-type-5" },
  { "id": "CC6", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-6" },
  { "id": "CC7", "image": "teileErk.png", "targetScreen": "CG", "buttonType": "button-type-7" },
  { "id": "CC8", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-8" },
  { "id": "CC9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
  { "id": "CC10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
  { "id": "CC11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
  { "id": "CC12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
  { "id": "CC13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
  { "id": "CC14", "image": "prozess.png", "targetScreen": "AK", "buttonType": "button-type-14" },
  { "id": "CC15", "image": "instandhalt.png", "targetScreen": "AL", "buttonType": "button-type-15" },
  { "id": "CC16", "image": "serviceAM.png", "targetScreen": "CC", "buttonType": "button-type-16" },
  { "id": "CC17", "image": "bbbutton.png", "targetScreen": "AM", "buttonType": "button-type-17" },
  { "id": "CC18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
  { "id": "CC19", "image": "schnittstelle.png", "targetScreen": "X", "buttonType": "button-type-75" },
  { "id": "CC20", "image": "schnittstelle.png", "targetScreen": "X", "buttonType": "button-type-75" },
  { "id": "CC21", "image": "jog.png", "targetScreen": "X", "buttonType": "button-type-76" },
  { "id": "CC22", "image": "undo.png", "targetScreen": "X", "buttonType": "button-type-77" },
  { "id": "CC23", "image": "screenShot.png", "targetScreen": "X", "buttonType": "button-type-78" },
  { "id": "CC24", "image": "info.png", "targetScreen": "X", "buttonType": "button-type-85" }


		   
		   
		   
		  ],  
		   
		   
		    // serviceApcRechts
			
			
			
			'CD': [
			
			
			
			
  { "id": "CD1", "image": "apcLinksCD.png", "targetScreen": "CC", "buttonType": "button-type-1" },
  { "id": "CD2", "image": "apcRechtsCD.png", "targetScreen": "CD", "buttonType": "button-type-2" },
  { "id": "CD3", "image": "schrittkette.png", "targetScreen": "CE", "buttonType": "button-type-3" },
  { "id": "CD4", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-4" },
  { "id": "CD5", "image": "koppelPos.png", "targetScreen": "CF", "buttonType": "button-type-5" },
  { "id": "CD6", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-6" },
  { "id": "CD7", "image": "teileErk.png", "targetScreen": "CG", "buttonType": "button-type-7" },
  { "id": "CD8", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-8" },
  { "id": "CD9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
  { "id": "CD10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
  { "id": "CD11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
  { "id": "CD12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
  { "id": "CD13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
  { "id": "CD14", "image": "prozess.png", "targetScreen": "AK", "buttonType": "button-type-14" },
  { "id": "CD15", "image": "instandhalt.png", "targetScreen": "AL", "buttonType": "button-type-15" },
  { "id": "CD16", "image": "serviceAM.png", "targetScreen": "CD", "buttonType": "button-type-16" },
  { "id": "CD17", "image": "bbbutton.png", "targetScreen": "AM", "buttonType": "button-type-17" },
  { "id": "CD18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
  { "id": "CD19", "image": "schnittstelle.png", "targetScreen": "X", "buttonType": "button-type-75" },
  { "id": "CD20", "image": "schnittstelle.png", "targetScreen": "X", "buttonType": "button-type-75" },
  { "id": "CD21", "image": "jog.png", "targetScreen": "X", "buttonType": "button-type-76" },
  { "id": "CD22", "image": "undo.png", "targetScreen": "X", "buttonType": "button-type-77" },
  { "id": "CD23", "image": "screenShot.png", "targetScreen": "X", "buttonType": "button-type-78" },
  { "id": "CD24", "image": "info.png", "targetScreen": "X", "buttonType": "button-type-85" }


			
			
			
			
		   
		    ],  
		   
		   
		   
		   
		  
		    // serviceSchrittkette		
		   
		   
		   
	
			'CE': [
				   
		   
  { "id": "CE1", "image": "apcLinksCD.png", "targetScreen": "CC", "buttonType": "button-type-1" },
  { "id": "CE2", "image": "apcRechts.png", "targetScreen": "CD", "buttonType": "button-type-2" },
  { "id": "CE3", "image": "schrittketteCE.png", "targetScreen": "CE", "buttonType": "button-type-3" },
  { "id": "CE4", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-4" },
  { "id": "CE5", "image": "koppelPos.png", "targetScreen": "CF", "buttonType": "button-type-5" },
  { "id": "CE6", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-6" },
  { "id": "CE7", "image": "teileErk.png", "targetScreen": "CG", "buttonType": "button-type-7" },
  { "id": "CE8", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-8" },
  { "id": "CE9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
  { "id": "CE10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
  { "id": "CE11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
  { "id": "CE12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
  { "id": "CE13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
  { "id": "CE14", "image": "prozess.png", "targetScreen": "AK", "buttonType": "button-type-14" },
  { "id": "CE15", "image": "instandhalt.png", "targetScreen": "AL", "buttonType": "button-type-15" },
  { "id": "CE16", "image": "serviceAM.png", "targetScreen": "CE", "buttonType": "button-type-16" },
  { "id": "CE17", "image": "bbbutton.png", "targetScreen": "AM", "buttonType": "button-type-17" },
  { "id": "CE18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
  { "id": "CE19", "image": "schnittstelle.png", "targetScreen": "X", "buttonType": "button-type-75" },
  { "id": "CE20", "image": "schnittstelle.png", "targetScreen": "X", "buttonType": "button-type-75" },
  { "id": "CE21", "image": "jog.png", "targetScreen": "X", "buttonType": "button-type-76" },
  { "id": "CE22", "image": "undo.png", "targetScreen": "X", "buttonType": "button-type-77" },
  { "id": "CE23", "image": "screenShot.png", "targetScreen": "X", "buttonType": "button-type-78" },
  { "id": "CE24", "image": "info.png", "targetScreen": "X", "buttonType": "button-type-85" }


		   
		   
		   
		   
		   
		   
		   
		       ],  
		   
		   
		     // serviceKoppelpos	
		   
		   
		   'CF': [
		   
		   
  { "id": "CF1", "image": "apcLinksCD.png", "targetScreen": "CC", "buttonType": "button-type-1" },
  { "id": "CF2", "image": "apcRechts.png", "targetScreen": "CD", "buttonType": "button-type-2" },
  { "id": "CF3", "image": "schrittkette.png", "targetScreen": "CE", "buttonType": "button-type-3" },
  { "id": "CF4", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-4" },
  { "id": "CF5", "image": "koppelPosCF.png", "targetScreen": "CF", "buttonType": "button-type-5" },
  { "id": "CF6", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-6" },
  { "id": "CF7", "image": "teileErk.png", "targetScreen": "CG", "buttonType": "button-type-7" },
  { "id": "CF8", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-8" },
  { "id": "CF9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
  { "id": "CF10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
  { "id": "CF11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
  { "id": "CF12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
  { "id": "CF13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
  { "id": "CF14", "image": "prozess.png", "targetScreen": "AK", "buttonType": "button-type-14" },
  { "id": "CF15", "image": "instandhalt.png", "targetScreen": "AL", "buttonType": "button-type-15" },
  { "id": "CF16", "image": "serviceAM.png", "targetScreen": "CF", "buttonType": "button-type-16" },
  { "id": "CF17", "image": "bbbutton.png", "targetScreen": "AM", "buttonType": "button-type-17" },
  { "id": "CF18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
  { "id": "CF19", "image": "schnittstelle.png", "targetScreen": "X", "buttonType": "button-type-75" },
  { "id": "CF20", "image": "schnittstelle.png", "targetScreen": "X", "buttonType": "button-type-75" },
  { "id": "CF21", "image": "jog.png", "targetScreen": "X", "buttonType": "button-type-76" },
  { "id": "CF22", "image": "undo.png", "targetScreen": "X", "buttonType": "button-type-77" },
  { "id": "CF23", "image": "screenShot.png", "targetScreen": "X", "buttonType": "button-type-78" },
  { "id": "CF24", "image": "info.png", "targetScreen": "X", "buttonType": "button-type-85" }


	  ],  	   
		   
		   
		   
		   // serviceTeileErk	
		   
		   'CG': [
		   
		   
		   
  { "id": "CG1", "image": "apcLinksCD.png", "targetScreen": "CC", "buttonType": "button-type-1" },
  { "id": "CG2", "image": "apcRechts.png", "targetScreen": "CD", "buttonType": "button-type-2" },
  { "id": "CG3", "image": "schrittkette.png", "targetScreen": "CE", "buttonType": "button-type-3" },
  { "id": "CG4", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-4" },
  { "id": "CG5", "image": "koppelPos.png", "targetScreen": "CF", "buttonType": "button-type-5" },
  { "id": "CG6", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-6" },
  { "id": "CG7", "image": "teileErkCG.png", "targetScreen": "CG", "buttonType": "button-type-7" },
  { "id": "CG8", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-8" },
  { "id": "CG9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
  { "id": "CG10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
  { "id": "CG11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
  { "id": "CG12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
  { "id": "CG13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
  { "id": "CG14", "image": "prozess.png", "targetScreen": "AK", "buttonType": "button-type-14" },
  { "id": "CG15", "image": "instandhalt.png", "targetScreen": "AL", "buttonType": "button-type-15" },
  { "id": "CG16", "image": "serviceAM.png", "targetScreen": "CG", "buttonType": "button-type-16" },
  { "id": "CG17", "image": "bbbutton.png", "targetScreen": "AM", "buttonType": "button-type-17" },
  { "id": "CG18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
  { "id": "CG19", "image": "schnittstelle.png", "targetScreen": "X", "buttonType": "button-type-75" },
  { "id": "CG20", "image": "schnittstelle.png", "targetScreen": "X", "buttonType": "button-type-75" },
  { "id": "CG21", "image": "jog.png", "targetScreen": "X", "buttonType": "button-type-76" },
  { "id": "CG22", "image": "undo.png", "targetScreen": "X", "buttonType": "button-type-77" },
  { "id": "CG23", "image": "screenShot.png", "targetScreen": "X", "buttonType": "button-type-78" },
  { "id": "CG24", "image": "info.png", "targetScreen": "X", "buttonType": "button-type-85" }


		   
		   
		   
		   
		   
		   
		   
		   
		   ], 
		   
		   
		   
		   
		   		   // serviceSp11	
		   
		   
		   
		   
		   
		   
		     'C1H': [
		   
		   
  { "id": "C1H1", "image": "serviceSp11.png", "targetScreen": "C1H", "buttonType": "button-type-1" },
  { "id": "C1H2", "image": "serviceSp41C1H.png", "targetScreen": "CCH", "buttonType": "button-type-2" },
  { "id": "C1H3", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-3" },
  { "id": "C1H4", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-4" },
  { "id": "C1H5", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-5" },
  { "id": "C1H6", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-6" },
  { "id": "C1H7", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-7" },
  { "id": "C1H8", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-8" },
  { "id": "C1H9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
  { "id": "C1H10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
  { "id": "C1H11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
  { "id": "C1H12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
  { "id": "C1H13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
  { "id": "C1H14", "image": "prozess.png", "targetScreen": "AK", "buttonType": "button-type-14" },
  { "id": "C1H15", "image": "instandhalt.png", "targetScreen": "AL", "buttonType": "button-type-15" },
  { "id": "C1H16", "image": "serviceAM.png", "targetScreen": "C1H", "buttonType": "button-type-16" },
  { "id": "C1H17", "image": "bbbutton.png", "targetScreen": "AM", "buttonType": "button-type-17" },
  { "id": "C1H18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
  { "id": "C1H19", "image": "schnittstelle.png", "targetScreen": "X", "buttonType": "button-type-75" },
  { "id": "C1H20", "image": "schnittstelle.png", "targetScreen": "X", "buttonType": "button-type-75" },
  { "id": "C1H21", "image": "jog.png", "targetScreen": "X", "buttonType": "button-type-76" },
  { "id": "C1H22", "image": "undo.png", "targetScreen": "X", "buttonType": "button-type-77" },
  { "id": "C1H23", "image": "screenShot.png", "targetScreen": "X", "buttonType": "button-type-78" },
  { "id": "C1H24", "image": "info.png", "targetScreen": "X", "buttonType": "button-type-85" }


		   
		   
		   
		    ], 
			
			
			
			
			
			
			
			
			
			
			
			
			
		   
		    // serviceSp41	
		   
		    'CCH': [
		   
		   
		   
		   
		   
  { "id": "CCH1", "image": "serviceSp11CCH.png", "targetScreen": "C1H", "buttonType": "button-type-1" },
  { "id": "CCH2", "image": "serviceSp41CCH.png", "targetScreen": "CCH", "buttonType": "button-type-2" },
  { "id": "CCH3", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-3" },
  { "id": "CCH4", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-4" },
  { "id": "CCH5", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-5" },
  { "id": "CCH6", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-6" },
  { "id": "CCH7", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-7" },
  { "id": "CCH8", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-8" },
  { "id": "CCH9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
  { "id": "CCH10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
  { "id": "CCH11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
  { "id": "CCH12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
  { "id": "CCH13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
  { "id": "CCH14", "image": "prozess.png", "targetScreen": "AK", "buttonType": "button-type-14" },
  { "id": "CCH15", "image": "instandhalt.png", "targetScreen": "AL", "buttonType": "button-type-15" },
  { "id": "CCH16", "image": "serviceAM.png", "targetScreen": "CCH", "buttonType": "button-type-16" },
  { "id": "CCH17", "image": "bbbutton.png", "targetScreen": "AM", "buttonType": "button-type-17" },
  { "id": "CCH18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
  { "id": "CCH19", "image": "schnittstelle.png", "targetScreen": "X", "buttonType": "button-type-75" },
  { "id": "CCH20", "image": "schnittstelle.png", "targetScreen": "X", "buttonType": "button-type-75" },
  { "id": "CCH21", "image": "jog.png", "targetScreen": "X", "buttonType": "button-type-76" },
  { "id": "CCH22", "image": "undo.png", "targetScreen": "X", "buttonType": "button-type-77" },
  { "id": "CCH23", "image": "screenShot.png", "targetScreen": "X", "buttonType": "button-type-78" },
  { "id": "CCH24", "image": "info.png", "targetScreen": "X", "buttonType": "button-type-85" }


		   
		   

		   
		   
		   
		     ], 
			 
			 
			 
			 
			 
			 //serviceTeststopp
 'CI': [			 
			 
  { "id": "CI1", "image": "serviceTestsopp.png", "targetScreen": "CI", "buttonType": "button-type-1" },
  { "id": "CI2", "image": "serviceTestsoppWCI.png", "targetScreen": "CJ", "buttonType": "button-type-2" },
  { "id": "CI3", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-3" },
  { "id": "CI4", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-4" },
  { "id": "CI5", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-5" },
  { "id": "CI6", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-6" },
  { "id": "CI7", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-7" },
  { "id": "CI8", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-8" },
  { "id": "CI9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
  { "id": "CI10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
  { "id": "CI11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
  { "id": "CI12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
  { "id": "CI13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
  { "id": "CI14", "image": "prozess.png", "targetScreen": "AK", "buttonType": "button-type-14" },
  { "id": "CI15", "image": "instandhalt.png", "targetScreen": "AL", "buttonType": "button-type-15" },
  { "id": "CI16", "image": "serviceAM.png", "targetScreen": "CI", "buttonType": "button-type-16" },
  { "id": "CI17", "image": "bbbutton.png", "targetScreen": "AM", "buttonType": "button-type-17" },
  { "id": "CI18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
  { "id": "CI19", "image": "schnittstelle.png", "targetScreen": "X", "buttonType": "button-type-75" },
  { "id": "CI20", "image": "schnittstelle.png", "targetScreen": "X", "buttonType": "button-type-75" },
  { "id": "CI21", "image": "jog.png", "targetScreen": "X", "buttonType": "button-type-76" },
  { "id": "CI22", "image": "undo.png", "targetScreen": "X", "buttonType": "button-type-77" },
  { "id": "CI23", "image": "screenShot.png", "targetScreen": "X", "buttonType": "button-type-78" },
  { "id": "CI24", "image": "info.png", "targetScreen": "X", "buttonType": "button-type-85" }
],
		 
			 
			 
			 
			 //serviceTeststoppW
			 
			 
			 
			 
			 
	'CJ': [
			 
		 
  { "id": "CJ1", "image": "serviceTestsoppWCI.png", "targetScreen": "CI", "buttonType": "button-type-1" },
  { "id": "CJ2", "image": "serviceTestsopp.png", "targetScreen": "CJ", "buttonType": "button-type-2" },
  { "id": "CJ3", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-3" },
  { "id": "CJ4", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-4" },
  { "id": "CJ5", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-5" },
  { "id": "CJ6", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-6" },
  { "id": "CJ7", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-7" },
  { "id": "CJ8", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-8" },
  { "id": "CJ9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
  { "id": "CJ10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
  { "id": "CJ11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
  { "id": "CJ12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
  { "id": "CJ13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
  { "id": "CJ14", "image": "prozess.png", "targetScreen": "AK", "buttonType": "button-type-14" },
  { "id": "CJ15", "image": "instandhalt.png", "targetScreen": "AL", "buttonType": "button-type-15" },
  { "id": "CJ16", "image": "serviceAM.png", "targetScreen": "CJ", "buttonType": "button-type-16" },
  { "id": "CJ17", "image": "bbbutton.png", "targetScreen": "AM", "buttonType": "button-type-17" },
  { "id": "CJ18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
  { "id": "CJ19", "image": "schnittstelle.png", "targetScreen": "X", "buttonType": "button-type-75" },
  { "id": "CJ20", "image": "schnittstelle.png", "targetScreen": "X", "buttonType": "button-type-75" },
  { "id": "CJ21", "image": "jog.png", "targetScreen": "X", "buttonType": "button-type-76" },
  { "id": "CJ22", "image": "undo.png", "targetScreen": "X", "buttonType": "button-type-77" },
  { "id": "CJ23", "image": "screenShot.png", "targetScreen": "X", "buttonType": "button-type-78" },
  { "id": "CJ24", "image": "info.png", "targetScreen": "X", "buttonType": "button-type-85" }

		 
		],	 
			 
			 
			 
			 //konfigHydrSpKr
			 
			 
	'CK': [
	


  { "id": "CK1", "image": "serviceKonfigHydrSpKrCK.png", "targetScreen": "CK", "buttonType": "button-type-1" },
  { "id": "CK2", "image": "serviceKonfigPneuSpKrCK.png", "targetScreen": "CL", "buttonType": "button-type-2" },
  { "id": "CK3", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-3" },
  { "id": "CK4", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-4" },
  { "id": "CK5", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-5" },
  { "id": "CK6", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-6" },
  { "id": "CK7", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-7" },
  { "id": "CK8", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-8" },
  { "id": "CK9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
  { "id": "CK10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
  { "id": "CK11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
  { "id": "CK12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
  { "id": "CK13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
  { "id": "CK14", "image": "prozess.png", "targetScreen": "AK", "buttonType": "button-type-14" },
  { "id": "CK15", "image": "instandhalt.png", "targetScreen": "AL", "buttonType": "button-type-15" },
  { "id": "CK16", "image": "serviceAM.png", "targetScreen": "CK", "buttonType": "button-type-16" },
  { "id": "CK17", "image": "bbbutton.png", "targetScreen": "AM", "buttonType": "button-type-17" },
  { "id": "CK18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
  { "id": "CK19", "image": "schnittstelle.png", "targetScreen": "X", "buttonType": "button-type-75" },
  { "id": "CK20", "image": "schnittstelle.png", "targetScreen": "X", "buttonType": "button-type-75" },
  { "id": "CK21", "image": "jog.png", "targetScreen": "X", "buttonType": "button-type-76" },
  { "id": "CK22", "image": "undo.png", "targetScreen": "X", "buttonType": "button-type-77" },
  { "id": "CK23", "image": "screenShot.png", "targetScreen": "X", "buttonType": "button-type-78" },
  { "id": "CK24", "image": "info.png", "targetScreen": "X", "buttonType": "button-type-85" }


       ],	 





                         //konfigPneuSpKr

	'CL': [
	
		 
  { "id": "CL1", "image": "serviceKonfigHydrSpKr.png", "targetScreen": "CK", "buttonType": "button-type-1" },
  { "id": "CL2", "image": "serviceKonfigPneuSpKr.png", "targetScreen": "CL", "buttonType": "button-type-2" },
  { "id": "CL3", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-3" },
  { "id": "CL4", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-4" },
  { "id": "CL5", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-5" },
  { "id": "CL6", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-6" },
  { "id": "CL7", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-7" },
  { "id": "CL8", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-8" },
  { "id": "CL9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
  { "id": "CL10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
  { "id": "CL11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
  { "id": "CL12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
  { "id": "CL13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
  { "id": "CL14", "image": "prozess.png", "targetScreen": "AK", "buttonType": "button-type-14" },
  { "id": "CL15", "image": "instandhalt.png", "targetScreen": "AL", "buttonType": "button-type-15" },
  { "id": "CL16", "image": "serviceAM.png", "targetScreen": "CL", "buttonType": "button-type-16" },
  { "id": "CL17", "image": "bbbutton.png", "targetScreen": "AM", "buttonType": "button-type-17" },
  { "id": "CL18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
  { "id": "CL19", "image": "schnittstelle.png", "targetScreen": "X", "buttonType": "button-type-75" },
  { "id": "CL20", "image": "schnittstelle.png", "targetScreen": "X", "buttonType": "button-type-75" },
  { "id": "CL21", "image": "jog.png", "targetScreen": "X", "buttonType": "button-type-76" },
  { "id": "CL22", "image": "undo.png", "targetScreen": "X", "buttonType": "button-type-77" },
  { "id": "CL23", "image": "screenShot.png", "targetScreen": "X", "buttonType": "button-type-78" },
  { "id": "CL24", "image": "info.png", "targetScreen": "X", "buttonType": "button-type-85" }


		 
		 

		 
		 
		 
		 ],	  
		 
		 
		 // serviceTracesSchimerung
		 
		 
		 'CM': [
		 
		 
		 
  { "id": "CM1", "image": "serviceTracesSchimerungCM.png", "targetScreen": "CM", "buttonType": "button-type-1" },
  { "id": "CM2", "image": "serviceTracesTempT1.png", "targetScreen": "CN", "buttonType": "button-type-2" },
  { "id": "CM3", "image": "serviceTracesTrigTempT1.png", "targetScreen": "CO", "buttonType": "button-type-3" },
  { "id": "CM4", "image": "serviceTracesTempT2.png", "targetScreen": "CP", "buttonType": "button-type-4" },
  { "id": "CM5", "image": "serviceTracesTrigTempT2.png", "targetScreen": "CR", "buttonType": "button-type-5" },
  { "id": "CM6", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-6" },
  { "id": "CM7", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-7" },
  { "id": "CM8", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-8" },
  { "id": "CM9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
  { "id": "CM10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
  { "id": "CM11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
  { "id": "CM12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
  { "id": "CM13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
  { "id": "CM14", "image": "prozess.png", "targetScreen": "AK", "buttonType": "button-type-14" },
  { "id": "CM15", "image": "instandhalt.png", "targetScreen": "AL", "buttonType": "button-type-15" },
  { "id": "CM16", "image": "serviceAM.png", "targetScreen": "CM", "buttonType": "button-type-16" },
  { "id": "CM17", "image": "bbbutton.png", "targetScreen": "AM", "buttonType": "button-type-17" },
  { "id": "CM18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
  { "id": "CM19", "image": "schnittstelle.png", "targetScreen": "X", "buttonType": "button-type-75" },
  { "id": "CM20", "image": "schnittstelle.png", "targetScreen": "X", "buttonType": "button-type-75" },
  { "id": "CM21", "image": "jog.png", "targetScreen": "X", "buttonType": "button-type-76" },
  { "id": "CM22", "image": "undo.png", "targetScreen": "X", "buttonType": "button-type-77" },
  { "id": "CM23", "image": "screenShot.png", "targetScreen": "X", "buttonType": "button-type-78" },
  { "id": "CM24", "image": "info.png", "targetScreen": "X", "buttonType": "button-type-85" }


		 
		 
		 
		 
		 
		 
		 
		 
		 
		 
		 
		 
		 
		  ],	  
		 
		 
		 
		  
		 // serviceTracesTempT1
		 
		 
		 'CN': [
		 
		 
		 
  { "id": "CN1", "image": "serviceTracesSchimerung.png", "targetScreen": "CM", "buttonType": "button-type-1" },
  { "id": "CN2", "image": "serviceTracesTempT1CN.png", "targetScreen": "CN", "buttonType": "button-type-2" },
  { "id": "CN3", "image": "serviceTracesTrigTempT1.png", "targetScreen": "CO", "buttonType": "button-type-3" },
  { "id": "CN4", "image": "serviceTracesTempT2.png", "targetScreen": "CP", "buttonType": "button-type-4" },
  { "id": "CN5", "image": "serviceTracesTrigTempT2.png", "targetScreen": "CR", "buttonType": "button-type-5" },
  { "id": "CN6", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-6" },
  { "id": "CN7", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-7" },
  { "id": "CN8", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-8" },
  { "id": "CN9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
  { "id": "CN10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
  { "id": "CN11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
  { "id": "CN12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
  { "id": "CN13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
  { "id": "CN14", "image": "prozess.png", "targetScreen": "AK", "buttonType": "button-type-14" },
  { "id": "CN15", "image": "instandhalt.png", "targetScreen": "AL", "buttonType": "button-type-15" },
  { "id": "CN16", "image": "serviceAM.png", "targetScreen": "CN", "buttonType": "button-type-16" },
  { "id": "CN17", "image": "bbbutton.png", "targetScreen": "AM", "buttonType": "button-type-17" },
  { "id": "CN18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
  { "id": "CN19", "image": "schnittstelle.png", "targetScreen": "X", "buttonType": "button-type-75" },
  { "id": "CN20", "image": "schnittstelle.png", "targetScreen": "X", "buttonType": "button-type-75" },
  { "id": "CN21", "image": "jog.png", "targetScreen": "X", "buttonType": "button-type-76" },
  { "id": "CN22", "image": "undo.png", "targetScreen": "X", "buttonType": "button-type-77" },
  { "id": "CN23", "image": "screenShot.png", "targetScreen": "X", "buttonType": "button-type-78" },
  { "id": "CN24", "image": "info.png", "targetScreen": "X", "buttonType": "button-type-85" }


		 
		 
		 
		 
		 
		 
		 
		 
		 
		   ],	  
		 
		 
		 
		 
		 // serviceTracesTrigTempT1
		 
		 
		 
		 
		  'CO': [
		 
		 
		 
  { "id": "CO1", "image": "serviceTracesSchimerung.png", "targetScreen": "CM", "buttonType": "button-type-1" },
  { "id": "CO2", "image": "serviceTracesTempT1.png", "targetScreen": "CN", "buttonType": "button-type-2" },
  { "id": "CO3", "image": "serviceTracesTrigTempT1CO.png", "targetScreen": "CO", "buttonType": "button-type-3" },
  { "id": "CO4", "image": "serviceTracesTempT2.png", "targetScreen": "CP", "buttonType": "button-type-4" },
  { "id": "CO5", "image": "serviceTracesTrigTempT2.png", "targetScreen": "CR", "buttonType": "button-type-5" },
  { "id": "CO6", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-6" },
  { "id": "CO7", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-7" },
  { "id": "CO8", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-8" },
  { "id": "CO9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
  { "id": "CO10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
  { "id": "CO11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
  { "id": "CO12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
  { "id": "CO13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
  { "id": "CO14", "image": "prozess.png", "targetScreen": "AK", "buttonType": "button-type-14" },
  { "id": "CO15", "image": "instandhalt.png", "targetScreen": "AL", "buttonType": "button-type-15" },
  { "id": "CO16", "image": "serviceAM.png", "targetScreen": "CO", "buttonType": "button-type-16" },
  { "id": "CO17", "image": "bbbutton.png", "targetScreen": "AM", "buttonType": "button-type-17" },
  { "id": "CO18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
  { "id": "CO19", "image": "schnittstelle.png", "targetScreen": "X", "buttonType": "button-type-75" },
  { "id": "CO20", "image": "schnittstelle.png", "targetScreen": "X", "buttonType": "button-type-75" },
  { "id": "CO21", "image": "jog.png", "targetScreen": "X", "buttonType": "button-type-76" },
  { "id": "CO22", "image": "undo.png", "targetScreen": "X", "buttonType": "button-type-77" },
  { "id": "CO23", "image": "screenShot.png", "targetScreen": "X", "buttonType": "button-type-78" },
  { "id": "CO24", "image": "info.png", "targetScreen": "X", "buttonType": "button-type-85" }


		 
		 
		 
		 
		 
		 
		 
		 
		   ],	  
		 
		 
		 
		 
		 
		 // serviceTracesTempT2
		 
		 
		 
		 
		 
		 
	  'CP': [	 
	
  
  { "id": "CP1", "image": "serviceTracesSchimerung.png", "targetScreen": "CM", "buttonType": "button-type-1" },
  { "id": "CP2", "image": "serviceTracesTempT1.png", "targetScreen": "CN", "buttonType": "button-type-2" },
  { "id": "CP3", "image": "serviceTracesTrigTempT1.png", "targetScreen": "CO", "buttonType": "button-type-3" },
  { "id": "CP4", "image": "serviceTracesTempT2CP.png", "targetScreen": "CP", "buttonType": "button-type-4" },
  { "id": "CP5", "image": "serviceTracesTrigTempT2.png", "targetScreen": "CR", "buttonType": "button-type-5" },
  { "id": "CP6", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-6" },
  { "id": "CP7", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-7" },
  { "id": "CP8", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-8" },
  { "id": "CP9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
  { "id": "CP10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
  { "id": "CP11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
  { "id": "CP12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
  { "id": "CP13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
  { "id": "CP14", "image": "prozess.png", "targetScreen": "AK", "buttonType": "button-type-14" },
  { "id": "CP15", "image": "instandhalt.png", "targetScreen": "AL", "buttonType": "button-type-15" },
  { "id": "CP16", "image": "serviceAM.png", "targetScreen": "CP", "buttonType": "button-type-16" },
  { "id": "CP17", "image": "bbbutton.png", "targetScreen": "AM", "buttonType": "button-type-17" },
  { "id": "CP18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
  { "id": "CP19", "image": "schnittstelle.png", "targetScreen": "X", "buttonType": "button-type-75" },
  { "id": "CP20", "image": "schnittstelle.png", "targetScreen": "X", "buttonType": "button-type-75" },
  { "id": "CP21", "image": "jog.png", "targetScreen": "X", "buttonType": "button-type-76" },
  { "id": "CP22", "image": "undo.png", "targetScreen": "X", "buttonType": "button-type-77" },
  { "id": "CP23", "image": "screenShot.png", "targetScreen": "X", "buttonType": "button-type-78" },
  { "id": "CP24", "image": "info.png", "targetScreen": "X", "buttonType": "button-type-85" }

		 
		 
		 
		 
	   ],	  
		 	 
		 
		 
		 // serviceTracesTrigTempT2
		 
		 
		  'CR': [	 
	
		 
		 
		 
  { "id": "CR1", "image": "serviceTracesSchimerung.png", "targetScreen": "CM", "buttonType": "button-type-1" },
  { "id": "CR2", "image": "serviceTracesTempT1.png", "targetScreen": "CN", "buttonType": "button-type-2" },
  { "id": "CR3", "image": "serviceTracesTrigTempT1.png", "targetScreen": "CO", "buttonType": "button-type-3" },
  { "id": "CR4", "image": "serviceTracesTempT2.png", "targetScreen": "CP", "buttonType": "button-type-4" },
  { "id": "CR5", "image": "serviceTracesTrigTempT2CR.png", "targetScreen": "CR", "buttonType": "button-type-5" },
  { "id": "CR6", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-6" },
  { "id": "CR7", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-7" },
  { "id": "CR8", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-8" },
  { "id": "CR9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
  { "id": "CR10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
  { "id": "CR11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
  { "id": "CR12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
  { "id": "CR13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
  { "id": "CR14", "image": "prozess.png", "targetScreen": "AK", "buttonType": "button-type-14" },
  { "id": "CR15", "image": "instandhalt.png", "targetScreen": "AL", "buttonType": "button-type-15" },
  { "id": "CR16", "image": "serviceAM.png", "targetScreen": "CR", "buttonType": "button-type-16" },
  { "id": "CR17", "image": "bbbutton.png", "targetScreen": "AM", "buttonType": "button-type-17" },
  { "id": "CR18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
  { "id": "CR19", "image": "schnittstelle.png", "targetScreen": "X", "buttonType": "button-type-75" },
  { "id": "CR20", "image": "schnittstelle.png", "targetScreen": "X", "buttonType": "button-type-75" },
  { "id": "CR21", "image": "jog.png", "targetScreen": "X", "buttonType": "button-type-76" },
  { "id": "CR22", "image": "undo.png", "targetScreen": "X", "buttonType": "button-type-77" },
  { "id": "CR23", "image": "screenShot.png", "targetScreen": "X", "buttonType": "button-type-78" },
  { "id": "CR24", "image": "info.png", "targetScreen": "X", "buttonType": "button-type-85" }


		 
		 
		 
		 
		 
		 
		 
		 
		 
		 
		 
		 
		 
		 
		   ],
		 
		   
		   // instandhaltVersion
  'CA':[		 
{ "id": "CA1", "image": "zahler.png", "targetScreen": "BO", "buttonType": "button-type-1" },
{ "id": "CA2", "image": "leer.png", "targetScreen": "BL", "buttonType": "button-type-2" },
{ "id": "CA3", "image": "leer.png", "targetScreen": "AK", "buttonType": "button-type-3" },
{ "id": "CA4", "image": "sprache.png", "targetScreen": "AL", "buttonType": "button-type-4" },
{ "id": "CA5", "image": "uhrstellen.png", "targetScreen": "BW", "buttonType": "button-type-5" },
{ "id": "CA6", "image": "reinigung.png", "targetScreen": "BZ", "buttonType": "button-type-6" },
{ "id": "CA7", "image": "version.png", "targetScreen": "CA", "buttonType": "button-type-7" },
{ "id": "CA8", "image": "leer.png", "targetScreen": "BN", "buttonType": "button-type-8" },
{ "id": "CA9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
{ "id": "CA10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
{ "id": "CA11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
{ "id": "CA12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
{ "id": "CA13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
{ "id": "CA14", "image": "prozess.png", "targetScreen": "AK", "buttonType": "button-type-14" },
{ "id": "CA15", "image": "instandhaltMaschine.png", "targetScreen": "CA", "buttonType": "button-type-15" },
{ "id": "CA16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
{ "id": "CA17", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-17" },
{ "id": "CA18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
{ "id": "CA18", "image": "detailsNeben.png", "targetScreen": "CACA", "buttonType": "button-type-101" }			 
	 
		 ],
			 
		 // instandhaltVersionDetails
		 
  "CACA": [
    { "id": "CACA1", "image": "zahler.png", "targetScreen": "BO", "buttonType": "button-type-1" },
    { "id": "CACA2", "image": "leer.png", "targetScreen": "BL", "buttonType": "button-type-2" },
    { "id": "CACA3", "image": "leer.png", "targetScreen": "AK", "buttonType": "button-type-3" },
    { "id": "CACA4", "image": "sprache.png", "targetScreen": "AL", "buttonType": "button-type-4" },
    { "id": "CACA5", "image": "uhrstellen.png", "targetScreen": "BW", "buttonType": "button-type-5" },
    { "id": "CACA6", "image": "reinigung.png", "targetScreen": "BZ", "buttonType": "button-type-6" },
    { "id": "CACA7", "image": "version.png", "targetScreen": "CA", "buttonType": "button-type-7" },
    { "id": "CACA8", "image": "leer.png", "targetScreen": "BN", "buttonType": "button-type-8" },
    { "id": "CACA9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
    { "id": "CACA10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
    { "id": "CACA11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
    { "id": "CACA12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
    { "id": "CACA13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
    { "id": "CACA14", "image": "prozess.png", "targetScreen": "AK", "buttonType": "button-type-14" },
    { "id": "CACA15", "image": "instandhaltMaschine.png", "targetScreen": "CA", "buttonType": "button-type-15" },
    { "id": "CACA16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
    { "id": "CACA17", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-17" },
    { "id": "CACA18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
    { "id": "CACA19", "image": "sollIstVergleich.png", "targetScreen": "CACB", "buttonType": "button-type-99" },
	 { "id": "CACA19", "image": "detailsAnzeigenDurchsichtig.png", "targetScreen": "", "buttonType": "button-type-101" },
	 { "id": "CACA19", "image": "zurück.png", "targetScreen": "CA", "buttonType": "button-type-103" }
  ],


		 
		 
  "CACB": [
    { "id": "CACB1", "image": "zahler.png", "targetScreen": "BO", "buttonType": "button-type-1" },
    { "id": "CACB2", "image": "leer.png", "targetScreen": "BL", "buttonType": "button-type-2" },
    { "id": "CACB3", "image": "leer.png", "targetScreen": "AK", "buttonType": "button-type-3" },
    { "id": "CACB4", "image": "sprache.png", "targetScreen": "AL", "buttonType": "button-type-4" },
    { "id": "CACB5", "image": "uhrstellen.png", "targetScreen": "BW", "buttonType": "button-type-5" },
    { "id": "CACB6", "image": "reinigung.png", "targetScreen": "BZ", "buttonType": "button-type-6" },
    { "id": "CACB7", "image": "version.png", "targetScreen": "CA", "buttonType": "button-type-7" },
    { "id": "CACB8", "image": "leer.png", "targetScreen": "BN", "buttonType": "button-type-8" },
    { "id": "CACB9", "image": "vorbereiten.png", "targetScreen": "AH", "buttonType": "button-type-9" },
    { "id": "CACB10", "image": "statusAH.png", "targetScreen": "A", "buttonType": "button-type-10" },
    { "id": "CACB11", "image": "handbetrieb.png", "targetScreen": "BE", "buttonType": "button-type-11" },
    { "id": "CACB12", "image": "diagnose.png", "targetScreen": "AJ", "buttonType": "button-type-12" },
    { "id": "CACB13", "image": "leer.png", "targetScreen": "", "buttonType": "button-type-13" },
    { "id": "CACB14", "image": "prozess.png", "targetScreen": "AK", "buttonType": "button-type-14" },
    { "id": "CACB15", "image": "instandhaltMaschine.png", "targetScreen": "CA", "buttonType": "button-type-15" },
    { "id": "CACB16", "image": "service.png", "targetScreen": "AM", "buttonType": "button-type-16" },
    { "id": "CACB17", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-17" },
    { "id": "CACB18", "image": "bbutton.png", "targetScreen": "", "buttonType": "button-type-18" },
    { "id": "CACB19", "image": "sollIstVergleichGrau.png", "targetScreen": "CACA", "buttonType": "button-type-99" },
    { "id": "CACB20", "image": "detailsAnzeigenDurchsichtig.png", "targetScreen": "", "buttonType": "button-type-101" },
    { "id": "CACB21", "image": "zurück.png", "targetScreen": "CA", "buttonType": "button-type-103" }
  ],


		 
		 
		 
		 
		 
		 
		 
		 
		 
		 
		 
		 
		  // serviceZugriffstufe

	   
	   
	      
		


};

function initProgram() {
    updateScreen();
    updateButtons();
	


	
	
}


function changeScreen(screen) {
    previousScreens.push(currentScreen);
    currentScreen = screen;
    updateScreen();
    updateButtons();
}










function updateScreen() {
    var screenElement = document.getElementById('hmi-screen');
    if (!screenElement) {
        console.error('Element "hmi-screen" wurde nicht gefunden.');
        return;
    }

    var currentConfig = {
       
	           'X': { content: '', background: ' '},
		
        
// uebersicht

	   'A': { content: '', background: 'url(bilder/screens/uebersicht.png)' },
		
		// handbetrieb
		
        'B': { content: '', background: 'url(bilder/screens/handbetrieb.png)' },
		
		// handbetriebnext
		
		
		'BB': { content: '', background: 'url(bilder/screens/handbetriebnext.png)' },
		
		// C
		
		
        'C': { content: '', background: 'url(bilder/screens/C.png)' },
		
		// elektrikallgemein
		
		
		'D': { content: '', background: 'url(bilder/screens/elektrikallgemein.png)'},
		
		// achsen
	
		
		'E': { content: '', background: 'url(bilder/screens/achsen.png)'},
		
		
		// kuehlegregat
		
		'F': { content: '', background: 'url(bilder/screens/kuehlaggregat.png)'},
		
		
		// mms
		
		'G': { content: '', background: 'url(bilder/screens/mms.png)'},
		
		
		// hydraulikspannsystem
		
		
		'H': { content: '', background: 'url(bilder/screens/hydraulikspannsystem.png)'},
		
		// werkzeugwechsler1
		
		'CH': { content: '', background: 'url(bilder/screens/werkzeugwechsler1.png)'},
		
		
		// werkzeugwechsler2
		
		'Q': { content: '', background: 'url(bilder/screens/werkzeugwechsler2.png)'},
		
		
		// steuerspannung
		
		
		
		'I': { content: '', background: 'url(bilder/screens/steuerspannung.png)'},
		
		// spindeln
		
		
		'J': { content: '', background: 'url(bilder/screens/spindeln.png)'},
		
		// bohrerbruchwerkzeugw1
		
		
		'K': { content: '', background: 'url(bilder/screens/bohrerbruchwerkzeugw1.png)'},
		
		// grundstellung
		
		
		'L': { content: '', background: 'url(bilder/screens/grundstellung.png)'},
		
		// spaeneentsorgung
		
		'M': { content: '', background: 'url(bilder/screens/spaeneentsorgung.png)'},
		
		// hydraulikspanndruck
		
		
		'N': { content: '', background: 'url(bilder/screens/hydraulikspanndruck.png)'},
		
		
		// nothalt
		
		'O': { content: '', background: 'url(bilder/screens/nothalt.png)'},
		
		// absaugung
		
		
		'P': { content: '', background: 'url(bilder/screens/absaugung.png)'},
		
		
		// schutztueren
		
		'R': { content: '', background: 'url(bilder/screens/schutztueren.png)'},
		
		// ablasventile
		
		
		
		'S': { content: '', background: 'url(bilder/screens/abblasventile.png)'},
		
		// auflagekontr18
		
		
		'T': { content: '', background: 'url(bilder/screens/auflagekontr18.png)'},
		
		
		// rolltorbeladestelle
		
		
		'U': { content: '', background: 'url(bilder/screens/rolltorbeladestelle.png)'},
		
		// auflagekontr916
		
		'V': { content: '', background: 'url(bilder/screens/auflagekontr916.png)'},
		
		
		
		// pneumatikhauptluft
		
		
		'W': { content: '', background: 'url(bilder/screens/pneumatikhauptluft.png)'},
		
		// hydraulikaggregat
		
		
		'Z': { content: '', background: 'url(bilder/screens/hydraulikaggregat.png)'},
		
		// schmierung
		
		
		
		'AA': { content: '', background: 'url(bilder/screens/schmierung.png)'},
		
		
		// spannvorrallgemein
		
		
		'AB': { content: '', background: 'url(bilder/screens/spannvorrallgemein.png)'},
		
		
		// pneumatikspannsystem
		
		
		'AC': { content: '', background: 'url(bilder/screens/pneumatikspannsystem.png)'},
		
		
		
		// pneumatikspanndruck
		
		
		
		'AD': { content: '', background: 'url(bilder/screens/pneumatikspanndruck.png)'},
		
		
		
		// bohrerbruchkontrolle1
		
		
		'AE': { content: '', background: 'url(bilder/screens/bohrerbruchkontrolle1.png)'},
		
		
		
		// bohrebruchkontrolle2
		
		
		
		'AF': { content: '', background: 'url(bilder/screens/bohrerbruchkontrolle2.png)'},
		
		
		
		
		// grundbedingungen
		
		
		'AG': { content: '', background: 'url(bilder/screens/grundbedingungen.png)'},
		
		
		
		
		// vorbereiten1
		
		
		'AH': { content: '', background: 'url(bilder/screens/steuerspannungEinschaltb1.png)'},
		

		// vorbereitenSymbolik1
		
		
		'AHA': { content: '', background: 'url(bilder/screens/steuerspannungEinschaltbSymbolik1.png)'},
		
			
		// vorbereiten2
		
		'ACH': { content: '', background: 'url(bilder/screens/steuerspannungEinschaltb2.png)'},
		
	 // vorbereitenSymbolik2
		
		'ACHA': { content: '', background: 'url(bilder/screens/steuerspannungEinschaltbSymbolik2.png)'},
		
		// taktarten1
		
		'AHB': { content: '', background: 'url(bilder/screens/taktarten1.png)'},
		
		// taktartenSymbolik1
		
		
		'AHBB': { content: '', background: 'url(bilder/screens/taktartenSymbolik1.png)'},
		
		// taktarten2
		
		
		
		'AHC': { content: '', background: 'url(bilder/screens/taktarten2.png)'},
		
		
		// taktartenSymbolik2
		
		'AHCC': { content: '', background: 'url(bilder/screens/taktartenSymbolik2.png)'},
		
		
		
		// abblasung
		
		
		'AI': { content: '', background: 'url(bilder/screens/abblasung.png)'},
		
		
		
		
		
		// APC1
		
		
		'AIA': { content: '', background: 'url(bilder/screens/apc1.png)'},
		
		
		
		// APCsymbolik1
		
		
		'AIB': { content: '', background: 'url(bilder/screens/abblasung.png)'},
		
		
		
		// APC2
		
		
		'AIC': { content: '', background: 'url(bilder/screens/apc2.png)'},
		
		// APCsymbolik2
		
		
		'AID': { content: '', background: 'url(bilder/screens/abblasung.png)'},
		
		
		
		// palette
		
		
		'AIE': { content: '', background: 'url(bilder/screens/palette.png)'},
		
		
		
		
		// spannkrhyd1
		
		
		'AIF': { content: '', background: 'url(bilder/screens/spannkrhyd1.png)'},
		
		
		
			// spannkrhyd2
		
		
		'AIG': { content: '', background: 'url(bilder/screens/spannkrhyd2.png)'},
		
		
		
			// spannkrhyd3
		
		
		'AIH': { content: '', background: 'url(bilder/screens/spannkrhyd3.png)'},
		
		
		
			// spannkrhyd4
		
		
		'AII': { content: '', background: 'url(bilder/screens/spannkrhyd4.png)'},
		
		
		
		
			// spannkrpn
		
		
		'AN': { content: '', background: 'url(bilder/screens/spannkrpn.png)'},
		
		
		
			// spannkrpnhd
		
		
		'AO': { content: '', background: 'url(bilder/screens/spannkrpnhd.png)'},
		
		
		
		
			
		
			// auflagekontrolle1
		
		
		'AP': { content: '', background: 'url(bilder/screens/auflagekontrolle1.png)'},
		
		
		
			// auflagekontrolle2
		
		
		'AQ': { content: '', background: 'url(bilder/screens/auflagekontrolle2.png)'},
		
		
		
		
			
			// auflagekontrolle3
		
		
		'AR': { content: '', background: 'url(bilder/screens/auflagekontrolle3.png)'},
		
		
		
		
			
			
			// abblasungpal
		
		
		'AS': { content: '', background: 'url(bilder/screens/abblasungpal.png)'},
		
		  // spindelnHandbetriebSP11
		
		
	   'AU': { content: '', background: 'url(bilder/screens/spindelnHandbetriebSP11.png)'},
		
		
			  // spindelnHandbetriebSP41
		
		
	    'AT': { content: '', background: 'url(bilder/screens/spindelnHandbetriebSP41.png)'},
		
		

		
		
		
		// ATCSP111
		
		
		
		    'AV': { content: '', background: 'url(bilder/screens/atcSP111.png)'},
			
			
			
			
		
		// ATCSP112

        'AVA': { content: '', background: 'url(bilder/screens/atcSP112.png)'},

	
		
		// ATCSP411
		
		
		
		    'AW': { content: '', background: 'url(bilder/screens/atcSP411.png)'},
			
			
			
				// ATCSP412
		
		
		
		    'AWA': { content: '', background: 'url(bilder/screens/atcSP412.png)'},
			
			
			
		
		
		
		// diagnose
		
		
		'AJ': { content: '', background: 'url(bilder/screens/diagnose.png)'},
		
		
		
		// prozess
		
		
		'AK': { content: '', background: 'url(bilder/screens/prozess.png)'},
		
		'AKZA': { content: '', background: 'url(bilder/screens/prozessAKZA.png)'},
				
		// prozess
		
		
		'AKZ': { content: '', background: 'url(bilder/screens/bezeichnungÄndern.png)'},
		
		
		// instandhaltVersionSpracheStart
		
		
		'AL': { content: '', background: 'url(bilder/screens/instandhaltVersionSpracheStart.png)'},
		
		// instandhaltVersionSprache
		
		'ALAA': { content: '', background: 'url(bilder/screens/instandhlatVersionSprache.png)'},
		
	'ALAAB': { content: '', background: 'url(bilder/screens/instandhlatVersion.png)'},
		
		// serviceAtc
		
		
		'AM': { content: '', background: 'url(bilder/screens/serviceAtc.png)'},
		
		
		
		
		// achsen1
		
		
		'AZ': { content: '', background: 'url(bilder/screens/achsen1.png)'},
		
		
		
		
		// achsen2
		
		
		'AZA': { content: '', background: 'url(bilder/screens/achsen2.png)'},
		
		
			
		// achsen3
		
		
		'AZB': { content: '', background: 'url(bilder/screens/achsen3.png)'},
		
		
		
				
		// schutztur
		
		
		'BC': { content: '', background: 'url(bilder/screens/schutztur.png)'},
		
		
			// spanef
		
		
		'BD': { content: '', background: 'url(bilder/screens/spanef.png)'},
		
		
		
			// absaugung1
		
		
		'BE': { content: '', background: 'url(bilder/screens/absaugung1.png)'},
		
		
		
		
			
			// alarme
		
		
		'BF': { content: '', background: 'url(bilder/screens/alarme.png)'},
		
		'BFAA': { content: 'fssssssssssssssssssss', background: 'url(bilder/screens/alarme.png)'},
			'BFAB': { content: '', background: 'url(bilder/screens/alarme.png)'},
		'BFAC': { content: '', background: 'url(bilder/screens/alarme.png)'},
			
			// meldungen
		
		
		'BG': { content: '', background: 'url(bilder/screens/meldungen.png)'},
		
		
		
		
			
			// historie
		
		
		'BH': { content: '', background: 'url(bilder/screens/historie.png)'},
		
		
			
			
			// alarmanaly
		
		
		'BCH': { content: '', background: 'url(bilder/screens/alarmanaly.png)'},
		
		
		
		
		
				
			// bussystemePBPN
		
		
		'BI': { content: '', background: 'url(bilder/screens/bussystemePBPN.png)'},
		
		
		// alleGeräteAnzeigenBIAAA
		
		'BIAAA': { content: '', background: 'url(bilder/screens/alleGeräteAnzeigenBIAAA.png)'},
		
				
			// bussystemeTCPIP
		
		
		'BIA': { content: '', background: 'url(bilder/screens/bussystemeTCPIP.png)'},
		
		// busTCPIP1
	
		
		'BIAB': { content: '', background: 'url(bilder/screens/busTCPIPBIA1.png)'},
		
		// achsDiag
	
		
		
		'BIAC': { content: '', background: 'url(bilder/screens/achsDiagBIA2.png)'},
		
		// safetyBIA3
		
		
		 'BIAD': { content: '', background: 'url(bilder/screens/safetyBIA3.png)'},
		 
		 // traceBIA4
		 
		  'BIAE': { content: '', background: 'url(bilder/screens/traceBIA4.png)'},
		 
		 
		 // vorhandeneGeräte
		 
		  'BIAF': { content: '', background: 'url(bilder/screens/vorhandeneGeräte.png)'},
		 
		 // vorhandeneGeräteBIAFA
		 
		  'BIAFA': { content: '', background: 'url(bilder/screens/vorhandeneGeräteBIAFA.png)'},
		 
		 
		
		 
		  // unterdrückteGeräte
		 
		  'BIAG': { content: '', background: 'url(bilder/screens/unterdrückteGeräte.png)'},
		  
		    // unterdrückteGeräteBIAGA
		 
		  'BIAGA': { content: '', background: 'url(bilder/screens/unterdrückteGeräteBIAGA.png)'},
		  
		    
		  // ausgefalleneGeräte
		  'BIAH': { content: '', background: 'url(bilder/screens/ausgefalleneGeräte.png)'},
		  		  
		  // ausgefalleneGeräteBIAHA
		  'BIAHA': { content: '', background: 'url(bilder/screens/ausgefalleneGeräteBIAHA.png)'},
		  
		 // gestörteGeräte
		 'BIACH': { content: '', background: 'url(bilder/screens/gestörteGeräte.png)'},
		 
		 
		  // gestörteGeräteBIACHA
		 'BIACHA': { content: '', background: 'url(bilder/screens/gestörteGeräteBIACHA.png)'},
		 
		
			'BIB': { content: '', background: 'url(bilder/screens/bussystemeTCPIP2.png)'},
			
			
		
			'BIC': { content: '', background: 'url(bilder/screens/bussystemeTCPIP3.png)'},
			
			
			
			
		
		
		
			// slchecksm
		
		
		'BJ': { content: '', background: 'url(bilder/screens/slchecksm.png)'},
		
		
		
			// konfigAnw
		
		
		'BK': { content: '', background: 'url(bilder/screens/konfigAnw.png)'},
		
		
			// palStatus1
		
		
		'BL': { content: '', background: 'url(bilder/screens/palStatus1.png)'},
		
		
		
			// palStatus2
		
		
		'BLA': { content: '', background: 'url(bilder/screens/palStatus2.png)'},
		
		
		// wZahlung
		
		
		'BM': { content: '', background: 'url(bilder/screens/wZahlung.png)'},
		
			// wZahlung1
		
		'BMX': { content: '', background: 'url(bilder/screens/wZahlung1.png)'},
		
			// wZahlung2
		
		'BMXA': { content: '', background: 'url(bilder/screens/wZahlung2.png)'},
		
			// wZahlung3
		
		'BMXB': { content: '', background: 'url(bilder/screens/wZahlung3.png)'},
		
			// wZahlung4
		
		'BMXC': { content: '', background: 'url(bilder/screens/wZahlung4.png)'},
		
			// wZahlung5
			
		'BMXD': { content: '', background: 'url(bilder/screens/wZahlung5.png)'},
		
			// wZahlung6
		
		'BMXE': { content: '', background: 'url(bilder/screens/wZahlung6.png)'},
		
		// taktzeiten
		
		
		'BN': { content: '', background: 'url(bilder/screens/taktzeiten.png)'},
		
		
		
		
		
		// instandhaltMaschine 
		
		
        'BO': { content: '', background: 'url(bilder/screens/instandhaltMaschine.png)'},
		
		
		
		 
		 
		 // instandhaltMaschineZahler1
		 
		 
		 
		  'BP': { content: '', background: 'url(bilder/screens/zahlerdetailsMaschine1.png)'},
		 
		 
		 // instandhaltMaschineZahler1
		 
		 
		 
		  'BPA': { content: '', background: 'url(bilder/screens/zahlerdetailsMaschine2.png)'},
		 
		 
		  'BPB': { content: '', background: 'url(bilder/screens/zahlerdetailsMaschine3.png)'},
		 
		 
		  'BPC': { content: '', background: 'url(bilder/screens/zahlerdetailsMaschine4.png)'},
		  
		   'BPD': { content: '', background: 'url(bilder/screens/zahlerdetailsMaschine5.png)'},
		  
		  
		   'BPE': { content: '', background: 'url(bilder/screens/zahlerdetailsMaschine6.png)'},
		  
		   'BPF': { content: '', background: 'url(bilder/screens/zahlerdetailsMaschine7.png)'},
		  
		   'BPG': { content: '', background: 'url(bilder/screens/zahlerdetailsMaschine8.png)'},
		  
		   'BPH': { content: '', background: 'url(bilder/screens/zahlerdetailsMaschine9.png)'},
		  
		   'BPCH': { content: '', background: 'url(bilder/screens/zahlerdetailsMaschine10.png)'},
		  
		   'BPI': { content: '', background: 'url(bilder/screens/zahlerdetailsMaschine11.png)'},
		  
		  'BPJ': { content: '', background: 'url(bilder/screens/zahlerdetailsMaschine12.png)'},
		  
		  
		   'BPK': { content: '', background: 'url(bilder/screens/zahlerdetailsMaschine13.png)'},
		  
		  
		   'BPL': { content: '', background: 'url(bilder/screens/zahlerdetailsMaschine14.png)'},
		   
		   
		   // // instandhaltAntriebe
		   'BQ': { content: '', background: 'url(bilder/screens/instandhaltAntriebe.png)'},
		   
		   
		   
		   // instandhaltAntriebeZahler1
		   
		   'BQA': { content: '', background: 'url(bilder/screens/instandhaltAntriebe1.png)'},
		   // instandhaltAntriebeZahler2
		   
		   'BQB': { content: '', background: 'url(bilder/screens/instandhaltAntriebe2.png)'},
		   
		   // instandhaltAntriebeZahler3
		   'BQC': { content: '', background: 'url(bilder/screens/instandhaltAntriebe3.png)'},
		   
		   // instandhaltAntriebeZahler4
		   'BQD': { content: '', background: 'url(bilder/screens/instandhaltAntriebe4.png)'},
		   
		   // instandhaltAntriebeZahler5
		   'BQE': { content: '', background: 'url(bilder/screens/instandhaltAntriebe5.png)'},
		   
		   // instandhaltAntriebeZahler6
		   'BQF': { content: '', background: 'url(bilder/screens/instandhaltAntriebe6.png)'},
		   
		   // instandhaltAntriebeZahler7
		   'BQG': { content: '', background: 'url(bilder/screens/instandhaltAntriebe7.png)'},
		   
		   // instandhaltAntriebeZahler8
		   'BQH': { content: '', background: 'url(bilder/screens/instandhaltAntriebe8.png)'},
		   
		   // instandhaltAntriebeZahler9
		   'BQCH': { content: '', background: 'url(bilder/screens/instandhaltAntriebe9.png)'},
		   
		   // instandhaltAntriebeZahler10
		   'BQI': { content: '', background: 'url(bilder/screens/instandhaltAntriebe10.png)'},
		   
		   // instandhaltAntriebeZahler11
		   'BQJ': { content: '', background: 'url(bilder/screens/instandhaltAntriebe11.png)'},
		   
		   // instandhaltAntriebeZahler12
		   'BQK': { content: '', background: 'url(bilder/screens/instandhaltAntriebe12.png)'},
		   
		   // instandhaltAntriebeZahler13
		   'BQL': { content: '', background: 'url(bilder/screens/instandhaltAntriebe13.png)'},
		   
		   // instandhaltAntriebeZahler14
		   'BQM': { content: 'AAAAAFFAWW', background: 'url(bilder/screens/instandhaltAntriebe14.png)'},
		   




		   
		   // instandhaltAtcApc
		   
		   'BR': { content: '', background: 'url(bilder/screens/instandhaltAtcApc.png)'},
		   
		    // instandhaltAtcApc1
		   
		   'BRA': { content: '', background: 'url(bilder/screens/instandhaltAtcApc1.png)'},
		   
		   

  // instandhaltAtcApc2
		   
		   'BRB': { content: '', background: 'url(bilder/screens/instandhaltAtcApc2.png)'},
		   
		   

  // instandhaltAtcApc3
		   
		   'BRC': { content: '', background: 'url(bilder/screens/instandhaltAtcApc3.png)'},
		   
		   
  // instandhaltAtcApc4
		   
		   'BRD': { content: '', background: 'url(bilder/screens/instandhaltAtcApc4.png)'},
		   
		   


  // instandhaltAtcApc5
		   
		   'BRE': { content: '', background: 'url(bilder/screens/instandhaltAtcApc5.png)'},
		   
		   




  // instandhaltAtcApc6
		   
		   'BRF': { content: '', background: 'url(bilder/screens/instandhaltAtcApc6.png)'},
		   
		   


  // instandhaltAtcApc7
		   
		   'BRG': { content: '', background: 'url(bilder/screens/instandhaltAtcApc7.png)'},
		   
		   



  // instandhaltAtcApc8
		   
		   'BRH': { content: '', background: 'url(bilder/screens/instandhaltAtcApc8.png)'},
		   
		   

		   
  // instandhaltAtcApc9
		   
		   'BRCH': { content: '', background: 'url(bilder/screens/instandhaltAtcApc9.png)'},
		   
		   
  // instandhaltAtcApc10
		   
		   'BRI': { content: '', background: 'url(bilder/screens/instandhaltAtcApc10.png)'},
		   
		   
  // instandhaltAtcApc11
		   
		   'BRJ': { content: '', background: 'url(bilder/screens/instandhaltAtcApc11.png)'},
		   
		   



  // instandhaltAtcApc12
		   
		   'BRK': { content: '', background: 'url(bilder/screens/instandhaltAtcApc12.png)'},
		   
		   

  // instandhaltAtcApc13
		   
		   'BRL': { content: '', background: 'url(bilder/screens/instandhaltAtcApc13.png)'},
		   
		   
		   
  // instandhaltAtcApc14
		   
		   'BRM': { content: '', background: 'url(bilder/screens/instandhaltAtcApc14.png)'},
		   



		   // instandhaltHydraulik1
			
		   
		    'BS': { content: '', background: 'url(bilder/screens/instandhaltHydraulik1.png)'},
			
			
			
			 // instandhaltHydraulik1.1
			
			
			'BSA': { content: '', background: 'url(bilder/screens/instandhaltHydraulik1_1.png)'},
			
			
			
			 // instandhaltHydraulik1.2
			
			
			'BSB': { content: '', background: 'url(bilder/screens/instandhaltHydraulik1_2.png)'},
			
			
			
			 // instandhaltHydraulik1.3
			
			
			'BSC': { content: '', background: 'url(bilder/screens/instandhaltHydraulik1_3.png)'},
			
			
			 // instandhaltHydraulik1.4
			
			
			'BSD': { content: '', background: 'url(bilder/screens/instandhaltHydraulik1_4.png)'},
			
			
			 // instandhaltHydraulik1.5
			
			
			'BSE': { content: '', background: 'url(bilder/screens/instandhaltHydraulik1_5.png)'},
			
			
			
			 // instandhaltHydraulik1.6
			
			
			'BSF': { content: '', background: 'url(bilder/screens/instandhaltHydraulik1_6.png)'},
			
			
			
			
			 // instandhaltHydraulik1.7
			
			
			'BSG': { content: '', background: 'url(bilder/screens/instandhaltHydraulik1_7.png)'},
			
			
			
			
			 // instandhaltHydraulik1.8
			
			
			'BSH': { content: '', background: 'url(bilder/screens/instandhaltHydraulik1_8.png)'},
			
			
			
			
			 // instandhaltHydraulik1.9
			
			
			'BSCH': { content: '', background: 'url(bilder/screens/instandhaltHydraulik1_9.png)'},
			
			
			 // instandhaltHydraulik1.10
			
			
			'BSI': { content: '', background: 'url(bilder/screens/instandhaltHydraulik1_10.png)'},
			
			
			
			 // instandhaltHydraulik1.11
			
			
			'BSJ': { content: '', background: 'url(bilder/screens/instandhaltHydraulik1_11.png)'},
			
			
			
			 // instandhaltHydraulik1.12
			
			
			'BSK': { content: '', background: 'url(bilder/screens/instandhaltHydraulik1_12.png)'},
			
			
			
			 // instandhaltHydraulik1.13
			
			
			'BSL': { content: '', background: 'url(bilder/screens/instandhaltHydraulik1_13.png)'},
			
			
			
			
			 // instandhaltHydraulik1.14
			
			
			'BSM': { content: '', background: 'url(bilder/screens/instandhaltHydraulik1_14.png)'},
			
			
			
			
			
			
			// instandhaltHydraulik2
			
			
			 'BT': { content: '', background: 'url(bilder/screens/instandhaltHydraulik2.png)'},
			 
			 
			 
			 
			// instandhaltHydraulik2.1
			
			
			 'BTA': { content: '', background: 'url(bilder/screens/instandhaltHydraulik2_1.png)'},
			 
			 
			 
			 
			 // instandhaltHydraulik2.2
			
			
			 'BTB': { content: '', background: 'url(bilder/screens/instandhaltHydraulik2_2.png)'},
			 
			 
			 
			 
			 // instandhaltHydraulik2.3
			
			
			 'BTC': { content: '', background: 'url(bilder/screens/instandhaltHydraulik2_3.png)'},
			 
			 
			 
			 
			 
			 
			 // instandhaltHydraulik2.4
			
			
			 'BTD': { content: '', background: 'url(bilder/screens/instandhaltHydraulik2_4.png)'},
			 
			 
			 
			 
			 
			 // instandhaltHydraulik2.5
			
			
			 'BTE': { content: '', background: 'url(bilder/screens/instandhaltHydraulik2_5.png)'},
			 
			 
			 
			 
			 
			 
			 
			 // instandhaltHydraulik2.6
			
			
			 'BTF': { content: '', background: 'url(bilder/screens/instandhaltHydraulik2_6.png)'},
			 
			 
			 
			 
			 // instandhaltHydraulik2.7
			
			
			 'BTG': { content: '', background: 'url(bilder/screens/instandhaltHydraulik2_7.png)'},
			 
			 
			 
			 
			 
			 
			 
			 // instandhaltHydraulik2.8
			
			
			 'BTH': { content: '', background: 'url(bilder/screens/instandhaltHydraulik2_8.png)'},
			 
			 
			 
			 
			 // instandhaltHydraulik2.9
			
			
			 'BTCH': { content: '', background: 'url(bilder/screens/instandhaltHydraulik2_9.png)'},
			 
			 
			 
			 
			 // instandhaltHydraulik2.10
			
			
			 'BTI': { content: '', background: 'url(bilder/screens/instandhaltHydraulik2_10.png)'},
			 
			 
			 
			 
			 
			 
			 
			 
			 // instandhaltHydraulik2.11
			
			
			 'BTJ': { content: '', background: 'url(bilder/screens/instandhaltHydraulik2_11.png)'},
			 
			 
			 
			 
			 
			 
			 
			 
			 // instandhaltHydraulik2.12
			
			
			 'BTK': { content: '', background: 'url(bilder/screens/instandhaltHydraulik2_12.png)'},
			 
			 
			 
			 
			 // instandhaltHydraulik2.13
			
			
			 'BTL': { content: '', background: 'url(bilder/screens/instandhaltHydraulik2_13.png)'},
			 
			 
			 
			 // instandhaltHydraulik2.14
			
			
			 'BTM': { content: '', background: 'url(bilder/screens/instandhaltHydraulik2_14.png)'},
		
			 
			 // instandhaltPneumatik1
			
			
			 'BU': { content: '', background: 'url(bilder/screens/instandhaltPneumatik1.png)'},
		 
			
			 
			 // instandhaltPneumatik1.1
			
			
			 'BUA': { content: '', background: 'url(bilder/screens/instandhaltPneumatik1_1.png)'},
		 
			 
			 
			  // instandhaltPneumatik1.2
			
			
			 'BUB': { content: '', background: 'url(bilder/screens/instandhaltPneumatik1_2.png)'},
		 
			  
			  
			  
			   // instandhaltPneumatik1.3
			
			
			 'BUC': { content: '', background: 'url(bilder/screens/instandhaltPneumatik1_3.png)'},
		 
			  
			   // instandhaltPneumatik1.4
			
			
			 'BUD': { content: '', background: 'url(bilder/screens/instandhaltPneumatik1_4.png)'},
	
			  
			   // instandhaltPneumatik1.5
			
			
			 'BUE': { content: '', background: 'url(bilder/screens/instandhaltPneumatik1_5.png)'},
		 
			  
			  
			  
			   // instandhaltPneumatik1.6
			
			
			 'BUF': { content: '', background: 'url(bilder/screens/instandhaltPneumatik1_6.png)'},
		 
			  
			  
			  
			   // instandhaltPneumatik1.7
			
			
			 'BUG': { content: '', background: 'url(bilder/screens/instandhaltPneumatik1_7.png)'},
		 
		 
		 
		 
		 
		  // instandhaltPneumatik1.8
			
			
			 'BUH': { content: '', background: 'url(bilder/screens/instandhaltPneumatik1_8.png)'},
		 
		 
		 
		 
		 
		  // instandhaltPneumatik1.9
			
			
			 'BUCH': { content: '', background: 'url(bilder/screens/instandhaltPneumatik1_9.png)'},
		 
		 
		 
		 
		 
		  // instandhaltPneumatik1.10
			
			
			 'BUI': { content: '', background: 'url(bilder/screens/instandhaltPneumatik1_10.png)'},
	
		 
		 
		  // instandhaltPneumatik1.11
			
			
			 'BUJ': { content: '', background: 'url(bilder/screens/instandhaltPneumatik1_11.png)'},
		 
	
		 
		  // instandhaltPneumatik1.12
			
			
			 'BUK': { content: '', background: 'url(bilder/screens/instandhaltPneumatik1_12.png)'},

		 
		  // instandhaltPneumatik1.13
			
			
			 'BUL': { content: '', background: 'url(bilder/screens/instandhaltPneumatik1_13.png)'},
		 
		 
		 
		  // instandhaltPneumatik1.14
			
			
			 'BUM': { content: '', background: 'url(bilder/screens/instandhaltPneumatik1_14.png)'},
		 
		 
		 
		 
			  
			  
			 // instandhaltPneumatik2
			
			
			 'BV': { content: '', background: 'url(bilder/screens/instandhaltPneumatik2.png)'},
		 
			 
			   
			 // instandhaltPneumatik2.1
			
			
			 'BVA': { content: '', background: 'url(bilder/screens/instandhaltPneumatik2_1.png)'},
		 
			 
			 
			    
			 // instandhaltPneumatik2.2
			
			
			 'BVB': { content: '', background: 'url(bilder/screens/instandhaltPneumatik2_2.png)'},

			    
			 // instandhaltPneumatik2.3
			
			
			 'BVC': { content: '', background: 'url(bilder/screens/instandhaltPneumatik2_3.png)'},
		 
			 
			 
			 
			    
			 // instandhaltPneumatik2.4
			
			
			 'BVD': { content: '', background: 'url(bilder/screens/instandhaltPneumatik2_4.png)'},
		 
		 
		 
		 
		    
			 // instandhaltPneumatik2.5
			
			
			 'BVE': { content: '', background: 'url(bilder/screens/instandhaltPneumatik2_5.png)'},
		 
		 
		 
		 
		    
			 // instandhaltPneumatik2.6
			
			
			 'BVF': { content: '', background: 'url(bilder/screens/instandhaltPneumatik2_6.png)'},
		 
		 
		 
		 
		 
		 
		    
			 // instandhaltPneumatik2.7
			
			
			 'BVG': { content: '', background: 'url(bilder/screens/instandhaltPneumatik2_7.png)'},
		 
		 
		 
		 
		    
			 // instandhaltPneumatik2.8
			
			
			 'BVH': { content: '', background: 'url(bilder/screens/instandhaltPneumatik2_8.png)'},
		 
		 
		 
		 
   
			 // instandhaltPneumatik2.9
			
			
			 'BVCH': { content: '', background: 'url(bilder/screens/instandhaltPneumatik2_9.png)'},
		 
		 
		 
		 
		    
			 // instandhaltPneumatik2.10
			
			
			 'BVI': { content: '', background: 'url(bilder/screens/instandhaltPneumatik2_10.png)'},
		 
		 
		 
		 
		    
			 // instandhaltPneumatik2.11
			
			
			 'BVJ': { content: '', background: 'url(bilder/screens/instandhaltPneumatik2_11.png)'},
		 
		 
		 
		 
		 
		    
			 // instandhaltPneumatik2.12
			
			
			 'BVK': { content: '', background: 'url(bilder/screens/instandhaltPneumatik2_12.png)'},
		 
		 
		 
		 
		 
		 
		 
		    
			 // instandhaltPneumatik2.13
			
			
			 'BVL': { content: '', background: 'url(bilder/screens/instandhaltPneumatik2_13.png)'},
		 
		 
		 
		 
		    
			 // instandhaltPneumatik2.14
			
			
			 'BVM': { content: '', background: 'url(bilder/screens/instandhaltPneumatik2_14.png)'},
			 
			 
			 
			 
			 
              // instandhaltUhrStellen
	    
	   
	      
			  'BW': { content: '', background: 'url(bilder/screens/instandhaltUhrStellen.png)'},
			 
		  'BWAA': { content: '', background: 'url(bilder/screens/instandhaltUhrStellenBWAA.png)'},
		 
		 
            // instandhaltReinigung

	   
	   
	      
			  'BZ': { content: '', background: 'url(bilder/screens/instandhaltReinigung.png)'},
			 
			 
		 
		 
            // instandhaltVersion

	   
	   
	      
			  'CA': { content: '', background: 'url(bilder/screens/instandhaltVersion.png)'},
			 
			    // instandhaltVersionDetails
			 
		  'CACA': { content: '', background: 'url(bilder/screens/instandhaltVersionDetails.png)'},
		 
		 
		 // instandhaltVersionDetailsVergleich
		 
		   'CACB': { content: '', background: 'url(bilder/screens/instandhaltVersionDetailsVergleich.png)'},
		   
		   
		  // serviceZugriffstufe

	   
	   
	      
			  'CB': { content: '', background: 'url(bilder/screens/serviceZugriffstufe.png)'},
			  
			     'CBA': { content: '', background: 'url(bilder/screens/eks.png)'},
		 
	
	            'CBB': { content: '', background: 'url(bilder/screens/eksLog.png)'},
	 
	   'CC': { content: '', background: 'url(bilder/screens/serviceApcLinks.png)'},
	   
	   
	   
	  'CD': { content: '', background: 'url(bilder/screens/serviceApcRechts.png)'},
	 
	 
	 'CE': { content: '', background: 'url(bilder/screens/serviceSchrittkette.png)'},
	 
	 
	  'CF': { content: '', background: 'url(bilder/screens/serviceKoppelpos.png)'},
	 
	 
	 
	 
	  'CG': { content: '', background: 'url(bilder/screens/serviceTeileErk.png)'},
	 
	 
	 'C1H': { content: '', background: 'url(bilder/screens/serviceSp11.png)'},
	 
	 'CCH': { content: '', background: 'url(bilder/screens/serviceSp41.png)'},
	 
	 
	 
	 'CI': { content: '', background: 'url(bilder/screens/serviceTestsopp.png)'},
	 
	  'CJ': { content: '', background: 'url(bilder/screens/serviceTestsoppW.png)'},
	 
	  'CK': { content: '', background: 'url(bilder/screens/serviceKonfigHydrSpKr.png)'},
	  
	'CL': { content: '', background: 'url(bilder/screens/serviceKonfigPneuSpKr.png)'},
	
	  
	  'CM': { content: '', background: 'url(bilder/screens/serviceTracesSchimerung.png)'},
	 

	   'CN': { content: '', background: 'url(bilder/screens/serviceTracesTempT1.png)'},
	   
	   
	   
	    'CO': { content: '', background: 'url(bilder/screens/serviceTracesTrigTempT1.png)'},
	   
	    'CP': { content: '', background: 'url(bilder/screens/serviceTracesTempT2.png)'},
	   
	   
	   
	    'CR': { content: '', background: 'url(bilder/screens/serviceTracesTrigTempT2.png)'},
	   
	   
	  
	}  
	 
	 [currentScreen];

    screenElement.innerHTML = currentConfig.content;
    screenElement.style.backgroundImage = currentConfig.background;
	
	
	

    screenElement.onclick = function () {
        if (currentScreen === 'BZ') {
            changeScreen('BW');
       // } else if (currentScreen === 'B') {
       //     changeScreen('A');
		//	} else if (currentScreen === 'C') //{
        //    changeScreen('D');
        } else {
            showNextScreen();
        }
    };

	
	
}





function updateButtons() {
    var buttonContainer = document.getElementById('buttonContainer');
    if (!buttonContainer) {
        console.error('Element "buttonContainer" wurde nicht gefunden.');
        return;
    }
    
	
	
	
	
    buttonContainer.innerHTML = ''; // Löscht vorhandene Buttons
	


    var buttons = buttonConfigurations[currentScreen];
    if (buttons) {
        buttons.forEach(function (button) {
            var buttonElement = document.createElement('button');
            buttonElement.className = button.buttonType; // Setzt Button-Klasse basierend auf buttonType
            buttonElement.innerHTML = `<img src="bilder/buttons/${button.image}" alt="Button ${button.id}">`;
            buttonElement.addEventListener('click', function() { changeScreen(button.targetScreen); });
            buttonContainer.appendChild(buttonElement);
        });
		
		
function goBack() {
    if (previousScreens.length > 0) {
        var lastState = previousScreens.pop();  // Nimm den letzten Zustand aus dem Stack
        currentScreen = lastState.screen;
        currentButtons = lastState.buttons;

        updateScreen();
        updateButtons();
    } else {
        console.error("Keine früheren Screens vorhanden");
    }

    
}
function scaleScreen() {
    const screen = document.getElementById('hmi-screen');
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const scaleX = windowWidth / screen.naturalWidth;
    const scaleY = windowHeight / screen.naturalHeight;

    const scale = Math.min(scaleX, scaleY); // Maintain aspect ratio

    screen.style.transform = `scale(${scale})`;
    screen.style.transformOrigin = 'top left'; // Ensure scaling starts from the top-left corner

    // Adjust the container's size after scaling
    screen.style.width = `${screen.naturalWidth * scale}px`;
    screen.style.height = `${screen.naturalHeight * scale}px`;
}

window.addEventListener('resize', scaleScreen);
window.addEventListener('DOMContentLoaded', scaleScreen);


function adjustButtonPositions() {
    const screen = document.getElementById('hmi-screen');
    const buttons = document.querySelectorAll('.button-type');

    buttons.forEach(button => {
        const leftPercent = parseFloat(button.getAttribute('data-left-percent'));
        const topPercent = parseFloat(button.getAttribute('data-top-percent'));

        button.style.left = `${leftPercent}%`;
        button.style.top = `${topPercent}%`;
    });
}

window.addEventListener('resize', adjustButtonPositions);
window.addEventListener('DOMContentLoaded', adjustButtonPositions);



	adjustButtonPositions(); // Passt die Position aller Buttons nach ihrer Erstellung an
    }
	
	

	
	
}

initProgram(); // Initialisiert das Programm
