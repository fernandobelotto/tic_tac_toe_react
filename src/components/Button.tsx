import { Button } from "@chakra-ui/react";

export default function AppButton({ children, ...props }: any) {
  return (
    <>
      <Button {...props}> {children} </Button>
    </>
  );
}
