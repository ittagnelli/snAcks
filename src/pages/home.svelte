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
</script>
