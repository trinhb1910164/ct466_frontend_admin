import React, { useEffect } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../features/cutomers/customerSlice";
const columns = [
  {
    title: "STT",
    dataIndex: "key",
  },
  {
    title: "Họ và tên",
    dataIndex: "name",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Địa chỉ",
    dataIndex: "address",
  },
];

const Customers = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  const customerstate = useSelector((state) => state.customer.customers);
  const data1 = [];
  let j =0;
  for (let i = 0; i < customerstate.length; i++) {
    if (customerstate[i].role !== "admin") {
      j++;
      data1.push({
        key: j,
        name: customerstate[i].firstname + " " + customerstate[i].lastname,
        email: customerstate[i].email,
        mobile: customerstate[i].address,
      });
    }
  }

  return (
    <div>
      <h3 className="mb-4 title">DANH SÁCH KHÁCH HÀNG</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default Customers;
