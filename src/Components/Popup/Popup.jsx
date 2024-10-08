import CloseButton from "../Buttons/CloseButton";

const Popup = ({ heading, onClose, children, show }) => {
  if (!show) return null;

  return (
    <>
      <section className="absolute left-72 z-20 flex flex-col min-w-96 bg-white border-4 rounded-lg shadow-lg ">
        <div className="flex justify-between border-b rounded-t-lg py-2 px-5">
          <h5 className="font-bold">{heading}</h5>
          <CloseButton onClick={onClose} />
        </div>

        <div className="w-full h-full p-5">{children}</div>
      </section>

      <div className="fixed inset-0 backdrop-contrast-50 z-10"></div>
    </>
  );
};

export default Popup;
