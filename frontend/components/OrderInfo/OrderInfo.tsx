import styles from "./OrderInfo.module.css";
import Button from "../UI/Button/Button";

declare interface Item {
  name: string;
  amount: number;
  price: number;
}

declare interface OrderInfoProps {
  selectedItems: Item[];
  couponCode: string;
  discount: number;
  setCouponInfo: (e: any) => void;
}

const OrderInfo = (props: OrderInfoProps) => {
  const { selectedItems, couponCode, discount, setCouponInfo } = props;

  const removeCouponHandler = (e: any) => {
    setCouponInfo({
      couponCode: "",
      discount: 0,
    });
  };

  return (
    <>
      <li>
        {selectedItems.map((e: Item) => (
          <ul key={e.name}>{`${e.name} x${e.amount} ${e.price} ฿`}</ul>
        ))}
      </li>
      <div className={styles["coupon-attach"]}>
        {couponCode && (
          <>
            <p>{`coupon: ${couponCode} discount: -${discount} ฿`}</p>
            <Button btnType="submit" label="remove" onClickHandler={removeCouponHandler}/>
          </>
        )}
      </div>
    </>
  );
};

export default OrderInfo;
