import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { getUserCards } from "../../../redux/slices/dashboard/dashboardThunks";
import HeaderText from "./headerText";
import Notification from "../../../components/Notification";
import Loader from "../../../components/loader";
import { ICard } from "../../../interfaces";
import Card from "../../../components/card";

const UserCards = () => {
  
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const { data, loading, error } = useAppSelector((state) => state.dashboard.cards);

  const [userCards, setUserCards] = useState<ICard[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    dispatch(getUserCards());
  }, [dispatch]);
  
  useEffect(() => {
    if (data) {
      setUserCards(data);
    }
  }, [data]);
  
  useEffect(() => {
    if (error) {
      setErrorMessage(error);
    }
  }, [error]);

  if (loading) {
    return <Loader />
  }

  return (
    <>
      {errorMessage && <Notification message={errorMessage} isError />}
      {userCards?.map((card, index) => (
        <div className="w-[320px] lg:w-full shrink-0 lg:shrink" key={`usercard-${index}`}>
          <HeaderText
            fontSize={card?.type?.toLowerCase() === "premium" ? 22 : 17}
            bottom={card?.type?.toLowerCase() === "premium" ? 5 : 30}
            text={card?.type?.toLowerCase() === "premium" ? "My Card" : "See All"}
            classes={card?.type?.toLowerCase() !== "premium" ? "flex lg:justify-end" : ""}
            onClick={card?.type?.toLowerCase() === "premium" ? undefined : () => navigate("/credit-cards")}
          />
          <div className="rounded-lg">
            <Card
              key={`usercard-${index}`}
              balance={card?.balance}
              name={card?.name}
              expiryDate={card?.expiryDate}
              number={card?.number}
              type={card?.type}
            />
          </div>
        </div>
      ))}
    </>
  )
}

export default UserCards;