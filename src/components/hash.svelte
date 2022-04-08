<Block strong class="text-align-center">
    {#each icon_hash as icon}
        <i class="icon f7-icons color-blue">{icon}</i>
    {/each}
</Block>

<script>
    import { Block } from 'framework7-svelte';
    import MD5 from "crypto-js/md5";
    let symbols = [
        "drop", "exclamationmark",
        "face_smiling", "heart",
        "suit_diamond", "suit_spade",
        "suit_club", "placemark",
        "number_square", "house",
        "goforward_30", "arrowtriangle_left",
        "arrowtriangle_right", "arrowtriangle_up",
        "arrowtriangle_down", "alarm"
    ];

    let icon_hash = [];
    export let hash = "";
    let hash_res = MD5(hash).toString();
    
    console.log(hash_res);
    for(let i = 0; i < 8; i++) {
        icon_hash.push(symbols[parseInt(hash_res[i * 3], 16)]);
    }
</script>