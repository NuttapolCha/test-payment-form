interface DiscountResp {
  code: number;
  message: string;
  data: {
    discount: number;
  };
}

export const getDiscount = async (couponCode: string): Promise<number> => {
  let discount: number = 0;

  const resp = await fetch("http://localhost:3000/api/coupons/" + couponCode, {
    mode: "cors",
  });
  if (resp.status === 404) {
    throw new Error('coupon not found')
  }

  const discountResp: DiscountResp = await resp.json();
  if (discountResp?.code != 0) {
    throw new Error(discountResp.message)
  }

  discount = discountResp.data.discount;
  return discount;
};
