import { useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  modalMessage: string;
  status?: "Loading" | "success" | "error";
  onClose: () => void;
  duration?: number;
}

export default function Modal({
  isOpen,
  modalMessage,
  status = "Loading",
  onClose,
  duration = 2000,
}: ModalProps) {
  useEffect(() => {
    if(isOpen && status !== "Loading"){
      const timer = setTimeout(() => onClose(), duration);
      return () => clearTimeout(timer);
    }
  }, [isOpen, status, duration, onClose]);

  if(!isOpen) return null;

  const getStatusColor = () => {
    switch (status) {
      case "success":
        return "bg-green-500";
      case "error":
        return "bg-red-500";
      default:
        return "bg-blue-500";
    }
  };

  return (
    <div className="glass w-full inset-0 flex items-center justify-center bg-black/5 z-50">
      <div className="bg-white p-6 rounded-2xl shadow-xl flex flex-col items-center w-80">
        <div className={`w-10 h-10 flex items-center rounded-full text-white mb-3 ${getStatusColor}`}>
          {status === "Loading" ? "⏳" : status === "success" ? "✅" : "❌"}
        </div>
        <p className="text-gray-800 text-center">{modalMessage}</p>

      </div>

    </div>
  )



}