const Container = ({ children, heading, subHeading }) => {
  return (
    <section
      className={`w-1/3 max-lg:w-[90%] h-[88%] max-md:h-[90%] p-5  lg:p-7  lg:py-9 rounded-lg shadow-lg bg-[#f4f2f2] `}
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
