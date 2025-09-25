import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ScheduleDemoModalProps {
  trigger?: React.ReactNode;
}

export const ScheduleDemoModal = ({ trigger }: ScheduleDemoModalProps) => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<Date>();
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    role: "",
    interest: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.organization || !formData.role || !formData.interest || !date) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Show success message
    toast({
      title: "Demo Scheduled!",
      description: `We'll send a confirmation email to ${formData.email} with your demo details for ${format(date, "PPP")}.`,
    });

    // Reset form and close modal
    setFormData({
      name: "",
      organization: "",
      email: "",
      role: "",
      interest: "",
      message: ""
    });
    setDate(undefined);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10">
            Schedule Demo
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] dark:bg-card dark:border-primary/30">
        <DialogHeader>
          <DialogTitle className="text-2xl">Schedule Your Demo</DialogTitle>
          <DialogDescription>
            Get a personalized walkthrough of Blue-Insights' AI-powered ocean intelligence platform
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                placeholder="Dr. Jane Smith"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="dark:bg-background dark:border-primary/30"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="organization">Organization / Institution *</Label>
              <Input
                id="organization"
                placeholder="Ocean Research Institute"
                value={formData.organization}
                onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                required
                className="dark:bg-background dark:border-primary/30"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              type="email"
              placeholder="jane.smith@institute.org"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="dark:bg-background dark:border-primary/30"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="role">Your Role *</Label>
              <Select value={formData.role} onValueChange={(value) => setFormData({ ...formData, role: value })}>
                <SelectTrigger className="dark:bg-background dark:border-primary/30">
                  <SelectValue placeholder="Select your role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="researcher">Researcher</SelectItem>
                  <SelectItem value="student">Student</SelectItem>
                  <SelectItem value="ngo">NGO Representative</SelectItem>
                  <SelectItem value="government">Government Official</SelectItem>
                  <SelectItem value="industry">Industry Professional</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="interest">Interest Area *</Label>
              <Select value={formData.interest} onValueChange={(value) => setFormData({ ...formData, interest: value })}>
                <SelectTrigger className="dark:bg-background dark:border-primary/30">
                  <SelectValue placeholder="Select interest area" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ocean-data">Ocean Data Analytics</SelectItem>
                  <SelectItem value="fisheries">Fisheries Management</SelectItem>
                  <SelectItem value="biodiversity">Biodiversity Insights</SelectItem>
                  <SelectItem value="ai-analytics">AI Analytics & Modeling</SelectItem>
                  <SelectItem value="conservation">Conservation Planning</SelectItem>
                  <SelectItem value="all">All Features</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Preferred Demo Date *</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal dark:bg-background dark:border-primary/30",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : "Pick a date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                  disabled={(date) => date < new Date() || date.getDay() === 0 || date.getDay() === 6}
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Additional Information (Optional)</Label>
            <Textarea
              id="message"
              placeholder="Tell us about your specific needs or questions..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={4}
              className="dark:bg-background dark:border-primary/30"
            />
          </div>

          <div className="flex gap-4 pt-4">
            <Button type="submit" className="flex-1 bg-gradient-ocean hover:shadow-ocean">
              <Send className="w-4 h-4 mr-2" />
              Schedule Demo
            </Button>
            <Button type="button" variant="outline" onClick={() => setOpen(false)} className="dark:border-primary/30">
              Cancel
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};