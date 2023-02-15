import { parseISO, format } from "date-fns";

interface DateTypes {
  dateString: string;
}

export default function Date({ dateString }: DateTypes) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>;
}
