<Page name="catalog">
  <Navbar title="Catalog" />
  <h1>Qui ci sarà lo storico</h1>
</Page>
<script>
  import { Page, Navbar, List, ListItem, Block, Button, useStore } from 'framework7-svelte';
  import store from '../js/store';

  let products = useStore('products', (value) => (products = value));

  const addProduct = () => {
    store.dispatch('addProduct', {
      id: '4',
      title: 'Apple iPhone 12',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis.'
    });
  }

</script>
