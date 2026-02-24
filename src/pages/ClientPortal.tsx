import { useCallback, useEffect, useMemo, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import PageTransition from "@/components/PageTransition";
import SEO from "@/components/SEO";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import cabinExterior from "@/assets/cabin-exterior-forest.avif";

const bookingDetails = {
  id: "RRW-2025-0614",
  coupleName: "Jordan & Taylor",
  email: "jordan.taylor@example.com",
  status: "booked",
  packageName: "Weekend Buyout + Pavilion",
  eventStart: "2025-06-14",
  eventEnd: "2025-06-16",
  guestCount: 110,
  totalInvestment: 12800,
  depositPaid: 3200,
};

type PaymentScheduleItem = {
  id: string;
  dueDate: string;
  amount: number;
  status: "paid" | "due" | "upcoming";
  description: string;
};

type PaymentRecord = {
  id: string;
  date: string;
  amount: number;
  method: string;
  note?: string;
};

type DocumentRecord = {
  id: string;
  name: string;
  type: string;
  status: "signed" | "pending" | "uploaded";
  updatedAt: string;
};

type PortalAccount = {
  id: string;
  email: string;
  createdAt: string;
  loginLink: string;
  createdBy: "auto" | "manual";
};

const initialSchedule: PaymentScheduleItem[] = [
  {
    id: "ps-1",
    dueDate: "2024-12-15",
    amount: 3200,
    status: "paid",
    description: "Initial deposit (25%)",
  },
  {
    id: "ps-2",
    dueDate: "2025-03-15",
    amount: 4800,
    status: "due",
    description: "Midpoint payment",
  },
  {
    id: "ps-3",
    dueDate: "2025-05-15",
    amount: 4800,
    status: "upcoming",
    description: "Final balance",
  },
];

const initialDocuments: DocumentRecord[] = [
  {
    id: "doc-1",
    name: "Venue Agreement",
    type: "PDF",
    status: "signed",
    updatedAt: "2024-10-02",
  },
  {
    id: "doc-2",
    name: "Payment Plan Addendum",
    type: "PDF",
    status: "signed",
    updatedAt: "2024-10-08",
  },
  {
    id: "doc-3",
    name: "Insurance Certificate",
    type: "PDF",
    status: "pending",
    updatedAt: "2025-04-01",
  },
];

const ClientPortal = () => {
  const { toast } = useToast();
  const [portalAccount, setPortalAccount] = useState<PortalAccount | null>(null);
  const [paymentSchedule, setPaymentSchedule] = useState<PaymentScheduleItem[]>(initialSchedule);
  const [payments, setPayments] = useState<PaymentRecord[]>([
    {
      id: "pay-1",
      date: "2024-12-16",
      amount: 3200,
      method: "Credit card",
      note: "Deposit received",
    },
  ]);
  const [documents, setDocuments] = useState<DocumentRecord[]>(initialDocuments);
  const [paymentMethod, setPaymentMethod] = useState("bank-transfer");
  const [paymentAmount, setPaymentAmount] = useState("");
  const [paymentNote, setPaymentNote] = useState("");
  const [uploadDescription, setUploadDescription] = useState("");
  const [uploadFile, setUploadFile] = useState<File | null>(null);
  const [manualName, setManualName] = useState("");
  const [manualEmail, setManualEmail] = useState("");
  const [manualBookingId, setManualBookingId] = useState(bookingDetails.id);
  const [sendLoginEmail, setSendLoginEmail] = useState(true);

  const balanceRemaining = useMemo(() => {
    const paid = payments.reduce((sum, payment) => sum + payment.amount, 0);
    return bookingDetails.totalInvestment - paid;
  }, [payments]);

  const createPortalAccount = useCallback((email: string, createdBy: "auto" | "manual") => {
    const account: PortalAccount = {
      id: `portal-${Math.random().toString(36).slice(2, 10)}`,
      email,
      createdAt: new Date().toISOString().slice(0, 10),
      loginLink: "https://portal.rusticretreatweddings.com/login",
      createdBy,
    };

    setPortalAccount(account);
    return account;
  }, []);

  const sendLoginEmailNotice = useCallback((email: string) => {
    toast({
      title: "Portal login email sent",
      description: `A secure login link was sent to ${email}.`,
    });
  }, [toast]);

  useEffect(() => {
    if (bookingDetails.status === "booked" && !portalAccount) {
      const account = createPortalAccount(bookingDetails.email, "auto");
      sendLoginEmailNotice(account.email);
    }
  }, [createPortalAccount, portalAccount, sendLoginEmailNotice]);

  const handlePaymentSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const amount = Number(paymentAmount);

    if (!amount || amount <= 0) {
      toast({
        title: "Enter a valid payment amount",
        description: "Payment amount must be greater than $0.",
        variant: "destructive",
      });
      return;
    }

    const payment: PaymentRecord = {
      id: `pay-${Date.now()}`,
      date: new Date().toISOString().slice(0, 10),
      amount,
      method: paymentMethod,
      note: paymentNote || undefined,
    };

    setPayments((prev) => [payment, ...prev]);

    setPaymentSchedule((prev) => {
      const updated = [...prev];
      const nextDueIndex = updated.findIndex((item) => item.status === "due");
      if (nextDueIndex >= 0 && amount >= updated[nextDueIndex].amount) {
        updated[nextDueIndex] = {
          ...updated[nextDueIndex],
          status: "paid",
        };
      }
      return updated;
    });

    setPaymentAmount("");
    setPaymentNote("");

    toast({
      title: "Payment submitted",
      description: "Thanks! We received your payment details and will confirm shortly.",
    });
  };

  const handleDocumentUpload = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!uploadFile) {
      toast({
        title: "Select a document",
        description: "Choose a file to upload before submitting.",
        variant: "destructive",
      });
      return;
    }

    const newDocument: DocumentRecord = {
      id: `doc-${Date.now()}`,
      name: uploadDescription || uploadFile.name,
      type: uploadFile.type ? uploadFile.type.split("/")[1]?.toUpperCase() ?? "FILE" : "FILE",
      status: "uploaded",
      updatedAt: new Date().toISOString().slice(0, 10),
    };

    setDocuments((prev) => [newDocument, ...prev]);
    setUploadDescription("");
    setUploadFile(null);

    toast({
      title: "Document uploaded",
      description: "Your file is now available in the portal.",
    });
  };

  const handleManualAccountSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!manualName.trim() || !manualEmail.trim() || !manualBookingId.trim()) {
      toast({
        title: "Missing details",
        description: "Please provide the client name, email, and booking ID.",
        variant: "destructive",
      });
      return;
    }

    const account = createPortalAccount(manualEmail.trim(), "manual");

    if (sendLoginEmail) {
      sendLoginEmailNotice(account.email);
    }

    toast({
      title: "Portal account created",
      description: `${manualName.trim()} can now access the portal.`
    });
  };

  return (
    <PageTransition>
      <SEO
        title="Client Portal"
        description="Access your Rustic Retreat booking details, payment schedule, and documents in one place."
        path="/client-portal"
        image={cabinExterior}
        keywords={["Rustic Retreat client portal", "wedding booking dashboard", "wedding venue payments"]}
      />
      <div className="min-h-screen bg-background">
        <Navigation />
        <PageHero
          backgroundImage={cabinExterior}
          title="Client Portal"
          subtitle="Everything you need for your Rustic Retreat booking, organized in one dashboard."
          overlayOpacity="light"
        />

        <section className="section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid gap-6 md:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle>Booking status</CardTitle>
                    <CardDescription>{bookingDetails.id}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Badge className="capitalize" variant={bookingDetails.status === "booked" ? "default" : "secondary"}>
                      {bookingDetails.status}
                    </Badge>
                    <p className="mt-4 text-sm text-muted-foreground">Couple: {bookingDetails.coupleName}</p>
                    <p className="text-sm text-muted-foreground">Event dates: {bookingDetails.eventStart} – {bookingDetails.eventEnd}</p>
                    <p className="text-sm text-muted-foreground">Guest count: {bookingDetails.guestCount}</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Portal access</CardTitle>
                    <CardDescription>Automatically created when booking is marked booked.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {portalAccount ? (
                      <div className="space-y-2 text-sm">
                        <p><strong>Email:</strong> {portalAccount.email}</p>
                        <p><strong>Created:</strong> {portalAccount.createdAt}</p>
                        <p><strong>Login link:</strong> <a className="text-primary underline" href={portalAccount.loginLink}>{portalAccount.loginLink}</a></p>
                        <Badge variant="secondary">Created {portalAccount.createdBy === "auto" ? "automatically" : "manually"}</Badge>
                      </div>
                    ) : (
                      <p className="text-sm text-muted-foreground">Portal account not created yet.</p>
                    )}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Balance remaining</CardTitle>
                    <CardDescription>Total investment: ${bookingDetails.totalInvestment.toLocaleString()}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-3xl font-semibold">${balanceRemaining.toLocaleString()}</p>
                    <p className="text-sm text-muted-foreground">Deposit paid: ${bookingDetails.depositPaid.toLocaleString()}</p>
                  </CardContent>
                </Card>
              </div>

              <Tabs defaultValue="overview" className="mt-10">
                <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="payments">Payments</TabsTrigger>
                  <TabsTrigger value="documents">Documents</TabsTrigger>
                  <TabsTrigger value="admin">Admin tools</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="mt-6 space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Booking details</CardTitle>
                      <CardDescription>Package, dates, and milestones at a glance.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3 text-sm">
                      <div className="flex flex-wrap justify-between gap-2">
                        <span className="font-medium">Package</span>
                        <span>{bookingDetails.packageName}</span>
                      </div>
                      <div className="flex flex-wrap justify-between gap-2">
                        <span className="font-medium">Event dates</span>
                        <span>{bookingDetails.eventStart} – {bookingDetails.eventEnd}</span>
                      </div>
                      <div className="flex flex-wrap justify-between gap-2">
                        <span className="font-medium">Guests</span>
                        <span>{bookingDetails.guestCount}</span>
                      </div>
                      <Separator />
                      <div className="flex flex-wrap justify-between gap-2">
                        <span className="font-medium">Primary contact</span>
                        <span>{bookingDetails.email}</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Payment schedule</CardTitle>
                      <CardDescription>Upcoming and completed payments.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Due date</TableHead>
                            <TableHead>Description</TableHead>
                            <TableHead>Amount</TableHead>
                            <TableHead>Status</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {paymentSchedule.map((item) => (
                            <TableRow key={item.id}>
                              <TableCell>{item.dueDate}</TableCell>
                              <TableCell>{item.description}</TableCell>
                              <TableCell>${item.amount.toLocaleString()}</TableCell>
                              <TableCell>
                                <Badge variant={item.status === "paid" ? "default" : item.status === "due" ? "secondary" : "outline"}>
                                  {item.status}
                                </Badge>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="payments" className="mt-6 space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Submit a payment</CardTitle>
                      <CardDescription>Let us know when you send a payment so we can confirm quickly.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form className="grid gap-4 md:grid-cols-2" onSubmit={handlePaymentSubmit}>
                        <div className="space-y-2">
                          <Label htmlFor="paymentAmount">Payment amount</Label>
                          <Input
                            id="paymentAmount"
                            type="number"
                            min="0"
                            placeholder="0.00"
                            value={paymentAmount}
                            onChange={(event) => setPaymentAmount(event.target.value)}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>Payment method</Label>
                          <Select value={paymentMethod} onValueChange={setPaymentMethod}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select method" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="bank-transfer">Bank transfer</SelectItem>
                              <SelectItem value="credit-card">Credit card</SelectItem>
                              <SelectItem value="interac">Interac e-Transfer</SelectItem>
                              <SelectItem value="cash">Cash</SelectItem>
                              <SelectItem value="cheque">Cheque</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="md:col-span-2 space-y-2">
                          <Label htmlFor="paymentNote">Payment note</Label>
                          <Textarea
                            id="paymentNote"
                            placeholder="Add any notes (confirmation number, bank reference, etc.)"
                            value={paymentNote}
                            onChange={(event) => setPaymentNote(event.target.value)}
                          />
                        </div>
                        <Button type="submit" className="md:col-span-2">Submit payment</Button>
                      </form>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Payment history</CardTitle>
                      <CardDescription>Payments received and submitted through the portal.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Date</TableHead>
                            <TableHead>Amount</TableHead>
                            <TableHead>Method</TableHead>
                            <TableHead>Notes</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {payments.map((payment) => (
                            <TableRow key={payment.id}>
                              <TableCell>{payment.date}</TableCell>
                              <TableCell>${payment.amount.toLocaleString()}</TableCell>
                              <TableCell className="capitalize">{payment.method.replace("-", " ")}</TableCell>
                              <TableCell>{payment.note || "—"}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="documents" className="mt-6 space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Upload a document</CardTitle>
                      <CardDescription>Share insurance certificates, permits, or vendor paperwork.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form className="grid gap-4 md:grid-cols-2" onSubmit={handleDocumentUpload}>
                        <div className="space-y-2">
                          <Label htmlFor="uploadFile">File</Label>
                          <Input
                            id="uploadFile"
                            type="file"
                            onChange={(event) => setUploadFile(event.target.files?.[0] || null)}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="uploadDescription">Description</Label>
                          <Input
                            id="uploadDescription"
                            placeholder="Optional label"
                            value={uploadDescription}
                            onChange={(event) => setUploadDescription(event.target.value)}
                          />
                        </div>
                        <Button type="submit" className="md:col-span-2">Upload document</Button>
                      </form>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Documents</CardTitle>
                      <CardDescription>Signed agreements and uploaded files.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Document</TableHead>
                            <TableHead>Type</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Updated</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {documents.map((doc) => (
                            <TableRow key={doc.id}>
                              <TableCell>{doc.name}</TableCell>
                              <TableCell>{doc.type}</TableCell>
                              <TableCell>
                                <Badge variant={doc.status === "signed" ? "default" : doc.status === "pending" ? "secondary" : "outline"}>
                                  {doc.status}
                                </Badge>
                              </TableCell>
                              <TableCell>{doc.updatedAt}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="admin" className="mt-6 space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Manual portal account creation</CardTitle>
                      <CardDescription>Create a client account for existing bookings or re-send access.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form className="grid gap-4 md:grid-cols-2" onSubmit={handleManualAccountSubmit}>
                        <div className="space-y-2">
                          <Label htmlFor="manualName">Client name</Label>
                          <Input
                            id="manualName"
                            placeholder="Client name"
                            value={manualName}
                            onChange={(event) => setManualName(event.target.value)}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="manualEmail">Client email</Label>
                          <Input
                            id="manualEmail"
                            type="email"
                            placeholder="name@email.com"
                            value={manualEmail}
                            onChange={(event) => setManualEmail(event.target.value)}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="manualBookingId">Booking ID</Label>
                          <Input
                            id="manualBookingId"
                            placeholder="RRW-2025-XXXX"
                            value={manualBookingId}
                            onChange={(event) => setManualBookingId(event.target.value)}
                          />
                        </div>
                        <div className="flex items-center gap-3 mt-6">
                          <Switch
                            id="sendLoginEmail"
                            checked={sendLoginEmail}
                            onCheckedChange={setSendLoginEmail}
                          />
                          <Label htmlFor="sendLoginEmail">Send login email</Label>
                        </div>
                        <Button type="submit" className="md:col-span-2">Create portal account</Button>
                      </form>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default ClientPortal;
