<template>

<div class="content">
  <div class="container text">
    <h2>{{ $t('accommodation.title') }}</h2>
    <p>{{ $t('accommodation.intro') }}</p>

    <h3>{{ $t('accommodation.hotels') }}</h3>

    <h3>Besídka***</h3>
  <div class="figure right">
    <table>
      <tbody><tr>
        <th>{{ $t('accommodation.besidka.prices.economy') }}</th><td>1690/1890&nbsp;Kč</td></tr>
      <tr><th> {{ $t('accommodation.besidka.prices.standard') }}</th><td>1790/1990&nbsp;Kč</td></tr>
      <tr><th> {{ $t('accommodation.besidka.prices.extra') }}</th><td>1990/2190&nbsp;Kč</td></tr>
      <tr><th> {{ $t('accommodation.besidka.prices.premium') }}</th><td>2800/3200&nbsp;Kč</td></tr>
      <tr><th>{{ $t('accommodation.besidka.prices.extra_bed') }}</th><td>590&nbsp;Kč</td></tr>
      </tbody></table>
    <p class="figure-note">{{ $t('accommodation.besidka.price_note') }}</p>
  </div>
  <p>{{ $t('accommodation.besidka.description') }}</p>
  <p><a href="http://www.besidka.cz">http://www.besidka.cz</a></p>


  <h3>{{ $t('accommodation.pivonka.name') }}</h3>
  <div class="figure right">
    <table>
      <tbody><tr><th>{{ $t('accommodation.pivonka.prices.single') }}</th><td>od&nbsp;770&nbsp;Kč</td></tr>
      <tr><th>{{ $t('accommodation.pivonka.prices.double') }}</th><td>od&nbsp;1200&nbsp;Kč</td></tr>
      <tr><th>{{ $t('accommodation.pivonka.prices.triple') }}</th><td>od&nbsp;1425&nbsp;Kč</td></tr>
      </tbody></table>
    <p class="figure-note">{{ $t('accommodation.pivonka.prices.price_note') }}</p>
  </div>
  <p>{{ $t('accommodation.pivonka.description') }}</p>
  <p><a href="http://www.hotelpivonka.cz">http://www.hotelpivonka.cz</a></p>


  <h3>Alfa*</h3>
  <div class="figure right">
    <table>
      <tbody>
      <tr><th>{{ $t('accommodation.alfa.prices.') }}</th><td>500&nbsp;Kč</td></tr>
      <tr><th>{{ $t('accommodation.alfa.prices.without_facilities') }}</th><td>350&nbsp;Kč</td></tr>
      </tbody>
    </table>
    <p class="figure-note">{{ $t('accommodation.alfa.price_note') }}</p>
  </div>
  <p>{{ $t('accommodation.alfa.description') }}</p>
  <p><a href="http://www.hotelalfa-slavonice.cz">http://www.hotelalfa-slavonice.cz</a></p>

  <h2>{{ $t('accommodation.private_accommodation') }}</h2>
  <p>{{ $t('accommodation.private_accommodation_description') }}</p>

  <h3>Apartmány pod věží</h3>
  <div class="figure right">
    <table>
      <tbody>
      <tr><th>{{ $t('accommodation.apartments_under_the_tower.prices.double') }}</th><td>1850&nbsp;Kč</td></tr>
      <tr><th>{{ $t('accommodation.apartments_under_the_tower.prices.extra') }}</th><td>{{ $t('accommodation.apartments_under_the_tower.prices.bed') }}</td></tr>
      </tbody>
    </table>
    <p class="figure-note">{{ $t('accommodation.apartments_under_the_tower.price_note')}}</p>
  </div>
  <p>{{ $t('accommodation.apartments_under_the_tower.description') }}</p>
  <p><a href="https://www.apartmanypodvezi.cz/">https://www.apartmanypodvezi.cz</a></p>

  <h3>{{ $t('accommodation.recreational_house_slavonice.name') }}</h3>
  <div class="figure right">
    <table>
      <tbody>
      <tr><th>{{ $t('accommodation.recreational_house_slavonice.prices.single') }}</th><td>670&nbsp;Kč</td></tr>
      <tr><th>{{ $t('accommodation.recreational_house_slavonice.prices.double') }}</th><td>900&nbsp;Kč</td></tr>
      </tbody>
    </table>
    <p class="figure-note">{{ $t('accommodation.recreational_house_slavonice.price_note') }}</p>
  </div>
  <p>{{ $t('accommodation.recreational_house_slavonice.description') }}</p>
  <p><a href="https://neradova.com/rekreacni-dum-slavonice/">https://neradova.com/rekreacni-dum-slavonice/</a></p>

  <h3>{{ $t('accommodation.pension_slavonice.name') }}</h3>
  <div class="figure right">
    <table>
      <tbody>
      <tr><th>{{ $t('accommodation.pension_slavonice.prices.single') }}</th><td>600 Kč</td></tr>
      <tr><th>{{ $t('accommodation.pension_slavonice.prices.double') }}</th><td>1000 Kč</td></tr>
      <!--  <tr><th>Třílůžkový apartmán</th><td>TBD&nbsp;Kč</td></tr>-->
      </tbody>
    </table>
    <p class="figure-note">{{ $t('accommodation.pension_slavonice.price_note') }}</p>
  </div>
  <p>{{ $t('accommodation.pension_slavonice.description') }}</p>
  <p><a href="http://www.penzionslavonice.cz/">http://www.penzionslavonice.cz</a></p>

  <h3>{{ $t('accommodation.house_at_giordanos.name') }}</h3>
  <div class="figure right">
    <table>
      <tbody>
      <tr><th>{{ $t('accommodation.house_at_giordanos.prices.double') }}</th><td>1500 Kč</td></tr>
      <tr><th>{{ $t('accommodation.house_at_giordanos.prices.triple') }}</th><td>2000 Kč</td></tr>
      <tr><th>{{ $t('accommodation.house_at_giordanos.prices.quadruple') }}</th><td>3000 Kč</td></tr>
      <!--  <tr><th>Třílůžkový apartmán</th><td>TBD&nbsp;Kč</td></tr>-->
      </tbody>
    </table>
    <p class="figure-note">{{ $t('accommodation.house_at_giordanos.price_note') }}</p>
  </div>
  <p>{{ $t('accommodation.house_at_giordanos.description') }}</p>
  <p><a href="https://www.dumugiordanu.cz/">https://www.dumugiordanu.cz/</a></p>
  </div>
</div>

</template>

<script>
export default {
  name: 'AccommodationPage',
}
</script>
