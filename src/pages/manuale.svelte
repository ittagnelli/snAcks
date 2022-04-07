<Page name="about">
    <Navbar title={$title_bar} backLink="back"/>
    <BlockTitle>Installazione su Home telefono</BlockTitle>
    <List accordionList>
            <ListItem accordionItem title="IOS"> 
                <AccordionContent>
                    <Block>
                        <p>Se hai un iphone visualizza il seguente video per creare un app sulla schermata home: </p>
                        <video src="/ios_video.mp4" controls>fdr</video>
                    </Block>
                </AccordionContent>
            </ListItem> 
        <ListItem accordionItem title="Android"> 
            <AccordionContent>
                <Block>
                    <p>Se hai un Samsung, un Huawei, uno Xiaomi o un altro dispositivo Android visualizza il seguente video per creare un app sulla schermata home: </p>
                    <video src="and_video.mp4" controls></video>
                </Block>
            </AccordionContent>
        </ListItem> 
    </List>

    <BlockTitle>Come funziona l'App</BlockTitle>
    <List accordionList>
            <ListItem accordionItem title="Home"> 
                <AccordionContent>
                    <Block>
                        <p>Nella home trovi tutti i prodotti e le date nelle quali puoi prenotare la tua merenda.</p>
                    </Block>
                </AccordionContent>
            </ListItem> 
        <ListItem accordionItem title="Storico"> 
            <AccordionContent>
                <Block>
                    <p>Nello storico trovi gli ultimi 5 ordini che hai fatto, da qui puoi cancellarli entro tot ore dall'ordine.</p>
                </Block>
            </AccordionContent>
        </ListItem> 
        <ListItem accordionItem title="Feedback"> 
            <AccordionContent>
                <Block>
                    <p>Nella sezione "Feedback" puoi comunicarci dei miglioramenti o inviarci delle recensioni.</p>
                </Block>
            </AccordionContent>
        </ListItem> 
    </List>

    <BlockTitle>Odinazioni</BlockTitle>
    <List accordionList>
        <ListItem accordionItem title="Come posso ordinare?"> 
            <AccordionContent>
                <Block>
                    <p>Per ordinare un prodotto clicca su di esso, a destra il carrello ri riempirà e potrai scegliere la quantità per ognuno.<br> Puoi ordinare fino a 2 pezzi per prodotto.</p>
                </Block>
            </AccordionContent>
        </ListItem> 
        <ListItem class="settori" accordionItem title="Come funziona il pagamento?"> 
            <AccordionContent>
                <Block>
                    <p>Non si sa.</p>
                </Block>
            </AccordionContent>
        </ListItem>
    </List>

    <BlockTitle>Ritiro</BlockTitle>
    <List accordionList>
        <ListItem accordionItem title="Quando?"> 
            <AccordionContent>
                <Block>
                    <p>Boh.</p>
                </Block>
            </AccordionContent>
        </ListItem> 
        <ListItem class="settori" accordionItem title="Come funziona il ritiro?"> 
            <AccordionContent>
                <Block>
                    <p>Boh.</p>
                </Block>
            </AccordionContent>
        </ListItem>
    </List>

    <BlockTitle>Tutorial</BlockTitle>
    <List accordionList>
        <ListItem accordionItem title="Ordinare"> 
            <AccordionContent>
                <Block>
                    <video src=""></video>
                </Block>
            </AccordionContent>
        </ListItem> 
        <ListItem class="settori" accordionItem title="Cancellare ordine"> 
            <AccordionContent>
                <Block>
                    <video src=""></video>
                </Block>
            </AccordionContent>
        </ListItem>
        <ListItem class="settori" accordionItem title="Inviare Feedback"> 
            <AccordionContent>
                <Block>
                    <video src=""></video>
                </Block>
            </AccordionContent>
        </ListItem>
    </List>
  
      
  </Page>
  
  <script>
      import {Page, Block, BlockTitle, Navbar, Link, Button, List, ListItem, AccordionContent, Row, Col} from 'framework7-svelte'
      import { user_email, last_feedback, title_bar } from '../js/snacks_store.js';
      // import Policy from '../components/policy.svelte'
      
      function open() {
          window.open("https://github.com/ittagnelli/snAcks")
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