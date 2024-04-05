export interface IProject{
  name: string;
  description: string;
  tags: ITags[];
  image: string;
  source_code_link: string;
}
interface ITags{
  name: string;
  color: string;
}
export interface ITestimonial{
  testimonial: string;
  name: string;
  designation: string;
  company: string;
  image: string;
}

export interface IUser{
  name: string;
  email: string;
  message: string;
}
export interface IExperience {
  title: string;
  company_name: string;
  icon: string,
  iconBg: string;
  date: string;
  points: string[];
}