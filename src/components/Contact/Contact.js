import Form from "../Form/Form";
import { MdOutlineEmail } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import ContactOption from "./ContactOption";

const data = [
  {
    icon: <MdOutlineEmail />,
    title: "Email",
    desc: "shahramkhaleh2001@gmail.com",
    link: "mailto:shahramkhaleh2001@gmail.com",
    btnText: "send a Message to me",
  },
  {
    icon: <FaTelegramPlane />,
    title: "telegram",
    desc: "my telegram account",
    link: "https://t.me/s010102h",
    btnText: "contact in telegram",
  },

  {
    icon: <BsWhatsapp />,
    title: "whatsapp",
    desc: "+98914 204 3244",
    link: "https://wa.me/qr/7KAHX26GCII3O1",
    btnText: "call to me",
  },
];

const Contact = () => {
  return (
    <section id="contactUs" className="container w-full  mt-4 m-auto flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <h4 className="text-gray-700 mb-2 font-bold text-lg ">
          send message to me
        </h4>
        <h2 className="text-blue-400 mb-4 text-5xl">Contact Me</h2>
      </div>
      <div className="grid  gap-y-4  grid-cols-1 p-2 md:gap-x-4 md:grid-cols-5">
        <div className="flex flew order-2 md:col-span-2 md:order-1  flex-1 px-2 flex-col justify-center items-center gap-4 mb-4">
          {data.map((item) => {
            return <ContactOption key={item.title} item={item} />;
          })}
        </div>
        <div className="flex order-1 md:col-span-3  md:order-2 flex-1">
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Contact;
