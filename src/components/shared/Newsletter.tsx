"use client";

import newsletterImage from "@/assets/newsletter/newsletter-bg.jpg";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";

// Define the form schema with Zod
const formSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Please enter a valid email address" }),
});

// Infer the type from the schema
type FormValues = z.infer<typeof formSchema>;

export default function Newsletter() {
  // Initialize the form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  // Handle form submission
  const onSubmit = async (data: FormValues) => {
    console.log(data);
    // setIsSubmitting(true);

    // try {
    //   // Simulate API call
    //   await new Promise((resolve) => setTimeout(resolve, 1000));
    //   console.log("Form submitted:", data);

    //   // Show success state
    //   setIsSuccess(true);
    //   form.reset();

    //   // Reset success message after 5 seconds
    //   setTimeout(() => setIsSuccess(false), 5000);
    // } catch (error) {
    //   console.error("Error submitting form:", error);
    // } finally {
    //   setIsSubmitting(false);
    // }
  };

  return (
    <section
      className={`relative w-full overflow-hidden text-white mb-[-50px] px-4`}
    >
      <div
        className="relative container mx-auto lg:px-[72px] lg:py-[95px] p-8 rounded-[8px] bg-[center_23%]"
        style={{ backgroundImage: `url(${newsletterImage.src})` }}
      >
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          {/* Text content */}
          <div className="lg:max-w-md">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stay Updated
            </h2>
            <p className="text-sm md:text-base">
              Subscribe to our newsletter and never miss the latest blogs,
              podcasts, and exclusive insights on financial growth and community
              success!
            </p>
          </div>

          {/* Subscription form with Zod validation */}
          <div className="w-full lg:max-w-md bg-[rgba(255,255,255,0.50)] rounded-[8px] p-4">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex md:flex-row flex-col gap-4"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field, fieldState }) => (
                    <FormItem className="bg-white p-[15px] rounded-[8px] flex-grow-1">
                      <FormLabel className="text-gray-800 text-sm font-medium">
                        Enter Your Email
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="email"
                          placeholder="Enter your email"
                          className={cn(
                            "w-full bg-[#E4E4E6] p-[6px] focus-visible:ring-primary/50 focus-visible:ring-2 text-primary border-transparent",
                            fieldState.invalid
                              ? "border-red-500 focus-visible:ring-red-500"
                              : ""
                          )}
                        />
                      </FormControl>
                      <FormMessage className="text-xs text-red-500" />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="bg-primary hover:bg-primary-900 cursor-pointer text-white flex flex-col h-auto"
                >
                  Subscribe Now
                  <Image
                    src="/touch.svg"
                    width={32}
                    height={32}
                    alt="Touch icon"
                    className="object-contain"
                  />
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
