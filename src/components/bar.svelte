<Navbar title={$title_bar}> 
    <NavRight>
      <Link iconAurora="f7:info_circle" iconIos="f7:info_circle" iconMd="f7:info_circle" href="/manuale/"/>
    </NavRight>
</Navbar>

<script>
    import {Navbar,NavRight,Link} from 'framework7-svelte'
    import { user_email, user_authenticated, title_bar } from '../js/snacks_store.js';
</script>