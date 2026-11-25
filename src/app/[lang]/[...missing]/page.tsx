import { notFound } from "next/navigation";

/** Any unknown URL inside a language → the localized 404. */
export default function Missing() {
  notFound();
}
