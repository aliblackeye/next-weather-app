"use client"

// Libs
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";


// Radix
import { Box, Flex, TextField } from "@radix-ui/themes";

// Services
import { weatherServices } from "@services/weather-services";

// Components
import Form from "@components/form";
import Button from "@components/button";

export default function ApiKeyPage() {

  // Variables
  const router = useRouter();

  const onSubmit = async (values: any) => {
    if (!values["api_key"]) return toast.error("API Key boş olamaz!");;

    const api_key = values["api_key"];

    // - Yanlış API Key girilmesi veya bağlantı sorunları durumunda, kullanıcıya anlaşılır hata mesajları gösterilmelidir.

    // Check API Key
    const isValid = await weatherServices.checkApiKey(api_key);

    if (!isValid) return toast.error("API Key geçersiz!");

    // cookie'ye api_key'i kaydet
    sessionStorage.setItem("api_key", api_key);

    // Show toast
    toast.success("API Key doğrulandı!");

    // Refresh the page
    router.push("/dashboard");
    router.refresh();
  }

  return (
    <Form name="auth_form" className="home  h-screen flex justify-center items-center" onSubmit={onSubmit}>
      <Flex gap="3">
        <Box>
          <TextField.Input name="api_key" variant="surface" placeholder="API Key" />
        </Box>
        <Box>
          <Button variant="classic" label="Gönder" />
        </Box>
      </Flex>
    </Form>
  );
}
