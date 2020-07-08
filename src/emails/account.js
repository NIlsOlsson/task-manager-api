/* const sgMail = require("@sendgrid/mail")


sgMail.setApiKey(process.env.SENDGRID_API_KEY);


const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: "niolsson@gmail.com",
        subject: "Thanks for joining in!",
        text: 'Welcome to the app, ${name}. Let me know how you get along with the app.'
    })
}

sendWelcomeEmail("niolsson@gmail.com", "Nils")

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: "niolsson@gmail.com",
        subject: "Sorry, to see you go!",
        text: 'Goodbye, ${name}. Hope to see you again.'
    })
}*/