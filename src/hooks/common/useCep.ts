import { useState, useEffect } from "react";
import useDebounce from "./useDebouncer";

interface CepInfo {
  bairro: string;
  logradouro: string;
  localidade: string;
  uf: string;
  cep: string;
  complemento: string;
}

export default function useCep(cepText: string) {
  const [cep, setCep] = useState<string>("");
  const [cepData, setCepData] = useState<CepInfo | null>(null);
  const [isCepOk, setCepOk] = useState<boolean>(false);
  const [errors, setErrors] = useState<string[]>([]);
  const debouncedText = useDebounce<string>(cepText, 500);

  useEffect(() => {
    if (debouncedText) {
      const { errors } = validateCep(debouncedText);
      setErrors(errors);
      setCepOk(errors.length === 0);
      setCep(debouncedText);
    }
  }, [debouncedText]);

  useEffect(() => {
    if (isCepOk) {
      getCep(cep).then((data) => {
        setCepData(data);
      });
    }
  }, [cep, isCepOk]);

  return {
    cep,
    cepData,
    isCepOk,
    errors,
  };
}

function validateCep(cep: string) {
  const cepRegex = /^\d{5}-\d{3}$/;
  if (!cepRegex.test(cep)) {
    return { errors: ["Cep em formato inválido"] };
  }
  return { errors: [] };
}

async function getCep(cep: string) {
  const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
  const data: CepInfo = await response.json();
  return data;
}
