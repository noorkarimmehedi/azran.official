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
import { ArrowDownRight, Ruler, MapPin, Calendar } from "lucide-react";
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
    <section className="bg-white border-b border-black">
      <div className="grid grid-cols-1 md:grid-cols-12">
        {/* Left Column: Information & Form Trigger */}
        <div className="md:col-span-7 p-8 md:p-16 flex flex-col justify-between border-b md:border-b-0 md:border-r border-black min-h-[600px]">
          <div className="space-y-12">
            <div className="flex justify-between items-start">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-40">Atelier Services</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-40">02 / 03</span>
            </div>
            
            <div className="space-y-8">
              <h2 className="text-6xl md:text-8xl font-display font-medium uppercase leading-[0.85] tracking-tighter">
                The Private<br/>
                <span className="italic font-light">Consultation</span>
              </h2>
              <p className="text-sm uppercase leading-loose tracking-widest text-muted-foreground max-w-md">
                Experience the pinnacle of Swiss tailoring. We offer private fittings at our Zurich studio or digital consultations for international clients.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 pt-12 border-t border-black/10">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Ruler className="w-4 h-4 stroke-[1px]" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Master Tailoring</span>
                </div>
                <p className="text-[10px] uppercase tracking-widest leading-relaxed text-muted-foreground">Comprehensive measurements and silhouette analysis by our lead designers.</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Calendar className="w-4 h-4 stroke-[1px]" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Priority Scheduling</span>
                </div>
                <p className="text-[10px] uppercase tracking-widest leading-relaxed text-muted-foreground">Access to exclusive slots within the SS26 production cycle.</p>
              </div>
            </div>
          </div>

          <div className="pt-16">
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button className="w-full md:w-auto h-20 px-12 rounded-none bg-black text-white text-[10px] uppercase font-bold tracking-[0.3em] hover:bg-neutral-900 transition-all flex items-center justify-center gap-4">
                  Request Appointment <ArrowDownRight className="w-5 h-5" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px] rounded-none border-black p-0 overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-12">
                  <div className="md:col-span-12 p-8 md:p-12">
                    <DialogHeader className="mb-8">
                      <DialogTitle className="font-display font-bold uppercase text-3xl tracking-tighter">Bespoke Inquiry</DialogTitle>
                      <DialogDescription className="text-[10px] uppercase tracking-widest font-bold opacity-40">
                        Our studio will respond within 24 hours.
                      </DialogDescription>
                    </DialogHeader>
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem className="space-y-2">
                                <FormLabel className="text-[9px] font-bold uppercase tracking-widest opacity-40">Full Name</FormLabel>
                                <FormControl>
                                  <Input placeholder="NAME" {...field} className="rounded-none border-0 border-b border-black px-0 bg-transparent focus-visible:ring-0 focus-visible:border-black transition-colors uppercase text-[10px] tracking-widest font-bold" />
                                </FormControl>
                                <FormMessage className="text-[9px]" />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem className="space-y-2">
                                <FormLabel className="text-[9px] font-bold uppercase tracking-widest opacity-40">Email Address</FormLabel>
                                <FormControl>
                                  <Input placeholder="EMAIL" {...field} className="rounded-none border-0 border-b border-black px-0 bg-transparent focus-visible:ring-0 focus-visible:border-black transition-colors uppercase text-[10px] tracking-widest font-bold" />
                                </FormControl>
                                <FormMessage className="text-[9px]" />
                              </FormItem>
                            )}
                          />
                        </div>
                        <FormField
                          control={form.control}
                          name="date"
                          render={({ field }) => (
                            <FormItem className="space-y-2">
                              <FormLabel className="text-[9px] font-bold uppercase tracking-widest opacity-40">Preferred Date</FormLabel>
                              <FormControl>
                                <Input type="date" {...field} className="rounded-none border-0 border-b border-black px-0 bg-transparent focus-visible:ring-0 focus-visible:border-black transition-colors uppercase text-[10px] tracking-widest font-bold" />
                              </FormControl>
                              <FormMessage className="text-[9px]" />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem className="space-y-2">
                              <FormLabel className="text-[9px] font-bold uppercase tracking-widest opacity-40">Notes</FormLabel>
                              <FormControl>
                                <Textarea placeholder="SPECIFIC REQUESTS" {...field} className="rounded-none border-0 border-b border-black px-0 bg-transparent focus-visible:ring-0 focus-visible:border-black transition-colors min-h-[100px] resize-none uppercase text-[10px] tracking-widest font-bold" />
                              </FormControl>
                              <FormMessage className="text-[9px]" />
                            </FormItem>
                          )}
                        />
                        <Button type="submit" className="w-full h-16 rounded-none bg-black text-white text-[10px] uppercase font-bold tracking-[0.3em] hover:bg-neutral-900 transition-all">Submit Inquiry</Button>
                      </form>
                    </Form>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        
        {/* Right Column: Imagery & Metadata */}
        <div className="md:col-span-5 flex flex-col">
          <div className="flex-grow relative overflow-hidden group border-b md:border-b-0 border-black">
            <img 
              src={studioImage} 
              alt="Studio Atmosphere" 
              className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/5"></div>
            <div className="absolute top-8 right-8 flex items-center gap-3 bg-white border border-black px-4 py-2">
              <MapPin className="w-3 h-3" />
              <span className="text-[9px] font-bold uppercase tracking-widest">Studio Zurich</span>
            </div>
          </div>
          <div className="p-8 md:p-12 bg-neutral-50 grid grid-cols-2 gap-8 border-t border-black">
             <div className="space-y-2">
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] opacity-40 block">Opening Hours</span>
                <span className="text-[10px] font-bold uppercase tracking-widest block">Mon — Sat<br/>10:00 — 18:00</span>
             </div>
             <div className="space-y-2">
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] opacity-40 block">Location</span>
                <span className="text-[10px] font-bold uppercase tracking-widest block">Bahnhofstrasse 21<br/>8001 Zurich</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}