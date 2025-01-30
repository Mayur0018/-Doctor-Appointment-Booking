import { useParams } from "react-router-dom";
import { AppContext } from "../context/appContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Docters() {
  const { speciality } = useParams();
  const navigate = useNavigate();
  const [FilterDoctors, SetFilterDoctors] = useState([]);
  const [showfilter, setShowfilters] = useState(false);

  const { doctors } = useContext(AppContext);

  const appfilter = () => {
    if (speciality) {
      SetFilterDoctors(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      SetFilterDoctors(doctors);
    }
  };

  useEffect(() => {
    appfilter();
  }, [doctors, speciality]);
  return (
    <div className="">
      <p className=" text-gray-600">Browse Through The Doctors Specialist</p>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        <button
          className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${
            showfilter ? "bg-primary text-white" : " "
          }`}
          onClick={() => setShowfilters(prv => !prv)}
        >
          Filter
        </button>
        <div className={`flex flex-col gap-4 text-sm text-gray-600 ${showfilter ? "flex" : "hidden md:flex"}`}>
          <p
            onClick={() =>
              speciality === "General physician"
                ? navigate("/docters")
                : navigate("/docters/General physician")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300  rounded transition-all cursor-pointer ${
              speciality === "General physician"
                ? "bg-indigo-100 text-black"
                : ""
            }`}
          >
            General physician
          </p>
          <p
            onClick={() =>
              speciality === "Dermatologist"
                ? navigate("/docters")
                : navigate("/docters/Dermatologist")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300  rounded transition-all cursor-pointer ${
              speciality === "Dermatologist" ? "bg-indigo-100 text-black" : ""
            }`}
          >
            Dermatologist
          </p>
          <p
            onClick={() =>
              speciality === "Pediatricians"
                ? navigate("/docters")
                : navigate("/docters/Pediatricians")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300  rounded transition-all cursor-pointer ${
              speciality === "Pediatricians" ? "bg-indigo-100 text-black" : ""
            }`}
          >
            Pediatricians
          </p>
          <p
            onClick={() =>
              speciality === "Neurologist"
                ? navigate("/docters")
                : navigate("/docters/Neurologist")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300  rounded transition-all cursor-pointer ${
              speciality === "Neurologist" ? "bg-indigo-100 text-black" : ""
            }`}
          >
            Neurologist
          </p>
          <p
            onClick={() =>
              speciality === "Gastroenterologist"
                ? navigate("/docters")
                : navigate("/docters/Gastroenterologist")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300  rounded transition-all cursor-pointer ${
              speciality === "Gastroenterologist"
                ? "bg-indigo-100 text-black"
                : ""
            }`}
          >
            Gastroenterologist
          </p>
        </div>

        <div className=" w-full grid grid-cols-auto gap-4 gap-y-6">
          {FilterDoctors.map((item, index) => (
            <div
              onClick={() => navigate(`/Appointment/${item._id}`)}
              className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-transform duration-500"
              key={index}
            >
              <img className="bg-blue-50" src={item.image} alt={item.name} />

              <div className="p-4">
                <div className="flex items-center gap-2 text-sm text-green-500">
                  <span className="w-2 h-2 bg-geen-500 rounded-full"></span>
                  <p>Available</p>
                </div>
                <p className="text-gray-900 text-lg font-medium">{item.name}</p>
                <p className="text-sm text-gray-600">{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
