import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/services/supabase";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { signup } from "@/services/apiAuth";

type Props = {
  updateAuth: () => void;
};

const inititalValue = {
  // firstname: "",
  // lastname: "",
  email: "",
  password: "",
};

const formSchema = z.object({
  // firstname: z
  //   .string()
  //   .min(2, "Firstname must be at least 2 characters")
  //   .max(50),
  // lastname: z.string().min(2, "Lastname must be at least 2 characters").max(50),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});

export default function SignUp({ updateAuth }: Props) {
  const { toast } = useToast();

  const formData = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ...inititalValue,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const { data, error } = await signup(values);

    if (data) {
      toast({
        title: "Verify Your Email Address",
        description:
          "To access your account, please verify your email address. ",
      });
    }
  }

  return (
    <>
      <Form {...formData}>
        <form onSubmit={formData.handleSubmit(onSubmit)} className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold">Sign Up</h1>
            <p className="text-balance text-muted-foreground">
              Enter your information to create an account
            </p>
          </div>
          <div>
            <div className="grid gap-4">
              {/* <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <FormField
                    control={formData.control}
                    name="firstname"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Firstname</FormLabel>
                        <FormControl>
                          <Input placeholder="Firstname" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid gap-2">
                  <FormField
                    control={formData.control}
                    name="lastname"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Lastname</FormLabel>
                        <FormControl>
                          <Input placeholder="Lastname" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div> */}
              <div className="grid gap-2">
                <FormField
                  control={formData.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="Email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid gap-2">
                <FormField
                  control={formData.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <Button type="submit" className="w-full">
                Create an account
              </Button>
              {/* <Button variant="outline" className="w-full">
                Login with Google
              </Button> */}
            </div>
          </div>

          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <span className="underline" onClick={updateAuth}>
              Sign in
            </span>
          </div>
        </form>
      </Form>
    </>
  );
}
