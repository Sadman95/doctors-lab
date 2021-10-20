import React, { useEffect, useState } from "react";
import Department from "./Department/Department";

const Departments = () => {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    fetch("/dept_data/dept_data.json")
      .then((res) => res.json())
      .then((data) => setDepartments(data));
  }, []);
  return (
  <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-8">
      {
          departments.map((department, i) => <Department key={i} department={department}></Department>)
      }
  </div>);
};

export default Departments;
