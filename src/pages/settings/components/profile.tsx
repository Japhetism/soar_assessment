import { useState } from "react";
import Input from "../../../components/input";
import Loader from "../../../components/loader";
import ErrorComponent from "../../../components/Error";
import EDIT_SVG from "../../../assets/icons/edit";
import UserImage from "../../../assets/images/user.png";
import { IProfile } from "../../../interfaces";
import { defaultProfileValues } from "../../../constants";

const Profile: React.FC = () => {

  const [formData, setFormData] = useState<IProfile>(defaultProfileValues);

  return (
    <>
      <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-20 items-center lg:items-start">
        <div className="relative flex-shrink-0 mb-6 lg:mb-0 flex justify-center">
          <img src={UserImage} alt="" className="w-[90px] h-[90px] rounded-full" />
          <div className="absolute bottom-0 right-0 flex justify-center items-center bg-[#232323] w-[30px] h-[30px] rounded-full">
            <EDIT_SVG />
          </div>
        </div>

        <div className="flex flex-col space-y-6 w-full">
          <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6 w-full">
            <div className="flex-1">
              <Input
                label="Your Name"
                placeholder="Your Name"
                value={formData?.name}
                onChange={(e) => setFormData({ ...formData, name: e } as IProfile)}
              />
            </div>
            <div className="flex-1">
              <Input
                label="User Name"
                placeholder="User Name"
                value={formData?.username}
                onChange={(e) => setFormData({ ...formData, username: e } as IProfile)}
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6 w-full">
            <div className="flex-1">
              <Input
                label="Email"
                placeholder="Email"
                value={formData?.email}
                onChange={(e) => setFormData({ ...formData, email: e } as IProfile)}
              />
            </div>
            <div className="flex-1">
              <Input
                type="password"
                label="Password"
                placeholder="Password"
                value={formData?.password}
                onChange={(e) => setFormData({ ...formData, password: e } as IProfile)}
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6 w-full">
            <div className="flex-1">
              <Input
                label="Date of Birth"
                placeholder="Date of Birth"
                value={formData?.dateOfBirth}
                onChange={(e) => setFormData({ ...formData, dateOfBirth: e } as IProfile)}
              />
            </div>
            <div className="flex-1">
              <Input
                label="Present Address"
                placeholder="Present Address"
                value={formData?.presentAddress}
                onChange={(e) => setFormData({ ...formData, presentAddress: e } as IProfile)}
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6 w-full">
            <div className="flex-1">
              <Input
                label="Permanent Address"
                placeholder="Permanent Address"
                value={formData?.permanentAddress}
                onChange={(e) => setFormData({ ...formData, permanentAddress: e } as IProfile)}
              />
            </div>
            <div className="flex-1">
              <Input
                label="City"
                placeholder="City"
                value={formData?.city}
                onChange={(e) => setFormData({ ...formData, city: e } as IProfile)}
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6 w-full">
            <div className="flex-1">
              <Input
                label="Postal Code"
                placeholder="Postal Code"
                value={formData?.postalCode}
                onChange={(e) => setFormData({ ...formData, postalCode: e } as IProfile)}
              />
            </div>
            <div className="flex-1">
              <Input
                label="Country"
                placeholder="Country"
                value={formData?.country}
                onChange={(e) => setFormData({ ...formData, country: e } as IProfile)}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-end mt-10">
        <button className="bg-[#232323] w-[190px] h-[50px] text-[#FFFFFF] text-lg rounded-[15px] ml-auto hover:bg-[#396AFF]">
          Save
        </button>
      </div>
    </>
  );
};

export default Profile;
