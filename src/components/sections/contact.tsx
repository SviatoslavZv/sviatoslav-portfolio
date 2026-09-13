import dynamic from "next/dynamic";

const ContactForm = dynamic(() =>
    import("@/components/shared/contact-form").then((mod) => mod.ContactForm)
);

export function Contact() {
    return (
        <section id="contact" className="mx-auto max-w-xl px-6 py-24">
            <h2 className="text-center text-3xl font-semibold tracking-tight">
                Get in Touch
            </h2>
            <p className="mt-4 text-center text-muted-foreground">
                Open to full-time roles and freelance projects — big or small.
            </p>
            <div className="mt-10">
                <ContactForm />
            </div>
        </section>
    );
}