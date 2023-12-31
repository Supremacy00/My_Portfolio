import { socialMediaIcons } from "../../data"

export const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12 lg:py-16 font-roboto">
      <div className="container mx-auto px-4 sm:max-w-[825px] lg:px-6 lg:max-w-[1120px] xl:px-0 xl:max-w-[1300px]">
        <div className="flex justify-between items-center text-[16px] md:text-[18px]">
        <h1 className="text-purple-700 font-bold cursor-pointer">
              Abdul<span>Muqaddas</span>
            </h1>
          <div className="flex items-center gap-5 text-[16px] md:text-xl">
          {socialMediaIcons.map((item) => (
            <div key={item.id}>{item.icon}</div>
          ))}
          </div>
        </div>
        <div className="text-center mt-10 text-[15px] md:text-[17px]">
          <h3>Made with 💖 by Abdulmuqaddas</h3>
        </div>
      </div>
    </footer>
    
  )
}
