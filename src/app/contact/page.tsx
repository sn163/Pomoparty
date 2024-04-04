import ContactForm from "../_components/ContactForm";

export default function ContactPage() {
  return (
    <main>
      <div className="xl:text-top text-center">
        <h1 className="text-5xl font-bold">Contact Us</h1>
      </div>
      <div className="hero bg-base-200">
        <div className="hero-content xl:flex-col">
          <div className="min-w-xl card w-full max-w-2xl shrink-0 bg-base-100 shadow-2xl xl:card-side">
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  );
}
