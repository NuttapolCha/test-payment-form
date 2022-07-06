interface DiscountResp {
  code: number;
  message: string;
  data: {
    discount: number;
  };
}

export const getDiscount = async (couponCode: string): Promise<number> => {
  let discount: number = 0;

  await fetch("http://localhost:3000/api/coupons/" + couponCode)
    .then((resp) => {
      return resp.json();
    })
    .then((wrappedData: DiscountResp) => {
      discount = wrappedData.data.discount;
    });

  return discount;
};
