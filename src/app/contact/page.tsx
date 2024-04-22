import ContactForm from "@/app/_components/contact/ContactForm";

export default function ContactPage() {
  return (
    <main className="flex flex-col items-center space-y-4 bg-accent p-20">
      <div className="text-center text-black ">
        <h1 className="text-5xl font-bold">Contact Us</h1>
      </div>
      <div className="hero">
        <div className="hero-content flex-col xl:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold">
              We&apos;d love to hear from you!
            </h1>
            <p className="py-6">
              We&apos;re just a few questions away from getting in touch. Fill
              out the form to ask us anything, or just tell us what&apos;s on
              your mind!
            </p>
          </div>

          <div className="min-w-xl card w-full max-w-2xl shrink-0 bg-base-100 shadow-2xl xl:card-side">
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  );
}
