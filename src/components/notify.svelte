<Snackbar class="flex-column snack" bind:active={snackmex} center timeout={5000}>
    <img src="icons/message.png" width="50" alt="thumbsup" />
    <p class="mex title">{$cloud_mex.title}</p>
    <p class="mex">{$cloud_mex.mex}</p>
</Snackbar>

<script>
    import { Snackbar } from 'svelte-materialify';
    import { cloud_mex, last_mex_id } from '../js/snacks_store.js';
    let snackmex = false;
    
    $: {
        if($cloud_mex.id >  $last_mex_id) {
            console.log("NEW CLOUD MEX");
            console.log($cloud_mex);
            snackmex = true;
            setTimeout(function(){ snackmex = false; }, 3000);
            $last_mex_id = $cloud_mex.id;
        }
    }
</script>


<style>
    .snack {
      position: absolute;
      top: 250px;
    }
  
    .mex {
      color: #00f169;
      font-size: 1.1rem;
    }

    .title {
        font-size: 2.1rem;
    }
  
  </style>
