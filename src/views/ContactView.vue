<template>
<main class="contenu">
  <article>
    <div id="contact" class="contact">
        <div data-role="page-header">
      <h3 class="hd">Formulaire de contact</h3>
      </div>
      <div data-role="page-body">
<form id="contact_form" action="#" method="POST" enctype="multipart/form-data">
  <div class="row">
    <label class="required" for="name">Nom Prenom:</label><br />
    <input id="name" class="input" name="name" type="text" value="" size="25" /><br />
    <span id="name_validation" class="error_message"></span>
  </div>
  <div class="row">
    <label class="required" for="email">Email:</label><br />
    <input id="email" class="input" name="email" type="text" value="" size="25" /><br />
    <span id="email_validation" class="error_message"></span>
  </div>
  <div class="row">
    <label class="required" for="objet">Objet:</label><br />
    <input id="objet" class="input" name="email" type="text" value="" size="20" /><br />
    <span id="objet_validation" class="error_objet"></span>
  </div>
  <div class="row">
    <label class="required" for="message">Message:</label><br />
    <textarea id="message" class="input" name="message" rows="7" cols="30"></textarea><br />
    <span id="message_validation" class="error_message"></span>
  </div>
    <div data-role="page-footer">
    <input id="submit_button" type="submit" value="Send email" />
  </div>
</form>
</div>
  </div>
  </article>
</main>
</template>

<style>
@media (min-width: 1024px) {
  .contact {
    display: inline-flex;
    position: relative;
    top: 125px;
    color: black;
  }
}
</style>
