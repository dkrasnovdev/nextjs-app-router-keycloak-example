"use client";

import { putObjects } from "@/lib/siberiana";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Upload() {
  const [response, setResponse] = useState<{
    urls: Array<string>;
  } | null>(null);

  const { register, handleSubmit } = useForm<{
    files: FileList;
  }>();

  const onSubmit = handleSubmit(async (data) => {
    const formData = new FormData();

    Array.from(data.files).map((file) => formData.append("file", file));

    const res = await putObjects({ formData }).then((res) => res.data);
    setResponse(res);
  });

  return (
    <form
      onSubmit={onSubmit}
      style={{
        marginBottom: "1rem",
      }}
    >
      <input type="file" {...register("files")} multiple />
      <button type="submit">Загрузить</button>
      {!!response && (
        <pre
          style={{
            marginTop: "1rem",
            marginBottom: "1rem",
          }}
        >
          {JSON.stringify(response, null, 2)}
        </pre>
      )}
    </form>
  );
}
