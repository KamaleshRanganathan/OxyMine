<div class="homebg w-full min-h-svh    border-b-4 border-black" id="home">
    <br><br>
    <p class="lg:mt-20 md:mt-28  lg:text-4xl  md:text-3xl text-center ">Trust Worthy Solution for better future</p>
    <p class="tit mt-5 lg:text-8xl md:text-7xl text-center "> Welcome to 
        {#each text.split('') as letter, index}
        <span style="color: {colors[index % colors.length]}">{letter}</span>
      {/each}
    </p>
    <p class="mt-20 lg:text-4xl md:text-3xl text-center ">Our purpose is to  Aid <b>Indian coal mines</b>  in their journey towards
        carbon neutrality and supporting the country's 
       overall climate goals</p>
    <p class="mt-20 lg:text-4xl md:text-3xl text-center ">Scroll Down to Access our Powerful Tools</p>
    <div class="down">
        <!-- <img class="downimg md:w-16 md:h-16  lg:w-24 lg:h-24" alt="down" src="https://raw.githubusercontent.com/KamaleshRanganathan/oxymine/9dca919034141f366fe8604c2a083e70c08d9feb/Chevronsdown.svg"> -->
    </div>

</div>

<script>
    let text = "OXY MINE";
    let colors = ['#C9E4CA', '#F7D2C4', '#C5CAE9', '#F5CBA7', '#C7B8EA'];
    import './+page.css';
</script>

<div class="tools">

</div>


<style>
    p{
        color: #E5D9F2;
    }
</style>