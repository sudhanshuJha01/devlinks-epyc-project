const Container = ({ children, heading, subHeading, className }) => {
  return (
    <section
      className={`w-1/3 max-lg:w-full h-[88%]  p-4 py-7 md:p-10  rounded-lg shadow-lg bg-[#f4f2f2]  ${className}`}
    >
      <article className="mb-6">
        <h1 className="text-3xl font-bold text-[#333333] mb-1">{heading}</h1>
        <p className="text-base text-[#737373] mt-2">{subHeading}</p>
      </article>
      {children}
    </section>
  );
};

export default Container;
