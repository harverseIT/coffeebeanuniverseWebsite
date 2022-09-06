<!DOCTYPE html>
<html>

<head>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div class="container">
        <form onsubmit="sendEmail(); reset(); return false;">
            <h3>GET IN TOUCH</h3>
            <input type="text" id="name" placeholder="Your Name" required>
            <input type="email" id="email" placeholder="Your Email" required>
            <input type="text" id="phone" placeholder="Your Phone Number" required>
            <textarea id="message" rows="4" placeholder="How can we help you?"></textarea>
            <button type="submit">Send</button>
        </form>
    </div>
    <script src="https://smtpjs.com/v3/smtp.js"></script>
    <script>
        function sendEmail() {
            Email.send({
                Host: "smtp.gmail.com",
                Username: "dimazvindixs000@gmail.com",
                Password: "qtopmrrdkulfcxre",
                To: 'lkp.jelita.wm.sultan@gmail.com',
                From: document.getElementById("email").value,
                Subject: "New Contact From Visitors",
                Body: "Name: " + document.getElementById("name").value +
                    "<br> Email: " + document.getElementById("email").value +
                    "<br> Phone Number: " + document.getElementById("phone").value +
                    "<br> Message: " + document.getElementById("message").value
            }).then(
                message => alert("Message Sent Succesfully")
            );
        }
    </script>
</body>

</html>