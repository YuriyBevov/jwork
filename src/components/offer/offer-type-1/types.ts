export interface OfferData {
  title: string;
  text: string;
  form: FormData[];
}

interface FormData {
  id: string;
  submitBtn: {
    text: string;
  };
  policy: {
    text: string;
    linkText: string;
    linkUrl: string;
  };
  fields: {
    type: string;
    placeholder: string;
    id: string;
    name: string;
    required: boolean;
  };
}
