// "use client"
import Form from "next/form";
import FormBar from "./FormBar";

type Props = {
  query?: string;
};
const SearchForm = ({ query }: Props) => {
  return (
    <Form action="/" scroll={false} className="search-form">
      <FormBar query={query} />
      
    </Form>
  );
};

export default SearchForm;
