var dateNaiss = new Date("1995-02-04");
var date = new Date();
var dateN = "0" + dateNaiss.getDate() + "-" + "0" + (dateNaiss.getMonth() + 1) + "-" + dateNaiss.getFullYear();
var age = (Number((date.getTime() - dateNaiss.getTime()) / 31536000000).toFixed(0)) - 1;
var dummyData = {
    "Présentation": "<p>" +
        "Nom : GREY <br>" +
        "Prénom : Steven<br>" +
        "Date de Naissance : " + dateN + "<br>" +
        "Age : " + age + " ans <br>" +
        "Permis de Conduire : Oui <br>" +
        "Voiture Personelle : Oui" +
        "</p>",

    //Parcours
    "Professionel": "<div class='container'>" +
        "<div class='main'>" +
        "<ul class='cbp_tmtimeline'>" +
        "<li>" +
        "<time class='cbp_tmtime'><span>2017-2018</span></time>" +
        "<div class='cbp_tmicon cbp_tmicon-phone'></div>" +
        "<div class='cbp_tmlabel'>" +
        "<h3>La Compagnie du SAV - Lisses (91)</h3>" +
        "<p>Développement d'un portail d'accueil regroupant l'ensemble des applications WEB utilisés par les collaborateurs. Celui-ci permet d'accéder à un formulaire de demande de support développé par mes soins. <br> <br>" +
        "*Langage : HTML 5 / CSS 3 / PHP <br>" +
        "*IDE : Eclipse " +
        "</p>" +
        "</div>" +
        "</li>" +
        "<li>" +
        "<time class='cbp_tmtime'><span>2016-2017</span></time>" +
        "<div class='cbp_tmicon cbp_tmicon-phone'></div>" +
        "<div class='cbp_tmlabel'>" +
        "<h3>Développeur Windev chez Futurosoft - Evry (91)</h3>" +
        "<p>" +
        "Développement et Amélioration du module Statistique du logiciel G8. <br>" +
        "Développement d'une application mobile permettant de facilité le travail d'inventaire <br> <br>" +
        "*Langage : WLangage <br>" +
        "*IDE : Windev + Windev Mobile <br>" +
        "*Base de Données : Centre de Contrôle lié à Windev <br>" +
        "</p>" +
        "</div>" +
        "</li>" +
        "<li>" +
        "<time class='cbp_tmtime'><span>2016</span></time>" +
        "<div class='cbp_tmicon cbp_tmicon-phone'></div>" +
        "<div class='cbp_tmlabel'>" +
        "<h3>Développeur Web chez Delpharm - Brétigny-sur-Orges (91)</h3>" +
        "<p>" +
        "Création d'un Portail pour que les utilisateurs soit autonome sur leurs créations de tickets. Par ce biais, l'utilisateur accède également aux suivis de ses tickets. <br> <br>" +
        "*Langages utilisés : PHP / Framework PHP Codeigniter / HTML5 / CSS3 / Javascript / SQL <br>" +
        "*IDE : Eclipse <br>" +
        "*Base de Données : Mysql avec mise en place de PHPmyAdmin <br>" +
        "</p>" +
        "</div>" +
        "</li>" +
        "<li>" +
        "<time class='cbp_tmtime'><span>2015</span></time>" +
        "<div class='cbp_tmicon cbp_tmicon-phone'></div>" +
        "<div class='cbp_tmlabel'>" +
        "<h3>Développeur Web en Mairie - Malesherbes (45)</h3>" +
        "<p>" +
        "Développement d'un portail d'authentification pour la mise en place d'un Wifi Public <br> <br>" +
        "*Langages utilisés : PHP / HTML5 / CSS3 / SQL <br>" +
        "*IDE : Notepad ++ <br>" +
        "*Base de Données : Mysql avec mise en place de PHPmyAdmin" +
        "</p>" +
        "</div>" +
        "</li>" +
        "</ul>" +
        "</div>" +
        "</div>",

    "Scolaire": "<div class='container'>" +
        "<div class='main'>" +
        "<ul class='cbp_tmtimeline'>" +
        "<li>" +
        "<time class='cbp_tmtime'><span>2017</span></time>" +
        "<div class='cbp_tmicon cbp_tmicon-phone'></div>" +
        "<div class='cbp_tmlabel'>" +
        "<h3>Master Miage par Alternance - Université Paris-Saclay, Evry (91) (En cours)</h3>" +
        "</div>" +
        "</li>" +
        "<li>" +
        "<time class='cbp_tmtime'><span>2016-2017</span></time>" +
        "<div class='cbp_tmicon cbp_tmicon-phone'></div>" +
        "<div class='cbp_tmlabel'>" +
        "<h3>Licence 3 Miage par Alternance - Université Paris-Saclay, Evry (91)</h3>" +
        "</div>" +
        "</li>" +
        "<li>" +
        "<time class='cbp_tmtime'><span>2014-2016</span></time>" +
        "<div class='cbp_tmicon cbp_tmicon-phone'></div>" +
        "<div class='cbp_tmlabel'>" +
        "<h3>BTS SIO - Lycée Parc des Loges, Evry (91)</h3>" +
        "<p>" +
        "Spécialité SLAM " +
        "</p>" +
        "</div>" +
        "</li>" +
        "<li>" +
        "<time class='cbp_tmtime'><span>2010-2014</span></time>" +
        "<div class='cbp_tmicon cbp_tmicon-phone'></div>" +
        "<div class='cbp_tmlabel'>" +
        "<h3>Baccalauréat STMG - Lycée Duhamel du Monceau, Pithiviers(45)</h3>" +
        "<p>" +
        "Spécialité Gestion Finance " +
        "</p>" +
        "</div>" +
        "</li>" +
        "</ul>" +
        "</div>" +
        "</div>",

    //Compétences
    "Compétences": "<h1><b>Langages Informatiques</b></h1>" +
        "HTML" +
        "<div class='w3-light-grey' style='width:25%'>" +
        "<div class='w3-container w3-green w3-center' style='width:70%'>70%</div>" +
        "</div>" +
        "CSS" +
        "<div class='w3-light-grey' style='width:25%'>" +
        "<div class='w3-container w3-green w3-center' style='width:70%'>70%</div>" +
        "</div>" +
        "SQL" +
        "<div class='w3-light-grey' style='width:25%'>" +
        "<div class='w3-container w3-green w3-center' style='width:70%'>70%</div>" +
        "</div>" +
        "UML" +
        "<div class='w3-light-grey' style='width:25%'>" +
        "<div class='w3-container w3-green w3-center' style='width:70%'>70%</div>" +
        "</div>" +
        "PHP" +
        "<div class='w3-light-grey' style='width:25%'>" +
        "<div class='w3-container w3-green w3-center' style='width:70%'>70%</div>" +
        "</div>" +
        "Java" +
        "<div class='w3-light-grey' style='width:25%'>" +
        "<div class='w3-container w3-orange w3-center' style='width:50%'>50%</div>" +
        "</div>" +
        "XML" +
        "<div class='w3-light-grey' style='width:25%'>" +
        "<div class='w3-container w3-red w3-center' style='width:25%'>25%</div>" +
        "</div>" +
        "<h1><b>Autres Compétences informatiques </b></h1>" +
        "<h2> Méthodes Agiles </h2>" +
        "<div class='w3-light-grey' style='width:25%'>" +
        "<div class='w3-container w3-orange w3-center' style='width:50%'>50%</div>" +
        "</div>" +
        "<h2>Base de Données </h2>" +
        "Merise" +
        "<div class='w3-light-grey' style='width:25%'>" +
        "<div class='w3-container w3-orange w3-center' style='width:50%'>50%</div>" +
        "</div>" +
        "MySQL" +
        "<div class='w3-light-grey' style='width:25%'>" +
        "<div class='w3-container w3-green w3-center' style='width:70%'>70%</div>" +
        "</div>" +
        "<h2> Environnements </h2>" +
        "Eclipse" +
        "<div class='w3-light-grey' style='width:25%'>" +
        "<div class='w3-container w3-green w3-center' style='width:70%'>70%</div>" +
        "</div>" +
        "Visual Studio" +
        "<div class='w3-light-grey' style='width:25%'>" +
        "<div class='w3-container w3-green w3-center' style='width:70%'>70%</div>" +
        "</div>" +
        "<h2> Versioning </h2>" +
        "GitHub" +
        "<div class='w3-light-grey' style='width:25%'>" +
        "<div class='w3-container w3-orange w3-center' style='width:50%'>50%</div>" +
        "</div>"
    ,

    //Projets
    //Professionel
    "La Compagnie du SAV": "<h1 style='text-align:center;'><b>La Compagnie du SAV</b></h1>" +
        "<h2>Présentation de la Société</h2>" +
        "La Compagnie du SAV (CSAV) est une société de Service Après Vente d'Electroménager. " +
        "<img src='img/apprentissage/csav/logo.png' border='0' style='margin: 3% 40% 3% 40%'>" +
        "<h2>Présentation des Projets</h2>" +

        "<p>" +
        "Au sein de la Compagnie du SAV,  j'ai été amené à travaillé sur plusieurs projets." +
        "</p>" +

        "<section id='least' style='display: flex; flex-wrap: wrap; flex-direction: row; justify-content: center; align-items: center; margin-top: 5%;' > " +
        "<ul class='least-gallery'>" +

        //Page Home + Formulaire
        "<li><a href='#' title='Home et Formulaire' data-subtitle=''> " +
        "<img src='img/apprentissage/csav/Captures/Home/projetHome.jpg' alt='Alt Image Text' />" +
        "</li>" +

        //PIA
        "<li><a href='#' title='PIA' data-subtitle=''> " +
        "<img src='img/apprentissage/csav/Captures/PIA/projetPIA.jpg' alt='Alt Image Text' />" +
        "</li>" +

        //Proposition de Projet
        "<li><a href='#' title='Proposition de Projet' data-subtitle=''> " +
        "<img src='img/apprentissage/csav/Captures/Autres/autreProjet.jpg' alt='Alt Image Text' />" +
        "</li>" +

        "</ul>" +
        "</section>",

    "Delpharm": "<h1 style='text-align:center;'><b>Delpharm</b></h1>" +
        "<h2>Présentation de la Société</h2>" +
        "<p>" +
        "La société Delpharm est un groupe du secteur de l'industrie pharmaceutique. " +
        "Elle fournis plusieurs grand laboratoire du secteur. < br > " +
        "Créée en 1988, cette société comprend aujourd'hui 11 sites répartis sur l'ensemble du territoire. " +
        "Le site m'ayant accueilli le 11 Janvier 2016, pour une durée de 5 semaines, fût celui de Brétigny-sur-Orge." +
        "Cet établissement est une usine de production de médicaments solide et pâteux. " +
        "</p>" +

        "<img src='img/stage/Delpharm/Delpharm.jpg' border='0' style='margin: 2% 30% 2% 30%'>" +

        "<h2>Présentation des Projets</h2>" +
        "Dans le cadre de mon stage, la société m'a confié deux projets. <br>" +
        "Le premier consistait à transformer un document Word en un formulaire PDF saisissable. <br>" +
        "Le second était le développement d'un Portail de Gestion des Tickets Supports" +

        "<section id='least' style='display: flex; flex-wrap: wrap; flex-direction: row; justify-content: center; align-items: center; margin-top: 5%;'> " +
        "<ul class='least-gallery'>" +

        "<li><a href='#' title='Création' data-subtitle='De PDF Saisissable'> " +
        "<img src='img/stage/Delpharm/pdf/Creation_PDF.png' alt='Alt Image Text' />" +
        "</li>" +

        "<li><a href='#' title='Portail' data-subtitle='De Gestion des Tickets'> " +
        "<img src='img/stage/Delpharm/application/accueil.png' alt='Alt Image Text' />" +
        "</li>" +

        "</ul>" +
        "</section>",

    "Mairie de Malesherbes": "<h1 style='text-align:center;'><b>Mairie de Malesherbes</b></h1>" +
        "<h2>Présentation de l'Organisation</h2>" +
        "<p> " +
        "Dans le cadre de ma formation de BTS SIO, j'ai été amené à exécuté un stage au sein de la Mairie de Malesherbes. <br>" +
        "Ce stage de 5 semaines a débuté le 18 Mai 2015. <br>" +
        "</p>" +
        "<img src='img/stage/Mairie/Mairie.jpg' border='0' style='margin: 2% 30% 2% 30%'>" +
        "<p>" +
        "Le Service Informatique, dans lequel j'ai travaillé, regroupait 3 individus ayant chacun leur spécialité. <br>" +
        "Le premier était le DSI de la Mairie." +
        "A ce titre, il devait s'occuper du bon fonctionnement du service. " +
        "Il s'occupait également de l'infrastructure réseau. <br>" +
        "Le deuxième avait la responsabilité de gérer les différentes missions de support utilisateurs. <br>" +
        "La dernière personne du service avait la charge de cartographier l'ensemble de la ville (Routes, Réseaux de l'eau...) et de faire une représentation numérique des mesures prises sur le terrain. " +
        "</p>" +

        "<h2>Présentation du Projet</h2>" +
        "Dans le cadre de ce stage, la Mairie m'a confiée la charge de mettre en place un Wifi Public (HotSpot) pour le club de Football local. <br>" +
        "Cette installation a conduit à la programmation d'un portail captif à destination des personnes souhaitant s'authentifié sur ce wifi" +
   
        "<section id='least' style='display: flex; flex-wrap: wrap; flex-direction: row; justify-content: center; align-items: center; margin-top: 5%;' > " +
        "<ul class='least-gallery'>" +

        "<li><a href='#' title='HotSpot' data-subtitle=''> " +
        "<img src='img/stage/Mairie/projetPortail.png' alt='Alt Image Text' />" +
        "</li>" +

        "</ul>" +
        "</section>",

    //Personnels
    "Banque de Mot de Passe": "",
    //"Juste Prix":"",
    "Suivi Recherche Entreprise": "",
    "Maintenance Reptiles": "",

    //Scolaires

    //Veilles
    //Technologiques
    "Intelligences Artificielles": "<h1 style='text-align:center;'> <b> Intelligences Artificielles </b> </h1>" +
        "<h2><b>Description</b></h2>" +
        "<h2><b>Articles</b></h2>" +
        "<section id='least'> " +
        "<ul class='least-gallery'>" +

        "<li><a href='#' title='Faut-il en avoir peur?' data-subtitle='19 Septembre 2018'> " +
        "<img src='img/veilles/Technologique/IA/IA01.jpg' alt='Alt Image Text' />" +
        "</li>" +
        "</ul>" +
        "</section>",

    "Gatebox": "<h1 style='text-align:center;'> <b> Qu'est ce que la Technologie Gatebox ? </b> </h1>" +
        "<h2><b>Description</b></h2>" +
        "<p>" +
        "La Gatebox est une technologie Japonaise qui associe intelligence artificielle et hologramme. <br>" +
        "L'IA contrôle l'ensemble des fonctionnalités (recherche internet, contrôle des appareils électriques...) de cette technologie. <br>" +
        "De nombreux capteurs composent la Gatebox permettant d'analyser l'humeur et le comportement de l'utilisateur. " +
        "Ces analyses ont pour but d'améliorer la communication entre l'Homme et la Machine. <br> " +
        "L'Hologramme a pour objectif d'améliorer les intéractions de l'utilisateur en proposant comme interface un personnage de manga par défaut. " +
        "</p>" +
        "<h2><b>Articles</b></h2>" +
        "<section id='least'> " +
        "<ul class='least-gallery'>" +
        //Premier Article
        "<li><a href='#' title='une Assistante' data-subtitle='20 Janvier 2016'> " +
        "<img src='img/veilles/Technologique/gatebox/gatebox02.jpg' alt='Alt Image Text' />" +
        "</li>" +
        //2ème Article
        "<li>" +
        "<a href='#' title='IA Maison' data-subtitle='21 Janvier 2016' >" +
        "<img src='img/veilles/Technologique/gatebox/gatebox01.jpg' alt='Alt Image Text' />" +
        "</a>" +
        "</li>" +
        //3ème Article
        "<li>" +
        "<a href='#' title='Concept' data-subtitle='2016' >" +
        "<img src='img/veilles/Technologique/gatebox/gatebox03.jpg' alt='Alt Image Text' />" +
        "</a>" +
        "</li>" +
        //4ème Article
        "<li>" +
        "<a href='#' title='Assistant' data-subtitle='20 Janvier 2016' >" +
        "<img src='img/veilles/Technologique/gatebox/gatebox04.png' alt='Alt Image Text' />" +
        "</a>" +
        "</li>" +

        //5ème Article
        "<li>" +
        "<a href='#' title='une Assistante' data-subtitle='16 Décembre 2016' >" +
        "<img src='img/veilles/Technologique/gatebox/gatebox05.jpg' alt='Alt Image Text' />" +
        //http://kulturegeek.fr/news-100366/gatebox-lassistante-holographique-kawaii-vient-japon
        "</a>" +
        "</li>" +

        //6ème Article
        "<li>" +
        "<a href='#' title='une Assistante' data-subtitle='18 Décembre 2016' >" +
        "<img src='img/veilles/Technologique/gatebox/gatebox06.jpg' alt='Alt Image Text' />" +
        //https://www.journaldugeek.com/2016/12/18/gatebox-une-assistante-intelligente-plus-vraie-que-nature/
        "</a>" +
        "</li>" +
        "</ul>" +
        "</section>",
    "Ordinateurs Organiques": "<h1 style='text-align:center;'><b>Qu'est ce qu'un Ordinateur Organique ? </b></h1>" +
        "<h2><b>Description</b></h2>" +
        "<h2><b>Articles</b></h2>" +
        "<section id='least'> " +
        "<ul class='least-gallery'>" +
        //1er Article
        "<li><a href='#' title='Ordinateur Organique' data-subtitle='30 Octobre 2011'> " +
        "<img src='img/veilles/Technologique/gatebox/gatebox02.jpg' alt='Alt Image Text' />" +
        "</li>" +
        //2ème Article
        "<li>" +
        "<a href='#' title='Fonctionne à la Protéine' data-subtitle='27 Février 2016' >" +
        "<img src='img/veilles/Technologique/gatebox/gatebox01.jpg' alt='Alt Image Text' />" +
        "</a>" +
        "</li>" +
        //3ème Article
        "<li>" +
        "<a href='#' title='Open Innovation' data-subtitle='29 Août 2018' >" +
        "<img src='img/veilles/Technologique/gatebox/gatebox03.jpg' alt='Alt Image Text' />" +
        "</a>" +
        "</li>" +
        "</ul>" +
        "</section>",
    "Ordinateurs Quantiques": "<h1 style='text-align:center;'><b>Qu'est ce qu'un Ordinateur Quantique ? </b></h1>" +
        "<h2><b>Description</b></h2>" +
        "<h2><b>Articles</b></h2>",

    /*Juridiques*/
    "GDPR": "<h1 style='text-align:center;'> <b> GDPR </b> </h1>" +
        "<h2><b>Description</b></h2>" +
        "<h3><b>Présentation de l'Article</b></h3>" +
        "Ce règlement européen est entré en application le 25 Mai 2018. " +
        "<h3><b>Sanctions Encourues</b></h3>" +
        "<h2><b>Articles</b></h2>" +
        "<section id='least'> " +
        "<ul class='least-gallery'>" +
        "<li><a href='https://gdpr-info.eu/' title='GDPR' data-subtitle='25 Mai 2018'> " +
        "<img src='img/veilles/Juridique/gdpr.png' alt='Alt Image Text' />" +
        "</li>" +
        "<li><a href='https://www.cnil.fr/fr/reglement-europeen-protection-donnees' title='RGPD' data-subtitle='25 Mai 2018'> " +
        "<img src='img/veilles/Juridique/rgpd.png' alt='Alt Image Text' />" +
        "</li>" +
        "</ul>" +
        "</section>",
    "Loi Informatique et Liberté": "<h1 style='text-align:center;'> <b> Loi Informatique et Liberté </b> </h1>" +
        "<h2><b>Description</b></h2>" +
        "<h3><b>Présentation de l'Article</b></h3>" +
        "<h3><b>Sanctions Encourues</b></h3>" +
        "<h2><b>Article</b></h2>" +
        "<section id='least'> " +
        "<ul class='least-gallery'>" +

        "<li><a href='https://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000000886460' title='Loi n° 78-17' data-subtitle='6 Janvier 1978'> " +
        "<img src='img/veilles/Juridique/lil.png' alt='Alt Image Text' />" +
        "</li>" +
        "</ul>" +
        "</section>",
    "Hadopi": "<h1 style='text-align:center;'> <b> Hadopi </b> </h1>" +
        "<h2><b>Description</b></h2>" +
        "<h3><b>Présentation de l'Article</b></h3>" +
        "<h3><b>Sanctions Encourues</b></h3>" +
        "<h2><b>Article</b></h2>" +
        "<section id='least'> " +
        "<ul class='least-gallery'>" +

        "<li><a href='#' title='Loi n° 2009-669' data-subtitle='13 Juin 2009'> " +
        "<img src='img/veilles/Juridique/hadopi.png' alt='Alt Image Text' />" +
        "</li>" +
        "</ul>" +
        "</section>",
    "Godfrain": "<h1 style='text-align:center;'> <b> Godfrain </b> </h1>" +
        "<h2><b>Description</b></h2>" +
        "<h3><b>Présentation de l'Article</b></h3>" +
        "<p>" +
        "La loi Godfrain a été promulguée le 5 Janvier 1988. <br>" +
        "Cette loi est relative à la Fraude Informatique réprimant les actes criminelles informatiques ainsi que le piratage. " +
        "</p>" +
        "<h3><b>Sanctions Encourues</b></h3>" +
        "<h2><b>Article</b></h2>" +
        "<section id='least'> " +
        "<ul class='least-gallery'>" +

        "<li><a href='https://www.legifrance.gouv.fr/jo_pdf.do?id=JORFTEXT000000875419' title='Loi n° 88-19' data-subtitle='5 janvier 1988'> " +
        "<img src='img/veilles/Juridique/godfrain.png' alt='Alt Image Text' />" +
        "</li>" +
        "</ul>" +
        "</section>",
    //Contact
    "Contact": "<form method=\"post\" action=\"../envoiMail.php\">" +
        "<p class=\"formMail\">" +
        "<input class=\"emailExp\" type=\"email\" name=\"email\" placeholder=\"Adresse E-mail\" required>" +
        "<input class=\"obj\" type=\"text\" name=\"objet\" placeholder=\"Objet\" required>" +
        "<textarea class=\"contenuMail\" name=\"contenuMail\" required></textarea>" +
        "<input class=\"btnEnvoi\" type=\"submit\" name=\"envoyer\" value=\"Envoyer\">" +
        "</p>" +
        "</form>",
}