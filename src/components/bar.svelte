<Navbar> 
  <NavLeft>
    <Link iconAurora="f7:info_circle" iconIos="f7:info_circle" iconMd="f7:info_circle" href="/about/"/>
    
  </NavLeft>
  <NavTitle>
    {title}
  </NavTitle>
  <NavRight>
      <Link iconAurora="f7:book" iconIos="f7:book" iconMd="f7:book" href="/manuale/"/>
    </NavRight>
</Navbar>

<script>
    import { Navbar, NavTitle, NavRight, NavLeft, Link  } from 'framework7-svelte'
    import { title_bar } from '../js/snacks_store.js';
    export let title
   
</script>