<template>
  <div class="footer">
    <div class="container_footer">
      <div class="footer-left">
        <div class="last_year">
          <p><a href="https://www.matrikacbs.cz/Detail-turnaje.aspx?id=5171">{{ $t('footer.last_results') }}</a></p>
        </div>
        <div class="email">
          <a href="mailto:slavonicebridge@seznam.cz"><b>slavonicebridge@seznam.cz</b></a>
        </div>
        <div class="copiright">
          <h3>&copy; 2025 Chaosbridge</h3>
        </div>
      </div>
      <div class="footer-right">
        <div class="contact_phone">
          <div>Jan Lusk - 776 808 557</div>
          <div>Jan Hlaváč - 777 804 046</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageFooter'
}
</script>

<style scoped>


.container_footer {
  display: flex;
  justify-content: space-between;

}

.footer-left {
  display: flex;
  flex-direction: column;
}

.footer-right {
  display: flex;
  flex-direction: column;
}

.last_year, .email, .copiright {
  margin-bottom: 10px;
}

.contact_phone {
  text-align: right;
}
</style>
