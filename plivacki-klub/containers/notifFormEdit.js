import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { getSingle, update } from "../services/API";
import CustomModal from "../components/modal/modal";
import NotifFormEditComponent from "../components/notifForm/notifFormEdit";
import Router from "next/router";

const NotifFormEditContainer = ({ notifId }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [notifData, setNotifData] = useState({});
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = data => {
    console.log("Submit", data);
    update(data, "notifications", notifId)
      .then(res => {
        console.log("Response container", res);
        Router.push("/notifications");
        return res;
      })
      .catch(err => console.log(err));
  };

  const getNotif = () => {
    getSingle("notifications", notifId)
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
          setNotifData(res);
        }
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    if (notifId) {
      getNotif();
    }
  }, [notifId]);

  return (
    <>
      <NotifFormEditComponent
        notifData={notifData}
        register={register}
        handleSubmit={handleSubmit}
        errors={errors}
        onSubmit={onSubmit}
      />
      <CustomModal showModal={showModal} modalMessage={modalMessage} />
    </>
  );
};

export default NotifFormEditContainer;
