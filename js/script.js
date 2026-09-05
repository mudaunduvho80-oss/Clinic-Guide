// ==========================================
// CLINIC GUIDE - JAVASCRIPT
// ==========================================


// ==========================================
// CHANGE APPOINTMENT TITLE
// ==========================================

let title = document.getElementById("appointmentTitle");

if (title) {
    title.textContent = "Clinic Appointment";
}


// ==========================================
// WELCOME MESSAGE
// ==========================================

function showMessage() {
    alert("Welcome to the appointment system!");
}


// ==========================================
// SHOW PATIENT NAME
// ==========================================

function showPatientName() {
    let name = document.getElementById("patientName").value;
    let message = document.getElementById("message");

    if (name === "") {
        message.textContent = "Please Enter Your Name.";
        message.style.color = "green";
    } else {
        message.textContent = "Welcome " + name + "!";
        message.style.color = "blue";
    }
}


// ==========================================
// CHECK PATIENT
// ==========================================

function checkPatient() {
    let fullname = document.getElementById("fullname").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("appointmentMessage");

    if (fullname === "" || phone === "") {
        message.textContent = "Please complete all required fields.";
        message.style.color = "red";
    } else {
        message.textContent =
            "Thank you " + fullname + ". Your details have been received.";
        message.style.color = "green";
    }
}


// ==========================================
// CHECK SERVICE
// ==========================================

function checkService() {
    let serviceSelect = document.getElementById("service");
    let service = serviceSelect.value;
    let serviceName =
        serviceSelect.options[serviceSelect.selectedIndex].text;

    let message = document.getElementById("serviceMessage");

    if (service === "") {
        message.textContent = "Please select a service.";
        message.style.color = "red";
    } else {
        message.textContent = "You selected: " + serviceName;
        message.style.color = "green";
    }
}


// ==========================================
// CHECK DATE
// ==========================================

function checkDate() {
    let date = document.getElementById("date").value;
    let message = document.getElementById("dateMessage");

    if (date === "") {
        message.textContent = "Please select an appointment date.";
        message.style.color = "red";
    } else {
        message.textContent =
            "Appointment date selected: " + date;
        message.style.color = "green";
    }
}


// ==========================================
// CHECK TIME
// ==========================================

function checkTime() {
    let time = document.getElementById("time").value;
    let message = document.getElementById("timeMessage");

    if (time === "") {
        message.textContent = "Please select an appointment time.";
        message.style.color = "red";
    } else {
        message.textContent =
            "Appointment time selected: " + time;
        message.style.color = "green";
    }
}


// ==========================================
// CHECK REASON
// ==========================================

function checkReason() {
    let reason = document.getElementById("reason").value;
    let message = document.getElementById("reasonMessage");

    if (reason === "") {
        message.textContent =
            "Please enter the reason for your appointment.";
        message.style.color = "red";
    } else {
        message.textContent = "Reason: " + reason;
        message.style.color = "green";
    }
}


// ==========================================
// ERROR ANIMATION
// ==========================================

function showError(message, text) {
    message.textContent = text;
    message.style.color = "red";

    message.classList.remove("error-animation");

    void message.offsetWidth;

    message.classList.add("error-animation");
}


// ==========================================
// SET TODAY'S DATE AS MINIMUM
// ==========================================

let dateInput = document.getElementById("date");

if (dateInput) {

    let todayDate = new Date();

    let year = todayDate.getFullYear();

    let month = String(
        todayDate.getMonth() + 1
    ).padStart(2, "0");

    let day = String(
        todayDate.getDate()
    ).padStart(2, "0");

    let todayFormatted =
        year + "-" + month + "-" + day;

    dateInput.min = todayFormatted;
}


// ==========================================
// BOOK APPOINTMENT
// ==========================================

function bookAppointment(event) {

    event.preventDefault();

    let confirmation = confirm(
        "Are you sure you want to book this appointment?"
    );

    if (!confirmation) {
        return;
    }

    let fullname =
        document.getElementById("fullname").value;

    let phone =
        document.getElementById("phone").value;

    let email =
        document.getElementById("email").value;

    let serviceSelect =
        document.getElementById("service");

    let service =
        serviceSelect.value;

    let serviceName =
        serviceSelect.options[
            serviceSelect.selectedIndex
        ].text;

    let date =
        document.getElementById("date").value;

    let time =
        document.getElementById("time").value;

    let reason =
        document.getElementById("reason").value;

    let message =
        document.getElementById("bookingMessage");


    // Validation patterns

    let namePattern =
        /^[A-Za-z ]+$/;

    let phonePattern =
        /^0[0-9]{9}$/;

    let emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    // Today's date

    let today = new Date();

    today.setHours(0, 0, 0, 0);


    // Selected date

    let selectedDate =
        new Date(date);

    selectedDate.setHours(0, 0, 0, 0);


    // Validation

    if (fullname === "") {

        showError(
            message,
            "Please enter your full name."
        );

    } else if (!namePattern.test(fullname)) {

        showError(
            message,
            "Please enter a valid name."
        );

    } else if (phone === "") {

        showError(
            message,
            "Please enter your phone number."
        );

    } else if (!phonePattern.test(phone)) {

        showError(
            message,
            "Please enter a valid South African phone number."
        );

    } else if (email === "") {

        showError(
            message,
            "Please enter your email address."
        );

    } else if (!emailPattern.test(email)) {

        showError(
            message,
            "Please enter a valid email address."
        );

    } else if (service === "") {

        showError(
            message,
            "Please select a service."
        );

    } else if (date === "") {

        showError(
            message,
            "Please select a date."
        );

    } else if (selectedDate < today) {

        showError(
            message,
            "Please select today or a future date."
        );

    } else if (time === "") {

        showError(
            message,
            "Please select a time."
        );

    } else if (
        time < "08:00" ||
        time > "16:00"
    ) {

        showError(
            message,
            "Please select a time between 08:00 and 16:00."
        );

    } else if (reason === "") {

        showError(
            message,
            "Please enter the reason for your appointment."
        );

    } else {

        let button =
            document.querySelector("form button");

        message.textContent =
            "Processing your appointment...";

        message.style.color = "blue";

        button.disabled = true;

        button.textContent =
            "Processing...";


        // Wait 2 seconds

        setTimeout(function() {

            // Generate reference number

            let referenceNumber =
                "CG-" +
                Math.floor(
                    10000 +
                    Math.random() * 90000
                );


            // Save reference

            localStorage.setItem(
                "appointmentReference",
                referenceNumber
            );


            // Appointment object

            let appointment = {

                reference: referenceNumber,

                name: fullname,

                phone: phone,

                email: email,

                service: serviceName,

                date: date,

                time: time,

                reason: reason

            };


            // Save appointment

            localStorage.setItem(
                "appointment",
                JSON.stringify(appointment)
            );


            // Confirmation

            message.innerHTML =

                "<div class='appointment-confirmation success-animation'>" +

                    "<h3>Appointment Request Submitted!</h3>" +

                    "<p>Thank you, " +
                    fullname +
                    ". Your appointment request has been received.</p>" +

                    "<div class='appointment-details'>" +

                        "<p><strong>Reference:</strong> " +
                        referenceNumber +
                        "</p>" +

                        "<p><strong>Name:</strong> " +
                        fullname +
                        "</p>" +

                        "<p><strong>Phone:</strong> " +
                        phone +
                        "</p>" +

                        "<p><strong>Email:</strong> " +
                        email +
                        "</p>" +

                        "<p><strong>Service:</strong> " +
                        serviceName +
                        "</p>" +

                        "<p><strong>Date:</strong> " +
                        date +
                        "</p>" +

                        "<p><strong>Time:</strong> " +
                        time +
                        "</p>" +

                        "<p><strong>Reason:</strong> " +
                        reason +
                        "</p>" +

                    "</div>" +

                "</div>";


            message.style.color =
                "green";


            // Clear form

            document.getElementById(
                "fullname"
            ).value = "";

            document.getElementById(
                "phone"
            ).value = "";

            document.getElementById(
                "email"
            ).value = "";

            document.getElementById(
                "service"
            ).value = "";

            document.getElementById(
                "date"
            ).value = "";

            document.getElementById(
                "time"
            ).value = "";

            document.getElementById(
                "reason"
            ).value = "";


            button.textContent =
                "Appointment Submitted";

        }, 2000);
    }
}


// ==========================================
// NEW APPOINTMENT
// ==========================================

function newAppointment() {

    let confirmation = confirm(
        "Are you sure you want to start a new appointment?"
    );

    if (!confirmation) {
        return;
    }

    let form =
        document.querySelector("form");

    let button =
        document.querySelector("form button");

    let message =
        document.getElementById("bookingMessage");

    form.reset();

    button.disabled = false;

    button.textContent =
        "Book Appointment";

    message.innerHTML = "";
}


// ==========================================
// CONTACT FORM
// ==========================================

function submitContactForm(event) {

    event.preventDefault();


    let name =
        document.getElementById("name").value;

    let email =
        document.getElementById("email").value;

    let messageText =
        document.getElementById("message").value;


    let emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    // Check name

    if (name === "") {

        alert(
            "Please enter your full name."
        );

        return;
    }


    // Check email

    if (email === "") {

        alert(
            "Please enter your email address."
        );

        return;
    }


    if (!emailPattern.test(email)) {

        alert(
            "Please enter a valid email address."
        );

        return;
    }


    // Check message

    if (messageText === "") {

        alert(
            "Please enter your message."
        );

        return;
    }


    // Successful submission

    alert(
        "Thank you " +
        name +
        "!\n\nYour message has been sent successfully."
    );


    // Clear form

    document.getElementById(
        "name"
    ).value = "";

    document.getElementById(
        "email"
    ).value = "";

    document.getElementById(
        "message"
    ).value = "";
}