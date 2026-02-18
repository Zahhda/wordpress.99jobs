import { useState, useEffect } from "react";
import { CheckCircle2 } from "lucide-react";

interface SocialProof {
  name: string;
  location: string;
  action: string;
  time: string;
}

const proofs: SocialProof[] = [
  { name: "Aarav", location: "Mumbai", action: "bought the ₹99 Pack", time: "just now" },
  { name: "Priya", location: "Bangalore", action: "downloaded the HR Vault", time: "2 mins ago" },
  { name: "Rohan", location: "Delhi", action: "joined 99Jobs", time: "5 mins ago" },
  { name: "Sneha", location: "Hyderabad", action: "got her ATS Resume", time: "1 min ago" },
  { name: "Vikram", location: "Pune", action: "upgraded to Pro", time: "just now" },
  { name: "Ananya", location: "Chennai", action: "bought the ₹99 Pack", time: "10 mins ago" },
  { name: "Aditya", location: "Kolkata", action: "secured an interview", time: "3 mins ago" },
  { name: "Kavya", location: "Ahmedabad", action: "downloaded the kit", time: "just now" },
  { name: "Rahul", location: "Jaipur", action: "joined 99Jobs", time: "8 mins ago" },
  { name: "Meera", location: "Lucknow", action: "bought the ₹99 Pack", time: "4 mins ago" },
  { name: "Siddharth", location: "Surat", action: "got the HR List", time: "12 mins ago" },
  { name: "Nisha", location: "Kanpur", action: "bought the ₹99 Pack", time: "just now" },
  { name: "Varun", location: "Nagpur", action: "downloaded the templates", time: "6 mins ago" },
  { name: "Ishaan", location: "Indore", action: "joined 99Jobs", time: "15 mins ago" },
  { name: "Riya", location: "Thane", action: "bought the ₹99 Pack", time: "2 mins ago" },
  { name: "Kabir", location: "Bhopal", action: "got his resume audited", time: "7 mins ago" },
  { name: "Pooja", location: "Visakhapatnam", action: "bought the ₹99 Pack", time: "just now" },
  { name: "Arjun", location: "Patna", action: "downloaded the kit", time: "9 mins ago" },
  { name: "Zara", location: "Vadodara", action: "joined 99Jobs", time: "3 mins ago" },
  { name: "Dev", location: "Ghaziabad", action: "bought the ₹99 Pack", time: "just now" },
];

const SocialProofPopup = () => {
  const [visible, setVisible] = useState(false);
  const [current, setCurrent] = useState(0);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    // Initial delay before showing the first notification
    const initialTimeout = setTimeout(() => {
      showNotification();
    }, 2000);

    const showNotification = () => {
      setIsLeaving(false);
      setVisible(true);

      // Hide after 4 seconds
      setTimeout(() => {
        setIsLeaving(true);
        // Wait for animation to finish before hiding completely
        setTimeout(() => {
          setVisible(false);
          // Pick a random next proof, but ensure it's not the same as current
          setCurrent((prev) => {
            let next;
            do {
              next = Math.floor(Math.random() * proofs.length);
            } while (next === prev);
            return next;
          });
        }, 500); // Animation duration
      }, 4000);
    };

    // Show a new notification every 12 seconds
    const interval = setInterval(showNotification, 12000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  // Simplified render logic
  if (!visible) return null;

  const proof = proofs[current];

  return (
    <div
      className={`fixed bottom-24 left-4 z-40 max-w-[300px] md:max-w-xs bg-card/95 backdrop-blur-sm border-l-4 border-l-secondary border-y border-r border-border rounded-r-lg rounded-l-sm shadow-xl p-4 flex items-start gap-4 transform transition-all duration-500 ease-in-out ${isLeaving ? "translate-x-[-150%] opacity-0" : "translate-x-0 opacity-100"
        }`}
    >
      <div className="relative shrink-0">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary to-orange-600 flex items-center justify-center text-secondary-foreground font-bold text-lg shadow-sm">
          {proof.name[0]}
        </div>
        <div className="absolute -bottom-1 -right-1 bg-background rounded-full p-0.5">
          <CheckCircle2 className="w-4 h-4 text-green-500 fill-green-500/10" />
        </div>
      </div>

      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-foreground leading-tight">
          {proof.name} <span className="font-normal text-muted-foreground">from {proof.location}</span>
        </p>
        <p className="text-xs text-secondary font-medium mt-0.5 flex items-center gap-1">
          {proof.action} 🔥
        </p>
        <p className="text-[10px] text-muted-foreground mt-1 font-medium">
          {proof.time}
        </p>
      </div>
    </div>
  );
};

export default SocialProofPopup;
