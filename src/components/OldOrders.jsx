import OldOrdersData from "./Orders.json";
import "./OldOrders.css";

const OldOrders = () => {

  const PrevOrders = OldOrdersData.Orders;

  return (
    <div className="old-orders-container">
      <div className="old-orders-header">
        geçmiş siparişler
      </div>
      <div className="old-orders-list-container">
        <div className="old-orders-list">
          {PrevOrders.map((item) => {
            if (item.teslimAldi) {
              return (
                <div className="old-orders-item" key={item.id}>
                  <div className="old-orders-item-id">{item.id}</div>
                  <div className="old-orders-item-customer">{item.musteriAdi}</div>
                  <div className="old-orders-item-kategori">{item.kategori}</div>
                  <div className="old-orders-item-price">{item.fiyat}₺</div>
                  <div className="old-orders-item-time">{item.siparisTarihi}</div>
                </div>
              )
            }
          })}

        </div>
      </div>
    </div>
  )
}

export default OldOrders
