import { Link } from "react-router";
import { specialityData } from "../assets/assets";
export default function SpecialityMenu() {
  return (
    <div
      className=" flex flex-col items-center py-16 gap-4 text-gray-800"
      id="#speciality"
    >
      <h1 className=" text-3xl font-medium">Find By Speciality</h1>
      <p className="sm:w-1/3 text-center text-sm">
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
        dignissimos vel eligendi saepe. Fuga, voluptatum ipsa vero praesentium
        earum quas impedit odio corporis id cum atque molestias cupiditate hic
        et?
      </p> 
      <div className=" flex sm:justify-center gap-4 pt-5 w-full overflow-scroll">
        {specialityData.map((item, index) => (
          <Link
            onClick={scrollTo(0,0)}
            key={index}
            to={`/docters/${item.speciality}`}
            className="flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500"
          >
            <img className="w-16 sm:w-24 mb-2" src={item.image} alt="" />
            <p>{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
