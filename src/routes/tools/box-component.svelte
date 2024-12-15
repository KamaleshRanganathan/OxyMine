<script>
    export let title;
    export let description;
    export let link;
  </script>
  
  <div class="box">
    <h3><b>{title}</b></h3>
    <p>{description}</p>
    <br>
    <a href="{link}" aria-label="link">Click here</a>
  </div>
  
  <style>
    .box {
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 50px;
        flex: 0 0 300px;
        margin: 15px 60px;
        color: black;
        text-align: center;
        background-color: rgb(255, 226, 226);
        opacity: 0.9;
    }

    a{
      background-color: blueviolet;
      border-radius: 30px;
    }
  </style>