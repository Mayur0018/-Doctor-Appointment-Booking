import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/appContext";
import { useNavigate } from "react-router";
export default function ReletedDoctors({ docId, speciality }) {
  const { doctors } = useContext(AppContext);
  const navigate = useNavigate();
  const [relDec, SetReletedDocs] = useState([]);

  useEffect(() => {
    if (doctors.length > 0 && speciality) {
      const doctorsData = doctors.filter(
        (doc) => doc.speciality === speciality && doc._id !== docId
      );
      SetReletedDocs(doctorsData);
    }
  }, [doctors, speciality, docId]);
  return (
    <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
      <h1 className="text-3xl font-medium">Top Doctors To Book</h1>
      <p className="sm:w-1/3 text-center text-sm">
        Simply browse through our extensive list of trusted doctors
      </p>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-auto gap-4 pt-5 px-3 sm:px-0">
        {relDec.slice(0, 5).map((item, index) => (
          <div
            onClick={() => {
              navigate(`/Appointment/${item._id}`);
              scroll(0, 0);
            }}
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
      <button
        onClick={() => {
          navigate("/docters");
          scroll(0, 0);
        }}
        className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-colors"
      >
        More
      </button>
    </div>
  );
}
