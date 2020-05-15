import TableComponent from "../components/table/table";
import { getAll, checkUserRole } from "../services/API";
import { useState, useEffect } from "react";
import Router from "next/router";

const TableContainer = ({ name, attributes, actions }) => {
  let userRole;

  const [data, setData] = useState([]);
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
    }
    if (userRole === 2) {
      // coach can READ all and CREATE/EDIT tasks, attendances, notifications and trainings
      if (name === "clubs" || name === "groups" || name === "users") {
        actions.splice(actions.length - 2, actions.length);
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

  useEffect(() => {
    userRole = checkUserRole();
    fillData();
    checkUserRoleAndActions();
  }, [queryParams]);

  return (
    <TableComponent
      attributes={attributes}
      data={data}
      name={name}
      actions={actions}
      queryParams={queryParams}
      updateFilterAndPagination={updateFilterAndPagination}
    />
  );
};

export default TableContainer;
