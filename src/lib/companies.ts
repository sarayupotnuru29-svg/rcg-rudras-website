// Company logos
import googleLogo from "@/assets/companies/google.png";
import amazonLogo from "@/assets/companies/amazon.png";
import microsoftLogo from "@/assets/companies/microsoft.png";
import wiproLogo from "@/assets/companies/wipro.png";
import tcsLogo from "@/assets/companies/tcs.png";
import infosysLogo from "@/assets/companies/infosys.png";
import hclLogo from "@/assets/companies/hcl.png";
import accentureLogo from "@/assets/companies/accenture.png";
import cognizantLogo from "@/assets/companies/cognizant.png";
import ibmLogo from "@/assets/companies/ibm.png";
import oracleLogo from "@/assets/companies/oracle.png";
import techMahindraLogo from "@/assets/companies/tech-mahindra.png";

export interface Company {
  name: string;
  logo: string;
}

export const companies: Company[] = [
  { name: "Google", logo: googleLogo },
  { name: "Amazon", logo: amazonLogo },
  { name: "Microsoft", logo: microsoftLogo },
  { name: "Wipro", logo: wiproLogo },
  { name: "TCS", logo: tcsLogo },
  { name: "Infosys", logo: infosysLogo },
  { name: "HCL", logo: hclLogo },
  { name: "Tech Mahindra", logo: techMahindraLogo },
  { name: "Accenture", logo: accentureLogo },
  { name: "Cognizant", logo: cognizantLogo },
  { name: "IBM", logo: ibmLogo },
  { name: "Oracle", logo: oracleLogo },
];