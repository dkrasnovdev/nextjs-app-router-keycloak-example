import axios from "axios";
import { getSession } from "next-auth/react";

export const siberiana = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SIBERIANA_API_URL,
});

siberiana.interceptors.request.use(async (config) => {
  const session = await getSession();
  config.headers.Authorization = `Bearer ${session?.access_token}`;
  return config;
});

export const putObjects = ({
  bucket,
  formData,
  folder,
}: {
  bucket?: string;
  formData: FormData;
  folder?: string;
}) => {
  return siberiana.post<{ urls: Array<string> }>("/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    params: {
      bucket,
      folder,
    },
  });
};
