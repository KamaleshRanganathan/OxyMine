<script>
    import "/src/app.css";
    import Header from './Nav.svelte';
</script>
<header class="fixed top-3 left-0 w-full">
    <Header/>   
</header>

<main>
    <slot/>
</main>
  