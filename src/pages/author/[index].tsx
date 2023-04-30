//* Libraries imports
import { useRouter } from "next/router"
import Image from "next/image";

//* Local Imports
import { api } from "pnpm/utils/api";

type Props = {}

export default function Author({ }: Props) {
  const router = useRouter();
  const { index } = router.query;

  if (!index) return (<div>Carregando...</div>);
  if (typeof index !== "string") return (<div>Carregando...</div>);

  const author = api.authors.getAuthor.useQuery(index);

  return (
    <div>
      <h1>{author.data?.name}</h1>
      <p>{author.data?.description}</p>
      <Image
        src={author.data?.image || ""}
        alt="Imagem do autor"
        width={300}
        height={300}
      />
    </div>
  )
}