import React, { useState, useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import InputMask from "react-input-mask"; // Ensure this package is installed
import '../../style/landlord/landlord.css'


export default function AadharVerification() {
  const { control, handleSubmit } = useForm();
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const [otpError, setOtpError] = useState(null);
  const [otpVisible, setOtpVisible] = useState(false);
  const otpBoxReference = useRef([]);

  const onSubmit = (data) => {
    const otpValue = Math.floor(1000 + Math.random() * 9000);
    setOtp(otpValue.toString().split(""));
    setOtpVisible(true);
  };

  const handleChange = (value, index) => {
    let newArr = [...otp];
    newArr[index] = value;
    setOtp(newArr);
    if (value && index < 3) {
      otpBoxReference.current[index + 1].focus();
    }
  };

  const handleBackspaceAndEnter = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      otpBoxReference.current[index - 1].focus();
    }
    if (e.key === "Enter" && e.target.value && index < 3) {
      otpBoxReference.current[index + 1].focus();
    }
  };

  React.useEffect(() => {
    if (otp.join("") !== "" && otp.join("") !== "1234") {
      setOtpError("❌ Wrong OTP Please Check Again");
    } else {
      setOtpError(null);
    }
  }, [otp]);

return (
    <div className="submain">
      <h3>Verification-I</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <div className="form__group">
          <Controller
            name="aadharNumber"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <>
                <InputMask
                  {...field}
                  mask="9999"  //9999 9999 9999 for 12 digit
                  maskChar=""
                  placeholder=""
                  className="form__field"
                />
                <label htmlFor="aadhar" className="form__label">
                  Last 4 digit of Aadhar number:
                </label>
              </>
            )}
          />
        </div>
        <div className="form__group">
          <Controller
            name="mobileNumber"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <>
                <InputMask
                  {...field}
                  mask="9999999999"
                  maskChar=""
                  placeholder=""
                  className="form__field"
                />
                <label htmlFor="mobno" className="form__label">
                Contact No :
                </label>
              </>
            )}
          />
        </div>
        <button type="submit">Send OTP</button>
        {otpVisible && (
          <div className="otp-container">
            <label>Enter OTP:</label>
            <div className="otp-fill">
              {otp.map((digit, index) => (
                <input
                  type="text"
                  value={digit}
                  onChange={(e) => handleChange(e.target.value, index)}
                  onKeyDown={(e) => handleBackspaceAndEnter(e, index)}
                  ref={(ref) => (otpBoxReference.current[index] = ref)}
                  key={index}
                />
              ))}
            </div>
            {otpError && <div className="error-message">{otpError}</div>}
          </div>
        )}
      </form>
    </div>
  );
}

