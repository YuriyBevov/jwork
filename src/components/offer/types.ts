export interface OfferData {
  title: string;
  description: string;
  titleAlign?: string;
  backgroundImagePath: string;
  image: {
    url: string;
    alt: string;
    width: number;
    height: number;
  };
  content: {
    form: FormData;
  };
}

interface FormData {
  id: string;
  fields: FormDataFields[];
  submitBtn: {
    text: string;
  };
  policy: {
    text: string;
    linkText: string;
    linkUrl: string;
  };
}

interface FormDataFields {
  type: string;
  placeholder: string;
  id: string;
  name: string;
  required: boolean;
}
