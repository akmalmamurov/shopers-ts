import SuccessContainer from "@/components/SuccessContainer";
import { redirect } from "next/navigation";

interface Props {
  params: { slug: string };
  searchParams: { session_id?: string };
}
const SuccessPage = ({ searchParams }: Props) => {
  const id = searchParams?.session_id ?? null;
  if (!id) {
    redirect("/");
  }
  return (
    <div>
      <SuccessContainer id={id} />
    </div>
  );
};

export default SuccessPage;
