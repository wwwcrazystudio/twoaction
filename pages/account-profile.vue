<template>
  <main class="account">
    <div class="account__wrap">
      <div class="container">
        <h1 class="account__heading">Личный кабинет</h1>

        <div class="account__nav">Мои заказы Шаблоны Профиль Безопасность</div>

        <div class="account__info account-info">
          <div class="account-info__main account-main">
            <div class="account-main__wrap">
              <div class="account-main__avatar">
                <img
                  class="account-avatar"
                  src="~/assets/img/account-avatar.png"
                  alt="Your avatar"
                />
              </div>
              <div class="account-main__name">Кудрявцева Дарья</div>
              <div class="account-main__roles">
                <!-- Add Radio btn -->
                <button>Рекламодатель</button>
                <button>Площадка</button>
              </div>
              <div class="account-main__switch">
                <div class="account-main__switch-icon">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.49608 0.688063C6.44148 0.796156 5.48733 1.24222 4.71529 1.98809C3.40948 3.24969 2.9547 5.10109 3.52842 6.81978C3.67245 7.25125 3.96617 7.80834 4.21895 8.1295C4.26823 8.19212 4.30857 8.25731 4.30857 8.27437C4.30857 8.29144 4.2132 8.36203 4.09664 8.43128C3.79923 8.60797 3.39151 8.91328 3.03382 9.22712C1.57807 10.5045 0.649539 12.5136 0.63932 14.4081C0.636727 14.8872 0.637945 14.8963 0.721946 15.0236C1.00488 15.4525 1.64067 15.4174 1.8752 14.9601C1.92195 14.8689 1.94238 14.7336 1.96482 14.3663C2.02029 13.4592 2.20938 12.7297 2.58188 11.9859C3.13314 10.8852 4.11273 9.90009 5.20354 9.34944L5.39342 9.25359L5.8432 9.48028C7.31651 10.2229 8.91924 10.1682 10.356 9.32616L10.4913 9.24687L10.7359 9.37019C11.7842 9.89869 12.6951 10.8055 13.2593 11.8826C13.6766 12.679 13.8737 13.4056 13.9332 14.3663C13.9559 14.733 13.9765 14.869 14.0232 14.9601C14.2556 15.4132 14.8728 15.4545 15.1666 15.0365C15.2542 14.9117 15.2626 14.877 15.2723 14.5954C15.2935 13.9862 15.1405 13.057 14.899 12.3281C14.7523 11.8855 14.3571 11.0683 14.0979 10.6719C13.8189 10.2452 13.4502 9.80453 13.039 9.40625C12.6327 9.01287 12.3471 8.78772 11.8739 8.48766L11.564 8.29115L11.7521 8.02841C12.1292 7.50156 12.426 6.78806 12.5501 6.10937C12.6208 5.72303 12.6191 4.92784 12.5467 4.53125C12.4785 4.15709 12.2886 3.58316 12.1263 3.26044C11.6679 2.34866 10.8368 1.53575 9.93127 1.1135C9.18102 0.763656 8.28523 0.607156 7.49608 0.688063ZM8.48417 2.04769C9.1937 2.16962 9.79445 2.47881 10.2969 2.98072C10.7262 3.4095 11.015 3.91947 11.192 4.56153C11.246 4.757 11.257 4.88694 11.2571 5.32812C11.2572 5.80147 11.2484 5.89212 11.1764 6.15997C11.0157 6.75731 10.7076 7.284 10.2724 7.70556C9.6122 8.34491 8.85142 8.65625 7.9492 8.65625C7.02414 8.65625 6.21479 8.31344 5.56926 7.64822C5.14476 7.21072 4.88042 6.74719 4.72214 6.16269C4.64836 5.89019 4.64011 5.80537 4.64079 5.32812C4.64148 4.85612 4.65064 4.76312 4.72273 4.49428C5.16867 2.83194 6.81526 1.76091 8.48417 2.04769Z"
                      fill="#0085E5"
                    />
                  </svg>
                </div>
                <button class="account-main__switch-btn">
                  Добавить или переключить аккаунты
                </button>
              </div>
              <div class="account-main__logout">
                <div class="account-main__logout-icon">
                  <svg
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2.50196 0.0943438C1.94615 0.239937 1.46374 0.628031 1.21743 1.12772C0.980681 1.608 0.996306 1.12259 0.996306 8C0.996306 13.2995 1.00277 14.2028 1.04206 14.3906C1.19396 15.1167 1.77871 15.719 2.51424 15.9071C2.74631 15.9665 2.87253 15.9688 5.93159 15.9688H9.10793L9.2669 15.8895C9.49162 15.7776 9.59859 15.6092 9.61356 15.3438C9.62781 15.0912 9.54062 14.9058 9.34171 14.7656L9.20862 14.6719L6.01599 14.6562L2.82334 14.6406L2.69834 14.5733C2.54143 14.4889 2.44921 14.3909 2.38734 14.2428C2.34424 14.1396 2.33896 13.4595 2.33896 8C2.33896 2.5405 2.34424 1.86037 2.38734 1.75725C2.44921 1.60912 2.54143 1.51109 2.69834 1.42666L2.82334 1.35938L6.01599 1.34375L9.20862 1.32812L9.34171 1.23438C9.54062 1.09425 9.62781 0.908812 9.61356 0.65625C9.59859 0.390844 9.49162 0.222438 9.2669 0.110469L9.10793 0.03125L5.91878 0.0329687C2.88399 0.0345937 2.71856 0.0375938 2.50196 0.0943438ZM12.1092 3.37409C11.6852 3.50947 11.4956 4.01991 11.7403 4.36697C11.786 4.43178 12.4632 5.11716 13.2452 5.89006C14.0272 6.66297 14.6718 7.30625 14.6775 7.31956C14.6832 7.33287 12.9179 7.34375 10.7544 7.34375H6.82096L6.68334 7.41406C6.4069 7.55531 6.25924 7.86572 6.33403 8.14844C6.38471 8.34003 6.51056 8.49766 6.68334 8.58594L6.82096 8.65625H10.7544C12.9179 8.65625 14.6832 8.66712 14.6775 8.68044C14.6718 8.69375 14.0272 9.33703 13.2452 10.1099C12.4632 10.8828 11.786 11.5682 11.7403 11.633C11.3595 12.1731 12.0053 12.8799 12.5991 12.5729C12.7244 12.5081 16.8589 8.42378 16.9265 8.29806C16.9947 8.171 16.9947 7.829 16.9265 7.70194C16.8572 7.57309 12.7228 3.49106 12.5941 3.42453C12.4699 3.36028 12.2305 3.33538 12.1092 3.37409Z"
                      fill="#0085E5"
                    />
                  </svg>
                </div>
                <button class="account-main__logout-btn">
                  Выйти из аккаунта
                </button>
              </div>
              <div class="account-main__delete">
                <div class="account-main__delete-icon">
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.37872 3.62302C6.24937 3.62302 6.14453 3.72785 6.14453 3.85721V8.28344C6.14453 8.4127 6.24937 8.51763 6.37872 8.51763C6.50808 8.51763 6.61292 8.4127 6.61292 8.28344V3.85721C6.61292 3.72785 6.50808 3.62302 6.37872 3.62302Z"
                      fill="#0085E5"
                    />
                    <path
                      d="M3.61701 3.62302C3.48765 3.62302 3.38281 3.72785 3.38281 3.85721V8.28344C3.38281 8.4127 3.48765 8.51763 3.61701 8.51763C3.74636 8.51763 3.8512 8.4127 3.8512 8.28344V3.85721C3.8512 3.72785 3.74636 3.62302 3.61701 3.62302Z"
                      fill="#0085E5"
                    />
                    <path
                      d="M1.60264 2.97701V8.74699C1.60264 9.08803 1.7277 9.4083 1.94615 9.6381C2.1636 9.86854 2.46622 9.99936 2.78293 9.99991H7.2139C7.5307 9.99936 7.83332 9.86854 8.05068 9.6381C8.26913 9.4083 8.39419 9.08803 8.39419 8.74699V2.97701C8.82845 2.86174 9.10985 2.44221 9.05175 1.9966C8.99357 1.55109 8.61402 1.21783 8.16466 1.21773H6.96562V0.924995C6.96699 0.67882 6.86966 0.442433 6.69539 0.268527C6.52112 0.0947135 6.28436 -0.00207336 6.03819 -6.07819e-05H3.95864C3.71247 -0.00207336 3.47571 0.0947135 3.30144 0.268527C3.12717 0.442433 3.02984 0.67882 3.03121 0.924995V1.21773H1.83217C1.38281 1.21783 1.00326 1.55109 0.945076 1.9966C0.886986 2.44221 1.16838 2.86174 1.60264 2.97701ZM7.2139 9.53153H2.78293C2.38252 9.53153 2.07102 9.18756 2.07102 8.74699V2.99759H7.92581V8.74699C7.92581 9.18756 7.61431 9.53153 7.2139 9.53153ZM3.49959 0.924995C3.49804 0.803051 3.54597 0.685681 3.63251 0.599597C3.71896 0.513514 3.83661 0.466218 3.95864 0.468322H6.03819C6.16022 0.466218 6.27787 0.513514 6.36432 0.599597C6.45086 0.685589 6.49879 0.803051 6.49724 0.924995V1.21773H3.49959V0.924995ZM1.83217 1.68612H8.16466C8.39748 1.68612 8.58621 1.87484 8.58621 2.10766C8.58621 2.34048 8.39748 2.52921 8.16466 2.52921H1.83217C1.59935 2.52921 1.41062 2.34048 1.41062 2.10766C1.41062 1.87484 1.59935 1.68612 1.83217 1.68612Z"
                      fill="#0085E5"
                    />
                    <path
                      d="M4.99591 3.62302C4.86656 3.62302 4.76172 3.72785 4.76172 3.85721V8.28344C4.76172 8.4127 4.86656 8.51763 4.99591 8.51763C5.12526 8.51763 5.2301 8.4127 5.2301 8.28344V3.85721C5.2301 3.72785 5.12526 3.62302 4.99591 3.62302Z"
                      fill="#0085E5"
                    />
                  </svg>
                </div>
                <button class="account-main__delete-btn">
                  Удалить аккаунт
                </button>
              </div>
            </div>
          </div>

          <div class="account-info__personal account-personal">
            <div class="account-personal__wrap">
              <H2 class="account-personal__heading">Личная информация</H2>
              <div class="account-personal__ur-email">Ваш E-mail</div>
              <div class="account-personal__email-current">
                kudryavtsevadarya@gmail.com
              </div>
              <div class="account-personal__email-form"></div>
              <div class="account-personal__ur-phone-n"></div>
              <div class="account-personal__phone-n-current"></div>
              <div class="account-personal__phone-n-form"></div>
              <div class="account-personal__ur-login">Ваш логин</div>
              <div class="account-personal__login-current"></div>
              <div class="account-personal__login-form"></div>
            </div>
          </div>
          <div class="account-info__about account-about">
            <div class="account-about__wrap">
              <div class="account-about__user-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M10 12.5c-5.92 0-9 3.5-9 5.5v1h18v-1c0-2-3.08-5.5-9-5.5z"
                    fill="#ffffff"
                  />
                  <circle cx="10" cy="6" r="5" fill="#ffffff" />
                </svg>
              </div>

              <div class="account-about__heading">О себе</div>
              <p class="account-about__text">
                Отличная и коммуникабельная администрация! Очень оперативно и
                осторожно исполнили заказ. Обязательно буду обращаться еще.
              </p>
              <div class="account-about__orders-total orders-total">
                <div class="orders-total__icon">
                  <svg
                    width="12"
                    height="16"
                    viewBox="0 0 12 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.996094 0.290846C0.842719 0.339189 0.581125 0.610064 0.534094 0.769252C0.504719 0.868658 0.496094 2.56832 0.496094 8.24722V15.5966L0.572813 15.6733C0.648875 15.7494 0.654344 15.75 1.24609 15.75C1.83784 15.75 1.84331 15.7494 1.91937 15.6733L1.99609 15.5966V8.24722C1.99609 2.65991 1.98719 0.868158 1.95894 0.773877C1.9045 0.592158 1.68256 0.359939 1.50578 0.299689C1.34062 0.243408 1.15672 0.240221 0.996094 0.290846ZM8.71484 0.922346C8.21103 0.979189 7.92591 1.02644 6.63672 1.26672C6.05234 1.37563 5.36328 1.49531 5.10547 1.53272C4.32487 1.64594 3.018 1.65044 2.56641 1.54144L2.49609 1.52447V5.77447V10.0245L2.56641 10.0417C2.80844 10.1011 3.38497 10.1314 3.94922 10.1144C4.8765 10.0866 5.58425 9.99663 6.81162 9.7506C8.33587 9.44504 9.04553 9.36213 9.94922 9.384C10.5828 9.39935 11.0324 9.45735 11.5156 9.5861C11.7733 9.65482 11.8497 9.64647 11.933 9.54057C11.9956 9.461 11.9961 9.42638 11.9961 5.39063C11.9961 0.681065 12.0412 1.20891 11.6294 1.098C11.0635 0.945565 10.6738 0.899127 9.87109 0.888471C9.3535 0.881564 8.97891 0.892564 8.71484 0.922346Z"
                      fill="#0085E5"
                    />
                  </svg>
                </div>
                <div class="orders-total__value">12</div>
                <div class="orders-total__text">созданных заказов</div>
              </div>
              <div class="account-about__orders-repeated orders-repeated">
                <div class="orders-repeated__icon">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.16069 0.0466265C8.01976 0.148439 7.99682 0.246158 7.99682 0.744815C7.99682 1.28163 8.01857 1.24878 7.66247 1.24957C7.55594 1.24982 7.30282 1.27172 7.09997 1.29828C4.26038 1.67003 1.88376 3.62235 0.995944 6.31251C0.817507 6.8532 0.730726 7.24048 0.668195 7.77498C0.33957 10.5844 1.68226 13.3704 4.09057 14.876C5.82841 15.9624 8.00929 16.2805 9.96776 15.7333C10.4409 15.6011 10.7828 15.4697 11.2624 15.2357C13.2246 14.2785 14.6644 12.4898 15.1861 10.3612C15.2998 9.89707 15.3821 9.31757 15.3646 9.10345C15.3473 8.89117 15.2318 8.71604 15.0515 8.62879C14.9235 8.56685 14.8651 8.56251 14.1578 8.56251C13.3492 8.56251 13.2579 8.57673 13.0958 8.72807C12.9784 8.83767 12.9402 8.93935 12.8864 9.28501C12.7619 10.0855 12.5221 10.7099 12.0935 11.3504C10.8121 13.265 8.37538 14.0249 6.20529 13.1867C4.88532 12.6768 3.80941 11.5537 3.34707 10.2031C3.18132 9.71889 3.11804 9.35085 3.09988 8.76564C3.08223 8.19529 3.12235 7.82035 3.25144 7.34973C3.79507 5.36829 5.52557 3.91897 7.58751 3.71832C7.75247 3.70226 7.9111 3.68876 7.94004 3.68832C7.98682 3.6876 7.99369 3.74444 8.00254 4.20576L8.01244 4.72404L8.11847 4.81869C8.30951 4.98922 8.2886 4.99769 10.5906 3.81854C11.7335 3.23307 12.7214 2.71016 12.7859 2.6565C12.9322 2.53472 12.9419 2.41825 12.8171 2.28257C12.6952 2.14997 8.53176 0.0271265 8.35807 0.00897022C8.27291 9.52072e-05 8.20801 0.0124702 8.16069 0.0466265Z"
                      fill="#0085E5"
                    />
                  </svg>
                </div>
                <div class="orders-repeated__value">4</div>
                <div class="orders-repeated__text">повторых заказа</div>
              </div>
            </div>
          </div>
        </div>

        <div class="account__verification verification">
          <div class="verification_wrap">
            <h2 class="verification__heading">Верификация аккаунта</h2>
            <p class="verification__text">
              Чтобы верифицировать аккаунт, через звонок будет передан код
              активации
            </p>
            <button class="verification__btn">Верифицировать аккаунт</button>
          </div>
        </div>

        <div class="account__feedback feedback">
          <div class="feedback__heading-wrap">
            <div class="feedback__heading">Отзывы</div>
            <div class="feedback__value">12</div>
          </div>
          <ul class="feedback__list">
            <li class="feedback__item">
              <div class="feedback__item__wrap">
                <div class="feedback__item-heading-wrap">
                  <div class="feedback__item-icon-wrap">
                    <img
                      class="feedback__item-icon"
                      src="~/assets/img/placeholder/group5.png"
                      alt=""
                    />
                  </div>
                  <div class="feedback__item-site-name">Business marketing</div>
                  <div class="feedback__item-date">18.11.2021</div>
                </div>
                <div class="feedback__item-type">Рекалмный пост</div>
                <div class="feedback__item-text">
                  Отличная и коммуникабельная администрация! Очень оперативно и
                  осторожно исполнили заказ. Обязательно буду обращаться еще.
                </div>
              </div>
            </li>
            <li class="feedback__item"></li>
          </ul>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.account__info {
  display: flex;
}

.account-info__main {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 410px;
  border-radius: 22px;
  background-color: orange;
  box-shadow: 0px 10px 50px rgba(117, 117, 117, 0.06),
    0px 10px 30px rgba(29, 29, 29, 0.04);
}

.account-info__personal {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 410px;
  border-radius: 22px;
  background-color: orange;
  box-shadow: 0px 10px 50px rgba(117, 117, 117, 0.06),
    0px 10px 30px rgba(29, 29, 29, 0.04);
  margin-left: 25px;
  margin-right: 25px;
}

.account-info__about {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 410px;
  border-radius: 22px;
  background-color: orange;
  box-shadow: 0px 10px 50px rgba(117, 117, 117, 0.06),
    0px 10px 30px rgba(29, 29, 29, 0.04);
}

.account-main {
  &__avatar {
    margin: 0 auto;
    width: 66px;
    height: 66px;
  }

  &__name {
    font-size: 18px;
    font-weight: 500;
    text-align: center;
    margin-top: 18px;
    margin-bottom: 28px;
  }

  &__roles {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 45px;
  }

  &__switch {
    display: flex;
    margin-top: 30px;
    margin-left: 16px;
    margin-bottom: 12px;
  }

  &__logout {
    display: flex;
    margin-left: 16px;
    margin-bottom: 50px;
  }

  &__delete {
    display: flex;
    margin-left: 16px;
  }

  &__switch-btn {
    font-size: 14px;
    font-weight: 400;
    color: rgba(0, 133, 229, 1);
  }

  &__logout-btn {
    font-size: 14px;
    font-weight: 400;
    color: rgba(0, 133, 229, 1);
  }

  &__delete-btn {
    font-size: 14px;
    font-weight: 400;
    text-decoration-line: underline;
    color: rgba(0, 133, 229, 1);
  }

  &__logout-icon {
    width: 16px;
    height: 16px;
    margin-right: 14px;
  }

  &__switch-icon {
    width: 16px;
    height: 16px;
    margin-right: 14px;
  }

  &__delete-icon {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
}

/* personal */

/* About */

.account-about {
  &__user-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 40px;
    border-radius: 14px;
    background-color: #0085e5;
    box-shadow: 0px 9px 20px rgba(0, 98, 169, 0.2);
  }
  &__heading {
    font-size: 16px;
    font-weight: 500;
    color: rgba(72, 72, 72, 0.8);
    margin-top: 18px;
    margin-bottom: 12px;
  }
  &__text {
    max-width: 325px;
    font-size: 14px;
    font-weight: 400;
    color: rgba(72, 72, 72, 0.8);
  }
  &__orders-total {
    margin-top: 56px;
    display: flex;
    align-items: center;
    margin-bottom: 18px;
  }
  &__orders-repeated {
    display: flex;
    align-items: center;
  }
}

.orders-total {
  &__icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 14px;
    border: 1px solid #0085e5;
    margin-right: 14px;
  }
  &__value {
    width: 15px;
    font-size: 13px;
    font-weight: 500;
    color: #0085e5;
    margin-right: 4px;
  }
  &__text {
    font-size: 13px;
    font-weight: 400;
  }
}

.orders-repeated {
  &__icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 14px;
    border: 1px solid #0085e5;
    margin-right: 14px;
  }
  &__value {
    width: 15px;
    font-size: 13px;
    font-weight: 500;
    color: #0085e5;
    margin-right: 4px;
  }
  &__text {
    font-size: 13px;
    font-weight: 400;
  }
}

/* verfc */

.account__verification {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  margin-top: 60px;
}

.verification__heading {
  font-size: 22px;
  font-weight: 500;
  color: rgba(72, 72, 72, 1);
}

.verification__text {
  max-width: 325px;
  font-size: 13px;
  font-weight: 400;
  margin-top: 22px;
  margin-bottom: 33px;
}

.verification__btn {
  @extend %btn-main;

  width: 260px;
  height: 45px;
}

/* feedback */

.feedback__heading-wrap {
  display: flex;
}

.feedback__heading {
  font-size: 18px;
  font-weight: 500;
  color: rgba(72, 72, 72, 1);
}

.feedback__value {
  font-size: 14px;
  font-weight: 500;
  color: rgba(0, 133, 229, 1);
  margin-top: 4px;
  margin-left: 12px;
}

/* socials */

.feedback__list {
  display: flex;
  @include unlist;
}

.feedback__item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 325px;
  height: 260px;
  border-radius: 16px;
  background-color: orange;
}

.feedback__item-heading-wrap {
  margin-top: 22px;
  margin-left: 24px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.feedback__item-icon-wrap {
  position: absolute;
  left: 0;
  display: flex;
  align-items: center;
  width: 50px;
  height: 50px;
}

.feedback__item-icon {
  object-fit: contain;
  width: 50px;
  height: 50px;
}

.feedback__item-site-name {
  max-width: 140px;
  position: absolute;
  left: 64px;
  font-size: 15px;
  font-weight: 500;
  color: rgba(72, 72, 72, 0.8);
  margin-right: 14px;
}

.feedback__item-date {
  position: absolute;
  left: 219px;
  font-size: 13px;
  font-weight: 400;
  color: rgba(1, 134, 230, 1);
}

.feedback__item-type {
  font-size: 16px;
  font-weight: 500;
  color: rgba(72, 72, 72, 0.8);
  margin-top: 40px;
  margin-bottom: 18px;
}

.feedback__item-text {
  width: 272px;
  font-size: 12px;
  font-weight: 400;
  color: rgba(72, 72, 72, 0.8);
}
</style>
