describe('API Request', () => {
    it('POST Call', () => {

        cy.fixture('reqresuser').then((data) => {
            let requestBody = {
                name: data.name,
                job: data.job
            }
            cy.request({


                method: "POST",
                url: "https://reqres.in/api/users",
                body: requestBody
            }




            ).then((response) => {
                expect(response.status).to.eql(201)
                expect(response.body.name).to.eql(requestBody.name)
            })


        });

    });
});