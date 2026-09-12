"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { contactFormSchema, type ContactFormValues } from "@/lib/schemas";

type SubmitStatus = "idle" | "success" | "error";

export function ContactForm() {
    const [status, setStatus] = useState<SubmitStatus>("idle");

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<ContactFormValues>({
        resolver: zodResolver(contactFormSchema),
    });

    const onSubmit = async (data: ContactFormValues) => {
        setStatus("idle");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
                    subject: "New message from portfolio contact form",
                    ...data,
                }),
            });

            const result = await response.json();

            if (result.success) {
                setStatus("success");
                reset();
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
            <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                    id="name"
                    {...register("name")}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                    <p id="name-error" className="text-sm text-destructive">
                        {errors.name.message}
                    </p>
                )}
            </div>

            <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                    id="email"
                    type="email"
                    {...register("email")}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                    <p id="email-error" className="text-sm text-destructive">
                        {errors.email.message}
                    </p>
                )}
            </div>

            <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                    id="message"
                    rows={5}
                    {...register("message")}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                />
                {errors.message && (
                    <p id="message-error" className="text-sm text-destructive">
                        {errors.message.message}
                    </p>
                )}
            </div>

            <Button type="submit" disabled={isSubmitting} className="w-full">
                {isSubmitting ? "Sending..." : "Send Message"}
            </Button>

            <div aria-live="polite" className="min-h-5 text-sm">
                {status === "success" && (
                    <p className="text-emerald-600 dark:text-emerald-400">
                        Thanks! Your message has been sent — I&apos;ll get back to you soon.
                    </p>
                )}
                {status === "error" && (
                    <p className="text-destructive">
                        Something went wrong. Please try again or email me directly.
                    </p>
                )}
            </div>
        </form>
    );
}