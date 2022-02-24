<Page noToolbar noNavbar noSwipeback loginScreen>
  <LoginScreenTitle>snAcks</LoginScreenTitle>
  <List form>
    <ListInput
      label="Email"
      type="text"
      placeholder="Your email"
      value={email}
      onInput={(e) => email = e.target.value}
    />
    <ListInput
      label="Password"
      type="password"
      placeholder="Your password"
      value={password}
      onInput={(e) => password = e.target.value}
    />
  </List>
  <List>
    <ListButton onClick={signIn}>Sign In</ListButton>
  </List>
  <BlockFooter>Some text about login information.<br />Lorem ipsum dolor sit amet, consectetur adipiscing elit.</BlockFooter>
</Page>

<script>
  import {f7, Page, LoginScreenTitle, List, ListInput, ListButton, BlockFooter} from 'framework7-svelte';
  import { user_auth } from '../components/user_store.svelte';

  // import { user_login, user_logout } from '../components/Firebase.svelte';
  // import { user_auth } from '../components/user_store.svelte';
  // import { onMount } from 'svelte';

  // export let f7router;

  let email = '';
  let password = '';

  // onMount(async () => {
  //   await user_logout();
  // });

  async function signIn() {
    $user_auth = "true";
  }

  // async function signIn() {
  //   console.log(email);
  //   console.log(password);
  //   await user_login(email, password);
  //   console.log($user_auth);
  //   if ($user_auth == true) {
  //     console.log("USER CORRECTLY LOGIN");
  //     f7router.navigate({ name: 'home' });
  //   }
  //   else {
  //     console.log("USER CANNOT BE PROPERLY LOGIN");
  //   }

    //f7.dialog.alert(`Username: ${username}<br>Password: ${password}`, () => {
    //  f7router.back();
    //});
  // }
</script>
