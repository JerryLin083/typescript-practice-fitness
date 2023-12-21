import { motion } from "framer-motion";
import { usePageContext } from "../context/PageContextProvider";
import { useForm } from "react-hook-form";

import ContactUsPageGraphic from "../assets/ContactUsPageGraphic.png";
import SectionContainer from "../utilities/SectionContainer";
import Title from "../utilities/Title";
import { fadeIn } from "../assets/helper";

const ContactUs = () => {
  const { setCurrentPage } = usePageContext();
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: any) => {
    console.log("form submit");
    const isValid = await trigger();

    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <SectionContainer id="contact" className="mx-auto w-5/6 pb-32 pt-24">
      <motion.div onViewportEnter={() => setCurrentPage("Contact Us")}>
        <motion.div variants={fadeIn({ duration: 0.5 })}>
          <Title>
            <p>
              <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
            </p>
          </Title>
          <p className="my-5">
            Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl
            sapien vel rhoncus. Placerat at in enim pellentesque. Nulla
            adipiscing leo egestas nisi elit risus sit. Nunc cursus sagittis.
          </p>
        </motion.div>

        <div className="mt-10 flex flex-col gap-8 md:flex-row">
          <motion.div
            variants={fadeIn({ duration: 0.5 })}
            className="mt-10 basis-3/5 md:mt-0"
          >
            <form
              method="POST"
              action="https://formsubmit.co/tojija3554@beeplush.com"
              target="_blank"
              onSubmit={onSubmit}
            >
              <input
                type="text"
                placeholder="NAME"
                {...register("name", { required: true, maxLength: 100 })}
                className="mb-4 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white"
              />
              {errors?.name && (
                <p className="mt-1 text-primary-500">
                  {errors.name.type === "required" && "This field is required."}
                  {errors.name.type === "maxLength" &&
                    "maxLength is 100 characters."}
                </p>
              )}

              <input
                type="email"
                placeholder="EMAIL"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
                className="mb-4 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white"
              />
              {errors?.email && (
                <p className="mt-1 text-primary-500">
                  {errors.email.type === "required" &&
                    "This field is required."}
                  {errors.email.type === "pattern" && "Invalid email address"}
                </p>
              )}

              <textarea
                placeholder="MESSAGE"
                rows={4}
                cols={50}
                {...register("name", { required: true, maxLength: 2000 })}
                className="mb-4 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white"
              />
              {errors?.name && (
                <p className="mt-1 text-primary-500">
                  {errors.name.type === "required" && "This field is required."}
                  {errors.name.type === "maxLength" &&
                    "maxLength is 2000 characters."}
                </p>
              )}

              <button
                type="submit"
                className="rounded-md bg-secondary-500 px-8 py-2 transition duration-300 hover:bg-primary-500 hover:text-white"
              >
                Submit
              </button>
            </form>
          </motion.div>

          <motion.div
            variants={fadeIn({ duration: 0.5 })}
            className="relative z-[10] mt-16 basis-2/5 md:mt-0"
          >
            <div className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] md:before:content-evolvetext">
              <img src={ContactUsPageGraphic} alt="contact-us-page-graphic" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </SectionContainer>
  );
};

export default ContactUs;
