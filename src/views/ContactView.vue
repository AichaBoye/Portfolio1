<template>
      <div id="contact" class="contact">
        <div data-role="page-header">
          <h3 class="hd">Formulaire de contact</h3>
        </div>
        <div data-role="page-body">
          <form id="contact_form" action="mailto:EMAIL@marieaissatouboye@gmail.com" method="POST" enctype="multipart/form-data">
            <div class="row">
              <label class="required" for="name">Nom Prenom:</label><br />
              <input
                id="name"
                class="input"
                name="name"
                type="text"
                value=""
                size="25" /><br />
              <span id="name_validation" class="error_message"></span>
            </div>
            <div class="row">
              <label class="required" for="email">Email:</label><br />
              <input
                id="email"
                class="input"
                name="email"
                type="text"
                value=""
                size="25" /><br />
              <span id="email_validation" class="error_message"></span>
            </div>
            <div class="row">
              <label class="required" for="objet">Objet:</label><br />
              <input
                id="objet"
                class="input"
                name="email"
                type="text"
                value=""
                size="20" /><br />
              <span id="objet_validation" class="error_objet"></span>
            </div>
            <div class="row">
              <label class="required" for="message">Message:</label><br />
              <textarea
                id="message"
                class="input"
                name="message"
                rows="7"
                cols="30"></textarea
              ><br />
              <span id="message_validation" class="error_message"></span>
            </div>
            <div data-role="page-footer">
              <input id="submit_button" type="submit" value="Send email" />
            </div>
          </form>
        </div>
      </div>
      <dir>
        <img src="@/assets/icon.jpeg" class="icon" id="icon">
      </dir>
</template>


<style>
@media (min-width: 1024px){
.contact{
  background-color: black;
    margin-left: -695px;
    font-size: 30px;
    width: 1200px;
    display: flex;
    justify-content: center;
    margin-top: -410px;
}
.hd{

  top: -90px;
    position: relative;
    background-color: black;
}
.icon {
  width: 185px;
    height: 100px;
    display: flex;
    margin-left: -610px;
    margin-top: -105px;
}

@keyframes moveIcon {
  0%   { transform: translateX(0px); }
  50%  { transform: translateX(100px); }
  100% { transform: translateX(0px); }
}

}
</style>

<script>


</script>
