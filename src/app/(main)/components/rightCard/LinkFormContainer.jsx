import React from 'react';
import LinkForm from '../../LinkForm/LinkForm.jsx';

const LinkFormContainer = () => {
  return (
    <section className="mt-3 p-5 w-full bg-[#FAFAFA] rounded-lg h-[500px] overflow-scroll">
      {/* Render multiple forms */}
      <LinkForm />
      <LinkForm />
      <LinkForm />
    </section>
  );
};

export default LinkFormContainer;
