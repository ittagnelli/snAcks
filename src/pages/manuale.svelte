<Page name="manuale" class="bg-color-white">
    <Navbar title={$title_bar} backLink="back"/>
    <BlockTitle medium>Installazione su Home telefono</BlockTitle>
    <List accordionList>
            <ListItem accordionItem title="IOS"> 
                <AccordionContent>
                    <Block>
                        <p>Se hai un iphone visualizza il seguente video per installare snAcks sulla schermata home. </p>
                        <p>E' preferibile effettuare l'installazione tramite il browser standard per iOS: SAFARI</p>
                        <video src="ios_video.mp4" controls>fdr</video>
                    </Block>
                </AccordionContent>
            </ListItem> 
        <ListItem accordionItem title="Android"> 
            <AccordionContent>
                <Block>
                    <p>Se hai un Samsung, un Huawei, uno Xiaomi o un altro dispositivo Android puoi scaricare snAcks dal Google Play Store al seguente link</p> <a on:click={open} href="javascript:void(0);" >https://play.google.com/store/apps/details?id=com.ats.snacks</a>
                </Block>
            </AccordionContent>
        </ListItem> 
    </List>

    <BlockTitle medium>Come funziona l'App</BlockTitle>
    <List accordionList>
            <ListItem accordionItem title="Home"> 
                <AccordionContent>
                    <Block>
                        <p>Nella home puoi ordinare il tuo cibo preferito, facendo click (tap) su di esso (Max 2 prodotti).</p>
                        <p>Il carrello indica la quantità di prodotti ordinati per tipo di merenda.</p>
                        <p>Poi seleziona la data (fino al massimo di 3 giorni) e premi il pulsante Ordina</p>
                    </Block>
                </AccordionContent>
            </ListItem> 
            <ListItem accordionItem title="Storico"> 
                <AccordionContent>
                    <Block>
                        <p>Puoi visualizzare i tuoi ultimi 5 ordini.</p>
                        <p>Gli ordini più recenti possono essere rimossi premendo il pulsante <b>Rimuovi</b></p>
                    </Block>
                </AccordionContent>
            </ListItem>
            <ListItem accordionItem title="Ritiro"> 
                <AccordionContent>
                    <Block>
                        <p>Questa pagina è utile al momento del ritiro della colazione in cortilo o in mensa</p>
                        <p>Mostrala all'addetto alle consegne per poter ritirare la tua colazione.</p>
                    </Block>
                </AccordionContent>
            </ListItem>
            <ListItem accordionItem title="Feedback"> 
                <AccordionContent>
                    <Block>
                        <p>Puoi usare la sezione "Feedback" per comunicarci errori, idee, miglioramenti o inviarci dei suggerimenti.</p>
                        <p>Compila il titolo e fornisci una breve descrizione del problema o del suggerimento.</p>
                    </Block>
                </AccordionContent>
            </ListItem>  
            <ListItem accordionItem title="LogOut"> 
                <AccordionContent>
                    <Block>
                        <p>Puoi effettuare il LogOut andando nella sezione About (icona in alto a sinistra).</p>
                        <p>Premi il pulsante LogOut per uscire e autenticarsi nuovamente.</p>
                    </Block>
                </AccordionContent>
            </ListItem>  
    </List>

    <BlockTitle medium>Ritiro</BlockTitle>
    <List accordionList>
        <ListItem accordionItem title="Quando?"> 
            <AccordionContent>
                <Block>
                    <p>Nell'intervallo dopo il primo modulo didattico.</p>
                </Block>
            </AccordionContent>
        </ListItem> 
        <ListItem class="settori" accordionItem title="Come funziona il ritiro?"> 
            <AccordionContent>
                <Block>
                    <p>Mettiti in fila per ritirare la tua merenda</p>
                    <p>Apri l'app e vai sulla sezione <b>RITIRO</b></p>
                    <p>Mostra il tuo ordine all'addetto alla distribuzione.</p>
                </Block>
            </AccordionContent>
        </ListItem>
    </List>
  </Page>
  
  <script>
      import {Page, Block, BlockTitle, Navbar, Link, Button, List, ListItem, AccordionContent, Row, Col} from 'framework7-svelte'
      import { user_email, last_feedback, title_bar } from '../js/snacks_store.js';

      export let f7router; // this is just to avoid a warning
      export let f7route;
      
      function open() {             //just for security reason(target=_blank)
          window.open("https://play.google.com/store/apps/details?id=com.ats.snacks");
      }
  </script>
  
  <style>
     .settori {
        background-color: rgb(154, 149, 149);
     }
     .scritte{
         background-color: blue;
     }
     video{
         width: 350px;
         height: 400px;
     }
  </style>