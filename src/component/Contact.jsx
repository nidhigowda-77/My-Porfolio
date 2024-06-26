import React from "react";

export const Contact = () => {
  const data =[{logo:"mail",text:"nidhigowdathelabailu2@gmail.com"},
  {logo:"logo-whatsapp",text:"8762515726"},
  {logo:"location",text:"Bengaluru"}]
  return (
    <section id="contact" className="py-10 px-3 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Get In Touch</p>
        <div className="mt-16 md:p-6 p-2 flex md:flex-row flex-col overflow-auto gap-6 max-w-5xl bg-gray-800 rounded-lg mx-auto">
          <form className="flex flex-col flex-1 gap-5" action="">
            <input type="text" placeholder="Your Name" />
            <input type="text" placeholder="Your Email Address"/>
            <textarea rows={10} placeholder="Your Message"></textarea>
            <button className="btn-primary w-fit">Send Message</button>
          </form>
          <div className="flex  flex-col gap-7 ">
            {data.map((val,i)=>(
              <div id={i} className="flex  gap-4 w-fit items-center">
              <div className="min-w-[3.5rem] min-h-[3.5rem] text-3xl flex items-center justify-center text-white bg-cyan-600 rounded-full">
                <ion-icon name={val.logo}></ion-icon>
              </div>
              <p className="text-xs sm:text-lg ">{val.text}</p>
            </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
