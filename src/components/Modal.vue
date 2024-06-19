<template>
  <button onclick="document.getElementById('myModal').style.display='block'" class="mamodal">
    Ouvrir Modal
  </button>
  <div id="myModal" class="modal">
    <div class="modal-content">
      <span
        class="close"
        onclick="document.getElementById('myModal').style.display='none'"
        >&times;</span>
        <h2 style="color: black">Données de la création</h2>
        <p style="color: black">Date de création : 18/06/2024</p>
        <div class="technology" style="color: black">
          <div class="row">
            <img src=@/assets/html5.png alt="HTML5" class="logo1"/>
          
          <img src="@/assets/css3.png" alt="CSS3" class="logo1"/>

          <img src="@/assets/figma.jpeg" alt="figma" class="logo1"/>
          </div>
          
          <div class="row2">
            <img src="@/assets/javascript.png" alt="JavaScript" class="logo2"/>

          <img src="@/assets/github.png" alt="github" class="logo2"/>
          

          <img src="@/assets/vuejs.jpeg" alt="Vue.js" class="logo2"/>
          </div>
          
        </div>
        <a href="http://127.0.0.1:5500/index.html" target="_blank" class="site1"><u>Projet 1 : CV en ligne</u></a>
        <a href="http://127.0.0.1:5501/index.html" target="_blank" class="site2"><u>Projet 2 : Dynamisé un espace de commentaire</u></a>
        <a href="src/assets/Cahier.pdf" target="_blank" class="site3"><u>Projet 3 : Réalisation d'un cahier des charges</u></a>
        <a href="https://github.com/AichaBoye/Portfolio1" target="_blank" class="git"><u>Repository GitHub</u></a>
      </div>
  </div>
</template>

<style>
    .logo1 {
        display: inline-block;
        margin: 20px;
        top: 30px;
  left: -110px;
      }


      .row2{
        display: grid;
        max-width: 40px;
      }
.site2{
    margin: 40px;
}


.git{
    margin: 55px;
}
.close:hover{
    cursor: pointer;

}
.mamodal{
    width: 120px;
  height: 50px;
  position: fixed;
  margin-left: -125px;
}
.modal { display: none;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.5);
}

.modal-content{
    margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 83%;
  background-color: white;
    }
    

    .technology {
        display: flex;
  align-items: center;
  margin: 105px;
  transition: transform 0.3s;
  left: 50px;
  position: relative;
    }

    .technology img {
        width: 120px;
        height: 120px;
    }

    .technology p {
     font-size: 20px;
     margin-top: 10px;
    }

    .technology:hover {
     transform: scale(1.1);
    }

    .close {
        color: #aaa;
        float: right;
        font-size: 28px;
        font-weight: bold;
    }
</style>

<script>
var modal = document.getElementById("myModal");

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
/*fermeture de la modal ici*/

/*if (croixModal.clicked) { modal.close(); }*/

document.addEventListener('click', function(event) { if (!modal.contains(event.target)) { modal.close(); } });
</script>
