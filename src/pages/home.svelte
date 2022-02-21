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
  // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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