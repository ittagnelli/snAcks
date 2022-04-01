<Page name="about">
    <Navbar title="Informazioni" />
    <Block>
<div align="center">
    <h4>&nbsp;</h4>
<img src="/icons/144x144.png"/>

<h4>&nbsp;</h4>
<p>snAcks è un applicazione sviluppata da Antonio Mancuso e Andrea Canale per ATS</p>
<h4>&nbsp;</h4>
<img src="/ats.png" width="128"/>
<h4>&nbsp;</h4>
<p>Il codice sorgente è disponibile al seguente <a href="#" on:click={open}>link</a></p>
</div>
<h4>&nbsp;</h4>
<List accordionList>
    <ListItem accordionItem title="Privacy Policy">
      <AccordionContent>
        <Block>
          <Policy></Policy>
        </Block>
      </AccordionContent>
    </ListItem>
</List>
</Block>
</Page>

<script>
    import {Page, Block,Navbar,Link,Button,List,ListItem,AccordionContent} from 'framework7-svelte'
    import Policy from '../components/policy.svelte'
    function open() {
        window.open("https://github.com/ittagnelli/snAcks")
    }
</script>