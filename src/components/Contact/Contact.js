import Form from "../Form/Form";

const Contact = () => {
  return (
    <section className="container mt-4 m-auto flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <h4 className="text-gray-700 mb-2 font-bold text-lg ">
          send message to me
        </h4>
        <h2 className="text-blue-400 mb-4 text-5xl">Contact Me</h2>
      </div>
      <div>
        <div></div>
        <div>
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Contact;
