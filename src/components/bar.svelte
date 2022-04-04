<<<<<<< HEAD
<Navbar title={title}> 
=======
<Navbar title={$title_bar}> 
>>>>>>> 89a9fa3326f0b228ebd115766c6e76c837232704
    <NavRight>
      <Link iconAurora="f7:info_circle" iconIos="f7:info_circle" iconMd="f7:info_circle" href="/manuale/"/>
    </NavRight>
</Navbar>

<script>
    import {Navbar,NavRight,Link} from 'framework7-svelte'
    import { user_email, user_authenticated, title_bar } from '../js/snacks_store.js';
<<<<<<< HEAD
    export let title
=======
>>>>>>> 89a9fa3326f0b228ebd115766c6e76c837232704
</script>