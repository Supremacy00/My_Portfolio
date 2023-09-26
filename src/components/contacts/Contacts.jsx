import { useState } from "react";
import { formData } from "../../data";
import { collection, addDoc } from "firebase/firestore";
import { db } from "/src/FirebaseConfig.js";

const Contacts = () => {
  const {
    formText,
    formHeader,
    formPara,
    fName,
    lName,
    eml,
    phoneN,
    tArea,
    terms,
    formBtn,
  } = formData;

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "firstName") {
      setFirstName(value);
    }
    if (id === "lastName") {
      setLastName(value);
    }
    if (id === "email") {
      setEmail(value);
    }
    if (id === "phone") {
      setPhone(value);
    }
    if (id === "message") {
      setMessage(value);
    }
  };

  const handleCheckboxChange = (e) => {
    setIsCheckboxChecked(e.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const docData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      message: message,
    };

    try {
      await addDoc(collection(db, "Contacts"), docData);

      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setMessage("");

      setIsSubmitted(true);
      setIsSubmitting(false);

      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);

      
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  const handleClick = () => {
    if (isCheckboxChecked) {
      handleSubmit()
    } else {
      setIsCheckboxChecked(false)
    }
  }

  return (
    <>
      <div>
        <form
          action=""
          className="container mx-auto font-roboto py-12 lg:py-24"
          onSubmit={handleSubmit}
        >
          <div className="px-3.5 sm:mx-auto sm:max-w-[700px] md:max-w-[750px] md:px-6 lg:px-0">
            <div className="text-center mb-8 sm:mb-11">
              <p className="text-[16px] mb-1">{formText}</p>
              <h1 className="mb-3 text-[28px] font-medium lg:text-[30px] xl:text-[35px]">
                {formHeader}
              </h1>
              <p>{formPara}</p>
            </div>
            <div>
              <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 sm:gap-y-6">
                <div>
                  <label htmlFor="firstName" className="block mb-1.5">
                    {fName}
                  </label>
                  <input
                    type="text"
                    required
                    id="firstName"
                    className="rounded-md border border-purple-800 w-full px-2 py-2 sm:h-[50px]"
                    value={firstName}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block mb-1.5">
                    {lName}
                  </label>
                  <input
                    type="text"
                    required
                    id="lastName"
                    className="rounded-md border border-purple-800 w-full px-2 py-2 sm:h-[50px]"
                    value={lastName}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-1.5">
                    {eml}
                  </label>
                  <input
                    type="text"
                    required
                    id="email"
                    className="rounded-md border border-purple-800 w-full px-2 py-2 sm:h-[50px]"
                    value={email}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block mb-1.5">
                    {phoneN}
                  </label>
                  <input
                    type="text"
                    id="phone"
                    required
                    className="rounded-md border border-purple-800 w-full px-2 py-2 sm:h-[50px]"
                    value={phone}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="mt-4 sm:mt-6">
                <label htmlFor="message" className="block mb-1.5">
                  {tArea}
                </label>
                <textarea
                  required
                  name=""
                  id="message"
                  cols="30"
                  rows="10"
                  placeholder="Type your message"
                  className="rounded-md border border-purple-800 w-full h-24 py-2 px-2 font-light sm:h-44"
                  value={message}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex items-center mt-2">
                <input
                  type="checkbox"
                  
                  name="checkbox"
                  id="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                  onChange={handleCheckboxChange}
                  checked={isCheckboxChecked}
                />
                <label
                  htmlFor="checkbox"
                  className="font-light text-[15px] ml-2"
                >
                  {terms}
                </label>
              </div>
              
              <div className="mx-auto mt-6 text-center rounded-[4px] bg-purple-800 py-3 px-4 max-w-[100px] text-white text-[12px] sm:max-w-[130px] sm:mt-3 md:text-[14px] md:py-4 md:px-6 md:font-light md:hover:bg-purple-700 cursor-pointer">
                <button type="submit" onClick={handleClick}>
                  {isSubmitting ? "Submitting..." : formBtn}
                </button>
              </div>
              {isSubmitted && (
                <div>
                  <h1 className="text-green-700 mt-8 text-center">
                    Form Submitted Successfully
                  </h1>
                </div>
              )}
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contacts;
