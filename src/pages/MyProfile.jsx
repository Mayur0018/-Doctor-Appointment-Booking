import { useState } from "react";
import { assets } from "../assets/assets";

export default function MyProfile() {
  const [userData, SetUserData] = useState({
    name: "Edward Vincent",
    image: assets.profile_pic,
    email: "richardjameswap@gmail.com",
    Phone: "+1 123 456 7890",
    Address: {
      line1: "57th Cross, Richmond ",
      line2: "Circle, Church Road, London",
    },
    gender: "Male",
    dob: "2000-01-20",
  });

  const [isEdit, setIsEdit] = useState(true);
  return (
    <div className="max-w-lg flex flex-col gap-2 text-sm">
      <img className="w-36 rounded" src={userData.image} alt="" />
      {isEdit ? (
        <input
          className="bg-gray-50 text-3xl font-medium max-w-60 mt-4"
          type="text"
          value={userData.name}
          onChange={(e) =>
            SetUserData((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      ) : (
        <p className="font-medium text-3xl text-neutral-800 mt-4">
          {userData.name}
        </p>
      )}
      <hr className="bg-zinc-400 h-[1px]  border-none" />
      <div>
        <p className=" text-neutral-500 underline mt-3">CONTACT INFORMATION</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          <p className=" font-medium">Email id:</p>
          <p className="text-blue-500">{userData.email}</p>
          <p className=" font-medium">Phone:</p>
          {isEdit ? (
            <input
              className="bg-gray-100 max-52"
              type="text"
              value={userData.Phone}
              onChange={(e) =>
                SetUserData((prev) => ({ ...prev, Phone: e.target.value }))
              }
            />
          ) : (
            <p className=" text-blue-400">{userData.Phone}</p>
          )}
          <p className=" font-medium">Address:</p>
          {isEdit ? (
            <p>
              <input
                className=" bg-gray-50"
                type="text"
                onChange={(e) =>
                  SetUserData((prev) => ({
                    ...prev,
                    Address: { ...prev.Address, line1: e.target.value },
                  }))
                }
                value={userData.Address.line1}
              />
              <input
                className=" bg-gray-50"
                type="text"
                onChange={(e) =>
                  SetUserData((prev) => ({
                    ...prev,
                    Address: { ...prev.Address, line2: e.target.value },
                  }))
                }
                value={userData.Address.line2}
              />
            </p>
          ) : (
            <p className="text-gray-500">
              {userData.Address.line1}
              <br />
              {userData.Address.line2}
            </p>
          )}
        </div>
      </div>
      <div>
        <p className="text-neutral-500 underline mt-3">BASIC INFORMATION</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 text-neutral-700">
          <p className="font-medium">Gender:</p>
          {isEdit ? (
            <select
              className="max-w-20 bg-gray-100"
              onSubmit={(e) =>
                SetUserData((prev) => ({ ...prev, gender: e.target.value }))
              }
              value={userData.gender}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          ) : (
            <p className=" text-gray-400">{userData.gender}</p>
          )}
          <p className=" font-medium">BirthDay</p>
          {isEdit ? (
            <input
            className=" max-w-28 bg-gray-100"
              type="date"
              onChange={(e) =>
                SetUserData((prev) => ({ ...prev, dob: e.target.value }))
              }
              value={userData.dob}
            />
          ) : (
            <p className=" text-gray-400">{userData.dob}</p>
          )}
        </div>
        <div className="mt-10">
          {isEdit ? (
            <button className=" border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all" onClick={() => setIsEdit(false)}>Save Information</button>
          ) : (
            <button className=" border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all"  onClick={() => setIsEdit(true)}>Edit</button>
          )}
        </div>
      </div>
    </div>
  );
}
