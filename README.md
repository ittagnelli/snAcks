# snAcks
Applicazione per la prenotazione della colazione delle ore 10:00


## Requisiti

Sviluppare un'applicazione mobile per la prenotazione dell'acquisto della merenda nell'intervallo delle ore 10.00.
L'applicazione ha i seguenti requisiti minimi:

- supportare le piattaforme iOS e Android
- richiedere il login con l'account istituzionale Agnelli
- su indicazione dell'utente il login può rimanere memorizzato per 7 giorni
- il giorno X entro le ore 13.50 permettere la prenotazione della merenda per i giorni  da X+1 a  X+3 
- ogni studente può prenotare al massimo 2 merende per ogni giorno
- permettere la cancellazione di una prenotazione per il giorno X entro le ore 13.50 del giorno X-1
- fornire uno storico delle prenotazione negli ultimi 7 giorni
- fornire una sezione di amministrazione (uno o più login definiti a livello sviluppo) in cui venga visualizzato:
    - il numero complessivo di merende prenotate per i giorni da X+1 a X+3
    - il numero complessivo di merende prenotatre suddiviso per categoria di merenda per i giorni da X+1 a X+3
- L'applicazione deve visualizzare uno splashscreen con il logo ATS e applicativo


### Altri requisiti di sistema:
- il sistema deve essere sviluppato con un'architettura serverless
- i dati delle prenotazioni delle merende devono essere memorizzate in un DB
- deve essere disponibile un manuale utente realizzato in HTML per la pubblicazione sul sito della scuola
- Il sistema alle ore 13.50, a chiusura delle prenotazioni, deve inviare un email ad una lista di account pre-definita con:
    - il numero complessivo di merende prenotate per i giorni da X+1 a X+3
    - il numero complessivo di merende prenotatre suddiviso per categoria di merenda per i giorni da X+1 a X+3
- L'applicazione deve avere un nome ed un logo chiaramente identificabili
- L'applicazione deve essere sviluppata usando tecnologie Web



