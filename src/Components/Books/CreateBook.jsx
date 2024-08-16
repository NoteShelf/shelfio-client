import React, { useState } from "react";

import Button from "../Buttons/Button";
import Popup from "../Popup/Popup";
import Input from "../Inputs/Input";
import { useBookCtx } from "../../Contexts/BookCtx";

const CreateBook = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [bookName, setBookName] = useState("");

  const { createBook, errorMsg } = useBookCtx();

  const createBtnHandler = async () => {
    const payload = { title: bookName };

    await createBook(payload);

    setShowPopup(false);
  };

  return (
    <div className="relative flex w-full">
      <Button
        onClick={() => setShowPopup(true)}
        name="Create Book +"
        type="secondary"
      />

      <Popup
        heading="Create Book"
        show={showPopup}
        onClose={() => setShowPopup(false)}
        error={errorMsg}
      >
        <div className="flex flex-col w-full space-y-5">
          <Input
            onChange={(e) => setBookName(e.target.value)}
            label="Book Name"
          />

          <Button onClick={createBtnHandler} name="Create" />
        </div>
      </Popup>
    </div>
  );
};

export default CreateBook;
