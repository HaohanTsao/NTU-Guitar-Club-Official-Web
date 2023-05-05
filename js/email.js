function sendEmail() {
    var params = {
        subject: document.getElementById("subject").value,
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value

    };
    const serviceID = "service_udfnpvc"
    const templateID = "template_t10cetb"

    emailjs.send(serviceID, templateID, params)
        .then(
            document.getElementById("subject").value = "",
            document.getElementById("name").value = "",
            document.getElementById("email").value = "",
            document.getElementById("message").value = "",

            alert("send sucessfully!")

        )
        .catch((err) => console.log(err));
}

