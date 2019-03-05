"use strict";
describe('Mock receiving reservations back from Prisma DB', function () {
    it('Mocks graphQL query', function () {
        var fetchReservations = jest.fn();
        fetchReservations();
        expect(fetchReservations).toHaveBeenCalled();
    });
});
