import { useState } from 'react';
import { cn } from '../../utils/cn';
import { Eye, EyeOff } from 'lucide-react'; // You can also use Heroicons or any icon lib

export default function Input({ label, id, type = 'text', className, ...props }) {
  const [showPassword, setShowPassword] = useState(false);
  const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');
  const isPassword = type === 'password';

  return (
    <div className="relative w-full">
      <input
        id={inputId}
        type={isPassword && showPassword ? 'text' : type}
        placeholder=" "
        className={cn(
          'peer w-full h-9 border border-gray-606060 text-gray-606060 px-4 pr-10 rounded-0 outline-none hover:border-gray-404040 focus:border-primary-400 transition-all duration-200',
          className
        )}
        {...props}
      />

      {label && (
        <label
          htmlFor={inputId}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-606060 text-sm transition-all duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-606060 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs peer-focus:text-primary-400 bg-white px-1"
        >
          {label}
        </label>
      )}

      {isPassword && (
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors cursor-pointer"
          tabIndex={-1}
        >
          {showPassword ? (
            <Eye className="w-4 h-4" />
          ) : (
            <EyeOff className="w-4 h-4" />
          )}
        </button>
      )}
    </div>
  );
}
