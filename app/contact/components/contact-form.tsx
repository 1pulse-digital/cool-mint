"use client"

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";
import { sendContactEmail } from "../actions";
import { SendEmailRequest } from "@/lib/fusion/workshop/email.service.pb";

const interestsSchema = z.object({
    workshops: z.boolean().optional(),
    woodwork: z.boolean().optional(),
    metalwork: z.boolean().optional(),
    cnc: z.boolean().optional(),
    engineering: z.boolean().optional(),
    memberships: z.boolean().optional(),
});

const formSchema = z.object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().email("Invalid email address"),
    contactNumber: z.string().min(1, "Contact number is required"),
    interests: interestsSchema,
    message: z.string().min(1, "Message is required"),
    newsletter: z.boolean().optional(),
});

type ContactFormValues = z.infer<typeof formSchema>

export const ContactForm = () => {
    const [emailSent, setEmailSent] = useState(false)
    const form = useForm<ContactFormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            contactNumber: "",
            interests: {
                workshops: false,
                woodwork: false,
                metalwork: false,
                cnc: false,
                engineering: false,
                memberships: false,
            },
            message: "",
            newsletter: false,
        },
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        // Extract interests
        const interests = Object.entries(values.interests)
            .filter(([_, value]) => value)
            .map(([key]) => key)
            .join(", ");

        // Build the email body
        const plainTextContent = `Message: ${values.message}\n\nInterests: ${interests}`;
        const htmlContent = `
      <p><strong>Message:</strong> ${values.message}</p>
      <p><strong>Tel:</strong> ${values.contactNumber}</p>
      <p><strong>Interests:</strong> ${interests}</p>
    `;

        const request: SendEmailRequest = {
            sender: {
                name: `${values.firstName} ${values.lastName}`,
                email: values.email,

            },
            subject: "Contact Form Submission",
            body: {
                text: plainTextContent,
                html: htmlContent
            },
            recipient: {
                name: "Made In Workshop",
                email: "info@madeinworkshop.co.za",
            },
            attachment: [],
        }
        try {
            await sendContactEmail(request);
            toast.success("Form submitted successfully");
            setEmailSent(true)
        } catch (e) {
            console.error(e);
            toast.error("An error occurred while submitting the form");
        }
    };

    return (
        <div className={"px-6 py-6 sm:px-0 md:px-0 md:py-0 lg:py-0"}>
            <div className="w-full">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <div className="grid-cols-2 lg:grid gap-6">
                            <FormField
                                control={form.control}
                                name="firstName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>First Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="First Name" type="text" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="lastName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Last Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Last Name" type="text" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email Address</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Email Address" type="email" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="contactNumber"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Contact Number</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Contact Number" type="tel" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <div className="mt-8">
                            <p className="pb-6 text-start font-helvetica text-[14px] font-normal text-foreground">
                                What are you interested in?
                            </p>

                            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                                {["workshops", "woodwork", "metalwork", "cnc", "engineering", "memberships"].map((interest) => (
                                    <FormField
                                        key={interest}
                                        control={form.control}
                                        name={`interests.${interest}` as any}
                                        render={({ field }) => (
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <Checkbox
                                                        checked={field.value}
                                                        onCheckedChange={field.onChange}
                                                    />
                                                </FormControl>
                                                <FormLabel className="text-sm font-medium capitalize">
                                                    {interest}
                                                </FormLabel>
                                            </FormItem>
                                        )}
                                    />
                                ))}
                            </div>
                        </div>

                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem className="mt-8">
                                    <FormLabel>Message</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Type your message here."
                                            className="h-22"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="newsletter"
                            render={({ field }) => (
                                <FormItem className="flex items-center space-x-2 mt-6">
                                    <FormControl>
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    </FormControl>
                                    <FormLabel className="text-sm font-medium">
                                        Subscribe to our newsletter to stay in touch with the latest.
                                    </FormLabel>
                                </FormItem>
                            )}
                        />

                        <Button disabled={emailSent} type="submit" className="mt-6 w-1/3">
                            Submit
                        </Button>
                    </form>
                </Form>
            </div>
        </div>
    );
};