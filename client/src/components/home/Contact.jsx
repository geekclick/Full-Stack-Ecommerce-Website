import contactImg from "@/assets/contact.png";
import { Button } from "../ui/button";
function Contact() {
  return (
    <section className="bg-[#FCFFD1] flex justify-between items-center w-full p-10">
      <div className="flex flex-1">
        <img src={contactImg} alt="" />
      </div>
      <div className="flex-1 flex flex-col justify-center items-start space-y-8">
        <h3 className="text-xl">For large orders</h3>
        <h1 className="text-8xl">Place a bulk order with us</h1>
        <p className="font-medium">
          Whether you want to place a large customised order for a single item
          or a large assortment of multiple craft products, we can sort it out
          for you! For years we have also worked on custom orders for our
          clients – it is one of the many benefits of having direct
          relationships with our artisans. Just drop us a note!
        </p>
        <div className="flex justify-around items-center w-full">
          <Button>Learn More</Button>
          <Button variant="outline" className="">
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Contact;
