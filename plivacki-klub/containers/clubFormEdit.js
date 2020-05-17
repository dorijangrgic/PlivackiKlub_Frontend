import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import ClubFormEditComponent from "../components/clubForm/clubFormEdit";
import { getSingle, update } from "../services/API";
import CustomModal from "../components/modal/modal";
import Router from "next/router";

const ClubFormEditContainer = ({ clubId }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [clubData, setClubData] = useState({});
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = data => {
    console.log("Submit", data);
    update(data, "clubs", clubId)
      .then(res => {
        console.log("Response container", res);
        Router.push("/clubs");
        return res;
      })
      .catch(err => console.log(err));
  };

  const getClub = () => {
    getSingle("clubs", clubId)
      .then(res => {
        if (res.status === 401 || res.status === 403)
          Router.push("/users/login");
        else return res.json();
      })
      .then(res => {
        if (res.message) {
          setShowModal(true);
          setModalMessage(res.message);
        } else {
          setClubData(res);
        }
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    if (clubId) {
      getClub();
    }
  }, [clubId]);

  return (
    <>
      <ClubFormEditComponent
        clubData={clubData}
        register={register}
        handleSubmit={handleSubmit}
        errors={errors}
        onSubmit={onSubmit}
      />
      <CustomModal showModal={showModal} modalMessage={modalMessage} />
    </>
  );
};

export default ClubFormEditContainer;
