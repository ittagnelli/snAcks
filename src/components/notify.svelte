<script>
    import { cloud_mex, last_mex_id } from '../js/snacks_store.js';
    import { f7 } from 'framework7-svelte'
 
    $: {
        if($cloud_mex.id > $last_mex_id) {
            console.log("NEW CLOUD MEX");
            console.log($cloud_mex);
            setTimeout(function(){ notify($cloud_mex); }, 100);
            $last_mex_id = $cloud_mex.id;
        }
    }

    function notify(mex) {
        f7.notification.create({
        icon: '<i class="f7-icons">speaker_3</i>',
        title: '<div style="color:#464fff;font-size:1.2rem;text-align:center;font-weight: bold;">' + mex.title + '</div>',
        subtitle: '',
        text: mex.mex,
        closeButton: true,
      }).open();
    }
</script>
