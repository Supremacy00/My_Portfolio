import { useState } from "react";
import { formData } from "../../data";
import { collection, addDoc } from "firebase/firestore"; // Import Firestore from your Firebase configuration
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
    optn,
    optnValue1,
    optnValue2,
    optnValue3,
    tArea,
    terms,
    formBtn,
  } = formData;

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedTopic, setSelectedTopic] = useState(""); // Separate state for the selected topic
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false); // State to track checkbox

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
    // Removed handling for "topic" here
    if (id === "message") {
      setMessage(value);
    }
  };

  const handleTopicChange = (e) => {
    setSelectedTopic(e.target.value); // Update the selected topic
  };

  const handleCheckboxChange = (e) => {
    setIsCheckboxChecked(e.target.checked); // Update the checkbox state
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if the checkbox is checked before allowing form submission
    if (!isCheckboxChecked) {
      alert("Please check the checkbox before submitting.");
      return;
    }

    // Create a Firebase Firestore document with the user's data
    const docData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      topic: selectedTopic, // Use the selectedTopic state
      message: message,
    };

    try {
      const docRef = await addDoc(collection(db, "contacts"), docData);
      console.log("Document written with ID: ", docRef.id);

      // Clear the form or perform other actions after successful submission
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setSelectedTopic(""); // Clear the selected topic
      setMessage("");
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <>
      <div>
        <form
          action=""
          className="container mx-auto font-roboto py-12 lg:py-24"
          onSubmit={handleSubmit} // Handle form submission
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
                    className="rounded-md border border-purple-800 w-full px-2 py-2 sm:h-[50px]"
                    value={phone}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="mt-4 sm:mt-6">
                <label htmlFor="topic" className="block mb-1.5">
                  {optn}
                </label>
                <select
                  name="topic"
                  id="topic"
                  className="rounded-md border border-purple-800 w-full bg-white h-[44px] sm:h-[50px]"
                  value={selectedTopic} // Use the selectedTopic state
                  onChange={handleTopicChange} // Use handleTopicChange for select
                >
                  <option value="Lorem">Select one...</option>
                  <option value={optnValue1}>{optnValue1}</option>
                  <option value={optnValue2}>{optnValue2}</option>
                  <option value={optnValue3}>{optnValue3}</option>
                </select>
              </div>
              <div className="mt-4 sm:mt-6">
                <label htmlFor="message" className="block mb-1.5">
                  {tArea}
                </label>
                <textarea
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
                <label htmlFor="checkbox" className="font-light text-[15px] ml-2">
                  {terms}
                </label>
              </div>
              {!isCheckboxChecked && (
                <div className="text-red-500 font-medium mt-2">
                  Please check the checkbox before submitting.
                </div>
              )}
              <div className="mx-auto mt-6 text-center rounded-[4px] bg-purple-800 py-3 px-4 max-w-[100px] text-white text-[12px] sm:max-w-[130px] sm:mt-3 md:text-[14px] md:py-4 md:px-6 md:font-light md:hover:bg-purple-700 cursor-pointer">
                <button type="submit">{isSubmitted ? "Submitting..." : formBtn}</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contacts;