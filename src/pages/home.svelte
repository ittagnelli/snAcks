<!-- <Page name="home">
  <Navbar large sliding={false}>
    <NavLeft>
      <Link iconIos="f7:menu" iconAurora="f7:menu" iconMd="material:menu" panelOpen="left" />
    </NavLeft>
    <NavTitle sliding>snAcks</NavTitle>
    <NavRight>
      <Link iconIos="f7:menu" iconAurora="f7:menu" iconMd="material:menu" panelOpen="right" />
    </NavRight>
    <NavTitleLarge>snAcks</NavTitleLarge>
  </Navbar>

  <Block strong>
    <p>This is an example of tabs-layout application. The main point of such tabbed layout is that each tab contains independent view with its own routing and navigation.</p>

    <p>Each tab/view may have different layout, different navbar type (dynamic, fixed or static) or without navbar like this tab.</p>
  </Block>

  <BlockTitle>Navigation</BlockTitle>
  <List>
    <ListItem link="/about/" title="About"/>
    <ListItem link="/form/" title="Form"/>
  </List>

  <BlockTitle>Modals</BlockTitle>
  <Block strong>
    <Row>
      <Col width="50">
        <Button fill raised popupOpen="#my-popup">Popup</Button>
      </Col>
      <Col width="50">
        <Button fill raised loginScreenOpen="#my-login-screen">Login Screen</Button>
      </Col>
    </Row>
  </Block>

  <BlockTitle>Panels</BlockTitle>
  <Block strong>
    <Row>
      <Col width="50">
        <Button fill raised panelOpen="left">Left Panel</Button>
      </Col>
      <Col width="50">
        <Button fill raised panelOpen="right">Right Panel</Button>
      </Col>
    </Row>
  </Block>

  <List>
    <ListItem
      title="Dynamic (Component) Route"
      link="/dynamic-route/blog/45/post/125/?foo=bar#about"
    />
    <ListItem
      title="Default Route (404)"
      link="/load-something-that-doesnt-exist/"
    />
    <ListItem
      title="Request Data & Load"
      link="/request-and-load/user/123456/"
    />
  </List>
</Page>
<script>
  import {
    Page,
    Navbar,
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
</script> -->


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
