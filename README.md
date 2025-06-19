Ontwerp en maak een data driven online concept voor een opdrachtgever

De instructies voor deze opdracht staan in: [docs/INSTRUCTIONS.md](https://github.com/fdnd-task/proof-of-concept/blob/main/docs/INSTRUCTIONS.md)

# Citysprout voor fresk.digital - proof of concept
Een data driven website met een pleasurable laag voor leuke interactie.

## Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Gebruik](#gebruik)
  * [Kenmerken](#kenmerken)
  * [Installatie](#installatie)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Beschrijving
Citysprout is een fictief bedrijf waarbij 6 verschillende soorten werknemers actief zijn. Iedere soort werknemer heeft een pagina met de betreffende informatie. Ze hebben zoal gemeenschappelijke soort content als verschillende. Alle content is te vinden op de overzichtspagina, waarnaar eventueel doorgelinkt kan worden naar een detailpagina voor extra informatie over bijvoorbeeld een werkschema. 

<details>
 <summary>VIDEO: bekijk demo</summary>
 
 https://github.com/user-attachments/assets/115c13de-bcee-46ce-bf73-eef2a30c09d8

</details>


[Bekijk zelf de site!](https://proof-of-concept-4f4r.onrender.com/mechanic)


## Gebruik
De gebruikers van het eindresultaat zijn de werknemers van CitySprout. Dit is een growing urban futures. Zij willen bij hun taak binnen het bedrijf hun informatie kunnen zien. Zoals bijvoorbeeld openstaande taken. CitySprout wil een website aanleveren voor hun werknemers zodat zij hun eigen informatie kunnen lezen en om overbodige informatie te voorkomen.

Op de site kun je kiezen wat jouw rol is binnen het bedrijf via het menu. Dan kom je op een dashboard / overzichtspagina. Hier vindt je wat algemene informatie over jouw rol binnen het bedrijf. Ook staan er verschillende knoppen met onderdelen die bij jouw rol binnen het bedrijf horen (deze verschillen per soort werknemer) en deze knoppen linken door naar een andere pagina met meer informatie. Als je door scrollt zie je de messages binnen het Citysprout bedrijf. Hier kun je berichten lezen van anderen binnen het bedrijf of zelf wat achter laten. Tot slot kun je nog het persepctief lezen van jouw rol binnen het bedrijf.


## Kenmerken
Tijdens het project is er gewerkt met de techniek _'De hierarchy of user needs'_. Door deze strategie te gebruiken wordt er al veel gedacht aan progressive enhancement (zorgen dat de site werkt voor iedere gebruiker). _'De hierarchy of user needs'_ zorgt ervoor dat je de site in volgende opeenvolgende stappen opbouwt:

<img src="https://github.com/user-attachments/assets/258443ac-3067-478e-97b9-94b6e26f54f7" width="320">


### Functional & reliable - progressive enhancement (stap 1 & 2)
_Op de pagina zorg je ervoor dat alles doormiddel van HTML en CSS (mobile first) alleen al kan werken. Het komt overeen met de eerste twee lagen van Progressive Enhancement._

Een voorbeeld hiervan is de navigatie. Wanneer een gebruiker Javascript en CSS scroll behaviour uit heeft staan, dan staat het menu onderaan de pagina en wordt je doorgelinkt naar onder als je op _'menu'_ klikt (alleen HTML nodig, stap 1 + 2). Vervolgens als de browser of gebruiker wel scroll behaviour toelaat, dan wordt er smooth naar het menu doorgelinkt. Als de gebruiker ook Javascript accepteert, verandert het hele menu. De navigatie verdwijnt onderaan de pagina, en wordt zichtbaar doormiddel van een uitklapmenu. Bij breder scherm zie je de navigatie ook dan al bovenaan de pagina getoond. Dit toont aan dat de ervaring stap voor stap beter wordt, maar voor iedereen werkend blijft. 


### Usable (stap 3)
_In de Usable laag zorg je ervoor dat je website goed te gebruiken is._

Voorbeelden hiervan zijn de volgende:
* Feedforward: Als je over een link heen gaat vindt er een animatie plaats (iets veranderd van achtergrondkleur, draait rond, krijgt schaduw). Dit laat zien dat je wat kan doen met het geen waar je muis zich bevindt.
* Feedback: Feedback kunnen we terug vinden bij de dialog, nadat je een message hebt achtergelaten komt er eerst een loading-state tevoorschijn. Dit laat zien dat je wat hebt gedaan en dat het zijn werking in gang zet. Vervolgens als de message erbij gekomen is, krijg je een melding dat het gelukt is als feedback en je ziet de nieuwe message bovenaan. Dit is allemaal feedback.
* Toegankelijkheid: Ook kun je hierbij denken aan toegankelijkheid. Je zorgt ervoor dat je goed door de pagina heen kan tabben.
* Responsiveness: Je zorgt er ook voor dat je site op verschillende schermformaten werkt en te gebruiken is. 


### Pleasurable (stap 4)
_De pleasurable laag van de hierarchy of user needs zorgt ervoor dat een gebruiker plezier beleeft aan de website._

Voorbeelden hiervan zijn de volgende:
<details>
 <summary>menu schaduw animatie:</summary>

<video src="https://github.com/user-attachments/assets/180ce750-2d52-4d75-b0a3-147e5b898ea7">

</details> 
<details>
 <summary>:hover zwaaiend handje animatie:</summary>

<video src="https://github.com/user-attachments/assets/df1748ad-e615-4a53-a316-5257ceeabb9b">

</details> 
<details>
 <summary>:hover rotate + schaduw animatie:</summary>

<video src="https://github.com/user-attachments/assets/7bcdc8e8-fc72-41a1-9a5b-c9aa91da9bc5">

</details> 
<details>
 <summary>:hover button animatie:</summary>

<video src="https://github.com/user-attachments/assets/160fd6d0-ed5c-4c06-922c-6dfc1c21514d">

</details> 




Buiten de _hierarchy of user needs_ zijn er nog wat losse kenmerken aan dit project. Deze staan hieronder kort per stuk uitgewerkt:


### POST formulier, client side fetch + states
De pop-up / dialog op de pagina bevat een POST formulier. Deze POST stuurt een message naar de directus API. Als het formulier gesubmit wordt dan wordt er door middel van de client side fetch een loading state geactiveerd, je ziet een laadicoon. Wanneer dan de message in de HTML geparsed is en zichtbaar is geworden op de pagina, verdwijnt de loading state, sluit de pop-up en wordt er een succes state geactiveerd, je ziet een melding dat het gelukt is. Je ziet dan de nieuwste message bovenaan. 


### Anchor positioning
Voor het menu is er gebruik gemaakt van [anchor positioning](https://github.com/julesbruins/proof-of-concept/blob/ef430b5d9dcd7b76cca73538ac6f9ea4ceabfe47/public/styles/general.css#L58-L59). Dit zodat het uitklap menu zich vast ankert aan het brede menu. 


### Code conventions
Verder heb ik het hele project door gebruik gemaakt van de volgende code conventions. 

**HTML / Liquid**
* Gebruik semantische HTML: `<section>`, `<article>`, `<main>`
* kebab-case voor classnamen: section-title
* Voeg alt-teksten toe aan afbeeldingen (voor toegankelijkheid)
* Progressive enhancement

**CSS**
* kebab-case voor classnamen: .form-field
* Naamgeving in het engels
* Schrijf mobile-first met zo mogelijk geneste media queries
* Gebruik --custom-properties waar mogelijk
* Houd CSS DRY (vermijd dubbele regels)
  
**JavaScript**
* Server side structuur volgens sitemap (routes)
* camelCase voor variabelen/functies: handleSubmit


## Ontwerpkeuzes
Voor de ontwerpkeuzes, is er zoals gevraagd gebruik gemaakt van AI. Hierbij kwam ik al snel uit op een minimalistisch ontwerp thema met groene accenten en ronde hoeken. Het leek me mooi om de basis van de pagina in de groene kleuren te maken. Hiermee zijn we uitgekomen op het volgende ontwerp en logo. In het ontwerp worden verschillende groene kleurtonen gebruikt. 


<img src="https://github.com/user-attachments/assets/7bfc1abe-73a4-4386-9919-497a455bcc64" width="400">
<img src="https://github.com/user-attachments/assets/af17bfea-e768-46b8-bc62-301e6fd94368" width="400">

<img src="https://github.com/user-attachments/assets/6347a09b-f035-4686-a39b-5514d81494dd" width="400">
<img src="https://github.com/user-attachments/assets/1b77b355-2517-436e-9fee-08168f2bdf06" width="400">


## Installatie
In dit project wordt gebruik gemaakt van NodeJS. Om aan dit project te werken moet NodeJS geïnstalleerd zijn. Eenmaal geïnstalleerd kan het project geopend worden in de code editor.

Voer in de terminal `npm install` uit om alle afhankelijkheden te installeren.

Voer vervolgens `npm start` uit om de server te starten.

Ga in je browser naar http://localhost:8000 om het project te bekijken.


## Bronnen

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
