const email = "info@trueformscranton.com";
const subject = "📫 Customer Inquiry - Book Consultation";
const body = `Please set a time and a date to call and discuss your project. If you would like to write a description about your project & the requirements that works too! 😊

Date:

Time:

Project Description:

Project Requirements:

Expected Completion:

`;

const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
document.querySelectorAll("#emailLink").forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = mailtoLink;
    });
});