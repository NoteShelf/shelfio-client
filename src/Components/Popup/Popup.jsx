import CloseButton from "../Buttons/CloseButton";

const Popup = ({ heading, onClose, children, show, error }) => {
  if (!show) return null;

  return (
    <>
      <section className="absolute left-72 z-10 flex flex-col min-w-96 bg-white border-4 rounded-lg shadow-lg ">
        <div className="flex justify-between border-b rounded-t-lg py-2 px-5">
          <h5 className="font-bold">{heading}</h5>
          <CloseButton onClick={onClose} />
        </div>

        <div className="w-full h-full p-5">{children}</div>

        <p className="text-sm text-red-600">{error}</p>
      </section>

      <div className="fixed inset-0 backdrop-contrast-50 "></div>
    </>
  );
};

export default Popup;
