import React from "react";
import "./Contacts.scss";
import NavBar from "../NavbarHome/Navbar";
export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { feedback: "", name: "", email: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.sendFeedback = this.sendFeedback.bind(this);
  }

  render() {
    return (
      <div className="contactsMain ">
        <NavBar />
        <div className="contact mt-10 max-w-7xl m-auto">
          <form className="test-mailing md:mt-28">
            <h2 className="text-2xl mt-2 md:text-3xl  text-white font-bold">
              Get in touch!
            </h2>
            <h3 className="mb-4 mt-2  text-gray-200 font-bold">
              Shoot us a message if you have a question.
            </h3>
            <lable className="text-white font-bold">Your name </lable>{" "}
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              value={this.state.name}
              onChange={this.handleChange}
              required
              className="p-4 rounded-lg mb-4 border font-bold focus:border-green-900 focus:outline-none"
            />
            {/* Input field for Email */}
            <lable className="text-white font-bold">Your email </lable>{" "}
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={this.state.email}
              onChange={this.handleChange}
              required
              className="border focus:border-green-900 font-bold focus:outline-none p-4 rounded-lg mb-4"
            />
            <lable className="text-white font-bold">Message </lable>
            <textarea
              type="text"
              name="feedback"
              placeholder="Your Message/Feedback"
              rows="5"
              cols="10"
              value={this.state.feedback}
              onChange={this.handleChange}
              required
              className="p-2 rounded-lg mb-2 border font-bold  focus:border-green-900 focus:outline-none"
            />
            <input
              type="button"
              value="Submit"
              className="btn rounded-lg text-white font-bold cursor-pointer"
              onClick={this.handleSubmit}
            />
          </form>
          <div className="contactUs">
            <h1 className="text-3xl md:mt-28 text-white font-bold ">
              Visit us!{" "}
            </h1>

            <div>
              <h3 className="text-xl  my-5 font-bold md:text-gray-200 ">
                {" "}
                Address
              </h3>
              <div className="flex gap-8 items-center ">
                {" "}
                <a
                  href="https://maps.app.goo.gl/W1m4yRQ6KYDqKKw29"
                  className="text-2xl text-white  hover:text-black"
                >
                  <i class="fa fa-map-marker icon"></i>{" "}
                </a>
                <p className="font-bold text-white">
                  {" "}
                  Addis Ababa, Ethio China St{" "}
                </p>
              </div>
              <h3 className="font-bold text-xl my-5  mt-8 md:text-gray-200 ">
                {" "}
                Call Us
              </h3>
              <div className="flex gap-8 mb-6">
                {" "}
                <a
                  href="#"
                  className="text-2xl text-white hover:text-green-600"
                >
                  <i class="fa-solid fa-phone icon"></i>{" "}
                </a>
                <p className="font-bold text-white"> +0912345679 </p>
              </div>
              <hr />
            </div>
            <h3 className="text-xl px-8 text-center mt-12 font-bold text-gray-300">
              Follow us on social media to see our latest work
            </h3>
            <ul>
              <li>
                <a href="#">
                  <i class="fa-solid fa-phone icon"></i>{" "}
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fab fa-instagram icon"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fab fa-tiktok icon"></i>
                </a>
              </li>
              <li>
                {" "}
                <a href="mailto:mail@gmail.com" target="_blank" class="side">
                  <i class="fa-solid fa-envelope icon"></i>
                </a>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit() {
    const templateId = "template_e8miylj"; // Replace 'template_id' with your actual template ID
    this.sendFeedback(templateId, {
      message: this.state.feedback,
      from_name: this.state.name,
      reply_to: this.state.email,
    });
  }

  sendFeedback(templateId, variables) {
    const serviceId = "service_zj26u3z";
    window.emailjs
      .send(serviceId, templateId, variables)
      .then((res) => {
        console.log("Email successfully sent!");
      })
      .catch((err) =>
        console.error(
          "Oh well, you failed. Here some thoughts on the error that occurred:",
          err
        )
      );
  }
}
