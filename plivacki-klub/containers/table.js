import TableComponent from "../components/table/table";
import { getAll, checkUserRole, deleteOne } from "../services/API";
import { useState, useEffect } from "react";
import CustomModal from "../components/modal/modal";
import Router from "next/router";

const TableContainer = ({ name, attributes, actions }) => {
  let userRole;

  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [data, setData] = useState([]);
  const [addNewFlag, setAddNewFlag] = useState(false); // addNewFlag is true if user can add new entity
  const [queryParams, setQueryParams] = useState({
    filter: "",
    offset: "",
    searchAttribute: "",
    searchValue: ""
  });

  // provjera uloge korisnika i omogucivanje akcija
  const checkUserRoleAndActions = () => {
    console.log("User roleId", userRole);

    if (userRole === 3) {
      // swimmer can only READ
      actions.splice(actions.length - 2, actions.length);
      setAddNewFlag(false);
    }
    if (userRole === 2) {
      // coach can READ all and CREATE/EDIT tasks, attendances, notifications and trainings
      if (name === "clubs" || name === "groups" || name === "users") {
        actions.splice(actions.length - 2, actions.length);
      } else {
        setAddNewFlag(true);
      }
    }
    if (userRole === 1) {
      // admin can READ all and CREATE/EDIT clubs, groups, users
      if (
        name === "tasks" ||
        name === "attendances" ||
        name === "notifications" ||
        name === "trainings"
      ) {
        actions.splice(actions.length - 2, actions.length);
      } else {
        setAddNewFlag(true);
      }
    }
  };

  const updateFilterAndPagination = name => data => {
    console.log("Update filter and pagination", name, data.target.value);
    // setQueryParams((queryParams[[name]] = data.target.value));
  };

  const fillData = () => {
    getAll(name, queryParams)
      .then(res => {
        if (res.status === 401 || res.status === 403) {
          Router.push("/users/login");
          throw new Exception("Forbidden call");
        } else {
          // setUserRole(checkUserRole());
          return res.json();
        }
      })
      .then(res => {
        setData(res);
        return res;
      })
      .catch(err => console.log(err));
  };

  const deleteEntity = id => {
    deleteOne(name, id)
      .then(res => {
        console.log("Delete res1", res);
        if (res.status === 401) Router.push("/uses/login");
        else if (res.status === 403) {
          setShowModal(true);
          setModalMessage("You are not authorized for this action");
        } else {
          const newData = data.filter((value, index, arr) => {
            return value.id !== id;
          });
          setData(newData);
        }
      })
      .catch(err => console.log(err));
  };

  const addNew = () => {
    console.log(`Dodajem novi ${name}`);
    Router.push(`/${name}/create`);
  };

  const actionClick = (action, id) => {
    console.log("Akcija", action, id);
    switch (action) {
      case "edit":
        // route na edit formu
        Router.push(`/${name}/${action}/${id}`);
        break;
      case "delete":
        // pozovi delete funkciju
        deleteEntity(id);
        break;
      default:
        // master-detail, route na page za master detail
        Router.push(`/${name}/${id}/${action}`);
        break;
    }
  };

  useEffect(() => {
    userRole = checkUserRole();
    fillData();
    checkUserRoleAndActions();
  }, [queryParams]);

  return (
    <>
      <TableComponent
        attributes={attributes}
        data={data}
        name={name}
        actions={actions}
        queryParams={queryParams}
        updateFilterAndPagination={updateFilterAndPagination}
        addNewFlag={addNewFlag}
        deleteEntity={deleteEntity}
        addNew={addNew}
        actionClick={actionClick}
      />
      <CustomModal
        showModal={showModal}
        setShowModal={setShowModal}
        modalMessage={modalMessage}
      />
    </>
  );
};

export default TableContainer;
