<script>
    import Box from './box-component.svelte';
  </script>
  
  <div class="homebg w-full min-h-svh border-b-4 border-black" id="home">
    <br><br>
    <p class="lg:mt-20 md:mt-28 lg:text-4xl md:text-3xl text-center bb">Tools Dashboard</p>
    <div class="container">
      <div class="row">
        <Box title="Daily Emission Estimation" description="Predictive Pollutant Projection" link="#"/>
        <Box title="Pie Chart for fuel use" description="Pie reprecentation" link="#" />
      </div>
      <div class="row">
        <Box title="Graphical view of fuel use" description="time-series graph" link="#" />
        <Box title="Afforestation offset" description="Amount of equivalant trees to plant" link="#" />
      </div>
    </div>
  </div>
  
  <style>
    .homebg {
      background-color: #000000;
      background-image: 
        linear-gradient(45deg, #ffffff95 1px, transparent 1px), 
        linear-gradient(-45deg, #ffffff95 1px, transparent 1px);
      background-size: 20px 20px;
    }
  
    .bb{
      color: #E5D9F2;
      text-align: center;
    }
    p {
      text-align: center;
    }
  
    .container {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
    }
  
    .row {
      display: flex;
      width: 100%; /* Ensure rows take up full width */
      flex-wrap: wrap;
      justify-content: center; /* Space boxes within each row */
      
    }

  </style>