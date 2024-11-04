const Button = ({ variant, text }) => {
  const variants = {
    primary: "bg-brand text-white hover:bg-indigo-500",
    secondary: "text-gray-900 font-semibold py-2",
  };

  return <button className={`px-3 text-sm rounded-md inline-flex items-center gap-1 ${variants[variant] || ""}`}>{text}</button>;
};

export default Button;
