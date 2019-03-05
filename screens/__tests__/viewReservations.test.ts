describe('Mock receiving reservations back from Prisma DB', () => {
  it('Mocks graphQL query', () => {
    const fetchReservations = jest.fn();
    fetchReservations();
    expect(fetchReservations).toHaveBeenCalled();
  });
});
