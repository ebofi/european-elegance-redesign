import { useState, type ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2, Send } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

type InquiryType = "general" | "employer" | "candidate" | "study_abroad";

interface LeadFormDialogProps {
  trigger: ReactNode;
  defaultInquiryType?: InquiryType;
  title?: string;
  description?: string;
  showStudyAbroadFields?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const LeadFormDialog = ({
  trigger,
  defaultInquiryType = "general",
  title = "Get in Touch",
  description = "Share a few details and our team will be in touch within one business day.",
  showStudyAbroadFields = false,
  open,
  onOpenChange,
}: LeadFormDialogProps) => {
  const { toast } = useToast();
  const [internalOpen, setInternalOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const isControlled = open !== undefined;
  const dialogOpen = isControlled ? open : internalOpen;
  const setDialogOpen = (next: boolean) => {
    if (!isControlled) setInternalOpen(next);
    onOpenChange?.(next);
  };

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    inquiry_type: defaultInquiryType as InquiryType,
    subject: "",
    message: "",
    destination_country: "",
    field_of_study: "",
  });

  const update = <K extends keyof typeof form>(key: K, value: (typeof form)[K]) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast({
        title: "Missing information",
        description: "Name, email and message are required.",
        variant: "destructive",
      });
      return;
    }

    setSubmitting(true);
    const { error } = await supabase.from("leads").insert({
      name: form.name,
      email: form.email,
      phone: form.phone || null,
      inquiry_type: form.inquiry_type,
      subject: form.subject || null,
      message: form.message,
      destination_country: form.destination_country || null,
      field_of_study: form.field_of_study || null,
      delivered_to: "stalinstephen@candone.net",
    });
    setSubmitting(false);

    if (error) {
      toast({
        title: "Could not send",
        description: error.message,
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Message received",
      description: "Thank you — our team will reach out shortly.",
    });
    setForm({
      name: "",
      email: "",
      phone: "",
      inquiry_type: defaultInquiryType,
      subject: "",
      message: "",
      destination_country: "",
      field_of_study: "",
    });
    setDialogOpen(false);
  };

  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-editorial text-2xl">{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="lf-name">Full name *</Label>
              <Input
                id="lf-name"
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lf-email">Email *</Label>
              <Input
                id="lf-email"
                type="email"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="lf-phone">Phone</Label>
              <Input
                id="lf-phone"
                type="tel"
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lf-type">I am a…</Label>
              <Select
                value={form.inquiry_type}
                onValueChange={(v) => update("inquiry_type", v as InquiryType)}
              >
                <SelectTrigger id="lf-type">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="general">General enquiry</SelectItem>
                  <SelectItem value="employer">Employer / Hiring</SelectItem>
                  <SelectItem value="candidate">Candidate / Job seeker</SelectItem>
                  <SelectItem value="study_abroad">Student – Study Abroad</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {(showStudyAbroadFields || form.inquiry_type === "study_abroad") && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-lg bg-secondary/50 border border-border">
              <div className="space-y-2">
                <Label htmlFor="lf-country">Preferred country</Label>
                <Input
                  id="lf-country"
                  placeholder="e.g. UK, Canada, Germany"
                  value={form.destination_country}
                  onChange={(e) => update("destination_country", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lf-field">Field of study</Label>
                <Input
                  id="lf-field"
                  placeholder="e.g. Computer Science"
                  value={form.field_of_study}
                  onChange={(e) => update("field_of_study", e.target.value)}
                />
              </div>
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="lf-subject">Subject</Label>
            <Input
              id="lf-subject"
              value={form.subject}
              onChange={(e) => update("subject", e.target.value)}
              placeholder="Brief subject line"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="lf-message">Message *</Label>
            <Textarea
              id="lf-message"
              rows={4}
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
              required
            />
          </div>

          <p className="text-xs text-muted-foreground">
            Or email us directly at{" "}
            <span className="font-medium text-foreground">hello@candone.net</span>.
          </p>

          <DialogFooter>
            <Button type="submit" variant="hero" disabled={submitting} className="w-full sm:w-auto">
              {submitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Sending…
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Send Message
                </>
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default LeadFormDialog;