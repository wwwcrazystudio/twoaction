<template>
  <li class="event-item">
    <div class="event-item__wrap">
      <div class="event-item__head">
        <button class="event-item__notification">
          <svg
            width="14"
            height="16"
            viewBox="0 0 14 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.67242 0.675062C5.61764 0.779625 4.78836 1.08734 4.02189 1.65863C3.10514 2.34194 2.43746 3.33835 2.15496 4.44469C2.01399 4.99688 2.0018 5.23538 2.00118 7.45848L2.00055 9.5576L1.39124 10.4847C0.697989 11.5395 0.67377 11.5938 0.693614 12.0478C0.704833 12.3039 0.71927 12.3629 0.821395 12.5696C1.01264 12.9565 1.37627 13.2297 1.80964 13.3119C2.05189 13.3578 11.9558 13.3556 12.2057 13.3096C12.6892 13.2205 13.0899 12.8785 13.2556 12.4135C13.347 12.1571 13.3447 11.7655 13.2504 11.5184C13.2111 11.4157 12.9181 10.9404 12.5902 10.4478L12.0005 9.56179L11.9999 7.46057C11.9993 5.23522 11.9871 4.99697 11.8461 4.44469C11.6161 3.54388 11.1987 2.81894 10.5183 2.1385C9.73674 1.35694 8.86142 0.905344 7.79742 0.73475C7.49983 0.687062 6.88208 0.65425 6.67242 0.675062ZM5.12555 14.0196C5.12555 14.0304 5.16836 14.1262 5.22067 14.2325C5.41021 14.6174 5.72871 14.9258 6.14117 15.1237C6.46377 15.2785 6.66921 15.3252 7.01617 15.3229C7.61661 15.3189 8.14161 15.0705 8.53696 14.6032C8.65967 14.4581 8.87555 14.0861 8.87555 14.0196C8.87555 14.0088 8.0318 14 7.00055 14C5.9693 14 5.12555 14.0088 5.12555 14.0196Z"
              fill="#0085E5"
            />
          </svg>
        </button>
        <div class="event-item__date">
          (24.10.2021 18:00 - 24.10.2021 18:00)
        </div>
      </div>
      <div class="event-item__content">
        <div class="event-item__title">Рекламный пост</div>
        <div class="event-item__type">Instagram</div>
      </div>
    </div>
  </li>
</template>

<style lang="scss" scoped>
.event-item {
  &__wrap {
    padding: rem(24px);

    background: rgba(0, 133, 229, 0.04);
    border-radius: 20px;
  }
  &__head {
    display: flex;
    align-items: center;
    margin-bottom: rem(8px);
  }

  &__notification {
    margin-right: rem(10px);
  }

  &__date {
    font-size: rem(13px);
    color: $main;
  }

  &__content {
    display: flex;
  }

  &__title {
    font-size: rem(14px);
    font-weight: 500;
    margin-right: rem(6px);
  }

  &__type {
    font-size: rem(14px);
    color: $main;
  }
}
</style>
