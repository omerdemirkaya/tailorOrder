import { useState } from "react";
import "./Orders.css";
import initialOrdersData from "./Orders.json";

const Orders = () => {
  const [orders, setOrders] = useState(initialOrdersData.Orders);

  const handleProc = (id) => {
    setOrders((prevOrders) => 
      prevOrders.map((item) => {
        if (item.id === id) {
          if (item.siparisDurumu && !item.teslimAldi) {
            return { ...item, siparisDurumu: false, teslimAldi: true };
          } else if (!item.siparisDurumu && !item.teslimAldi) {
            return { ...item, siparisDurumu: true };
          }
        }
        return item;
      })
    );
  };

  return (
    <div className="order-container">
      <div className="header">siparişlerim</div>
      <div className="orders-content">
        <div className="hazir">
          <div className="hazir-header">
            Hazır Olanlar
          </div>
          <div className="hazir-content">
            {orders.filter(item => item.siparisDurumu && !item.teslimAldi).map((item) => (
              <div className="order-item" key={item.id}>
                <div className="order-item-id">{item.id}</div>
                <div className="order-item-customer">{item.musteriAdi}</div>
                <div className="order-item-category">{item.kategori}</div>
                <div className="order-item-price">{item.fiyat} ₺</div>
                <div className="order-item-time">{item.siparisTarihi}</div>
                <div className="order-item-proc">
                  <button onClick={() => handleProc(item.id)}>+</button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="islemde">
          <div className="islemde-header">
            İşlemde Olanlar
          </div>
          <div className="islemde-content">
            {orders.filter(item => !item.siparisDurumu && !item.teslimAldi).map((item) => (
              <div className="order-item" key={item.id}>
                <div className="order-item-id">{item.id}</div>
                <div className="order-item-customer">{item.musteriAdi}</div>
                <div className="order-item-category">{item.kategori}</div>
                <div className="order-item-price">{item.fiyat}₺</div>
                <div className="order-item-time">{item.siparisTarihi}</div>
                <div className="order-item-proc">
                  <button onClick={() => handleProc(item.id)}>+</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
