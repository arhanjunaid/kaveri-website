import type { Metadata } from "next";
import { PhoneNumbers } from "@/components/site/PhoneNumbers";
export const metadata: Metadata = { title: "Terms of use" };
export default function TermsPage() { return <section className="subpage"><div className="wrap legal-copy"><span className="eyebrow">Website information</span><h1>Terms of<br/><em>use.</em></h1><p className="subpage-lead">The information on this website is for general guidance and does not replace professional medical advice or emergency services.</p><h2>Medical emergency?</h2><p>Contact local emergency services immediately. For Kaveri service enquiries, call either of these numbers:</p><PhoneNumbers className="phone-pair--legal"/></div></section>; }
