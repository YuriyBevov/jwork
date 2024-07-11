export interface OfferData {
  title: string;
  text: string;
  image: {
    path: string;
    width: number;
    height: number;
    alt: string;
  };
  form: FormData;
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
  fields: FormDataFields[];
}

interface FormDataFields {
  type: string;
  placeholder: string;
  id: string;
  name: string;
  required: boolean;
}
