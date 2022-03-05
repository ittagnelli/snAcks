<Page name="home">
  <Navbar title="snAcks" />
  <Card>
    <span slot="header">      
      <p class="cardtitle">Salati</p>
      <img class="imgcard" src="focaccina.png" width="200px" alt="salato"/>
    </span>
        <Block strong class="text-align-center">
          <Row>
            <Col>
             <Stepper fill value={0} min={0} max={2} step={1} autorepeat={false} wraps={false} decimalPoint={2}></Stepper> 
            </Col>
          </Row>
        </Block>
  </Card>
  <Card>
    <span slot="header">      
      <p class="cardtitle">Dolci</p>
      <img class="imgcard" src="crossaint.png" width="200px" alt="dolce"/>
    </span>
        <Block strong class="text-align-center">
          <Row>
            <Col>
           <Stepper fill value={0} min={0} max={2} step={1} autorepeat={false} wraps={false} decimalPoint={2}></Stepper> 
            </Col>
          </Row>
        </Block>
  </Card>
  <div class="nomargine" align="center">
  <List>
    <ListItem checkbox title={tomorrow} name="tomorrow" id="tomorrow"></ListItem>
    <ListItem checkbox title={totomorrow} name="totomorrow" id="totomorrow"></ListItem>
    <ListItem checkbox title={date} name="date" id="date"></ListItem>
  </List>
  </div>
  <Block strong>
    <Row tag="p">
      <Col tag="span">
        
      </Col>
      <Col tag="span">
        <Button raised fill onClick={ordina}>Ordina</Button>
      </Col>
      <Col tag="span">
        
      </Col>
    </Row>
  </Block>
</Page>

<script>
  import {
    Page,
    Stepper,
    Navbar,
    Card,
    NavLeft,
    NavTitle,
    NavTitleLarge,
    NavRight,
    Link,
    Toolbar,
    Block,
    BlockTitle,
    List,
    ListItem,
    Row,
    Col,
    Button
  } from 'framework7-svelte';

  import { user_email, user_authenticated } from '../js/snacks_store.js';
  import { getAuth, GoogleAuthProvider,signOut, signInWithRedirect, getRedirectResult } from "firebase/auth";

  export let f7router; // this is just to avoid a warning
  export let f7route;

  let provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    hd: 'istitutoagnelli.it'
  });    
  let auth = getAuth();
  
  var today = new Date();

  async function ordina() {
    console.log("LOGOUT");
    // console.log(auth);
    // await signOut(auth);
    // $user_authenticated = "false";  
    // f7router.navigate('/');
  }

  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+(today.getDate()+3);
  var tomorrow = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+(today.getDate()+1);
  var totomorrow = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+(today.getDate()+2);
</script>
