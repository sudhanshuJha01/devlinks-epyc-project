// UpperSection.jsx (Server Component if no interactivity required here)
import AddLinkBtn from "./AddLinkBtn.jsx"; // Client Component
import LinkFormContainer from "./LinkFormContainer.jsx"; // Client Component (if it handles forms)

const UpperSection = () => {
  return (
    <section className="w-full h-[88%] p-10 border-b-2">
      <article className="mb-5">
        <h1 className="text-3xl font-bold text-[#333333] mb-1">
          Customize your links
        </h1>
        <p className="text-base text-[#737373] mt-1">
          Add/edit/remove links below and then share all your profiles with the world!
        </p>
      </article>
      <AddLinkBtn /> {/* Make sure this is a client component */}
      <LinkFormContainer /> {/* Same for LinkFormContainer */}
    </section>
  );
};

export default UpperSection;
