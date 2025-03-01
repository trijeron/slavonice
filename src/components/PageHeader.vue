<script>
export default {
  name: 'PageHeader',
  data() {
    return {
      locale: this.$i18n.locale,
    }
  },
  methods: {
    setLocale(locale) {
      console.log('setLocale', locale);
      this.$i18n.locale = locale;
      this.locale = locale;
    }
  }
}

</script>

<template>

  <div>
    <div>
      <div class="header">
        <div class="container">
          <p class="header-langs">
            <a href="#" @click.prevent="setLocale('en')">
              <img :src="require('@/assets/flags/en.png')" width="25" height="15" alt="en" title="en" />
            </a>
            <a href="#" @click.prevent="setLocale('cz')">
              <img :src="require('@/assets/flags/cs.png')" width="25" height="15" alt="cs" title="cs" />
            </a>
          </p>
          <h1>
            <router-link to="/">
              <img class="header-logo" :src="require('@/assets/logo.png')" alt="Chaosbridge logo" width="96" height="96">
              <div class="header-title">{{ $t('header.title') }}</div>
              <div class="header-subtitle">{{ $t('header.subtitle') }}</div>
            </router-link>
          </h1>
          <ul class="header-menu">
            <li class="header-menu-item" :class="{ active: $route.path === '/' }">
              <router-link to="/">{{ $t('menu.tournament') }}</router-link>
            </li>
            <li class="header-menu-item" :class="{ active: $route.path === '/accommodation' }">
              <router-link to="/accommodation">{{ $t('menu.accommodation') }}</router-link>
            </li>
            <li class="header-menu-item" :class="{ active: $route.path === '/activities' }">
              <router-link to="/activities">{{ $t('menu.trips') }}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
