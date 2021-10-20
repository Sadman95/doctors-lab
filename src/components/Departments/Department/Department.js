import React from "react";
import './Departments.css'

const Department = ({ department }) => {
  const { dept_img, title } = department;
  return (
    <div id='dept' className="col border-2 p-2 border-gray-300 rounded-md">
      <div>
        <img style={{height: 300, width: 600, borderRadius: 10}} src={dept_img} alt="" />
      </div>
      <h4 className='font-bold text-indigo-900 pt-4'>{title}</h4>
    </div>
  );
};

export default Department;
