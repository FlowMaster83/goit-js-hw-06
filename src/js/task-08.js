const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const formForElements = event.currentTarget.elements;
    const formForEmail = formForElements.email.value;
    const formForPassword = formForElements.password.value;

    if (formForEmail === "" || formForPassword === "") {
        alert("Всі поля повинні бути заповнені");
    } else {
        console.log({ Email: formForEmail, Password: formForPassword });
    };

    event.currentTarget.reset();
}