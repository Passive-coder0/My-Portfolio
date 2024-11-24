import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CONTACT } from "../constants";

export default function Contact() {
  return (
    <div className="border-b border-neutral-900 pb-10">
      <h2 className="my-8 text-center text-4xl">Get in Touch</h2>
      <div className="text-center tracking-tighter">
        <p className="my-4">{CONTACT.address}</p>
        <p className="my-4 ">{CONTACT.phoneNo}</p>
        <a href="#" className="border-b ">
          {CONTACT.email}
        </a>
        <div className="flex justify-center items-center my-6 text-5xl gap-6">
          <a
            href="#"
            className="inline-flex items-center justify-center text-white p-2 text-2xl rounded-full bg-blue-900 transition-transform duration-500 ease-in-out transform hover:rotate-[360deg] hover:scale-110 hover:drop-shadow-[0_0_10px_rgb(50,120,225)]"
          >
            <FaLinkedin />
          </a>
          <a
            href="#"
            className="text-3xl bg-gradient-to-r from-purple-700 via-pink-700 to-red-700
        text-white p-1 rounded-full transition-transform duration-500   ease-in-out transform hover:rotate-[360deg] hover:scale-110 hover:drop-shadow-[0_0_10px_rgb(128,55,207)]"
          >
            <FaGithub></FaGithub>
          </a>
        </div>
      </div>
    </div>
  );
}
