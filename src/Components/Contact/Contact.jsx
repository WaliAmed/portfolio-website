import FloatingNameTag from "../FloatingNameTag/FloatingNameTag";
import Buttons from "../Buttons/Buttons";
import React from "react";
import toast from "react-hot-toast";

function Contact() {
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const apiUrl = "http://localhost:3001/";

  const SendEmail = () => {
    const cookieValue = getCookieValue("timer"); // Replace 'timer' with your actual cookie name
    const minutesRemaining = cookieValue ? parseInt(cookieValue, 10) : 0;
    if (minutesRemaining <= 0) {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        from_email: email,
        to_email: "iacreativedesigns@iacreative-designs.com",
        subject: "CONTACT US FORM EMAIL",
        text: message,
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch(apiUrl + "form-email", requestOptions)
        .then((response) => response.text())
        .then((result) => {
          if (result === "Email sent successfully") {
            notify();
            setMessage("");
            setEmail("");

            // Set the cookie with a 30-second expiry time
            const expirationDate = new Date();
            expirationDate.setTime(expirationDate.getTime() + 30 * 1000); // 30 seconds in milliseconds
            document.cookie = `timer=30; expires=${expirationDate.toUTCString()}`;
          }
        })
        .catch((error) => console.log("error", error));
    } else {
      error();
    }
  };

  const notify = () => toast.success("Email sent successfully!");
  const error = () => toast.error("Wait 30 seconds to send another email!");
  const customError = (message) => toast.error(message);

  const getCookieValue = (name) => {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith(name + "=")) {
        return cookie.substring(name.length + 1);
      }
    }
    return null;
  };

  return (
    <div className="w-full pb-10 lg:pb-0 border-t lg:border-t-none border-gray-300/70">
      <div className="w-full hidden lg:flex whitespace-nowrap space-x-5 p-3 border border-blue-300/20 backdrop-blur-lg bg-white/10 ">
        <FloatingNameTag />
      </div>

      <div className="w-full flex flex-col lg:flex-row">
        {/* LHS  */}
        <div className="w-full lg:w-1/2 h-[60vh] flex flex-col justify-center items-center text-center lg:text-left text-white/70">
          <span className="w-2/3 flex flex-col justify-center leading-[65px]">
            <p className="text-xs">PROJECT IN MIND ?</p>
            <h3 className="text-white/80 satoshi-light text-[50px]">
              Let&apos;s make your
            </h3>
            <h1 className="text-white/80 satoshi-light-italic text-[80px]">
              design shine
            </h1>

            <p className="text-xs pt-6 leading-5">
              Message us on WhatsApp to place your customized order:
              0332-77844161, or write us an email and click on “send”.
            </p>
          </span>
        </div>

        {/* RHS  */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center text-left text-white/80">
          <span className="w-11/12 pr-2 lg:pr-0 lg:w-2/3 flex flex-col justify-center lg:flex-row lg:items-center space-x-2">
            <label
              htmlFor="Email"
              className="text-xs pb-1 pl-2 lg:pl-0 lg:pb-0 text-white whitespace-nowrap"
            >
              EMAIL ID:
            </label>
            <input
              type="email"
              className="p-1 w-full border border-blue-300/20 backdrop-blur-lg bg-white/10"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="example@gmail.com"
            />
          </span>

          <span className="w-11/12 pr-2 lg:pr-0 lg:w-2/3 flex flex-col justify-center lg:flex-row lg:items-center space-x-2 mt-5">
            <label
              htmlFor="area"
              className="text-xs pb-1 pl-2 lg:pl-0 lg:pb-0 text-white whitespace-nowrap"
            >
              Message:
            </label>
            <textarea
              className="p-1 w-full border border-blue-300/20 backdrop-blur-lg bg-white/10"
              name="message"
              id="message"
              cols="30"
              rows="6"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              placeholder="Please write your message..."
            ></textarea>
          </span>
          <span className="w-11/12 lg:w-2/3 mt-2 lg:mt-5 flex justify-end">
            <Buttons
              ButtonTitle="SEND"
              onClick={() => {
                const emailRegex =
                  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

                if (email === "" || !emailRegex.test(email))
                  customError("Pleae enter a valid email address");
                else if (message === "")
                  customError("Pleae enter your message");
                else SendEmail();
              }}
            />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Contact;
