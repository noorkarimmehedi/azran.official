import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import studioImage from "@assets/image_1768632360954.png";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email.",
  }),
  date: z.string().min(1, {
     message: "Please select a preferred date.",
  }),
  message: z.string().optional(),
});

export default function BookingSection() {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      date: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Request Sent",
      description: "We will confirm your appointment shortly.",
    });
    setOpen(false);
    form.reset();
  }

  return (
    <section className="py-24 bg-secondary/30 border-b border-border">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
        <div>
           <h2 className="text-4xl md:text-6xl font-display uppercase leading-tight mb-6">
             Bespoke<br/>Experience
           </h2>
           <p className="text-muted-foreground text-lg mb-8 max-w-md">
             Visit our Zurich atelier for a private consultation. Experience the fabrics, textures, and craftsmanship firsthand.
           </p>
           
           <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button size="lg" className="rounded-none text-lg px-8 py-6 uppercase tracking-wider">
                Book Appointment
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] rounded-none border-border">
              <DialogHeader>
                <DialogTitle className="font-display uppercase text-2xl">Book Appointment</DialogTitle>
                <DialogDescription>
                  Request a time for your private fitting session.
                </DialogDescription>
              </DialogHeader>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 pt-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="uppercase text-xs tracking-wider">Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} className="rounded-none border-border" />
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
                        <FormLabel className="uppercase text-xs tracking-wider">Email</FormLabel>
                        <FormControl>
                          <Input placeholder="john@example.com" {...field} className="rounded-none border-border" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                   <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="uppercase text-xs tracking-wider">Preferred Date</FormLabel>
                        <FormControl>
                          <Input type="date" {...field} className="rounded-none border-border" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="uppercase text-xs tracking-wider">Notes (Optional)</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Specific requests..." {...field} className="rounded-none border-border resize-none" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full rounded-none uppercase">Confirm Request</Button>
                </form>
              </Form>
            </DialogContent>
          </Dialog>
        </div>
        
        <div className="relative h-[600px] border border-border bg-white p-4 hidden md:block rotate-3 transition-transform hover:rotate-0 duration-500">
           <div className="absolute inset-0 border border-border m-4 p-8 flex flex-col justify-between">
              <div className="text-xs font-mono uppercase">
                Guzel Studio<br/>
                Bahnhofstrasse 21<br/>
                8001 Zurich
              </div>
              <img 
                src={studioImage} 
                alt="Studio Atmosphere" 
                className="w-full h-3/5 object-cover grayscale contrast-125"
              />
              <div className="text-right text-xs font-mono uppercase">
                 Open Mon-Sat<br/>
                 10:00 - 18:00
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}