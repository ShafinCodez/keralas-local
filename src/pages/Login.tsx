import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Header from "@/components/Header";
import { ArrowLeft, Phone, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Login = () => {
  const [step, setStep] = useState<'phone' | 'otp'>('phone');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');

  const handleSendOTP = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle OTP sending
    console.log("Sending OTP to:", phoneNumber);
    setStep('otp');
  };

  const handleVerifyOTP = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle OTP verification
    console.log("Verifying OTP:", otp);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-6">
        <div className="max-w-md mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Link to="/">
              <Button variant="outline" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
            </Link>
            <h1 className="text-2xl font-bold text-foreground">Login / Register</h1>
          </div>

          <Card className="shadow-[var(--shadow-card)]">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                {step === 'phone' ? (
                  <Phone className="w-8 h-8 text-primary" />
                ) : (
                  <Shield className="w-8 h-8 text-primary" />
                )}
              </div>
              <CardTitle className="text-primary">
                {step === 'phone' ? 'Enter Phone Number' : 'Verify OTP'}
              </CardTitle>
              <p className="text-muted-foreground text-sm">
                {step === 'phone' 
                  ? 'We\'ll send you a verification code' 
                  : `Code sent to ${phoneNumber}`
                }
              </p>
            </CardHeader>
            <CardContent>
              {step === 'phone' ? (
                <form onSubmit={handleSendOTP} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      required
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                    Send OTP
                  </Button>
                </form>
              ) : (
                <form onSubmit={handleVerifyOTP} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="otp">Verification Code</Label>
                    <Input
                      id="otp"
                      type="text"
                      placeholder="Enter 6-digit code"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      maxLength={6}
                      required
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                    Verify & Login
                  </Button>
                  
                  <Button 
                    type="button" 
                    variant="outline" 
                    size="sm" 
                    className="w-full"
                    onClick={() => setStep('phone')}
                  >
                    Change Phone Number
                  </Button>
                </form>
              )}

              <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  Secure Login
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Phone verification prevents spam</li>
                  <li>• Your number is kept private</li>
                  <li>• Quick and secure access</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Login;