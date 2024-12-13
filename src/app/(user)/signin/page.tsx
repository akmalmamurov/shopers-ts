import Container from "@/components/Container";
import googleImage from "@/assets/googleImage.webp";
import Image from "next/image";
import { signIn } from "@/auth";
const SignInPage = () => {
  return (
    <Container className="py-20 flex flex-col justify-center items-center">
      <form
        action={async () => {
          "use server";
          await signIn("google", { redirectTo: "/" });
        }}
        className="flex items-center gap-1 border border-blue-500 font-semibold bg-blue-50 px-4 py-1.5 rounded-md hover:bg-blue-800 hover:text-white hoverEffect"
      >
        <Image src={googleImage} alt="googleImage" className="w-8" />
        <button>Signin with Google</button>
      </form>
    </Container>
  );
};

export default SignInPage;
