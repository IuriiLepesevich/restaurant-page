function checkElements(form) {
  const inputs = form.querySelectorAll(".form-input");
  inputs.forEach((elem) => {
    if (!elem.checkValidity()) {
      elem.classList.add("invalid");
    } else {
      elem.classList.remove("invalid");
    }
  });
}

function createEndMessage() {
  document.querySelector(".contact-form").remove();

  const endMessage = document.createElement("div");
  endMessage.classList.add("end-message");
  endMessage.textContent = "Thank You!";

  document.querySelector("#content").appendChild(endMessage);
}

function checkForm(e) {
  e.preventDefault();
  checkElements(this);
  if (this.checkValidity()) createEndMessage();
}

function createNameInput() {
  const nameHolder = document.createElement("div");
  nameHolder.classList.add("name-holder");
  const nameLabel = document.createElement("label");
  nameLabel.setAttribute("for", "name");
  nameLabel.textContent = "Name*";
  nameHolder.appendChild(nameLabel);
  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.classList.add("form-input");
  nameInput.setAttribute("id", "name");
  nameInput.setAttribute("required", "true");
  nameHolder.appendChild(nameInput);
  return nameHolder;
}
function createPhoneInput() {
  const phoneHolder = document.createElement("div");
  phoneHolder.classList.add("phone-holder");
  const phoneLabel = document.createElement("label");
  phoneLabel.setAttribute("for", "phone");
  phoneLabel.textContent = "Phone*";
  phoneHolder.appendChild(phoneLabel);
  const phoneInput = document.createElement("input");
  phoneInput.type = "tel";
  phoneInput.classList.add("form-input");
  phoneInput.setAttribute("id", "phone");
  phoneInput.setAttribute("required", "true");
  phoneHolder.appendChild(phoneInput);

  return phoneHolder;
}
function createMailInput() {
  const mailHolder = document.createElement("div");
  mailHolder.classList.add("mail-holder");
  const mailLabel = document.createElement("label");
  mailLabel.setAttribute("for", "mail");
  mailLabel.textContent = "E-Mail*";
  mailHolder.appendChild(mailLabel);
  const mailInput = document.createElement("input");
  mailInput.type = "email";
  mailInput.classList.add("form-input");
  mailInput.setAttribute("id", "mail");
  mailInput.setAttribute("required", "true");
  mailHolder.appendChild(mailInput);

  return mailHolder;
}
function createTextInput() {
  const textHolder = document.createElement("div");
  textHolder.classList.add("contact-text-holder");
  const textLabel = document.createElement("label");
  textLabel.setAttribute("for", "text");
  textLabel.textContent = "Write us*";
  textHolder.appendChild(textLabel);
  const textInput = document.createElement("textarea");
  textInput.classList.add("form-input");
  textInput.setAttribute("id", "text");
  textInput.setAttribute("maxlength", "750");
  textInput.setAttribute("required", "true");
  textHolder.appendChild(textInput);

  return textHolder;
}

function createButton() {
  const buttonHolder = document.createElement("div");
  buttonHolder.classList.add("button-holder", "center");
  const submitButton = document.createElement("input");
  submitButton.type = "submit";
  submitButton.classList.add("submit");
  buttonHolder.appendChild(submitButton);

  return buttonHolder;
}

export default function createContact() {
  if (document.querySelector("#content")) {
    document.querySelector("#content").remove();
  }
  const content = document.createElement("div");
  content.classList.add("center");
  content.setAttribute("id", "content");

  const contactForm = document.createElement("form");
  contactForm.classList.add("contact-form");
  contactForm.setAttribute("novalidate", "true");

  contactForm.appendChild(createNameInput());

  contactForm.appendChild(createPhoneInput());

  contactForm.appendChild(createMailInput());

  contactForm.appendChild(createTextInput());

  contactForm.appendChild(createButton());

  contactForm.addEventListener("submit", checkForm);

  content.appendChild(contactForm);

  return content;
}
