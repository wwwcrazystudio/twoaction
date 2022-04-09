export default ({ _app }: any, inject: Function) => {
  inject('isMobile', () =>
    typeof window !== 'undefined'
      ? window.matchMedia('(max-width: 768px)').matches
      : false
  )
  inject('isTablet', () =>
    typeof window !== 'undefined'
      ? window.matchMedia('(max-width: 1199px)').matches
      : false
  )
}
