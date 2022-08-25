export default ({ $axios }: any, inject: any) => {
  const main = $axios.create();
  main.setBaseURL(process.env.MAIN_API_BASE_URL);

  // ******** For have mutiple api
  // const another = $axios.create();
  // another.setBaseURL('');

  inject('api', {
    main,
    // another,
  })
}
