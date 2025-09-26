import { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';
import { ContactModal } from '@/components/ContactModal';
import blueInsightsLogo from '@/assets/blue-insights-logo.png';

const authSchema = z.object({
  email: z.string().email('Invalid email address').max(255, 'Email must be less than 255 characters'),
  password: z.string().min(6, 'Password must be at least 6 characters').max(100, 'Password must be less than 100 characters'),
});

type AuthFormData = z.infer<typeof authSchema>;

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const { user, signUp, signIn, loading } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  const form = useForm<AuthFormData>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  // Redirect if already authenticated
  useEffect(() => {
    if (!loading && user) {
      navigate('/', { replace: true });
    }
  }, [user, loading, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-depth flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (user) {
    return <Navigate to="/" replace />;
  }

  const onSubmit = async (data: AuthFormData) => {
    setIsLoading(true);
    
    try {
      const { error } = isSignUp 
        ? await signUp(data.email, data.password)
        : await signIn(data.email, data.password);

      if (error) {
        let errorMessage = 'An error occurred. Please try again.';
        
        if (error.message?.includes('Invalid login credentials')) {
          errorMessage = 'Invalid email or password. Please check your credentials.';
        } else if (error.message?.includes('User already registered')) {
          errorMessage = 'An account with this email already exists. Try signing in instead.';
        } else if (error.message?.includes('Email not confirmed')) {
          errorMessage = 'Please check your email and click the confirmation link.';
        } else if (error.message) {
          errorMessage = error.message;
        }

        toast({
          title: 'Authentication Error',
          description: errorMessage,
          variant: 'destructive',
        });
      } else if (isSignUp) {
        toast({
          title: 'Account Created!',
          description: 'Please check your email for a confirmation link.',
        });
      } else {
        toast({
          title: 'Welcome back!',
          description: 'You have been successfully signed in.',
        });
      }
    } catch (err) {
      toast({
        title: 'Error',
        description: 'An unexpected error occurred. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-depth flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="flex items-center justify-center mb-8">
          <img src={blueInsightsLogo} alt="Blue-Insights" className="w-12 h-12 rounded-lg mr-3" />
          <span className="text-2xl font-bold bg-gradient-ocean bg-clip-text text-transparent">
            Blue-Insights
          </span>
        </div>

        <Card className="bg-card/95 backdrop-blur-lg border border-primary/20 shadow-ocean">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center font-bold">
              {isSignUp ? 'Create Account' : 'Welcome Back'}
            </CardTitle>
            <CardDescription className="text-center">
              {isSignUp 
                ? 'Enter your details to create your account' 
                : 'Enter your credentials to access your account'
              }
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input 
                          type="email" 
                          placeholder="your@email.com" 
                          className="bg-background/50 border-border"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input 
                          type="password" 
                          placeholder="Enter your password"
                          className="bg-background/50 border-border"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-ocean hover:shadow-ocean transition-all"
                  disabled={isLoading}
                >
                  {isLoading ? 'Please wait...' : (isSignUp ? 'Create Account' : 'Sign In')}
                </Button>
              </form>
            </Form>

            <div className="mt-6 text-center text-sm">
              {!isSignUp && (
                <div>
                  <span className="text-muted-foreground">
                    Need help?{" "}
                  </span>
                  <Button
                    variant="link"
                    className="p-0 h-auto font-semibold text-primary"
                    onClick={() => setContactOpen(true)}
                  >
                    Contact Us
                  </Button>
                </div>
              )}
              {isSignUp && (
                <div className="mt-2">
                  <span className="text-muted-foreground">
                    Already have an account?{" "}
                  </span>
                  <Button
                    variant="link"
                    className="p-0 h-auto font-semibold text-primary"
                    onClick={() => {
                      setIsSignUp(false);
                      form.reset();
                    }}
                  >
                    Sign In
                  </Button>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
      
      <ContactModal 
        open={contactOpen} 
        onOpenChange={setContactOpen} 
      />
    </div>
  );
};

export default Auth;