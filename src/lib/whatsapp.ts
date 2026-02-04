const WHATSAPP_NUMBER = "918897999766";

export interface DemoFormData {
  name: string;
  phone: string;
  course: string;
}

export interface EnquiryFormData {
  fullName: string;
  phone: string;
  email: string;
  course: string;
  message: string;
}

export const redirectToWhatsAppDemo = (data: DemoFormData) => {
  const message = encodeURIComponent(
    `Hi, I'm interested in booking a demo!\n\n` +
    `Name: ${data.name}\n` +
    `Phone: ${data.phone}\n` +
    `Course: ${data.course}\n\n` +
    `Please contact me for more details.`
  );
  
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
};

export const redirectToWhatsAppEnquiry = (data: EnquiryFormData) => {
  const message = encodeURIComponent(
    `Hi, I would like to enquire about your courses!\n\n` +
    `Name: ${data.fullName}\n` +
    `Phone: ${data.phone}\n` +
    `Email: ${data.email}\n` +
    `Interested Course: ${data.course}\n` +
    `Message: ${data.message}\n\n` +
    `Please get back to me soon.`
  );
  
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
};

export const redirectToWhatsAppCourse = (courseName: string) => {
  const message = encodeURIComponent(
    `Hi, I'm interested in the ${courseName} course. Please share more details.`
  );
  
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
};

export const openWhatsApp = () => {
  window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank');
};
