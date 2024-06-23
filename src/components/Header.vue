
<template>
    <header>

        <!--photo de profil ici-->
        <a href="http://localhost:5174/"
          ><img
            alt="Vue logo"
            class="logo"
            src="@/assets/imageCV.jpg"
            width="125"
            height="125"
        /></a>
    
        <!--bref présentation ici-->
        <div class="greetings">
          <p>Salut je suis</p>
          <h1 class="green">Marie Aissatou Boye</h1>
          <h3 class="moi">
          <br>
            Developpeuse Web Junior
          </h3>
        </div>
        <div class="wrapper">
    
          <!--bar de navigation ici-->
          <nav>
            <ul>
              
              <li><a href="#home" class="active">Home</a></li>
              <li><a href="#about" class="active">A propos</a></li>
              <li><a href="#projects" class="active">Réalisation</a></li>
              <li><a href="#contact" class="active">Contact</a></li>
            
            </ul>

            <!-- <router-link to="/">Home</router-link> 
            <router-link to="/about">A propos</router-link> 
            <router-link to="/project">Réalisations</router-link> 
            <router-link to="/contact">Contact</router-link>  -->
          </nav>
        </div>
      </header>
</template>

<!--le style du header ici-->
<style>

.logo {
  border-radius: 130px;
  width: 185px;
  height: 190px;
  margin-top: -143px;
  position: relative;
  top: -25px;
  left: -25px;
}

header {
  line-height: 4.5;
  max-height: 100vh;
}
header {
  line-height: 4.5;
}
nav {
  text-align: left;
  margin-left: -1rem;
  font-size: 1rem;
  margin-top: -150px;
  margin-right: -220px;
}
nav a.router-link-exact-active {
  color: var(--color-text);
}
nav a.router-link-exact-active:hover {
  background-color: transparent;
}
nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
.greetings{
  margin-top: -80px;
  margin-left: 10px;
}



nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

nav ul li {
  display: inline-block;
  margin-right: 20px;
}

nav a {
  text-decoration: none;
  color: lightslategray;
}

nav a.active {
  text-decoration: underline; /* Souligner l'élément actif */
}

nav a:hover {
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2); /* Ajouter une ombre au survol */
}

</style>