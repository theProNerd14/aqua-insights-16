import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Mail, Copy, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface ContactModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ContactModal = ({ open, onOpenChange }: ContactModalProps) => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();
  const email = "blueai.org.123@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    toast({
      title: "Email copied!",
      description: "The email address has been copied to your clipboard.",
    });
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md animate-scale-in">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-ocean bg-clip-text text-transparent">
            Contact Us
          </DialogTitle>
        </DialogHeader>
        
        <div className="flex flex-col items-center py-8 space-y-6">
          <div className="w-20 h-20 rounded-full bg-gradient-ocean flex items-center justify-center animate-pulse">
            <Mail className="w-10 h-10 text-primary-foreground" />
          </div>
          
          <div className="text-center space-y-2">
            <p className="text-muted-foreground">
              For inquiries, partnerships, or support, reach out to us at:
            </p>
            <div className="flex items-center gap-2 justify-center">
              <span className="text-lg font-medium text-foreground">
                {email}
              </span>
              <Button
                size="icon"
                variant="ghost"
                onClick={handleCopy}
                className="h-8 w-8 hover:bg-primary/10"
              >
                {copied ? (
                  <CheckCircle className="h-4 w-4 text-green-500" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>
          
          <Button
            className="w-full bg-gradient-ocean hover:shadow-ocean transition-all"
            onClick={() => window.location.href = `mailto:${email}`}
          >
            <Mail className="mr-2 w-4 h-4" />
            Send Email
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};