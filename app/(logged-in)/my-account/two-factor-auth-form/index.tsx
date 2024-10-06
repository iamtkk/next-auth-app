"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

type Props = {
  twoFactorActivated: boolean;
};

const TwoFactorAuthForm = ({ twoFactorActivated }: Props) => {
  const [isActivated, setIsActivated] = useState(twoFactorActivated);
  const [step, setStep] = useState(1);

  const handleEnableClick = async () => {
    setStep(2);
  };

  return (
    <div>
      {!isActivated && (
        <div>
          {step === 1 && (
            <Button onClick={handleEnableClick}>
              Enable Two-Factor Authentication
            </Button>
          )}
          {step === 2 && <div>display qr code</div>}
        </div>
      )}
    </div>
  );
};
export default TwoFactorAuthForm;
