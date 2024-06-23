<template>
      <div id="projects" class="project">
        <article class="réalisations">
        <header class="h6">Mes réalisations</header>

        <!--projet numéro 1-->
        <p class="titre-1">Réalisation CV:html-CSS</p>
        <a href="http://127.0.0.1:5500/index.html" target="blank" ><img class="cap1" src="@/assets/MonCv.png" alt="CV html-css" /></a>

<!--projet numéro 2-->    
        <p class="titre-2">Espace de commentaire dynamiser</p>
        <a href="http://127.0.0.1:5501/index.html" target="blank"><img class="cap2" src="@/assets/espacede-Commentaires.png" alt=""/></a>

        <!--projet numéro 3-->
        <p class="titre-3">Cahier des charges</p>
        <a href="src/assets/Cahier.pdf" target="blank"><img class="cap3" src="@/assets/Cahierdeschargeslasocketterie.pdf.png" alt=""/></a>
      </article>
      </div>
</template>

<style>
@media (min-width: 1024px) {
 .project {
  text-align: center;
  width: 320px;
  margin: -20px;
  margin-top: 110px;
  }
  .cap1:hover{
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  }
  .cap2:hover{
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  }
  .cap3:hover{
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  }
 /* .réalisations {
    display: inline-flex;
  }*/
  .cap1{

    width: 360px;
    height: 500px;
    margin-left: -678px;
    margin-top: -19px;
    display: flex;
    
  }
  .cap2{
    width: 360px;
    height: 500px;
    margin-left: -280px;
    margin-bottom: 56px;
    margin-top: -525px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .cap3{

    text-align: center;
    position: relative;
    bottom: 600px;
    left: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .titre-1 {
    margin-left: -670px;
    margin-bottom: 40px;
    background-color: black;
    margin-top: -20px;
    display: flex;
    justify-content: normal;
  }
  .titre-2 {
    display: flex;
    position: relative;
    bottom: 545px;
    right: 275px;
  }
  .titre-3 {
    position: relative;
    bottom: 600px;
    left: 25px;
    display: flex;
    justify-content: center;
  }
  .h6 {
    position: relative;
    bottom: 35px;
    color: white;
    right: 675px;
    background-color: black;
    display: flex;
    justify-content: flex-start;
  }
}
</style>
