import { useEffect, useCallback } from 'react';

export default function Modal({ isOpen, onClose, children }) {
  // Close when ESC key is pressed
  const handleEscClose = useCallback(
    (e) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // disable scroll
      window.addEventListener('keydown', handleEscClose);
    } else {
      document.body.style.overflow = 'auto'; // enable scroll
    }

    return () => {
      window.removeEventListener('keydown', handleEscClose);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, handleEscClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Background Overlay (Click to Close) */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Box */}
      <div
        className="relative bg-white rounded-lg shadow-xl w-[90%] max-w-xl p-8 animate-fadeIn"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-black text-xl"
          onClick={onClose}
        >
          ×
        </button>

        {children}
      </div>
    </div>
  );
}
