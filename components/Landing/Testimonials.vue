<template>
  <div class="testimonials">
    <div class="testimonials__wrap">
      <h2 class="testimonials__heading">К нам возвращаются</h2>

      <div ref="wrap" class="testimonials__carousel swiper">
        <div class="testimonials__carousel-wrap swiper-wrapper">
          <div
            class="testimonials__testimonials-item testimonials-item swiper-slide"
          >
            <div class="testimonials-item__wrap">
              <div class="testimonials-item__head">
                <div class="testimonials-item__rating">
                  <img src="~/assets/img/icons/starblue.png" alt="" />
                  4.9
                </div>

                <div class="testimonials-item__tag">Подписчики</div>

                <div class="testimonials-item__icon">
                  <img
                    src="~/assets/img/placeholder/testimonials1.png"
                    alt=""
                  />
                </div>

                <h3 class="testimonials-item__title">K/On/Off</h3>

                <div class="testimonials-item__content">
                  Очень качественно и быстро!) Результатом полностью довольны)
                </div>

                <div class="testimonials-item__foot">
                  <div class="testimonials-item__meta">
                    <div class="testimonials-item__meta-item">
                      <img src="~/assets/img/icons/heart.png" alt="" />
                      5к.
                    </div>
                  </div>

                  <div class="testimonials-item__date">2 недели назад</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Swiper, { Navigation } from 'swiper'

export default Vue.extend({
  mounted(this: any) {
    this.$nextTick(() => {
      const wrap = this.$refs.wrap as HTMLElement
      /*       const prev = this.$refs.prev as HTMLElement
      const next = this.$refs.next as HTMLElement */

      const args = {
        slidesPerView: 2,
        spaceBetween: 16,
        loop: true,
        breakpoints: {
          991: {
            slidesPerView: 4,
            spaceBetween: 32,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
        },
        modules: [Navigation],
        /*         navigation: {
          nextEl: next,
          prevEl: prev,
        }, */
      }

      this.carouselRowFirst = new Swiper(wrap, args)
    })
  },
})
</script>
