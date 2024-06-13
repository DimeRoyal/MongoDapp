import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
// import { useToast } from "@/components/ui/use-toast";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useToast } from "../ui/use-toast";
import { useNavigate } from "react-router-dom";
import { login } from "@/services/apiAuth";

type Props = {
  updateAuth: () => void;
};

const inititalValue = {
  email: "",
  password: "",
};

const formSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});

export default function SignIn({ updateAuth }: Props) {
  const { toast } = useToast();
  const navigate = useNavigate();

  const formData = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ...inititalValue,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const { data, error } = await login(values);

    if (error) {
      toast({
        title: `${error.status}`,
        description: error.message,
        variant: "destructive",
      });
    } else {
      navigate("/", { replace: true });
    }
  }

  return (
    <>
      <Form {...formData}>
        <form onSubmit={formData.handleSubmit(onSubmit)} className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-balance text-muted-foreground">
              Enter your email below to login to your account
            </p>
          </div>
          <div>
            <div className="grid gap-4">
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
                Login
              </Button>
              {/* <Button variant="outline" className="w-full">
                Login with Google
              </Button> */}
            </div>
          </div>

          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <span className="underline" onClick={updateAuth}>
              Sign up
            </span>
          </div>
        </form>
      </Form>
    </>
  );
}
