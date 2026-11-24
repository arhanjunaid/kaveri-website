import { PhoneIcon } from "@/components/site/PhoneIcon";

type Props = { className?: string };

export function PhoneNumbers({ className = "" }: Props) {
  return <div className={`phone-pair ${className}`} aria-label="Call Kaveri HealthTech">
    <a href="tel:+917619108108"><PhoneIcon/><span>+91 7619 108 108</span></a>
    <a href="tel:+917676100400"><PhoneIcon/><span>+91 7676 100 400</span></a>
  </div>;
}
