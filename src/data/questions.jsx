const questions = [
    "As-tu déjà envoyé des nudes?", 
    "As-tu déjà eu un coup d'un soir?", 
    "As-tu déjà trouvé un prétexte pour arrêter le sexe?",
    "As-tu déjà acheté de la lingerie sexy?",
    "As-tu déjà joué au strip poker?",
    "As-tu déjà couché avec un(e) collègue de travail?",
    "As-tu déjà fait un double date?",
    "As-tu déjà menti pendant un date pour partir?",
    "T'es-tu déjà endormi(e) pendant le sexe?",
    "As-tu déjà eu une relation libre?",
    "As-tu déjà pris une cuite avec tes parents?",
    "As-tu déjà eu le coeur brisé?",
    "T'es-tu déjà trompé de prénom avec mon/ma partenaire?",
    "As-tu déjà surpris quelqu'un devant du porno?",
    "As-tu déjà été infidèle?",
    "Es-tu déjà sorti(e) dans la rue en pyjama?",
    "As-tu déjà suivi une émission de télé-réalité?",
    "As-tu déjà flirté avec quelqu'un pour un pari?",
    "As-tu déjà eu un accident de voiture?",
    "As-tu déjà pleuré devant un film?",
    "As-tu déjà simulé au lit?",
    "As-tu déjà surpris un couple en pleine partie de sex?",
    "As-tu déjà été filmé(e) au lit?",
    "T'es-tu déjà vanté d'une chose que je n'avais jamais faite?",
    "As-tu déjà parié sur un résultat sportif et As-tu gagné?",
    "As-tu déjà espionné un ex sur les réseaux sociaux?",
    "Es-tu déjà tombé amoureux/se  sur les réseaux sociaux?",
    "As-tu déjà pécho la même personne que mon/ma meilleur(e) ami(e)?",
    "As-tu déjà posé un lapin?",
    "As-tu déjà mesuré mon sexe ou celui de mon partenaire?",
    "As-tu déjà eu une relation sexuelle avec quelqu'un du même sexe que toi?",
    "As-tu déjà embrassé quelqu'un sans connaître son nom?",
    "Es-tu déjà sorti(e) avec plusieurs personnes à la fois?",
    "As-tu déjà été dans un sex shop?",
    "As-tu déjà pris de la drogue dure?",
    "As-tu déjà fait semblant de rire à une blague que je n'avais pas comprise?",
    "As-tu déjà rêvé de devenir célèbre?",
    "Es-tu déjà déjà tombé(e) en public?",
    "As-tu déjà dit je t'aime sans le penser?",
    "As-tu déjà conduit bourré(e)?",
    "As-tu déjà espionné tes voisins?",
    "T'es-tu déjà fait virer d’un bar ou d’une boîte?",
    "As-tu déjà nagé complètement nu dans une piscine?",
    "T'es-tu déjà fait arrêter?",
    "As-tu déjà pété pendant le sexe?",
    "As-tu déjà mis ton pénis dans un aspirateur?",
    "As-tu déjà dépensé plus de 100€ en une soirée?",
    "As-tu déjà couché avec un étranger?",
    "T'es-tu déjà fait(e) jouir tout(e) seul(e) après le sexe parce que tu n’étais pas satisfait(e)?",
    "As-tu déjà pété fort dans un lieu public?",
    "As-tu déjà vomi dans Uber?",
    "As-tu déjà mangé tes crottes de nez?",
    "As-tu déjà pleuré pendant le sexe?",
    "As-tu déjà fantasmé sur la mère d'un pote?",
    "As-tu déjà recouché avec ton ex?",
    "As-tu déjà utilisé de la nourriture pendant le sexe?",
    "As-tu déjà eu une IST?",
    "As-tu déjà textoté plus de 4h d'affilée?",
    "As-tu fait pipi dans la piscine?",
    "As-tu déjà couché avec une personne en couple?",
    "As-tu déjà pratiqué les jeux de rôles sexuels?",
    "As-tu déjà fait l'amour dans des toilettes publics?",
    "As-tu déjà essayé de m'auto-sucer?",
    "As-tu plus de 20 conquêtes?",
    "As-tu eu ton permis du premier coup?",
    "As-tu déjà eu un coup d'un soir non protégé?",
    "As-tu déjà craché sur ton/ta partenaire au lit?",
    "As-tu déjà embrassé quelqu'un après avoir vomi?",
    "Es-tu déjà monté(e) dans la voiture de quelqu'un en faisant du stop?",
    "Es-tu déjà sorti(e) sans sous-vêtement?",
    "As-tu déjà fait du sexe par téléphone?",
    "As-tu déjà vomi à cause de l'alcool?",
    "As-tu déjà mangé de la nourriture pour animaux?",
    "As-tu déjà pratiqué le bondage?",
    "As-tu déjà reçu un sexto/nude par erreur?",
    "As-tu déjà reçu une dick pic non désirée?",
    "As-tu déjà couché avec quelqu’un dont tu ne comprenais pas la langue?",
    "As-tu déjà fait un tiktok?",
    "As-tu déjà regarder ton/ta partenaire se masturber?",
    "As-tu déjà été surpris(e) au lit?",
    "As-tu déjà envoyé des sextos?",
    "As-tu déjà envoyé des nudes/sextos à la mauvaise personne?",
    "As-tu déjà pratiqué le sexe oral?",
    "As-tu déjà fait l'amour dans un lieu public?",
    "As-tu déjà embrassé une personne du même sexe?",
    "As-tu déjà fait des blagues téléphoniques?",
    "As-tu déjà tenté une position sexuelle cheloue?",
    "As-tu déjà fait un plan à 3?",
    "As-tu déjà mis un doigt dans un cul?",
    "As-tu déjà refusé d’aller en bas à cause de l’odeur?",
    "As-tu déjà travaillé dans un Fast-food?",
    "As-tu déjà passé plus d’un mois sans boire depuis que tu bois?",
    "As-tu déjà dragué quelqu’un qui était marié?",
    "As-tu déjà passé 1 an sans sexe depuis ta première fois?",
    "As-tu déjà emmené quelqu’un au cinéma pour le premier rendez-vous?",
    "As-tu déjà cassé ton télephone?",
    "As-tu déjà gouté du sperme?",
    "As-tu déjà dis à quelqu’un qu’il/elle avait de belles parties intimes?",
    "As-tu déjà mis de la musique pour créer une ambiance caliente?",
    "T'es-tu déjà masturbé(e) dans le bain?",
    "As-tu déjà fait de l’échangisme?",
    "As-tu déjà abandonné un/une pote en soirée pour aller faire l’amour?",
    "As-tu déjà insulté un/une ex après une rupture?",
    "As-tu déjà fais l’amour avec quelqu’un parce que tu avais pitié de lui?",
    "As-tu déjà déjà été bourré(e) au travail?",
    "As-tu déjà fait l’amour pendant les règles?",
    "As-tu déjà acheté un test de grossesse?",
    "As-tu déjà dragué quelqu’un pour rendre quelqu’un d'autre jaloux?",
    "As-tu déjà reçu des plaintes par rapport au bruit de tes rapports sexuels?",
    "As-tu déjà menti sur ton CV?",
    "As-tu déjà essayé les préservatifs aromatisés?",
    "As-tu déjà cassé un meuble en m’asseyant dessus?",
    "T'es-tu déjà mis(e) nu(e) pour un défi?",
    "As-tu déjà ignoré une demande d’ami d’un collègue de travail?",
    "As-tu déjà essayé de voler le/la partenaire de quelqu’un?",
    "T'es-tu déjà trompé de porte en rentrant chez toi bourré(e)?",
    "As-tu déjà fait du sport bourré?",
    "As-tu déjà essayé le viagra?",
    "As-tu déjà été dans une relation juste parce que c’est mieux que d’être seul?",
    "As-tu déjà été dans une maison hantée?",
    "As-tu déjà pratiqué la double pénétration?",
    "As-tu déjà été au travail sans te laver?",
    "As-tu déjà pris une douche avec un/une ami(e)?",
    "As-tu déjà fait virer quelqu’un de ton travail?",
    "As-tu déjà utilisé un sextoy sur quelqu’un d’autre?",
    "As-tu déjà payé pour du sexe?",
    "As-tu déjà été friendzone?",
    "As-tu déjà prétendu être malade pour ne pas aller travailler?",
    "As-tu déjà volé quelque chose au travail?",
    "As-tu déjà bu une bière très vite puis vomi?",
    "As-tu déjà dormi dehors en étant bourré?",
    "As-tu déjà senti une culotte sale?",
    "As-tu déjà fais l'amour dans la douche?",
    "As-tu déjà fait pipi autre part qu'aux toilettes et dans la rue?",
    "As-tu déjà travaillé dans un Fast-food?",
    "As-tu déjà été avec l’ex d’un(e) ami(e)?",
    "T'es-tu déjà déjà habillé(e) comme le sexe opposé?",
    "Es-tu déjà tombé à cause de l’alcool?",
    "As-tu déjà jeté un oeil à quelqu’un qui se douchait?",
    "As-tu déjà bu de l’alcool seul?",
    "As-tu déjà fouillé dans les photos de ton/ta partenaire?",
    "As-tu déjà fait un resto-basket?",
    "As-tu déjà jetté un oeil à quelqu’un qui était en train de se changer?",
    "As-tu déjà quitté quelqu’un en public?",
    "As-tu déjà joué au jeux vidéos pendant plus de 5h?",
    "As-tu déjà flirté avec quelqu’un sur un jeu en ligne?",
    "T'es-tu déjà perdu(e) en étant bourré(e)?",
    "As-tu déjà dis que ce n’était pas toi qui avait pété?",
    "As-tu déjà rasé tes parties intimes?",
    "As-tu déjà donné ton numéro de téléphone à un(e) inconnu(e)?",
    "As-tu déjà dragué quelqu’un de plus vieux que toi?",
    "As-tu déjà été sur un site de rencontre? ",
    "As-tu déjà couché avec quelqu’un que tu as rencontré en ligne?",
    "As-tu déjà fait un petit-déjeuner au lit?",
    "As-tu déjà masturbé ton/ta partenaire en public?",
    "As-tu déjà menti à propos d’une relation sexuelle?",
    "As-tu déjà refusé d’aller en bas à cause des poils?",
    "As-tu déjà été tellement bourré que tu as fait pipi au lit?",
    "As-tu déjà frappé un mur?",
    "As-tu déjà fait semblant d’aimer quelque chose juste parce que ton crush aimait?",
    "As-tu déjà pleuré devant un/une ex?",
    "As-tu déjà envoyé un message et regretté directement?",
    "As-tu déjà parlé à la moindre personne que tu as croisé en étant bourré?",
    "As-tu déjà reçu une lettre d’amour?",
    "As-tu déjà eu une relation avec deux personnes d’une même famille?",
    "As-tu déjà couché avec l’ex d’un pote?",
    "T'es-tu déjà réveillé(e) sans savoir où tu étais?",
    "As-tu déjà laissé un message vocal en étant bourré?",
    "Es-tu déjà tombé amoureux/se de quelqu’un avant de le(a) rencontrer?",
    "As-tu déjà fait un speed-dating?",
    "Es-tu déjà tombé(e) du canapé à cause de l’alcool?",
    "As-tu déjà paniqué et pas su quoi répondre quand on t’a dit “Je t’aime”?",
    "As-tu déjà quitté quelqu’un par message?",
    "As-tu déjà utilisé un légume comme sextoy?",
    "As-tu déjà fait l’amour avec quelqu’un dans cette pièce?",
    "As-tu déjà pété dans un ascenceur?",
    "As-tu déjà maté quelqu'un en présence de ton/ta partenaire?",
    "As-tu déjà léché un anus?",
    "As-tu déjà regarder des gens faire l'amour?",
    "As-tu déjà calé plusieurs fois en voiture alors que les gens attendaient derrière?",
    "As-tu déjà habité à l'étranger?",
    "As-tu déjà flirté avec une personne qui avait au moins 5 ans de plus que toi?",
    "As-tu déjà flirté avec une personne qui avait au moins 5 ans de moins que toi?",
    "As-tu déjà triché à un examen?",
    "As-tu déjà eu peur devant un film d’horreur au point de ne pas le finir?",
    "As-tu déjà pratiqué la sodomie?",
    "As-tu déjà été coincé(e) dans un ascenseur",
    "As-tu déjà cassé de la vaisselle au restaurant?",
    "As-tu déjà été dragué(e) par quelqu’un du même sexe?",
    "As-tu déjà fais un rêve érotique avec une personne dans cette pièce?",
    "As-tu déjà lu un roman pour adultes?",
    "As-tu déjà dormi au cinéma?",
    "As-tu déjà fais l'amour dans un ascenceur?",
    "As-tu déjà séché les cours?",
    "As-tu déjà eu un plan cul régulier?",
    "As-tu déjà lu un guide sexuel?",
    "As-tu déjà menti à mes parents à propos de la gueule de bois?",
    "As-tu déjà eu un(e) sex friend?",
    "T'es-tu déjà battu(e) dans la rue?",
    "T'es-tu déjà endormi(e) dans les transports et tu as dépassé ta station?",
    "As-tu déjà dit “je t’aime” juste pour baiser?",
    "As-tu déjà frappé un mur?",
    "As-tu déjà douté de ton hétérosexualité?",
    "As-tu déjà stalké le nouveau crush de ton ex sur les réseaux sociaux?",
    "As-tu déjà collé un chewing-gum sous un bureau?",
    "As-tu déjà couché avec quelqu’un que tu avais rencontré dans la journée?",
    "As-tu déjà bu pour avoir plus confiance en toi?",
    "As-tu déjà bu dans une gamelle de chien?",
    "As-tu déjà eu un trou noir?",
    "As-tu déjà pécho quelqu'un qui avait vomi avant?",
    "As-tu déjà largué quelqu’un en étant bourré(e)?",
    "T'es-tu déjà Googlé pour savoir ce que tu allais trouver",
    "As-tu déjà craqué ton pantalon?",
    "As-tu déjà été à un rendez-vous tinder?",
    "As-tu déjà écrit MDR sans être mort de rire?",
    "As-tu déjà fait l'amour debout?",
    "As-tu déjà changé de comportement en fonction de qui été en face de toi?",
    "As-tu déjà dormi avec quelqu'un dans cette pièce?",
    "As-tu déjà sauté habillé(e) dans une piscine?"
]

export default questions