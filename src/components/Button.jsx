const Button = ({ children, onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className="px-4 py-2 text-xs md:text-base bg-stone-700 text-stone-400 hover:bg-text-stone-600 hover:text-stone-100 rounded-md"
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
