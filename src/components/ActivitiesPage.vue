<template>
  <div class="content">
    <div class="container text">

      <h2>{{ $t('excursions.title') }}</h2>

      <h3>{{ $t('excursions.slavonice.title') }}</h3>
      <div class="figure right">
        <img :src="require('@/assets/activities/slavonice-1.jpg')" alt="Slavonice" width="220" height="146">
      </div>
      <p>{{ $t('excursions.slavonice.description1') }}</p>
      <p>{{ $t('excursions.slavonice.description2') }}</p>
      <p>{{ $t('excursions.slavonice.description3') }}</p>
      <div class="figure right">
        <img :src="require('@/assets/activities/slavonice-2.jpg')" alt="Slavonice" width="220" height="146">
      </div>
      <p>{{ $t('excursions.slavonice.description4') }}</p>
      <p>{{ $t('excursions.slavonice.description5') }}</p>
      <p>{{ $t('excursions.slavonice.description6') }}</p>
      <p>{{ $t('excursions.slavonice.description7') }}</p>
      <ul>
        <li><a href="http://slavonice-cyklo.cz/www/index.php">http://slavonice-cyklo.cz/www/index.php</a></li>
        <li><a href="http://www.i.slavonice-mesto.cz/pro-cyklisty/ds-4340/p1=26932">http://www.i.slavonice-mesto.cz/pro-cyklisty/ds-4340/p1=26932</a></li>
        <li><a href="http://www.grasel.eu/">http://www.grasel.eu/</a></li>
      </ul>

      <h3>{{ $t('excursions.dacice.title') }}</h3>
      <p>{{ $t('excursions.dacice.description1') }}</p>
      <p>{{ $t('excursions.dacice.description2') }}</p>
      <ul>
        <li><a href="http://www.zamek-dacice.eu/">http://www.zamek-dacice.eu/</a></li>
      </ul>
      <p>{{ $t('excursions.dacice.description3') }}</p>
      <p>{{ $t('excursions.dacice.description4') }}</p>
      <ul>
        <li><a href="http://www.dacice.cz/turistika-1/co-u-nas-navstivit/">http://www.dacice.cz/turistika-1/co-u-nas-navstivit/</a></li>
      </ul>

      <h3>{{ $t('excursions.telc.title') }}</h3>
      <div class="figure right">
        <img :src="require('@/assets/activities/telc.jpg')" alt="Telč" width="220" height="160" />
      </div>
      <p>{{ $t('excursions.telc.description') }}</p>
      <p>{{ $t('excursions.telc.distance') }}</p>
      <ul>
        <li><a href="http://www.zamek-telc.eu/">http://www.zamek-telc.eu/</a></li>
      </ul>

      <h3>{{ $t('excursions.landstejn.title') }}</h3>
      <div class="figure right">
        <img :src="require('@/assets/activities/landstejn.jpg')" alt="Landštejn Castle" width="220" height="160" />
      </div>
      <p>{{ $t('excursions.landstejn.description1') }}</p>
      <p>{{ $t('excursions.landstejn.description2') }}</p>
      <ul>
        <li><a href="http://www.hrad-landstejn.eu/">http://www.hrad-landstejn.eu/</a></li>
      </ul>

      <h3>{{ $t('excursions.golf.title') }}</h3>
      <p>{{ $t('excursions.golf.description') }}</p>
      <ul>
        <li><a href="http://www.golfmonachus.cz/index-cs/hriste">http://www.golfmonachus.cz/index-cs/hriste</a></li>
      </ul>

    </div>
  </div>
</template>

<script>
    export default {
      name: 'AccommodationPage',
    }
</script>
