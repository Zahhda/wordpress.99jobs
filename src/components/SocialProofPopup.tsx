import { useState, useEffect } from "react";

const proofs = [
  "Gopi from Delhi just bought the Job-Winner Kit! ⚡",
  "Priya from Mumbai grabbed the ₹99 Pack! 🎉",
  "Rahul from Bangalore got his ATS Resume! 🚀",
  "Sneha from Hyderabad joined 99Jobs! 💼",
  "Amit from Pune downloaded the HR Vault! 📧",
];

const SocialProofPopup = () => {
  const [visible, setVisible] = useState(false);
  const [current, setCurrent] = useState(0);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const showNext = () => {
      setLeaving(false);
      setVisible(true);
      setTimeout(() => {
        setLeaving(true);
        setTimeout(() => {
          setVisible(false);
          setCurrent(prev => (prev + 1) % proofs.length);
        }, 500);
      }, 3500);
    };

    const timeout = setTimeout(showNext, 5000);
    const interval = setInterval(showNext, 10000);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className={`fixed bottom-24 left-4 z-40 max-w-xs bg-card border border-border rounded-xl shadow-lg p-3 flex items-center gap-3 ${leaving ? "animate-social-out" : "animate-social-in"}`}>
      <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-lg shrink-0">👤</div>
      <p className="text-sm text-foreground font-medium">{proofs[current]}</p>
    </div>
  );
};

export default SocialProofPopup;
