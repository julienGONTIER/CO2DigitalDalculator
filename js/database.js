var language = ["en", "fr", "es", "por", "de"];
var translation = {
/*START TRAD*/

'trad_title':{'en':'Calculating my environmental impact  <span style=\"font-size:16px\">kg eq CO2)</span>','fr':'Calcul de mon impact environnemental <span style=\"font-size:16px\">(en kg eq CO2)</span>','por':'Calculando o impacto da minha pegada de carbono','es':'Calcular mi impacto de carbono','de':'Berechnung meines CO²-Fußabdrucks  <span style=\"font-size:16px\">(kg Äquivalent CO²)</span>'},
'trad_device':{'en':'DEVICE','fr':'EQUIPEMENT','por':'Equipamento','es':'Equipamiento','de':'GERÄT'},
'trad_laptop':{'en':'what is my computer? (or equivalent)','fr':'Quel est mon laptop? (ou équivalent)','por':'Qual é o meu computador? ( ou equivalente)','es':'¿Cuál es mi ordenador? (o equivalente)','de':'Was ist mein Computer? (oder gleichwertig)'},
'trad_screen':{'en':'Do I have an additional screen?','fr':'Ai je un écran supplémentaire?','por':'Tenho ecrã suplementar?','es':'¿Tengo una pantalla adicional?','de':'Habe ich einen zusätzlichen Bildschirm?'},
'trad_phone':{'en':'Do I have a phone?','fr':'Ai je un téléphone?','por':'Tenho telemovel?','es':'¿Tengo un celular?','de':'Habe ich ein Telefon?'},
'trad_storage':{'en':'My Google Storage in Gb<a target=\"_blank\" href=\"https://drive.google.com/settings/storage\">(how to find it)</a>','fr':'Mon stockage Google en GB <a target=\"_blank\" href=\"https://drive.google.com/settings/storage\">(le calculer)</a>','por':'O meu armazenamento Google em GB <a target=\"_blank\" href=\"https://drive.google.com/settings/storage\">(Calcular)</a>','es':'Mi almacenamiento Google en GB <a target=\"_blank\" href=\"https://drive.google.com/settings/storage\">(Cómo calcularlo)</a>','de':'Mein Google-Speicher in GB <a target=\"_blank\" href=\"https://drive.google.com/settings/storage\"> (So finden Sie es) </a>'},
'trad_emails':{'en':'Number of emails sent per day','fr':'Nombre d&#39;emails envoyés par jour','por':'N.º de emails enviado por dia','es':'Número de correos enviados por día','de':'Anzahl der E-Mails, die pro Tag gesendet werden'},
'trad_deplacement':{'en':'WORK TRIP - VISIO','fr':'TRAJET TRAVAIL - VISIO','por':'Viagem para o trabalho','es':'Viaje para ir al trabajo','de':'Dienstreise'},
'trad_travel_pro':{'en':'BUSINESS TRIPS','fr':'TRAJETS PRO','por':'Viagens de negócios','es':'Viajes de negocios','de':'Geschäftsreisen'},
'trad_plane':{'en':'Number of kilometres travelled by airplane (<a target=\"_blank\" href=\"https://fr.distance.to\">caculate it</a>)','fr':'Nombre de kilomètres parcouru en avion (<a target=\"_blank\" href=\"https://fr.distance.to\">le calculer</a>)','por':'Número de quilómetros percorrido por avião (<a target=\"_blank\" href=\"https://fr.distance.to\">Calcular</a>)','es':'Número de kilómetros recorridos en avión (<a target=\"_blank\" href=\"https://fr.distance.to\">Calcular</a>)','de':'Anzahl der Kilometer, die mit dem Flugzeug zurückgelegt wurden. (<a target=\"_blank\" href=\"https://fr.distance.to\"> berechnen Sie es </a>)'},
'trad_train':{'en':'Number of kilometres travelled by train','fr':'Nombre de kilimètres parcourus en train','por':'','es':'','de':''},
'trad_car':{'en':'My daily commute to work by car Round trip (km)','fr':'Mes déplacements quotidien travail en voiture AR (km)','por':'As minhas viagens diárias para o trabalho de carro - ida e volta (km)','es':'Mis viajes cotidianos para ir al trabajo en coche, ida y vuelta (km)','de':'Mein täglicher Weg zur Arbeit mit dem Auto, Hin- und Rückfahrt (km)'},
'trad_car_percent':{'en':'% by car','fr':'% voiture','por':'% carro','es':'% en coche','de':'% mit dem Auto'},
'trad_commun':{'en':'My daily trips by public transport Round Trip (km)','fr':'Mes déplacements quotidien en transport en commun AR (km)','por':'As minhas viagens diárias para o trabalho de transportes públicos  - ida e volta (km)','es':'Mis viajes cotidianos para ir al trabajo en transporte público, ida y vuelta (km)','de':'Meine täglichen Fahrten mit öffentlichen Verkehrsmitteln, Hin- und Rückfahrt (km)'},
'trad_commun_percent':{'en':'% by public transport','fr':'% transport commun','por':'% transportes públicos','es':'% en transporte público','de':'% mit öffentlichen Verkehrsmitteln'},
'trad_bike':{'en':'My daily trips by bike or on foot Round Trip (km)','fr':'Mes déplacements quotidien en vélo ou à pied AR (km)','por':'As minhas viagens diárias para o trabalho de bicicleta ou a pé - ida e volta (km)','es':'Mis viajes cotidianos para ir al trabajo en bici o a pie, ida y vuelta (km)','de':'Meine täglichen Ausflüge mit dem Fahrrad oder zu Fuß, Hin- und Rückweg (km)'},
'trad_bike_percent':{'en':'% by bike or on foot','fr':'% vélo','por':'% de bicicleta ou a pé','es':'% en bici o a pie','de':'% mit dem Fahrrad oder zu Fuß'},
'trad_numeric_impact':{'en':'MY DIGITAL IMPACT','fr':'MON IMPACT NUMERIQUE','por':'O MEU IMPACTO DIGITAL','es':'MI IMPACTO DIGITAL','de':'MEINE DIGITALEN AUSWIRKUNGEN'},
'trad_moving':{'en':'MY TRAVEL IMPACT','fr':'MON IMPACT DEPLACEMENT','por':'O MEU IMPACTO DAS VIAGENS','es':'EL IMPACTO DE MIS VIAJES','de':'MEINE REISE AUSWIRKUNG'},
'trad_global':{'en':'MY ANNUAL IMPACT ','fr':'IMPACT ANNUEL @Decathtlon','por':'O MEU IMPACTO ANUAL ','es':'MI IMPACTO ANUAL','de':'MEINE JÄHRLICHEN AUSWIRKUNGEN '},
'trad_tree':{'en':'Trees necessary to catch the CO2 value in 50 years','fr':'Arbres nécessaires pour capter le CO2eq dans 50 ans','por':'Número de árvores para compensar o meu impacto de CO2<br/>','es':'El número de árboles para compensar mi impacto de CO2<br/>','de':'Anzahl der Bäume zum Ausgleich meines CO²-Fußabdrucks (Zeitraum von 50 Jahren) <br/>'},
'trad_forclaz':{'en':'Production of Forclaz 50 polar<br/>','fr':'Production de polaires Forclaz 50<br/>','por':'Produção de polares Forclaz 50<br/>','es':'Producción de polares Forclaz 50<br/>','de':'Produktion von Forclaz 50 Fleecejacke <br/>'},
'trad_equivalent':{'en':'equivalent to','fr':'l\'équivalent','por':'equivalente a ','es':'equivalente a','de':'gleichwertig'},
'trad_daily':{'en':'DAILY','fr':'QUOTIDIEN','por':'DIARIAMENTE','es':'DIARIO','de':'TÄGLICH'},
'trad_annual':{'en':'ANNUAL','fr':'ANNUEL','por':'ANUALMENTE','es':'ANUAL','de':'JÄHRLICH'},
'trad_lessstorage':{'en':'<a href=\"http://bit.ly/nettoyerboitemail\" target=\"_blank\" style=\"color:#1155cc\">/!\ How to decrease my Google storage?</a>','fr':'<a href=\"http://bit.ly/nettoyerboitemail\" target=\"_blank\" style=\"color:#1155cc\">/!\ Comment diminuer mon stockage Google?</a>','por':'<a href=\"http://bit.ly/nettoyerboitemail\" target=\"_blank\" style=\"color:#1155cc\">/!\ Como diminuir o meu armazenamento Google?</a>','es':'<a href=\"http://bit.ly/nettoyerboitemail\" target=\"_blank\" style=\"color:#1155cc\">/!\ ¿Cómo reducir mi almacenamiento Google?</a>','de':'<a href=\"http://bit.ly/nettoyerboitemail\" target=\"_blank\" style=\"color:#1155cc\">/!\ How to decrease my Google storage?</a>'},
'trad_annualimpact':{'en':'ANNUAL IMPACT','fr':'IMPACT ANNUEL','por':'IMPACTO ANUAL','es':'IMPACTO ANUAL','de':'JÄHRLICHE AUSWIRKUNGEN'},
'trad_bulb':{'en':'A light bulb on for','fr':'Une ampoule allumée pendant ','por':'Uma lâmpada acesa durante','es':'Un foco prendido durante','de':'Eine Glühlampe leuchtet für'},
'trad_year':{'en':'year(s)','fr':'an(s)','por':'ano (s)','es':'año(s)','de':'Jahr(e)'},
'trad_empreinte_page':{'en':'Environmental footprint of this page','fr':'Empreinte environnemental de cette page','por':'Pegada ambiental desta página','es':'Huella ambiental de esta página','de':'Umweltbilanz dieser Seite'},
'trad_lasting':{'en':'Duration of use','fr':'Durée d\'utilisation','por':'Duração da utilização','es':'Duración del uso','de':'Dauer der Nutzung'},
'trad_streaming':{'en':'Hours of video streaming per day','fr':'Heures de streaming vidéo par jour','por':'Horas de transmissão de vídeo por dia','es':'Horas de transmisión de vídeo por día','de':'Stunden Videostreaming pro Tag'},
'trad_intro1':{'en':'What is your digital environmental impact?','fr':'Quel est votre impact environnemental numérique ?','por':'','es':'','de':''},
'trad_intro2':{'en':'Our use of digital technology is exploding, both at the personal and professional level. Our impacts are difficult to quantify because they are dematerialized.','fr':'Nos usages du numérique explosent; tant au niveau particulier que professionnel. Nos impacts sont difficilement quantifiables car dématérialisés.','por':'','es':'','de':''},
'trad_intro3':{'en':'In order to shed light on the impacts related to our over-consumption of numbers, <a href="http://www.decathlon.fr" target="_blank">Decathlon</a> has created a calculator that allows us to simply calculate its professional numerical impact.','fr':'Afin d’éclairer les impacts liés à notre surconsommation du numérique, <a href="http://www.decathlon.fr" target="_blank">Decathlon</a> a créé une calculatrice qui permet de calculer simplement son impact numérique professionnel.','por':'','es':'','de':''},
'trad_intro4':{'en':'The objective is of course to associate it with concrete actions (extending the lifespan of the equipment, reducing its online storage...) but also to compare it to our daily uses (work / air travel...).','fr':'L\’objectif est bien sûr d’y associer des actions concrètes (allonger la durée de vie du matériel, diminution de son stockage en ligne…) mais aussi le comparer à nos usages quotidiens (trajet travail / déplacement aérien…)','por':'','es':'','de':''},
'trad_intro5':{'en':'The calculator is based on databases provided by the <a href="https://www.ademe.fr/" target="_blank">ADEME</a> as well as data from <a href="https://www.greenit.fr/" target="_blank">GreenIT.fr</a>','fr':'La calculatrice se base sur les bases de données fournies par l’<a href="https://www.ademe.fr/" target="_blank">ADEME</a> ainsi que des données de <a href="https://www.greenit.fr/" target="_blank">GreenIT.fr</a>','por':'','es':'','de':''},
'trad_reduce':{'en':'Reduce / Expand Intro','fr':'Ouvrir / Fermer l\'introduction','por':'','es':'','de':''},
'trad_tips_lasting':{'en':'The longer you keep your equipment, the less environmental impact it will have on the environment each year.','fr':'Plus vous gardez longtemps votre équipement, moins il aura d\'impact environnemental annuel','por':'','es':'','de':''},
'trad_tips_screen':{'en':'The screen has a significant environmental impact. If you really need it, keep it as long as possible.','fr':'L\'écran a un impact environnental important. Si vous en avez vraiment besoin gardez le le plus longtemps possible','por':'','es':'','de':''},
'trad_tips_cloud':{'en':'Remember to clean regularly and to store only what is necessary.','fr':'Pensez à nettoyer régulièrement et à ne stocker que ce qui est nécessaire','por':'','es':'','de':''},
'trad_tips_streaming':{'en':'Streaming accounts for 25% of the world\'s bandwidth. To be used in moderation','fr':'Le streaming représente 25% de la bande passante mondiale. A utiliser avec modération','por':'','es':'','de':''},
'trad_trip_soft':{'en':'Soft mobility greatly reduces your environmental impact.','fr':'La mobilité douce permet de diminuer fortement son impact environnemental','por':'','es':'','de':''},
'trad_sources1':{'en':'Car: 253g CO2eq (1 passenger) /km','fr':'Voiture: 253g CO2eq (1 passager) /km','por':'','es':'','de':''},
'trad_sources2':{'en':'Train: 37g CO2eq /km','fr':'Train: 37g CO2eq /km','por':'','es':'','de':''},
'trad_sources3':{'en':'Intercity: 93g CO2eq /km','fr':'Intercity: 93g CO2eq /km','por':'','es':'','de':''},
'trad_sources4':{'en':'Aircraft: 138g CO2eq /km','fr':'Avion: 138g CO2eq /km','por':'','es':'','de':''},
'trad_sources5':{'en':'Energy (european average): 500g CO2eq / kwh','fr':'Energie (moyenne europe): 500g CO2eq / kwh','por':'','es':'','de':''},
'trad_sources6':{'en':'Email sent (medium): 10g CO2eq without attachment','fr':'Email envoyé (moyen): 10g CO2eq sans pièce jointe','por':'','es':'','de':''},
'trad_sources7':{'en':'Gigabyte stored on the cloud: 0.330kg CO2eq /year (USA)','fr':'GigaOctet stocké sur le cloud: 0.330g CO2eq /an (redondé USA)','por':'','es':'','de':''},
'trad_sources8':{'en':'Streaming: 3.18kg CO2eq /hour','fr':'Streaming: 3.18kg CO2eq /heure','por':'','es':'','de':''},
'trad_sources9':{'en':'Other sources','fr':'Autres sources','por':'','es':'','de':''},
'trad_sources10':{'en':'Equipment manufacturers site (Apple / Dell / Lenovo)','fr':'Site des constructeurs d\'équipements (Apple / Dell / Lenovo)','por':'','es':'','de':''},
'trad_sources11':{'en':'Tree compensation: 20kg CO2eq /year','fr':'Compensation arbre: 20kg CO2eq /an','por':'','es':'','de':''},
'trad_sources12':{'en':'Polar :11kg CO2eq (LCA product)','fr':'Polaire :11kg CO2eq (ACV produit)','por':'','es':'','de':''},
'trad_sources13':{'en':'Lamp on: 19g CO2eq / hour','fr':'Lampe allumée: 19g CO2eq / heure','por':'','es':'','de':''},
'trad_homework':{'en':'Number of day per week in home work','fr':'Nombre de jour par semaine en télétravail','por':'','es':'','de':''},
/*END TRAD*/
};
var device = [
{'key':'Device1','name':'Dell Optiplex 3020','brand':'DELL','total':'624','use':'50','production':'412','lasting':3,'epeat':'Oui', 'TCO': '','link':'http://i.dell.com/sites/doccontent/corporate/corp-comm/en/Documents/WP-OptiPlex-3010-MT.pdf'},
{'key':'Device2','name':'Dell Optiplex 3010','brand':'DELL','total':'624','use':'50','production':'412','lasting':3,'epeat':'Gold', 'TCO': '','link':'http://i.dell.com/sites/doccontent/corporate/corp-comm/en/Documents/WP-OptiPlex-3010-MT.pdf'},
{'key':'Device3','name':'Dell Latitude E7240','brand':'DELL','total':'310','use':'50','production':'276','lasting':3,'epeat':'', 'TCO': '','link':'http://i.dell.com/sites/doccontent/corporate/corp-comm/en/Documents/PCF-WP-E7240.pdf'},
{'key':'Device4','name':'Dell Latitude E7440','brand':'DELL','total':'276','use':'50','production':'243','lasting':3,'epeat':'', 'TCO': '','link':'http://i.dell.com/sites/doccontent/corporate/corp-comm/en/Documents/PCF-WP-E7440.pdf'},
{'key':'Device5','name':'Dell Latitude E5440','brand':'DELL','total':'292','use':'50','production':'260','lasting':3,'epeat':'', 'TCO': '','link':'https://i.dell.com/sites/doccontent/corporate/corp-comm/en/Documents/PCF-WP-E5540.pdf'},
{'key':'Device6','name':'Dell Latitude E7450','brand':'DELL','total':'292','use':'50','production':'260','lasting':3,'epeat':'Silver', 'TCO': '','link':'https://i.dell.com/sites/doccontent/corporate/corp-comm/en/Documents/PCF-WP-E5540.pdf'},
{'key':'Device7','name':'Dell Latitude E7470','brand':'DELL','total':'292','use':'50','production':'260','lasting':3,'epeat':'Gold', 'TCO': '','link':'https://i.dell.com/sites/doccontent/corporate/corp-comm/en/Documents/PCF-WP-E5540.pdf'},
{'key':'Device8','name':'Dell Latitude E5540','brand':'DELL','total':'311','use':'50','production':'267','lasting':3,'epeat':'Gold', 'TCO': '','link':'https://i.dell.com/sites/doccontent/corporate/corp-comm/en/Documents/PCF-WP-E5440.pdf'},
{'key':'Device9','name':'Dell Latitude E3340','brand':'DELL','total':'314','use':'50','production':'248','lasting':3,'epeat':'Gold', 'TCO': '','link':'https://i.dell.com/sites/doccontent/corporate/corp-comm/en/Documents/PCF-WP-E3440.pdf'},
{'key':'Device10','name':'Mac book air','brand':'APPLE','total':'202','use':'50','production':'172','lasting':3,'epeat':'Gold', 'TCO': '','link':'https://www.apple.com/environment/pdf/products/notebooks/13-inch_MacBookAir_w_Retina_PER_Mar2020.pdf'},
{'key':'Device11','name':'Macbook Pro','brand':'APPLE','total':'300','use':'50','production':'249','lasting':3,'epeat':'Gold', 'TCO': '','link':'https://www.apple.com/environment/pdf/products/notebooks/13-inch_MacBookPro_PER_May2020.pdf'},
{'key':'Device12','name':'Lenovo X270','brand':'LENOVO','total':'851','use':'50','production':'766','lasting':3,'epeat':'Gold', 'TCO': 'YES','link':'https://www.lenovo.com/medias/PCF-ThinkPad-X270.pdf?context=bWFzdGVyfEVDTy1QQ0YtTk9URUJPT0t8MTUxNzY3fGFwcGxpY2F0aW9uL3BkZnxFQ08tUENGLU5PVEVCT09LL2g4Yi9oMDAvOTQ1MjU3MjgwMzEwMi5wZGZ8MDcxZjUxYjAwNGIxYzllNDQ5NGYyODM1YzExMTM0YjExODI1YzBjNDM3YmY4MGNkOWZiOTJkNjNiNDQzMDIwYw'},
{'key':'Device13','name':'Lenovo T470','brand':'LENOVO','total':'493','use':'50','production':'345','lasting':3,'epeat':'Gold', 'TCO': 'YES','link':'https://www.lenovo.com/medias/PCF-ThinkPad-T470.pdf?context=bWFzdGVyfEVDTy1QQ0YtTk9URUJPT0t8MTg0NDI1fGFwcGxpY2F0aW9uL3BkZnxFQ08tUENGLU5PVEVCT09LL2gxOC9oMWEvOTQ1MjU3MDE4MTY2Mi5wZGZ8MWM5OWEwNTc5ZTQ0YjFhN2Y1NDliNDMzY2YzYzZiYzMwM2NlNjc2ZDg2NTVkOGVjNzVlNjdjMTRiYTgxODc5Nw'},
{'key':'Device14','name':'Lenovo T440','brand':'LENOVO','total':'394','use':'50','production':'331','lasting':3,'epeat':'Gold', 'TCO': '','link':'https://www.lenovo.com/medias/PCF-Lenovo-ThinkPad-T440s.pdf?context=bWFzdGVyfHNvY2lhbF9yZXNwb25zaWJpbGl0eXwyNDI3MzZ8YXBwbGljYXRpb24vcGRmfHNvY2lhbF9yZXNwb25zaWJpbGl0eS9oYmEvaDA0LzkzNTIxNDM1MzYxNTgucGRmfDk0MmY0N2M5Y2ZiY2U5MDBmOTZkNWZlN2U3OTRjZWQ2MjgzNjc5YmYzNzcwYzViMWQzYTcxNjQwODVmN2EwM2E'},
{'key':'Device15','name':'Lenovo T450','brand':'LENOVO','total':'562','use':'50','production':'483','lasting':3,'epeat':'Gold', 'TCO': '','link':'https://www.lenovo.com/medias/PCF-ThinkPad-T450.pdf?context=bWFzdGVyfHNvY2lhbF9yZXNwb25zaWJpbGl0eXwyMDIzMzN8YXBwbGljYXRpb24vcGRmfHNvY2lhbF9yZXNwb25zaWJpbGl0eS9oMTEvaDcyLzkzNTIxNDM2MzQ0NjIucGRmfDM5MmI4Y2YzNmNhNDIxYWM2NTU0NDA5NDUyYWM2M2QyZGJkMWQ5NGE2ZWYzM2ZjOTQ0OWM3Mjk3MzYxMDNmZjg'},
{'key':'Device16','name':'Lenovo M73','brand':'LENOVO','total':'899','use':'50','production':'530','lasting':3,'epeat':'Gold', 'TCO': '','link':'https://www.lenovo.com/medias/PCF-ThinkCentre-M73s-M4500s.pdf?context=bWFzdGVyfHNtYnwxOTk2NTh8YXBwbGljYXRpb24vcGRmfGhmYy9oMGUvOTQwNzE5NTk3MTYxNC5wZGZ8ZDg3ODNjMDBlOWMyY2U5NTBmNTgxNTdiYzE1OWNjY2NlNjI3ZDA5NzM2ZGUxYWMwMWM1NTI3ZTg2YjQ4ZGEzMQ'},
{'key':'Device17','name':'Lenovo T430','brand':'LENOVO','total':'345','use':'50','production':'259','lasting':3,'epeat':'Gold', 'TCO': '','link':'https://www.lenovo.com/us/en/social_responsibility/PCF_Typical_Notebook'},
{'key':'Device18','name':'Lenovo X250','brand':'LENOVO','total':'338','use':'50','production':'257','lasting':3,'epeat':'Gold', 'TCO': '','link':'https://www.lenovo.com/medias/PCF-ThinkPad-X250.pdf?context=bWFzdGVyfHNvY2lhbF9yZXNwb25zaWJpbGl0eXwyMDkxODB8YXBwbGljYXRpb24vcGRmfHNvY2lhbF9yZXNwb25zaWJpbGl0eS9oNjQvaDA4LzkzNTIxNTAxODgwNjIucGRmfGFlMDY2ZDExNDYxYTYyMmYzNTg2NjAzNTg5NmJlMWEyZGRlNjBhMGU4NDZjMTdkNjRiMThkMDE3Mjk4OThjNDU'},
{'key':'Device19','name':'Dell E5490','brand':'DELL','total':'302','use':'50','production':'248','lasting':3,'epeat':'Gold', 'TCO': '','link':'https://i.dell.com/sites/csdocuments/CorpComm_Docs/en/carbon-footprint-latitude-5490.pdf?newtab=true'},
{'key':'Device20','name':'Dell E7480','brand':'DELL','total':'300','use':'50','production':'246','lasting':3,'epeat':'', 'TCO': '','link':'https://i.dell.com/sites/csdocuments/CorpComm_Docs/en/carbon-footprint-latitude-7480.pdf?newtab=true'},
{'key':'Device21','name':'Dell E7390','brand':'DELL','total':'264','use':'50','production':'232','lasting':3,'epeat':'', 'TCO': '','link':'https://i.dell.com/sites/csdocuments/CorpComm_Docs/en/carbon-footprint-latitude-7390.pdf?newtab=true'},
{'key':'Device22','name':'Dell E7280','brand':'DELL','total':'268','use':'50','production':'228','lasting':3,'epeat':'Gold', 'TCO': 'YES','link':'https://i.dell.com/sites/csdocuments/CorpComm_Docs/en/carbon-footprint-latitude-7280.pdf?newtab=true'},
{'key':'Device23','name':'Dell E7270','brand':'DELL','total':'268','use':'50','production':'228','lasting':3,'epeat':'', 'TCO': '','link':'https://i.dell.com/sites/csdocuments/CorpComm_Docs/en/carbon-footprint-latitude-7280.pdf?newtab=true'},
{'key':'Device24','name':'Dell 5400','brand':'DELL','total':'299','use':'50','production':'251','lasting':3,'epeat':'Silver', 'TCO': '','link':'https://i.dell.com/sites/csdocuments/CorpComm_Docs/en/carbon-footprint-latitude-5450.pdf?newtab=true'},
{'key':'Device25','name':'Lenovo T480','brand':'LENOVO','total':'448','use':'50','production':'314','lasting':3,'epeat':'Gold', 'TCO': 'YES','link':'https://www.lenovo.com/us/en/social_responsibility/PCF-ThinkPad-T480.pdf'},
{'key':'Device26','name':'Dell E7270','brand':'DELL','total':'296','use':'50','production':'240','lasting':3,'epeat':'Gold', 'TCO': 'NO','link':'https://i.dell.com/sites/csdocuments/CorpComm_Docs/en/carbon-footprint-latitude-E7270.pdf?newtab=true'},
{'key':'Device27','name':'Dell E5280','brand':'DELL','total':'271','use':'50','production':'228','lasting':3,'epeat':'Gold', 'TCO': 'YES','link':'https://i.dell.com/sites/csdocuments/CorpComm_Docs/en/carbon-footprint-latitude-5280.pdf?newtab=true'},
{'key':'Device28','name':'Chromebook 3189','brand':'DELL','total':'302','use':'50','production':'266','lasting':3,'epeat':'Gold', 'TCO': 'YES','link':'https://i.dell.com/sites/csdocuments/CorpComm_Docs/en/carbon-footprint-latitude-3189.pdf'},
{'key':'Device29','name':'Dell Optiplex 3060','brand':'DELL','total':'569','use':'50','production':'290','lasting':3,'epeat':'Silver', 'TCO': 'YES','link':'https://i.dell.com/sites/csdocuments/CorpComm_Docs/en/carbon-footprint-optiplex-3060-tower.pdf?newtab=true'},
{'key':'Device30','name':'Dell Optiplex 3050','brand':'DELL','total':'511','use':'50','production':'281','lasting':3,'epeat':'Silver', 'TCO': 'YES','link':'https://i.dell.com/sites/csdocuments/CorpComm_Docs/en/carbon-footprint-optiplex-3050-tower.pdf?newtab=true'},
{'key':'Device31','name':'Chromebook 13 2017','brand':'LENOVO','total':'338','use':'50','production':'264','lasting':3,'epeat':'Gold', 'TCO': '','link':'https://www.lenovo.com/medias/PCF-N22-20-Touch-Chromebook.pdf?context=bWFzdGVyfHNvY2lhbF9yZXNwb25zaWJpbGl0eXwyNjQ5OTV8YXBwbGljYXRpb24vcGRmfHNvY2lhbF9yZXNwb25zaWJpbGl0eS9oMjEvaDA2LzkzNTIxNTg2MDk0MzgucGRmfDY0MDhjMzQ5OTQ4ZjgyYjliZDliMmM1Y2MyYzEzYmE0MTg3MmZlZTgzYTBjYWM4YmEzOWRmNWI1MTRkYzA0MzI'},
{'key':'Device32','name':'Dell Chromebook 11 3180','brand':'DELL','total':'302','use':'50','production':'266','lasting':3,'epeat':'Bronze', 'TCO': 'YES','link':'https://i.dell.com/sites/csdocuments/CorpComm_Docs/en/carbon-footprint-latitude-3189.pdf'},
{'key':'Device33','name':'Dell Optiplex 3040','brand':'DELL','total':'511','use':'50','production':'281','lasting':3,'epeat':'Silver', 'TCO': 'YES','link':'https://i.dell.com/sites/csdocuments/CorpComm_Docs/en/carbon-footprint-optiplex-3050-tower.pdf?newtab=true'},
{'key':'Device34','name':'Autre','brand':'OTHER','total':'393','use':'50','production':'297','lasting':3,'epeat':'', 'TCO': '','link':''},
];
var phone = [{'name':'Autre telephone','total':'45.92','use:':'0.18','production':'56','lasting':'3','class':''}];
var ecran = [{'name':'Ecran','total':'617','use:':'0.53','production':'290','lasting':'4','class':''}];
var impactEmails = [{'key':'E1','name':'0 -> 10 ','total':0.15},{'key':'E2','name':'10 -> 20','total':0.3},	{'key':'E3','name':'20 -> 40','total':0.6},	{'key':'E4','name':'+ 40','total':1.05},];
var percentage = [{'key':'0', name :'0%'},{'key':'10', name :'10%'},{'key': '20', name :'20%'},{'key': '30', name :'30%'},{'key': '40', name :'40%'},{'key': '50', name :'50%'},{'key': '60', name :'60%'},{'key': '70', name :'70%'},{'key': '80', name :'80%'},{'key': '90', name :'90%'},{'key': '100', name: '100%'}];