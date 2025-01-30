import { assets } from "../assets/assets";

export default function Footer() {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/*..........Left Section.................*/}
        <div>
          <img className="w-40" src={assets.logo} alt="" />
          <p className=" w-full md:w-2/3 text-gray-600 leading-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consequatur necessitatibus officia eveniet. Quos quasi similique,
            deleniti odit sed ut accusantium nostrum, tenetur eveniet esse
            consectetur porro, cum iste maxime quidem.
          </p>
        </div>
        {/*..........Center Section.................*/}
        <div>
          <p className=" text-xl font-medium mb-5">Compnay</p>
          <ul className=" flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About Us</li> 
            <li>Contect Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        {/*..........Right Section.................*/}
        <div>
          <p className=" text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className=" flex flex-col gap-2 text-gray-600">
            <li>+-12545 778 4554 </li>
            <li>gratestack@gmai.com</li>
          </ul>
        </div>
      </div>
      {/*..........CopyRight Text.................*/}
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          CopyRight 2024@HEALTHBuddy - All Right Reserved
        </p>
      </div>
    </div>
  );
}
