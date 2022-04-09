<template>
  <section class="client-promotion">
    <div class="container">
      <div class="client-promotion__wrap">
        <h2 class="client-promotion__heading" data-aos="fade-down">Площадке</h2>

        <StepsList class="client-promotion__steps-list" :steps="steps" />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      steps: [
        {
          img: require('~/assets/img/icons/stepsclient2.svg'),
          title: 'Шаг 1',
          description:
            '<b>Заполняете анкету, добавляете свою группу</b> в соотсветствии с выбранной площадкой',
        },
        {
          img: require('~/assets/img/icons/stepsclient2.svg'),
          title: 'Шаг 2',
          description:
            '<b>Редактируете описание, догружаете статистику</b> в связи с требованиями платформы TwoAction',
        },
        {
          img: require('~/assets/img/icons/stepsclient3.svg'),
          title: 'Шаг 3',
          description:
            '<b>Отправляете заявку и ожидаете результата</b> по одобрению и публикования вашей группы на платформе',
        },
        {
          img: require('~/assets/img/icons/stepsclient4.svg'),
          title: 'Шаг 4',
          description:
            '<b>Получаете положительный ответ, ожидаете клиентов!</b> Наслаждайтесь результатом и не дамайте о лишнем.',
        },
      ],
    }
  },
})
</script>

<style lang="scss" scoped>
.client-promotion {
  &__wrap {
    padding: rem(80px 0);

    @include media-breakpoint-down(lg) {
      padding: rem(40px 0);
    }
  }

  &__heading {
    margin-bottom: rem(58px);
    text-align: center;

    @include media-breakpoint-down(md) {
      margin-bottom: rem(22px);
      text-align: left;
    }
  }
}
</style>
