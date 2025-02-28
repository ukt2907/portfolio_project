import AboutHeading from "./AboutHeading";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (  
    <>
    <div className="border relative px-8 py-8 mt-40 rounded-2xl">
        <div className="flex flex-col   items-center justify-center gap-6 w-full">
            <div className="text-center  ">
            <AboutHeading
             heading="Let's create something amazing together"
             brief="Ready to bring your next project to life? Let's connect and discuss how can I help you  achieve your goals"/>
            </div>
            <div>
              <ContactForm/>
            </div>
        </div>
    </div>
    </>
  )
}
