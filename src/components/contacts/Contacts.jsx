import { formData } from "../../data";

const Contacts = () => {
  const {
    formText,
    formHeader,
    formPara,
    fName,
    lName,
    email,
    phone,
    optn,
    optnValue1,
    optnValue2,
    optnValue3,
    tArea,
    terms,
    formBtn,
  } = formData;

  return (
    <>
      <div>
        <form
          action=""
          className="container mx-auto font-roboto py-12 lg:py-24 "
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
                  <label htmlFor="name" className="block mb-1.5">
                    {fName}
                  </label>
                  <input
                    type="text"
                    className="rounded-md border border-purple-800  w-full px-2 py-2 sm:h-[50px]"
                  />
                </div>
                <div>
                  <label htmlFor="" className="block mb-1.5">
                    {lName}
                  </label>
                  <input
                    type="text"
                    className="rounded-md border border-purple-800  w-full px-2 py-2 sm:h-[50px]"
                  />
                </div>
                <div>
                  <label htmlFor="" className="block mb-1.5">
                    {email}
                  </label>
                  <input
                    type="text"
                    className="rounded-md border border-purple-800  w-full px-2 py-2 sm:h-[50px]"
                  />
                </div>
                <div>
                  <label htmlFor="" className="block mb-1.5">
                    {phone}
                  </label>
                  <input
                    type="text"
                    className="rounded-md border border-purple-800  w-full px-2 py-2 sm:h-[50px]"
                  />
                </div>
              </div>
              <div className="mt-4 sm:mt-6">
                <label htmlFor="label" className="block mb-1.5">
                  {optn}
                </label>
                <select
                  name="contact"
                  className="rounded-md border border-purple-800  w-full bg-white h-[44px] sm:h-[50px]"
                >
                  <option value="Lorem">Select one...</option>
                  <option value="Lorem">{optnValue1}</option>
                  <option value="Lorem">{optnValue2}</option>
                  <option value="Lorem">{optnValue3}</option>
                </select>
              </div>
              <div className="mt-4 sm:mt-6">
                <label htmlFor="" className="block mb-1.5">
                  {tArea}
                </label>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Type your message"
                  className="rounded-md border border-purple-800  w-full h-24 py-2 px-2 font-light sm:h-44"
                />
              </div>
              <div className="flex items-center mt-2">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2  "
                />
                <label htmlFor="" className="font-light text-[15px] ml-2">
                  {terms}
                </label>
              </div>
              <div className="mx-auto mt-6 text-center rounded-[4px] bg-purple-800 py-3 px-4 max-w-[100px] text-white text-[12px] sm:max-w-[130px] sm:mt-3 md:text-[14px] md:py-4 md:px-6 md:font-light md:hover:bg-purple-700 cursor-pointer">
                <button>{formBtn}</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contacts;
