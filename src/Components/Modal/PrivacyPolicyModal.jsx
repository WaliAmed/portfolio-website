import React from "react";

function PrivacyPolicyModal({
  showModal,
  setShowModal,
  PrivacyText,
  PaymentText,
}) {
  return (
    <div
      onClick={() => setShowModal(0)}
      className="w-full h-screen z-50 overflow-y-scroll flex justify-center items-center fixed  top-0 left-0 bg-black/50"
    >
      <div
        className={
          showModal === 1
            ? "w-11/12 lg:w-[60vw] lg:h-[65vh] space-y-10 text-center flex flex-col items-center justify-center py-10 px-5 lg:p-5 border border-gray-200/20 rounded-sm bg-[#2c304d3c] backdrop-blur-md"
            : "w-11/12 lg:w-[65vw] h-[67vh] flex flex-col px-8 py-10 border border-gray-200/20 rounded-sm bg-[#2c304d3c] backdrop-blur-md"
        }
      >
        {showModal === 1 ? (
          <>
            <h1 className="text-[34px] tracking-widest satoshi-medium">
              {PrivacyText[0].title}
            </h1>
            <p className="lg:w-[68%] text-white text-[16px] lg:text-[24px] satoshi-light tracking-widest leading-[28px] lg:leading-[34px]">
              {PrivacyText[0].desc}
            </p>
          </>
        ) : (
          <>
            <h1 className="text-[24px] pb-3 tracking-widest satoshi-medium">
              {PaymentText[0].title}
            </h1>

            <span className="pl-4">
              <li className=" list-disc text-white text-[14px] satoshi-light tracking-widest leading-[34px]">
                {PaymentText[0].point1}
              </li>

              <li className=" list-disc text-white text-[14px] satoshi-light tracking-widest leading-[34px]">
                {PaymentText[0].point2}
              </li>
            </span>

            <h1 className="text-[14px] pt-3 pb-2 tracking-widest satoshi-medium">
              BANK TRANSFER
            </h1>

            <h2 className="text-[13px] tracking-widest satoshi-light">
              Bank Name: {PaymentText[0].bankName}
            </h2>

            <h2 className="text-[13px] tracking-widest satoshi-light">
              Account Name: {PaymentText[0].accountName}
            </h2>

            <h2 className="text-[13px] tracking-widest satoshi-light">
              Account Name: {PaymentText[0].iban}
            </h2>

            <h1 className="text-[14px] pt-3 pb-2 tracking-widest satoshi-medium">
              EASYPAISA / JAZZCASH
            </h1>

            <h2 className="text-[13px] tracking-widest satoshi-light">
              Account Name: {PaymentText[0].epAccountName}
            </h2>

            <h2 className="text-[13px] tracking-widest satoshi-light">
              Phone Number: {PaymentText[0].phoneNumber}
            </h2>

            <span className="pl-4">
              <li className=" list-disc text-white text-[14px] satoshi-light tracking-widest leading-[34px]">
                {PaymentText[0].desc}
              </li>
            </span>

            <h1 className="text-[14px] pt-3 pb-2 tracking-widest satoshi-medium">
              REFUND POLICY
            </h1>
            <span className="pl-4">
              <li className=" list-disc text-white text-[14px] satoshi-light tracking-widest leading-[34px]">
                {PaymentText[0].rPoint1}
              </li>

              <li className=" list-disc text-white text-[14px] satoshi-light tracking-widest leading-[34px]">
                {PaymentText[0].rPoint2}
              </li>
            </span>
          </>
        )}
      </div>
    </div>
  );
}

export default PrivacyPolicyModal;
