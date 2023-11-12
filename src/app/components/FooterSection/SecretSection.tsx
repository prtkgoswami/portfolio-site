import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import "./index.css";

type SecretSectionProps = {};

const SecretSection = ({}: SecretSectionProps): React.ReactElement => {
  const [shouldShowSecret, toggleSecret] = useState<boolean>(false);
  const [secretInputStr, setSecretInputStr] = useState<string>("");
  const [alphaArr, setAlphaArr] = useState<string[]>([]);
  let secretStr: string[] = [];

  const shuffleArray = (array: number[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  const checkSecretString = () => {
    if (secretStr.join("") === "prnk") {
      toggleSecret(true);
      deactivateFooter();
    }
    secretStr = [];
  };

  const activateFooter = () => {
    const chars = document.querySelectorAll(".alphas");
    // subscribe event
    chars.forEach((div) => {
      div.addEventListener("click", handleOnClick);
    });
  };
  const deactivateFooter = () => {
    const chars = document.querySelectorAll(".alphas");
    // unsubscribe event
    chars.forEach((div) => {
      div.removeEventListener("click", handleOnClick);
    });
  };

  const handleOnClick = (e: any) => {
    e.stopImmediatePropagation();

    if (!shouldShowSecret) {
      e.target.removeEventListener("click", handleOnClick);
      e.target.classList.add("active");
      const char = e.target.innerText;
      secretStr = [...secretStr, char.toLowerCase()];
      setSecretInputStr(secretStr.join(""));

      if (secretStr.length === 4) {
        setTimeout(() => checkSecretString(), 2000);
      }

      setTimeout(() => {
        e.target.addEventListener("click", handleOnClick);
        e.target.classList.remove("active");
      }, 2000);
    }
  };

  useEffect(() => {
    const offsetArr = shuffleArray([
      ...Array.from({ length: 26 }, (_, index) => index),
    ]);
    const alphaList = offsetArr.map((offset) =>
      String.fromCharCode(65 + offset)
    );
    setAlphaArr(alphaList);

    return () => {
      deactivateFooter();
    };
  }, []);

  useEffect(() => {
    if (!shouldShowSecret) {
      activateFooter();
    }
  }, [alphaArr]);

  useEffect(() => {
    if (shouldShowSecret) {
      setTimeout(() => {
        toggleSecret(false);
        setSecretInputStr("");
        activateFooter();
      }, 2000);
    }
  }, [shouldShowSecret]);

  return (
    <div id="secret-section">
      {(secretInputStr.length > 0 || shouldShowSecret) && (
        <div id="secret-string">
          {shouldShowSecret ? (
            <p>Hi Priyanka!</p>
          ) : (
            <p id="secret-input">{secretInputStr}</p>
          )}
        </div>
      )}
      <div id="secret-alpha">
        {alphaArr.map((alpha, idx) => (
          <div className="alphas" key={idx}>
            {alpha}
          </div>
        ))}
        <div
          onClick={() => {
            secretStr = [];
            if (!shouldShowSecret) {
              setSecretInputStr(secretStr.join(""));
            }
          }}
        >
          <FontAwesomeIcon icon={faClose} />
        </div>
      </div>
    </div>
  );
};

export default SecretSection;
