"use client";
import Dashboard from "./_components/Dashboard";

export default function Home() {
  const toggleModal = () => {
    const htmlModal = document.getElementById(
      "settings_modal"
    ) as HTMLDialogElement;
    htmlModal.showModal();
  };

  return (
    <main className="flex min-h-screen flex-col items-center space-y-10 p-24">
      <button
        className="btn btn-primary text-white border-2 shadow-md"
        onClick={toggleModal}
      >
        Timer Settings
      </button>
      <dialog id="settings_modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click outside to close</p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      <Dashboard startHr={1} startMin={0} startSec={1} />
    </main>
  );
}
