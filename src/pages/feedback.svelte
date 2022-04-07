<Page name="feedback" onPageTabShow={enable_send}>
  <Nav title={$title_bar}></Nav>
    <BlockTitle>Fai sentire la tua voce!!</BlockTitle>
    <Block>
      <p>
        Usa questa pagina per segnalare problemi, idee, migliorie e per aiutarci a migliorare l'app snAcks!
      </p>
    </Block>
    <BlockTitle>Titolo</BlockTitle>
    <Block>
        <Input name="feedback_title" type="textarea" disabled={!can_send} outline={true} maxlength=30 clearButton={true} placeholder="Inserisci qui il titolo del tuo messaggio" bind:value={issue_title} />
    </Block>
    <BlockTitle>Descrizione</BlockTitle>
    <Block>
        <Input name="feedback_description" type="textarea" disabled={!can_send} resizable={true} outline={true} style="height:150px;" maxlength=300 size=300 clearButton={true} placeholder="Inserisci qui il tuo messaggio" bind:value={issue_message}/>
    </Block>
    {#if can_send == true}
      <Row tag="p">
        <Col tag="span"></Col>
        <Col tag="span">
          <Button raised fill onClick={send_issue} color="green" large>Invia</Button>
        </Col>
        <Col tag="span"></Col>
      </Row>
    {/if}

    <Snackbar class="flex-column snack" bind:active={snackbar_ok} center timeout={3000}>
      <img src="icons/thumbs_up.png" width="50" alt="thumbsup" />
      <p class="ok">Messaggio inviao correttamente.</p>
      <p class="ok">Grazie del tuo contributo!!</p>
    </Snackbar>

    <Snackbar class="flex-column snack" bind:active={snackbar_error} center timeout={3000}>
      <img src="icons/thumbs_down.png" width="50" alt="thumbsdown" />
      <p class="error">Impossibile inviare il tuo messaggio.</p>
      <p class="error">E' necessario compilare tutti i campi</p>
    </Snackbar>

    <Snackbar class="flex-column snack" bind:active={snackbar_wait} center timeout={5000}>
      <img src="icons/wait.png" width="50" alt="wait" />
      <p class="error">Impossibile inviare al momento.</p>
      <p class="error">Riprova tra 1 minuto!</p>
    </Snackbar>

</Page> 

  <script>
    import { onMount } from 'svelte';
    import { f7, Page, Navbar, Block, BlockTitle, Input, Button, Row, Col } from 'framework7-svelte';
    import { user_email, last_feedback, title_bar } from '../js/snacks_store.js';
    import { Snackbar} from 'svelte-materialify';
    import Nav from '../components/bar.svelte'
    
    let issue_title = '';
    let issue_message = '';
    let snackbar_ok = false;
    let snackbar_error = false;
    let snackbar_wait = false;
    let can_send = false;

    onMount(async () => {
    });

    function enable_send() {
      let now = new Date().getTime();

      console.log(now);
      console.log($last_feedback);
      console.log(now - $last_feedback);

      if ($last_feedback == 0 ||
          now - $last_feedback > 60000)
        can_send = true;
      else {
        can_send = false;
        snackbar_wait = true;
      }

      console.log(`can_send: ${can_send}`);
    }

    function validate_issue() {
      if (issue_title.length == 0 ||
          issue_message.length == 0) {
            snackbar_error = true;
            return false;
          }
      return true;
    }

    function send_issue() {
      if (validate_issue()) {
        let body = `
        <b>Messaggio inviato da: #email </b><br>
        <p>
          #message
        </p>
        `
        .replace("#email", $user_email)
        .replace("#message", issue_message);

        Email.send({
          SecureToken: '0dbd587a-5b00-4cca-b1ef-8d25e73fda99',
          To: 'snacks@fire.fundersclub.com',
          From:  "ats@istitutoagnelli.it",
          Subject: "USER:" + issue_title,
          Body: body,
          }).then(message => {
              snackbar_ok = true;
              issue_title = "";
              issue_message = "";
              can_send = false;
              $last_feedback = new Date().getTime();
              });
      }
    }
  </script>


<style>
  .snack {
    position: absolute;
    top: 250px;
  }

  .error {
    font-size: 1.1rem;
    color: red;
  }

  .ok {
    font-size: 1.1rem;
    color: #00f169;
  }
</style>