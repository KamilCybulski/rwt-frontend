export default client => ({
  getCards: cmc => client.get('/cards', {
    params: { cmc },
  }),
});
