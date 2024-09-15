import React, { useState } from "react";

import Button from "../Buttons/Button";
import Popup from "../Popup/Popup";
import Input from "../Inputs/Input";
import { useBookCtx } from "../../Contexts/BookCtx";

const CreateBook = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [bookName, setBookName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { createBook } = useBookCtx();

  const createBtnHandler = async () => {
    setIsLoading(true);

    const payload = { title: bookName };

    await createBook(payload);

    setIsLoading(false);
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
      >
        <div className="flex flex-col w-full space-y-5">
          <Input
            autoFocus={true}
            onChange={(e) => setBookName(e.target.value)}
            label="Book Name"
          />

          <Button
            disable={!bookName}
            onClick={createBtnHandler}
            name="Create"
            isLoading={isLoading}
          />
        </div>
      </Popup>
    </div>
  );
};

export default CreateBook;
