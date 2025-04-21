import { useEffect, useRef, useState } from "react";
import Input from "../../../components/input";
import Loader from "../../../components/loader";
import Notification from "../../../components/Notification";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { getProfile, updateProfile } from "../../../redux/slices/profile/profileThunks";
import EDIT_SVG from "../../../assets/icons/edit";
import UserImage from "../../../assets/images/user.png";
import { IProfile } from "../../../interfaces";
import { profileSchema } from "../../../schemas";
import { defaultProfileValues } from "../../../constants";

const Profile: React.FC = () => {

  const dispatch = useAppDispatch();
  const { data: profile, loading, error } = useAppSelector((state) => state.profile); 

  const fileInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState<IProfile>(defaultProfileValues);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [userImage, setUserImage] = useState<string>(UserImage);

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  useEffect(() => {
    if (profile) {
      setFormData(profile);
    }
  }, [profile]);

  useEffect(() => {
    if (error) {
      setErrorMessage(error);
    }
  }, [error]);

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormErrors({});

    const result = profileSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0]; 
        if (typeof field === "string") {
          fieldErrors[field] = err.message;
        }
      });
      setFormErrors(fieldErrors);
      return;
    }

    try {
      await dispatch(updateProfile(formData)).unwrap();
      setSuccessMessage("Profile updated successfully ✅");
      setTimeout(() => setSuccessMessage(""), 3000);
    } catch (err) {
      console.error("Update failed", err);
      setErrorMessage(`Update profile failed ${err}`);
    }
  };

  const handleSelectImage = () => {
    fileInputRef.current?.click();
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUserImage(imageUrl);
    }
  };

  if (loading) {
    return <Loader />
  }

  return (
    <>
      <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-20 items-center lg:items-start">
        <div className="relative flex-shrink-0 mb-6 lg:mb-0 flex justify-center">
          <img src={userImage} alt="" className="w-[90px] h-[90px] rounded-full" />
          <div onClick={() => handleSelectImage()} className="absolute bottom-0 right-0 flex justify-center items-center bg-[#232323] w-[30px] h-[30px] rounded-full">
            <EDIT_SVG />
          </div>
        </div>

        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleImageChange}
          style={{ display: "none" }}
        />

        <div className="flex flex-col space-y-6 w-full">
          {errorMessage && <Notification message={errorMessage} isError />}
          {successMessage && <Notification message={successMessage} />}
          <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6 w-full">
            <div className="flex-1">
              <Input
                label="Your Name"
                placeholder="Your Name"
                value={formData?.name}
                error={formErrors?.name}
                onChange={(e) => setFormData({ ...formData, name: e } as IProfile)}
              />
            </div>
            <div className="flex-1">
              <Input
                label="User Name"
                placeholder="User Name"
                value={formData?.username}
                error={formErrors?.username}
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
                error={formErrors?.email}
                onChange={(e) => setFormData({ ...formData, email: e } as IProfile)}
              />
            </div>
            <div className="flex-1">
              <Input
                type="password"
                label="Password"
                placeholder="Password"
                value={formData?.password}
                error={formErrors?.password}
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
                error={formErrors?.dateOfBirth}
                onChange={(e) => setFormData({ ...formData, dateOfBirth: e } as IProfile)}
              />
            </div>
            <div className="flex-1">
              <Input
                label="Present Address"
                placeholder="Present Address"
                value={formData?.presentAddress}
                error={formErrors?.presentAddress}
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
                error={formErrors?.permanentAddress}
                onChange={(e) => setFormData({ ...formData, permanentAddress: e } as IProfile)}
              />
            </div>
            <div className="flex-1">
              <Input
                label="City"
                placeholder="City"
                value={formData?.city}
                error={formErrors?.city}
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
                error={formErrors?.postalCode}
                onChange={(e) => setFormData({ ...formData, postalCode: e } as IProfile)}
              />
            </div>
            <div className="flex-1">
              <Input
                label="Country"
                placeholder="Country"
                value={formData?.country}
                error={formErrors?.country}
                onChange={(e) => setFormData({ ...formData, country: e } as IProfile)}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-end mt-10">
        <button
          onClick={(e) => handleUpdateProfile(e)}
          className="bg-[#232323] w-[190px] h-[50px] text-[#FFFFFF] text-lg rounded-[15px] ml-auto hover:bg-[#396AFF]"
        >
          Save
        </button>
      </div>
    </>
  );
};

export default Profile;
