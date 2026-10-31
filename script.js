
const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {
    bookingForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const service = document.getElementById("service").value;
        const message = document.getElementById("message").value.trim();

        const whatsappMessage = `
NEW PROJECT BOOKING
-------------------------

Name: ${name}
Email: ${email}
Phone: ${phone}
Service: ${service}

Project Description:
${message}

-------------------------
Austine Builds Website
        `;

        const whatsappURL =
            "https://wa.me/254184305990?text=" +
            encodeURIComponent(whatsappMessage);

        window.open(whatsappURL, "_blank");
    });
}
