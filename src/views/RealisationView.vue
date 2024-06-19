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
        <a href="src/assets/Cahierdeschargeslasocketterie.pdf" target="blank"><img class="cap3" src="@/assets/Cahier.pdf" alt=""/></a>
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
    margin-left: -810px;
    
  }
  .cap2{
    width: 360px;
    height: 500px;
    margin-left: -400px;
    margin-bottom: 50px;
    margin-top: -550px;
  }
  .cap3{

    width: 360px;
    height: 500px;
    margin-left: 10px;
    margin-bottom: 165px;
    margin-top: -580px;
    position: relative;
  }
  
  .titre-1 {
    display: flex;
    margin-left: -710px;
    margin-bottom: 40px;
    background-color: black;
  }
  .titre-2 {
    display: flex;
    position: relative;
    bottom: 570px;
    right: 340px;
  }
  .titre-3 {
    display: flex;
    text-align: center;
    position: relative;
    bottom: 617px;
    left: 125px;
  }
  .h6 {
    position: relative;
    bottom: 35px;
    color: white;
    margin: 0px;
    display: flex;
    text-align: justify;
    right: 815px;
    background-color: black;
  }
}
</style>
