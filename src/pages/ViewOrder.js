import React, { useEffect } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getOrder} from "../features/auth/authSlice";
const columns = [
  {
    title: "STT",
    dataIndex: "key",
  },
  {
    title: "Hình",
    dataIndex: "image",
  },
  {
    title: "Product Name",
    dataIndex: "name",
  },
  {
    title: "Brand",
    dataIndex: "brand",
  },
  {
    title: "Count",
    dataIndex: "count",
  },
  {
    title: "Amount",
    dataIndex: "amount",
  },
];

const ViewOrder = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const Id = location.pathname.split("/")[3];
  
  
  useEffect(() => {
    dispatch(getOrder(Id));
  }, []);
  const orderState = useSelector((state) => state.auth.order);

  console.log(orderState);
  const data1 = [];
  if(orderState!==undefined){
    for (let i = 0; i < orderState.orderItems.length; i++) {
      data1.push({
        key: i + 1,
        name: orderState.orderItems[i].productId.title,
        brand: orderState.orderItems[i].productId.brand,
        count: orderState.orderItems[i].quantity,
        amount: orderState.orderItems[i].productId.price,
        image: ( <img src={ orderState.orderItems[i].productId.images[0].url } alt="" style={{width:"100px", height:"100px"}} />) ,
      });
    }
  }
  
  return (
    <div>
    
    {orderState!==undefined && <>
      <h3 className="mb-4 title">Chi tiết đơn hàng</h3>
      <div>
          <p>Họ tên: {orderState.user.lastname} {orderState.user.firstname}</p>
          <p>Tổng tiền: {orderState.totalPrice} vnđ</p>
      </div>
      <div>{<Table columns={columns} dataSource={data1} />}</div>
    </> }
     
    </div>
  );
};

export default ViewOrder;
