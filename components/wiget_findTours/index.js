import React, { useState } from "react";
import Input from "./input_typeTour";
import Calendar from "./input_calendar";

function WigetFindTours() {
  const [storeCountry, setStoreCountry] = useState({
    country: {
      select: "",
      textPlaceholder: "Выберите страну",
    },
  });

  const [storeType, setStoreType] = useState({
    type: {
      select: "",
      textPlaceholder: "Тип тура",
    },
  });

  

  function getUserSelectCountry(value) {
    // получаю выбор страны

    if (value == storeCountry.country.textPlaceholder) {
      setStoreCountry({
        country: {
          select: "",
          textPlaceholder: value,
        },
      });
    } else
      setStoreCountry({
        country: {
          select: value,
          textPlaceholder: value,
        },
      });
  }

  function getUserSelectTypeTour(value) {
    if (value == storeCountry.country.textPlaceholder) {
      setStoreType({
        type: {
          select: "",
          textPlaceholder: value,
        },
      });
    } else
      setStoreType({
        type: {
          select: value,
          textPlaceholder: value,
        },
      });
  }

  return (
    <div className="wiget_findTout">
      <Input
        getUserSelect={getUserSelectCountry}
        type={"country"}
        name={storeCountry.country.textPlaceholder}
      />
      <Input
        getUserSelect={getUserSelectTypeTour}
        type={"type"}
        name={storeType.type.textPlaceholder}
      />
      {/* <Calendar name={datePanel} /> */}
    </div>
  );
}

export default WigetFindTours;
