<svelte:head>

</svelte:head>
<Page name="home">
  <Navbar title="snAcks" />
  <Card>
    <span slot="header">      
      <p class="cardtitle">Salati</p>
      <img class="imgcard" src="focaccina.png" width="200px" alt="fuck ios"/>
    </span>
    <span slot="content">Descrizione</span>
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
      <img class="imgcard" src="crossaint.png" alt="fuck ios"/>
    </span>
    <span slot="content">Descrizione</span>
        <Block strong class="text-align-center">
          <Row>
            <Col>
              <Stepper fill value={0} min={0} max={2} step={1} autorepeat={false} wraps={false} decimalPoint={2}></Stepper>
            </Col>
          </Row>
        </Block>
  </Card>
  <div align="center">
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
        <Button raised fill>Ordina</Button>
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
  
var today = new Date();

var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+(today.getDate()+3);
var tomorrow = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+(today.getDate()+1);
var totomorrow = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+(today.getDate()+2);
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
console.log(document.getElementsByName("tomorrow").checked) //non funzionante
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaV0qTUzXQJzlD21vkTz88MUL1XxNt9qE",
  authDomain: "prova-governativa.firebaseapp.com",
  projectId: "prova-governativa",
  storageBucket: "prova-governativa.appspot.com",
  messagingSenderId: "1087579451700",
  appId: "1:1087579451700:web:f6745321ca2eb1cceb3561"
};
// Initialize Firebase
const firestore_app = initializeApp(firebaseConfig);
</script>