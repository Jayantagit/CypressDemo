describe('Auth Test', () => {
    it('Basic auth', () => {

        cy.visit("https://the-internet.herokuapp.com/basic_auth",

        {
            auth:{
                username:"admin",
                password:"admin"
            }
        }
        )

        
    });

    it.skip("File download",()=>
    {
       // cy.visit("https://the-internet.herokuapp.com/download");
        cy.downloadFile("https://the-internet.herokuapp.com/download/API_NEW.docx","mydownloads","abc.docx");
    })

    it.only("File Upload",()=>
    {
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get("#file-upload").selectFile("cypress/fixtures/data/credential.pdf")
    })
});