"use client"

import { weatherServices } from "@services/weather-services";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

interface IApiKeyCheckerLayout {
    children: React.ReactNode;
}

export default function ApiKeyCheckerLayout(props: IApiKeyCheckerLayout) {

    // Destructure
    const { children } = props;

    // Variables
    let api_key: string = "";
    const router = useRouter();

    const checkApiIsValid = async (api_key: string) => {
        const isValid = await weatherServices.checkApiKey(api_key);

        if (!isValid) {
            toast.error("API Key doğrulanamadı!");
            sessionStorage.removeItem("api_key");
            router.push("/api-key");
            router.refresh();
        }

        else if(isValid) {
            sessionStorage.setItem("api_key", api_key);
        }
    }

    if (typeof window !== "undefined") {
        api_key = sessionStorage.getItem("api_key") || "";

        if (api_key !== "")
            checkApiIsValid(api_key);

        else { router.push("/api-key"); router.refresh();}

    }

    return (
        <div>{children}</div>
    )
}
