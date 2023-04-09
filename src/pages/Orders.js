import React, { useEffect} from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { BsSearch } from "react-icons/bs";
import { getOrders, orderStatus } from "../features/auth/authSlice";
import { Link } from "react-router-dom";
import { BiEdit } from "react-icons/bi";
const columns = [
  {
    title: "STT",
    dataIndex: "key",
  },
  {
    title: "Khách hàng",
    dataIndex: "name",
  },
  {
    title: "Chi tiết",
    dataIndex: "product",
  },
  {
    title: "Tổng tiền thanh toán",
    dataIndex: "amount",
  },
  {
    title: "Ngày đặt hàng",
    dataIndex: "date",
  },
  {
    title: "Trạng thái",
    dataIndex: "orderStatus",
  }
];
const Orders = () => {
  const dispatch = useDispatch();
  const update = (value) => {
    dispatch(orderStatus({id:value,status:"Đã xử lý"}))
    dispatch(getOrders());
  };
  useEffect(() => {
    dispatch(getOrders());
  }, []);
  const orderState = useSelector((state) => state.auth.orders);
  console.log(orderState)
  const data1 = [];
  
  for (let i = 0; i < orderState.length; i++) {
    data1.push({
      key: i + 1,
      name: orderState[i].user.firstname,
      product: (
        <Link to={`/admin/orders/${orderState[i]._id}`}>
         <BsSearch/> Xem chi tiết
        </Link>
      ),
      amount: orderState[i].totalPrice,
      date: new Date(orderState[i].createdAt).toLocaleString(),
      orderStatus: (<Link
                    to={`/admin/orders`}
                    className=" fs-3 text-danger"
                    onClick={() => update(orderState[i]._id)}
                     >
                    <BiEdit /> {orderState[i].orderStatus}
                    </Link>
     ),
    });
  }
  return (
    <div>
      <h3 className="mb-4 title">DANH SÁCH ĐƠN HÀNG</h3>
      <div>{<Table columns={columns} dataSource={data1} />}</div>
    </div>
  );
};

export default Orders;
