<script>
export default {
  name: 'AboutPage',
}
</script>

<template>
  <div class="content">
    <div class="container text">
      <p v-html="$t('content.intro')"></p>
      <h2 v-html="$t('content.about')"></h2>
      <div class="figure right">
        <img :src="require('@/assets/photos/slavonice-houses.jpg')" alt="Slavonice">
      </div>
      <p v-html="$t('content.tournament_details')"></p>
      <div class="figure right">
        <img :src="require('@/assets/photos/playing-room.jpg')" alt="Hrací sál">
      </div>
      <p v-html="$t('content.prizes')"></p>
      <h2 v-html="$t('content.registration')"></h2>
      <div class="figure right">
        <img :src="require('@/assets/photos/ceramic-cups.jpg')" alt="Hrnky">
      </div>
      <p> <span v-html="$t('content.registration_details')"> </span> <a href="mailto:slavonicebridge@seznam.cz">slavonicebridge@seznam.cz</a>
        <span v-html="$t('content.registration_details2')"> </span>
      </p>
      <h2 v-html="$t('content.program')"></h2>
      <div class="figure">
        <table>
          <tbody>
          <tr>
            <th rowspan="2">{{ $t('program.thursday' ) }}</th>
            <td >16:15</td>

            <td><em>{{ $t('program.opening') }}</em></td>
          </tr>
          <tr>

            <td>16:30</td>
            <td><em>{{ $t('program.team_part1')}}</em><br>{{ $t('program.dinner_break')}}</td>
          </tr>

          <tr>
            <th rowspan="2">{{ $t('program.friday' ) }}</th>
            <td>10:00</td>
            <td>{{ $t('program.pairs_tournament' ) }} </td>
          </tr>
          <tr>
            <td>16:00</td>
            <td><em>{{ $t('program.team_part2' ) }}</em><br>{{ $t('program.dinner_break')}}</td>
          </tr>
          <tr>
            <th rowspan="2">{{ $t('program.saturday' ) }}</th>
            <td>10:00</td>
            <td>{{ $t('program.pairs_tournament' ) }} </td>
          </tr>
          <tr>
            <td>16:00</td>
            <td><em>{{ $t('program.team_final' ) }}</em><br>{{ $t('program.dinner_break')}}</td>
          </tr>
          <tr>
            <th rowspan="2">{{ $t('program.sunday' ) }}</th>
            <td>10:00</td>

            <td><em>{{ $t('program.main_pairs_tournament') }}</em></td>
          </tr>

          <tr>
            <td>14:00</td>
            <td><em>{{ $t('program.closing_ceremony') }}</em></td>
          </tr>
          </tbody>
        </table>
      </div>
      <h2 v-html=" $t('content.accommodation') "></h2>
      <p v-html=" $t('content.accommodation_details') "></p>
      <h2 v-html=" $t('content.entry_fee') " hidden=""></h2>
      <div class="figure" >
        <table>
          <tbody>
          <tr>
            <th>{{ $t('entry_fee.category') }}</th>
            <th>{{ $t('entry_fee.with_accommodation') }}</th>
          </tr>
          <tr><th>{{ $t('entry_fee.adult')}}</th><td>900&nbsp;Kč</td></tr>
          <tr><th>{{ $t('entry_fee.youth')}}&nbsp;</th><td>450&nbsp;Kč</td></tr>
          </tbody>
        </table>
        <p class="figure-note">{{ $t('entry_fee.note') }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
