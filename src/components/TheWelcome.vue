<script setup>
//import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      
      <DocumentationIcon />
    </template>
    <template #heading>
      <main class="contenu">
        <div class="about">
        <h2>A Propos</h2>
        <p>
              Je suis étudiante en 3e année de licence d'histoire,
              suivant une autre formation de Developpement Web/eb 
              Mobile. Au cours de Ma formation j'ai réalisé plusieurs 
              project: création de site Web. Je vous invite à les découvrir 
               au travers de ce portfolio.
            </p>
      </div>
      
      </main>

    </template>

    
    <a href="https://vuejs.org/" target="_blank" rel="noopener"></a>
    
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading></template>

    
    <a href="https://vitejs.dev/guide/features.html" target="_blank" rel="noopener"></a>
    <a href="https://code.visualstudio.com/" target="_blank" rel="noopener"></a> 
    <a href="https://github.com/johnsoncodehk/volar" target="_blank" rel="noopener"></a>
    <a href="https://www.cypress.io/" target="_blank" rel="noopener"></a> 
    <a href="https://on.cypress.io/component" target="_blank" rel="noopener"
      ></a
    >

    <br />

    <code>
    </code>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading></template>

    
    <a href="https://pinia.vuejs.org/" target="_blank" rel="noopener"></a>
    <a href="https://router.vuejs.org/" target="_blank" rel="noopener"></a>
    <a href="https://test-utils.vuejs.org/" target="_blank" rel="noopener"></a> 
    <a href="https://github.com/vuejs/devtools" target="_blank" rel="noopener"></a>
    
    <a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener"></a>
    
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading></template>

    
    <a href="https://chat.vuejs.org" target="_blank" rel="noopener"></a>
    <a href="https://stackoverflow.com/questions/tagged/vue.js" target="_blank" rel="noopener"
      ></a
    >
    <a href="https://news.vuejs.org" target="_blank" rel="noopener"></a> 
    
    <a href="https://twitter.com/vuejs" target="_blank" rel="noopener"></a>
    
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading></template>

    
    <a href="https://vuejs.org/sponsor/" target="_blank" rel="noopener"></a>
  </WelcomeItem>
</template>
