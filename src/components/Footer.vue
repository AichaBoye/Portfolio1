<template>
  <footer>
      <!--contenu du footer ici-->
      <div class="reseaux">
        <a href="https://github.com/AichaBoye/Marie.html" target="_blank" class="fa fa-github"><img class="reseaux" src="@/assets/github.png" alt=""/></a>
        <a href="https://www.facebook.com/" target="_blank" class="fa fa-facebook" ><img class="reseaux" src="@/assets/facebook.png" alt=""/></a>
        <a href="https://www.instagram.com/aichaeboye/" target="_blank" class="fa fa-instagram"><img class="reseaux" src="@/assets/instagram.png" alt=""/></a>
  
        <br />
        <div>
          <p class="datetime">Dernière mise à jour : le 21 juin 2024</p>
        </div>
      </div>
    </footer>
</template>

<!--le style du footer ici-->
<style>
footer {
  background-image: url(/src/assets/th.jpeg);
  width: 1200px;
  height: 370px;
  display: flex;
  justify-content: space-between;
  margin-top: 102px;
  margin-left: 2px;
}
.reseaux{
  width: 60px;
  background: none;
  height: 58px;
  margin: 8px;
  border-radius: 50%;
  display: inline-block;
}
.datetime{
  color: white;
  width: 250px;
  top: 0px;
  left: 440px;
  position: relative;
}
</style>
