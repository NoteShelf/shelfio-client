import React from "react";

import { useBookCtx } from "../../Contexts/BookCtx";
import AddButton from "../Buttons/AddButton";

const CreateNote = ({ bookId }) => {
  const { createNote } = useBookCtx();

  const createBtnHandler = async () => {
    const payload = { title: "", book_id: bookId, content: "" };

    await createNote(payload);
  };

  return (
    <div className="relative flex w-full">
      <div className="flex w-full items-center justify-between space-x-2 border-b py-2">
        <h5 className="font-semibold text-xs">Notes</h5>
        <AddButton onClick={() => createBtnHandler()} title="Add Note" />
      </div>

      {/* <Popup
        heading="Create Note"
        show={showPopup}
        onClose={() => setShowPopup(false)}
        error={errorMsg}
      >
        <div className="flex flex-col w-full space-y-5">
          <Input
            onChange={(e) => setNoteName(e.target.value)}
            label="Note Name"
          />

          <Button onClick={createBtnHandler} name="Create" />
        </div>
      </Popup> */}
    </div>
  );
};

export default CreateNote;
