import { useForm } from "react-hook-form";
import Router from "next/router";
import UserFormEditComponent from "../components/userForm/userFormEdit";
import { useState, useEffect } from "react";
import { getAll, getSingle, update } from "../services/API";
import CustomModal from "../components/modal/modal";

// container for Create user
const UserFormEditContainer = ({ userId }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [groups, setGroups] = useState([]);
  const [userData, setUserData] = useState({});
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = data => {
    console.log("Submit edit", data);
    update(data, "users", userId)
      .then(res => {
        console.log("Response container", res);
        Router.push("/users");
        return res;
      })
      .catch(err => console.log(err));
  };

  const getUser = () => {
    console.log("user id", userId);

    getSingle("users", userId)
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
          setUserData(res);
        }
      })
      .catch(err => console.log(err));
  };

  const fillGroups = () => {
    getAll("groups", {})
      .then(res => {
        if (res.status === 401 || res.status === 403) {
          Router.push("/users/login");
          throw new Exception("Forbidden call");
        } else {
          return res.json();
        }
      })
      .then(res => {
        setGroups(res);
        return res;
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    // fetch all groups
    if (userId) {
      getUser();
    }
    fillGroups();
  }, [userId]);

  return (
    <>
      <UserFormEditComponent
        register={register}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        errors={errors}
        groups={groups}
        userData={userData}
      />
      <CustomModal
        message={modalMessage}
        setShowModal={setShowModal}
        showModal={showModal}
      />
    </>
  );
};

export default UserFormEditContainer;
